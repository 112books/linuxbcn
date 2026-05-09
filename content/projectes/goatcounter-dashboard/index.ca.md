---
title: "GoatCounter Dashboard"
slug: "goatcounter-dashboard"
weight: 14
year: 2026
client: "LinuxBCN"
sector: "eines-digitals"
draft: false
image: "goatcounter-dashboard-kpis.png"
---

## Estadístiques clares per a webs estàtics

Un dashboard d'analítica web que mostra exactament el que necessites saber
sobre els teus visitants. Sense soroll. Sense cookies. Sense subscripcions.

---

## El problema

Les eines d'analítica convencionals —Google Analytics i similars—
estan pensades per a equips de màrqueting que volen seguiment agressiu.
Per a un negoci local, una escola o una associació,
resulten excessives, invasives i sovint bloquejades pels navegadors.

GoatCounter és una alternativa lliure i respectuosa amb la privacitat.
Però la seva interfície no és immediata: cal interpretar taules,
navegar per panells, i el flux de treball és manual i lent.

---

## La solució

El **GoatCounter Dashboard** és un panel lleuger que llegeix les dades
de GoatCounter i les mostra de forma directa, clara i útil.

Una sola crida a l'API, un fitxer JSON en cache, i un dashboard
que carrega a l'instant. Sense base de dades, sense servidor propi,
sense dependències externes.

![KPIs i gràfic temporal de visites](goatcounter-dashboard-kpis.png)

**El que mostra:**

- Visites d'avui / últims 7 dies / 30 dies / total anual
- Mitjana de visites diàries
- Gràfic temporal interactiu (dia / setmana / mes · 7d / 30d / 3m / 1a)
- Pàgines i seccions més visitades
- Distribució per idioma i per referrer
- Localització per país
- Navegadors, sistemes operatius i tipus de dispositiu

---

## El que revelen les dades

Quan instal·les el dashboard a la web d'un restaurant,
les dades confirmen el que intuïes — i t'ajuden a actuar:

**El 60% dels visitants usa Safari. El 77% visita des d'un mòbil.**

![Navegadors i sistemes operatius](goatcounter-dashboard-dispositius.png)

Té tota la lògica: la gent busca on anar a sopar mentre camina,
o decideix on menjar des del sofà un dissabte al migdia.

Saber-ho amb dades concretes no és un exercici acadèmic.
Significa que el disseny ha de ser impecable en pantalla petita.
Que la informació ha d'estar visible sense desplaçar.
Que el telèfon del restaurant ha d'estar a un sol toc.

Les dades no canvien la intuïció — la confirmen
i et donen arguments per prendre decisions sense dubtar.

---

## Com funciona

El dashboard s'integra amb qualsevol web estàtic:
Hugo, Jekyll, Eleventy, o fins i tot una carpeta HTML simple.

Un script PHP —o un workflow de GitHub Actions per a llocs
completament estàtics— consulta l'API de GoatCounter una vegada,
escriu un fitxer `analytics.json` en cache,
i a partir d'aquí tot funciona des del navegador.

L'accés està protegit amb contrasenya (SHA-256, sense servidor).
El disseny utilitza IBM Plex Mono, funciona bé en mòbil
i no carrega cap recurs extern.

---

## Resultat

Un dashboard que s'instal·la en minuts i funciona durant anys
sense manteniment, sense renovar subscripcions,
sense cedir dades a tercers.

La informació que realment importa, presentada de forma que
qualsevol persona del negoci pugui llegir i entendre.

---

## Tecnologia

Hugo · GoatCounter · PHP · GitHub Actions · Chart.js · IBM Plex Mono

---

→ [Repositori a GitHub](https://github.com/112books/goatcounter-dashboard)
→ [GoatCounter — analítica respectuosa](https://www.goatcounter.com)
