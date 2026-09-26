# Pla: analítica fiable + més visites — linuxbcn.com

> Creat 2026-09-26. Pendent d'executar. Esborrar o arxivar quan estigui fet.

## 0. Diagnosi (2026-09-25)

- GoatCounter registra des del **2026-04-15**. Total fins 2026-09-25: **1.152 visitants** (~7/dia).
- Dashboard `/admin/` coincideix amb l'API (1.113 = total sense avui ni `/admin`). **Les dades són correctes.**
- Per mes: abr 264 · mai 197 · jun 281 · jul 131 · ago 152 · set 127.
- Referrers: directe 387 · Google 23 · Facebook 19 · linuxbcn.cat 7 · chatgpt.com 5.
- Forats a zero: 17–19 jul, 29 jul–2 ago, 25–29 ago (no verificat si és trànsit real o tracking caigut).
- Causes de "poques visites":
  1. GoatCounter compta **visitants únics per pàgina/sessió**, no pàgines vistes.
  2. **Adblockers** (uBlock, Brave, Firefox estricte, EasyPrivacy) bloquegen `gc.zgo.at` i `*.goatcounter.com` → pèrdua gran amb públic pro-privacitat.
  3. Trànsit orgànic real baix (Google = 23).

---

## 1. Comptador first-party (anti-adblock)

Objectiu: que ni l'script ni l'enviament toquin dominis de GoatCounter.

### Passos
1. Descarregar `https://gc.zgo.at/count.js` → `static/js/m.js` (nom neutre; evitar `count.js`, `stats.js`, `analytics`, `goatcounter` al path — les llistes de filtres els detecten). Anotar versió i data a la capçalera del fitxer (auditoria JS).
2. Crear proxy `static/v/index.php`:
   - Rep GET/POST de `count.js` amb la query string (`p`, `r`, `t`, `e`, `s`, `b`, `q`, `rnd`).
   - Reenvia a `https://linuxbcn.goatcounter.com/count?<mateixa query>` amb cURL.
   - **Headers obligatoris** (si no, GoatCounter ho marca com a bot o fusiona sessions):
     - `User-Agent` del visitant (sense UA = bot, es descarta en silenci)
     - `X-Forwarded-For: <REMOTE_ADDR del visitant>`
     - `CF-Connecting-IP: <REMOTE_ADDR>` (el cas CloudFront documentat ho necessita; posar-ne tots dos)
     - `Accept-Language`, `Referer`
   - ⚠️ Dinahosting fa terminació SSL al proxy: comprovar que `$_SERVER['REMOTE_ADDR']` és la IP real del visitant i no la del proxy (mirar també `HTTP_X_FORWARDED_FOR` / `HTTP_X_REAL_IP`). Si surt la IP del proxy intern → usar el header que porti la real.
   - Respondre sempre `204` ràpid (o GIF 1×1), timeout cURL curt (3s), sense logs d'IP (RGPD).
3. `layouts/partials/head.html`:
   ```html
   <script data-goatcounter="/v/" async src="/js/m.js"></script>
   ```
