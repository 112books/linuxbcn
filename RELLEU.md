# RELLEU — on som i què toca ara

> Fitxer de traspàs entre sessions i agents (Claude, DeepSeek o qui sigui).
> Llegeix-lo **sencer** abans de tocar res. Actualitza'l en acabar cada sessió.
> Última actualització: **2026-11-19** (DeepSeek: guia 5 de l'eix músics i manteniment del servidor).

---

## 0. Abans de començar (obligatori)

1. `git pull --rebase` — s'ha treballat des de més d'una màquina. Un cop el local anava
   14 commits per darrere i un deploy hauria revertit producció.
2. Llegeix, en aquest ordre:
   - `AGENTS.md` — propòsit, to, ètica, comportaments prohibits.
   - `CLAUDE.md` §1–§10 (arquitectura i decisions inamovibles) i §36–§37 (darreres sessions).
   - `PLA-SEO-2026-11.md` — **el pla que s'està executant**. §3 són principis innegociables.
3. **El web de LinuxBCN ha de ser exemplar en tot** (paraules de Joan). És el primer que
   avaluen els clients potencials: codi, accessibilitat, schema, textos, rendiment. Cap drecera.

---

## 1. Estat actual

| Què | Estat |
|---|---|
| Darrer commit | `docs: tanca la sessio del 19 de novembre` (`a068457`) |
| Producció | ✅ fases 2, 3, 4, 1b, 1c, navegació i correccions de fets desplegades i verificades en línia (2026-11-19, 19:46). IndexNow 200 (114 URLs) |
| Staging | ✅ `gh-pages` al dia (`59c1f18`, 2026-11-19 19:46), amb `noindex` a totes les pàgines. Ja no està aturat |
| Fases fetes | 0, 1, 1a, **1b**, 1c, 2, 3, 4 i la **guia 5 de l'eix músics** (taula a `PLA-SEO-2026-11.md` §8) |
| Fase següent | **5** (tancar): només la revisió de Search Console (cal Joan) · i després els externs (GBP, backlinks) |

### Tancament de sessió — 2026-11-19

- **Bloc tècnic:** `noindex` per pàgina al `head.html`; `/cerca/` fora de l'índex (era indexable amb 10
  paraules); CTA propi per a `hugo-vs-wordpress` (/serveis/) i `wordpress-lent-o-insegur`
  (allotjament); enllaços de `web-a-mida` i `allotjament` cap a les guies.
- **Fase 1b:** `favb`, `pocallum`, `112books`, `carrer`, `contacte` i `en/solucions` passen de
  120–304 a 443–571 paraules. 10 descripcions > 160 caràcters escurçades (una era la del lloc,
  que afectava 5 pàgines).
- **Correccions de fets** (indicades per Joan): FAVB (anys administrant, redisseny, Carrer separat,
  tema pendent de refer), Carrer (disseny des de zero adaptat a la revista), Pocallum (dues fases:
  reestructuració WP i després Hugo), 40anysblues (Joan Linux, data de cada foto, QR al llibre i
  estadístiques), Estenop (no és 100 % funcional; es replanteja de zero).
- **Navegació:** icona de Serveis a la barra mòbil; la de Cerca surt de la barra (el capçal ja té la lupa).
- **W3C:** 0 errors a guies i serveis. **PageSpeed:** 100/100/100/100 a escriptori i mòbil.
- **Search Console (revisat amb Joan):** els tres sitemaps són correctes i no cal afegir-ne cap;
  GSC comptava 111 URLs perquè les lectures eren anteriors al desplegament del 19/11 (ara 114).
- **Pendent de Joan:** revisió de consultes 5–20 (Search Console), Google Business Profile,
  backlinks, unificar correu, token vell de GoatCounter, certificat de `blog.pocallum.cat` (22/12)
  i captura de `votacio-public` (1/12).

### Què es va fer a la fase 4 (2026-11-18, sessió 6)

