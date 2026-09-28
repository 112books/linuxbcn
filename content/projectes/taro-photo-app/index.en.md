---
title: "Taro Photo App — website, CMS and voting for photography collectives"
seo_title: "Taro Photo App: website and voting for collectives | LinuxBCN"
slug: "taro-photo-app"
weight: 3
year: 2026
date: 2026-09-23
client: "9 Barris Imatge"
sector: "photography"
perfils: ["collectius"]
description: "Taro Photo App: static website, content manager and voting and form modules for photography collectives. Free software (AGPL-3.0) running at 9barrisimatge.org with 3,008 articles."
lastmod: "2026-09-27"
draft: false
serveis: ["aplicacio-web"]
image: "taro-logo.png"
image_style: "logo"
---

## What it is

The [9 Barris Imatge](https://9barrisimatge.org/) collective has been documenting the Nou Barris district of Barcelona since 2002. Since 2018 it has published with its own system: **Taro Photo App**.

Taro has three parts, all free software:

- **A static website** built with Hugo and the PaperMod theme, with a custom design.
- **A content manager** (Sveltia CMS, hosted on the same site) so members can publish without touching code.
- **Python modules** for what a static site can't do alone: audience voting, forms that reach an inbox, and automatic publishing.

9barrisimatge.org is the reference installation: **3,008 articles, 24 member profiles and 19 years of archive**. The distributed software is the same system without the collective's data, so any other photography group can install it with its own members, articles and albums.

The migration of the archive from Blogger is covered in a separate project: [from Blogger to a static website](/en/projectes/migracio-blogger-9barrisimatge/).

---

## Why "Taro"

It pays tribute to [Gerda Taro](https://en.wikipedia.org/wiki/Gerda_Taro) (1910–1937), photojournalist and partner of Robert Capa, and the author of a key part of the reportage from the Spanish Civil War.

---

## An article: photo, text and album

The publishing model is deliberately simple. Each article has:

| Field | What goes in it |
|---|---|
| Author | A member of the collective, with their own page |
| Main photo | The image that represents it in the gallery |
| Text | The body of the article, in Markdown |
| Album link | Google Photos, Flickr, your own server… The system doesn't depend on it |
| Keywords | To make it findable |

Everything else in the system exists to publish, find and share this well.

---

## The website

- Mosaic gallery on the home page and on each author's page
- Archive by year, tag cloud and a page with every post
- Instant in-browser search, also on the 404 page, with the date of each result
- "See the full photo album" button on every article
- Most-visited articles, computed with GoatCounter on each publish (no cookies)
- RSS, dark mode, fonts served from the site itself and a mobile-first layout
- Structured data (JSON-LD), social image and sitemap, reviewed in September 2026

---

## The content manager

Sveltia CMS, self-hosted at `/admin/`. Editors log in with their GitHub account and every save is a commit: author, date and history are kept, and any change can be reviewed or undone.

- **32 collections**: 19 for articles (one per year, because 3,008 articles in a single list would be unusable), fixed pages, members, meeting minutes and contest documentation
- Fixed pages with their technical fields hidden, so nothing breaks on save
- Member profiles (active or veteran) and minutes with attendees, agenda, decisions and votes
- A custom sidebar that filters articles by year

The site doesn't depend on the CMS to work: it's a single JavaScript file, and it's the editor's browser that talks to GitHub.

---

## The modules

Python with the standard library only: no `pip install`, no dependencies to keep an eye on. SQLite only where needed.

### Voting — in production

For exhibitions and contests where the people present vote, not someone at home voting a thousand times.

- Mobile page with a numeric keypad, and QR codes on the poster and on each work
- One vote per work and device, tied to a code computed with a secret key. **No personal data is stored**: no name, no email, no location
- **Geofencing**: you can only vote within 500 m of the exhibition
- Test mode for rehearsals, and an admin panel with tally, automatic closing and signed CSV export
- Counting and audit tools (`tally.py`, `audit.py`), including a paper ballot count
- Catalan, Spanish and English

It is being rehearsed in autumn 2026 for the audience vote of the photography contest at the December exhibition.

### Forms — in production

A static site has nowhere to send a form. This module receives the contact and "join the collective" forms and sends them by email from our own server, with no intermediary services and no database.

Abuse protection: origin validation, honeypot, per-IP rate limiting, field allow-list and size limits. No internal error ever reaches the browser, and every message carries the legal footer (GDPR and Spain's LOPDGDD).

### Auto-publishing — pending

A component that rebuilds the site when a change arrives. It isn't active: publishing is currently done by GitHub Actions.

---

## Why build it this way

- **A static site is fast and hard to attack**: generated HTML, no database, no exposed running code.
- **Content is memory**: each article is a readable file with history. 24 years of the collective's documentary heritage don't live inside anyone else's platform.
- **Autonomy**: publishing, fixing or deleting an article doesn't depend on any company.
- **Readable and reusable**: HTML, Markdown, Git and Python are tools a lot of people know.

It isn't a prototype. A non-profit collective has used it to publish 3,008 articles and run the audience vote of an exhibition.

---

## Status, no make-up

**Done:**

- **AGPL-3.0** licence, with SPDX headers and the licences of third-party components
- Distributable package (`modules/taro/`) with the three modules, no 9 Barris Imatge data, and an installation guide for each module. The voting and form tests pass
- Meeting minutes with decisions and votes

**Doesn't exist yet:**

- **Per-member permissions**: anyone with write access can edit every article. This is the most serious gap for a large collective
- **Exhibition management from the CMS**: the works in a vote are still configured by hand on the server
- **Guided installer**: there's a manual and configuration templates, but no wizard
- **Generic CMS**: the 32 collections are tailored to 9bi, and a new collective has to trim them

---

## Before / after

{{< gallery "9bi-blogger.png" "9bi-taro-photo-app.png" >}}
*Left: 9 Barris Imatge on Blogger. Right: 9barrisimatge.org with Taro.*

---

## What it's built with

- **Hugo** 0.164 and **PaperMod** (header and footer rewritten)
- **Sveltia CMS** 0.217, self-hosted
- **Python 3** (standard library) and **SQLite**
- **GitHub Actions** and **GitHub Pages** to publish the site; voting and forms on LinuxBCN's server, with automatic service monitoring
- **GoatCounter** for cookie-free statistics

Open source on [GitHub (112books/9bi)](https://github.com/112books/9bi), mirrored on [Codeberg](https://codeberg.org/linuxbcn/9bi).

---

## The software is yours

If you run a collective, association or photography group, you can install Taro and get a website, a content manager and, if you need them, audience voting and forms. Publishing doesn't require programming: just write and upload an image.

Adapt it as much as you like. The AGPL-3.0 lets you, and asks you to share your improvements if you publish them. Every module came from a real need of the collective. If you're missing one, tell us about it.

And if you want Taro but have nobody to host or maintain it, LinuxBCN offers hosting, email and maintenance on terms suited to non-profits, so the site doesn't rely only on the goodwill of volunteers.
