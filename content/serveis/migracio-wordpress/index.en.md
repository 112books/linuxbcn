---
title: "Moving from WordPress to a static site"
seo_title: "WordPress to static site migration | LinuxBCN"
subtitle: "Same content, far less machinery"
description: "We move your WordPress site to static without losing URLs, images or rankings, and we leave you an editor you actually understand."
weight: 1
lastmod: "2026-11-18"
faq:
  - q: "Will I lose my Google rankings?"
    a: >-
      Not if it is done properly. URLs stay identical and, where one has to change, we add
      a 301 redirect. Before publishing we crawl the old and the new site URL by URL:
      if a single address does not respond the same way, we do not publish.
  - q: "Will I be able to edit the site myself, without coding?"
    a: >-
      Yes. The site is published through a visual editor (Sveltia or Decap) that works on
      plain text files: you write, upload images, save, and the change goes live. A
      training session and written notes are included so you do not depend on us.
  - q: "What happens to the old blog comments?"
    a: >-
      They are kept as static content inside each post, with their date and author. If you
      want new comments, we can connect an external service — we explain the options and
      what they mean for your visitors' privacy — or leave them closed.
  - q: "How long does a migration take?"
    a: >-
      It depends on the volume and the number of addresses, not on the type of site. After
      the initial inventory we give you a concrete date; we do not estimate before knowing
      what is there.
  - q: "What about the domain and email?"
    a: >-
      They are not touched. Domain and mailboxes are independent from the website and stay
      where they are. We change where the pages are published, not who owns the domain.
howto:
  name: "How we migrate a WordPress site to static"
  description: "LinuxBCN's process for moving a WordPress site to a static site without losing URLs, content or rankings."
  steps:
    - name: "Inventory and crawl"
      text: "We crawl the entire current site: pages, posts, images, files and outbound links. That map becomes the checklist of everything that must survive."
    - name: "Content and images"
      text: "We export the content, convert it to clean Markdown and optimise images to WebP with responsive sizes, with no visible loss of quality."
    - name: "URL parity and redirects"
      text: "We compare every old address against the new one with a 1:1 crawler and add 301 redirects where needed. No external link or search result breaks."
    - name: "Editor and training"
      text: "We connect a visual editor on top of the site files, train the people who will use it and support the first publications."
---

Moving to a static site means no longer serving every visit with PHP and MySQL, and instead serving HTML files that are already built. The content is the same and so are the addresses, but the site loads faster, has a smaller attack surface and needs almost no maintenance.

## When it makes sense

WordPress makes sense when many people edit, when there are orders and user accounts. When the site only **publishes** — news, projects, catalogues, portfolios — the machinery is surplus and turns into permanent maintenance work.

You will recognise yourself in some of these:

- The site publishes content but sells nothing and takes no bookings.
- You have a pile of plugins and could not say what each one does.
- Updates are frightening: any Tuesday can break the site.
- The site is slow, especially on mobile, and you blame "the connection".
- You get brute-force attacks, spam through the form or attempts to reach the admin area.
- Nobody on the team dares touch the site for fear of breaking it.

None of this is a WordPress defect. It is the cost of using a platform built for a different job.

## When we do NOT recommend it

Not everything can — or should — go static. If you are in one of these cases, we tell you before starting:

- **Complex shop:** stock, variants, coupons, payments and shipping. WooCommerce does that job and a static site does not replace it.
- **Editorial workflow with many roles:** publication calendars, approvals, several teams. If ten people edit every day, the database-backed CMS is often the right tool.
- **Dependence on one specific plugin:** forums, member areas, courses, bookings with their own logic. If the plugin is the heart of the project, we leave it alone.
- **Someone else maintains the site and it works.** If it is fine and nobody suffers, we do not touch it.

## How we do it

### 1. Inventory and crawl

We crawl the entire current site: pages, posts, images, downloadable files, forms and outbound links. That map becomes the checklist of everything that must survive the migration.

### 2. Content and images

Content is exported and converted to clean Markdown, with no leftover markup from the old editor. Images are converted to WebP at screen-appropriate sizes: the total weight usually drops sharply with no noticeable difference.

### 3. URL parity and redirects

Every old address is compared with the new one in a 1:1 crawl. Where there is no exact match, a 301 redirect is added. The goal is that no external link, RSS feed or search result breaks.

### 4. Editor and training

On top of the files we connect a visual editor (Sveltia or Decap) suited to the size of the project. The person publishing sees fields, images and a save button — no code. Then come training and written notes, so the site is genuinely theirs.

## Figures from real migrations

We do not use generic examples. These come from projects we have handled ourselves:

- **[Blog de Pocallum](/projectes/blog-pocallum/):** 2,353 posts and 137,000 words migrated intact, with **2,360 URLs verified 1:1** so nothing moved. Images moved to WebP with **1,318 MB saved (−42.1%)**.
- **[9 Barris Imatge](/projectes/migracio-blogger-9barrisimatge/):** **3,006 articles** published since 2008, moved **with zero errors** and keeping their addresses. The new site generates more than 8,700 pages in under half a minute.

## What happens to rankings, forms and email

- **Rankings:** preserved because addresses are preserved. Redirects cover the cases where one has to change.
- **Forms:** a static site does not send email by itself. Forms are wired to our own script on the server, with no intermediary services keeping visitors' data.
- **Email and domain:** untouched. They are independent from the website.
- **Analytics:** if you came from Google Analytics, it can be replaced with cookie-free analytics that does not track people.

## What we need from you

Access to the WordPress dashboard, the domain and the current hosting, plus one person to validate content. The rest is our job.

## Before deciding

- [How to leave WordPress without losing anything](/guies/sortir-de-wordpress/) — order, inventory and URL parity.
- [Hugo or WordPress: which one fits you](/guies/hugo-vs-wordpress/) — the honest comparison.
- [Your WordPress is slow or got attacked](/guies/wordpress-lent-o-insegur/) — diagnosis before solution.
- [Moving from Blogger to your own site](/guies/migrar-de-blogger/) — the 9 Barris Imatge case.

{{< faq >}}

## Let's talk about your WordPress

Tell us what you have and what bothers you. If migration is not the solution, we will tell you that too.

→ [Contact](/contacte/) · [How we work](/com-treballem/)
