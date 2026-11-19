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
description: "Arxiu fotogràfic i biogràfic de l'escena del blues de Barcelona: 148 músics, tres idiomes, codi QR al llibre, Hugo i GitHub Pages."
lastmod: "2026-11-19"
draft: false
serveis: ["web-a-mida", "multilingue", "seo"]
image: "40anysblues.png"
---

## Un arxiu viu per a un arxiu en paper

El 6 de novembre de 2026 es va presentar al Centre Cultural Collblanc – La Torrassa
el llibre *40 anys de blues a Barcelona*, de Joan Linux amb textos de Manuel López Poy.

**Encarregat per 112books.eu** — l'editorial de fotografia que en Joan Linux dirigeix.

El web que l'acompanya no és només una fitxa del llibre: és un arxiu fotogràfic i biogràfic
viu de l'escena del blues de Barcelona.

## El repte

Organitzar 148 fitxes de músics, 531 formacions i 296 fotografies en blanc i negre en tres idiomes.
Sense gestor de continguts. Sense dependències externes innecessàries.
Que qualsevol pugui buscar un músic, veure'n la cara, entendre per què Barcelona és una ciutat de blues,
i navegar per les connexions: quin altre músic toca el mateix instrument, quines bandes comparteixen membres,
quins músics van tocar amb quins altres al llarg dels anys.

## El llibre i el web

El llibre s'edita **en català**; el web el complementa en **tres idiomes** (català, castellà i anglès),
perquè l'escena del blues de Barcelona interessa molt més enllà del país. Cada fitxa manté el nom original
dels músics i situa el text en el context local en lloc de traduir-lo literalment.

**Cada fotografia porta la seva data.** L'arxiu no és un conjunt d'imatges soltes: és una cronologia.
Es pot veure quan es va fer cada retrat i creuar-ho amb l'any en què va néixer el músic o amb les
formacions en què tocava.

**Cada exemplar del llibre porta un codi QR** que porta a aquest web. Les visites que arriben per
aquesta via queden registrades a les estadístiques del projecte, i les estadístiques són públiques:
el paper i el web es poden mesurar junts. Quants lectors han volgut saber més, i què han buscat.

## La solució

- **Hugo** com a generador estàtic amb tema propi
- **GitHub Actions + GitHub Pages** per publicar cada `git push`
- **Imatges en WebP amb `srcset`** — les fotografies originals pesen més, però cada pàgina en carrega la versió que li toca
- **Hipervinculació total** — cada músic enllaça amb les seves bandes, els seus companys, els seus instruments i les seves referències musicals (enllaços a Wikipedia i fonts externes)
- **Dades estructurades** (Person, BreadcrumbList, Organization) perquè els cercadors entenguin el contingut
- **Cerca nativa** i navegació per taxonomia: 27 instruments, formacions, anys de naixement, relacionals
- **GoatCounter** per estadístiques respectuoses amb la privacitat

## El resultat

Sobirania total de les dades: el repositori és públic, el web és independent, cap traçament de tercers.
La portada original pesava 3,5 MB; ara pesa 528 KB. Els tres idiomes (català, castellà, anglès) comparteixen
el mateix contingut: els noms es mantenen i els textos se situen en context local, no en traducció literal.

**Reutilització intel·ligent del contingut:** cada músic portava associada una llista de referències externes (músics de referència, músics vius admirats, grups emblemàtics). En lloc d'esborrar-la, s'ha convertit en hipervincles interns i externs: des de la fitxa de qualsevol músic pots arribar als seus mestres, als seus companys de banda, als seus col·laboradors i als seus influents.

**Dinamisme:** cada vegada que es carrega la portada, un músic destacat surt de forma aleatòria, perquè mai es vegi la mateixa cara dues vegades seguides. El web no és estàtic, sinó viu.

**Comunitat:** butlletí i **canal de Telegram** (@40anysbluesbarcelona) per mantenir informats els usuaris de noves incorporacions, presentacions, descobriments i novetats del blues barceloní.

Un model que treballa per a projectes culturals: multilingüe, accessible, ràpid,
sense infraestructura extra, i que transforma la documentació històrica en navegació.

{{< gallery "40anysblues-fitxa.png" "Fitxa de músic: biografia, discografia, formacions" "40anysblues-bands.png" "Grid de formacions navegable per taxonomia" >}}

→ [40anysblues.112books.eu](https://40anysblues.112books.eu)
→ [Estadístiques públiques](https://40anysblues.112books.eu/estadistiques/)
