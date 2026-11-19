---
title: "Hosting and maintenance"
seo_title: "Website hosting and maintenance | LinuxBCN"
subtitle: "A site is not finished the day it goes live"
description: "Hosting on our own servers, rotating backups, monitoring and planned updates. The site keeps working without you having to think about it."
weight: 4
lastmod: "2026-11-18"
howto:
  name: "How we maintain a website"
  description: "The maintenance LinuxBCN provides for the sites it hosts: inventory, backups, monitoring and updates."
  steps:
    - name: "Inventory what exists"
      text: "Before touching anything, we know what runs, where it runs, who has access and what would happen if it stopped tomorrow. Without that inventory, any incident becomes an emergency."
    - name: "Backups off the server"
      text: "Daily backup of the site and the data, stored outside the same server and rotated. A copy on the same disk is not a backup: it is an illusion."
    - name: "Monitoring"
      text: "We watch the certificate, the domain and availability, and we are alerted when something stops responding. Better to find out before the client says so."
    - name: "Updates and support"
      text: "Planned updates for whatever needs them, tested beforehand, and a direct channel for any question or small change."
faq:
  - q: "Do I have to host the site with you?"
    a: >-
      It is not required. Some clients host where they want and only ask us for development. If
      you host with us, maintenance and backups are covered; if not, we tell you what your
      provider should be doing so nothing is left unattended.
  - q: "What happens if the server goes down?"
    a: >-
      We keep a copy of the site and its data outside the hosting server, plus a written restore
      procedure. We do not rely on the provider performing magic: we rely on a backup we tested.
  - q: "How fast do you reply?"
    a: >-
      We agree it in writing with each client: we do not sell 24/7 support we cannot honour. There
      is a fast path for critical incidents and a working day for small changes.
  - q: "Can I leave whenever I want?"
    a: >-
      Yes. The domain is yours, the code is yours and the data is exportable. If you leave, you get
      it tidy and documented: we hold nothing back to keep you.
---

## What maintenance includes

- **Hosting** on our own server, with HTTPS and certificates up to date.
- **Backups** daily, outside the hosting server and rotated.
- **Monitoring** of availability, certificate and domain.
- **Planned updates** for whatever needs them, tested first.
- **Support for small changes**: a paragraph, an image, a new section.
- **Periodic review** of broken links, accessibility and performance.

## Why "install and forget" is not enough

A static site has very few moving parts, and that is already an advantage: no database or plugins that must be updated every week. But it still depends on things it does not control: a certificate that expires, a domain that lapses, the server it lives on, an image someone deletes or a link that stops working.

Maintenance is mostly **watching and having a backup**. The rest is improvements.

## How we do it

### 1. Inventory what exists

Before touching anything, we know what runs, where it runs, who has access and what would happen if it stopped tomorrow. Without that inventory, any incident becomes an emergency.

### 2. Backups off the server

Daily backup of the site and the data, stored outside the same server and rotated. A copy on the same disk is not a backup: it is an illusion.

### 3. Monitoring

We watch the certificate, the domain and availability, and we are alerted when something stops responding. Better to find out before the client says so.

### 4. Updates and support

Planned updates for whatever needs them, tested beforehand, and a direct channel for any question or small change.

## Limits, up front

- We do not provide immediate phone support or 24/7 attention: we cannot honour it, so we do not sell it.
- We do not manage social media or advertising campaigns.
- We do not fix third-party servers we have no access to.

If your site is a WordPress that demands maintenance every week, maybe what it needs is not maintenance but [moving it to a static site](/serveis/migracio-wordpress/). And if you want to know what is wrong with it before deciding, [diagnose it by cause](/guies/wordpress-lent-o-insegur/).

## The sites we maintain

You will find them all at [Powered by LinuxBCN](/powered-by-linuxbcn/): cultural, artistic and social projects that carry the signature in the footer. It is not marketing: it is responsibility for what we build.

{{< faq >}}

## Let's talk about your site

If you have a site that works but nobody checks whether the certificate is expiring or a backup exists, let's talk.

→ [Contact](/contacte/) · [How we work](/com-treballem/)
