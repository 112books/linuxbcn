---
title: "Ivan Kovačević"
seo_title: "Ivan Kovačević: web per a un contrabaixista | LinuxBCN"
slug: "ivan-kovacevic"
weight: 4
year: 2026
date: 2026-10-17
client: "músic"
sector: "musica"
perfils: ["musics"]
description: "Web del contrabaixista Ivan Kovačević, migrada de WordPress a Hugo: quatre idiomes, agenda unificada de tots els seus projectes i discografia de més de cinquanta discos."
lastmod: "2026-11-18"
draft: false
serveis: ["web-a-mida", "migracio-wordpress"]
image: "ivan-kovacevic-portada.png"
---

## Un músic, molts projectes, un sol web

Ivan Kovačević és un contrabaixista serbi establert a Barcelona des del
2001. Ha tocat amb Los Mambo Jambo, The Nu Niles o Down Home, és membre
fundador de la Barcelona Gipsy balKan Orchestra, dirigeix la
[Barcelona Big Blues Band](/projectes/barcelona-big-blues-band/) i lidera
[Bratia](/projectes/bratia/). Ha participat en més de cinquanta discos.

El seu web havia passat per iWeb i després per WordPress. Cap dels dos
resolia el problema real: com presentar una trajectòria repartida entre
molts grups sense que el web es convertís en un calaix desendreçat.

---

## El problema

Un músic que toca en diverses formacions té concerts a l'agenda de cada
grup, vídeos a diversos canals i discos amb segells diferents. Mantenir-ho
tot a mà en un sol web és inviable: o es duplica feina o el web queda
endarrerit.

---

## La solució

Un web estàtic amb Hugo que **agrega** el que ja existeix en lloc de
demanar que es torni a escriure.

**Agenda unificada**
Els calendaris de tots els seus projectes s'ajunten en una sola agenda.
Cada concert indica amb quin grup és, porta les dades estructurades
`MusicEvent` i es pot subscriure com a calendari.

**Vídeos de tots els canals**
Els vídeos de diversos canals de YouTube s'agreguen automàticament i
s'etiqueten segons el projecte d'origen.

**Discografia de més de cinquanta discos**
Cada disc té fitxa i URL pròpies, agrupat per projecte: Los Mambo Jambo,
Barcelona Gipsy balKan Orchestra, The Nu Niles, Lazy Jumpers, Bernat Font
Trio, 5 Spots i Barcelona Big Blues Band.

**Nou projectes, nou fitxes**
Cada grup té la seva pàgina amb història i enllaços, i el web enllaça
amb els webs propis de Bratia i de la Big Blues Band.

**Quatre idiomes**
Anglès, castellà, català i serbi. Els continguts originals del WordPress
(anglès i castellà) es van migrar automàticament; català i serbi es van
traduir a part.

**Contacte i contractació propis**
Formulari de contractació gestionat al servidor, sense serveis externs,
i cercador intern.

---

## La migració

El contingut es va extreure del WordPress per l'API, es va convertir a
Markdown i se'n van descarregar les imatges originals. La mateixa base
tècnica es va reaprofitar després per al web de la Barcelona Big Blues
Band.

---

## Resultat

Una sola adreça que reuneix tota la trajectòria d'un músic i que
s'actualitza amb la feina que ja fa: cada grup publica els seus concerts
i vídeos, i el web els recull.

Accessibilitat WCAG 2.1 AA, dades estructurades Schema.org i web app
instal·lable (PWA).

---

## Tecnologia

Hugo · Agregació iCal · YouTube · Multiidioma (EN/ES/CA/SR) ·
WCAG 2.1 AA · Schema.org · PWA

---

→ [Veure el web](https://ivankovacevic.com/ca/)
→ [Barcelona Big Blues Band](/projectes/barcelona-big-blues-band/) · [Bratia](/projectes/bratia/)
→ [Solucions per a artistes i músics](/solucions/musics/)
