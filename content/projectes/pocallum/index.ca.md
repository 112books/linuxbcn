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
description: "Web de Pocallum, fotografia cultural de música en directe, teatre i dansa. De WordPress a una web estàtica amb cerca interna, multidioma i analítica pròpia."
lastmod: "2026-11-19"
draft: false
serveis: ["web-a-mida", "migracio-wordpress"]
image: "pocallum.png"
---

## Fotografia cultural amb caràcter propi

Pocallum és el servei fotogràfic de Joan Linux Martínez: **música en directe, teatre, dansa i arts escèniques** a Barcelona, des del 2010. Una feina d'autor, amb una identitat visual molt definida i una manera de treballar poc convencional.

El web havia de fer una cosa molt concreta: que qui busca un fotògraf per a un concert o un espectacle entengui en deu segons quin és l'ull que hi ha darrere.

## El problema

El web vivia a WordPress: pesat, amb més maquinària de la que calia per a un portfolio i un blog que no s'actualitzaven al mateix ritme. Cada foto nova demanava passar per un panell amb vint opcions, i el resultat trigava a carregar justament en el moment en què algú decideix si et truca o no.

## Què hem construït

L'any **2026** vam migrar tot el web a una base estàtica, conservant les adreces:

- **152 fotografies** organitzades per concerts, festivals i espectacles.
- **27 festivals** i **11 notícies** d'actualitat.
- **Cercador intern** que funciona sense servidor (índex generat al build).
- **Català i anglès**, amb els dos idiomes sencers.
- **Dashboard d'analítica propi** al mateix web, sense cookies ni tercers.
- Tot el pes de la pàgina, el mínim: sense base de dades, sense plugins, sense scripts de tercers.

## El resultat

El web carrega a l'instant perquè són fitxers ja construïts, no pàgines muntades a cada visita. I el més important per a qui l'ha de mantenir: publicar una foto nova és pujar un fitxer i fer un commit, no navegar per un panell.

El detall tècnic de la migració és a [la fitxa del projecte](/projectes/pocallum-estatic/); el blog, que va tenir el seu propi camí de WordPress a Hugo, és a [Blog de Pocallum](/projectes/blog-pocallum/).

## Tecnologia

Hugo amb CSS i JavaScript propis (sense frameworks), cerca estàtica indexada al build, allotjament a GitHub Pages amb desplegament automàtic i analítica GoatCounter.

→ [pocallum.cat](https://pocallum.cat) · [Migrar de WordPress a una web estàtica](/serveis/migracio-wordpress/)
