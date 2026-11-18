# RELLEU — on som i què toca ara

> Fitxer de traspàs entre sessions i agents (Claude, DeepSeek o qui sigui).
> Llegeix-lo **sencer** abans de tocar res. Actualitza'l en acabar cada sessió.
> Última actualització: **2026-11-18** (Claude, final de sessió).

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
| Darrer commit | `feat: fase 2 — pilar /serveis/migracio-wordpress/ i plantilles de servei` |
| Producció | ⏳ **pendent de desplegar** (fase 2 només al repo; producció continua amb `fd5634b`) |
| Fases fetes | 0, 1, 1a, 1c, **2** del pla (taula a `PLA-SEO-2026-11.md` §8) |
| Fase següent | **3** — 4 fitxes de servei restants (`web-a-mida`, `aplicacio-web`, `allotjament-i-manteniment`, `analitica-i-rgpd`) |

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

## 3. Fase 3 — què toca ara

1. **4 fitxes de servei** amb la mateixa estructura que el pilar (~700–900 w cadascuna),
   CA+EN, `faq:` al frontmatter i enllaç al pilar des de cada fitxa:
   - `content/serveis/web-a-mida/` — «Web a mida a Barcelona» (casos: Bratia, Llumàtics, Machiroku, Nau Bostik)
   - `content/serveis/aplicacio-web/` — «Aplicacions web a mida» (Taro, Votació, Konsento, Gestor d'hores)
   - `content/serveis/allotjament-i-manteniment/` — «Allotjament i manteniment» (powered-by, 9 Barris Acull)
   - `content/serveis/analitica-i-rgpd/` — «Analítica respectuosa i RGPD» (GoatCounter Dashboard, 9 Barris Acull)
2. **Deploy** quan Joan ho demani: `echo 5 | ./sync-linuxbcn.sh`. Després comprovar que
   `/ca/serveis/` i `/ca/serveis/migracio-wordpress/` responen 200 i no 302 (la regla
   d'`.htaccess` només actua si el directori no existeix).
3. **Revisar el 302 de `.htaccess`** després del deploy: si `/ca/serveis/*` ja no redirigeix,
   deixar-lo només per a `sectors`.
4. **Fase 4:** les 4 guies del clúster (`sortir-de-wordpress`, `hugo-vs-wordpress`,
   `wordpress-lent-o-insegur`, `migrar-de-blogger`) i enllaçar-les des del pilar.
5. `static/llms.txt` i `llms-full.txt`: les 4 fitxes noves s'hi han d'afegir (el pilar ja hi és).

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
