---
title: "Konsento — Assembly Governance for Community Spaces"
description: "Konsento is a free software web application that helps collectives, cooperatives and self-managed spaces make decisions in a transparent, structured and accessible way."
lastmod: "2026-08-17"
slug: "konsento"
weight: 1
year: 2026
client: "LinuxBCN"
featured: true
draft: false
serveis: ["aplicacio-web", "cas-propi"]
image: "konsento-v1-retall.png"
aliases:
  - /en/konsento/
---

Konsento is a free software web application that helps collectives, cooperatives and self-managed spaces make decisions in a transparent, structured and accessible way.

It was born from a real need: Nau Bostik, a self-managed cultural centre in the Sagrera neighbourhood of Barcelona, was managing its assemblies, working groups and agreements through instant messaging, scattered emails and unstructured shared documents. Decisions got lost, responsibilities became blurred and institutional memory disappeared with every change of people.

Konsento solves exactly this problem.

---

## What Konsento does

The system follows a clear cycle: **convene → attend → record → agree → publish**. Everything is documented and accessible to all members.

Core features:

- **Assemblies** — Notices, agendas, minutes and agreements in one place. Members confirm attendance and track agreed action points.
- **Working groups** — Member management, goals, meetings and tasks. Each group has its own dedicated space.
- **User dashboard** — A personalised view of each member's groups, upcoming meetings and pending tasks.
- **Requests system** — Any member can send proposals, questions or requests to working groups without needing to know who is currently responsible.
- **Action protocols** — A step-by-step guide for members facing common situations: emergencies, space management, waste collection, neighbourhood services... No need to improvise every incident.
- **Local services directory** — Neighbourhood resources (duty pharmacies, health centres, municipal services) accessible directly from the app.
- **Integrated documentation** — Statutes, internal rules, FAQ and user guide all in one place.

{{< gallery 
"konsento-screen-home.png"
"konsento-screen-comissions.png"
"konsento-screen-propostes.png"
"konsento-screen-protocols.png"
 >}}

{{< gallery 
"konsento-screen-backend-01.png"
"konsento-screen-backend-02.png"
 >}}

{{< gallery 
"konsento-screen-mobile.png"
 >}}

---

## Who it's for

Konsento is useful for any organisation that operates on assembly or participatory principles: self-managed cultural centres, worker or consumer cooperatives, ateneus, neighbourhood associations, community coworking spaces, or any collective that needs to coordinate democratically without depending on corporate tools.

---

## Technical details

Konsento is built on proven, lightweight technology:

- **Backend:** Python / Django
- **Database:** MariaDB (or SQLite for development environments)
- **Frontend:** HTML5, CSS3 and minimal JavaScript — no heavy frameworks
- **Authentication:** email with mandatory verification; brute-force protection (django-axes)
- **Security:** forced HTTPS, HSTS, secure cookies, markdown sanitisation, API rate limiting
- **Accessibility:** WCAG 2.1 AA — mobile hamburger menu, AA contrast ratios, 44px touch targets, screen reader support
- **Hosting:** standard Linux VPS (2 GB RAM minimum), compatible with Apache + Gunicorn
- **Licence:** AGPL-3.0 — free software

The source code is public at [codeberg.org/linuxbcn/konsento](https://codeberg.org/linuxbcn/konsento).

---

## Free software, by design

Konsento is not a closed product. It is free software (AGPL-3.0 licence), meaning the code is public, auditable, modifiable and self-hostable. None of your organisation's data ever leaves your server.

LinuxBCN actively maintains it and adapts it to Nau Bostik's needs, but the design is intentionally generic: any collective with similar needs can adopt it, and we offer adaptation, hosting and support services.

If your collective needs a tool like this, [get in touch](https://linuxbcn.com/en/contacte/).

---

*Developed by Joan Linux · LinuxBCN.com · Barcelona*
