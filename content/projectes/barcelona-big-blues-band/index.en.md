---
title: "Barcelona Big Blues Band"
seo_title: "Barcelona Big Blues Band: website for a big band | LinuxBCN"
slug: "barcelona-big-blues-band"
weight: 5
year: 2026
date: 2026-10-18
client: "rhythm & blues big band"
sector: "music"
perfils: ["musics"]
description: "Website for the Barcelona Big Blues Band, migrated from WordPress to Hugo: lightweight, trilingual, with automatic gig listings, discography and booking kit."
lastmod: "2026-11-18"
draft: false
serveis: ["web-a-mida", "migracio-wordpress"]
image: "bbbb-portada.png"
---

## Europe's largest rhythm & blues big band

The Barcelona Big Blues Band is an ensemble of up to fifteen musicians
led by double bassist Ivan Kovačević, based at Barcelona's Jamboree Jazz
Club for more than ten years. It plays blues, swing and rhythm & blues
in big-band format and backs guest artists such as Dani Nel·lo,
Ray Gelato, Mike Sanchez and Myriam Swanson.

The previous site was a WordPress install: plugins for everything, even
for the cookie banner, and a structure that didn't match what a band
needs to show.

---

## The problem

A big band speaks to two audiences at once: people who want to go to the
next gig and people who want to book it. The first need an up-to-date
agenda. The second need line-up, repertoire, guests, videos and a press
kit without having to ask for it by email.

If keeping all that current means logging into a heavy back end, the site
goes stale and stops selling gigs.

---

## The solution

A static Hugo site, built on the same base as
[Ivan Kovačević's website](/projectes/ivan-kovacevic/). Reusing the
structure means less work, fewer errors and a professional result from
day one.

**A gig list that updates itself**
Gigs are published on Bandsintown, as the band already did, and show up
on the site with ticket links and an add-to-calendar option.

**Complete discography**
Twelve records, each with its own page and guest artist. Every record has
its own URL, which makes it findable in search engines.

**Booking page for promoters**
A page designed for venues and festivals: configurable format (from combo
to full big band), full line-up, guest artists and electronic press kit
(EPK).

**Photos and gig reports**
The photo section links to the concert reports published on
[blog.pocallum.cat](https://blog.pocallum.cat). The site doesn't duplicate
files: it points to where they already live.

**Editable without code**
Biography, line-up, press and texts can be changed through a simple
content manager (Decap CMS).

**Trilingual**
Catalan, Spanish and English, each with its own URL and correct
`hreflang`.

---

## The migration

The WordPress content was extracted through its API, converted to
Markdown, and the original images were downloaded. Nothing was copied by
hand, and the old site could be retired without losing discography,
biography or history.

---

## Result

A lightweight, fast site that practically runs itself: the band publishes
gigs where it always has and the site does the rest.

WCAG 2.1 AA accessibility, Schema.org structured data, installable web app
(PWA) and `llms.txt` for AI search engines.

---

## Technology

Hugo · Decap CMS · Bandsintown · Multilingual (CA/ES/EN) ·
WCAG 2.1 AA · Schema.org · PWA

---

→ [Visit the website](https://barcelonabigbluesband.com/en/)
→ [Ivan Kovačević's website](/projectes/ivan-kovacevic/) · [Bratia's website](/projectes/bratia/)
→ [Solutions for artists and musicians](/solucions/musics/)
