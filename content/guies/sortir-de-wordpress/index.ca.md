---
title: "Com sortir de WordPress sense perdre res"
seo_title: "Com sortir de WordPress sense perdre res | LinuxBCN"
subtitle: "Ordre, inventari i paritat d'URLs: el que cal fer abans de tocar res"
description: "El que cal inventariar abans de deixar WordPress, què es conserva i què es perd, i els quatre errors que trenquen el posicionament d'una migració."
weight: 1
date: "2026-11-18"
lastmod: "2026-11-18"
howto:
  name: "Com sortir de WordPress sense perdre res"
  description: "El procés per deixar WordPress conservant URLs, contingut, imatges i posicionament."
  steps:
    - name: "Inventariar"
      text: "Rastrejar el web sencer i fer la llista de tot el que ha de sobreviure: pàgines, entrades, imatges, fitxers, formularis i enllaços externs."
    - name: "Exportar i netejar"
      text: "Treure el contingut, convertir-lo a un format net i descartar el que era farciment: ginys morts, etiquetes duplicades, pàgines buides."
    - name: "Comprovar la paritat"
      text: "Comparar cada adreça antiga amb la nova i afegir redireccions 301 on calgui. Si una sola URL no respon igual, no es publica."
    - name: "Publicar i acompanyar"
      text: "Posar el web nou en marxa, comprovar cercadors i enllaços externs, i formar qui editarà el contingut."
faq:
  - q: "Quant triga una migració d'aquest tipus?"
    a: >-
      Depèn del nombre d'adreces i d'imatges, no del tipus de web. Un web de vint pàgines i un
      blog de tres mil articles no són la mateixa feina. Després de l'inventari donem una data.
  - q: "Es pot fer sense tenir el WordPress actualitzat o funcionant?"
    a: >-
      Sí, si hi ha accés al contingut: exportació, accés a la base de dades o, si el web està caigut,
      una còpia de seguretat. Com més net estigui el WordPress, menys feina de neteja, però no és
      imprescindible que estigui perfecte.
  - q: "I les imatges?"
    a: >-
      Es migren totes i es reconverteixen a WebP amb mides adaptades. És habitual que el pes total
      baixi moltíssim sense pèrdua visible; en un dels nostres projectes va ser d'un 42 %.
  - q: "Què passa amb els enllaços que altres webs apunten al meu?"
    a: >-
      Es conserven si les adreces es conserven. Per això la paritat d'URLs no és un detall tècnic:
      és el que evita perdre posicionament i credibilitat.
  - q: "Podré tornar enrere si no m'agrada?"
    a: >-
      Sí. Mentre no es desconnecti el domini, el WordPress antic es pot mantenir viu en paral·lel
      uns dies. No esborrem res fins que el web nou és estable.
---

## La resposta curta

Sortir de WordPress no és traslladar fitxers: és **conservar adreces, contingut i enllaços** mentre canvies la maquinària que els publica. Si les adreces es conserven, el posicionament es conserva. Si canvien sense redireccions, es perd.

## Per què la gent marxa

Rarament és ideologia. Normalment és una d'aquestes tres coses:

- **Manteniment**: actualitzacions cada setmana, plugins que es trenquen, ningú que ho vegi.
- **Velocitat**: el web triga a carregar perquè hi ha més maquinària de la que cal.
- **Por**: por que una actualització trenqui el web, por dels atacs, por de tocar res.

## Què es conserva i què es perd

**Es conserva:** les adreces (amb paritat i redireccions), els textos, les imatges, els fitxers, la data de publicació i l'autoria si hi és.

**Es perd:** els ginys i plugins que no tenen equivalent, les funcionalitats de la botiga, els comptes d'usuari si no es migren expressament, i els comentaris dinàmics (es poden conservar com a contingut estàtic).

**Canvia:** l'edició. En lloc d'un panell amb deu menús, un editor per publicar. Si el web el mantenen tres persones, això és una millora; si en mantenien vint amb rols i calendari, potser no és el moment.

## Què cal inventariar abans de tocar res

- Totes les adreces que existeixen, incloses les de categories, etiquetes i paginació.
- Les imatges i els fitxers descarregables.
- Els formularis i on envien les dades avui.
- Els enllaços externs que apunten al web (per no trencar-los).
- Els idiomes, si n'hi ha més d'un.
- Què s'usa de debò i què és farciment.

## Els quatre errors clàssics

1. **Canviar les adreces perquè «queden més boniques».** Cada canvi necessita una redirecció 301. Sense, es perd el que hi havia.
2. **Publicar el web nou sense comprovar les URLs una a una.** Un 404 en una pàgina important pot trigar mesos a detectar-se.
3. **Oblidar les imatges.** Una migració que deixa les imatges penjades del domini antic es trenca el dia que l'antic domini caduca.
4. **No formar qui edita.** El millor web del món s'atrofia si ningú de l'equip sap publicar-hi.

## Quan no cal marxar

Si tens botiga amb estocs i pagaments, àrea de socis o un flux editorial amb molts rols, WordPress o una plataforma equivalent probablement encara és el que toca. Marxar no és una millora automàtica; depèn de què hagi de fer el web.

{{< faq >}}

## Si vols, ho mirem

Si creus que el teu web és d'aquests, [com migrem un WordPress a una web estàtica](/serveis/migracio-wordpress/) és el punt de partida.

→ [Contacte](/contacte/) · [Com treballem](/com-treballem/)
