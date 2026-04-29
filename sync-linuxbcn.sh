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

print() { echo -e "${BLUE}[linuxbcn]${NC} $1"; }
ok()    { echo -e "${GREEN}[✓]${NC} $1"; }
err()   { echo -e "${RED}[✗]${NC} $1"; }

git rev-parse --git-dir > /dev/null 2>&1 || {
  err "No és un repo git"
  exit 1
}

status() {
  print "Estat del repo"
  git status -s
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
  ok "Sync complet"
}

build_local() {
  print "Build local..."
  hugo --minify || exit 1
  ok "Build correcte"
}

build_staging() {
  print "Build staging..."
  hugo --minify --environment staging || exit 1
  ok "Build staging correcte"
}

build_prod() {
  print "Build producció..."
  hugo --minify --environment production || exit 1
  ok "Build producció correcte"
}

deploy_staging() {
  sync
  build_staging
  print "Publicant a GitHub Pages..."
  git subtree push --prefix $BUILD_DIR $REMOTE gh-pages || exit 1
  ok "Deploy staging fet → https://112books.github.io/linuxbcn/"
}

deploy_prod() {
  sync
  build_prod
  print "Pujant a Dinahost via SSH..."
  rsync -avz --delete --no-times --no-perms --ignore-errors \
    --exclude='cuinetes' \
    --exclude='.well-known' \
    --exclude='ssl' \
    --exclude='.php.ini' \
    --exclude='wptest' \
    --exclude='linuxbcn' \
    --exclude='favb' \
    $BUILD_DIR/ $SSH_USER@$SSH_HOST:$SSH_PATH
  ok "Deploy producció fet → https://linuxbcn.com/"
}

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━"
echo " LinuxBCN — Deploy"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "1) Status"
echo "2) Sync (git)"
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