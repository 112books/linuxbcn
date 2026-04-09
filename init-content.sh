#!/bin/bash

dirs=(
  content/com-treballem
  content/solucions
  content/projectes
  content/linuxbcn
  content/contacte
  content/clients
)

for d in "${dirs[@]}"; do
  mkdir -p "$d"
done

files=(
  content/_index.ca.md
  content/_index.en.md
  content/com-treballem/_index.ca.md
  content/com-treballem/_index.en.md
  content/solucions/_index.ca.md
  content/solucions/_index.en.md
  content/solucions/musics.ca.md
  content/solucions/musics.en.md
  content/solucions/collectius.ca.md
  content/solucions/collectius.en.md
  content/solucions/microempreses.ca.md
  content/solucions/microempreses.en.md
  content/projectes/_index.ca.md
  content/projectes/_index.en.md
  content/projectes/nau-bostik.ca.md
  content/linuxbcn/_index.ca.md
  content/linuxbcn/_index.en.md
  content/contacte/_index.ca.md
  content/contacte/_index.en.md
  content/clients/infraestructura.ca.md
)

for f in "${files[@]}"; do
  touch "$f"
done

echo "Estructura creada."
