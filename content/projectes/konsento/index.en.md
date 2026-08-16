



⸻

title: “Konsento — Free governance tool for community spaces”
description: “Konsento is a free governance tool for community spaces, cooperatives, social centres and non-profit organisations. It simplifies the management of assemblies, committees, decisions and tasks, and makes it easier to keep the organisation’s information and decisions organised, accessible and traceable.”
lastmod: “2026-08-15”
slug: “konsento”
weight: 1
year: 2026
client: “LinuxBCN”
featured: true
draft: false
serveis: [“aplicacio-web”, “cas-propi”]
image: “konsento-v1-retall.png”
aliases:
  - /konsento/

⸻

The challenge

Self-managed cultural spaces, cooperatives, social centres and non-profit organisations share a common problem: democratic management is slow, scattered and difficult to trace. Decisions are made on WhatsApp, agreements get lost, committees don’t know who is doing what, and assemblies turn into endless marathons with no institutional memory.

The need is clear. But when you look for tools to address it, the landscape is disappointing.

⸻

The problem with existing tools

We have explored the available options — Decidim, Loomio, Open Collective, various cooperative ERP systems — and they all fall into the same pattern: they are over-engineered for most organisations.

They require powerful servers, technical teams to maintain them, months to configure, and intensive training to use. A neighbourhood association or community coworking space does not need a voting system with real-time results or a proposal engine with dozens of stages. It needs decisions to be recorded, everyone to know who is doing what, and anyone to be able to submit a proposal.

⸻

The solution: just what is needed

Konsento is built around a clear principle: cover the real decision-making cycle with the minimum technical and management complexity.

One single cycle, done properly: call → attend → record → agree → publish. Nothing more.

The current features address the immediate needs of a real organisation:

* Assemblies — invitations, minutes and decisions in one place
* Working committees — members, objectives, meetings and tasks for each committee
* Tasks — the management team delegates tasks to committees with status and deadline tracking
* User dashboard — each member can see their committees, meetings and pending tasks
* Requests and proposals — anyone can make a proposal, ask a question or request action without registering
* Practical dashboard — day-to-day operational information always accessible
* Protocols and documents — internal regulations, bylaws and FAQs integrated

{{< gallery
“konsentor-screen-01.png”
“konsentor-screen-02.png”
“konsentor-screen-03.png”
“konsentor-screen-04.png”
“konsentor-screen-05.png”
“konsentor-screen-06.png”

}}

The entire front end is public and accessible without registration. Internal management is restricted to the management team, through a dedicated, uncluttered administration panel.

[SCREENSHOT: Administration panel with organised sections]

⸻

Progressive growth

Konsento does not aim to be complete from day one. The project will grow with the real needs of the organisations that use it.

Each new feature will be added when there is a specific and demonstrated need, rather than anticipating hypothetical use cases. This ensures that the tool remains lightweight, maintainable and understandable for the people who manage it.

⸻

Lightweight and proven technology

Konsento is a standard web application built with proven technology and no proprietary dependencies:

Component	Technology
Backend	Python · Django
Database	MariaDB
Frontend	HTML5 · CSS3 · Minimal JS
Authentication	Email + Google OAuth (django-allauth)
Internationalisation	Catalan and English (expandable)
Hosting	Any Linux VPS
Licence	AGPL-3.0 (free software)

It runs on a basic VPS with 2 GB of RAM. It does not require Kubernetes, microservices or any special infrastructure. The design is responsive, accessible (WCAG 2.1 AA) and the main functions work without JavaScript.

{{< gallery
“konsentor-screen-07.png”

}}

⸻

Who is it for?

Konsento is suitable for any organisation that needs to:

* Manage regular assemblies with minutes and follow-up of decisions
* Coordinate working groups or internal committees
* Track tasks between the management team and committees
* Collect community proposals and questions in a structured way
* Provide a public window with operational information and protocols

Examples of use: self-managed cultural centres, worker cooperatives, social centres, neighbourhood associations and community coworking spaces.

{{< gallery
“konsentor-screen-tel-01.png”

}}

⸻

Free software

The source code is public, auditable and reusable under the AGPL-3.0 licence.

Repository: codeberg.org/linuxbcn/konsento

Any organisation can deploy its own instance, adapt it to its needs and contribute improvements to the project.

⸻

Deployment and support

LinuxBCN offers:

* Managed deployment on a dedicated or shared VPS
* Adaptation to the organisation’s identity and needs
* Training for the management team
* Maintenance and security updates

Contact us for a no-obligation quote.

⸻

Developed by Joan Linux · LinuxBCN.com · Barcelona

⸻