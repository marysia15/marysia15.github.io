# Roadmap — Marysia 1.5% PIT Website

This roadmap breaks the PRD into ordered, small tasks. Each task maps to one PR.
Tasks are grouped into phases. Within a phase, tasks can often run in parallel.

**Canonical donation data (reference for all tasks):**
- KRS: `0000382243`
- Cel szczegółowy: `1884 pomoc dla Marysi Wywiał`
- Foundation page: http://kawalek-nieba.pl/marysia-wywial/

---

## Phase 0 — Foundation (must be sequential) ✅ COMPLETE

### 001 — Scaffold homepage with donation block and SEO metadata ✅
- **File:** `tasks/001-scaffold-homepage.md`
- **Scope:** Create `docs/index.html`, `docs/css/style.css`, `docs/js/copy.js`
- **Delivers:** A working homepage with H1, donation data block with copy buttons, SEO `<head>`, mobile-first layout, primary + secondary CTA
- **Depends on:** nothing
- **Acceptance:** Page loads on localhost, copy buttons work, HTML is valid, Lighthouse mobile ≥ 90

### 002 — Add robots.txt and sitemap.xml ✅
- **Scope:** Create `docs/robots.txt` and `docs/sitemap.xml`
- **Delivers:** Basic SEO infrastructure pointing to canonical URL `https://marysia15.github.io/`
- **Depends on:** 001 (need to know the canonical URL structure)
- **Acceptance:** Both files are valid and reference the correct URLs

### 003 — Set up dev tooling (npm scripts, Prettier, ESLint, Stylelint) ✅
- **Scope:** Initialize `package.json`, add Prettier + ESLint + Stylelint configs, create npm scripts: `format:check`, `lint`
- **Delivers:** Consistent code formatting and linting for all future tasks
- **Depends on:** 001 (need files to lint)
- **Acceptance:** `npm run format:check` and `npm run lint` pass on existing files

### 004 — Set up Playwright and smoke tests ✅
- **Scope:** Install Playwright, create `tests/e2e/smoke.spec.js` with homepage smoke tests
- **Delivers:** Automated UI test suite: page loads, title correct, H1 present, no console errors, copy buttons exist
- **Depends on:** 001, 003
- **Acceptance:** `npm run test:e2e` passes

---

## Phase 1 — Excellent landing page (single-page site, all sections on `/`) 🔄 IN PROGRESS

**Design philosophy:** This is a one-page donation site. Most visitors arrive from a Facebook link on their phone. They need to copy the KRS and cel szczegółowy in under 30 seconds — or read more to build trust. Every section must earn its place by either converting or building confidence. No separate pages until Phase 2; everything lives on the single landing page.

**Visual tone:** Warm, calm, credible. "Mama do ludzi" — a parent speaking honestly. No corporate design, no aggressive colors. Generous whitespace, readable typography, authentic photos.

### 005 — Hero section with photo and "it costs you nothing" message ✅
- **Scope:** Redesign the hero section of `docs/index.html`
- **Delivers:**
  - Hero photo placeholder (`docs/assets/hero.jpg`, 800×600, shows Marysia smiling / engaged in activity — **placeholder image with descriptive alt text until real photo is provided**)
  - Warm H1: "Przekaż 1,5% podatku dla Marysi" (keep existing)
  - 2–3 sentence intro from Adrianna (mama voice, already exists — refine)
  - Prominent "To nic nie kosztuje" trust line below the intro — the single most effective conversion argument in Polish 1.5% campaigns
  - Primary CTA button scrolling to the PIT data card (`#dane-do-pit`)
- **Photo guidance (for real photos later):** Authentic, warm, showing the child's personality — not a medical/hospital photo. Natural lighting, vertical or square format for mobile. Max 150 KB optimized.
- **Depends on:** 001
- **Acceptance:** Hero renders on mobile with placeholder image, alt text present, CTA scrolls to donation card, no console errors

