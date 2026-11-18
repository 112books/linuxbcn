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
| Darrer commit | `fd5634b feat: fase 1c — reforç de /solucions/musics/ i fix JSON-LD` (pujat a `origin/main`) |
| Producció | ✅ `fd5634b` desplegat i verificat el 2026-11-18 (FAQ visible, FAQPage, 0 cometes dobles). IndexNow 200 |
| Fases fetes | 0, 1, 1a, 1c del pla (taula a `PLA-SEO-2026-11.md` §8) |
| Fase següent | **2** — plantilles `serveis` + pilar `/serveis/migracio-wordpress/` (CA+EN) |

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

## 3. Fase 2 — què cal fer (detall a `PLA-SEO-2026-11.md` §4–§7)

1. **Plantilles** `layouts/serveis/single.html` i `layouts/serveis/list.html`, copiant
   l'estructura i les classes de `layouts/projectes/single.html` (cap redisseny, cap JS nou).
2. **Pilar** `content/serveis/migracio-wordpress/index.ca.md` + `index.en.md` amb l'estructura
   del pla §5 (resposta 40–60 w, quan sí, quan NO, com ho fem → `HowTo`, xifres reals, casos,
   FAQ al frontmatter `faq:` + `{{< faq >}}`, CTA).
   - Xifres reals: només les de `PLA-SEO-2026-11.md` §5 i dels projectes `blog-pocallum` i
     `migracio-blogger-9barrisimatge`. **No inventis cap xifra ni termini.**
3. **Schema**: `Service` + `BreadcrumbList` + `FAQPage` (ja automàtic via `faq:`) + `HowTo`.
4. **`.htaccess`**: hi ha un 302 temporal `/(ca|en)/(serveis|sectors)/*` → `/$1/projectes/`
   que només actua si el directori no existeix. Quan existeixi `/serveis/` real, revisar-lo
   (els `sectors` continuen redirigint).
5. **Enllaçat** (pla §7): cada projecte amb `serveis: [... "migracio-wordpress" ...]` enllaça
   al pilar des de la plantilla; `/solucions/collectius` i `/solucions/microempreses` → pilar.
6. `static/llms.txt` i `llms-full.txt`: afegir el pilar.

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
