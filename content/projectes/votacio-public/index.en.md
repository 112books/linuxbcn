---
title: "Audience vote — anonymous, in-person voting for exhibitions"
seo_title: "Audience vote: on-site voting app | LinuxBCN"
slug: "votacio-public"
weight: 3
year: 2026
date: 2026-09-27
client: "9 Barris Imatge"
sector: "photography"
perfils: ["collectius"]
description: "Web app for audience voting at exhibitions and contests: one vote per work and phone, only inside the venue, no personal data and a verifiable count. Free software by LinuxBCN."
lastmod: "2026-09-27"
draft: false
serveis: ["aplicacio-web"]
---

## What it is

When an exhibition wants the audience to pick its favourite work, there are usually two options: a paper ballot box that's hard to count, or an online form where anyone can vote from home as many times as they like.

This app does what neither manages: **voting from your phone, only for people at the exhibition, one vote per work and person, with no personal data requested.**

It was built for the [9 Barris Imatge](https://9barrisimatge.org/) photography contest and is part of [Taro Photo App](/en/projectes/taro-photo-app/). In autumn 2026 it is being rehearsed for the audience vote at the December exhibition at the Casal de Barri de Prosperitat community centre in Barcelona.

---

## How the audience votes

1. Scan the QR code on the exhibition poster.
2. The phone asks for permission to know where it is. The page works out the distance to the venue and shows it.
3. Type the number printed next to the photo you want to vote for.
4. Vote. From the same phone, **one vote per work**.

No sign-up, no app to install and no passwords. In Catalan, Spanish or English, depending on the phone's language.

---

## How it was designed

Every decision answers a specific problem.

**Only people who are there can vote.** A vote is only accepted within 500 m of the venue (geofencing). The distance is worked out on the phone itself, and the server only learns whether it's inside or outside the radius: **coordinates are never stored**. If the GPS is imprecise, the page asks you to turn on precise location. If a vote is rejected, it shows the real distance. The radius has three modes: off, warning or blocking.

**One vote per work, without knowing who voted.** Each phone gets a random identifier. No name, no email, no device fingerprint. That's enough to stop someone voting for the same work ten times, and not enough to know who voted for what.

**A number instead of a drop-down.** People type the number they see printed on the wall, as with a ballot box. It's quicker than searching through a list of titles, and the server checks that the number exists.

**Results you can verify.** Each vote is stored with a cryptographic signature (HMAC-SHA256) over the work, the device and the time. An audit tool checks that no vote has been altered and that there are no duplicates. The final export is a signed CSV.

**Nobody is left out.** People without a phone can vote on paper, and the counting tool adds the digital and ballot-box votes into a single result.

**Protected against abuse.** CSRF protection on every request, rate and size limits, and a separate admin area with its own password.

**Rehearsable before the day.** A test mode allows voting again after a few minutes or without limits, so the team can rehearse. Before the exhibition, it's switched to live mode.

---

## Administration

A private panel shows the count per work in real time, lets you download the signed export and close the vote on prize-giving day, after a confirmation step. The vote also closes by itself when the configured period ends.

---

## A telling detail

During testing, **every vote was being rejected**. The venue's reference point was 5.2 km from the real location. It was fixed with coordinates checked against several mapping sources, and the procedure now requires verifying the point before every edition. That's exactly why it gets rehearsed before voting opens to the public.

---

## What it's built with

- **Python 3** with the standard library only: no `pip install`, no third-party dependencies
- **SQLite** for editions, works and votes
- Its own service on LinuxBCN's server, with HTTPS and a watchdog that restarts it automatically if it goes down
- QR codes generated with our own tool

Free software under the AGPL-3.0 licence, in Taro's repository on [GitHub (112books/9bi)](https://github.com/112books/9bi).

---

## Want it for your contest?

Exhibitions, festivals, audience awards, small-scale participatory budgets… If you need only the people who are really there to vote, without collecting anyone's data, we can set it up and host it for you. Let's talk.
