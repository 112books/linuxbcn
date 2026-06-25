# Claude Context

Todo el contexto del agente de IA se ha centralizado en: **[AGENTS.md](AGENTS.md)**.

---

# CLAUDE.md — linuxbcn.com

> Fitxer de context per a Claude (i qualsevol assistent IA o col·laborador humà).
> Actualitza'l quan canviï una decisió d'arquitectura, no pas per a cada commit.

---

## 1. Descripció del projecte

**LinuxBCN** és una consultoria d'acompanyament en identitat digital adreçada a artistes,
col·lectius culturals i microempreses amb valors. El lloc web és la seva presència pública
principal i ha de reflectir amb exactitud el posicionament: programari lliure, privacitat,
sobirania de dades i independència tecnològica.

- **Domini de producció:** linuxbcn.com
- **Responsable:** Joan Martínez Serres (Joan Linux)
- **Idioma principal de treball (copy i contingut):** Català
- **Idiomes del lloc:** Català (ca) · Anglès (en) *(Castellà descartat explícitament)*
- **Kit Digital:** Rebutjat explícitament per raons ètiques. No esmentar mai com a opció.

---

## 2. Arquitectura tècnica

### Generador de llocs
- **Hugo** (versió recent estable, tema 100% propi, des de zero)
- Format de configuració: **TOML**
- `defaultContentLanguage = "ca"`
- Taxonomies Hugo per filtrar projectes per sector

### Tema
- Tema **completament propi**, sense base de tercers
- Estètica: **minimal · hacking · jazz Monk style**
- Animacions: elegants i subtils (CSS-first, cap library JS gratuïta no auditada)
- Tipografia: triada expressament per al projecte, sense Google Fonts (self-hosted o system stack)
- Cap CDN extern no auditat

### CMS
- **Decap CMS** (antic Netlify CMS)
- Backend: **Git Gateway via Netlify** (tot i que el deploy final és al VPS propi)
- Útil per a edició no-tècnica de continguts per part del client/joan

### Analítica
- **GoatCounter** — `https://linuxbcn.goatcounter.com` (compte: hola@linuxbcn.com)
- Dashboard privat a `/admin/` (proxy PHP a `static/admin/gc-proxy.php`)
- Token de la API a `gc-proxy.php` línia 2 — regenerar-lo a goatcounter.com/settings/api si dona error 400 amb HTML
- GoatCounter té **rate limiting** agressiu: les crides a `/api/v0/stats/*` han de ser **seqüencials amb ~350ms de delay** entre elles (429 si es fan en paral·lel)
- Endpoints vàlids confirmats: `/stats/total`, `/stats/hits`, `/stats/refs`, `/stats/browsers`, `/stats/systems`, `/stats/sizes`
- Zero Google Analytics, zero Meta Pixel, zero scripts de tercers no auditables

### Formularis
- Formulari de diagnosi inicial (intake)
- Sense backend propietari: Netlify Forms o solució self-hosted (Formspree open, Getform, o script PHP propi al VPS)
- Camps mínims: nom, tipus de projecte, missatge, consentiment RGPD

---

## 3. Entorns de treball

| Entorn | Descripció | URL |
|---|---|---|
| **Local** | `hugo server` en màquina de casa o feina | `http://localhost:1313` |
| **Staging** | GitHub Pages protegit amb contrasenya | `https://joanlinux.github.io/linuxbcn/` (o similar) |
| **Producció** | VPS propi a Dinahosting, deploy manual | `https://linuxbcn.com` |

### Repositori
- **GitHub** (repositori principal)
- Branca `main` → producció
- Branca `dev` → staging i proves
- Deploy: **manual** via `hugo build` + `rsync` al VPS

### Flux de treball habitual
```bash
# Treball local
hugo server

# Quan està llest per a staging
git push origin dev
# → GitHub Pages serveix automàticament la branca dev (protegida)

# Quan aprovat, merge a main i deploy a producció
hugo --minify
rsync -avz --delete public/ user@vps:/var/www/linuxbcn.com/
```

---

## 4. Estructura de directoris Hugo

