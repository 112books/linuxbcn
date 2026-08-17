---
title: "Konsento — Governança assembleària per a espais comunitaris"
description: "Konsento és una aplicació web de programari lliure que ajuda col·lectius, cooperatives i espais autogestionats a prendre decisions de forma transparent, estructurada i accessible."
lastmod: "2026-08-17"
slug: "konsento"
weight: 1
year: 2026
client: "LinuxBCN"
featured: true
draft: false
serveis: ["aplicacio-web", "cas-propi"]
image: "konsento-v1-retall.png"
aliases:
  - /konsento/
---

Konsento és una aplicació web de programari lliure que ajuda col·lectius, cooperatives i espais autogestionats a prendre decisions de forma transparent, estructurada i accessible.

Neix d'una necessitat real: la Nau Bostik, centre cultural autogestionat del barri de la Sagrera a Barcelona, gestionava les seves assemblees, comissions i acords a través de missatgeria instantània, correus dispersos i documents compartits sense ordre. Les decisions es perdien, les responsabilitats quedaven difuminades i la memòria institucional desapareixia amb cada relleu de persones.

Konsento resol exactament aquest problema.

---

## Què fa Konsento

El sistema segueix un cicle clar: **convocar → assistir → recollir → acordar → publicar**. Tot queda documentat i accessible per a totes les persones membres.

Les funcionalitats principals:

- **Assemblees** — Convocatòries, ordres del dia, actes i acords centralitzats. Les persones membres confirmen assistència i fan seguiment dels punts acordats.
- **Comissions de treball** — Gestió de membres, objectius, reunions i encàrrecs. Cada comissió té el seu espai propi.
- **Tauler d'usuari** — Vista personalitzada de les comissions, reunions properes i encàrrecs pendents.
- **Sistema de peticions** — Qualsevol membre pot fer arribar propostes, preguntes o peticions a les comissions sense necessitat de saber qui és la persona responsable en cada moment.
- **Protocols d'actuació** — Un assistent pas a pas que guia les persones membres davant situacions habituals: emergències, gestió d'espais, recollida de residus, serveis del barri... Evita que cada incident requereixi improvització.
- **Directori de serveis territorials** — Recursos del barri (farmàcies de guàrdia, CAPs, serveis municipals) accessibles directament des de l'app.
- **Documentació integrada** — Estatuts, normativa interna, FAQ i manual d'ús en un sol lloc.

{{< gallery 
"konsento-screen-home.png"
"konsento-screen-comissions.png"
"konsento-screen-propostes.png"
"konsento-screen-protocols.png"
 >}}

{{< gallery 
"konsento-screen-backend-01.png"
"konsento-screen-backend-02.png"
 >}}

{{< gallery 
"konsento-screen-mobile.png"
 >}}

---

## Per a qui és

Konsento és útil per a qualsevol organització que funcioni de forma assembleària o participativa: centres culturals autogestionats, cooperatives de treball o de consum, ateneus, associacions de veïns, espais de coworking comunitari o qualsevol col·lectiu que necessiti coordinar-se democràticament sense dependre d'eines corporatives.

---

## Aspectes tècnics

Konsento està construïda sobre tecnologia contrastada i lleugera:

- **Backend:** Python / Django
- **Base de dades:** MariaDB (o SQLite en entorns de desenvolupament)
- **Frontend:** HTML5, CSS3 i JavaScript mínim — sense frameworks pesants
- **Autenticació:** correu electrònic amb verificació obligatòria; protecció contra força bruta (django-axes)
- **Seguretat:** HTTPS forçat, HSTS, cookies segures, sanitització de markdown, limitació de taxa en APIs
- **Accessibilitat:** WCAG 2.1 AA — menú hamburguesa mòbil, contrastos AA, targets tàctils 44px, lector de pantalla
- **Allotjament:** VPS Linux estàndard (2 GB RAM mínims), compatible amb Apache + Gunicorn
- **Llicència:** AGPL-3.0 — programari lliure

El codi font és públic a [codeberg.org/linuxbcn/konsento](https://codeberg.org/linuxbcn/konsento).

---

## Programari lliure, per disseny

Konsento no és un producte tancat. És programari lliure (llicència AGPL-3.0), la qual cosa significa que el codi és públic, auditable, modificable i auto-allotjable. Cap dada de la vostra organització no surt del vostre servidor.

Des de LinuxBCN el mantenim activament i l'adaptem a les necessitats de la Nau Bostik, però el disseny és genèric per intenció: qualsevol col·lectiu amb necessitats similars pot adoptar-lo, i oferim serveis d'adaptació, allotjament i suport.

Si el vostre col·lectiu necessita una eina com aquesta, [poseu-vos en contacte](https://linuxbcn.com/ca/contacte/).

---

*Desenvolupat per Joan Linux · LinuxBCN.com · Barcelona*