4. `.htaccess` CSP: ja cobert per `'self'`. Es pot treure `gc.zgo.at` i `linuxbcn.goatcounter.com` de `script-src`/`connect-src` quan tot funcioni.
5. Excloure `/v/` de `robots.txt` (Disallow) i del sitemap.
6. **Validar abans de donar-ho per bo** (llegir primer https://www.goatcounter.com/help/countjs-host i /help/backend per confirmar quin header d'IP accepta el GoatCounter hostatjat):
   - Visitar amb uBlock actiu → la visita ha d'aparèixer al panell de GoatCounter.
   - Des de 2 xarxes diferents → han de sortir com a 2 visitants i amb la ubicació correcta (si tots surten a la ciutat del servidor = la IP no arriba bé).
   - Comparar 1–2 setmanes abans/després: el recompte hauria de pujar.

### Fix menor del dashboard
- `static/admin/fetch-analytics.php`: `$end = date('Y-m-d')` (ara és ahir → el KPI "avui" sempre 0).

### Contrast amb logs del servidor (opcional)
- Panell Dinahosting → estadístiques (AWStats/Webalizer) o `~/logs` per SSH: comparar juliol/agost amb GoatCounter per quantificar la pèrdua i explicar els forats.

---

## 2. Més visites — aprofitar els 27 projectes

La palanca més gran: **cada projecte és un backlink potencial i una pàgina que pot posicionar per cerca de cua llarga.**

### 2.1 Enllaçat intern (ràpid, dins del repo)
- El llistat `/projectes/` és **manual**. Aquests slugs no apareixen com a `projectes/<slug>` a `_index.ca.md` (verificar si hi són amb un altre URL o falten de veritat):
  `112books.eu-theme, 9-barris-acull, app-estenop, awpcp, cuida, family-art-tattoo, gestor-hores, goatcounter-dashboard, konsento, LinuxBCN-Analytics-for-GoatCounter, nau-bostik, terra-i-foc`
  → els que faltin, afegir-los (CA + EN). Pàgina sense enllaços interns = gairebé invisible per a Google.
- Bloc "Projectes relacionats" al final de `projectes/single.html` (mateix sector/tecnologia via taxonomies).
- Des de `/solucions/musics`, `/collectius`, `/microempreses` enllaçar els projectes de cada perfil com a exemples.
- Slugs amb majúscules (`App-positivador`, `LinuxBCN-Analytics-for-GoatCounter`): passar a minúscules + redirect 301 a `.htaccess`.

### 2.2 Backlinks des dels projectes (impacte alt, requereix Joan)
- Peu de pàgina a cada web client: "Web: LinuxBCN" → `https://linuxbcn.com/ca/projectes/<slug>/`. Llista: Bratia, 112Books, Nau Bostik, Machiroku, FAVB, Carrer, Family Art Tattoo, Llumatics, Pocallum, blog.pocallum.cat, 9barrisimatge.org, Terra i Foc, MalditasMaquinas, Ressona, Cuida…
- README de cada repo (GitHub/Codeberg): enllaç a la pàgina del projecte a linuxbcn.com.

### 2.3 Projectes de programari lliure → comunitats (impacte alt, poca feina)
- **Estenop** → Softcatalà (directori de programari en català), subreddits/fòrums de fotografia estenopeica, Mastodon #pinhole #analogphotography.
- **112books.eu-theme** → https://themes.gohugo.io (enviar tema).
- **linuxbcn.com** i blog.pocallum.cat → https://gohugo.io/showcase/ (enviar cas: migració 2.353 posts Blogger→WP→Hugo).
- **goatcounter-dashboard / LinuxBCN-Analytics-for-GoatCounter** → issue/discussió al repo de GoatCounter, "awesome-selfhosted" / llistes d'eines de privacitat.
- **Taro, Konsento, Gestor d'hores** → Show HN / Lobsters / Mastodon amb el cas concret.

### 2.4 Contingut que respon cerques (GEO/AEO)
- A cada pàgina de projecte, un bloc "Què hem resolt" amb títols en forma de pregunta: "Com migrar un blog de Blogger a Hugo sense perdre URLs?", "Alternativa a Google Analytics sense cookies", "Calculadora d'exposició per a càmera estenopeica". Català té poca competència → posiciona fàcil.
- Avançar el blog (era V2): 1 article/mes derivat d'un projecte (la feina ja està feta, només cal explicar-la).

### 2.5 Externs
- **Google Business Profile** (pendent des de juliol; el pas local amb més impacte).
- **Bing Webmaster Tools** (importar des de GSC) — alimenta també ChatGPT Search/Copilot.
- Google Search Console: revisar "Pàgines no indexades" i demanar indexació dels projectes nous.
- Instagram @linuxbcn_oficial: 1 post per projecte amb enllaç a bio → pàgina del projecte.

### Mètrica d'èxit
- Més fiable que GoatCounter per al creixement orgànic: **impressions i clics a GSC**. Revisar mensualment.
- Objectiu orientatiu 3 mesos: Google > 100 visites/mes com a referrer; 10+ dominis enllaçant.

---

## Ordre recomanat
1. Comptador first-party + fix `$end` (1 sessió).
2. Enllaçat intern: projectes que falten al llistat + projectes relacionats (1 sessió).
3. Enviaments: Hugo themes/showcase, Softcatalà, Bing WMT, GBP (Joan, 1–2 h).
4. Backlinks als peus dels webs client (progressiu).
5. Contingut en forma de pregunta a les pàgines de projecte (progressiu).
