---
title: "Barcelona Big Blues Band"
seo_title: "Barcelona Big Blues Band: web per a una big band | LinuxBCN"
slug: "barcelona-big-blues-band"
weight: 5
year: 2026
date: 2026-10-18
client: "big band de rhythm & blues"
sector: "musica"
perfils: ["musics"]
description: "Web de la Barcelona Big Blues Band, migrada de WordPress a Hugo: lleugera, trilingüe, amb agenda automàtica, discografia i dossier de contractació."
lastmod: "2026-11-18"
draft: false
serveis: ["web-a-mida", "migracio-wordpress"]
image: "bbbb-portada.png"
---

## La big band de rhythm & blues més gran d'Europa

La Barcelona Big Blues Band és una formació de fins a quinze músics
dirigida pel contrabaixista Ivan Kovačević, amb base al Jamboree Jazz Club
de Barcelona des de fa més de deu anys. Toca blues, swing i rhythm & blues
en gran format i acompanya artistes convidats com Dani Nel·lo, Ray Gelato,
Mike Sanchez o Myriam Swanson.

El web anterior era un WordPress: plugins per a tot, fins i tot per al
bàner de galetes, i una estructura que no responia al que una banda
necessita ensenyar.

---

## El problema

Una big band treballa amb dos públics alhora: el que vol anar al proper
concert i el que la vol contractar. El primer necessita l'agenda al dia.
El segon, formació, repertori, convidats, vídeos i un dossier de premsa
sense haver de demanar-lo per correu.

Si mantenir tot això depèn d'entrar a un gestor pesat, el web queda
desactualitzat i deixa de vendre concerts.

---

## La solució

Un web estàtic amb Hugo, construït sobre la mateixa base que el web
d'[Ivan Kovačević](/projectes/ivan-kovacevic/). Reaprofitar l'estructura
vol dir menys feina, menys errors i un resultat professional des del
primer dia.

**Agenda que s'actualitza sola**
Els concerts es publiquen a Bandsintown, com ja feia la banda, i apareixen
al web amb l'enllaç d'entrades i l'opció d'afegir-los al calendari.

**Discografia completa**
Dotze discos, cadascun amb la seva fitxa i l'artista convidat. Cada disc
té URL pròpia, i això els fa trobables als cercadors.

**Contractació preparada per a programadors**
Una pàgina pensada per a sales i festivals: format configurable (del combo
al gran format), formació completa, artistes convidats i dossier de premsa
(EPK).

**Fotos i cròniques**
La secció de fotos enllaça amb les cròniques de concert publicades a
[blog.pocallum.cat](https://blog.pocallum.cat). El web no duplica arxius:
remet a on ja són.

**Editable sense tocar codi**
Biografia, formació, premsa i textos es poden canviar amb un gestor de
continguts senzill (Decap CMS).

**Trilingüe**
Català, castellà i anglès, cadascun amb URL pròpia i `hreflang` correcte.

---

## La migració

El contingut del WordPress es va extreure per l'API, es va convertir a
Markdown i se'n van descarregar les imatges originals. Res no es va
copiar a mà, i el web vell va poder desaparèixer sense perdre
discografia, biografia ni història.

---

## Resultat

Un web lleuger, ràpid i que es manté pràcticament sol: la banda publica
els concerts on ja ho feia i el web en fa la resta.

Accessibilitat WCAG 2.1 AA, dades estructurades Schema.org, web app
instal·lable (PWA) i `llms.txt` per a motors de cerca amb IA.

---

## Tecnologia

Hugo · Decap CMS · Bandsintown · Multiidioma (CA/ES/EN) ·
WCAG 2.1 AA · Schema.org · PWA

---

→ [Veure el web](https://barcelonabigbluesband.com/ca/)
→ [Web d'Ivan Kovačević](/projectes/ivan-kovacevic/) · [Web de Bratia](/projectes/bratia/)
→ [Solucions per a artistes i músics](/solucions/musics/)
