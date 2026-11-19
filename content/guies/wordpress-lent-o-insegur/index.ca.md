---
title: "El teu WordPress va lent o t'han atacat: com saber què passa"
seo_title: "WordPress lent o atacat: què fer | LinuxBCN"
subtitle: "Diagnòstic abans de solució: mesurar, no endevinar"
description: "Per què un WordPress es torna lent o rep atacs, com diagnosticar-ho amb dades i quines solucions tenen sentit segons el cas."
weight: 3
date: "2026-11-18"
lastmod: "2026-11-18"
cta_url: "/serveis/allotjament-i-manteniment/"
cta_text: "Allotjament i manteniment"
faq:
  - q: "Com sé si el problema és l'allotjament o el web?"
    a: >-
      Mesurant. Un web estàtic al mateix servidor que va lent descarta l'allotjament; un WordPress
      lent amb pocs plugins i poc trànsit sol assenyalar el servidor o la base de dades. Sense
      mesures, qualsevol canvi és una aposta.
  - q: "Actualitzar sempre ajuda?"
    a: >-
      Actualitzar tanca forats coneguts, però no arregla un web pesat ni un servidor saturat. I una
      actualització sense còpia prèvia pot deixar-te el web a mitges.
  - q: "He de reinstal·lar-ho tot?"
    a: >-
      Gairebé mai. Primer se separen les causes: maquinària, plugins, contingut, trànsit o atac. La
      reinstal·lació només té sentit quan el web està compromès i no es pot netejar amb garanties.
  - q: "Quant de trànsit ha de suportar el meu web?"
    a: >-
      Normalment molt menys del que es pensa. La majoria de webs culturals i de petites empreses
      tenen puntes de desenes de visites alhora, no de milers. Sovint el problema no és la capacitat
      sinó el pes de cada pàgina.
---

## La resposta curta

Un WordPress lent o atacat gairebé mai té una sola causa. Es diagnostica **mesurant tres coses**: què envia el servidor, què carrega el navegador i què fa l'administrador. Sense aquestes dades, «optimitzar» és canviar coses a l'atzar.

## Les causes habituals, per ordre de freqüència

1. **Allotjament compartit saturat.** El web no és lent: el veí consumeix la màquina.
2. **Plugins.** Molts, mal fets o abandonats. Sovint n'hi ha quinze i se n'usen tres.
3. **Base de dades inflada.** Revisions, transients, cistelles de paper i taules d'analítiques antigues.
4. **Imatges sense optimitzar.** Una portada de 4 MB fa que el web sembli lent encara que el servidor vagi bé.
5. **Atacs automatitzats.** Proves de contrasenya i peticions massives a l'administrador.
6. **Tema pesat.** Constructors de pàgines que carreguen mig megabyte de codi per mostrar un títol.

## Com diagnosticar-ho (sense endevinar)

- Mesura el temps de resposta del servidor amb una pàgina simple.
- Mesura el pes i el nombre de fitxers de la portada.
- Mira l'historial d'accessos: intents repetits a `wp-login` o a `xmlrpc`.
- Comprova l'espai i la salut de la base de dades.
- Revisa quins plugins estan actius i quins no s'han actualitzat mai.
- Comprova certificat, còpies i versió de PHP.

## Què fer segons el resultat

- **Servidor saturat** → canviar d'allotjament o de model d'allotjament.
- **Plugins** → eliminar-ne, no desactivar-ne.
- **Base de dades** → netejar i limitar revisions.
- **Imatges** → reconvertir i servir mides adequades.
- **Atacs** → tallafocs, límits d'accés i, si cal, treure el panell d'Internet.
- **Tot alhora** → potser la pregunta no és com arreglar-lo, sinó si aquest web ha de ser un WordPress.

## Quan la solució no és migrar

Si el web ven, gestiona socis o té un flux editorial complex, canviar de tecnologia no arregla res: cal cuidar el que hi ha. Migrar és una solució per a webs que **només publiquen** i que demanen més manteniment del que aporten.

{{< faq >}}

→ [Migrar un WordPress a una web estàtica](/serveis/migracio-wordpress/) · [Allotjament i manteniment](/serveis/allotjament-i-manteniment/) · [Contacte](/contacte/)
