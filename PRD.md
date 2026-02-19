# PRD (Product Requirements Document)
## Marysia 1.5% PIT Website — Agent-Driven Build (Claude Code + Codex + Conductor) on GitHub Pages

**Repo role:** This document lives in the repository as the single source of truth for all coding agents.  
**Agent stack:** Conductor (orchestrator) + Claude Code (architect/editor) + OpenAI Codex CLI (implementer)

---

## 1) Context and intent

We are building a simple, fast, credible website that supports a Polish tax-donation flow: **1.5% PIT (Podatek dochodowy od osób fizycznych)** for Marysia Wywiał via the foundation page and official KRS (Krajowy Rejestr Sądowy) details.
LANGUAGE OF ALL CONTENTS: POLISH!

**Canonical donation data (must be consistent everywhere):**
- Foundation page: http://kawalek-nieba.pl/marysia-wywial/
- KRS: `0000382243`
- Specific purpose (cel szczegółowy): `1884 pomoc dla Marysi Wywiał`

**Core CTA (Call To Action):** “Wpisz KRS i cel szczegółowy w rozliczeniu PIT / Twój e-PIT.”

**Timing to reflect on site (copy, not logic):**
- PIT-37 filing window: **15 Feb 2026 → 30 Apr 2026**. 
- Twój e-PIT auto-acceptance for PIT-37/PIT-38 on **30 Apr** if user does nothing (informational copy only). 
- Official “how to give 1.5%” explainer exists on podatki.gov.pl (use as reference for accurate wording).

---

## 2) Goals (what “done” means)

### G1 — One credible “source of truth” page for sharing
A website that loads instantly, works on mobile, and makes it effortless to:
- copy KRS + specific purpose,
- follow steps for Twój e-PIT,
- forward a clean link to an accountant.

### G2 — Accountant-friendly distribution (lead generation without “selling”)
A dedicated section for accountants (biura rachunkowe) with:
- concise instructions,
- a shareable image (square + vertical).

*(Agents will create placeholders and then produce final assets in later tasks.)*

### G3 — Search discoverability for high-intent queries
Rank for obvious intent phrases such as:
- “1.5% dla Marysi Wywiał”
- “KRS 0000382243 1884 pomoc dla Marysi Wywiał”
- “cel szczegółowy 1884 Marysia Wywiał”

### G4 — Agent-friendly maintenance
The repo must be structured so agents can safely iterate:
- clear task boundaries,
- reviewable PRs (Pull Requests),
- minimal dependencies.

---

## 3) Non-goals (explicitly out of scope)

- No blog system, no CMS (Content Management System), no database.
- No payment processing or donation checkout (donation page is external).
- No automation that logs into Facebook/Instagram from this repo.

---

## 4) Users and key flows

### U1 — Individual taxpayer (mobile-first)
Flow:
1) Opens site from FB/IG link
2) Sees KRS + specific purpose block immediately
3) Reads 3–6 step Twój e-PIT instructions
4) Clicks to foundation page (external)

### U2 — Accountant / accounting office (desktop)
Flow:
1) Opens /dla-ksiegowych
2) Downloads PDF + assets
3) Copy-pastes ready email to clients
4) Shares link inside client newsletter/email

### U3 — Friend/family “amplifier”
Flow:
1) Opens site
2) Shares link to their accountant or posts to social

---

## 5) Information architecture (IA — Information Architecture)


###  Pages (minimum set)
1) `/` — Landing (teaser + donation block above the fold)
2) `/historia` — Marysia’s story (longer, structured, link to sources)
3) `/jak-przekazac-15` — How to give 1.5% (step-by-step)
4) `/faq` — FAQ (plain language)
5) `/dla-ksiegowych` — Accountant pack (downloads + email template)  [recommended]
6) `en` - minimum set of info in English

---

## 6) Content requirements (what must be on the site)

### Home page (above the fold)
- One sentence: who is Marysia + who writes (Adrianna, mama).
- Ultra-clear block with:
  - `KRS 0000382243`
  - `Cel szczegółowy: 1884 pomoc dla Marysi Wywiał`
  - Copy button(s): “Kopiuj KRS”, “Kopiuj cel”
