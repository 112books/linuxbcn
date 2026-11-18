---
title: "Aplicacions web"
seo_title: "Aplicacions web a mida per a col·lectius | LinuxBCN"
subtitle: "Quan el web ha de fer coses, no només explicar-les"
description: "Aplicacions web a mida per gestionar votacions, socis, hores o continguts. Programari lliure, dades a la teva infraestructura."
weight: 3
lastmod: "2026-11-18"
casos: ["taro-photo-app", "votacio-public", "konsento", "gestor-hores"]
faq:
  - q: "No n'hi ha prou amb un full de càlcul o una eina del núvol?"
    a: >-
      Sovint sí, i és el primer que mirem. Si un full de càlcul compartit, un formulari o una
      eina existent resol el problema, no et venem una aplicació. Construïm quan l'eina no hi és,
      quan les dades no han de sortir de la teva infraestructura o quan el procés és prou
      específic perquè cap producte genèric l'encaixi.
  - q: "On viuen les dades?"
    a: >-
      Al servidor que decidim amb tu. No passen per serveis de tercers que les puguin explotar
      i no cal obrir cap compte extern per fer-la servir.
  - q: "Qui pot fer-la servir i qui la manté?"
    a: >-
      Les persones que tu decideixis, amb permisos per rols si cal. El codi és lliure quan és
      una eina pròpia, i la documentació queda a les teves mans.
  - q: "Quant triga?"
    a: >-
      Depèn de si hi ha una sola funció o un sistema amb rols, historial i exportacions.
      Comencem per la versió mínima que resol el problema i creixem a partir de l'ús real.
  - q: "I si més endavant volem una app mòbil?"
    a: >-
      Primer preguntem si cal. Una aplicació web que funciona bé al mòbil sovint és suficient i
      s'actualitza sola; una app nativa és una feina i un manteniment diferents.
howto:
  name: "Com construïm una aplicació web"
  description: "El procés de LinuxBCN per convertir un procés manual en una aplicació web útil: entendre, definir, construir i mesurar."
  steps:
    - name: "Entendre el procés real"
      text: "Observem com es fa la feina ara, amb paper, fulls de càlcul o missatges. La aplicació ha de reproduir el procés que funciona, no el que ens agradaria que fos."
    - name: "Definir la versió mínima"
      text: "Triem la funció que resol més feina i deixem la resta per després. Una eina petita que s'usa val més que un sistema gran que ningú acaba d'adoptar."
    - name: "Construir i provar"
      text: "Programem amb tecnologies lliures i la provem amb les persones que l'han de fer servir, amb dades reals del dia a dia."
    - name: "Mesurar i créixer"
      text: "Al cap d'unes setmanes mirem què s'usa i què no. El que no s'usa s'elimina; el que falta s'afegeix amb criteri."
---

## Quan un web no n'hi ha prou

Un web informa. Una aplicació **fa**. La diferència es nota quan la feina s'ha de fer cada setmana i depèn d'algú que en sap: llistats de socis, votacions, reserves, seguiment d'hores, inscripcions, inventaris, permisos.

Si el procés existeix i viu en papers, en un full de càlcul que només entén una persona o en un grup de missatges, hi ha una aplicació a fer.

## Què construïm

- **Gestió d'associacions i col·lectius**: socis, quotes, inscripcions, autopublicació de continguts.
- **Votacions i decisions**: vot anònim, recompte automàtic, actes i historial.
- **Concursos i jurats**: inscripcions, obres, vot del públic limitat a la sala i vot del jurat.
- **Temps i feines**: seguiment d'hores per projecte, informes, facturació a partir de les hores.
- **Continguts i editorial**: plataformes per publicar amb permisos i fluxos senzills.

## Quan no la fem

- Si ja existeix una eina lliure que ho fa i es pot adaptar, la fem servir.
- Si el problema és de comunicació, no de programari, t'ho diem.
- Si la decisió és automatitzar un procés que ningú ha definit encara, primer el definim.

## Com ho fem

### 1. Entendre el procés real

Observem com es fa la feina ara, amb paper, fulls de càlcul o missatges. L'aplicació ha de reproduir el procés que funciona, no el que ens agradaria que fos.

### 2. Definir la versió mínima

Triem la funció que resol més feina i deixem la resta per després. Una eina petita que s'usa val més que un sistema gran que ningú acaba d'adoptar.

### 3. Construir i provar

Programem amb tecnologies lliures i la provem amb les persones que l'han de fer servir, amb dades reals del dia a dia.

### 4. Mesurar i créixer

Al cap d'unes setmanes mirem què s'usa i què no. El que no s'usa s'elimina; el que falta s'afegeix amb criteri.

## Decisions que prenem de sèrie

- **Sense comptes de tercers**: no cal registrar-se enlloc per fer servir l'aplicació.
- **Dades minimitzades**: es recull només el que fa falta per a la funció. Si una votació pot ser anònima, ho és.
- **Accessibilitat**: es pot fer servir amb teclat i amb lector de pantalla.
- **Exportació**: les dades són teves i es poden treure en un format obert.

Si el que passa és que el WordPress se t'ha quedat gran, abans de programar res mira [com migrem un WordPress a una web estàtica](/serveis/migracio-wordpress/).

## Un exemple

A **Taro Photo App**, una associació fotogràfica gestiona socis, concursos i publicació de continguts amb un sistema propi, amb votació dins la sala i sense dependre de cap plataforma tancada. És programari lliure: si un dia volen canviar de proveïdor, el codi se'n va amb ells.

{{< faq >}}

## Parlem del procés que vols resoldre

Explica'ns com es fa la feina ara. Si amb una eina existent n'hi ha prou, t'ho direm abans de pressupostar res.

→ [Contacte](/contacte/) · [Com treballem](/com-treballem/)
