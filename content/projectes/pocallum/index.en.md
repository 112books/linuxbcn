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
description: "Pocallum's website: cultural photography of live music, theatre and dance. From WordPress to a static site with search, two languages and own analytics."
lastmod: "2026-11-19"
draft: false
serveis: ["web-a-mida", "migracio-wordpress"]
image: "pocallum.png"
---

## Cultural photography with its own character

Pocallum is Joan Linux Martínez's photography service: **live music, theatre, dance and the performing arts** in Barcelona, since 2010. An author's craft, with a very defined visual identity and an unconventional way of working.

The site had to do one very specific thing: make anyone looking for a photographer for a concert or a show understand in ten seconds whose eye they are dealing with.

## The problem

The site lived on WordPress: heavy, with more machinery than a portfolio needed, and a blog that was not updated at the same pace. Every new photograph required going through a panel with twenty options, and the result took time to load exactly at the moment someone decides whether to call you or not.

## What we built

In **2026** we moved the whole site to a static base, keeping the addresses:

- **152 photographs** organised by concerts, festivals and shows.
- **27 festivals** and **11 news items**.
- **Internal search** that works without a server (index generated at build time).
- **Catalan and English**, with both languages complete.
- **Own analytics dashboard** on the site itself, with no cookies and no third parties.
- Page weight kept to the minimum: no database, no plugins, no third-party scripts.

## The result

The site loads instantly because the files are already built, not pages assembled on every visit. And the most important thing for whoever maintains it: publishing a new photograph is uploading a file and making a commit, not navigating a panel.

The technical detail of the migration is in [the project page](/projectes/pocallum-estatic/); the blog, which had its own path from WordPress to Hugo, is at [Blog de Pocallum](/projectes/blog-pocallum/).

## Technology

Hugo with its own CSS and JavaScript (no frameworks), static search indexed at build time, hosting on GitHub Pages with automatic deployment and GoatCounter analytics.

→ [pocallum.cat](https://pocallum.cat) · [Moving from WordPress to a static site](/serveis/migracio-wordpress/)
