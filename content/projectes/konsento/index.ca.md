---
title: "Konsento — Eina de governança lliure per a espais comunitaris"
description: "Konsento és una eina de governança lliure per a espais comunitaris, cooperatives, ateneus i entitats sense ànim de lucre. Simplifica la gestió de les assemblees, les comissions, els acords i els encàrrecs, i facilita que la informació i les decisions de l’entitat quedin organitzades, accessibles i traçables."
lastmod: "2026-08-15"
slug: "konsento"
weight: 1
year: 2026
client: "LinuxBCN"
featured: true
draft: false
serveis: ["aplicacio-web", "cas-propi"]
image: "konsento-animacio.gif"
aliases:
  - /konsento/
---

## El repte

Els espais culturals autogestionats, les cooperatives, els ateneus i les entitats sense ànim de lucre comparteixen un problema comú: la gestió democràtica és lenta, dispersa i difícil de traçar. Les decisions es prenen per WhatsApp, els acords es perden, les comissions no saben qui fa què, i les assemblees es converteixen en maratons sense memòria.

La necessitat és clara. Però quan cerques eines per cobrir-la, el panorama és decebedor.

---

## El problema de les eines existents

Hem explorat les opcions disponibles —Decidim, Loomio, Open Collective, diversos ERP cooperatius— i totes cauen en el mateix patró: **estan sobredimensionades per a la majoria d'entitats**.

Requereixen servidors potents, equips tècnics per mantenir-les, mesos per configurar-les i formació intensiva per usar-les. Una associació de veïns o un espai de coworking comunitari no necessita un sistema de votació amb resultats en temps real ni un motor de propostes amb desenes de fases. Necessita que les decisions que s'han pres constin, que tothom sàpiga qui fa què, i que qualsevol pugui fer arribar una proposta.

---

## La solució: just el que cal

**Konsento** neix amb un principi clar: cobrir el cicle real de presa de decisions amb el **mínim de complexitat tècnica i de gestió**.

Un únic cicle ben fet: **convocar → assistir → actar → acordar → publicar**. Res més.

Les funcions actuals cobren les necessitats immediates d'una entitat real:

- **Assemblees** — convocatòria, acta i acords en un sol lloc
- **Comissions de treball** — membres, objectius, reunions i encàrrecs per comissió
- **Encàrrecs** — l'equip gestor delega tasques a comissions amb seguiment d'estat i data límit
- **Tauler d'usuari** — cada membre veu les seves comissions, reunions i encàrrecs pendents
- **Peticions i propostes** — qualsevol persona pot proposar, preguntar o demanar acció sense registrar-se
- **Tauler pràctic** — informació operativa del dia a dia sempre accessible
- **Protocols i documents** — normativa interna, estatuts i FAQ integrats

*****
{{< gallery 
"konsentor-screen-01.png"
"konsentor-screen-02.png"
"konsentor-screen-03.png"
"konsentor-screen-04.png"
"konsentor-screen-05.png"
"konsentor-screen-06.png"
 >}}

Tot el front-end és **públic i accessible sense registre**. La gestió interna és exclusiva per a l'equip gestor, des d'un panell adaptat i sense soroll.

[CAPTURA: Panell d'administració amb seccions organitzades]

---

## Creixement progressiu

Konsento no pretén ser complet des del primer dia. El projecte **creixerà amb les necessitats reals** de les entitats que l'usin.

Cada nova funcionalitat s'afegirà quan hi hagi una necessitat concreta i demostrada, no per anticipar casos d'ús hipotètics. Això garanteix que l'eina es mantingui lleugera, mantenible i comprensible per a qui la gestiona.

---

## Tecnologia lleugera i provada

Konsento és una aplicació web estàndard construïda amb tecnologia provada i sense dependències propietàries:

| Component | Tecnologia |
|-----------|-----------|
| Backend | Python · Django |
| Base de dades | MariaDB |
| Frontend | HTML5 · CSS3 · JS mínim |
| Autenticació | Email + Google OAuth (django-allauth) |
| Internacionalització | Català i anglès (ampliable) |
| Allotjament | Qualsevol VPS Linux |
| Llicència | AGPL-3.0 (programari lliure) |

Funciona en un **VPS bàsic de 2 GB de RAM**. No necessita Kubernetes, ni microserveis, ni cap infraestructura especial. El disseny és responsiu, accessible (WCAG 2.1 AA) i funciona sense JavaScript per a les funcions principals.

[CAPTURA: Vista en mòbil — fitxa de comissió]

---

## Accés sense fricció per a Google Workspace

Si la teva entitat usa Google Workspace (com la Nau Bostik, amb `@naubostik.com`), l'accés és immediat: **cap contrasenya nova que recordar**.

L'administrador dona d'alta el compte amb l'email corporatiu. La primera vegada que l'usuari clica "Entrar amb Google", Konsento reconeix l'email i connecta el compte automàticament. A partir d'aquell moment, un clic al logo gran de la portada porta al panell d'administració.

[CAPTURA: Pantalla de login amb botó "Entrar amb Google"]

---

## Per a qui és

Konsento és adequat per a qualsevol entitat que necessiti:

- Gestionar assemblees periòdiques amb acta i seguiment d'acords
- Coordinar grups de treball o comissions internes
- Fer seguiment d'encàrrecs entre l'equip gestor i les comissions
- Recollir propostes i preguntes de la comunitat de forma estructurada
- Tenir una finestreta pública amb informació operativa i protocols

Exemples d'ús: centres culturals autogestionats, cooperatives de treball, ateneus, associacions de veïns, espais de coworking comunitari.

[CAPTURA: Formulari de proposta pública]

---

## Programari lliure

El codi font és públic, auditable i reutilitzable sota llicència **AGPL-3.0**.

**Repositori:** [codeberg.org/linuxbcn/konsento](https://codeberg.org/linuxbcn/konsento)

Qualsevol entitat pot desplegar la seva pròpia instància, adaptar-la a les seves necessitats i contribuir millores al projecte.

---

## Desplegament i suport

LinuxBCN ofereix:

- **Desplegament gestionat** en VPS dedicat o compartit
- **Adaptació** a la identitat i necessitats de l'entitat
- **Formació** de l'equip gestor
- **Manteniment** i actualitzacions de seguretat

[Contacta'ns](https://linuxbcn.com) per a pressupost sense compromís.

---

*Desenvolupat per Joan Linux · LinuxBCN.com · Barcelona*


---
