---
title: "Cuida — Family care coordination app"
description: "Free, open-source web app for families caring for a sick relative at home. Medical contacts, medication, emergency protocols and caregiver schedules, one tap away."
lastmod: "2026-06-24"
slug: "cuida"
weight: 1
year: 2026
client: "LinuxBCN"
draft: false
image: "cures-01.png"
aliases:
  - /cuida/
---

**Cuida** is a free, open-source web app built for families caring for a sick relative at home. It brings together everything you need to know: medical contacts, medication, emergency protocols and caregiver schedules — accessible from everyone's phone.

It grew from a real need: coordinating a family of ten people around a grandfather with cardiorespiratory failure, continuous oxygen and morphine, supported by a palliative home care team (PADES). When you arrive at the emergency room at three in the morning, you can't be searching for the GP's name or which morphine dose he takes. Cuida has it all, one tap away.

---

## What it does

- **Organised contacts** — Doctors, carers, providers and family, each with their role. Direct call button. FaceTime for Apple devices.
- **Emergency protocols** — Clear steps for each situation: breakthrough pain, dyspnoea, serious emergency. Red button that calls 112 directly.
- **Full medication list** — Every medication with dose, schedule, route and notes. Designed to be read quickly, in any lighting.
- **Caregiver schedules** — Who's there and when. When no one is there, the patient is alone: you need to know that.
- **Shared data** — Any family member who opens the app sees up-to-date information. A change to the doctor's phone number reaches everyone.
- **Installable as an app** — PWA: it can be added to the phone's home screen and works offline.

---

## Who it's for

Any family coordinating care for a sick relative at home: elderly people, chronic patients, people in palliative care, long convalescence. Especially useful when there are:

- Multiple carers (professional and family)
- Complex medication
- Specific medical protocols (palliative home care, teleassistance, oxygen)
- Dispersed family members who need the same up-to-date information

---

## How it works

Cuida is a **progressive web app (PWA)**: it runs in the browser, installs on the phone and requires no app store. Data is stored in the cloud via GitHub and Cloudflare, completely free of charge, and any family member sees it updated on the next reload.

A designated family member can edit everything from the app, with a password. Everyone else can only view.

---

## Open source, free to adapt

Cuida is **open source** (MIT licence). You can download the blank template, adapt it to your situation and deploy it in minutes. No subscriptions, no advertising, no tracking.

→ **Public repository:** [github.com/112books/cuida](https://github.com/112books/cuida)

If you'd like help setting it up for your family, [contact LinuxBCN](/en/contacte/). We're happy to help.

---

{{< gallery "cures-01.png" "cures-02.png" >}}

---

## What's new in Beta 2 (May 2026)

Since Beta 1, the app has grown with three new features built around the real day-to-day needs of caring for Joan:

### Daily care journal

Any family member (or the patient themselves) can write a short note about the day directly from the app. Each entry includes a visual status (**Good / Watch / Urgent**), free text, and optionally the day's vital signs: blood pressure, oxygen saturation and weight.

Notes are stored in a shared space — anyone can read them at any time, and they serve as a record for medical appointments. The app keeps the last 90 days of entries. If someone opens the app and there's no entry for today, the home screen will prompt for one.

### Medication reminders (push notifications)

The app can now send a phone notification when it's time to take medication: at 8:00 am, 1:30 pm and 9:00 pm. The notification arrives even when the screen is off and the app is closed.

Each family member subscribes from the home screen: they type their name and tap "Activate". From that point on, they receive reminders on their phone.

The system works entirely without external services like Firebase or Twilio. It uses the Web Push standard (W3C) with its own VAPID keys and a GitHub Actions cron job to trigger notifications at the exact right time.

### "I'm alone" mode

Designed specifically for Joan, who is lucid but can be at home alone for hours. When the mode is activated, a timer appears (1 to 4 hours) alongside a large green button: **"I'm OK ✓"**.

If Joan (or a carer) doesn't press the button before the timer runs out, the app automatically alerts all family members who have notifications enabled. The alert arrives as a high-priority push notification with a long vibration, and stays visible until someone dismisses it.

The system checks the status every 15 minutes via GitHub Actions. It doesn't depend on any device being on or connected.

### Technical and security improvements

- **Security audit** — The app went through a full security audit across 5 parallel dimensions: authentication, sensitive data handling, HTTP headers, CORS and access control.
- **Self-hosted fonts** — IBM Plex Mono is bundled with the project. No requests to Google Fonts, no external tracking.
- **Constant-time password comparison** — resistance to timing attacks.
- **Optimised for printing** — The contacts and medication pages can be printed in a readable format to keep at home on paper.
- **PWA icon** — A colourised photo of a young Joan Martínez, as the installed app icon.

---

## The architecture in one sentence

A vanilla HTML/CSS/JS PWA deployed on Cloudflare Pages, storing data in your own private GitHub repository via API — no database, no server of your own, with push notifications that work without Firebase or any paid service.

---

## Planned features

- **Vital signs tracking** — charts of blood pressure, oxygen saturation and weight over time
- **Weekly report** — exportable summary to bring to the doctor
- **Family SOS button** — one tap to alert family members in order of priority
- **WhatsApp reminders** — integration with the official Meta API (under evaluation)

---

*MIT Licence · 2026*