### 006 — Sticky mobile CTA bar ✅
- **Scope:** Add a fixed-position bar at the bottom of the viewport on mobile (<640px)
- **Delivers:**
  - Compact bar with "Kopiuj KRS" button always visible while scrolling
  - Disappears when the PIT data card is already in viewport (optional: IntersectionObserver)
  - Accessible: doesn't obscure page content, has visible focus state
- **Design reference:** Common pattern on Polish donation pages (Cancer Fighters, Zobacz Mnie)
- **Depends on:** 005
- **Acceptance:** Bar appears on mobile, copies KRS on tap, feedback shown, bar hides near donation card

### 007 — "Jak przekazać 1,5%" how-to section (on-page) ✅
- **Scope:** Add an inline section to `docs/index.html` below the donation card
- **Delivers:**
  - Section heading: "Jak przekazać 1,5% — 3 proste kroki"
  - Three numbered steps with icon placeholders (numbered circles or simple SVG icons):
    1. Wejdź na **Twój e-PIT** (link to podatki.gov.pl login)
    2. Wpisz **KRS 0000382243** (with inline copy button)
    3. Wpisz **cel szczegółowy: 1884 pomoc dla Marysi Wywiał** (with inline copy button)
  - Filing window badge: "Rozlicz do 30 kwietnia 2026"
  - Alternative mention: "Możesz też przekazać 1,5% przez PITax.pl lub formularz papierowy"
  - Anchor: `#jak-przekazac`
- **Content accuracy:** Steps must align with official podatki.gov.pl guidance. Do not invent UI screenshots.
- **Depends on:** 005
- **Acceptance:** Section renders, copy buttons work, link to Twój e-PIT correct, steps are accurate

### 008 — Marysia's story section (on-page) ✅
- **Scope:** Add a story section to `docs/index.html`
- **Delivers:**
  - Section heading: "Historia Marysi" or "O Marysi"
  - 3–5 short paragraphs, written in parent's voice (Adrianna):
    - Who Marysia is (age, personality, what she loves)
    - What she faces daily (medical needs, described respectfully — no invented details)
    - What the funds cover (therapy, rehabilitation, equipment — be specific where possible)
    - What has changed thanks to previous support (if applicable)
  - 2–3 photo placeholders with meaningful Polish alt text:
    - `docs/assets/story-1.jpg` — placeholder for daily life / therapy photo
    - `docs/assets/story-2.jpg` — placeholder for progress / activity photo
  - Anchor: `#historia`
- **Content guardrails:** Do not invent medical details, dates, or numbers not provided in `story.md` or by the user. Use placeholder copy marked `<!-- REPLACE: ... -->` for facts to be verified.
- **Depends on:** 005
- **Acceptance:** Section renders, images have alt text, no invented medical facts, semantic headings

### 009 — FAQ section with JSON-LD (on-page) ✅ (FAQ section done; JSON-LD pending)
- **Scope:** Add an FAQ accordion/section to `docs/index.html`
- **Delivers:**
  - Section heading: "Najczęściej zadawane pytania"
  - 5–7 questions addressing Polish donor concerns (based on top-performing 1.5% pages):
    1. "Czy przekazanie 1,5% mnie coś kosztuje?" → No, it's redirected from tax you already owe.
    2. "Kto może przekazać 1,5%?" → Any Polish taxpayer filing PIT.
    3. "Czy cała kwota trafia do Marysi?" → Yes, 100% goes to her subaccount at the foundation.
    4. "Do kiedy mogę rozliczyć PIT?" → 30 April 2026 for PIT-37/PIT-38.
    5. "Jak sprawdzić, czy mój 1,5% dotarł?" → Contact the foundation or check on the foundation page.
    6. "Co jeśli nie rozliczam się samodzielnie?" → Your accountant can wpisać KRS and cel — share this page with them.
    7. "Czy mogę też wpłacić darowiznę przelewem?" → Yes, see bank transfer section below.
  - `FAQPage` JSON-LD in `<script type="application/ld+json">`
  - Simple expand/collapse with CSS + minimal JS (no framework), or always-visible list
  - Anchor: `#faq`
