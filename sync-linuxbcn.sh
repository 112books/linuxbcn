#!/bin/bash

# sync-linuxbcn.sh — Git + Hugo + Deploy

RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

BRANCH="main"
REMOTE="origin"
BUILD_DIR="public"
SSH_USER="linuxbcn0"
SSH_HOST="vl28359.dinaserver.com"
SSH_PATH="/home/linuxbcn0/www/"

# Repositori privat de clients (112books/linuxbcn-clients): clon independent, DINS
# d'aquest repo (privat/), exclòs de git per .git/info/exclude. Es pot sobreescriure
# amb la variable d'entorn PRIVATE_DIR.
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PRIVATE_DIR="${PRIVATE_DIR:-$SCRIPT_DIR/privat}"

print() { echo -e "${BLUE}[linuxbcn]${NC} $1"; }
ok()    { echo -e "${GREEN}[✓]${NC} $1"; }
err()   { echo -e "${RED}[✗]${NC} $1"; }

git rev-parse --git-dir > /dev/null 2>&1 || {
  err "No és un repo git"
  exit 1
}

status() {
  print "Estat del repo web"
  git status -s
  if [[ -d "$PRIVATE_DIR/.git" ]]; then
    print "Estat del repo privat ($PRIVATE_DIR)"
    git -C "$PRIVATE_DIR" status -s
  fi
}

sync() {
  print "Sincronitzant..."
  if [[ -n $(git status -s) ]]; then
    print "Canvis detectats"
    git status -s
    read -p "Missatge del commit: " msg
    git add .
    git commit -m "$msg"
  fi
  git pull $REMOTE $BRANCH --rebase || exit 1
  git push $REMOTE $BRANCH || exit 1
  sync_private || exit 1
  ok "Sync complet (web + privat)"
}

# Sincronitza el repositori privat de clients (112books/linuxbcn-clients), que viu
# fora d'aquest repo. Fa servir el seu propi scripts/sync.sh (pull --rebase, commit,
# push; no força mai res). Si no hi ha còpia local, només ho avisa.
sync_private() {
  local msg
  if [[ ! -d "$PRIVATE_DIR/.git" ]]; then
    print "Sense còpia local del repo privat ($PRIVATE_DIR) — res a sincronitzar"
    return 0
  fi
  if [[ ! -f "$PRIVATE_DIR/scripts/sync.sh" ]]; then
    err "No trobo $PRIVATE_DIR/scripts/sync.sh"
    return 1
  fi
  msg=""
  if [[ -n "$(git -C "$PRIVATE_DIR" status --porcelain)" ]]; then
    print "Canvis a la part privada"
    git -C "$PRIVATE_DIR" status -s
    read -p "Missatge del commit (privat) [Enter = «docs: actualitza seguiment»]: " msg
  fi
  print "Sincronitzant la part privada..."
  ( cd "$PRIVATE_DIR" && bash scripts/sync.sh "$msg" ) || {
    err "La sincronització del repo privat ha fallat"
    return 1
  }
  ok "Part privada sincronitzada"
}

build_local() {
  print "Build local..."
  hugo --minify --cleanDestinationDir || exit 1
  ok "Build correcte"
}

build_staging() {
  print "Build staging..."
  hugo --minify --cleanDestinationDir --environment staging || exit 1
  ok "Build staging correcte"
}

build_prod() {
  print "Build producció..."
  hugo --minify --cleanDestinationDir --environment production || exit 1
  ok "Build producció correcte"
}