- **Secció `/guies/`** nova: `layouts/guies/{single,list}.html` (hero amb data, contingut,
  «Altres guies», CTA al pilar) i `content/guies/_index.{ca,en}.md`.
- **4 guies CA+EN**, cada una amb FAQ al frontmatter i enllaç de tornada al pilar:
  `sortir-de-wordpress` (723 w, HowTo), `hugo-vs-wordpress` (657 w, taula comparativa),
  `wordpress-lent-o-insegur` (592 w), `migrar-de-blogger` (539 w, HowTo + cas 9 Barris).
- **Schema:** `Article` a les guies (data de publicació i modificació, autor, editor);
  el `HowTo` s'ha generalitzat (qualsevol pàgina amb `howto:`, no només serveis).
- **Enllaçat:** «Abans de decidir-ho» al pilar amb les 4 guies; `/solucions/musics/` (CA+EN)
  amb un bloc per a qui arriba amb un WordPress antic.
- **Fase 5 (parcial):** `llms.txt` i `llms-full.txt` amb la secció de guies i un apartat en prosa.
  Pendent: desplegar + IndexNow i la revisió de Search Console (cal accés de Joan).
- Verificat: 307 blocs JSON-LD (0 errors), 0 enllaços trencats, 5 URLs de guies per idioma.

### Navegació i trajectòria (2026-11-18, sessió 7)

- **Menú principal:** `Serveis` entra amb `weight = 2` (després de Solucions); la resta de pesos
  s'han desplaçat. Ara: Inici (mòbil) · Solucions · Serveis · Projectes · Com treballem · Qui som · Contacte.
- **Peu:** la fila de navegació passa a «Qui som · Serveis · Guies · Contacte»
  (claus `footer_link_services` i `footer_link_guides` a `i18n/{ca,en}.toml`).
  És la via per arribar a `/serveis/` i `/guies/` des del mòbil, perquè la barra inferior està plena (6 icones).
- **Trajectòria de `/qui-som/`** (CA+EN): reescrita i agrupada en **Migracions i arxius**,
  **Aplicacions** i **Webs i plataformes**, amb els projectes recents que faltaven (Pocallum,
  9 Barris Imatge, BBBB, Ivan Kovačević, Taro, Votació, Konsento, Cuida, GoatCounter, 40 anys de blues).
  Corregides descripcions: Bratia és Balkan Gypsy Jazz (deia «rock»), Llumàtics és fotografia analògica.
- **Casos curads a les fitxes** (`casos:` al frontmatter): pilar de migració → Pocallum, 9 Barris
  Imatge, Pocallum.cat, BBBB; aplicacions → Taro, Votació, Konsento, Cuida; analítica → GoatCounter,
  Analytics for GoatCounter, 9 Barris Acull.
- **Pendent de validar per Joan:** si els llocs «Powered by» estan allotjats per nosaltres
  (per posar casos reals a `allotjament-i-manteniment`), i si la llista «Projectes destacats»
  de `/projectes/` s'ha de refrescar amb els projectes recents.

### Guia 5: `web-per-a-una-banda` (2026-11-19, sessió DeepSeek)

- `content/guies/web-per-a-una-banda/index.{ca,en}.md` (992 w de cos, `weight: 5`): les **quatre
  preguntes** que es fa qui arriba (qui sou · com sona · quan toqueu · com us contracto), «el que
  no cal» (6 punts), per què una web si ja ets a Instagram/Spotify, **quan encara et convé una
  plantilla** (honestedat), checklist de 7 punts abans de contractar, 3 casos (Bratia, Ivan
  Kovačević, BBBB) i FAQ de 5 al frontmatter.
- Enllaçat: `/solucions/musics/` (CA+EN) → guia · `guies/_index.{ca,en}` («com fer-les servir») ·
  `llms.txt` i `llms-full.txt` (apartat de guies + prosa; recompte «quatre» → «cinc» guies).
