---
title: "9 Barris Imatge — from Blogger to a static website"
slug: "migracio-blogger-9barrisimatge"
weight: 3
year: 2026
client: "9 Barris Imatge"
sector: "photography"
perfils: ["collectius"]
description: "Migrating 9 Barris Imatge from Blogger to a static Hugo website: 3,006 articles since 2008, zero errors, URLs preserved, authorship and albums recovered. LinuxBCN."
lastmod: "2026-09-27"
draft: false
serveis: ["migracio-wordpress"]
image: "9bi-taro-photo-app.png"
---

## Where we started

The [9 Barris Imatge](https://9barrisimatge.org/) collective has been documenting the Nou Barris district of Barcelona since 2002. For years its whole archive lived on Blogger: **3,006 articles**, the first ones from 2008, published by members who do photography, not IT.

Blogger was no longer enough. Every limitation turned into manual work for people who shouldn't have to wrestle with a computer.

---

## What wasn't working, and what replaced it

| On Blogger | Now |
|---|---|
| Publishing an album meant writing a post and linking it by hand | Each article has an album field, hosted wherever you like |
| Little control over who edits what | Every change is a commit with author and date, and can be reviewed and undone |
| Everything depended on an outside service: if the rules changed, activity stopped | Content is Markdown in the collective's own files, an open format that doesn't expire |
| Fixed pages were just posts like any other | Proper fixed pages, editable without the risk of breaking them |
| No member profiles | A profile and page for each member, with their articles |
| Publishing was "pressing a button" nobody could explain | A clear model for everyone: author, photo, text, album and keywords |

---

## The migration

All **3,006 articles** were migrated, with their images, albums and tags, and the operation finished **with zero errors**.

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
- A static site on GitHub Pages: no database and no server to maintain for the website

Members now publish from their own content manager, without touching code. The system has become reusable software for other collectives: [Taro Photo App](/en/projectes/taro-photo-app/).

---

## Before / after

{{< gallery "9bi-blogger.png" "9bi-taro-photo-app.png" >}}
*Left: 9 Barris Imatge on Blogger. Right: 9barrisimatge.org today.*

---

## What it's built with

- **Python 3** for the migration and clean-up scripts, with no external dependencies
- **Hugo** and **PaperMod** for the website
- **Sveltia CMS** for editing
- **GitHub Actions** and **GitHub Pages** for publishing

The scripts are open, in the project repository on [GitHub (112books/9bi)](https://github.com/112books/9bi), under the AGPL-3.0 licence.

---

## Is your organisation still on Blogger?

If your archive has lived on Blogger, WordPress or another platform for years and it's getting harder to maintain, we can migrate it without losing a single article or link. Let's talk.
