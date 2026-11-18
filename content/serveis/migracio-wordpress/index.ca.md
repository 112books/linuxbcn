---
title: "Migrar de WordPress a una web estàtica"
seo_title: "Migrar de WordPress a una web estàtica | LinuxBCN"
subtitle: "Mateix contingut, molta menys maquinària"
description: "Passem el teu WordPress a una web estàtica sense perdre URLs, imatges ni posicionament, i et deixem un editor que entens."
weight: 1
lastmod: "2026-11-18"
faq:
  - q: "Perdré el posicionament que tinc a Google?"
    a: >-
      No, si es fa bé. Les adreces es mantenen idèntiques i, quan alguna ha de canviar,
      hi posem una redirecció 301. Abans de publicar comparem l'antic i el nou amb un
      rastreig URL per URL: si una sola adreça no respon igual, no es publica.
  - q: "Podré editar el web jo mateix, sense saber programar?"
    a: >-
      Sí. El web es publica amb un editor visual (Sveltia o Decap) que treballa sobre
      fitxers de text: escrius, puges imatges i deses, i el canvi surt publicat. Inclou
      una sessió de formació i les notes escrites perquè no depenguis de nosaltres.
  - q: "I els comentaris del blog antic?"
    a: >-
      Es conserven com a contingut estàtic dins de cada entrada, amb la seva data i autor.
      Si vols comentaris nous, es pot connectar un servei extern —t'expliquem les opcions
      i el que implica per a la privacitat de qui comenta— o deixar-los tancats.
  - q: "Quant triga una migració?"
    a: >-
      Depèn del volum i del nombre d'adreces, no del tipus de web. Després de l'inventari
      inicial et donem una data concreta; no fem estimacions abans de saber què hi ha.
  - q: "Què passa amb el domini i el correu?"
    a: >-
      No es toquen. El domini i les bústies de correu són independents del web i es queden
      on són. Canviem on es publiquen les pàgines, no qui és el titular del domini.
howto:
  name: "Com migrem un WordPress a una web estàtica"
  description: "El procés de LinuxBCN per passar un web de WordPress a una web estàtica sense perdre URLs, contingut ni posicionament."
  steps:
    - name: "Inventari i rastreig"
      text: "Rastrejem el web actual sencer: pàgines, entrades, imatges, fitxers i enllaços externs. Aquest mapa és la llista de control de tot el que ha de sobreviure."
    - name: "Contingut i imatges"
      text: "Exportem el contingut, el convertim a Markdown net i optimitzem les imatges a WebP amb mides responsives, sense pèrdua visible de qualitat."
    - name: "Paritat d'URLs i redireccions"
      text: "Comprovem cada adreça antiga contra la nova amb un crawler 1:1 i hi afegim redireccions 301 allà on calgui. Cap enllaç extern ni resultat de cerca es trenca."
    - name: "Editor i formació"
      text: "Connectem un editor visual sobre els fitxers del web, formem l'equip que l'ha de fer servir i acompanyem les primeres publicacions."
---

Migrar a una web estàtica vol dir deixar de servir cada visita amb PHP i MySQL i començar a servir fitxers HTML ja construïts. El contingut és el mateix i les adreces també, però el web carrega més de pressa, té menys superfície d'atac i gairebé no demana manteniment.

## Quan té sentit

Un WordPress té sentit quan hi ha molta gent editant, comandes i usuaris. Quan el web només **publica** —notícies, projectes, catàlegs, portfolis— la maquinària sobra i es converteix en una feina de manteniment permanent.

Et reconeixeràs en algun d'aquests casos:

- El web publica contingut, però no ven res ni gestiona reserves.
- Tens una pila de plugins i no sabries dir què fa cadascun.
- Les actualitzacions fan por: un dimarts qualsevol poden trencar el web.
- El web va lent, sobretot al mòbil, i ho atribueixes a «la connexió».
- Reps atacs de força bruta, correu brossa pel formulari o intents d'entrar a l'administrador.
- Ningú de l'equip s'atreveix a tocar el web sense por d'espatllar-lo.

