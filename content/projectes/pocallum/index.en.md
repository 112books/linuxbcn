---
title: "Pocallum"
seo_title: "Pocallum: website for a cultural photography agency | LinuxBCN"
slug: "pocallum"
weight: 13
year: 2025
date: 2025-01-01
client: "photography agency"
sector: "fotografia"
perfils: ["microempreses"]
description: "Pocallum's website: cultural photography of live music, theatre and dance — restructured and redesigned first, moved to Hugo afterwards."
lastmod: "2026-11-19"
draft: false
serveis: ["web-a-mida", "migracio-wordpress"]
image: "pocallum.png"
---

## Cultural photography with its own character

Pocallum is Joan Linux Martínez's photography service: **live music, theatre, dance and the performing arts** in Barcelona, since 2010. An author's craft, with a very defined visual identity and an unconventional way of working.

The site had to do one very specific thing: make anyone looking for a photographer for a concert or a show understand in ten seconds whose eye they are dealing with.

## First: restructure and redesign

The site had grown by accumulation: sections added over the years, a portfolio with no clear order and a homepage that did not explain what Pocallum actually does.

In the first phase we **restructured and redesigned the site** — on WordPress — so the content had hierarchy: the portfolio organised by concerts, festivals and shows; the services explained; and a design that let the photographs speak, which is what sells.

## Then: moving to Hugo (2026)

With the content already ordered, the next step was cutting weight. In **2026** we migrated the site to a static base, keeping the addresses:

- **152 photographs** organised by concerts, festivals and shows.
- **27 festivals** and **11 news items**.
- **Internal search** that works without a server (index generated at build time).
- **Catalan and English**, with both languages complete.
- **Own analytics dashboard** inside the site itself, with no cookies and no third parties.
- No database, no plugins and no third-party scripts.

## The result

Two phases, one site. First what it said and how it said it changed; then the machinery serving it. Order matters: had we migrated without restructuring, the static site would have been just as confusing, only faster.

The technical detail of the migration is in [the project page](/projectes/pocallum-estatic/); the blog, which had its own path from WordPress to Hugo, is at [Blog de Pocallum](/projectes/blog-pocallum/).

## Technology

Hugo with its own CSS and JavaScript (no frameworks), static search indexed at build time, hosting on GitHub Pages with automatic deployment and GoatCounter analytics.

→ [pocallum.cat](https://pocallum.cat) · [Moving from WordPress to a static site](/serveis/migracio-wordpress/)
