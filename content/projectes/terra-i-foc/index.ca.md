---
title: "Terra i Foc: ceràmica artesanal catalana, ara en línia"
slug: "terra-i-foc"
weight: 3
year: 2026
client: "Terra i Foc / Joan Martínez Serres"
sector: "artesania"
featured: true
description: "Terra i Foc — web estàtic bilingüe per a un obrador de ceràmica artesanal al Penedès. Hugo + GitHub Pages + GoatCounter sense cookies. LinuxBCN."
lastmod: "2026-07-22"
draft: false
serveis: ["web-a-mida"]
card_image: "terra-i-fooc-portada.png"
image: "terra-i-fooc-portada.png"
---

Des de **LinuxBCN.com** acabem de publicar el nou web de **Terra i Foc**, l'obrador de ceràmica artesanal fundat el 1969 per Joan Martínez Peidro i Isabel Serres al Penedès. Una història de més de cinquanta anys de fang, foc i mans que ara té un lloc per explicar-se al món.

---

## Què hem construït

Un lloc **bilingüe** (català i anglès) que recull la memòria de l'obrador en cinc grans seccions:

- **Joan** — biografia i currículum del fundador
- **Família** — cinc generacions de ceramistes, de l'avi a les nets
- **Taller** — el dia a dia: màquines, motlles, pastes, esmalts, fornades, treballadors, fires
- **Col·laboracions** — artistes com Benet Ferrer, Salvador Mañosa, Maties Palau Ferré, Joaquim Casadevall
- **Glossari** — més de 60 termes ceràmics definits (un recurs per a qualsevol ceramista)

També hi ha una **galeria** amb imatges del taller i de les peces, un **formulari de contacte** directe, i una pàgina de **crèdits** agraïnt tothom qui ha fet possible el projecte.

{{< gallery "terra-i-fooc-portada.png" >}}

---

## Com està fet

A LinuxBCN.com tenim una filosofia: tecnologia moderna amb senzillesa artesanal. Terra i Foc és un lloc **estàtic**, ràpid, sense dependències pesades ni JavaScript innecessari.

- **[Hugo](https://gohugo.io)** — generador de llocs estàtics. El web es construeix una vegada i es serveix com a fitxers HTML plans. Càrrega instantània, zero base de dades, zero servidor en marxa.
- **[GitHub Pages](https://pages.github.com)** — allotjament gratuït amb CDN global. Cada `git push` dispara un build automàtic via **GitHub Actions** i el lloc queda publicat en minuts.
- **CSS personalitzat** — dissenyat des de zero, sense frameworks. Paleta de colors terrosa (terra `#361712`, foc `#c81111`, cendra `#8a7a6e`) extreta del mateix ofici: el fang, el foc, la cendra.
- **Tipografia Jost** — preconnectada i pre-carregada des de Google Fonts per minimitzar temps de càrrega.
- **Bilingüe de veritat** — cada pàgina té versió en català i anglès, amb `hreflang` i `x-default` perquè Google i els cercadors les serveixin correctament.

---

## Privacitat primer

Aquest web **no utilitza galetes** (cookies). Cap. Ni pròpies ni de tercers. No hi ha banner de cookies perquè no cal.

- **Analítica sense galetes**: [GoatCounter](https://www.goatcounter.com), servei europeu que no instal·la cap fitxer al navegador, anonimitza les IP i no permet identificar usuaris individuals. Dashboard accessible a `/admin/` amb KPIs, gràfics temporals, seccions, dispositius i referrers.
- **Formulari de contacte**: dades via **Formspree** directament al correu del client. No es comparteixen amb tercers.
- **Pàgines legals completes**: avís legal, privacitat, cookies i accessibilitat — tot accessible des del footer del lloc.

---

## Optimització SEO / GEO / AEO

Hem treballat tres dimensions de cerca moderna:

- **SEO** — per a Google tradicional (meta etiquetes, canonical, Open Graph, Twitter Cards)
- **GEO** (Generative Engine Optimization) — per a cercadors amb IA com Perplexity, ChatGPT Search, Google AI Overviews
- **AEO** (Answer Engine Optimization) — per a featured snippets i cerca per veu

Amb esquema **LocalBusiness** amb dades del negoci, **BreadcrumbList** per navegació, i **FAQPage** al glossari (preguntes reals: "Què és el gres?", "Què són les venturines?"). Van fer una auditoria SEO/GEO/AEO completa abans de la publicació.

---

## Accessibilitat

Dissenyat seguint **WCAG 2.1 AA**: enllaç "Salta al contingut", navegació per teclat, focus visible amb contorn vermell, text alternatiu en imatges, jerarquia de capçaleres coherent, i respecte a `prefers-reduced-motion` (si teniu activat reducció d'animacions al sistema, el web les desactiva).

---

## Rendiment

Sense JavaScript de framework, sense fonts pesades, sense peticions a CDN de tercers. El CSS es minifica en build. El resultat: puntuació de performance excepcional i zero cost recurrent en servidors.

---

## CI/CD amb GitHub Actions

**Deploy** (push a main) — `push → Hugo build --minify → GitHub Pages`
Temps total: ~90 segons des del push fins que el web és live.

**Analytics** (cada hora) — `cron → GoatCounter API → process-analytics.py → analytics.json → commit`
El dashboard llegeix un JSON estàtic — sense cap petició autenticada des del navegador.

---

## El footer

Al peu del lloc, discrets, hi ha els enllaços legals (Avís legal | Privacitat | Cookies | Accessibilitat | Estadístiques) i la nostra signatura: **Powered by [LinuxBCN.com](https://linuxbcn.com)**.

---

Tot el codi és **obert**: el [repositori és a GitHub](https://github.com/112books/terraifoc.cat), per si algun altre obrador o negoci vol veure com està fet o adaptar-lo.

Per a nosaltres ha estat un projecte especial: ajudar a preservar la memòria d'un ofici artesanal català amb la tecnologia que més ens agrada. Si teniu un projecte similar, ens trobareu a **[linuxbcn.com](https://linuxbcn.com)**.

→ [terraifoc.cat](https://terraifoc.cat)