- Primary button: “Jak przekazać 1,5% w Twój e-PIT”
- Secondary button: “Przejdź do subkonta fundacji”

### /jak-przekazac-15
- Short steps consistent with official guidance (no invented UI steps).
- Mention: filing window 15 Feb → 30 Apr 2026. 
- Mention: PIT-37/PIT-38 auto-accept on 30 Apr if user does nothing (informational). 
- Remind: “cel szczegółowy” must be exactly the string above.

### /dla-ksiegowych
- 30-second explanation: “Gotowy pakiet do wysłania klientom”
- Downloads:
  - `/assets/pack/ksiegowi.pdf`
  - `/assets/pack/post-square.png`
  - `/assets/pack/story-vertical.png`
- Copy blocks (plain text):
  - email template to clients
  - short post template

### /materialy
- Everything downloadable in one place + checksums optional.

---

## 7) Visual + UX (User Experience) requirements

- Tone: human, simple, “mama do ludzi” (Adrianna voice), no corporate language.
- Layout: clean, print-friendly (for churches/offline printing later).
- Accessibility:
  - proper headings (H1/H2…)
  - alt text (alternative text) for images
  - keyboard focus visible
- Performance:
  - no heavy frameworks
  - images optimized (WebP where possible)
  - target: Lighthouse Performance ≥ 90 on mobile
- include placeholders for photos

---

## 8) Technical requirements

### Stack
- Static HTML + CSS + tiny JS (copy-to-clipboard, no frameworks).
- No build step required (preferred). If a build step is introduced, it must be deterministic and documented.
- Mobile first.

###  Hosting 
This is a **User Site**: `marysia15.github.io`.
Publish directly from the `main` branch **/(root)** (no build step in MVP).
(Agents must not introduce a heavy framework or a build pipeline unless explicitly requested.)

---

## 9) SEO (Search Engine Optimization) and metadata requirements

- Each page:
  - unique `<title>`
  - meta description
  - Open Graph (OG) tags (Facebook link preview)
  - canonical URL (once domain is known)
- Sitemap + robots.txt:
  - `/sitemap.xml`
  - `/robots.txt`
- Add JSON-LD (JavaScript Object Notation for Linked Data) Organization schema (basic) (optional).

---

## 10) Analytics (minimal)

- Use UTM (Urchin Tracking Module) parameters in share links:
  - `utm_source=facebook|instagram|email`
  - `utm_medium=social|referral`
  - `utm_campaign=pit_2026`
- Do **not** introduce cookie banners in MVP unless strictly necessary.
- If analytics is added: keep it lightweight and documented.

---

## 11) Safety / accuracy guardrails for agents

- Never invent medical details, dates of procedures, diagnoses, or numbers not provided.
- Never change canonical donation data strings.
- Always keep the exact “cel szczegółowy” string and KRS formatting.
- If a page describes Twój e-PIT flow, align wording with official sources. 

---

## 12) Agent system design (roles, responsibilities, boundaries)

### Orchestrator: Conductor
Conductor runs multiple coding agents in isolated workspaces and coordinates parallel tasks. 

**Conductor responsibilities**
- Split work into tasks in `conductor/tracks/website/plan.md`
- Enforce “one task → one PR”
- Ensure PRs are reviewable (small diffs, clear commits)
- Block merges if acceptance criteria fail

### Architect/editor: Claude Code
Claude Code reads and edits the codebase across files and supports sub-agents (specialized agents).

**Claude Code responsibilities**
- Define IA, copy structure, and content constraints
- Ensure accessibility semantics, consistent voice
- Review PRs for correctness + tone + duplication
- Produce final copy in `conductor/tracks/website/specs/copy.md`

### Implementer: OpenAI Codex CLI
Codex CLI is a local coding agent that can read/change/run code in a directory.

**Codex responsibilities**
- Implement HTML/CSS/JS per specs
- Optimize assets and ensure minimal JS
- Run local checks (link check, HTML validation if available)