- **SEO value:** FAQ structured data drives rich snippets in Google for "1.5% podatku" queries
- **Depends on:** 005
- **Acceptance:** FAQ renders, JSON-LD validates (Google Rich Results Test), answers are factually correct

### 010 — Bank transfer section (on-page) ✅ (placeholder — real account number pending)
- **Scope:** Add a secondary donation section below the FAQ
- **Delivers:**
  - Section heading: "Wpłata przelewem" or "Pomóż też przelewem"
  - Framing: "Jeśli chcesz pomóc dodatkowo, poza 1,5% podatku"
  - Polish bank account number with copy button (placeholder `<!-- REPLACE: account number -->`)
  - Foreign transfer details: IBAN, SWIFT/BIC (placeholder)
  - Anchor: `#przelew`
- **Depends on:** 005
- **Acceptance:** Section renders, copy button works, placeholder values clearly marked for replacement

### 011 — Facebook updates links section (on-page) ✅ (placeholder — real FB URLs pending)
- **Scope:** Add a curated links section pointing to Facebook posts
- **Delivers:**
  - Section heading: "Aktualności" or "Śledź postępy Marysi"
  - 3–5 curated links to Facebook posts from "Marysia na przekór diagnozom" (placeholder URLs marked `<!-- REPLACE: FB post URL -->`)
  - Each link: short description (1 line) + date
  - Note: No embedded Facebook widgets (performance + clutter per CLAUDE.md). Plain links only.
  - Anchor: `#aktualnosci`
- **Depends on:** 005
- **Acceptance:** Links section renders, no FB embeds, placeholders clearly marked

### 012 — Trust signals and enriched footer ✅
- **Scope:** Enhance trust signals throughout the page and redesign the footer
- **Delivers:**
  - Trust bar near the donation card: "100% wpłat trafia na subkonto Marysi" + OPP badge text
  - Foundation details in footer:
    - Full name: Fundacja Kawałek Nieba
    - KRS: 0000382243 (repeated — intentional, per best-practice research)
    - OPP status mention
    - Link to foundation page
    - Link to Facebook page
  - Filing deadline badge (if not already prominent enough)
  - Previous year results line (placeholder: `<!-- REPLACE: last year amount -->`)
- **Depends on:** 005
- **Acceptance:** Trust signals visible, footer has all required info, KRS repeated at least 3× on page

### 013 — Smooth-scroll navigation and section anchors ✅
- **Scope:** Add a minimal in-page navigation and stable anchors
- **Delivers:**
  - Compact nav bar (not hamburger — just 3–4 text links for a one-page site):
    - "Dane do PIT" → `#dane-do-pit`
    - "Jak przekazać" → `#jak-przekazac`
    - "Historia" → `#historia`
    - "FAQ" → `#faq`
  - Smooth scroll behavior via `scroll-behavior: smooth` (CSS) or minimal JS fallback
  - All anchors stable and documented in SITEMAP.md
- **Depends on:** 007, 008, 009 (sections must exist)
- **Acceptance:** Nav links scroll to correct sections, anchors work as direct URLs, mobile nav is usable

### 014 — OG image placeholder and social meta ✅ (placeholder — real OG image pending)
- **Scope:** Create OG image placeholder and ensure all social sharing meta is correct
- **Delivers:**
  - `docs/assets/og-image.jpg` — placeholder 1200×630 image (can be a solid color with text overlay: "Przekaż 1,5% podatku dla Marysi — KRS 0000382243")
  - **Photo guidance for real OG image:** Child's photo + KRS number + "Przekaż 1,5% podatku" text overlay. This is the image people see when sharing on Facebook/WhatsApp.
  - Verify all OG tags in `<head>` point to the correct image and URL
  - Add `og:locale` = `pl_PL`
