#!/bin/bash

# sync-linuxbcn.sh — Git + Hugo + Deploy bàsic

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

BRANCH="main"
REMOTE="origin"
BUILD_DIR="public"

print() { echo -e "${BLUE}[linuxbcn]${NC} $1"; }
ok() { echo -e "${GREEN}[✓]${NC} $1"; }
err() { echo -e "${RED}[✗]${NC} $1"; }

# Check repo
git rev-parse --git-dir > /dev/null 2>&1 || {
  err "No és un repo git"
  exit 1
}

# Status
status() {
  print "Estat del repo"
  git status -s
}

# Sync (pull + commit + push)
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

# Build Hugo
build() {
  print "Build Hugo..."
  hugo --minify || exit 1
  ok "Build correcte"
}

# Deploy GitHub Pages (simple)
deploy() {
  sync
  build
  print "Publicant a gh-pages..."
  git subtree push --prefix $BUILD_DIR $REMOTE gh-pages || exit 1
  ok "Deploy fet"
}

# Menu
echo ""
echo "1) Status"
echo "2) Sync"
echo "3) Build"
echo "4) Deploy (gh-pages)"
echo "0) Sortir"
echo ""

read -p "Opció: " opt

case $opt in
  1) status ;;
  2) sync ;;
  3) build ;;
  4) deploy ;;
  0) exit ;;
  *) err "Opció no vàlida" ;;
esac