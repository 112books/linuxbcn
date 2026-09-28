#!/bin/bash
# backup-linuxbcn.sh — Copia de seguretat offsite del servidor de producció.
# Executa'l al teu ordinador (no al servidor). Descarrega fitxers i secrets
# a una carpeta local amb data, i rota les còpies antigues.
#
# Ús:  ./backup-linuxbcn.sh [destí]
# Per defecte: ~/Backups/linuxbcn

set -euo pipefail

SSH_USER="linuxbcn0"
SSH_HOST="vl28359.dinaserver.com"
DEST="${1:-$HOME/Backups/linuxbcn}"
KEEP=7
STAMP=$(date +%Y-%m-%d_%H%M)
OUT="$DEST/$STAMP"

mkdir -p "$OUT"

echo "[backup] origen: $SSH_USER@$SSH_HOST"
echo "[backup] destí:  $OUT"

rsync -az --no-times --no-perms --ignore-errors   --exclude '/formularis'   --exclude '/admin/analytics-cache.json'   "$SSH_USER@$SSH_HOST:www/" "$OUT/www/"

rsync -az --no-times --no-perms --ignore-errors   --exclude '__pycache__' --exclude '*.log' --exclude 'serve.pid'   "$SSH_USER@$SSH_HOST:apps/" "$OUT/apps/"

rsync -az --no-times --no-perms "$SSH_USER@$SSH_HOST:.linuxbcn-secrets.php" "$OUT/" 2>/dev/null || true
rsync -az --no-times --no-perms "$SSH_USER@$SSH_HOST:www/admin/.htpasswd" "$OUT/admin.htpasswd" 2>/dev/null || true

# Rotació: conserva les KEEP còpies més recents
ls -1dt "$DEST"/*/ 2>/dev/null | tail -n +$((KEEP + 1)) | while read -r old; do
  rm -rf "$old"
done

echo "[backup] fet. Còpies conservades: $(ls -1d "$DEST"/*/ 2>/dev/null | wc -l | tr -d ' ')"
echo "[backup] PENDENT: bolcar les bases de dades MySQL (calen credencials de Dinahosting)."
