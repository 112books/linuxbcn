---
title: "The new 112books.eu theme"
slug: "112books-theme"
weight: 2
year: 2026
client: "112Books"
sector: "editorial"
description: "Full rebuild of 112books.eu: a new information architecture that clarifies the three pillars of the publisher, and a WordPress FSE block theme built from scratch with GitHub and Claude."
lastmod: "2026-07-13"
draft: false
serveis: ["tema-wordpress"]
image: "112bools-portada-01.png"
---

## The problem wasn't visual. It was structural.

112Books is an independent publisher based in Barcelona, specialising in photobooks and photographic projects. They guide photographers and authors through the entire process: layout, image selection and sequencing, printing, distribution.

Over the years, their website had grown without a clear plan. Content, sections and plugins kept being added. The result was a site that *worked* but didn't explain clearly who 112Books is or what they do.

A new visitor had no way of knowing whether they were looking at a print shop, a gallery, a bookshop or a publisher. The information existed — but it was mixed together, buried, without hierarchy.

The challenge wasn't to make the site «look better». It was to reorganise all the information so it would actually be useful.

---

## Three pillars, three clear sections

The most important editorial decision of the project was to define precisely the three areas of activity at 112Books, and build the website around them.

**1. The accompaniment service**

The core of the business: guiding authors through the entire production process of a photobook. From idea to finished work. Layout, image selection and sequencing, printing, edition, distribution.

This now occupies the place it deserves: the first thing the website explains.

**2. The sales catalogue**

Some of the authors who have gone through the accompaniment process have chosen to sell their books through 112Books. Not all of them — it's each author's decision.

The catalogue brings together these works: photobooks available to buy, with full product pages and direct WooCommerce integration.

**3. The author directory**

A space for transparency. 112Books has worked with many photographers and authors over the years. Those who have wanted to appear in the directory do: who they are, which projects they've been involved in, which books they've published.

Others prefer to keep their relationship with the publisher private. Entirely understandable — the creation of a work is an intimate process, and not everyone wants it known who accompanied them. The directory reflects exactly that reality: only those who want to appear, appear.

---

## A Frankenstein that needed replacing

The previous website had grown through accumulation. A modified base theme with layers of CSS added over the years. Plugins to compensate for what the theme couldn't do. Sections with no coherence between them.

It didn't reflect the publisher's identity. It had no visual rhythm. A new visitor had no way of knowing where they were or what they could find there.

We decided not to patch it. We decided to build a new theme from the very first commit.

---

## Built from scratch with FSE

Since version 5.9, WordPress makes it possible to build themes entirely with blocks — the **Full Site Editing (FSE)** system. HTML templates, `theme.json` for design tokens (typography, colours, spacing), clean CSS. No layers, no inherited PHP that nobody remembers writing.

We used this to establish a solid foundation from the start:

- **Reduced editorial palette**: white, a slightly warm off-white surface (#F4F4F1), near-black text (#211D1B), and the brand red (#D51F17) as the single accent.
- **Typography**: Georgia for body and editorial text, Verdana for interface elements.
- **WooCommerce integrated by design**, not bolted on afterwards. The catalogue, product pages and cart all share the same visual identity as the rest of the site.
- **No unnecessary plugins**: the contact form is a custom shortcode, the lightbox is native JavaScript, and Catalan pagination comes from a WordPress filter.

---

## GitHub and Claude as working tools

All the code lives on **GitHub** from the first commit, with an automatic sync script that commits each working session to the repository. 83 commits across 5 days of intensive work.

We used **Claude** (Anthropic) as a development copilot: implementing complex CSS patterns, accessibility review, generating FSE templates, debugging conflicts between WooCommerce and the theme.

This is not an AI-generated theme. It's a theme built by humans with AI as a tool. The difference matters.

---

## The result

![112books.eu homepage — hero and main pillars](112bools-portada-01.png)

The homepage explains what 112Books does in five seconds. The headline takes the space it deserves. Two direct entry points: the accompaniment service and the editorial catalogue.

![Homepage — collective projects and seven services](112bools-portada-02.png)

Below, current collective projects and a breakdown of the seven service areas: photobooks, promotion and distribution, exhibitions, prints, postcards, framing, photographic catalogue.

![Homepage — shop, recommendations and authors](112bools-portada-03.png)

The publisher's shop, editorial recommendations and the author directory, all integrated into the flow of the main page.

![Footer with quote, address and full navigation](112bools-portada-04.png)

The footer brings together the brand identity, physical address, service navigation and social media. And the Homer quote that 112Books has made their own: *«A photograph is a poem without words»*.

---

![Editorial accompaniment page](112bools-serveis-01.png)

The services page makes the core of the business clear: comprehensive accompaniment for the production of a photobook, from idea to distribution.

![The six steps of the editorial process](112bools-serveis-02.png)

The process unfolds in six phases: assessment, editing, design, production, distribution and dissemination. And at the end, a direct call to action: *«Have a project? Tell us about it.»*

---

![Photobook and publications catalogue](112bools-cataleg-01.png)

The catalogue presents available photobooks with cover, author and price. Integrated directly with WooCommerce — buy in one click, without leaving the site.

---

![Author directory](112bools-autors-01.png)

The author directory is a space for transparency. Every author who has chosen to appear has their own profile: who they are, which projects they've been involved in, which books they've published.

Others prefer to keep their relationship with the publisher private. The directory respects that: only those who want to appear, appear.

---

![News and editorial activity](112bools-blog-noticies-01.png)

The news section collects recommendations, presentations, exhibitions and catalogue updates. Original content, without algorithms or third-party platforms.

---

## Cookie-free analytics

The site uses **GoatCounter** for analytics. No cookies, no third-party tracking, no forced consent banners. Data stays on our own infrastructure and never reaches any advertising platform.

As a complement, we built a **custom WordPress plugin** that shows statistics directly from the admin dashboard: visits by period, most-viewed pages, browsers, operating systems and country breakdown.

---

## Technology

WordPress FSE · theme.json · WooCommerce · GitHub · Claude · GoatCounter · PHP · JavaScript · CSS Grid

---

→ [112books.eu](https://112books.eu)
→ [GoatCounter WordPress plugin — related project](/en/projectes/goatcounter-wp/)