- **Depends on:** 005
- **Acceptance:** OG image file exists, meta tags reference it correctly, Facebook Sharing Debugger shows clean preview

### 015 — JSON-LD WebSite structured data
- **Scope:** Add `WebSite` JSON-LD schema to the homepage `<head>`
- **Delivers:**
  - `WebSite` schema with name, URL, and description
  - Complements the `FAQPage` JSON-LD from task 009
- **Depends on:** 009 (FAQPage JSON-LD already in place)
- **Acceptance:** JSON-LD validates with Google Rich Results Test

---

## Phase 2 — Secondary pages and accountant pack

### 016 — Create /jak-przekazac-15 standalone page
- **Scope:** Create `docs/jak-przekazac-15/index.html` — expanded version of the on-page how-to
- **Delivers:** Detailed step-by-step for Twój e-PIT, PITax.pl, and paper PIT form. Useful as a shareable deep link for accountants and friends.
- **Depends on:** Phase 1 complete
- **Acceptance:** Page loads, steps accurate, links back to homepage, SEO meta present

### 017 — Create /dla-ksiegowych page (accountant pack)
- **Scope:** Create `docs/dla-ksiegowych/index.html` with downloads and copy-paste templates
- **Delivers:**
  - 30-second explanation: "Gotowy pakiet do wysłania klientom"
  - PDF placeholder (`docs/assets/pack/ksiegowi.pdf`)
  - Social image placeholders (`docs/assets/pack/post-square.png`, `docs/assets/pack/story-vertical.png`)
  - Copy-paste email template for accountants to send clients
  - Copy-paste short social post template
- **Depends on:** Phase 1 complete
- **Acceptance:** Page loads, copy blocks work, download links point to correct paths

### 018 — Create accountant assets (PDF + social images)
- **Scope:** Produce final versions of `ksiegowi.pdf`, `post-square.png`, `story-vertical.png`
- **Delivers:** Print-ready PDF and social-ready images with KRS, cel, and photo
- **Depends on:** 017
- **Acceptance:** Files exist, are under 500 KB each, and linked correctly from /dla-ksiegowych

### 019 — Update sitemap.xml with all pages
- **Scope:** Update `docs/sitemap.xml` to include `/jak-przekazac-15` and `/dla-ksiegowych`
- **Depends on:** 016, 017
- **Acceptance:** sitemap.xml lists all pages with correct URLs

---

## Phase 3 — Testing, accessibility, and performance

### 020 — Expand Playwright tests for landing page sections
- **Scope:** Add E2E tests covering all Phase 1 sections: hero, how-to steps, story, FAQ accordion, bank transfer, sticky CTA, in-page navigation
- **Delivers:** Full E2E coverage of the single-page landing
- **Depends on:** 004, Phase 1 complete
- **Acceptance:** `npm run test:e2e` passes for all sections

### 021 — Add Playwright tests for secondary pages
- **Scope:** Tests for /jak-przekazac-15 and /dla-ksiegowych: navigation, content, copy buttons, download links
- **Delivers:** E2E coverage beyond the homepage
- **Depends on:** 016, 017, 020
- **Acceptance:** `npm run test:e2e` passes for all pages

### 022 — Accessibility audit and fixes
- **Scope:** Run axe-core or Lighthouse accessibility audit, fix any issues (focus states, contrast, alt text, ARIA, skip links)
- **Delivers:** Accessible site meeting WCAG 2.1 AA basics
- **Depends on:** Phase 1 + Phase 2 complete
- **Acceptance:** Lighthouse Accessibility ≥ 90

