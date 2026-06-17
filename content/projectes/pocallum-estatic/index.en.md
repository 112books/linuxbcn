---
title: "Pocallum — Cultural Photography with a Renewed Digital Presence"
slug: "pocallum-estatic"
weight: 3
year: 2026
client: "Pocallum / Joan Linux Martínez"
sector: "photography"
featured: true
draft: false
image: "pocallum-home-04.png"
---

Joan Linux Martínez has been photographing jazz, blues, theatre, flamenco and performing arts in Barcelona since 2010. For years, his website lived on WordPress. In 2026, we migrated everything to Hugo and GitHub Pages. This is what we built and why.

---

## The project

[pocallum.cat](https://pocallum.cat) is the professional website of Pocallum, a cultural photography service specialising in live music, theatre and dance. The site brings together 152 photographs, 27 festivals, 11 news articles, services and contact pages, static internal search and a custom analytics dashboard. All of it in Catalan and English.

---

## Tech stack

**Hugo 0.159** — static site generator. Fast, robust, zero runtime dependencies.  
**GitHub Pages** — global CDN, automatic deploy, €0/month.  
**Vanilla CSS** — pure custom properties, no framework.  
**Vanilla JS** (~300 lines) — gallery, lightbox, scroll and search.  
**Pagefind** — build-time indexing, works fully offline.  
**GoatCounter** — cookie-free analytics, GDPR without effort.  
**GitHub Actions** — build + Pagefind + deploy in under 2 minutes.

No database. No server. No plugins. No tracking cookies.

---

## The homepage that never repeats itself

The homepage gallery combines shuffle with a variable-size mosaic — every visit generates a unique layout. The CSS grid has 6 columns with `grid-auto-flow: dense`, and JS assigns 5 sizes randomly (standard, tall, wide, big, hero) via Fisher-Yates on each load.

The result: infinite possible compositions from the same 152 photographs.

{{< gallery "pocallum-home-01.png" "pocallum-home-02.png" "pocallum-home-03.png" "pocallum-home-04.png" >}}

---

## Festivals and gallery

Twenty-seven documented festivals, each with its own page: years of collaboration, venue, discipline and a selection of photographs. The full gallery is filterable by service type (culture, music, theatre) and reorders images randomly on every visit.

{{< gallery "pocallum-galleru-01.png" "pocallum-festivals-01.png" >}}

---

## News and updates

A lightweight editorial section: industry articles, recent coverage and Pocallum news. For regular readers, the site publishes an **RSS feed** — follow updates from any feed reader, without algorithms, social networks or unwanted notifications.

{{< gallery "pocallum-news-01.png" "pocallum-news-02.png" >}}

---

## Services, contact and about

A clear presentation of what Pocallum offers, who is behind the lens, and a guided 4-step contact form to start working together without friction.

{{< gallery "pocallum-servoces-01.png" "pocallum-contact-01.png" "pocallum-about-01.png" "pocallum-blog-01.png" >}}

---

## CI/CD with GitHub Actions

**Deploy** (push to main) — `push → Hugo build --minify → Pagefind index → GitHub Pages`  
Total time: ~90 seconds from push to live site.

**Analytics** (every hour) — `cron → GoatCounter API → process-analytics.py → analytics.json → commit`  
The dashboard reads a static JSON file — no authenticated requests from the browser.

---

## Analytics dashboard

Instead of redirecting users to an external interface, the dashboard lives at `/admin/` integrated with the site's design:

- **Temporal:** visits and top pages over the last 30/90/365 days
- **Content:** most-read news and festivals, contact form funnel (S1→S2→S3→S4→Sent), CA vs EN split
- **Devices:** browsers, operating systems, screen sizes
- **Geographic:** countries and cities

Protected by client-side SHA-256 hash. Data is processed by GitHub Actions and served as static JSON.

---

## 4-step contact form

A native wizard — no external embeds, no Tally, no Typeform:

1. Project type (culture, artists, businesses)
2. Details (event, dates, venue)
3. Budget and timeline
4. Contact details

Each step fires a GoatCounter event to track exactly where people drop off. Submits via Formspree with no page reload.

---

## Performance and privacy

- 0 tracking cookies (GoatCounter is cookieless)
- 0 Google fonts — all self-hosted (Chicago FLF, Syne variable, Inter, IBM Plex Sans Condensed)
- 0 external JS except the GoatCounter tag (async, non-blocking)
- CSS fingerprinted via Hugo Pipes
- Images served as-is — original JPEGs with `loading="lazy"`

---

## Migration from WordPress

The migration was gradual: WordPress stayed live until the domain cutover, while Hugo was built in parallel. The 152 JPEGs were extracted directly from the media library and renamed by convention. Blog articles continued at blog.pocallum.cat (independent WordPress, out of scope).

The result: a website that loads in under 1 second, has no server-side attack surface, costs €0/month to host, and publishes with a `git push`.

→ [pocallum.cat](https://pocallum.cat)
