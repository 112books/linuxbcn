---
title: "112 Revelats"
slug: "112revelats"
weight: 9
year: 2025
client: "112Books"
sector: "photography"
description: "112 Revelats — analogue photography project. Lightweight website hosted on GitHub Pages, no dependencies. LinuxBCN."
lastmod: "2026-06-24"
draft: false
serveis: ["plataforma-editorial", "migracio-wordpress"]
image: "112revelats-screenshot.png"
---

## A platform for new voices in photography

112 Revelats is a project by publisher 112Books
to give visibility to emerging photographers through
the collective photobook format.

Two open calls per year. Each edition, a group of authors
publishes a digital photobook together. If the project
takes root, also in print.

The website has migrated from WordPress to Hugo —
lighter, faster and fully self-managed via Git.

---

## Tech stack

**Hugo extended** — native Sass processing, no runtime dependencies.  
**GitHub Pages** — global CDN, automatic deploy.  
**GitHub Actions** — automated build and deploy in ~20 seconds.  
**GoatCounter** — cookieless analytics, GDPR-compliant, with [custom dashboard](/en/projectes/goatcounter-dashboard/).  
**Formspree** — submission forms without proprietary backend.

3 languages · Catalan default · Spanish · English

---

## Architecture

Flat structure with no taxonomies: each open call is a standalone page
with its own content and registration form.
The press kit is archived as a PDF accessible directly from
the main menu.

No database. No plugins. No server-side attack surface.

---

## Homepage

{{< gallery "112revelats-portada-desktop.png" "112revelats-portada-mobil.png" >}}

---

## Challenges

{{< gallery "112revelats-reptes-desktop.png" "112revelats-reptes-mobil.png" >}}

---

## FAQ

{{< gallery "112revelats-faq-desktop.png" "112revelats-faq-mobil.png" >}}

---

→ [112revelats.112books.eu](https://112revelats.112books.eu)
