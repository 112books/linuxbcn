---
title: "Allotjament i manteniment"
seo_title: "Allotjament i manteniment de webs | LinuxBCN"
subtitle: "Un web no s'acaba el dia que es publica"
description: "Allotjament en servidors propis, còpies de seguretat amb rotació, monitoratge i actualitzacions. El web segueix funcionant sense que hi pensis."
weight: 4
lastmod: "2026-11-18"
howto:
  name: "Com mantenim un web"
  description: "El manteniment que fa LinuxBCN dels webs que allotja: inventari, còpies, monitoratge i actualitzacions."
  steps:
    - name: "Inventari del que hi ha"
      text: "Abans de tocar res, sabem què corre, on corre, qui hi té accés i què passaria si s'aturés demà. Sense aquest inventari, qualsevol incidència es converteix en una emergència."
    - name: "Còpies de seguretat fora del servidor"
      text: "Còpia diària del web i de les dades, guardada fora del mateix servidor i amb rotació. Una còpia al mateix disc no és una còpia: és una il·lusió."
    - name: "Monitoratge"
      text: "Vigilància del certificat, del domini i de la disponibilitat, amb avís quan una cosa deixa de respondre. Millor assabentar-se'n abans que el client ho digui."
    - name: "Actualitzacions i suport"
      text: "Actualitzacions planificades del que en necessiti, amb prova prèvia, i un canal directe per a qualsevol dubte o canvi petit."
faq:
  - q: "He de tenir el web allotjat amb vosaltres?"
    a: >-
      No és obligatori. Hi ha clients que allotgen el web on volen i només ens demanen el
      desenvolupament. Si el vols amb nosaltres, el manteniment i les còpies queden coberts;
      si no, t'indiquem què hauria de fer el teu proveïdor perquè no quedi desemparat.
  - q: "Què passa si el servidor cau?"
    a: >-
      Tenim còpia del web i de les dades fora del servidor amfitrió, i el procediment escrit per
      restaurar-lo. No depenem que el proveïdor trobi màgia: depenem d'una còpia que hem provat.
  - q: "Quant temps trigueu a respondre?"
    a: >-
      Ho acordem per escrit amb cada client: no venem un suport 24/7 que no podem complir. Per a
      incidències crítiques hi ha un camí ràpid; per a canvis petits, un dia laborable.
  - q: "Puc marxar quan vulgui?"
    a: >-
      Sí. El domini és teu, el codi és teu i les dades són exportables. Si te'n vas, t'ho deixem
      endreçat i documentat: no retenim res perquè no puguis fer-ho.
---

## Què inclou el manteniment

- **Allotjament** en servidor propi, amb HTTPS i els certificats al dia.
- **Còpies de seguretat** diàries, fora del servidor amfitrió i amb rotació.
- **Monitoratge** de disponibilitat, certificat i domini.
- **Actualitzacions** planificades del que en necessiti, provades abans.
- **Suport per a canvis petits**: un text, una imatge, un apartat nou.
- **Revisió periòdica** d'enllaços trencats, accessibilitat i rendiment.

## Per què no n'hi ha prou d'instal·lar i oblidar

Un web estàtic té molt poques peces que es poden trencar, i això ja és un avantatge: no hi ha base de dades ni connectors que s'hagin d'actualitzar cada setmana. Però continua depenent de coses que no controla: el certificat que caduca, el domini que venç, el servidor on viu, una imatge que algú esborra o un enllaç que deixa de funcionar.

El manteniment és sobretot **vigilar i tenir còpia**. La resta són millores.

## Com ho fem

### 1. Inventari del que hi ha

Abans de tocar res, sabem què corre, on corre, qui hi té accés i què passaria si s'aturés demà. Sense aquest inventari, qualsevol incidència es converteix en una emergència.

### 2. Còpies de seguretat fora del servidor

Còpia diària del web i de les dades, guardada fora del mateix servidor i amb rotació. Una còpia al mateix disc no és una còpia: és una il·lusió.

### 3. Monitoratge

Vigilància del certificat, del domini i de la disponibilitat, amb avís quan una cosa deixa de respondre. Millor assabentar-se'n abans que el client ho digui.

### 4. Actualitzacions i suport

Actualitzacions planificades del que en necessiti, amb prova prèvia, i un canal directe per a qualsevol dubte o canvi petit.

## Límits, per endavant

- No fem suport telefònic immediat ni atenció 24/7: no ho podem complir i no ho venem.
- No gestionem xarxes socials ni campanyes de publicitat.
- No arreglem servidors de tercers on no tenim accés.

Si el web que tens és un WordPress que et demana manteniment cada setmana, potser el que cal no és mantenir-lo sinó [passar-lo a una web estàtica](/serveis/migracio-wordpress/).

## Els llocs que mantenim

Els trobaràs tots a [Powered by LinuxBCN](/powered-by-linuxbcn/): projectes culturals, artístics i socials que porten la signatura al peu. No és màrqueting: és responsabilitat sobre el que fem.

{{< faq >}}

## Parlem del teu web

Si tens un web que funciona però ningú mira si el certificat caduca o si hi ha còpia, parlem-ne.

→ [Contacte](/contacte/) · [Com treballem](/com-treballem/)
