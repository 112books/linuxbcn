---
title: "9 Barris Imatge — from Blogger to Taro Photo App"
slug: "migracio-blogger-9barrisimatge"
weight: 3
year: 2026
client: "9 Barris Imatge"
sector: "photography"
perfils: ["collectius"]
description: "How LinuxBCN moved 9 Barris Imatge from Blogger to Taro Photo App, a free software system built with Hugo: 3,006 articles since 2008, zero errors and URLs preserved."
lastmod: "2026-09-27"
draft: false
serveis: ["migracio-wordpress"]
image: "9bi-taro-photo-app.png"
---

## Where we started

The [9 Barris Imatge](https://9barrisimatge.org/) collective has been documenting the Nou Barris district of Barcelona since 2002. For years its whole archive lived on Blogger: **3,006 articles**, the first ones from 2008, published by members who do photography, not IT.

Blogger was no longer enough. Every limitation turned into manual work for people who shouldn't have to wrestle with a computer.

LinuxBCN's answer wasn't to switch platforms but to build one with free software: **[Taro Photo App](/en/projectes/taro-photo-app/)**, which combines a static website built with Hugo, a content manager so members can publish without touching code, and modules for audience voting and forms. The collective now owns both its data and its tools.

---

## What wasn't working, and what Taro does instead

| On Blogger | With Taro Photo App |
|---|---|
| Publishing an album meant writing a post and linking it by hand | Each article has an album field, hosted wherever you like |
| Little control over who edits what | Every change is a commit with author and date, and can be reviewed and undone |
| Everything depended on an outside service: if the rules changed, activity stopped | Content is Markdown in the collective's own files, an open format that doesn't expire |
| Fixed pages were just posts like any other | Proper fixed pages, editable without the risk of breaking them |
| No member profiles | A profile and page for each member, with their articles |
| Publishing was "pressing a button" nobody could explain | A clear model for everyone: author, photo, text, album and keywords |

---

## The migration

The first step in launching Taro was bringing the whole archive across. All **3,006 articles** were migrated, with their images, albums and tags, and the operation finished **with zero errors**.

- **`migrate_live.py`** reads the blog's live feed and generates one file per article. A variant, `migrate_blogger.py`, works from the official XML export.
- **URLs are preserved.** Every article keeps the address it had on Blogger, so links shared over eighteen years still work.
- **Authorship recovered.** A script (`recupera_autors_blogger.py`) rebuilt authorship from the old Blogger profiles: 439 of 473 articles assigned, and the remaining 34 documented.
- **Albums rescued.** Many links pointed to Picasa, which no longer exists. They were recovered and moved to Google Photos.
- **Tags.** For articles that had none, `auto_tags.py` suggests candidates.
- **A useful 404.** Anyone landing on an address that no longer exists finds a search box and links to the home page, archive and contact.

---

## The result

- **3,008 articles** from 2008 to 2026 and **24 member profiles**
- Over **8,700 pages** generated in under half a minute
- Archive by year, gallery by author, tag cloud and instant search
- Structured data, sitemap and cookie-free statistics (GoatCounter)
- A static site: no database and no running attack surface
- Audience voting for exhibitions and the collective's own forms, with no third-party services

Members publish from Taro's content manager, without touching code. And what began as the solution for one collective is now free software (AGPL-3.0) that any other photography group can install: **[discover Taro Photo App](/en/projectes/taro-photo-app/)**.

---

## Before / after

{{< gallery "9bi-blogger.png" "9bi-taro-photo-app.png" >}}
*Left: 9 Barris Imatge on Blogger. Right: 9barrisimatge.org with Taro Photo App.*

---

## Free software, end to end

Taro Photo App and its migration were built entirely with free tools:

- **Hugo** and **PaperMod** for the website
- **Sveltia CMS** so members can edit
- **Python 3** for the migration scripts and Taro's modules, with no external dependencies
- **Git** to keep every change with author, date and history

The code is open, under the AGPL-3.0 licence, on [GitHub (112books/9bi)](https://github.com/112books/9bi).

---

## Is your organisation still on Blogger?

If your archive has lived on Blogger, WordPress or another platform for years and it's getting harder to maintain, LinuxBCN can move it to Taro Photo App or a custom system, with free software and without losing a single article or link. Let's talk.
