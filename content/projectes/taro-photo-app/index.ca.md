---
title: "Taro — eina de gestió per a associacions fotogràfiques"
slug: "taro-photo-app"
weight: 3
year: 2026
client: "9 Barris Imatge"
sector: "fotografia"
description: "Taro — aplicació de programari lliure amb Hugo i Python per a la gestió d'associacions fotogràfiques: publicacions, concursos amb vot electrònic, autopublicació i importació de Blogger. Desenvolupada per LinuxBCN per a 9 Barris Imatge."
lastmod: "2026-09-23"
draft: false
serveis: ["aplicacio-web"]
image: "taro-logo.png"
image_style: "logo"
---

## De Blogger a programari lliure

Taro neix d'una necessitat concreta del col·lectiu [9 Barris Imatge](https://9barrisimatge.org/): anys publicant els seus àlbums a Blogger, amb perfils poc tècnics topant amb una eina pensada per a blogs, no per a fotografia d'associació, i una dependència total d'una plataforma que no controlaven.

La primera necessitat va ser fugir d'aquesta limitació i guanyar sobirania sobre la seva pròpia informació. Joan Linux, com a membre del col·lectiu, va veure la possibilitat de resoldre-ho amb programari lliure — i Taro va néixer d'aquí.

L'aplicació està pensada per hostatjar de forma molt lleugera publicacions sobre esdeveniments fotogràfics: imatge de referència, etiquetes, autoria, i enllaç a l'àlbum complet — allotjat al servidor propi de cada usuari, o a Google Fotos, Amazon o Apple, segons on tingui les seves fotos.

Taro no és un producte tancat: està en evolució constant, a mesura que sorgeixen noves necessitats del col·lectiu.

Prova-la aquí: [9barrisimatge.org](https://9barrisimatge.org/)

---

## Per què "Taro"

El nom és un petit homenatge a [Gerda Taro](https://ca.wikipedia.org/wiki/Gerda_Taro), fotoperiodista i companya de Robert Capa. Cada cop sembla més clar que va ser autora d'algunes de les millors fotografies d'aquell duo tan icònic del fotoperiodisme. Va morir en acte de servei durant la Guerra Civil espanyola.

---

## Abans / després

{{< gallery "9bi-blogger.png" "9bi-taro-photo-app.png" >}}
*Esquerra: 9 Barris Imatge a Blogger. Dreta: 9barrisimatge.org amb Taro.*

---

## Funcionalitats i mòduls

A més de seccions fixes per a la informació estàtica de l'associació, Taro inclou diversos mòduls funcionals:

- **Importació de Blogger** — migració dels continguts històrics sense perdre'ls
- **Gestió i preparació de concursos fotogràfics** — amb vot electrònic del públic inclòs
- **Autopublicació** — publicació automàtica de continguts programats
- ...i altres mòduls que van sumant-se a mesura que el col·lectiu ho necessita

---

## Amb què està fet

- **Hugo** — generador de llocs estàtics, ràpid i sense base de dades
- **PaperMod** — tema del lloc per a Hugo
- **Decap CMS** — edició de continguts per a perfils no tècnics
- **Codeberg (Forgejo)** — allotjament del codi
- **Codeberg Pages** — publicació del lloc
- **GoatCounter** — estadístiques de visites sense cookies
- **Python** — mòduls de l'aplicació: formularis, votació, autopublicació
- Git, Markdown, HTML, CSS i JavaScript

El codi es manté obert al repositori [linuxbcn/9bi](https://codeberg.org/linuxbcn/9bi) a Codeberg.

---

## Estat: beta

Taro encara està en fase de beta. La versió definitiva —descripció, llicència, funcionalitats i codi font— es presentarà properament a LinuxBCN.com. Qualsevol suggeriment és benvingut, especialment per part dels membres del col·lectiu de 9 Barris Imatge.

---

## Programari lliure, amb una excepció explicada

El valor del programari lliure és control, transparència, privacitat i autonomia — i fa possible que una entitat petita com 9 Barris Imatge pugui mantenir un lloc com aquest. Sempre que és possible, s'utilitzen eines lliures.

Hi ha una excepció: per als àlbums de fotos s'utilitza Google Photos, per una qüestió de cost i de volum. S'explica clarament perquè cal dir-ho, no amagar-ho.

---

## Ja el pots veure en funcionament

Taro ja es pot consultar i veure com funciona a [9barrisimatge.org](https://9barrisimatge.org/). Al ser programari lliure, qualsevol associació o col·lectiu en pot gaudir lliurement.

Si t'interessa per a la teva entitat, des de LinuxBCN el podem adaptar —en funcionalitats o en disseny— a les teves necessitats.