Cap d'aquests problemes és un defecte de WordPress. És el cost de fer servir una plataforma pensada per a una altra feina.

## Quan NO ho recomanem

No tot es pot —ni s'ha de— passar a estàtic. Si ets en algun d'aquests casos, t'ho diem abans de començar:

- **Botiga complexa:** estocs, variants, cupons, pagaments i enviaments. WooCommerce fa aquesta feina i una web estàtica no la substitueix.
- **Flux editorial amb molts rols:** calendaris de publicació, aprovacions, diversos equips. Si hi ha deu persones editant cada dia, el CMS amb base de dades sovint és el que toca.
- **Dependència d'un plugin concret:** fòrums, àrees de socis, cursos, reserves amb lògica pròpia. Si el plugin és el cor del projecte, no el traiem.
- **Algú altre manté el web i funciona.** Si va bé i ningú no en pateix, no hi toquem res.

## Com ho fem

### 1. Inventari i rastreig

Rastreja el web actual sencer: pàgines, entrades, imatges, fitxers descarregables, formularis i enllaços externs. D'aquest mapa en surt la llista de control de tot el que ha de sobreviure a la migració.

### 2. Contingut i imatges

El contingut s'exporta i es converteix a Markdown net, sense codi sobrant de l'editor antic. Les imatges es reconverteixen a WebP amb mides adaptades a pantalla: és habitual que el pes total baixi de manera molt notable sense que es noti cap diferència.

### 3. Paritat d'URLs i redireccions

Cada adreça antiga es compara amb la nova en un rastreig 1:1. On no hi ha correspondència exacta, s'hi afegeix una redirecció 301. L'objectiu és que cap enllaç extern, cap RSS ni cap resultat de cerca es trenqui.

### 4. Editor i formació

Al damunt dels fitxers hi connectem un editor visual (Sveltia o Decap) adaptat a la mida del projecte. La persona que publica no veu codi: veu camps, imatges i un botó de desar. Després hi ha formació i notes escrites, perquè el web sigui seu de veritat.

## Xifres de migracions reals

No fem servir exemples genèrics. Aquestes són dades de projectes que hem portat nosaltres:

- **[Blog de Pocallum](/projectes/blog-pocallum/):** 2.353 posts i 137.000 paraules migrats íntegres, amb **2.360 URLs verificades 1:1** perquè res no canviés de lloc. Les imatges van passar a WebP amb un **estalvi d'1.318 MB (−42,1 %)**.
- **[9 Barris Imatge](/projectes/migracio-blogger-9barrisimatge/):** **3.006 articles** publicats des del 2008, traslladats **amb zero errors** i conservant les adreces. El web nou genera més de 8.700 pàgines en menys de mig minut.

## Què passa amb el posicionament, els formularis i el correu

- **Posicionament:** es conserva perquè les adreces es conserven. Les redireccions cobreixen els casos on alguna ha de canviar.
- **Formularis:** el web estàtic no envia correu sol. Els formularis es connecten a un script propi al servidor, sense serveis intermediaris que es quedin les dades dels visitants.
- **Correu i domini:** no es toquen. Són independents del web.
- **Analítica:** si venies de Google Analytics, es pot substituir per una analítica sense cookies que no rastreja persones.

## Què necessitem de tu

Accés al panell del WordPress, el domini i l'allotjament actual, i una persona que validi el contingut. La resta és feina nostra.

## Abans de decidir-ho

- [Com sortir de WordPress sense perdre res](/guies/sortir-de-wordpress/) — ordre, inventari i paritat d'URLs.
- [Hugo o WordPress: quan et convé cada opció](/guies/hugo-vs-wordpress/) — la comparació honesta.
- [El teu WordPress va lent o t'han atacat](/guies/wordpress-lent-o-insegur/) — diagnòstic abans de solució.
- [Migrar de Blogger a una web pròpia](/guies/migrar-de-blogger/) — el cas de 9 Barris Imatge.

{{< faq >}}

## Parlem del teu WordPress

Explica'ns què tens i què et molesta. Si la migració no és la solució, també t'ho direm.

→ [Contacte](/contacte/) · [Com treballem](/com-treballem/)
