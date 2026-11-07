---
title: "40 Years of Blues in Barcelona"
seo_title: "40 Years of Blues in Barcelona: web archive in three languages | LinuxBCN"
slug: "40anysblues"
weight: 10
year: 2026
date: 2026-11-06
client: "own project (112books)"
sector: "culture"
perfils: ["collectives"]
description: "Photographic and biographical archive of Barcelona's blues scene: 148 musicians, three languages, Hugo and GitHub Pages."
lastmod: "2026-11-07"
draft: false
serveis: ["static-web", "multilingual", "seo"]
image: "40anysblues.png"
---

## An archive, not just a book listing

On November 6, 2026, the book *40 Years of Blues in Barcelona* by Joan Linux
with texts by Manuel López Poy was presented at Centre Cultural Collblanc – La Torrassa.

The accompanying website is not merely a book listing: it is a photographic and biographical
archive of Barcelona's blues scene.

---

## The challenge

Organize 148 musician profiles, 531 formations, and 296 black-and-white photographs across three languages.
Without a content management system. Without unnecessary external dependencies.
So anyone can search for a musician, see their face, and understand why Barcelona is a blues city.

---

## The solution

- **Hugo** as a static site generator with a custom theme
- **GitHub Actions + GitHub Pages** to publish on every `git push`
- **Images in WebP with `srcset`** — original photographs are large, but each page loads only its size
- **Structured data** (Person, BreadcrumbList, Organization) so search engines understand the content
- **Native search** and navigation by taxonomy: 27 instruments, formations, birth years
- **GoatCounter** for privacy-respecting analytics

---

## The result

Total data sovereignty: the repository is public, the website is independent, no third-party processing.
The original cover weighed 3.5 MB; now it weighs 528 KB. Three languages (Catalan, Spanish, English)
share the same content: names remain original, texts are contextualized, not literally translated.

A model that works for cultural projects: multilingual, accessible, fast,
without extra infrastructure.

{{< gallery "40anysblues-fitxa.png" "Musician profile: biography, discography, formations" "40anysblues-bands.png" "Formations grid navigable by taxonomy" >}}

→ [40anysblues.112books.eu](https://40anysblues.112books.eu)
→ [Public statistics](https://40anysblues.112books.eu/estadistiques/)
