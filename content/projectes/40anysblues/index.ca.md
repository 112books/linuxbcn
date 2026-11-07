---
title: "40 anys de blues a Barcelona"
seo_title: "40 anys de blues a Barcelona: arxiu web en tres idiomes | LinuxBCN"
slug: "40anysblues"
weight: 10
year: 2026
date: 2026-11-06
client: "projecte propi (112books)"
sector: "cultura"
perfils: ["collectius"]
description: "Arxiu fotogràfic i biogràfic de l'escena del blues barcelonina: 148 músics, tres idiomes, Hugo i GitHub Pages."
lastmod: "2026-11-07"
draft: false
serveis: ["web-estatica", "multillengua", "seo"]
image: "40anysblues.png"
---

## Un arxiu, no només una fitxa de llibre

El 6 de novembre de 2026 es va presentar al Centre Cultural Collblanc – La Torrassa
el llibre *40 anys de blues a Barcelona*, de Joan Linux amb textos de Manuel López Poy.

El web que l'acompanya no és només una fitxa del llibre: és un arxiu fotogràfic i biogràfic
de l'escena del blues barcelonina.

---

## El repte

Organitzar 148 fitxes de músics, 531 formacions i 296 fotografies en blanc i negre en tres idiomes.
Sense gestor de continguts. Sense dependències externes innecessàries.
Que qualsevol pugui buscar un músic, veure'n la cara i entendre per què Barcelona és una ciutat de blues.

---

## La solució

- **Hugo** com a generador estàtic amb tema propi
- **GitHub Actions + GitHub Pages** per publicar cada `git push`
- **Imatges en WebP amb `srcset`** — les fotografies originals pesen més, però cada pàgina en carrega la versió que li toca
- **Dades estructurades** (Person, BreadcrumbList, Organization) perquè els cercadors entenguin el contingut
- **Búsqueda nativa** i navegació per taxonomia: 27 instruments, formacions, anys de naixement
- **GoatCounter** per estadístiques respectuoses amb la privacitat

---

## El resultat

Sobirania total de les dades: el repositori és públic, el web és independent, cap tracament de tercers.
La portada original pesava 3,5 MB; ara pesa 528 KB. Els tres idiomes (català, castellà, anglès) comparten
el mateix contingut: els noms es mantenen, els textos se situen en context local, no en traducció literal.

Un model que treballa per a projectes culturals: multillengua, accessible, ràpid,
sense infraestructura extra.

{{< gallery "40anysblues-fitxa.png" "Fitxa de músic: biografia, discografia, formacions" "40anysblues-bands.png" "Grid de formacions navegable per taxonomia" >}}

→ [40anysblues.112books.eu](https://40anysblues.112books.eu)
→ [Estadístiques públiques](https://40anysblues.112books.eu/estadistiques/)
