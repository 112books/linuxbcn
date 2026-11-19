---
title: "Estenop — Pinhole calculator"
seo_title: "Estenop: pinhole exposure calculator | LinuxBCN"
slug: "app-estenop"
weight: 3
year: 2026
date: 2026-04-25
client: "LinuxBCN"
sector: "photography"
description: "Estenop — pinhole exposure calculator: exposure calculation and reciprocity correction for over 20 emulsions. Still in development."
lastmod: "2026-06-24"
draft: false
serveis: ["aplicacio-web", "cas-propi"]
image: "estenop.png"
---

## The physics, solved on your phone

A pinhole camera has no lens. Just a hole. And that hole dictates everything: the light that enters, the time required, the light captured on film.

The problem is that pinhole physics leaves no room for calculation errors. An effective aperture of f/128 or f/180, combined with the reciprocity characteristics of each emulsion, produces numbers that are hard to work out in your head. Until now.

**Estenop V2** turns your phone into the light meter you needed: it reads ambient light directly from the camera, you select your aperture and film stock, and it gives you the corrected exposure time —reciprocity included— in seconds.

No charts and no calculator.

(V2 fixes a critical bug in the exposure formula and adds EV detection via frame noise analysis, making it work on all browsers including Safari on iOS.)

Try the current version: [estenop.linuxbcn.com](https://estenop.linuxbcn.com/)

## Current status: not yet 100 %

Estenop calculates and runs, but it is **not fully functional** and we do not consider it finished.

The limit is technical and it matters: it is a **web application**, not a native app, and the browser **does not give access to all the information from the phone's camera**. Without that data, the light measurement cannot be reliable on every device and in every condition.

That is why we have decided to **rethink the program from scratch** instead of patching it. When there is a version we can recommend without caveats, we will say so here. In the meantime, what is online is a working version that can guide you — but not one to trust with a photograph you cannot repeat.

---

## How it works

1. **Point your phone camera** at the scene you want to photograph
2. **Select your aperture** (f/64, f/128, f/180…)
3. **Choose your film** — HP5, T-Max, FP4, Pan F, Fomapan and over 20 emulsions with their real reciprocity curves
4. **The time appears on screen** — and the built-in timer counts down until you can close the shutter

Everything stays on your device. No internet connection required. No accounts. No data leaving your phone.

---

## Versions

**Free version**
Includes full exposure calculation, reciprocity correction for the most popular emulsions, and the built-in timer. Enough for most situations.

**Pro version — €10 (VAT included), one-time payment**
For those who want more: spot metering mode, personal camera and aperture library, exposure history, and priority access to new emulsions. No subscription. No renewals. Once, forever.

It's handcrafted software. If it's useful to you, Pro is the way to say so — and to make sure it keeps growing.

→ [estenop.linuxbcn.com](https://estenop.linuxbcn.com/)
