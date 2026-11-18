---
title: "Analítica i RGPD"
seo_title: "Analítica sense cookies i auditories RGPD | LinuxBCN"
subtitle: "Mesurar sense espiar, complir sense omplir formularis inútils"
description: "Analítica web sense cookies ni rastrejadors, i auditories de protecció de dades i accessibilitat. Saber què passa al web sense vendre els visitants."
weight: 5
lastmod: "2026-11-18"
casos: ["goatcounter-dashboard", "9-barris-acull"]
howto:
  name: "Com implantem analítica respectuosa i compliment legal"
  description: "El procés de LinuxBCN per mesurar el web sense rastrejar persones i per deixar el compliment de protecció de dades en ordre."
  steps:
    - name: "Decidir què cal saber"
      text: "Abans de mesurar res, decidim quines tres o quatre preguntes necessiten resposta. Si una dada no canvia cap decisió, no es recull."
    - name: "Muntar la mesura"
      text: "Instal·lem una analítica sense cookies i amb comptador propi, de manera que els visitants no hagin de decidir res ni acceptar cap banner."
    - name: "Revisar el compliment"
      text: "Repassem textos legals, formularis, encarregats de tractament, conservació de dades i cookies reals, i deixem per escrit què es fa i per què."
    - name: "Deixar-ho documentat"
      text: "Registre de tractaments, avaluació de l'interès legítim i procediment per a incidències. El compliment és documentació, no una casella marcada."
faq:
  - q: "Puc tenir estadístiques sense el banner de cookies?"
    a: >-
      Sí, si l'analítica no instal·la cookies ni identifica persones. Amb un comptador propi i
      dades agregades no cal demanar consentiment per mesurar visites, però sí informar-ne a la
      política de privacitat i limitar el que es recull.
  - q: "Perdré informació respecte de Google Analytics?"
    a: >-
      Perdràs el que no necessites: atribució publicitària, perfils de visitants i seguiment entre
      webs. Guanyaràs dades que entens, que no canvien cada mes de criteri i que no obliguen a
      exposar els visitants a tercers.
  - q: "Què és exactament una auditoria RGPD?"
    a: >-
      Revisar quines dades recull el web, qui les rep, quant temps es guarden i amb quina base
      legal. Es tradueix en textos legals ajustats a la realitat, formularis que recullen menys i
      un registre de tractaments que es pot ensenyar si algú el demana.
  - q: "L'accessibilitat també entra aquí?"
    a: >-
      Sí. Una web inaccessible és un problema legal i, sobretot, un problema real per a qui la
      fa servir. Revisem WCAG 2.1 AA: contrast, teclat, focus, formularis, estructura semàntica.
  - q: "Em podeu fer l'auditoria si el web no l'heu fet vosaltres?"
    a: >-
      Sí. Mirem el que hi ha, encara que l'hagi fet un altre. Si cal tocar codi, t'ho diem amb
      el detall i el pressupost per separat.
---

## Analítica que no espia

La majoria d'eines d'estadístiques no mesuren el web: construeixen un perfil de cada visitant i el venen o el guarden per a altres usos. Nosaltres fem el contrari: comptem visites, pàgines i procedències **sense identificar persones**, amb un comptador propi al mateix domini que no es pot bloquejar i que no necessita cookies.

## Què mesurem i què no

**Sí:** visites, pàgines més vistes, idioma, dispositiu, procedència agregada i converses (per exemple, quantes persones envien el formulari).

**No:** dades personals, recorregut individual, perfils, seguiment entre webs ni identificadors persistents. No hi ha res a vendre perquè no hi ha res a explotar.

## RGPD: què revisem

- Quines dades recull el web de debò (no les que diu el text legal: les que recull el codi).
- Qui les rep: formularis, allotjament, analítica, correu.
- Quant temps es conserven i com s'esborren.
- Base legal de cada tractament i informació clara a la política de privacitat.
- Encarregats de tractament: contractes i garanties, si hi ha serveis externs.
- Procediment per a incidències i per a l'exercici de drets.

## Accessibilitat

Una web que no es pot fer servir amb teclat o amb lector de pantalla no és només un incompliment: és una porta tancada. Revisem contrast, focus visible, formularis, estructura de titulars, textos alternatius i navegació, i ho corregim.

## Com ho fem

### 1. Decidir què cal saber

Abans de mesurar res, decidim quines tres o quatre preguntes necessiten resposta. Si una dada no canvia cap decisió, no es recull.

### 2. Muntar la mesura

Instal·lem una analítica sense cookies i amb comptador propi, de manera que els visitants no hagin de decidir res ni acceptar cap banner.

### 3. Revisar el compliment

Repassem textos legals, formularis, encarregats de tractament, conservació de dades i cookies reals, i deixem per escrit què es fa i per què.

### 4. Deixar-ho documentat

Registre de tractaments, avaluació de l'interès legítim i procediment per a incidències. El compliment és documentació, no una casella marcada.

Si el que cal revisar és la base tècnica del web —velocitat, accessibilitat, estructura—, ho cobrim a [web a mida](/serveis/web-a-mida/).

## Una advertència honesta

Aquesta feina no et farà vendre més per si sola. Et farà entendre què passa al web amb dades que no t'has de creure per fe i et traurà un risc legal de sobre. Si el que busques és atribució publicitària perfecta, no és el nostre servei i t'ho direm.

{{< faq >}}

## Parlem-ne

Tens web però no saps què hi passa? Tens textos legals que no tenen res a veure amb el que fa el codi?

→ [Contacte](/contacte/) · [Com treballem](/com-treballem/)
