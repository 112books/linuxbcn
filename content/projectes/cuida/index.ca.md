---
title: "Cuida — App de coordinació familiar"
description: "Aplicació web gratuïta i de codi obert per a famílies que cuiden d'un familiar malalt a casa. Contactes mèdics, medicació, protocols d'urgències i horaris de cuidadors, a un toc."
slug: "cuida"
weight: 1
year: 2026
client: "LinuxBCN"
draft: false
image: "cures-01.png"
aliases:
  - /ca/cuida/
---

**Cuida** és una aplicació web gratuïta i de codi obert pensada per a famílies que cuiden d'un familiar malalt a casa. Centralitza tot el que cal saber: contactes mèdics, medicació, protocols d'urgències i horaris de cuidadors, accessible des del mòbil de tothom qui en forma part.

Va néixer d'una necessitat real: coordinar una família de deu persones al voltant d'un avi amb afectació cardiorespiratòria, oxigen continu i morfina, assistit per l'equip PADES. Quan arribes a urgències a les tres de la matinada, no pots estar buscant qui és el metge de capçalera o quina morfina pren. Cuida ho té tot a un toc.

---

## Què fa

- **Contactes organitzats** — Metges, cuidadors, proveïdors i família, cadascun amb el seu rol. Botó de trucada directa. FaceTime pels mòbils Apple.
- **Protocols d'urgències** — Passos clars per a cada situació: dolor irruptiu, dispnea, urgència greu. Botó vermell que truca el 112 directament.
- **Medicació completa** — Tots els medicaments amb dosi, horari, via i alertes. Dissenyada per llegir-se ràpid, amb bona llum o sense.
- **Horaris dels cuidadors** — Qui hi és i quan. Quan no hi ha ningú, el pacient és sol: cal saber-ho.
- **Dades compartides** — Qualsevol familiar que obri l'app veu les dades actualitzades. Un canvi al telèfon del metge arriba a tothom.
- **Instal·lable com a app** — PWA: s'afegeix a la pantalla d'inici del mòbil i funciona sense connexió.

---

## Per a qui és

Per a qualsevol família que coordini la cura d'un familiar malalt a casa: gent gran, malalts crònics, persones en fase pal·liativa, convalescència llarga. Especialment útil quan hi ha:

- Múltiples cuidadors (professionals i familiars)
- Medicació complexa
- Protocols mèdics específics (PADES, teleassistència, oxigen)
- Familiars dispersos que necessiten la mateixa informació actualitzada

---

## Com funciona

Cuida és una **webapp progressiva (PWA)**: funciona al navegador, s'instal·la al mòbil i no requereix cap botiga d'aplicacions. Les dades es guarden al núvol via GitHub i Cloudflare, de manera completament gratuïta, i qualsevol membre de la família les veu actualitzades en la propera recàrrega.

Un familiar de referència pot editar-ho tot des de l'app, amb contrasenya. La resta només consulten.

---

## Codi obert, lliure d'adaptar

Cuida és de **codi obert** (llicència MIT). Pots descarregar-te la plantilla buida, adaptar-la per a la teva situació i desplegar-la en minuts. Sense subscripcions, sense publicitat, sense tracking.

→ **Repositori públic:** [github.com/112books/cuida](https://github.com/112books/cuida)

Si vols ajuda per posar-la en marxa per a la teva família, [contacta amb LinuxBCN](/ca/contacte/). Ho fem de bon grat.

---

{{< gallery "cures-01.png" "cures-02.png" >}}

---

## Millores previstes

Cuida és una Beta 01. Funciona, és útil i és estable, però queden coses per explorar:

- **Millor gestió de calendaris** — Integrar de forma nativa els torns de cuidadors amb el calendari del mòbil (Google Calendar, iCloud), amb recordatoris i visibilitat compartida entre familiars.
- **Trucada d'emergència des de l'app** — Botó d'emergència que avisi simultàniament múltiples contactes familiars, com a complement de la medalla de teleassistència, amb confirmació de recepció.

---

*Llicència MIT · 2026*
