#!/usr/bin/env bash
# Crea ~/.linuxbcn-secrets.php al servidor de producció (fora de www/).
# El llegeixen www/v/index.php (comptador first-party) i, més endavant,
# www/admin/fetch-analytics.php. Els secrets no es desen mai al repo.
#
# Ús (al teu terminal, no dins de Claude):  ./crear-secrets.sh
set -euo pipefail

HOST="linuxbcn0@vl28359.dinaserver.com"

read -rsp "Token nou de GoatCounter: " TOKEN; echo
read -rsp "Contrasenya per a /v/index.php?diag= : " DIAG; echo

[[ "$TOKEN" =~ ^[A-Za-z0-9]+$ ]] || { echo "✗ El token té caràcters inesperats"; exit 1; }
[[ -n "$DIAG" && "$DIAG" != *"'"* && "$DIAG" != *"\\"* ]] || { echo "✗ Contrasenya buida o amb ' o \\"; exit 1; }

printf "<?php\ndefine('GC_TOKEN', '%s');\ndefine('DIAG_PASS', '%s');\n" "$TOKEN" "$DIAG" \
  | ssh "$HOST" 'umask 077; cat > ~/.linuxbcn-secrets.php && chmod 600 ~/.linuxbcn-secrets.php && ls -l ~/.linuxbcn-secrets.php'

echo "✓ Secrets desats a ~/.linuxbcn-secrets.php"
