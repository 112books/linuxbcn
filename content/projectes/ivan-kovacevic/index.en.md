---
title: "Ivan Kovačević"
seo_title: "Ivan Kovačević: website for a double bassist | LinuxBCN"
slug: "ivan-kovacevic"
weight: 4
year: 2026
date: 2026-10-17
client: "musician"
sector: "music"
perfils: ["musics"]
description: "Website for double bassist Ivan Kovačević, migrated from WordPress to Hugo: four languages, one agenda for all his projects and a discography of 50+ records."
lastmod: "2026-11-18"
draft: false
serveis: ["web-a-mida", "migracio-wordpress"]
image: "ivan-kovacevic-portada.png"
---

## One musician, many projects, one website

Ivan Kovačević is a Serbian double bassist based in Barcelona since 2001.
He has played with Los Mambo Jambo, The Nu Niles and Down Home, is a
founding member of the Barcelona Gipsy balKan Orchestra, leads the
[Barcelona Big Blues Band](/projectes/barcelona-big-blues-band/) and
fronts [Bratia](/projectes/bratia/). He has played on more than fifty
records.

His website had gone through iWeb and then WordPress. Neither solved the
real problem: how to present a career spread across many bands without
the site turning into a messy drawer.

---

## The problem

A musician who plays in several bands has gigs on each band's calendar,
videos on several channels and records on different labels. Keeping all
of that up to date by hand on one site is unworkable: either the work
gets duplicated or the site falls behind.

---

## The solution

A static Hugo site that **aggregates** what already exists instead of
asking for it to be written again.

**One agenda**
The calendars of all his projects are merged into a single agenda. Each
gig shows which band it is with, carries `MusicEvent` structured data and
can be subscribed to as a calendar.

**Videos from every channel**
Videos from several YouTube channels are aggregated automatically and
tagged by the project they come from.

**A discography of 50+ records**
Each record has its own page and URL, grouped by project: Los Mambo Jambo,
Barcelona Gipsy balKan Orchestra, The Nu Niles, Lazy Jumpers, Bernat Font
Trio, 5 Spots and Barcelona Big Blues Band.

**Nine projects, nine pages**
Each band has its own page with history and links, and the site links to
Bratia's and the Big Blues Band's own websites.

**Four languages**
English, Spanish, Catalan and Serbian. The original WordPress content
(English and Spanish) was migrated automatically; Catalan and Serbian were
translated separately.

**Own contact and booking**
A booking form handled on the server, with no external services, plus an
on-site search.

---

## The migration

The content was extracted from WordPress through its API, converted to
Markdown, and the original images were downloaded. The same technical
base was later reused for the Barcelona Big Blues Band website.

---

## Result

A single address that brings together a musician's whole career and
updates itself with the work he already does: each band publishes its
gigs and videos, and the site collects them.

WCAG 2.1 AA accessibility, Schema.org structured data and installable web
app (PWA).

---

## Technology

Hugo · iCal aggregation · YouTube · Multilingual (EN/ES/CA/SR) ·
WCAG 2.1 AA · Schema.org · PWA

---

→ [Visit the website](https://ivankovacevic.com/en/)
→ [Barcelona Big Blues Band](/projectes/barcelona-big-blues-band/) · [Bratia](/projectes/bratia/)
→ [Solutions for artists and musicians](/solucions/musics/)
