---
title: "Pocallum — Fotografia cultural amb presència digital renovada"
slug: "pocallum-estatic"
weight: 2
year: 2026
client: "Pocallum / Joan Linux Martínez"
sector: "fotografia"
featured: true
draft: false
image: "pocallum-home-04.png"
---

Joan Linux Martínez porta des del 2010 fotografiant jazz, blues, teatre, flamenc i arts escèniques a Barcelona. Durant anys, el seu web vivia a WordPress. L'any 2026, ho migrem tot a Hugo i GitHub Pages. Això és el que hem construït i per què.

---

## El projecte

[pocallum.cat](https://pocallum.cat) és el web professional de Pocallum, servei fotogràfic cultural especialitzat en música en directe, teatre i dansa. El web inclou 152 fotografies, 27 festivals, 11 notícies, pàgines de serveis i contacte, cercador intern estàtic i dashboard d'analítiques propi. Tot en català i anglès.

---

## Stack tècnic

**Hugo 0.159** — generador estàtic. Ràpid, robust, zero dependències runtime.  
**GitHub Pages** — CDN global, deploy automàtic, 0€/mes.  
**Vanilla CSS** — custom properties pures, sense cap framework.  
**Vanilla JS** (~300 línies) — galeria, lightbox, scroll i cerca.  
**Pagefind** — cerca indexada al build, funciona offline.  
**GoatCounter** — analítica sense cookies, GDPR sense esforç.  
**GitHub Actions** — build + Pagefind + deploy en menys de 2 minuts.

Cap base de dades. Cap servidor. Cap plugin. Cap cookie de seguiment.

---

## La portada que mai es repeteix

La galeria de portada combina shuffle i mosaic de mides variables — cada visita genera un layout únic. El grid CSS té 6 columnes amb `grid-auto-flow: dense`, i el JS assigna aleatòriament 5 mides (estàndard, tall, wide, big, hero) via Fisher-Yates en cada càrrega.

El resultat: infinites composicions possibles amb les mateixes 152 fotografies.

{{< gallery "pocallum-home-01.png" "pocallum-home-02.png" "pocallum-home-03.png" "pocallum-home-04.png" >}}

---

## Festivals i galeria

Vint-i-set festivals documentats, cadascun amb la seva pròpia pàgina: anys de col·laboració, lloc, disciplina i selecció de fotografies. La galeria completa és filtrable per servei (cultura, música, teatre) i ordena les imatges de forma aleatòria en cada visita.

{{< gallery "pocallum-galleru-01.png" "pocallum-festivals-01.png" >}}

---

## Notícies i actualitat

Una secció editorial lleugera: articles d'actualitat sobre el sector, cobertures recents i novetats de Pocallum. Per als lectors habituals, el web publica un **feed RSS** que permet seguir les novetats des de qualsevol lector de feeds — sense algoritmes, sense xarxes socials, sense notificacions no desitjades.

{{< gallery "pocallum-news-01.png" "pocallum-news-02.png" >}}

---

## Serveis, contacte i qui som

Una presentació clara del que ofereix Pocallum, qui hi ha darrere l'objectiu, i un formulari de contacte en 4 passos per iniciar la col·laboració sense friccions.

{{< gallery "pocallum-servoces-01.png" "pocallum-contact-01.png" "pocallum-about-01.png" "pocallum-blog-01.png" >}}

---

## CI/CD amb GitHub Actions

**Deploy** (push a main) — `push → Hugo build --minify → Pagefind index → GitHub Pages`  
Temps total: ~90 segons des del push fins que el web és live.

**Analytics** (cada hora) — `cron → GoatCounter API → process-analytics.py → analytics.json → commit`  
El dashboard llegeix un JSON estàtic — sense cap petició autenticada des del navegador.

---

## Dashboard d'analítiques

En comptes d'enviar l'usuari a una interfície externa, el dashboard viu a `/admin/` integrat amb el disseny del web:

- **Temporal:** visites i top pàgines dels darrers 30/90/365 dies
- **Contingut:** notícies i festivals més llegits, funnel del formulari (S1→S2→S3→S4→Enviat), split CA vs EN
- **Dispositius:** navegadors, sistemes operatius, resolucions
- **Geogràfic:** països i ciutats

Protegit per hash SHA-256 client-side. Les dades es processen a GitHub Actions i es serveixen com a JSON estàtic.

---

## Formulari de contacte en 4 passos

Un wizard natiu — cap embed extern, cap Tally, cap Typeform:

1. Tipus de projecte (cultura, artistes, empreses)
2. Detalls (event, dates, lloc)
3. Pressupost i terminis
4. Dades de contacte

Cada pas dispara un event a GoatCounter per veure exactament on abandona la gent. Envia via Formspree sense recàrrega de pàgina.

---

## Rendiment i privacitat

- 0 cookies de seguiment (GoatCounter és cookieless)
- 0 fonts de Google — totes autoallotjades (Chicago FLF, Syne variable, Inter, IBM Plex Sans Condensed)
- 0 JS extern excepte el tag de GoatCounter (async, no bloqueja)
- CSS fingerprinted via Hugo Pipes
- Imatges servides tal qual — JPEGs originals amb `loading="lazy"`

---

## Migració des de WordPress

La migració va ser gradual: WordPress actiu fins al tall de domini, Hugo construint-se en paral·lel. Els 152 JPEGs es van extreure directament de la biblioteca de mitjans i es van renomenar per convenció. Els articles de blog van continuar a blog.pocallum.cat (WordPress independent, fora d'abast).

El resultat: un web que carrega en < 1 segon, no té cap superfície d'atac server-side, costa 0€/mes d'allotjament, i es publica amb un `git push`.

→ [pocallum.cat](https://pocallum.cat)
