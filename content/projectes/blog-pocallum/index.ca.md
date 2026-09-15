---
title: "Blog de Pocallum — De Blogger a WordPress, de WordPress a Hugo"
slug: "blog-pocallum"
weight: 3
year: 2026
client: "Pocallum / Joan Linux Martínez"
sector: "fotografia"
description: "Blog.pocallum.cat: de Blogger a WordPress i, ara, a Hugo estàtic. 2.353 posts migrats amb paritat total d'URLs, sense base de dades ni dependències. LinuxBCN."
lastmod: "2026-09-15"
draft: false
serveis: ["migracio-wordpress"]
image: "blog-pocallum-01.png"
---

## Adéu WordPress, hola Hugo

El Blog de Pocallum —una crònica fotogràfica de concerts, festivals, càmeres i vida de barri a Barcelona des del 2010— ha canviat el motor per complet, i no és la primera vegada. El resultat d'aquest darrer pas: més velocitat, menys superfície d'atac, i el mateix contingut íntegre amb les mateixes URLs.

{{< gallery "blog-pocallum-01.png" >}}

---

## Tres eres, un mateix blog

El blog no ha viscut sempre a WordPress. Va començar a **Blogger**, la plataforma gratuïta de Google: còmoda per començar, però amb el contingut, les dades i el disseny sota control d'un tercer que no oferia ni sobirania ni previsibilitat a llarg termini.

El pas a **WordPress** ja va ser un salt cap al programari lliure: codi obert, control del propi contingut, sense dependre d'una única empresa per continuar existint. Va servir bé durant 15 anys, però amb el temps va anar acumulant el pes propi de qualsevol CMS amb base de dades: plugins, actualitzacions constants, i una superfície d'atac que no parava de créixer.

Amb **Hugo**, el cicle es tanca amb el pas definitiu: web estàtic, sense base de dades ni dependències de tercers, allotjat als nostres propis servidors. Sobirania completa de les dades, cap intermediari, cap superfície per explotar. Del núvol de Google al programari lliure, i del programari lliure a la sobirania total: cada pas ha fet el blog una mica més net, més senzill, més pur i més proactiu.

---

## Per què marxar de WordPress

WordPress va servir bé durant una dècada, però acumulava problemes que no es podien ignorar:

- **Pes i lentitud:** 2.353 posts, 137.000 paraules, 96 categories i 3.177 etiquetes, servits per un CMS amb base de dades MySQL i PHP.
- **Seguretat:** WordPress és un objectiu massiu per a bots i exploits; cada plugin és una superfície d'atac més.
- **Manteniment:** actualitzacions constants del nucli, plugins i temes, i pedaços amb cada versió.
- **Vulnerabilitat històrica:** amb 15 anys d'historial, qualsevol versió oblidada era un risc.

---

## El procés de migració

La migració es va fer pas a pas, amb la seguretat de poder tornar enrere en tot moment:

1. **Exportació completa** del WordPress via XML —tot el contingut: posts, categories, etiquetes i metadades.
2. **Conversió a Markdown** amb l'eina `wordpress-export-to-markdown` (v3.0.5): 2.353 posts (i 10 drafts) convertits en fitxers `.md` nets.
3. **Post-processament** amb un script propi que va recuperar miniatures, imatges principals, tags des de la font canònica i va resoldre shortcodes de Vimeo escapats.
4. **Tema Hugo propi**, heretant el sistema de disseny del web pare però adaptat al blog: llistat cronològic, arxiu mensual, mosaic, lightbox i cercador estàtic.
5. **Paritat completa d'URLs:** cada permalink de WordPress (`/AAAA/MM/DD/slug/`) es manté idèntic. Cap enllaç existent —externs, resultats de cercadors, RSS— es trenca. Comprovat amb un crawler 1:1 (2.360 URLs verificades).
6. **SEO:** títols i meta descriptions de Yoast conservats, JSON-LD, Open Graph i Twitter Cards generats pel tema, sense plugins.

---

## Avantatges

- **Rendiment:** sense PHP ni MySQL. HTML pur i minificat, servit fins i tot des d'un hosting bàsic, amb temps de càrrega en picat.
- **Seguretat:** no hi ha res a explotar —no hi ha admin, no hi ha base de dades, no hi ha plugins.
- **Control total:** el contingut viu a Git, versionat, clonable, sense dependència de cap CMS tancat. S'edita en Markdown.
- **Cercador estàtic (Pagefind):** cerca a text complet, indexada en el build, sense servidor ni cookies.
- **Analítica sense cookies:** GoatCounter, complint RGPD, amb el mateix comptador que ja hi havia.
- **Gestió senzilla:** textos i imatges en fitxers, res a base de dades.
- **Edició sense fricció:** **Sveltia CMS** adaptat al nostre gust i necessitats —edició visual del contingut sense necessitat de tocar Markdown a mà.

{{< gallery "blog-pocallum-cms-01.png" >}}

---

## El resultat en xifres

- **2.353 posts i 137.000 paraules** de contingut, migrats íntegres.
- **71 comentaris** llegats conservats com a contingut estàtic dins dels posts.
- Un sol fitxer Markdown per post, amb el frontmatter complet (data, categories, tags, miniatures).

### Optimització d'imatges — estalvi real

| | Fitxers | Pes |
|---|---|---|
| Originals | 19.516 | 3.131 MB |
| WebP (display 2500px + miniatures 800px) | 25.948 | 1.813 MB |

**Estalvi: 1.318 MB (−42,1%)**, uns 0,07 MB de mitjana per imatge, sense pèrdua de qualitat visible.

---

## Per què Hugo

Hugo és un generador de llocs estàtics escrit en Go: compila 2.300+ pàgines en qüestió de segons, sense dependència de runtime, amb un sistema de templates potent i net. Per a un blog fotogràfic amb 15 anys d'historial, Hugo fa exactament el que ha de fer: transformar Markdown en HTML ràpid i deixar el contingut a l'abast de qui l'ha creat.

La migració sencera —amb la seva escala planificada: backup complet, desplegament de l'HTML, verificació URL a URL, i només aleshores retirada del WordPress— és un procés que qualsevol persona amb un blog de WordPress pot replicar. Ara el blog és més ràpid, més segur, i 15 anys de fotografies continuen allà on són.

→ [blog.pocallum.cat](https://blog.pocallum.cat)
