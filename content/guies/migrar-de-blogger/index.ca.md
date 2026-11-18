---
title: "Migrar de Blogger a una web pròpia"
seo_title: "Migrar de Blogger a una web pròpia | LinuxBCN"
subtitle: "Tres mil articles no són un problema si es fa amb ordre"
description: "Què cal tenir en compte per sortir de Blogger: imatges allotjades a Google, adreces, comentaris i etiquetes, amb el cas real de 9 Barris Imatge."
weight: 4
date: "2026-11-18"
lastmod: "2026-11-18"
howto:
  name: "Com migrem un blog de Blogger a una web pròpia"
  description: "El procés per traslladar un blog de Blogger a una web estàtica conservant adreces, imatges i comentaris."
  steps:
    - name: "Exportar l'arxiu complet"
      text: "Descarreguem l'exportació del blog i en verifiquem el contingut: entrades, esborranys, etiquetes, autors i dates."
    - name: "Baixar les imatges de Google"
      text: "Les imatges de Blogger viuen als servidors de Google. Les baixem totes i les allotgem al projecte: si un dia tanquen el blog, no s'han d'endur res."
    - name: "Conservar les adreces"
      text: "Mantenim l'estructura d'URLs i afegim redireccions des de les adreces antigues, incloses les de les etiquetes."
    - name: "Comprovar i publicar"
      text: "Comprovem entrada per entrada que el contingut hi és, les imatges carreguen i cap adreça queda òrfena, abans de tocar el domini."
faq:
  - q: "Es perdran les imatges en sortir de Blogger?"
    a: >-
      Si no es baixen expressament, sí: les imatges de Blogger s'han servit sempre des dels servidors
      de Google i poden deixar de fer-ho. Baixar-les i allotjar-les al projecte és part de la feina.
  - q: "I els comentaris?"
    a: >-
      Es conserven com a contingut estàtic dins de cada entrada, amb autor i data. Si vols comentaris
      nous, es pot connectar un servei extern o deixar-los tancats.
  - q: "Cal mantenir el domini propi?"
    a: >-
      Sí, i és el que fa possible conservar les adreces. Si el blog és a un subdomini de blogspot,
      el pas previ és tenir domini propi i configurar-lo bé abans de res.
  - q: "Quant de temps es queda el blog antic enlaire?"
    a: >-
      El que calgui per comprovar-ho tot. No es desconnecta res fins que el web nou és estable i les
      adreces responen.
---

## La resposta curta

Sortir de Blogger és sobretot **treure el contingut del núvol de Google**: entrades, imatges i comentaris. Les adreces es conserven, però les imatges s'han de baixar i allotjar a la teva infraestructura, perquè avui viuen als servidors de Google.

## Per què la gent marxa

- **Control**: el contingut és en una plataforma que decideix per tu (disseny, plantilles, funcions).
- **Velocitat i aspecte**: les plantilles de Blogger han quedat molt lluny del que es pot fer avui.
- **Confiança**: plataformes que tanquen serveis o canvien condicions. Ja ha passat altres vegades.
- **Sobirania**: les fotos, els textos i els comentaris són teus, però no els tens.

## Què cal preservar

- **Les entrades**, amb data, autor i etiquetes.
- **Les imatges**, que avui apunten als servidors de Google.
- **Les adreces** de cada entrada i de cada etiqueta.
- **Els comentaris**, si vols conservar-los.
- **El domini**, que és el que fa possible que res no canviï de lloc.

## El cas de 9 Barris Imatge

Un col·lectiu fotogràfic de Nou Barris documentava el barri des del 2002, i des del 2008 ho publicava a Blogger. **3.006 articles** fets per persones que fan fotografia, no informàtica.

La migració va traslladar tots els articles, imatges, àlbums i etiquetes **amb zero errors**, conservant les adreces. El sistema nou genera més de **8.700 pàgines en menys de mig minut**. Tot el detall és a [la fitxa del projecte](/projectes/migracio-blogger-9barrisimatge/).

## Què canvia per a qui publica

Abans, publicar era entrar a Blogger i escriure. Després, és entrar a un gestor senzill, escriure i desar. La diferència: el web ja no depèn d'una plataforma externa i les fotos són a casa.

{{< faq >}}

→ [Migrar de WordPress a una web estàtica](/serveis/migracio-wordpress/) · [Contacte](/contacte/)
