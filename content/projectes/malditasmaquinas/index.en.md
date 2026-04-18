---
title: "MalditasMaquinas"
slug: "malditasmaquinas"
weight: 9
year: 2025
client: "own project"
sector: "services"
draft: false
image: "01-malditasmaquinas.png"
---

## Technology consultancy by the hour

MalditasMaquinas is an on-demand technology consultancy service for artists, freelancers and small businesses. A merger of two brands with over 20 years of history: MalditasMaquinas.com and MacBCN.com.

The model is simple and clean: clients buy a prepaid block of hours and submit technical queries by email from their private area. No hours, no support. No subscriptions, no monthly commitments.

### Distributed and secure backend

All business logic runs on **Cloudflare Workers** — no central server, no single point of failure. The database is **D1** (SQLite distributed across Cloudflare's global network), sessions are handled with **KV**, and consultation attachments are stored in **R2**. Authentication uses magic links with **JWT** in an HttpOnly cookie — no passwords, no leaks.

### Online payments

Full integration with **Stripe Checkout**: multiple hour packages with live-mode Payment Links. A Worker webhook verifies the Stripe signature, records the purchase in D1, and updates the client's hour balance in real time.

### Automatic notifications

Every relevant action — new consultation, reply, confirmed payment — triggers notifications via **Telegram** (own bot) and **email** (Resend), to both the consultant and the client. Emails include a branded template and a full GDPR footer.

### Framework-free private area

SPA in **plain HTML and vanilla JS** — no React, no npm, no external dependencies. The client dashboard shows the hour balance, consultation history with downloadable attachments, and a form for submitting new queries. The admin panel handles users, consultations and replies from the same place.

### Static and lightweight website

Generated with **Hugo** and published to **GitHub Pages** via CI/CD with GitHub Actions. No frontend database, no unnecessary JavaScript, no tracking cookies. A site that loads fast and can be maintained without infrastructure.

### Multilingual and accessible

Available in **Catalan and Spanish**, with a complete i18n system across both the static site (Hugo) and the app (JS). Meets **WCAG AA**: verified contrast, skip links, correct ARIA, valid W3C HTML5, `prefers-reduced-motion` support, and a technical transparency statement in the privacy policy.

→ [malditasmaquinas.com](https://malditasmaquinas.com)
