---
title: "Taro — album management for photography associations"
slug: "taro-photo-app"
weight: 3
year: 2026
client: "9 Barris Imatge"
sector: "photography"
description: "Taro — free software app built with Hugo and Python to manage and showcase photo albums for associations. Built by LinuxBCN for 9 Barris Imatge."
lastmod: "2026-09-23"
draft: false
serveis: ["aplicacio-web"]
image: "taro-logo.png"
image_style: "logo"
---

## From Blogger to free software

Taro was born from a concrete need of the [9 Barris Imatge](https://9barrisimatge.org/) collective: years publishing its albums on Blogger, with non-technical members struggling with a tool built for blogging, not association photography, and full dependence on a platform they didn't control.

The first need was to escape that limitation and gain sovereignty over their own information. Joan Linux, as a member of the collective, saw the chance to solve it with free software — and Taro was born from that.

The app is designed to host, very lightly, posts about photography events: a reference image, tags, authorship, and a link to the full album — hosted on each user's own server, or on Google Photos, Amazon or Apple, depending on where their photos live.

Taro isn't a closed product: it's in constant evolution, as new needs arise from the collective.

Try it here: [9barrisimatge.org](https://9barrisimatge.org/)

---

## Why "Taro"

The name is a small tribute to [Gerda Taro](https://en.wikipedia.org/wiki/Gerda_Taro), photojournalist and partner of Robert Capa. It looks increasingly clear that she was the author of some of that iconic photojournalism duo's best photographs. She died in the line of duty during the Spanish Civil War.

---

## Before / after

{{< gallery "9bi-blogger.png" "9bi-taro-photo-app.png" >}}
*Left: 9 Barris Imatge on Blogger. Right: 9barrisimatge.org with Taro.*

---

## Features and modules

Besides fixed sections for the association's static information, Taro includes several functional modules:

- **Blogger import** — migrating historical content without losing it
- **Photo contest management** — including electronic public voting
- **Auto-publishing** — automatic publishing of scheduled content
- ...and other modules added as the collective needs them

---

## Built with

- **Hugo** — static site generator, fast and database-free
- **PaperMod** — Hugo theme
- **Decap CMS** — content editing for non-technical profiles
- **Codeberg (Forgejo)** — code hosting
- **Codeberg Pages** — site publishing
- **GoatCounter** — cookie-free visit statistics
- **Python** — the app's modules: forms, voting, auto-publishing
- Git, Markdown, HTML, CSS and JavaScript

The code stays open at the [linuxbcn/9bi](https://codeberg.org/linuxbcn/9bi) repository on Codeberg.

---

## Status: beta

Taro is still in beta. The definitive version — description, license, features and source code — will be presented soon at LinuxBCN.com. Any suggestion is welcome, especially from members of the 9 Barris Imatge collective.

---

## Free software, with one exception explained

The value of free software is control, transparency, privacy and autonomy — and it's what makes it possible for a small organization like 9 Barris Imatge to maintain a site like this. Free tools are used wherever possible.

There is one exception: photo albums run on Google Photos, for cost and volume reasons. It's stated openly because it deserves to be said, not hidden.

---

## You can already see it running

Taro can already be seen live, working, at [9barrisimatge.org](https://9barrisimatge.org/). Being free software, any association or collective can freely enjoy it.

If it's of interest for your organization, LinuxBCN can adapt it — in features or in design — to your needs.
