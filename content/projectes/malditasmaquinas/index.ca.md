---
title: "MalditasMaquinas"
slug: "malditasmaquinas"
weight: 9
year: 2025
client: "projecte propi"
sector: "serveis"
draft: false
image: "01-malditasmaquinas.png"
---

## Consultoria tecnològica per hores

MalditasMaquinas és un servei de consultoria tecnològica a demanda per a artistes, autònoms i petites empreses. Fusió de dues marques amb més de 20 anys d'història: MalditasMaquinas.com i MacBCN.com.

El model és senzill i net: el client compra un paquet d'hores prepagades i envia consultes tècniques per correu des de la seva àrea privada. Sense hores contractades, no s'atenen consultes. Sense subscripcions ni compromisos mensuals.

### Backend distribuït i segur

Tota la lògica de negoci corre sobre **Cloudflare Workers** — sense servidor central, sense punt únic de fallada. La base de dades és **D1** (SQLite distribuïda a la xarxa global de Cloudflare), les sessions es gestionen amb **KV**, i els adjunts de les consultes s'emmagatzemen a **R2**. L'autenticació funciona per magic link amb **JWT** en cookie HttpOnly — sense contrasenyes, sense filtracions.

### Pagaments en línia

Integració completa amb **Stripe Checkout**: diversos paquets d'hores amb Payment Links en mode live. Un webhook al Worker verifica la signatura de Stripe, registra la compra a D1 i actualitza el saldo d'hores del client en temps real.

### Notificacions automàtiques

Cada acció rellevant — nova consulta, resposta, pagament confirmat — dispara notificacions per **Telegram** (bot propi) i per **correu electrònic** (Resend), tant al consultor com al client. Els correus incorporen plantilla de marca i peu RGPD complet.

### Àrea privada sense framework

SPA en **HTML i JS vanilla** — sense React, sense npm, sense dependències externes. El panell del client mostra el saldo d'hores, l'historial de consultes amb adjunts descarregables, i un formulari per enviar noves consultes. El panell d'administració permet gestionar usuaris, consultes i respostes des del mateix lloc.

### Lloc web estàtic i lleuger

Generat amb **Hugo** i publicat a **GitHub Pages** via CI/CD amb GitHub Actions. Sense base de dades al frontend, sense JavaScript innecessari, sense cookies de seguiment. Un web que carrega ràpid i que es pot mantenir sense infraestructura.

### Multidioma i accessibilitat

Disponible en **català i castellà**, amb sistema i18n complet tant al lloc estàtic (Hugo) com a l'aplicació (JS). Compleix **WCAG AA**: contrast verificat, skip links, ARIA correcte, HTML5 vàlid W3C, suport per `prefers-reduced-motion` i declaració de transparència tècnica a la política de privacitat.

→ [malditasmaquinas.com](https://malditasmaquinas.com)