```
linuxbcn.com/
├── archetypes/
├── assets/
│   ├── css/
│   │   ├── main.css
│   │   └── components/
│   ├── js/
│   │   └── main.js        # Mínim, sense dependencies no auditades
│   └── fonts/             # Fonts self-hosted
├── content/
│   ├── ca/                # Contingut en català (idioma per defecte)
│   ├── es/
│   └── en/
├── i18n/
│   ├── ca.toml
│   ├── es.toml
│   └── en.toml
├── layouts/
│   ├── _default/
│   ├── partials/
│   └── shortcodes/
├── static/
│   └── img/
├── config/
│   ├── _default/
│   │   ├── config.toml
│   │   ├── languages.toml
│   │   ├── menus.toml
│   │   └── params.toml
│   ├── staging/
│   │   └── config.toml    # Overrides per a staging (noindex, etc.)
│   └── production/
│       └── config.toml
├── static/
│   └── admin/             # Decap CMS
│       ├── index.html
│       └── config.yml
└── CLAUDE.md              # Aquest fitxer
```

---

## 5. Arquitectura de continguts

### Seccions principals
| Ruta | Propòsit |
|---|---|
| `/` | Homepage — tagline + proposta de valor |
| `/solucions/` | Paquets per perfil client |
| `/com-treballem/` | Metodologia, paquets d'hores, límits professionals |
| `/projectes/` | Portfolio filtrable per sector (taxonomia Hugo) |
| `/qui-som/` | Biografia, timeline tecnologia+cultura, valors |
| `/contacte/` | Formulari de diagnosi + Telegram + email |
| `/serveis/` | Serveis tècnics (hosting, manteniment) — seccio secundaria |

### Taxonomies
```toml
[taxonomies]
  sector = "sectors"     # musica, espai-cultural, editora, media-veïnal, microempresa
  tecnologia = "tecnologies"
```

### Perfils de client
1. Músics / artistes (Ivan Kovacevic, Barcelona Big Blues Band, Bratia)
2. Espais culturals (Nau Bostik)
3. Editores independents (112Books)
4. Mitjans veïnals (Revista Carrer, FAVB)
5. Microempreses locals (Family Art Tattoo, restaurants, hotels)

---

## 6. Nomenclatura i convencions

### Slugs i fitxers
- Tot en **minúscules, sense accents, espais substituïts per guions**
- Exemples: `com-treballem`, `qui-som`, `solucio-musics`, `ivan-kovacevic`
- Noms de fitxers de contingut: `_index.ca.md`, `ivan-kovacevic.ca.md`

### Variables CSS
- Prefix `--lbcn-` per a totes les variables del projecte
- Exemple: `--lbcn-color-accent`, `--lbcn-font-display`, `--lbcn-spacing-xl`

### Classes CSS
- BEM o classes utilitàries pròpies, sense Tailwind ni Bootstrap
- Prefix de component: `.lbcn-nav`, `.lbcn-hero`, `.lbcn-card-solucio`

### IDs d'ancoratge
- Lowercase amb guions: `#qui-som`, `#contacte`, `#paquets-hores`

### Branques Git
- `main` — producció estable
- `dev` — desenvolupament i staging
- `feature/nom-de-la-funcionalitat` — funcionalitats en curs

### Missatges de commit
```
tipus: descripció breu en català

Tipus: feat · fix · style · content · config · docs · refactor
Exemple: "content: afegeix projecte bratia a portfolio"
         "feat: formulari de diagnostic amb validacio"
         "fix: menu mobil no tancava al clicar exterior"
```

---

## 7. Estàndards de qualitat i accessibilitat

### HTML
- HTML5 semàntic: `<main>`, `<nav>`, `<article>`, `<section>`, `<aside>`, `<header>`, `<footer>`
- Validació W3C sense errors
- `lang` per idioma en cada pàgina (`<html lang="ca">`)

### Accessibilitat
- **WCAG 2.1 AA** com a mínim, aspirar a AAA en elements clau
- Contrast mínim 4.5:1 per a text normal, 3:1 per a text gran
- Tot element interactiu accessible per teclat
- `alt` descriptiu en totes les imatges
- `aria-label` on calgui
- No dependència de color com a únic indicador

### Performance
- Core Web Vitals en verd (LCP < 2.5s, CLS < 0.1, FID/INP < 200ms)
- Imatges: WebP com a format principal, `loading="lazy"` excepte above-the-fold
- Cap JS bloquejant al `<head>`
- CSS crític inline si cal (Hugo Pipes)

### SEO tècnic
- `<meta name="robots" content="noindex">` a l'entorn de staging
- Sitemap XML generat per Hugo
- Canonical URLs configurades
- Open Graph + Twitter Card per a cada pàgina
- Schema.org LocalBusiness / Person per a Joan Linux

