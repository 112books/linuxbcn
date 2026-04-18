# AGENTS.en.md — linuxbcn.com

## Purpose of this document

This document defines how agents (human or AI-based) interacting with [https://linuxbcn.com](https://linuxbcn.com) and its repository should behave.

The goal is to ensure editorial consistency, strategic quality and alignment with **LinuxBCN**'s core principles: free software, privacy, data sovereignty and technological independence.

The technical and editorial source of truth for this project is **[CLAUDE.md](CLAUDE.md)**.

---

## Site objectives

Agents must contribute to:

- Generating qualified business opportunities for artists, cultural collectives and values-driven businesses.
- Positioning LinuxBCN as a reference for digital solutions built on free software, lightness, privacy and accessibility.
- Educating the market about real alternatives to WordPress, third-party CDNs and proprietary solutions.
- Providing useful, honest content oriented towards sound technological decision-making.

---

## Audience

Content is addressed to:

- Artists and musicians who need a digital presence without depending on technicians
- Cultural collectives and neighbourhood associations
- Freelancers and independent professionals who want a digital presence of their own
- Startups and emerging projects that need a solid foundation from day one
- Small and micro businesses with values
- Independent publishers and photography agencies
- Professionals who have grown up with WordPress and want a real alternative

Agents must assume that the audience:

- Has low to medium technical knowledge.
- Seeks clarity, honesty and concrete solutions — not marketing promises.
- Values proximity, proven experience and ethics above price.

---

## Editorial principles

### 1. Show, don't tell

All content must demonstrate expertise and judgement through concrete decisions. Never claim "we are the best" — let the content prove it.

### 2. Client-oriented

Every text must implicitly answer:

- What specific problem of the client does this solve?
- Why this solution and not another?
- What concrete result does the client get?

### 3. Depth over volume

Prioritise:

- Real analysis and context
- Examples from our own projects
- Argued technical decisions

Avoid:

- Generic content reusable by any digital services company
- Repetition without value
- Feature lists without context

### 4. Language and tone

- **Primary language:** Catalan
- **Secondary language:** English
- **Spanish:** explicitly discarded as a site language
- Tone: direct, close, opinionated — expert without condescension
- No corporate jargon: no "ecosystem", "synergies" or "end-to-end solutions"

### 5. Non-negotiable technological ethics

Agents **MUST NEVER**:

- Recommend or positively mention the Spanish **Kit Digital** programme
- Suggest **Google Analytics**, Google Fonts, Google Maps, reCAPTCHA or Tag Manager
- Suggest **Meta Pixel** or any Meta script
- Recommend **WordPress** as a destination — only as a migration origin
- Mention **infrastructure costs** (€0/month, free, etc.) in sales-oriented texts
- Add unaudited third-party JS dependencies to the frontend

### 6. Security and privacy by design

Agents must:

- Apply GDPR by design, not as an afterthought
- Prioritise passwordless authentication where possible
- Always recommend HTTPS, security headers and adequate CSP
- Choose privacy-respecting analytics (GoatCounter, Umami, Plausible) over invasive solutions

### 7. Accessibility as a standard

All generated code and content must comply with:

- **WCAG 2.1 AA** as a minimum
- Descriptive `alt` on all images
- Valid W3C HTML5 semantics
- Minimum contrast ratio 4.5:1 for body text
- Support for `prefers-reduced-motion`
- Skip links and correct ARIA

---

## Required behaviours

- Read `CLAUDE.md` before taking any action on the project
- Base all technical decisions on the defined stack (Hugo, Cloudflare Workers, D1, etc.)
- Follow naming conventions: lowercase, hyphens, no accents in filenames
- Create new content always in both Catalan and English
- Use `image:` frontmatter for projects with screenshots — never inline if already in the hero
- Commit messages in Catalan, lowercase, present imperative

---

## Prohibited behaviours

Agents **MUST NOT**:

- Generate generic content applicable to any digital services company
- Speculate about technologies or prices not documented in the project
- Introduce unaudited external dependencies
- Create unsolicited documentation files (README, etc.)
- Add error handling, fallbacks or validation for impossible scenarios
- Refactor code unrelated to the assigned task
- Push to `main` without testing first

---

## Recommended structure for project texts

Each portfolio project must answer:

1. **Who is the client and what problem did they have** (real context, no generics)
2. **What solution was chosen and why** (technical and strategic rationale)
3. **What technical capabilities were deployed** (backend, frontend, integrations)
4. **What concrete result the client gets** (no mention of costs)
5. **Technology** (concise list at the end)

---

## Use of AI

AI-based agents must:

- Act as technical collaborators, not substitutes for Joan Linux's own judgement
- Verify consistency, accuracy and usefulness before proposing changes
- Add real value in every intervention — no unsolicited cosmetic changes
- Preserve the voice and tone of the project in all generated content

Content must read as written by a technical professional with years of experience and their own point of view — not by an AI.

---

## Tone and style

- Reflective and direct
- Grounded in experience and personal judgement
- No ornamentation, no corporate formulas
- Always connect content to a real client problem
- Maintain terminological consistency across sections and languages
- Use precise technical language without off-putting jargon

---

## Quality metrics

Agents must optimise for:

- Message clarity for the potential client
- Consistency with LinuxBCN's identity and values
- Technical quality: valid HTML, accessibility, performance
- Factual accuracy: nothing that is not documented or verifiable

---

## Continuous improvement

All content must:

- Be updatable as the project evolves
- Reflect the real current state of the project, not future promises
- Integrate into the overall narrative of the portfolio

---

## Final rule

If a piece of content does not help the potential client understand why they need LinuxBCN for their web or digital presence project, **it should not be published**.

---

*Last updated: 2026-04-18*
*Maintainer: Joan Martínez Serres — joan@linuxbcn.com*