- `layouts/guies/single.html`: **CTA configurable** (`cta_url` / `cta_text` al frontmatter; per defecte
  el pilar de migració). La guia de bandes envia a `/solucions/musics/`; les altres quatre no canvien.
- Verificat: 313 blocs JSON-LD (0 errors), sitemap **57 URLs per idioma**, parella hreflang,
  5 `<details>` de FAQ, `Article` + `FAQPage`, 0 enllaços interns trencats.
- **Desplegat a producció i verificat en viu** (2026-11-19): IndexNow 200 (114 URLs), CSS d'HEAD al
  servidor, CTA nou a les dues llengües.

### Servidor — els 3,21 GB de l'arrel (2026-11-19)

- Els 3,21 GB del panell són `~/www` (3.225.973.245 B) i el **94 % és `www/sbb`**, el WordPress en
  entorn de proves de la SBB (actiu, no tocar). El lloc de LinuxBCN són ~200 MB.
- `sbb-copia.sh`: `MANTE_FITXERS` 3 → 1. Els dos tarballs eren idèntics (`md5 971fbac5…`), esborrat
  el del 9/11; home 9,5 G → 6,8 G. **Criteri de Joan: sempre hi ha d'haver un backup sencer del
  web fins al tancament del projecte.**
- Pendent (opcional): netejar els **458 MB de duplicats orfes** d'`uploads/` (287 grups, verificats
  sense referències a la BD). NO executat.

### Fase 1b — pàgines primes reforçades (2026-11-19)

| Pàgina | Abans | Ara (CA / EN) | Què s'hi ha afegit |
|---|---|---|---|
| `projectes/favb` | 229 w | **541 / 517** | context de la federació, el problema de l'acumulació, què hem fet i **per què aquí no migrem** (WordPress fa la feina) |
| `projectes/pocallum` | 266 w | **560 / 514** | el client i l'ofici, el problema del WordPress, la migració del 2026 amb xifres reals (152 fotos, 27 festivals, 11 notícies) |
| `projectes/112books` | 295 w | **559 / 571** | editorial que acompanya autors, el problema estructural i el tema FSE del 2026 |
| `projectes/carrer` | 304 w | **508 / 496** | dos problemes (memòria i actualitat), model híbrid, què hi guanya la publicació |
| `contacte` | 251 w | **443 / 476** | què passa quan escrius, què ens interessa saber, què no fem, casos petits |
| `en/solucions` | 120 w | **314** | paràgraf introductori + **taula comparativa** dels tres perfils |

- **Verificat:** cap descripció > 160 caràcters (se n'han escurçat 10, una de les quals era la
  descripció per defecte del lloc, que afectava 5 pàgines), 313 blocs JSON-LD (0 errors),
  0 enllaços trencats.
- **Criteri:** no s'afirma cap dada tècnica que no es pugui verificar. FAVB i Carrer.cat són
  WordPress (verificat en viu) i la fitxa ho diu tal com és; el discurs aprofita per explicar
  quan **no** cal migrar.

**Correccions de fets (indicades per Joan, 2026-11-19):**
- **FAVB:** fa anys que l'administrem i hi hem passat per moltes fases; en la darrera es va
  redissenyar i es va separar Carrer en un web propi. **Pendent: redissenyar el tema del web**
  en un futur no gaire llunyà (dit a la fitxa).
- **Carrer:** el disseny es va fer **des de zero, adaptat a la imatge de la revista**, i el web
  es va separar del de la federació.
- **Pocallum:** dues fases — primer **reestructuració i redisseny sobre WordPress**, després el
  **canvi a Hugo (2026)**. La fitxa ho explica en aquest ordre.
- **40anysblues:** «l'editorial de fotografia que **en Joan Linux** dirigeix»; afegit que **cada
  fotografia porta la data**, que el llibre surt en català i el web és trilingüe, i que **cada
  exemplar porta un codi QR** que porta al web i queda registrat a les estadístiques públiques.
