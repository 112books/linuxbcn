---
title: "Cuida — Family care coordination app"
description: "Free, open-source web app for families caring for a sick relative at home. Medical contacts, medication, emergency protocols and caregiver schedules, one tap away."
slug: "cuida"
weight: 1
year: 2026
client: "LinuxBCN"
draft: false
image: "cures-01.png"
aliases:
  - /en/cuida/
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

## Planned improvements

Cuida is a Beta 01. It works, it's useful and it's stable, but there are things left to explore:

- **Better calendar integration** — Natively sync caregiver shifts with the phone's calendar (Google Calendar, iCloud), with reminders and shared visibility across family members.
- **Emergency call from the app** — An emergency button that simultaneously alerts multiple family contacts, as a complement to teleassistance devices, with delivery confirmation.

---

*MIT Licence · 2026*
