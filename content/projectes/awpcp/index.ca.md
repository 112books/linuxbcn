---
title: "A.W.P.C.P."
slug: "awpcp"
weight: 10
year: 2024
client: "Around World Pinhole Crazy People"
sector: "fotografia"
description: "A.W.P.C.P. — web per a Around World Pinhole Crazy People. Comunitat internacional de fotografia estenopeica. Allotjat a GitHub Pages. LinuxBCN."
lastmod: "2026-06-24"
draft: false
image: "awpcp.png"
---

## 14 edicions del Worldwide Pinhole Photography Day a Barcelona

A.W.P.C.P. és l'organització del Worldwide Pinhole Photography Day
a Barcelona des del 2011. Cada últim diumenge d'abril, fotògrafs
de tot el món disparen una càmera estenopeica al mateix moment.
Barcelona hi participa des de la primera edició.

El web vivia a un servidor WordPress amb catorze anys de contingut
acumulat. El 2024 el migrem a Hugo + GitHub Pages: sense servidor,
sense base de dades, amb tot el contingut versionat a Git.

---

## Stack tècnic

**Hugo 0.159** — 229 pàgines generades en menys de 5 segons.  
**GitHub Pages** — CDN global, deploy automàtic.  
**GitHub Actions** — build i deploy en ~30 segons per push.  
**GoatCounter** — analítica lleugera (3 KB), sense cookies, amb [dashboard propi](/projectes/goatcounter-dashboard/).

3 idiomes · Català per defecte (sense prefix) · Anglès `/en/` · Castellà `/es/`

---

## La migració

14 edicions. 105 fotografies de càmeres pinholes de participants.
Cartells originals de 2011 a 2025. Tot exportat del WordPress original,
reescrit en Markdown amb frontmatter Hugo.

Les imatges es van recuperar directament del servidor WP antic
via `curl`. Les URLs antigues mantenen compatibilitat amb redirects 301.

---

## Arquitectura

```
content/
  editions/
    2011/ … 2026/        # Una carpeta per edició
      cameras/           # Subsecció de càmeres
        bonita/          # Cada càmera: leaf bundle multilingüe
      _index.{ca,en,es}.md
  about/  contact/  links/
```

Permalinks personalitzats per a edicions (`/:slug/`).
Fallback automàtic a imatges de càmeres si no hi ha cartell.

---

## Funcionalitats

**Compte enrere** fins a la propera edició — calculat en JS mínim,
sense cap dependència externa.

**Menú mòbil** — barra de pestanyes inferior amb icones SVG,
visible només ≤640px. Selector d'idioma sempre visible al header.

**SEO tècnic** — JSON-LD Organization schema, Open Graph,
Twitter Cards, `sitemap.xml`, `robots.txt`, `noindex` a la 404.

---

## Portada

{{< gallery "awpcp-portada-desktop.png" "awpcp-portada-mobil.png" >}}

---

## Edicions

{{< gallery "awpcp-edicions-desktop.png" "awpcp-edicions-mobil.png" >}}

---

## Enllaços i contacte

{{< gallery "awpcp-enllacos-desktop.png" "awpcp-contacte-desktop.png" "awpcp-contacte-mobil.png" >}}

---

→ [awpcp.org](https://awpcp.org)
