---
title: "Taro Photo App — web, gestor i votació per a col·lectius fotogràfics"
slug: "taro-photo-app"
weight: 3
year: 2026
client: "9 Barris Imatge"
sector: "fotografia"
perfils: ["collectius"]
description: "Taro Photo App: web estàtic, gestor de continguts i mòduls de votació i formularis per a col·lectius fotogràfics. Programari lliure (AGPL-3.0) en producció a 9barrisimatge.org amb 3.008 articles."
lastmod: "2026-09-27"
draft: false
serveis: ["aplicacio-web"]
image: "taro-logo.png"
image_style: "logo"
---

## Què és

El col·lectiu [9 Barris Imatge](https://9barrisimatge.org/) documenta Nou Barris des del 2002. Des del 2018 publica amb un sistema propi: **Taro Photo App**.

Taro té tres peces, totes de programari lliure:

- **Un web estàtic** fet amb Hugo i el tema PaperMod, amb disseny propi.
- **Un gestor de continguts** (Sveltia CMS, allotjat al mateix web) perquè els membres publiquin sense tocar codi.
- **Mòduls en Python** per a allò que un web estàtic no pot fer sol: votació del públic, formularis que arriben al correu i publicació automàtica.

9barrisimatge.org és la instal·lació de referència: **3.008 articles, 24 fitxes de membres i 19 anys d'arxiu**. El programari que es distribueix és el mateix sistema sense les dades del col·lectiu, perquè qualsevol altre grup fotogràfic l'instal·li amb els seus membres, articles i àlbums.

La migració de l'arxiu des de Blogger s'explica en un projecte a part: [de Blogger a web estàtic](/projectes/migracio-blogger-9barrisimatge/).

---

## Per què "Taro"

És un homenatge a [Gerda Taro](https://ca.wikipedia.org/wiki/Gerda_Taro) (1910–1937), fotoperiodista i companya de Robert Capa, autora d'una part determinant dels reportatges de la Guerra Civil espanyola.

---

## Un article: fotografia, text i àlbum

El model de publicació és simple a propòsit. Cada article té:

| Camp | Què hi va |
|---|---|
| Autor | Un membre del col·lectiu, amb pàgina pròpia |
| Fotografia principal | La imatge que el representa a la galeria |
| Text | El cos de l'article, en Markdown |
| Enllaç a l'àlbum | Google Photos, Flickr, un servidor propi… El sistema no en depèn |
| Paraules clau | Per trobar-lo |

Tota la resta del sistema serveix perquè això es publiqui, es trobi i es comparteixi bé.

---

## El web

- Galeria en mosaic a la portada i a la pàgina de cada autor
- Arxiu per anys, núvol d'etiquetes i pàgina amb totes les entrades
- Cerca instantània al navegador, també a la pàgina 404, amb la data de cada resultat
- Botó "Veure tot l'àlbum de fotos" a cada article
- Articles més visitats, calculats amb GoatCounter a cada publicació (sense galetes)
- RSS, mode fosc, tipografies servides des del mateix web i disseny per a mòbil
- Dades estructurades (JSON-LD), imatge social i sitemap, revisats el setembre del 2026

---

## El gestor de continguts

Sveltia CMS, autoallotjat a `/admin/`. Els editors entren amb el seu compte de GitHub i cada desament és un commit: queda l'autor, la data i l'historial, i qualsevol canvi es pot revisar o desfer.

- **32 col·leccions**: 19 d'articles (una per any, perquè 3.008 articles en una sola llista serien inservibles), pàgines fixes, membres, actes de reunions i documentació del concurs
- Pàgines fixes amb els camps tècnics ocults, perquè no es trenquin en desar
- Fitxa per membre (actiu o veterà) i actes amb assistents, ordre del dia, decisions i votacions
- Barra lateral pròpia que filtra els articles per any

El web no depèn del gestor per funcionar: és un únic fitxer JavaScript i qui parla amb GitHub és el navegador de l'editor.

---

## Els mòduls

Python amb només la biblioteca estàndard: cap `pip install` ni dependències que calgui vigilar. SQLite només on cal.

### Votació — en producció

Per a exposicions i concursos on vota el públic present, no gent des de casa mil vegades.

- Pàgina per a mòbil amb teclat numèric i codis QR al cartell i a cada obra
- Un vot per obra i dispositiu, lligat a un codi calculat amb clau secreta. **No es desa cap dada personal**: ni nom, ni correu, ni ubicació
- **Geofencing**: només es pot votar a menys de 500 m de l'exposició
- Mode de proves per assajar, i panell amb recompte, tancament automàtic i exportació CSV signada
- Eines de recompte i d'auditoria (`tally.py`, `audit.py`), també per fer-ne un recompte amb urna i paper
- Català, castellà i anglès

S'està assajant a la tardor del 2026 per a la votació del públic del concurs de fotografia de l'exposició de desembre.

### Formularis — en producció

Un web estàtic no té on enviar un formulari. Aquest mòdul rep els de contacte i "incorpora't al col·lectiu" i els envia per correu des del nostre servidor, sense serveis intermediaris ni base de dades.

Protecció contra l'abús: validació de l'origen, trampa de mel (*honeypot*), límit de peticions per IP, llista blanca de camps i límits de mida. Cap error intern arriba al navegador, i cada missatge porta el peu legal (RGPD i LOPDGDD).

### Autopublicació — pendent

Un component que reconstrueix el web quan arriba un canvi. No està activat: avui la publicació la fa GitHub Actions.

---

## Per què així

- **Un web estàtic és ràpid i difícil d'atacar**: HTML generat, sense base de dades ni codi en execució exposat.
- **El contingut és memòria**: cada article és un fitxer llegible amb historial. 24 anys de patrimoni documental del col·lectiu no viuen dins de la plataforma de ningú.
- **Autonomia**: publicar, corregir o esborrar un article no depèn de cap empresa.
- **Llegible i copiable**: HTML, Markdown, Git i Python són eines que coneix molta gent.

No és un prototip. Un col·lectiu sense ànim de lucre l'ha fet servir per publicar 3.008 articles i organitzar la votació del públic d'una exposició.

---

## Estat, sense maquillatge

**Fet:**

- Llicència **AGPL-3.0**, amb capçaleres SPDX i les llicències dels components de tercers
- Paquet distribuïble (`modules/taro/`) amb els tres mòduls, sense cap dada de 9 Barris Imatge, i un manual d'instal·lació per a cada mòdul. Les proves de votació i de formularis passen
- Actes de reunions amb decisions i votacions

**Encara no existeix:**

- **Permisos per membre**: qualsevol persona amb accés d'escriptura pot editar tots els articles. És la manca més seriosa per a un col·lectiu gran
- **Gestió d'exposicions des del gestor**: les obres d'una votació encara es configuren a mà al servidor
- **Instal·lador guiat**: hi ha manual i plantilles de configuració, però cap assistent
- **Gestor genèric**: les 32 col·leccions estan fetes a mida del 9bi i un col·lectiu nou les ha de retallar

---

## Abans / després

{{< gallery "9bi-blogger.png" "9bi-taro-photo-app.png" >}}
*Esquerra: 9 Barris Imatge a Blogger. Dreta: 9barrisimatge.org amb Taro.*

---

## Amb què està fet

- **Hugo** 0.164 i **PaperMod** (capçalera i peu reescrits)
- **Sveltia CMS** 0.217, autoallotjat
- **Python 3** (biblioteca estàndard) i **SQLite**
- **GitHub Actions** i **GitHub Pages** per publicar el web; votació i formularis al servidor de LinuxBCN, amb vigilància automàtica del servei
- **GoatCounter** per a les estadístiques, sense galetes

Codi obert a [GitHub (112books/9bi)](https://github.com/112books/9bi), amb mirall a [Codeberg](https://codeberg.org/linuxbcn/9bi).

---

## El programa és vostre

Si teniu un col·lectiu, una associació o un grup fotogràfic, podeu instal·lar Taro i tenir web, gestor i, si us cal, votació del públic i formularis. Per publicar no cal saber programar: només escriure i pujar una imatge.

Podeu adaptar-lo tant com vulgueu. L'AGPL-3.0 us ho permet i us demana que, si publiqueu les millores, les compartiu. Cada mòdul va néixer d'una necessitat real del col·lectiu. Si en trobeu a faltar alguna, expliqueu-nos-la.

I si voleu Taro però no teniu qui l'allotgi ni qui el mantingui, des de LinuxBCN us oferim allotjament, correu i manteniment amb condicions per a entitats, perquè el web no depengui només de la bona voluntat de qui fa de voluntari.
