---
title: "How to leave WordPress without losing anything"
seo_title: "Leave WordPress without losing anything | LinuxBCN"
subtitle: "Order, inventory and URL parity: what to do before touching anything"
description: "What to inventory before leaving WordPress, what is kept and what is lost, and the four mistakes that break the rankings of a migration."
weight: 1
date: "2026-11-18"
lastmod: "2026-11-18"
howto:
  name: "How to leave WordPress without losing anything"
  description: "The process for leaving WordPress while keeping URLs, content, images and rankings."
  steps:
    - name: "Inventory"
      text: "Crawl the whole site and list everything that must survive: pages, posts, images, files, forms and outbound links."
    - name: "Export and clean"
      text: "Take the content out, convert it to a clean format and discard what was filler: dead widgets, duplicated tags, empty pages."
    - name: "Check parity"
      text: "Compare every old address with the new one and add 301 redirects where needed. If a single URL does not respond the same, do not publish."
    - name: "Publish and support"
      text: "Launch the new site, check search engines and external links, and train the people who will edit content."
faq:
  - q: "How long does a migration like this take?"
    a: >-
      It depends on the number of addresses and images, not on the type of site. Twenty pages and
      three thousand posts are not the same job. We give a date after the inventory.
  - q: "Can it be done if the current WordPress is not up to date or working?"
    a: >-
      Yes, if there is access to the content: an export, database access or, if the site is down, a
      backup. The cleaner the WordPress, the less cleanup, but it does not need to be perfect.
  - q: "What about the images?"
    a: >-
      All images are migrated and converted to WebP at adapted sizes. The total weight usually drops
      sharply with no visible loss; in one of our projects it was 42%.
  - q: "What about links that other sites point to mine?"
    a: >-
      They are kept if the addresses are kept. That is why URL parity is not a technical detail: it
      is what prevents losing rankings and credibility.
  - q: "Can I go back if I do not like it?"
    a: >-
      Yes. As long as the domain is not switched, the old WordPress can stay live in parallel for a
      few days. We delete nothing until the new site is stable.
---

## The short answer

Leaving WordPress is not moving files: it is **keeping addresses, content and links** while you change the machinery that publishes them. If the addresses are kept, rankings are kept. If they change without redirects, they are lost.

## Why people leave

It is rarely ideology. It is usually one of three things:

- **Maintenance**: weekly updates, plugins that break, nobody watching.
- **Speed**: the site is slow because there is more machinery than needed.
- **Fear**: fear that an update breaks the site, fear of attacks, fear of touching anything.

## What is kept and what is lost

**Kept:** addresses (with parity and redirects), texts, images, files, publication dates and authorship where present.

**Lost:** widgets and plugins with no equivalent, shop features, user accounts unless migrated on purpose, and dynamic comments (they can be kept as static content).

**Changes:** editing. Instead of a panel with ten menus, an editor to publish. If three people maintain the site, that is an improvement; if twenty did with roles and calendars, maybe it is not the moment.

## What to inventory before touching anything

- Every address that exists, including category, tag and pagination URLs.
- Images and downloadable files.
- Forms and where the data goes today.
- External links pointing to the site (so they are not broken).
- Languages, if there is more than one.
- What is actually used and what is filler.

## The four classic mistakes

1. **Changing addresses because they "look nicer".** Every change needs a 301 redirect. Without one, what was there is lost.
2. **Publishing the new site without checking URLs one by one.** A 404 on an important page can take months to be noticed.
3. **Forgetting images.** A migration that leaves images pointing at the old domain breaks the day the old domain expires.
4. **Not training the people who edit.** The best site in the world decays if nobody on the team knows how to publish.

## When you should not leave

If you have a shop with stock and payments, a member area or an editorial workflow with many roles, WordPress or an equivalent platform is probably still the right tool. Leaving is not an automatic improvement; it depends on what the site has to do.

{{< faq >}}

## If you want, we can look at it

If you think your site is one of these, [how we move a WordPress site to static](/serveis/migracio-wordpress/) is the starting point.

→ [Contact](/contacte/) · [How we work](/com-treballem/)