- **Estenop:** secció «Estat actual» — **no és plenament funcional**: és una aplicació web i el
  navegador no dona accés a tota la informació de la càmera del telèfon; **es replanteja de zero**.
- **Menú mòbil:** icona nova de **Serveis** (icones de capes). S'ha tret la de Cerca de la barra
  inferior perquè el capçal ja té la lupa pròpia i així queden 6 icones.

### Tècnic: noindex, CTA i enllaços (2026-11-19)

- **`noindex` per pàgina:** `head.html` respecta ara `.Params.noindex` (branca nova entre el
  `noindex` global i el de taxonomies). Aplicat a `/ca/cerca/` i `/en/cerca/`, que eren
  **indexables amb 10 paraules**.
- **CTA de les guies:** `hugo-vs-wordpress` → `/serveis/` («Veure què fem i com ho treballem»);
  `wordpress-lent-o-insegur` → `/serveis/allotjament-i-manteniment/`. Les altres tres segueixen
  al pilar de migració.
- **Enllaços creuats:** `web-a-mida` → `/guies/hugo-vs-wordpress/`;
  `allotjament-i-manteniment` → `/guies/wordpress-lent-o-insegur/`.
- **W3C (validator Nu, API)**: 0 errors a `/guies/`, les 5 guies, `/serveis/` i dues fitxes.
  L'únic avís és informatiu («Section lacks heading» a `.project-intro`), el mateix patró que
  les pàgines de projecte; no és un error.

### Què es va fer a la fase 3 (2026-11-18, sessió 5)

- **4 fitxes de servei** CA+EN, mateixa estructura que el pilar (resposta, què inclou, **què NO**,
  4 passos, FAQ al frontmatter, CTA, enllaços creuats):
  `web-a-mida` (744 / ~740 w), `aplicacio-web` (772 w), `allotjament-i-manteniment` (590 w),
  `analitica-i-rgpd` (685 w).
- **Plantilla** `serveis/single.html`: nou camp opcional `casos: [slug, ...]` per curar a mà els
  projectes que es mostren (per als serveis que no tenen equivalent al camp `serveis:`).
