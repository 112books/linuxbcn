---
title: "112 Revelats"
slug: "112revelats"
weight: 9
year: 2025
client: "112Books"
sector: "fotografia"
description: "112 Revelats — projecte de fotografia analògica. Web lleuger allotjat a GitHub Pages, sense dependències. LinuxBCN."
lastmod: "2026-06-24"
draft: false
image: "112revelats-screenshot.png"
---

## Una plataforma per a noves veus de la fotografia

112 Revelats és un projecte de l'editorial 112Books
per donar visibilitat a fotògrafs emergents a través
del format del fotollibre col·lectiu.

Dues convocatòries anuals. Cada edició, un grup d'autors
publica conjuntament un fotollibre digital. Si el projecte
arrela, també en paper.

La web ha migrat de WordPress a Hugo. Més lleugera,
més ràpida i totalment autogestionada via Git.

---

## Stack tècnic

**Hugo extended** — processament Sass natiu, sense dependències runtime.  
**GitHub Pages** — CDN global, deploy automàtic.  
**GitHub Actions** — build i deploy automàtic en ~20 segons.  
**GoatCounter** — analítica sense cookies, respectuosa amb el RGPD, amb [dashboard propi](/projectes/goatcounter-dashboard/).  
**Formspree** — formularis d'inscripció sense backend propi.

3 idiomes · Català per defecte · Castellà · Anglès

---

## Arquitectura

Estructura plana sense taxonomies: cada convocatòria és una pàgina
independent amb contingut i formulari d'inscripció propis.
El dossier de premsa s'arxiva en PDF accessible directament des
del menú principal.

Cap base de dades. Cap plugin. Cap superfície d'atac servidor.

---

## Portada

{{< gallery "112revelats-portada-desktop.png" "112revelats-portada-mobil.png" >}}

---

## Els reptes

{{< gallery "112revelats-reptes-desktop.png" "112revelats-reptes-mobil.png" >}}

---

## FAQ

{{< gallery "112revelats-faq-desktop.png" "112revelats-faq-mobil.png" >}}

---

→ [112revelats.112books.eu](https://112revelats.112books.eu)
