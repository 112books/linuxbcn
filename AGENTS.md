# AGENTS.md — linuxbcn.com

## Propòsit del document

Aquest document defineix com han de comportar-se els agents (humans o basats en IA) que interactuen amb el lloc web [https://linuxbcn.com](https://linuxbcn.com) i el seu repositori.

L'objectiu és garantir coherència editorial, qualitat estratègica i alineació amb els principis de **LinuxBCN**: programari lliure, privacitat, sobirania de dades i independència tecnològica.

La font de veritat tècnica i editorial d'aquest projecte és el fitxer **[CLAUDE.md](CLAUDE.md)**.

---

## Objectius del lloc

Els agents han de contribuir a:

- Generar oportunitats de negoci qualificades per a artistes, col·lectius culturals i microempreses amb valors.
- Posicionar LinuxBCN com a referent en solucions digitals basades en programari lliure, lleugeresa, privacitat i accessibilitat.
- Educar el mercat sobre les alternatives reals al WordPress, als CDN de tercers i a les solucions propietàries.
- Oferir contingut útil, honest i orientat a la presa de decisions tecnològiques.

---

## Audiència

Els continguts s'adrecen a:

- Artistes i músics que necessiten presència digital sense dependre de tècnics
- Col·lectius culturals i associacions veïnals
- Autònoms i professionals creatius que volen una presència digital pròpia
- Startups i projectes emergents que necessiten una base sòlida des del principi
- Microempreses i petites empreses locals amb valors
- Editores i agències fotogràfiques independents
- Professionals que han crescut amb WordPress i volen una alternativa real

Els agents han d'assumir que l'audiència:

- Té coneixement baix o mitjà de tecnologia.
- Busca claredat, honestedad i solucions concretes, no promeses de màrqueting.
- Valora la proximitat, l'experiència contrastada i l'ètica per sobre del preu.

---

## Principis editorials

### 1. Demostrar, no proclamar

Tot contingut ha de mostrar criteri i experiència a través de decisions concretes. Mai afirmar "som els millors" — que ho demostri el contingut.

### 2. Orientació al client

Cada text ha de respondre implícitament a:

- Quin problema del client resol això?
- Per què aquesta solució i no una altra?
- Quin resultat concret obté el client?

### 3. Profunditat per davant de volum

Prioritzar:

- Anàlisi i context real
- Exemples de projectes propis
- Decisions tècniques argumentades

Evitar:

- Contingut genèric reutilitzable per a qualsevol empresa
- Repetició sense valor
- Llistes de característiques sense context

### 4. Llengua i to

- **Llengua principal:** Català
- **Llengua secundària:** Anglès
- **Castellà:** descartat com a idioma del lloc
- To: directe, proper, opinionat — expert sense pedanteria
- Primera lletra en majúscula als textos de contingut
- Minúscula als elements d'interfície (botons, nav, etiquetes)
- Sense jerga corporativa: res d'"ecosistema", "sinergies" ni "solucions integrals"

### 5. Ètica tecnològica inamovible

Els agents **MAI** han de:

- Recomanar o esmentar positivament el **Kit Digital**
- Suggerir **Google Analytics**, Google Fonts, Google Maps, reCAPTCHA, Tag Manager
- Suggerir **Meta Pixel** o qualsevol script de Meta
- Recomanar **WordPress** com a destí — sí com a origen de migracions
- Esmentar **costos d'infraestructura** (0 €/mes, gratuït, etc.) en textos de venda
- Afegir dependències JS no auditades al frontend

### 6. Seguretat i privacitat per disseny

Els agents han de:

- Aplicar RGPD per disseny, no com a pegot posterior
- Prioritzar autenticació sense contrasenyes quan sigui possible
- Recomanar sempre HTTPS, headers de seguretat i CSP adequats
- Triar analítica respectuosa (GoatCounter, Umami, Plausible) per davant de solucions invasives

### 7. Accessibilitat com a estàndard

Tot codi i contingut generat ha de complir:

- **WCAG 2.1 AA** com a mínim
- `alt` descriptiu en totes les imatges
- HTML5 semàntic vàlid W3C
- Contrast mínim 4.5:1 per a text normal
- Suport per a `prefers-reduced-motion`
- Skip links i ARIA correcte

---

## Comportaments requerits

- Llegir `CLAUDE.md` abans de qualsevol acció sobre el projecte
- Basar totes les decisions tècniques en l'stack definit (Hugo, Cloudflare Workers, D1, etc.)
- Respectar les convencions de nomenclatura: minúscules, guions, sense accents als noms de fitxer
- Crear contingut nou sempre en català i anglès
- Aplicar `image:` al frontmatter per a projectes amb captura, mai inline si ja hi és al hero
- Missatges de commit en català, minúscules, imperatiu present

---

## Comportaments prohibits

Els agents **NO HAN DE**:

- Generar contingut genèric aplicable a qualsevol empresa de serveis digitals
- Especular sobre tecnologies o preus no documentats al projecte
- Introduir dependències externes no auditades
- Crear fitxers de documentació (README, etc.) no sol·licitats explícitament
- Afegir gestió d'errors, fallbacks o validacions per a escenaris impossibles
- Refactoritzar codi no relacionat amb la tasca encomanada
- Fer push a `main` sense haver provat abans

---

## Estructura recomanada per a textos de projectes

Cada projecte del portfolio ha de respondre a:

1. **Qui és el client i quin problema tenia** (context real, sense genèrics)
2. **Quina solució s'ha triat i per què** (criteri tècnic i estratègic)
3. **Quines capacitats tècniques s'han desplegat** (backend, frontend, integracions)
4. **Quin resultat concret obté el client** (sense mencionar costos)
5. **Tecnologia** (llista concisa al final)

---

## Ús de la IA

Els agents basats en IA han de:

- Actuar com a col·laboradors tècnics, no com a substituts del criteri de Joan Linux
- Verificar coherència, precisió i utilitat abans de proposar canvis
- Aportar valor real en cada intervenció — res de canvis cosmètics no sol·licitats
- Preservar la veu i el to del projecte en tot el contingut generat

El contingut ha de semblar escrit per un professional tècnic amb criteri propi i anys d'experiència, no per una IA.

---

## To i estil

- Reflexiu i directe
- Basat en experiència i criteri propi
- Sense adornaments ni fórmules corporatives
- Vincula sempre el contingut a un problema real del client
- Manté coherència terminològica entre seccions i idiomes
- Usa llenguatge tècnic precís sense excés de tecnicisme repel·lent

---

## Mètriques de qualitat

Els agents han d'optimitzar per a:

- Claredat del missatge per al client potencial
- Coherència amb la identitat i els valors de LinuxBCN
- Qualitat tècnica: HTML vàlid, accessibilitat, rendiment
- Precisió factual: res que no estigui documentat o contrastable

---

## Millora contínua

Tot contingut ha de:

- Poder actualitzar-se quan el projecte evolucioni
- Reflectir l'estat real del projecte, no una promesa futura
- Integrar-se en la narrativa global del portfolio

---

## Regla final

Si un contingut no ajuda el client potencial a entendre per què necessita LinuxBCN per al seu projecte, **no s'ha de publicar**.

---

*Última actualització: 2026-04-18*
*Mantenidor: Joan Martínez Serres — joan@linuxbcn.com*