- **Casos**: web-a-mida → Bratia, Llumàtics, Machiroku, Nau Bostik · aplicacio-web → Taro, Votació,
  Konsento, Gestor d'hores · analitica-i-rgpd → GoatCounter Dashboard, 9 Barris Acull ·
  allotjament → enllaça a `/powered-by-linuxbcn/` (no s'afirma res que no sigui verificable).
- **Honestedat**: cada fitxa diu quan el servei no convé (botiga complexa, eina que ja existeix,
  suport 24/7 que no es pot complir, atribució publicitària que no fem).
- `llms.txt` i `llms-full.txt`: les 4 fitxes + apartat en prosa «Altres serveis».
- Verificat: 277 blocs JSON-LD (0 errors), 0 enllaços trencats, sitemap 6 URLs de servei per idioma,
  hub ordenat per `weight` (migració → web a mida → aplicacions → allotjament → analítica).

### Què es va fer a la fase 2 (2026-11-18, sessió DeepSeek)

- **Plantilles noves:** `layouts/serveis/single.html` (hero + intro + content + casos reals + CTA)
  i `layouts/serveis/list.html` (hub). Cap redisseny: reutilitzen `project`, `project-hero`,
  `project-intro`, `project-content`, `project-related`, `project-cta`.
- **Pilar:** `content/serveis/migracio-wordpress/index.{ca,en}.md` (1.019 / 1.011 paraules):
  resposta curta, quan sí, quan NO, procés en 4 passos, xifres reals (Pocallum 2.353 posts /
  2.360 URLs 1:1 / −42,1 %; 9 Barris 3.006 articles / zero errors / 8.700 pàgines), FAQ de 5
  al frontmatter `faq:`, CTA.
- **Hub:** `content/serveis/_index.{ca,en}.md` + `ItemList`.
- **Schema:** `head.html` emet `Service` + `HowTo` (des del frontmatter `howto:`) a les fitxes,
  `ItemList` al hub, `FAQPage` (automàtic via `faq:`) i `BreadcrumbList`. **245 blocs, 0 errors.**
- **Enllaçat:** `projectes/single.html` resol el camp `serveis:` amb `site.GetPage` i mostra
  «Aquest projecte és un cas de» (12 projectes amb `migracio-wordpress`); `/solucions/collectius`
  i `/solucions/microempreses` (CA+EN) enllacen al pilar; la home té «Webs» → `/serveis/` i una
  nota «Ve de WordPress?».
- **Correccions de pas:** 3 enllaços interns trencats de feina anterior (112books.eu-theme →
  `goatcounter-wp`, MalditasMaquinas sense versió EN al peu i a Contacte).
- **Verificat:** sitemap 47 CA / 47 EN amb les 4 URLs noves, hreflang en parella, 0 enllaços
  trencats, cap estil ni script en línia.

### Què es va fer a la fase 1c (2026-11-18)
- `content/solucions/musics/index.{ca,en}.md`: secció «Què inclou un web de banda» (8 peces),
  argument de base reutilitzable, 3 casos (Bratia, Ivan Kovačević, BBBB), bloc Ressona
  (LinuxBCN = tècnica, Ressona = identitat), FAQ de 6 preguntes al frontmatter `faq:`.
- `layouts/partials/faq.html`: llegeix `.Params.faq`; si no n'hi ha, `data/faq/<lang>.yaml`.
  Ús al contingut: `{{< faq >}}`.
- `layouts/partials/head.html`: emet `FAQPage` per a qualsevol pàgina (no home) amb `faq:`.
- **Bug global corregit:** `| jsonify` dins `<script type="application/ld+json">` codificava dues
  vegades (Go ja escapa en context JS). Totes les preguntes FAQ, HowTo, ItemList, Service i la
  descripció de l'Organization sortien amb cometes literals. Eliminat a `head.html` i
  `projectes/single.html`. **Regla: dins JSON-LD escriu `{{ .Title }}`, mai `{{ .Title | jsonify }}`.**
  Per a text amb markdown: `{{ .a | markdownify | plainify | htmlUnescape }}`.

---

## 2. Com desplegar a producció

Desplegar només quan Joan ho demani explícitament. Des del terminal de Joan
(o des de l'agent amb `echo 5 |`, perquè l'script llegeix l'opció de stdin):

```bash
echo 5 | ./sync-linuxbcn.sh   # opció 5 (Deploy producció)
```

Fa: sync (web + privat) → build `--environment production` → rsync (sense `--delete`, amb
excludes de `/formularis`, `/apps/taro`, `/admin/analytics-cache.json`) → permisos → purga de
caché → IndexNow.

Verificació després del deploy (el CDN fa caché ~15 min: usa `?v=<aleatori>`):

```bash
curl -s "https://linuxbcn.com/ca/solucions/musics/?v=$RANDOM" | grep -c '<details>'   # → 6
curl -s "https://linuxbcn.com/ca/?v=$RANDOM" | grep -o '"name":"[^"]*' | head -3   # sense \" al principi
```

I passar 1 URL pel validador: https://validator.schema.org/ (o Rich Results Test de Google).

---

## 3. Què queda (fase 5 i següents)

1. **Deploy de les guies** quan Joan ho demani: `echo 5 | ./sync-linuxbcn.sh` (fa IndexNow sol).
   Verificar `/ca/guies/` i les 4 guies amb `?v=<aleatori>` (el CDN fa caché ~15 min).
2. **Search Console** (requereix Joan): mirar les queries amb impressions i CTR baix, i confirmar
   que `/serveis/*` i `/guies/*` s'indexen. Enviar sitemaps si cal.
3. **Fase 1b pendent:** pàgines primes (`favb`, `pocallum`, `112books`, `carrer`, `/contacte`) — cal dades de Joan.
4. **Extern:** Google Business Profile i backlinks dels clients migrats (segueixen pendents del pla).
5. ~~Opcional: guia `web-per-a-una-banda`~~ — **FET el 2026-11-19** (vegeu §1).

---

## 4. Normes que no es poden trencar

- **Català** com a llengua de treball; cada pàgina nova **CA + EN a la vegada**. Castellà descartat.
- **Mai costos d'infraestructura** en textos de venda (única excepció: fitxa de Ressona).
- **Mai Kit Digital.** Cap Google/Meta al web propi. Cap JS nou, cap CDN, CSP estricta
  (`script-src 'self'`; JSON-LD sí que és permès).
- **No anti-WordPress**: dir també quan WordPress encara convé.
- WCAG 2.1 AA, `h1` únic, llenguatge inclusiu, to expert sense pedanteria, sense «ecosistema».
- Enllaços interns al Markdown: `/projectes/slug/` sense prefix d'idioma (un render hook hi
  afegeix `/ca/` o `/en/`).
- El llistat `/projectes/` és **manual** (`content/projectes/_index.{ca,en}.md`).
- Projecte nou: `date:` (data de producció), `perfils:` si escau, imatge via `image:`.
- Servidor: **mai** `rsync --delete`; `www/formularis/` i `www/apps/taro/` intocables.
- Secrets mai al repo.
- Commits: `tipus: descripció en català` (feat · fix · style · content · config · docs · refactor).

---

## 5. Criteris d'acceptació (abans de cada commit)

```bash
hugo --minify --environment production --destination /tmp/lbcn-build   # 0 errors, 0 warnings nous
```

- Totes les pàgines noves: 200, sense `noindex`, parella hreflang, al sitemap.
- JSON-LD: tots els blocs parsejables i cap string que comenci per `"` ni amb entitats
  `&rsquo;` (script de validació a §6).
- Cap enllaç intern trencat.

---

## 6. Script de validació JSON-LD (copiar i executar)

```bash
python3 - /tmp/lbcn-build <<'EOF'
import re,json,sys,os
B=sys.argv[1]; n=0; bad=[]
def walk(o,p,f):
  if isinstance(o,dict): [walk(v,p+'.'+k,f) for k,v in o.items()]
  elif isinstance(o,list): [walk(v,p,f) for v in o]
  elif isinstance(o,str) and (o[:1] in '"[' or re.search(r'&[a-z]+;|&#|<[a-z]',o)): bad.append((f,p,o[:50]))
for r,_,fs in os.walk(B):
  for f in fs:
    if f.endswith('.html'):
      for x in re.findall(r'<script type=application/ld\+json>(.*?)</script>',open(os.path.join(r,f)).read(),re.S):
        n+=1; walk(json.loads(x),'',f)
print('blocs',n,'errors',len(bad)); [print(b) for b in bad[:10]]
EOF
```

Resultat esperat a 2026-11-18: `blocs 233 errors 0`.

---

## 7. Altres pendents (no bloquegen la fase 2)

- Fase 1b: pàgines primes (`favb`, `pocallum`, `112books`, `carrer`, `/contacte`) — **cal dades de Joan**.
- Guia `/guies/web-per-a-una-banda/` (fase 4) i enllaçar-la des de `/solucions/musics/`.
- Llista de destacats CA i EN no coincideix (EN té Nau Bostik, CA té Carrer.cat).
- `votacio-public`: captura (l'app s'obre l'1/12/2026).
- blog.pocallum.cat: certificat SSL caduca el **2026-12-22** (renovació manual).
- Externs: Google Business Profile, backlinks dels clients migrats, Softcatalà.
