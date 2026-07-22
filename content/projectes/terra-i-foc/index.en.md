---
title: "Terra i Foc: Catalan artisanal ceramics, now online"
slug: "terra-i-foc"
weight: 3
year: 2026
client: "Terra i Foc / Joan Martínez Serres"
sector: "crafts"
featured: true
description: "Terra i Foc — bilingual static website for a Catalan artisanal ceramics workshop in the Penedès region. Hugo + GitHub Pages + cookieless GoatCounter. LinuxBCN."
lastmod: "2026-07-22"
draft: false
serveis: ["web-a-mida"]
card_image: "terra-i-fooc-portada.png"
image: "terra-i-fooc-portada.png"
---

From **LinuxBCN.com** we have just published the new website of **Terra i Foc**, the artisanal ceramics workshop founded in 1969 by Joan Martínez Peidro and Isabel Serres in the Penedès region. A history of over fifty years of clay, fire and hands that now has a place to tell itself to the world.

---

## What we built

A **bilingual** site (Catalan and English) that gathers the memory of the workshop in five main sections:

- **Joan** — biography and curriculum of the founder
- **Family** — five generations of ceramicists, from grandfather to grandchildren
- **Workshop** — daily life: machines, moulds, pastes, glazes, firings, workers, fairs
- **Collaborations** — artists like Benet Ferrer, Salvador Mañosa, Maties Palau Ferré, Joaquim Casadevall
- **Glossary** — over 60 ceramic terms defined (a resource for any ceramicist)

There is also a **gallery** with images of the workshop and pieces, a direct **contact form**, and a **credits** page thanking everyone who made the project possible.

{{< gallery "terra-i-fooc-portada.png" >}}

---

## How it's built

At LinuxBCN.com we have a philosophy: modern technology with artisanal simplicity. Terra i Foc is a **static** site, fast, without heavy dependencies or unnecessary JavaScript.

- **[Hugo](https://gohugo.io)** — static site generator. The site is built once and served as flat HTML files. Instant loading, zero database, zero server running.
- **[GitHub Pages](https://pages.github.com)** — free hosting with a global CDN. Each `git push` triggers an automatic build via **GitHub Actions** and the site goes live in minutes.
- **Custom CSS** — designed from scratch, no frameworks. Earthy color palette (earth `#361712`, fire `#c81111`, ash `#8a7a6e`) drawn from the craft itself: clay, fire, ash.
- **Jost typography** — preconnected and preloaded from Google Fonts to minimize loading time.
- **Truly bilingual** — each page has a Catalan and English version, with `hreflang` and `x-default` so Google and search engines serve them correctly.

---

## Privacy first

This website **does not use cookies**. None. Neither first nor third-party. There is no cookie banner because it's not needed.

- **Cookieless analytics**: [GoatCounter](https://www.goatcounter.com), a European service that installs no file in the browser, anonymizes IPs and does not allow individual user identification. Dashboard at `/admin/` with KPIs, temporal charts, sections, devices and referrers.
- **Contact form**: data via **Formspree** directly to the client's inbox. Not shared with third parties.
- **Complete legal pages**: legal notice, privacy, cookies and accessibility — all accessible from the site footer.

---

## SEO / GEO / AEO optimization

We worked on three dimensions of modern search:

- **SEO** — for traditional Google (meta tags, canonical, Open Graph, Twitter Cards)
- **GEO** (Generative Engine Optimization) — for AI-powered search engines like Perplexity, ChatGPT Search, Google AI Overviews
- **AEO** (Answer Engine Optimization) — for featured snippets and voice search

With **LocalBusiness** schema with business data, **BreadcrumbList** for navigation, and **FAQPage** in the glossary (real questions: "What is stoneware?", "What are aventurines?"). A full SEO/GEO/AEO audit was completed before publication.

---

## Accessibility

Designed following **WCAG 2.1 AA**: "Skip to content" link, keyboard navigation, visible focus with red outline, alternative text on images, coherent heading hierarchy, and respect for `prefers-reduced-motion` (if you have motion reduction enabled on your system, the site disables animations).

---

## Performance

No framework JavaScript, no heavy fonts, no third-party CDN requests. CSS is minified at build time. The result: exceptional performance score and zero recurring server costs.

---

## CI/CD with GitHub Actions

**Deploy** (push to main) — `push → Hugo build --minify → GitHub Pages`
Total time: ~90 seconds from push to live website.

**Analytics** (every hour) — `cron → GoatCounter API → process-analytics.py → analytics.json → commit`
The dashboard reads a static JSON — no authenticated request from the browser.

---

## The footer

At the bottom of the site, discreetly, are the legal links (Legal notice | Privacy | Cookies | Accessibility | Statistics) and our signature: **Powered by [LinuxBCN.com](https://linuxbcn.com)**.

---

All the code is **open**: the [repository is on GitHub](https://github.com/112books/terraifoc.cat), in case any other workshop or business wants to see how it's built or adapt it.

For us it was a special project: helping preserve the memory of a Catalan artisanal craft with the technology we love most. If you have a similar project, find us at **[linuxbcn.com](https://linuxbcn.com)**.

→ [terraifoc.cat](https://terraifoc.cat)