### 023 — Performance optimization (images, lazy loading)
- **Scope:** Optimize all images (WebP with JPEG fallback), add lazy loading below the fold, verify total page weight < 500 KB
- **Delivers:** Fast-loading site on mobile cellular connections
- **Depends on:** Phase 1 + Phase 2 complete
- **Acceptance:** Lighthouse Performance ≥ 90 on mobile, First Contentful Paint < 1s

---

## Phase 4 — English and extras (lower priority)

### 024 — Create /en page (minimal English info)
- **Scope:** Create `docs/en/index.html` with basic English summary of the donation flow
- **Delivers:** English-language entry point for non-Polish speakers
- **Depends on:** Phase 1 complete
- **Acceptance:** Page loads, content is in English, links work

### 025 — Add UTM parameter templates for share links
- **Scope:** Document UTM link templates and add them as data attributes on share/CTA buttons
- **Delivers:** Trackable links for Facebook, Instagram, email sharing (utm_source, utm_medium, utm_campaign=pit_2026)
- **Depends on:** Phase 1 complete
- **Acceptance:** UTM parameters are documented and consistently applied

---

## Photo checklist (for Phase 1 — replace placeholders with real photos)

All photo slots are implemented as placeholders in Phase 1. Before launch, replace with real photos:

| Slot | File path | Dimensions | Purpose | Guidance |
|------|-----------|-----------|---------|----------|
| Hero | `docs/assets/hero.jpg` | 800×600 (landscape) | Above the fold, first impression | Marysia smiling or engaged in activity. Warm, natural light. Shows personality, not diagnosis. |
| Story 1 | `docs/assets/story-1.jpg` | 600×400 | Daily life / therapy | Candid moment: therapy session, playing, learning |
| Story 2 | `docs/assets/story-2.jpg` | 600×400 | Progress / activity | Shows growth or a happy moment |
| OG image | `docs/assets/og-image.jpg` | 1200×630 | Facebook/WhatsApp link preview | Marysia's photo + "Przekaż 1,5% podatku" + KRS number overlay |

**General photo rules:**
- Authentic, not stock. Show the child, not the disease.
- Max 150 KB per image after optimization (WebP preferred, JPEG fallback).
- Meaningful Polish alt text describing the photo.
- Vertical or square crops work best for mobile hero.

---

## Task dependency graph (summary)

```
Phase 0 (done):
001 ──┬── 002
      ├── 003 ── 004
      │
Phase 1 (landing page):
      └── 005 ──┬── 006 (sticky CTA)
                ├── 007 (how-to section)
                ├── 008 (story section)
                ├── 009 (FAQ + JSON-LD)
                ├── 010 (bank transfer)
                ├── 011 (FB links)
                ├── 012 (trust + footer)
                ├── 014 (OG image)
                ├── 015 (WebSite JSON-LD)
                └── 013 (nav + anchors) ── depends on 007–009

Phase 2 (secondary pages):
  016, 017 ── 018, 019

Phase 3 (quality):
  020 ── 021 ── 022, 023

Phase 4 (extras):
  024, 025
```

---

## Execution notes

- **Phase 0 is complete.** All foundation tasks (001–004) are done.
- **Phase 1 is nearly complete.** Tasks 005–014 implemented. Remaining: 015 (WebSite JSON-LD). Some tasks have placeholder content marked `<!-- REPLACE -->` awaiting real data (bank account, FB URLs, story verification, photos).
- **Parallel tracks in Phase 1:** Tasks 005–012 can mostly run in parallel (005 first, then the rest). Task 013 (nav) depends on sections existing.
- **Each task = one PR** — keep diffs small and reviewable.
- **Placeholder policy:** Use `<!-- REPLACE: description -->` HTML comments for content that needs real data (bank account, FB post URLs, last-year amounts). This makes it easy to search and replace before launch.
- **Photo placeholders:** Use solid-color images with descriptive text until real photos are provided. Never use stock photos.
- **Claude Code reviews** each PR for tone, accuracy, SEO compliance, and mobile usability before merge.
