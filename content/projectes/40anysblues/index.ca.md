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

## Un arxiu viu per a un arxiu en paper

El 6 de novembre de 2026 es va presentar al Centre Cultural Collblanc – La Torrassa
el llibre *40 anys de blues a Barcelona*, de Joan Linux amb textos de Manuel López Poy.

**Encarregat per 112books.eu** — l'editorial de fotografia que Joan dirige.

El web que l'acompanya no és només una fitxa del llibre: és un arxiu fotogràfic i biogràfic
viu de l'escena del blues barcelonina.

---

## El repte

Organitzar 148 fitxes de músics, 531 formacions i 296 fotografies en blanc i negre en tres idiomes.
Sense gestor de continguts. Sense dependències externes innecessàries.
Que qualsevol pugui buscar un músic, veure'n la cara, entendre per què Barcelona és una ciutat de blues,
i navegar per les connexions: quin altre músic toca el mateix instrument, quines bandes comparteixen membres,
quins músics van tocar amb quins altres al llarg dels anys.

---

## La solució

- **Hugo** com a generador estàtic amb tema propi
- **GitHub Actions + GitHub Pages** per publicar cada `git push`
- **Imatges en WebP amb `srcset`** — les fotografies originals pesen més, però cada pàgina en carrega la versió que li toca
- **Hipervinculació total** — cada músic enllaça amb les seves bandes, els seus companyons, els seus instruments i les seves references musicals (links a Wikipedia i fonts externes)
- **Dades estructurades** (Person, BreadcrumbList, Organization) perquè els cercadors entenguin el contingut
- **Búsqueda nativa** i navegació per taxonomia: 27 instruments, formacions, anys de naixement, relacionals
- **GoatCounter** per estadístiques respectuoses amb la privacitat

---

## El resultat

Sobirania total de les dades: el repositori és públic, el web és independent, cap tracament de tercers.
La portada original pesava 3,5 MB; ara pesa 528 KB. Els tres idiomes (català, castellà, anglès) comparten
el mateix contingut: els noms es mantenen, els textos se situen en context local, no en traducció literal.

**Reutilització intelligent del contingut:** cada música portava associada una llista de referències externes (músics de referència, músics vius admirats, grups emblemàtics). En lloc d'esborrar-la, s'ha convertit en hipervincles internos i externs: des de la fitxa de qualsevol músic pots arribar als seus mestres, als seus companys de banda, als seus col·laboradors i als seus influents.

**Dinamisme:** cada vegada que es carrega la portada, un músic destacat surt de forma aleatòria, perquè mai es vegi la mateixa cara dues vegades seguides. El web no és estàtic, sinó viu.

**Comunitat:** butlletí i **canal de Telegram** (@40anysbluesbarcelona) per mantenir informats els usuaris de noves incorporacions, presentacions, descobriments i novetats del blues barcelonina.

Un model que treballa per a projectes culturals: multillengua, accessible, ràpid,
sense infraestructura extra, i que transforma la documentació històrica en navegació.

{{< gallery "40anysblues-fitxa.png" "Fitxa de músic: biografia, discografia, formacions" "40anysblues-bands.png" "Grid de formacions navegable per taxonomia" >}}

→ [40anysblues.112books.eu](https://40anysblues.112books.eu)
→ [Estadístiques públiques](https://40anysblues.112books.eu/estadistiques/)
