---
title: "9 Barris Imatge — de Blogger a web estàtic"
slug: "migracio-blogger-9barrisimatge"
weight: 3
year: 2026
client: "9 Barris Imatge"
sector: "fotografia"
perfils: ["collectius"]
description: "Migració del Blogger de 9 Barris Imatge a un web estàtic amb Hugo: 3.006 articles des del 2008, zero errors, URLs conservades, autories i àlbums recuperats. LinuxBCN."
lastmod: "2026-09-27"
draft: false
serveis: ["migracio-wordpress"]
image: "9bi-taro-photo-app.png"
---

## El punt de partida

El col·lectiu [9 Barris Imatge](https://9barrisimatge.org/) documenta Nou Barris des del 2002. Durant anys, tot el seu arxiu va viure a Blogger: **3.006 articles**, els primers del 2008, publicats per membres que fan fotografia, no informàtica.

Blogger es va quedar petit. Cada limitació es convertia en feina manual per a gent que no hauria d'haver de barallar-se amb l'ordinador.

---

## Què fallava i què hi hem posat

| A Blogger | Ara |
|---|---|
| Publicar un àlbum era fer una entrada i enllaçar-lo a mà | Cada article té un camp per a l'àlbum, allotjat on es vulgui |
| Poc control de qui edita què | Cada canvi és un commit amb autor i data, que es pot revisar i desfer |
| Tot depenia d'un servei extern: si canviaven les normes, l'activitat s'aturava | El contingut és Markdown en fitxers propis, un format obert que no caduca |
| Les pàgines fixes eren entrades com qualsevol altra | Pàgines fixes pròpies, editables sense risc de trencar-les |
| Cap perfil de membre | Fitxa i pàgina per a cada membre, amb els seus articles |
| Publicar era "prémer un botó" que ningú sabia explicar | Un model clar per a tothom: autor, fotografia, text, àlbum i paraules clau |

---

## La migració

Els **3.006 articles** es van migrar tots, amb imatges, àlbums i etiquetes, i l'operació va acabar **amb zero errors**.

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
- Web estàtic a GitHub Pages: sense base de dades ni cap servidor que mantenir per al web

Els membres ara publiquen des d'un gestor de continguts propi, sense tocar codi. Aquest sistema s'ha convertit en un programari reutilitzable per a altres col·lectius: [Taro Photo App](/projectes/taro-photo-app/).

---

## Abans / després

{{< gallery "9bi-blogger.png" "9bi-taro-photo-app.png" >}}
*Esquerra: 9 Barris Imatge a Blogger. Dreta: 9barrisimatge.org, avui.*

---

## Amb què està fet

- **Python 3** per als scripts de migració i neteja, sense dependències externes
- **Hugo** i **PaperMod** per al web
- **Sveltia CMS** per a l'edició
- **GitHub Actions** i **GitHub Pages** per publicar

Els scripts són oberts, dins del repositori del projecte a [GitHub (112books/9bi)](https://github.com/112books/9bi), amb llicència AGPL-3.0.

---

## La vostra entitat encara és a Blogger?

Si el vostre arxiu fa anys que viu a Blogger, WordPress o una altra plataforma i cada cop costa més mantenir-lo, podem fer-ne la migració sense perdre ni un article ni un enllaç. Parlem-ne.
