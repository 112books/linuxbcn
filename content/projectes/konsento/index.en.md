---
title: "Konsento — Free Governance Tool for Community Spaces"
description: "Konsento is a free governance tool for community spaces, cooperatives, ateneus and non-profit organisations. It simplifies the management of assemblies, working groups, agreements and tasks, and helps keep the organisation's information and decisions structured, accessible and traceable."
lastmod: "2026-08-15"
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

## The challenge

Self-managed cultural spaces, cooperatives, ateneus and non-profit organisations share a common problem: democratic governance is slow, scattered and hard to trace. Decisions get made over WhatsApp, agreements get lost, working groups don't know who's doing what, and assemblies turn into endless marathons with no memory.

The need is clear. But when you look for tools to address it, the landscape is disappointing.

---

## The problem with existing tools

We have explored the available options — Decidim, Loomio, Open Collective, various cooperative ERPs — and they all fall into the same pattern: **they are oversized for most organisations**.

They require powerful servers, technical teams to maintain them, months to configure and intensive training to use. A neighbourhood association or a community coworking space doesn't need a real-time voting system or a proposal engine with dozens of stages. It needs decisions to be on record, everyone to know who does what, and anyone to be able to put a proposal forward.

---

## The solution: just what's needed

**Konsento** is built on one clear principle: cover the real decision-making cycle with the **minimum technical and administrative complexity**.

A single well-defined cycle: **convene → attend → record → agree → publish**. Nothing more.

The current features cover the immediate needs of a real organisation:

- **Assemblies** — notice, minutes and agreements in one place
- **Working groups** — members, goals, meetings and tasks per group
- **Tasks** — the governing team delegates work to groups with status tracking and deadlines
- **User dashboard** — each member sees their groups, meetings and pending tasks
- **Requests and proposals** — anyone can propose, ask or request action without registering
- **Operations board** — day-to-day operational information always accessible
- **Protocols and documents** — internal rules, statutes and FAQ integrated

{{< gallery 
"konsentor-screen-01.png"
"konsentor-screen-02.png"
"konsentor-screen-03.png"
"konsentor-screen-04.png"
"konsentor-screen-05.png"
"konsentor-screen-06.png"
 >}}

The entire front end is **public and accessible without registration**. Internal management is exclusive to the governing team, through a focused, noise-free panel.

[SCREENSHOT: Admin panel with organised sections]

---

## Progressive growth

Konsento does not aim to be complete from day one. The project **will grow with the real needs** of the organisations using it.

Each new feature will be added when there is a concrete and demonstrated need, not to anticipate hypothetical use cases. This keeps the tool lightweight, maintainable and understandable for whoever manages it.

---

## Proven, lightweight technology

Konsento is a standard web application built with proven technology and no proprietary dependencies:

| Component | Technology |
|-----------|-----------|
| Backend | Python · Django |
| Database | MariaDB |
| Frontend | HTML5 · CSS3 · minimal JS |
| Authentication | Email + Google OAuth (django-allauth) |
| Internationalisation | Catalan and English (extensible) |
| Hosting | Any Linux VPS |
| Licence | AGPL-3.0 (free software) |

It runs on a **basic 2 GB RAM VPS**. No Kubernetes, no microservices, no special infrastructure required. The design is responsive, accessible (WCAG 2.1 AA) and works without JavaScript for all core functions.

{{< gallery 
"konsentor-screen-07.png"
 >}}

---

## Who it's for

Konsento is suitable for any organisation that needs to:

- Manage periodic assemblies with minutes and agreement tracking
- Coordinate working groups or internal committees
- Track tasks delegated between the governing team and working groups
- Collect community proposals and questions in a structured way
- Maintain a public-facing board with operational information and protocols

Use cases: self-managed cultural centres, worker cooperatives, ateneus, neighbourhood associations, community coworking spaces.

{{< gallery 
"konsentor-screen-tel-01.png"
 >}}


---

## Free software

The source code is public, auditable and reusable under the **AGPL-3.0** licence.

**Repository:** [codeberg.org/linuxbcn/konsento](https://codeberg.org/linuxbcn/konsento)

Any organisation can deploy its own instance, adapt it to its needs and contribute improvements back to the project.

---

## Deployment and support

LinuxBCN offers:

- **Managed deployment** on dedicated or shared VPS
- **Customisation** to the organisation's identity and requirements
- **Training** for the governing team
- **Maintenance** and security updates

[Contact us](https://linuxbcn.com/en/) for a no-obligation quote.

---

*Developed by Joan Linux · LinuxBCN.com · Barcelona*


---
