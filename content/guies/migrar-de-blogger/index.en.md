---
title: "Moving from Blogger to your own site"
seo_title: "Moving from Blogger to your own site | LinuxBCN"
subtitle: "Three thousand posts are not a problem if it is done in order"
description: "What to consider when leaving Blogger: images hosted by Google, addresses, comments and tags, with the real 9 Barris Imatge case."
weight: 4
date: "2026-11-18"
lastmod: "2026-11-18"
howto:
  name: "How we migrate a Blogger blog to your own site"
  description: "The process for moving a Blogger blog to a static site while keeping addresses, images and comments."
  steps:
    - name: "Export the full archive"
      text: "We download the blog export and verify its content: posts, drafts, tags, authors and dates."
    - name: "Download the images from Google"
      text: "Blogger images live on Google servers. We download all of them and host them with the project: if the blog is ever shut down, nothing goes with it."
    - name: "Keep the addresses"
      text: "We preserve the URL structure and add redirects from the old addresses, including tag URLs."
    - name: "Check and publish"
      text: "We check post by post that content is there, images load and no address is orphaned, before touching the domain."
faq:
  - q: "Will images be lost when leaving Blogger?"
    a: >-
      If they are not downloaded on purpose, yes: Blogger images have always been served from Google
      servers and may stop being served. Downloading them and hosting them with the project is part
      of the job.
  - q: "What about comments?"
    a: >-
      They are kept as static content inside each post, with author and date. If you want new
      comments, an external service can be connected or they can be left closed.
  - q: "Do I need to keep the custom domain?"
    a: >-
      Yes, and it is what makes keeping addresses possible. If the blog is on a blogspot subdomain,
      the previous step is owning a domain and configuring it properly first.
  - q: "How long does the old blog stay online?"
    a: >-
      Whatever it takes to check everything. Nothing is disconnected until the new site is stable
      and the addresses respond.
---

## The short answer

Leaving Blogger is mostly about **taking the content out of Google's cloud**: posts, images and comments. Addresses are kept, but images must be downloaded and hosted on your own infrastructure, because today they live on Google servers.

## Why people leave

- **Control**: content sits on a platform that decides for you (design, templates, features).
- **Speed and looks**: Blogger templates are far behind what can be done today.
- **Trust**: platforms that shut services or change terms. It has happened before.
- **Sovereignty**: photos, texts and comments are yours, but you do not hold them.

## What to preserve

- **The posts**, with date, author and tags.
- **The images**, which today point at Google servers.
- **The addresses** of each post and each tag.
- **The comments**, if you want to keep them.
- **The domain**, which is what makes nothing change place.

## The 9 Barris Imatge case

A photography collective in Nou Barris has documented the neighbourhood since 2002, and since 2008 published it on Blogger. **3,006 posts** written by people who do photography, not IT.

The migration moved every post, image, album and tag **with zero errors**, keeping the addresses. The new system generates more than **8,700 pages in under half a minute**. All the detail is in [the project page](/projectes/migracio-blogger-9barrisimatge/).

## What changes for the people publishing

Before, publishing meant logging into Blogger and writing. After, it means opening a simple manager, writing and saving. The difference: the site no longer depends on an external platform and the photos are at home.

{{< faq >}}

→ [Moving from WordPress to a static site](/serveis/migracio-wordpress/) · [Contact](/contacte/)
