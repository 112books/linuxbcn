---
title: "Votació del públic — vot anònim i presencial per a exposicions"
slug: "votacio-public"
weight: 3
year: 2026
date: 2026-09-27
client: "9 Barris Imatge"
sector: "fotografia"
perfils: ["collectius"]
description: "Aplicació web de votació del públic per a exposicions i concursos: un vot per obra i mòbil, només dins de la sala, sense dades personals i amb recompte verificable. Programari lliure de LinuxBCN."
lastmod: "2026-09-27"
draft: false
serveis: ["aplicacio-web"]
---

## Què és

Quan una exposició vol que el públic triï la seva obra preferida, hi ha dos camins habituals: una urna de paper que costa de comptar, o un formulari en línia on qualsevol pot votar des de casa tantes vegades com vulgui.

Aquesta aplicació fa el que tots dos no aconsegueixen: **vot des del mòbil, només per a qui és a l'exposició, un vot per obra i persona, i sense demanar cap dada personal.**

Es va fer per al concurs de fotografia de [9 Barris Imatge](https://9barrisimatge.org/) i forma part de [Taro Photo App](/projectes/taro-photo-app/). A la tardor del 2026 s'assaja per a la votació del públic de l'exposició de desembre al Casal de Barri de Prosperitat.

---

## Com vota el públic

1. Escaneja el codi QR del cartell de l'exposició.
2. El mòbil demana permís per saber on és. La pàgina calcula la distància a la sala i la mostra.
3. Escriu el número imprès al costat de la fotografia que vol votar.
4. Vota. Des del mateix mòbil, **un sol vot per obra**.

Sense registre, sense aplicació per instal·lar i sense contrasenyes. En català, castellà o anglès, segons l'idioma del telèfon.

---

## Com s'ha dissenyat

Cada decisió respon a un problema concret.

**Només vota qui hi és.** El vot només s'accepta a menys de 500 m de la sala (*geofencing*). La distància es calcula al mateix mòbil, i al servidor només li arriba si és dins o fora del radi: **les coordenades no es desen mai**. Si el GPS és poc precís, la pàgina avisa que cal activar la ubicació precisa. Si el vot es rebutja, diu la distància real. El radi es pot configurar en tres modes: desactivat, avís o bloqueig.

**Un vot per obra, sense saber qui vota.** Cada mòbil rep un identificador aleatori. No hi ha nom, correu ni empremta del dispositiu. N'hi ha prou amb això per impedir que algú voti la mateixa obra deu vegades, i no permet saber qui ha votat què.

**Número en lloc de desplegable.** El públic escriu el número de l'obra que veu imprès a la paret, com en una urna. És més ràpid que buscar en una llista de títols, i el servidor comprova que el número existeix.

**Resultats que es poden verificar.** Cada vot es desa amb una signatura criptogràfica (HMAC-SHA256) sobre l'obra, el dispositiu i l'hora. Una eina d'auditoria comprova que cap vot s'ha modificat i que no n'hi ha de duplicats. L'exportació final surt en un CSV signat.

**Ningú es queda fora.** Qui no porti mòbil pot votar en paper, i l'eina de recompte suma els vots digitals i els de l'urna en un sol resultat.

**Protegit contra l'abús.** Protecció CSRF a cada petició, límit de peticions i de mida, i accés d'administració separat amb contrasenya pròpia.

**Assajable abans del dia.** Un mode de proves permet tornar a votar al cap d'uns minuts o sense límit, per assajar amb l'equip. Abans de l'exposició, es posa en mode real.

---

## L'administració

Un panell privat mostra el recompte per obra en temps real, permet descarregar l'exportació signada i tancar la votació el dia de l'entrega de premis, amb confirmació prèvia. La votació també es tanca sola en acabar el termini configurat.

---

## Un detall que diu molt

Durant les proves, **tots els vots es rebutjaven**. El punt de referència de la sala estava a 5,2 km del lloc real. Es va corregir amb coordenades verificades amb diverses fonts cartogràfiques, i ara el procediment exigeix comprovar el punt abans de cada edició. Per això s'assaja abans d'obrir la votació al públic.

---

## Amb què està fet

- **Python 3** amb només la biblioteca estàndard: cap `pip install` ni dependències de tercers
- **SQLite** per a les edicions, les obres i els vots
- Servei propi al servidor de LinuxBCN, amb HTTPS i un vigilant que el reactiva automàticament si cau
- Codis QR generats amb una eina pròpia

Programari lliure, amb llicència AGPL-3.0, dins del repositori de Taro a [GitHub (112books/9bi)](https://github.com/112books/9bi).

---

## La voleu per al vostre concurs?

Exposicions, festivals, premis del públic, pressupostos participatius a petita escala… Si necessiteu que només voti qui hi és de veritat, sense recollir dades de ningú, us la podem configurar i allotjar. Parlem-ne.