### Seguretat
- HTTPS forçat (certificat Let's Encrypt al VPS)
- Headers de seguretat via `.htaccess` o configuració Nginx:
  - `Content-Security-Policy`
  - `X-Frame-Options: DENY`
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy`
- Cap dependència JS externa sense auditoria prèvia
- Decap CMS: accés restringit, no públic

---

## 8. Comunicació i contacte

### Canal per a nous clients (prospects)
- Formulari web de diagnosi (intake)
- Email: joan@linuxbcn.com (o equivalent)
- **Cap número de telèfon públic**

### Canal per a clients actius
- Canal privat de **Telegram** per projecte
- Sistema de **paquets d'hores** prepagades

### Xarxes socials
- **Instagram:** `@linuxbcn_oficial` → `https://www.instagram.com/linuxbcn_oficial/` (al footer)
- Presència mínima, si escau: Mastodon (Fediverse), no Meta/Twitter/X

---

## 9. Decisions ètiques inamovibles

Aquestes decisions **no es reconsiderin** ni en future sessions:

1. **Programari lliure sempre** que existeixi alternativa equivalent
2. **Sense Google** (Analytics, Fonts, Maps, reCAPTCHA, Tag Manager)
3. **Sense Meta** (Pixel, SDK, qualsevol script)
4. **Sense Kit Digital** — ni esmentar, ni recomanar
5. **Sense dependències JS no auditades** al frontend
6. **Fonts self-hosted** o system font stack
7. **Analítica self-hosted** (Umami/Plausible)
8. **Formularis sense backend propietari** de tercers tancats
9. **RGPD** per disseny, no com a pegot posterior
10. **Cap link de pagament** a processadors que no respectin privacitat

---

## 10. Estètica i to de veu

### Visual
- **Minimal** — espai en blanc generós, jerarquia tipogràfica clara
- **Hacking** — precisió tècnica visible, sense ornamentació buida
- **Jazz Monk** — irregularitat elegante, estructures que semblen improvisades però no ho són
- Animacions: subtils, amb propòsit, sense reclam d'atenció
- Fotografia: present, amb pes, de Joan (no stock)

### Textual
- **Llengua principal:** Català
- **Llenguatge inclusiu** en tots els textos (desdoblaments o neutres)
- **To:** expert sense ser pedant, proper sense ser informal
- **Tagline:** *"Solucions digitals a mida. Programari lliure, sense complicacions."*
- Sense jerga corporativa, sense "ecosistema", sense "sinergies"
- Rebuig explícit del Kit Digital: no s'esmenta mai positivament

---

## 11. Funcionalitats V1 (llançament)

- [ ] Homepage amb proposta de valor clara
- [ ] Pàgina `/solucions/` amb paquets per perfil
- [ ] Pàgina `/com-treballem/` amb estructura d'hores i límits
- [ ] Pàgina `/projectes/` filtrable per sector (JS mínim o Hugo taxonomies)
- [ ] Pàgina `/qui-som/` amb timeline paral·lel tecnologia / cultura
- [ ] Pàgina `/contacte/` amb formulari intake + botó Telegram
- [ ] Cerca lleugera (Hugo native search amb Fuse.js o similar)
- [ ] Decap CMS configurat per a edició bàsica de continguts
- [ ] Analítica self-hosted integrada
- [ ] Suport trilingüe complet (ca/es/en)
- [ ] RSS feed per a `/projectes/`
- [ ] Sitemap XML
- [ ] 404 personalitzada
- [ ] Favicon i web app manifest
- [ ] humans.txt amb contingut significatiu
- [ ] Headers de seguretat (ja és al punt 7 però no al checklist V1)
- [ ] Open Graph / meta social (idem)
- [ ] robots.txt conscient
- [ ] MalditasMaquinas crear secció i fer que el link del peu i vagui. Esplicar què és i perquè i treballem.

---

## 12. Fora d'abast (V1)

- Blog o publicació periòdica de continguts (V2)
- Àrea de client (V2/V3)
- Integració amb calendari de reserva online
- E-commerce o pagament en línia
- App mòbil
- Zona de clients amb tarifes → V2
- Llistat públic de clients → decisió pendent (no és V1 ni V2, és una decisió estratègica)

---

## 13. Referents i inspiració

- Webs d'estudi de disseny europeu: Studio Dumbar, Atelier Carvalho Bernau
- Estètica terminal/CLI aplicada a disseny web
- Monk: estructura rígida, expressió lliure dins dels límits
- Documentació tècnica ben escrita (no pàgines de màrqueting)

---

## 14. Historial de decisions rellevants

| Data | Decisió | Raó |
|---|---|---|
| 2025-04 | Rebuig Kit Digital | Ètica: condiciona llibertat tecnològica dels clients |
| 2025-04 | Hugo + tema propi | Llibertat total, sense dependències de tercers |
| 2025-04 | Decap CMS + Git Gateway | Edició accessible sense infraestructura pròpia per a CMS |
| 2025-04 | VPS Dinahosting per a prod | Sobirania de dades, proveïdor local |
| 2025-04 | GitHub Pages per a staging | Pràctic, gratuït, aïllat de producció |
| 2025-04-13 | La 404 animada Matrix/Dodi com a decisió de disseny | Personalitat del projecte |
| 2025-04-13 | Relació LinuxBCN ↔ MalditasMaquinas → pendent de resolució | Tensió estratègica documentada, no resolta |
| 2026-04-16 | GoatCounter en lloc d'Umami/Plausible | Compte creat a linuxbcn.goatcounter.com; proxy PHP per evitar CORS |
| 2026-04-16 | Instagram @linuxbcn_oficial al footer | A l'esquerra del dimoni MalditasMaquinas |
| 2026-04-16 | Admin dashboard a `/admin/` (WCAG 2.2 AA) | Accessibilitat completa, sense innerHTML amb dades externes |
| 2026-04-16 | GoatCounter API: crides seqüencials 350ms | Rate limiting (429) si es fan en paral·lel; token a gc-proxy.php |
| 2026-04-16 | Castellà descartat com a idioma del lloc | Decisió estratègica de posicionament |

---

## 15. Historial de tasques — 2026-04-18

**Projecte MalditasMaquinas — text i imatge**
- `index.ca.md` i `index.en.md`: text complet reescrit (backend distribuït, Stripe, Telegram, SPA vanilla, Hugo, multidioma, WCAG AA)
- Eliminades totes les referències a costos d'infraestructura — norma aplicable a tot el portfolio
- Camp `image: "01-malditasmaquinas.png"` afegit al frontmatter

**Imatges a tots els projectes del portfolio**
- Camp `image:` afegit al frontmatter de: malditasmaquinas, carrer, favb, pocallum, llumatics, 112books, 112revelats
- Imatges inline eliminades del body (la plantilla `single.html` ja les mostra al hero via frontmatter)
- Norma establerta: imatge principal sempre via `image:` al frontmatter; inline només per a imatges addicionals (ex. abans/després)

**Documentació del projecte**
- `CLAURE.md` (typo) renomenat i fusionat a `CLAUDE.md`
- `CLAUDE.md`: encapçalament `# Claude Context` afegit amb referència a `AGENTS.md`
- `AGENTS.md`: creat des de zero en català — propòsit, objectius, audiència (artistes, autònoms, startups, microempreses, petites empreses), principis editorials, ètica tecnològica, accessibilitat, comportaments requerits i prohibits
- `AGENTS.en.md`: versió anglesa completa i sincronitzada amb `AGENTS.md`

**Normes editorials establertes (aplicables a tot el portfolio)**
- Mai mencionar costos d'infraestructura en textos de venda
- Emfatitzar seguretat, descentralització i robustesa en lloc de cost zero
- Demostrar experiència i criteri sense autobombo explícit
- Objectiu de cada text: que el client potencial vulgui contractar LinuxBCN per al seu projecte web o de presència digital

---

## 16. Historial de tasques — 2026-04-25

**SEO, accessibilitat i seguretat — millores globals**

*SEO*
- `head.html`: Open Graph image ara usa `Resources.GetMatch` (corregit bug de URL trencada)
- `head.html`: Twitter Card afegit (`summary_large_image`)
- `head.html`: Schema.org JSON-LD `LocalBusiness` afegit (homepage only)
- `head.html`: `x-default` hreflang corregit → apunta a `/ca/` (no a `/`)
- `head.html`: `<link rel="manifest">` i `<meta name="theme-color">` afegits
- `config.toml`: `description` per idioma (CA + EN) afegit als `[languages.XX.params]`
- `static/robots.txt`: creat — permet tot excepte `/admin/`, declara sitemap
- `static/humans.txt`: creat amb equip, tecnologia i estàndards
- `static/site.webmanifest`: creat per a PWA/web app metadata

*Accessibilitat (WCAG 2.1 AA)*
- `baseof.html`: skip-to-content link afegit (`<a class="skip-link" href="#main-content">`)
- `baseof.html`: `id="main-content"` afegit a `<main>`
- `header.html`: `aria-hidden="true"` a tots els SVGs del nav mòbil
- `header.html` + `footer.html`: text hardcoded CA substituït per `{{ i18n "..." }}`
- `i18n/ca.toml` + `i18n/en.toml`: creats amb strings de nav i footer
- `main.css`: estils `.skip-link` / `.skip-link:focus` afegits

*Seguretat*
- `static/.htaccess`: security headers complets — CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy
- `.htaccess`: compressió Deflate i caché d'assets estàtics afegits
- `static/js/lightbox.js`: script del lightbox extret d'inline → fitxer extern (permet CSP sense `unsafe-inline`)
- `layouts/projectes/single.html`: inline script substituït per `<script src defer>`

**Galeria d'imatges — projecte positivador**
- `layouts/shortcodes/gallery.html`: shortcode creat — grid de 3 columnes, integrat amb lightbox existent
- `content/projectes/app-positivador/index.ca.md` + `index.en.md`: galeria afegida amb les 3 captures de pantalla
- `main.css`: estils `.project-gallery` i `.gallery-item` afegits

**Fixes de producció — galeria, CSP, admin dashboard**
- `content/projectes/app-positivador/`: `.PNG` → `.png` (Linux és case-sensitive, fallava en producció)
- `static/.htaccess`: CSP afegit `unsafe-inline` per scripts inline (404 animada i admin dashboard)
- `static/admin/index.html`: JS complet reescrit — KPIs seqüencials 350ms (fix rate limiting 429), selector de període 7d/30d/3m/1a, botó refresc, labels dinàmics

**Dashboard d'estadístiques — redisseny complet**
- Nova secció "projectes amb més interès" (filtra `/projectes/` de les hits)
- Targetes dispositiu: mobile / tauleta / escriptori amb percentatges (agrupa mides GoatCounter)
- Icones per a navegadors (🦊🟡🔵…) i sistemes operatius (🐧🍎🪟…)
- Explicació contextual quan referrers és buit (normal en site nou)
- Link directe a GoatCounter natiu al header (`↗ dades originals`)
- Secció "accions per augmentar visites" amb prioritats (GSC, backlinks, Instagram, GMB…)

**Indexació a motors de cerca i IA**
- `static/llms.txt`: creat — guia estructurada per a ChatGPT, Perplexity, Claude, Copilot
- `static/robots.txt`: actualitzat — autoritza explícitament GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, anthropic-ai, cohere-ai; declara 3 sitemaps
- `static/ae5b2e9e405343b5b21fa81ad8b4b547.txt`: clau IndexNow
- `static/.htaccess`: redirects 301 des de URLs antigues de WordPress (wp-admin, category, tag, paginació, feeds, pàgines conegudes)
- **Google Search Console**: sitemaps CA (28 pàgines) + EN enviats i verificats
- **IndexNow**: 48 URLs enviades a Bing, Yandex, DuckDuckGo, Seznam, Naver (HTTP 202)

**Norma IndexNow**
- Clau: `ae5b2e9e405343b5b21fa81ad8b4b547`
- Fitxer de clau: `static/ae5b2e9e405343b5b21fa81ad8b4b547.txt`
- Per a nous deploys importants: `curl -X POST https://api.indexnow.org/indexnow` amb JSON `{host, key, keyLocation, urlList}`

---

## 17. Historial de tasques — 2026-04-25 (sessió 2)

**Nou projecte: Estenop**
- `content/projectes/app-estenop/index.ca.md`: creat — títol "Estenop — Calculadora pinhole", text complet en català (descripció, funcionament pas a pas, versions gratuïta i Pro)
- `content/projectes/app-estenop/index.en.md`: creat — versió anglesa completa i sincronitzada
- URL definitiva: `https://estenop.linuxbcn.com/`
- Client: LinuxBCN (eina pròpia), sector: fotografia
- Pendent: afegir imatge `estenop.png` al page bundle

**Estenop — descripció del producte**
- Calculadora d'exposició per a càmeres estenopeiques (pinhole)
- Usa la càmera del mòbil com a fotòmetre
- Correcció de reciprocitat per a més de 20 emulsions (HP5, T-Max, FP4, Pan F, Fomapan…)
- Temporitzador integrat
- Offline, sense compte, sense dades que surtin del dispositiu
- Versions: gratuïta (càlcul complet) / Pro 10 € pagament únic (mode spot, historial, biblioteca càmeres)
- Codi font: `https://github.com/112books/estenop`

**Ordre del portfolio actualitzat**
- Pesos reordenats (CA i EN) per reflectir: Estenop (1) → Positivador (2) → Bratia (3) → Machiroku (4) → Nau Bostik (5) → resta sense canvi
- Corregit conflicte de weight: Nau Bostik era 3 (igual que Bratia) → passat a 5

---

## 18. Historial de tasques — 2026-04-29

**Dashboard /admin/ reescrit — arquitectura cache JSON + Chart.js**

*Problema resolt*
- El dashboard anterior feia 1 crida API per dia del gràfic (7 dies = 7 crides × 350ms ≈ 2.5s mínims; 30 dies ≈ 11s). Les dades dels KPIs eren inconsistents per rate limiting de GoatCounter.

*Arquitectura nova (igual que Machiroku)*
- `static/admin/fetch-analytics.php`: script PHP que fa **5 crides API seqüencials** a GoatCounter (~5s) i escriu `analytics-cache.json` al directori `/admin/`. S'activa manualment amb el botó "↻ actualitzar" del dashboard.
- `static/admin/analytics-cache.json`: cache JSON amb totes les dades (hits per dia, pàgines, idiomes, seccions, projectes, referrers, navegadors, SO, dispositius). Carregat en una sola petició HTTP instantània. Inclou fitxer de mostra per preview local.
- `static/admin/index.html`: dashboard completament reescrit:
  - KPIs calculats al client des del JSON (avui / 7d / 30d / total any)
  - Gràfic Chart.js (self-hosted) — línia amb àrea de fill, hover tooltips, selector dia/setmana/mes
  - Tabs: Temporal / Pàgines / Dispositius
  - Barres animades amb CSS transition
  - "Darrera actualització" al topbar
  - Eliminada la secció "Accions per augmentar visites"
- `static/js/chart.umd.min.js`: Chart.js 4.4.0 self-hosted (no CDN extern, compleix política JS del projecte)

*Deploy i rsync*
- `sync-linuxbcn.sh`: afegits `--no-times --ignore-errors` al rsync i excludes per a dirs legacy del VPS (`wptest`, `linuxbcn`, `favb`) — evita exit code 23 i warnings en futurs deploys

*Flux d'ús al VPS*
1. Primer accés: prémer "↻ actualitzar" per generar la caché (~5s)
2. Accessos posteriors: carrega instantània des de `analytics-cache.json`
3. Requerit: PHP + permisos d'escriptura al directori `/admin/` (ja existents si `gc-proxy.php` funcionava)

---

## 19. Historial de tasques — 2026-05-09

**Fix analytics dashboard — GoatCounter API v0**

- `fetch-analytics.php`: fix parsing resposta API
  - `/stats/refs` → `/stats/toprefs`
  - `$raw['browsers']` → `$raw['stats']` (ídem systems, sizes, locations, refs)
  - `norm_items`: llegir `item['count']` directament (no `stats[].daily`)
  - **Resultat:** navegadors, SO i dispositius ja apareixen al dashboard
- `index.html`: KPI "pàg./sessió" → "mitjana/dia"
  - GoatCounter API v0 no retorna `total_unique` → impossible calcular pàg./sessió
  - Substituït per `total / dies_amb_dades` (mitjana diària)
- **Deploy admin a linuxbcn.com:** SSH clau no configurada al compte Dinahosting
  - Solució: pujar `fetch-analytics.php` i `index.html` manualment via gestor de fitxers web Dinahosting → `www/admin/`
  - ⚠️ Per configurar SSH: Dinahosting panell → "Claves SSH" → afegir `ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIE6DQIGshYP8gth7ZHyG+r/cegO+oe9LSBPOqhBIYO8Q hola@112books.eu`

---

## 20. Historial de tasques — 2026-05-23

**Disseny i maquetació — millores globals**

*Header sticky col·lapsable*
- `static/js/header.js`: creat — detecta scroll (>20px) i afegeix/treu classe `.is-scrolled` al `.site-header`
- `layouts/_default/baseof.html`: afegit `<script src="js/header.js" defer>` just abans de `</body>`
- `layouts/partials/header.html`: afegit `.nav-brand-compact` (logo petit) com a primer fill de `.header-nav-inner`
- `static/css/main.css`:
  - `.site-header`: ara és `position: sticky; top: 0; z-index: 200`
  - `.header-top`: col·lapsa en scroll amb `max-height` + `visibility` transition (0.3s)
  - `.header-nav`: eliminat sticky (ara el porta el site-header)
  - `.nav-brand-compact`: ocult per defecte (`max-width: 0; min-width: 0; overflow: hidden; opacity: 0`); apareix en scroll amb `max-width: 160px; opacity: 1; margin-right: auto`
  - **Clau:** `min-width: 0` necessari per evitar que flexbox ignori el `max-width: 0`

*Alineació menú ↔ contingut principal*
- Problema: `.header-nav-inner` tenia `padding-left: 1.5rem` i `.nav-link` afegeix `padding-left: 1.1rem` → el text dels links quedava a 2.6rem, no alineat amb el contingut (1.5rem)
- Solució: `padding-left: 0.4rem` al nav-inner (0.4 + 1.1 = 1.5rem = alineat)
- En estat scrolled: `.site-header.is-scrolled .header-nav-inner { padding-left: 1.5rem }` per mantenir el logo alineat amb el contingut
- En estat no-scrolled: `margin-right: 0` al logo compacte (no consumeix espai i no desplaça els links)

*Graella de projectes → llista horitzontal*
- `.projects-grid`: de `grid 2 columnes` a `flex column` amb `gap: 2rem; border-top; padding-top: 2rem`
- `.project-card`: de flex-column a `grid 2fr 3fr` (imatge esq, text dreta), `min-height: 180px`
- Eliminada la distinció visual de `project-card--featured` (tots iguals)
- Imatge: omple l'alçada de la targeta (`height: 100%; object-fit: cover`)
- Placeholder: usa `--accent-faint` (eliminat `#e8e6e0` hardcoded)
- Mòbil (<540px): torna a layout vertical (imatge 16:9 a dalt, text a sota)

*Footer*
- Tagline "LinuxBCN · ..." ara amb `color: var(--accent)` (inline style al partial)

*GitHub Actions — fix deploy staging*
- Error 401 Bad credentials al deploy de GitHub Pages
- Solució: Settings → Pages → Source canviat a "GitHub Actions" (estava en "Deploy from a branch")

---

## 21. Historial de tasques — 2026-06-24

**SEO, rendiment i cercabilitat per robots/IA — audit complet**

*SEO tècnic*
- `head.html`: description via `jsonify` (fix escapes), url org → arrel, geo coords, serviceType, logo schema, sameAs expandit
- `head.html`: hreflang x-default page-relative (range loop, no where filter), guard `{{ if .File }}` per taxonomies
- `head.html`: font preload (IBM Plex Sans 300 + Mono), dns-prefetch gc.zgo.at, GoatCounter src HTTPS explícit
- `head.html`: CSS via Hugo Pipes — `resources.Get | minify | fingerprint` (assets/css/main.css creat)
- `assets/css/main.css`: còpia de static/css/main.css per a Hugo Pipes; fonts `url('../fonts/...')` correctes
- `description` i `lastmod: "2026-06-24"` afegits a **totes** les pàgines: homepage CA+EN, solucions CA+EN, musics CA+EN, collectius CA+EN, microempreses CA+EN, qui-som CA+EN, contacte CA+EN, com-treballem CA+EN, tots els projectes CA+EN (38 fitxers)
- Fix "Casalprospe" → "Casal de barri de Prosperitat" al text anglès de qui-som

*Imatges i rendiment*
- `projectes/single.html`: WebP via `.Process "webp"`, dimensions explícites, `fetchpriority="high"` al hero, CreativeWork/SoftwareApplication schema, bloc CTA "Parlem"
- `projectes/list.html`: WebP resize 600px amb dimensions explícites a les cards
- Fix: imatges amb `.cat.` al nom (01-favb.cat.png, pocallum.cat.png) no trobades per `Resources.GetMatch` — Hugo les tracta com a fitxers d'idioma. Solució: renomenar a `01-favb.png` i `pocallum.png`
- Fix: `sync-linuxbcn.sh` tenia `--exclude='favb'` (qualsevol nivell) → canviat a `--exclude='/favb'` (només arrel del servidor, directori legacy WordPress)

*Robots i IA*
- `robots.txt`: afegit Google-Extended, Applebot-Extended, Amazonbot, meta-externalagent (Allow: /)
- `llms.txt`: Ressona afegit, data actualitzada; apunta a llms-full.txt
- `llms-full.txt`: creat — contingut complet en prosa per a models de llenguatge (descripció, metodologia, serveis, tots els projectes, principis, contacte)
- `static/cerca/_index.ca.md` i `_index.en.md`: `sitemap: disable: true` (pàgines JS sense contingut indexable)

*Seguretat i infraestructura*
- `.htaccess`: redirect HTTP→HTTPS afegit, CSP amb gc.zgo.at a connect-src i web3forms a form-action
- `.htaccess`: posteriorment eliminat el redirect HTTPS — Dinahosting fa terminació SSL al proxy sense passar X-Forwarded-Proto, causava bucle infinit (ERR_TOO_MANY_REDIRECTS)

*Analytics dashboard fix*
- `fetch-analytics.php`: GoatCounter v0 `/stats/hits` retorna `daily` com a array de 24 ints horaris (no escalar). Fix: `array_sum($stat['daily'])` en lloc de `(int)$stat['daily']`
- `index.html`: `isoToday()` i `daysAgo()` reescrits per usar hora local (no UTC)

*Portfolio i contingut*
- Ressona afegit com a primer de "Projectes propis" a `_index.ca.md` i `_index.en.md`
- 112 Revelats afegit a "Projectes propis" (CA+EN)
- Fix: Ressona descrita com "escola de música" (incorrecte) → corregit a "plataforma d'identitat digital per a artistes" a: _index CA+EN, ressona/index CA+EN, llms-full.txt

*UX — scroll progress i back-to-top*
- `static/js/scroll-progress.js`: nou — barra de 2px a la part superior + botó circular SVG
- Botó: cercle SVG amb anell de progrés (`stroke-dashoffset` actualitzat per JS), colors corporatius (accent `#d4600a`, fons `#fdf6ef`), fletxa ↑ centrada, apareix als 300px de scroll
- `baseof.html`: `#scroll-progress` i `#back-to-top` (SVG) afegits; script `defer` al final del body

---

## 22. Pendent — 2026-06-24

**Tècnic (proper sessió)**
- Corregir deprecation warnings de Hugo: `_build` → `build` al frontmatter, `.Site.Languages` al template
- Nau Bostik: no té imatge a la llista de projectes — afegir-ne una o aclarir si és projecte lliurat o proposta

**Contingut (requereix Joan)**
- Homepage: 172 paraules actuals → 500+ per tenir pes SEO (desenvolupar "el que fem" i "com ho fem")
- Qui som: biografia de Joan Linux amb nom real, trajectòria concreta i veu pròpia
- Contacte: ampliar el text per sobre del formulari
- Nau Bostik: aclarir si és projecte lliurat o proposta i actualitzar el text
- Testimonials: una o dues cites reals de clients

**⚠️ blog.pocallum.cat — SSL resolt temporalment, pendent solució definitiva**
- Certificat caducat el 2026-06-24. Generat manualment amb certbot (DNS challenge) i instal·lat per Dinahosting
- **Caduca el 2026-09-22** — cal renovar manualment abans o aconseguir que Dinahosting creï hosting independent per al subdomini (renovació automàtica)
- Fitxers de renovació: `Desktop/blog.pocallum.cat-certificat.md` amb instruccions completes

**Accions externes (fora del codi)**
- **Google Business Profile (GBP)**: crear fitxa — és el pas amb més impacte SEO local pendent
- Unificar email: `joan@linuxbcn.com` i `hola@linuxbcn.com` apareixen barrejats al lloc
- Demanar backlink des dels webs de Bratia, 112Books, Nau Bostik, Machiroku, FAVB, Carrer.cat, MalditasMaquinas cap a linuxbcn.com
- Enviar Estenop a softcatalà.org (backlink de qualitat, directori de programari en català)

---

*Última actualització: 2026-06-24*
*Mantenidor: Joan Martínez Serres — joan@linuxbcn.com*
