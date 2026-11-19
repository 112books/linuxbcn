---
title: "Pocallum"
seo_title: "Pocallum: web per a agència fotogràfica cultural | LinuxBCN"
slug: "pocallum"
weight: 13
year: 2025
date: 2025-01-01
client: "agència fotogràfica"
sector: "fotografia"
perfils: ["microempreses"]
description: "Web de Pocallum, fotografia cultural de música en directe, teatre i dansa: reestructuració i redisseny primer, i migració a Hugo després."
lastmod: "2026-11-19"
draft: false
serveis: ["web-a-mida", "migracio-wordpress"]
image: "pocallum.png"
---

## Fotografia cultural amb caràcter propi

Pocallum és el servei fotogràfic de Joan Linux Martínez: **música en directe, teatre, dansa i arts escèniques** a Barcelona, des del 2010. Una feina d'autor, amb una identitat visual molt definida i una manera de treballar poc convencional.

El web havia de fer una cosa molt concreta: que qui busca un fotògraf per a un concert o un espectacle entengui en deu segons quin és l'ull que hi ha darrere.

## Primer: reestructurar i redissenyar

El web havia crescut per acumulació: seccions que s'havien afegit amb els anys, un portfolio sense ordre clar i una portada que no explicava el que Pocallum fa de debò.

En la primera fase vam **reestructurar i redissenyar el web** —sobre WordPress— perquè el contingut tingués jerarquia: el portfolio organitzat per concerts, festivals i espectacles; els serveis explicats; i un disseny que deixés parlar les fotografies, que és el que ven.

## Després: el canvi a Hugo (2026)

Amb el contingut ja ordenat, el pas següent era treure pes. L'any **2026** vam migrar el web a una base estàtica, conservant les adreces:

- **152 fotografies** organitzades per concerts, festivals i espectacles.
- **27 festivals** i **11 notícies**.
- **Cercador intern** que funciona sense servidor (índex generat al build).
- **Català i anglès**, amb els dos idiomes sencers.
- **Dashboard d'analítica propi** dins del mateix web, sense cookies ni tercers.
- Cap base de dades, cap plugin i cap script de tercers.

## El resultat

Dues fases, un web. Primer va canviar el que s'explicava i com; després, la maquinària que ho serveix. L'ordre importa: si haguéssim migrat sense reestructurar, el web estàtic hauria estat igual de confús, només més ràpid.

El detall tècnic de la migració és a [la fitxa del projecte](/projectes/pocallum-estatic/); el blog, que va tenir el seu propi camí de WordPress a Hugo, és a [Blog de Pocallum](/projectes/blog-pocallum/).

## Tecnologia

Hugo amb CSS i JavaScript propis (sense frameworks), cerca estàtica indexada al build, allotjament a GitHub Pages amb desplegament automàtic i analítica GoatCounter.

→ [pocallum.cat](https://pocallum.cat) · [Migrar de WordPress a una web estàtica](/serveis/migracio-wordpress/)
