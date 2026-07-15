---
title: "LinuxBCN Analytics for GoatCounter"
slug: "LinuxBCN-Analytics-for-GoatCounter"
weight: 3
year: 2026
client: "LinuxBCN"
sector: "tools"
description: "Open-source WordPress plugin to integrate GoatCounter: cookie-free, GDPR-free analytics with a full stats dashboard directly in the WordPress admin."
lastmod: "2026-07-13"
draft: false
serveis: ["tema-wordpress", "cas-propi"]
image: "goatcounter-wp-temporal.png"
---

## The problem with Google Analytics

Most websites use Google Analytics. It's free, powerful, and has been the standard for years. But it has a hidden cost: it requires a cookie consent banner, it sends data to Google's servers, and it puts your traffic data in the hands of an advertising platform.

For many projects — blogs, artist websites, independent publishers, small businesses — Google Analytics is overkill. What they need is to know how many visits they're getting, which pages perform best, and where visitors come from. Nothing more.

**GoatCounter** solves exactly that. No cookies. No personal data. No GDPR consent banner required.

---

## A plugin, not a manual integration

GoatCounter already offers a simple integration path: a single JavaScript snippet in the `<head>` or `<footer>`. But for WordPress, we wanted something better:

- The script injected automatically, no code editing needed
- Stats visible **directly in the WordPress admin**, no extra tabs
- Available in **Catalan** (and English)

We built the plugin from scratch.

---

## Three tabs, five periods

The stats dashboard is organised in three views:

![Temporal tab — period selector, summary cards, SVG chart and day-of-week distribution](goatcounter-wp-temporal.png)

**Temporal** — The main view. Shows visits over time with an SVG bar chart, a summary of key metrics (total visits, page views, countries, top browser), and a day-of-week distribution with percentage and visit count.

![Pages tab — top pages with WordPress title, direct link and percentage bar](goatcounter-wp-pages.png)

**Pages** — Most visited pages with the WordPress page title (not just the URL), percentage, and a direct link.

![Devices tab — browsers, operating systems and countries with percentage bars](goatcounter-wp-devices.png)

**Devices** — Browsers, operating systems and countries, all with visual percentage bars.

The period selector is a five-option navigation bar: today, 7 days, 30 days, quarter (90 days) and year (365 days). The active tab is remembered across page reloads using localStorage.

---

## The chart

The bar chart is SVG generated directly in PHP. It adapts its granularity automatically to the selected period:

- **Today**: bars per hour
- **7 days**: bars per day
- **30 days** and **quarter**: bars per week
- **Year**: bars per month

Brand red gradient fill, horizontal grid lines with values, and date labels adapted in Catalan (Mon–Sun for weekly periods).

---

## No cookies. No banner.

GoatCounter does not use cookies. It does not collect IP addresses or any personal data. Therefore, **no GDPR consent banner is required**.

Data stays on GoatCounter's servers (or your own if you self-host). Nothing goes to Google, Meta, or any advertising platform.

---

## Setup in three steps

![Settings page — site code and API token fields](goatcounter-wp-config.png)

1. Create a free account at [goatcounter.com](https://www.goatcounter.com). Confirm your email (check spam — the confirmation email often lands there). **The API token section only appears after your email is confirmed.**
2. In **Analytics → Settings** in your WordPress admin, enter your site code (the subdomain of your GoatCounter dashboard URL) and your API token.
3. Done. The tracking script is injected automatically in the footer.

---

## Open source

The plugin is **GPL-2.0** and available on GitHub:

→ [github.com/112books/goatcounter-wp](https://github.com/112books/goatcounter-wp)

The repository includes the full source code, the `readme.txt` for WordPress.org, and a GitHub Action that will automatically sync each new release to the WordPress.org SVN directory once the plugin is approved.

---

## Technology

PHP · WordPress Plugin API · GoatCounter API v0 · SVG · CSS Grid · JavaScript · localStorage · GitHub Actions

---

→ [github.com/112books/goatcounter-wp](https://github.com/112books/goatcounter-wp)
→ [112books.eu website — related project](/en/projectes/112books-theme/)
