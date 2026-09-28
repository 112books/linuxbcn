---
title: "9 Barris Imatge — de Blogger a Taro Photo App"
seo_title: "9 Barris Imatge: de Blogger a Taro, 3.006 articles | LinuxBCN"
slug: "migracio-blogger-9barrisimatge"
weight: 3
year: 2026
date: 2026-09-27
client: "9 Barris Imatge"
sector: "fotografia"
perfils: ["collectius"]
description: "Com LinuxBCN va portar 9 Barris Imatge de Blogger a Taro Photo App, un sistema de programari lliure fet amb Hugo: 3.006 articles des del 2008, zero errors i URLs conservades."
lastmod: "2026-09-27"
draft: false
serveis: ["migracio-wordpress", "web-a-mida", "cas-propi"]
image: "9bi-taro-photo-app.png"
---

## El punt de partida

El col·lectiu [9 Barris Imatge](https://9barrisimatge.org/) documenta Nou Barris des del 2002. Durant anys, tot el seu arxiu va viure a Blogger: **3.006 articles**, els primers del 2008, publicats per membres que fan fotografia, no informàtica.

Blogger es va quedar petit. Cada limitació es convertia en feina manual per a gent que no hauria d'haver de barallar-se amb l'ordinador.

La resposta de LinuxBCN no va ser canviar de plataforma, sinó construir-ne una de pròpia amb programari lliure: **[Taro Photo App](/projectes/taro-photo-app/)**, que combina un web estàtic fet amb Hugo, un gestor de continguts perquè els membres publiquin sense tocar codi i mòduls per a la votació del públic i els formularis. El col·lectiu passa a ser amo de les seves dades i de les eines.

---

## Què fallava i què hi posa Taro

| A Blogger | Amb Taro Photo App |
|---|---|
| Publicar un àlbum era fer una entrada i enllaçar-lo a mà | Cada article té un camp per a l'àlbum, allotjat on es vulgui |
| Poc control de qui edita què | Cada canvi és un commit amb autor i data, que es pot revisar i desfer |
| Tot depenia d'un servei extern: si canviaven les normes, l'activitat s'aturava | El contingut és Markdown en fitxers propis, un format obert que no caduca |
| Les pàgines fixes eren entrades com qualsevol altra | Pàgines fixes pròpies, editables sense risc de trencar-les |
| Cap perfil de membre | Fitxa i pàgina per a cada membre, amb els seus articles |
| Publicar era "prémer un botó" que ningú sabia explicar | Un model clar per a tothom: autor, fotografia, text, àlbum i paraules clau |

---

## La migració

El primer pas per posar Taro en marxa va ser portar-hi tot l'arxiu. Els **3.006 articles** es van migrar tots, amb imatges, àlbums i etiquetes, i l'operació va acabar **amb zero errors**.

- **`migrate_live.py`** llegeix el feed en directe del blog i genera un fitxer per article. Hi ha una variant, `migrate_blogger.py`, que treballa a partir de l'export XML oficial.
- **Les URLs es conserven.** Cada article manté la mateixa adreça que tenia a Blogger, i els enllaços compartits durant divuit anys continuen funcionant.
- **Autoria recuperada.** Un script (`recupera_autors_blogger.py`) va reconstruir l'autoria a partir dels perfils antics de Blogger: 439 de 473 articles assignats, i els 34 restants documentats.
- **Àlbums rescatats.** Molts enllaços apuntaven a Picasa, que ja no existeix. Es van recuperar i traspassar a Google Photos.
- **Etiquetes.** Per als articles que no en tenien, `auto_tags.py` en proposa de candidates.
- **Una 404 útil.** Qui arriba a una adreça que ja no existeix troba un cercador i enllaços a la portada, l'arxiu i el contacte.

---

## El resultat

- **3.008 articles** del 2008 al 2026 i **24 fitxes de membres**
- Més de **8.700 pàgines** generades en menys de mig minut
- Arxiu per anys, galeria per autor, núvol d'etiquetes i cerca instantània
- Dades estructurades, sitemap i estadístiques sense galetes (GoatCounter)
- Web estàtic: sense base de dades ni superfície d'atac en execució
- Votació del públic per a exposicions i formularis propis, sense serveis de tercers

Els membres publiquen des del gestor de Taro, sense tocar codi. I el que va començar com la solució per a un col·lectiu és ara programari lliure (AGPL-3.0) que qualsevol altre grup fotogràfic pot instal·lar: **[coneix Taro Photo App](/projectes/taro-photo-app/)**.

---

## Abans / després

{{< gallery "9bi-blogger.png" "9bi-taro-photo-app.png" >}}
*Esquerra: 9 Barris Imatge a Blogger. Dreta: 9barrisimatge.org amb Taro Photo App.*

---

## Tot programari lliure

Taro Photo App i la seva migració s'han fet íntegrament amb eines lliures:

- **Hugo** i **PaperMod** per al web
- **Sveltia CMS** perquè els membres editin
- **Python 3** per als scripts de migració i els mòduls de Taro, sense dependències externes
- **Git** per guardar cada canvi amb autor, data i historial

El codi és obert, amb llicència AGPL-3.0, a [GitHub (112books/9bi)](https://github.com/112books/9bi).

---

## La vostra entitat encara és a Blogger?

Si el vostre arxiu fa anys que viu a Blogger, WordPress o una altra plataforma i cada cop costa més mantenir-lo, a LinuxBCN el podem portar a Taro Photo App o a un sistema a mida, amb programari lliure i sense perdre ni un article ni un enllaç. Parlem-ne.