# Publica el contingut de BUILD_DIR a la branca gh-pages.
# public/ és al .gitignore i no forma part de l'historial, així que
# "git subtree push --prefix public" sempre falla ("'public' does not exist").
# Es construeix un commit amb l'arbre del build (índex temporal) i es puja com a
# fast-forward damunt d'origin/gh-pages. No força mai: si no pot ser fast-forward,
# s'atura.
publish_gh_pages() {
  local build idx tree parent commit msg

  build="$(cd "$BUILD_DIR" 2>/dev/null && pwd)" || {
    err "No existeix $BUILD_DIR (cal fer el build abans)"
    return 1
  }

  idx="$(mktemp "${TMPDIR:-/tmp}/lbcn-gh-pages-idx.XXXXXX")" || return 1
  rm -f "$idx"

  parent=""
  if git fetch --quiet "$REMOTE" gh-pages 2>/dev/null; then
    parent="$(git rev-parse --verify --quiet "refs/remotes/$REMOTE/gh-pages")"
  fi

  tree="$(
    cd "$build" || exit 1
    GIT_INDEX_FILE="$idx" GIT_WORK_TREE="$build" \
      git add -f -A . ':(exclude).DS_Store' > /dev/null 2>&1 || exit 1
    GIT_INDEX_FILE="$idx" git write-tree
  )" || {
    rm -f "$idx"
    err "No s'ha pogut construir l'arbre del build"
    return 1
  }
  rm -f "$idx"

  # Si l'arrel de l'arbre no té index.html, el build està malmès: no es publica.
  if ! git ls-tree --name-only "$tree" | grep -qx 'index.html'; then
    err "El build no té index.html a l'arrel de $BUILD_DIR"
    return 1
  fi

  msg="deploy: staging build $(date '+%Y-%m-%d %H:%M')"
  if [[ -n "$parent" ]]; then
    commit="$(printf '%s\n' "$msg" | git commit-tree "$tree" -p "$parent")" || return 1
  else
    commit="$(printf '%s\n' "$msg" | git commit-tree "$tree")" || return 1
  fi

  if ! git push --quiet "$REMOTE" "$commit:refs/heads/gh-pages"; then
    err "Push a gh-pages rebutjat (branca canviada mentrestant?). Torna-ho a provar."
    return 1
  fi
  print "gh-pages → $(git rev-parse --short "$commit")"
}

deploy_staging() {
  sync
  build_staging
  print "Publicant a GitHub Pages..."
  publish_gh_pages || exit 1
  ok "Deploy staging fet → https://112books.github.io/linuxbcn/"
}

purge_cache() {
  print "Purjant la caché del proxy..."
  ssh "$SSH_USER@$SSH_HOST" 'for lang in ca en; do curl -s "https://linuxbcn.com/$lang/sitemap.xml" | grep -o "<loc>[^<]*" | sed "s|<loc>||" | while read -r u; do curl -s -o /dev/null -X PURGE "$u"; done; done' || true
  ok "Caché purjada"
}

indexnow() {
  print "Notificant les URLs a IndexNow (Bing, Yandex, DuckDuckGo...)..."
  { for lang in ca en; do curl -s "https://linuxbcn.com/$lang/sitemap.xml"; done; } \
    | grep -o '<loc>[^<]*' | sed 's|<loc>||' | sort -u > /tmp/lbcn-indexnow-urls.txt
  python3 - <<'PY'
import json, urllib.request
key = "ae5b2e9e405343b5b21fa81ad8b4b547"
urls = [l.strip() for l in open("/tmp/lbcn-indexnow-urls.txt") if l.strip()]
data = json.dumps({
    "host": "linuxbcn.com",
    "key": key,
    "keyLocation": "https://linuxbcn.com/%s.txt" % key,
    "urlList": urls,
}).encode("utf-8")
req = urllib.request.Request("https://api.indexnow.org/indexnow", data=data,
                             headers={"Content-Type": "application/json; charset=utf-8"})
try:
    print("IndexNow HTTP %s (%d URLs)" % (urllib.request.urlopen(req, timeout=30).status, len(urls)))
except Exception as e:
    print("IndexNow error:", e)
PY
  ok "IndexNow fet"
}

deploy_prod() {
  sync
  build_prod
  print "Pujant a Dinahost via SSH..."
  rsync -rlz --no-times --no-perms --ignore-errors \
    --exclude='.git' \
    --exclude='/formularis' \
    --exclude='/apps/taro' \
    --exclude='/admin/analytics-cache.json' \
    $BUILD_DIR/ $SSH_USER@$SSH_HOST:$SSH_PATH
  # Assegura permisos llegibles per Apache (umask del servidor crea fitxers 600)
  ssh "$SSH_USER@$SSH_HOST" 'find ~/www -mindepth 1 -type f -not -perm -o+r -exec chmod 644 {} + 2>/dev/null; find ~/www -mindepth 1 -type d -not -perm -o+x -exec chmod 755 {} + 2>/dev/null' || true
  purge_cache
  indexnow
  ok "Deploy producció fet → https://linuxbcn.com/"
}

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━"
echo " LinuxBCN — Deploy"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "1) Status"
echo "2) Sync (web + privat)"
echo "3) Build local"
echo "4) Deploy staging (GitHub Pages)"
echo "5) Deploy producció (Dinahost SSH)"
echo "0) Sortir"
echo ""

read -p "Opció: " opt

case $opt in
  1) status ;;
  2) sync ;;
  3) build_local ;;
  4) deploy_staging ;;
  5) deploy_prod ;;
  0) exit ;;
  *) err "Opció no vàlida" ;;
esac