---
title: "Your WordPress is slow or got attacked: how to find out why"
seo_title: "Slow or attacked WordPress: what to do | LinuxBCN"
subtitle: "Diagnosis before solution: measure, do not guess"
description: "Why a WordPress site turns slow or gets attacked, how to diagnose it with data and which fixes make sense for each case."
weight: 3
date: "2026-11-18"
lastmod: "2026-11-18"
cta_url: "/serveis/allotjament-i-manteniment/"
cta_text: "Hosting and maintenance"
faq:
  - q: "How do I know if the problem is hosting or the site?"
    a: >-
      By measuring. A static site on the same server that runs slow rules out hosting; a slow
      WordPress with few plugins and little traffic usually points at the server or the database.
      Without measurements, any change is a bet.
  - q: "Does updating always help?"
    a: >-
      Updating closes known holes, but it does not fix a heavy site or an overloaded server. And an
      update without a backup can leave the site half broken.
  - q: "Do I need to reinstall everything?"
    a: >-
      Almost never. First the causes are separated: machinery, plugins, content, traffic or attack.
      Reinstalling only makes sense when the site is compromised and cannot be cleaned reliably.
  - q: "How much traffic must my site handle?"
    a: >-
      Usually far less than people think. Most cultural and small business sites peak at dozens of
      simultaneous visits, not thousands. Often the problem is not capacity but the weight of each
      page.
---

## The short answer

A slow or attacked WordPress almost never has a single cause. It is diagnosed by **measuring three things**: what the server sends, what the browser loads and what the admin area does. Without that data, "optimising" means changing things at random.

## The usual causes, by frequency

1. **Overloaded shared hosting.** The site is not slow: the neighbour is eating the machine.
2. **Plugins.** Many, badly built or abandoned. Often there are fifteen and three are used.
3. **Bloated database.** Revisions, transients, trash and old analytics tables.
4. **Unoptimised images.** A 4 MB hero makes the site feel slow even when the server is fine.
5. **Automated attacks.** Password guessing and mass requests to the admin area.
6. **Heavy theme.** Page builders that load half a megabyte of code to show a headline.

## How to diagnose it (without guessing)

- Measure the server response time on a simple page.
- Measure the weight and number of files on the homepage.
- Check access logs: repeated attempts at `wp-login` or `xmlrpc`.
- Check disk space and database health.
- Review which plugins are active and which have never been updated.
- Check certificate, backups and PHP version.

## What to do depending on the result

- **Overloaded server** → change hosting or hosting model.
- **Plugins** → remove them, do not just deactivate.
- **Database** → clean and limit revisions.
- **Images** → convert and serve proper sizes.
- **Attacks** → firewall, access limits and, if needed, take the admin panel off the internet.
- **All at once** → maybe the question is not how to fix it, but whether this site should be a WordPress at all.

## When the fix is not migrating

If the site sells, manages members or has a complex editorial workflow, changing technology fixes nothing: what exists needs care. Migrating is a solution for sites that **only publish** and demand more maintenance than they give back.

{{< faq >}}

→ [Moving a WordPress site to static](/serveis/migracio-wordpress/) · [Hosting and maintenance](/serveis/allotjament-i-manteniment/) · [Contact](/contacte/)
