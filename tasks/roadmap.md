# Roadmap — Marysia 1.5% PIT Website

This roadmap breaks the PRD into ordered, small tasks. Each task maps to one PR.
Tasks are grouped into phases. Within a phase, tasks can often run in parallel.

**Canonical donation data (reference for all tasks):**
- KRS: `0000382243`
- Cel szczegółowy: `1884 pomoc dla Marysi Wywiał`
- Foundation page: http://kawalek-nieba.pl/marysia-wywial/

---

## Phase 0 — Foundation (must be sequential)

### 001 — Scaffold homepage with donation block and SEO metadata
- **File:** `tasks/001-scaffold-homepage.md`
- **Scope:** Create `docs/index.html`, `docs/css/style.css`, `docs/js/copy.js`
- **Delivers:** A working homepage with H1, donation data block with copy buttons, SEO `<head>`, mobile-first layout, primary + secondary CTA
- **Depends on:** nothing
- **Acceptance:** Page loads on localhost, copy buttons work, HTML is valid, Lighthouse mobile ≥ 90

### 002 — Add robots.txt and sitemap.xml
- **Scope:** Create `docs/robots.txt` and `docs/sitemap.xml`
- **Delivers:** Basic SEO infrastructure pointing to canonical URL `https://marysia15.github.io/`
- **Depends on:** 001 (need to know the canonical URL structure)
- **Acceptance:** Both files are valid and reference the correct URLs

### 003 — Set up dev tooling (npm scripts, Prettier, ESLint, Stylelint)
- **Scope:** Initialize `package.json`, add Prettier + ESLint + Stylelint configs, create npm scripts: `format:check`, `lint`
- **Delivers:** Consistent code formatting and linting for all future tasks
- **Depends on:** 001 (need files to lint)
- **Acceptance:** `npm run format:check` and `npm run lint` pass on existing files

### 004 — Set up Playwright and smoke tests
- **Scope:** Install Playwright, create `tests/e2e/smoke.spec.js` with homepage smoke tests
- **Delivers:** Automated UI test suite: page loads, title correct, H1 present, no console errors, copy buttons exist
- **Depends on:** 001, 003
- **Acceptance:** `npm run test:e2e` passes

---

## Phase 1 — Core pages (can run in parallel after Phase 0)

### 005 — Add shared navigation and footer
- **Scope:** Add `<nav>` to `docs/index.html` with links to all planned pages; add `<footer>` with foundation link and copyright
- **Delivers:** Consistent site-wide navigation (will link to pages as they're created)
- **Depends on:** 001
- **Acceptance:** Nav renders on mobile (hamburger or stacked), links are present, no console errors

### 006 — Create /jak-przekazac-15 page (how to give 1.5%)
- **Scope:** Create `docs/jak-przekazac-15/index.html` with step-by-step Twój e-PIT instructions
- **Delivers:** Clear numbered steps consistent with official guidance, filing window dates, reminder about cel szczegółowy
- **Depends on:** 005 (shared nav/footer)
- **Acceptance:** Page loads, steps are readable on mobile, nav works, no console errors

### 007 — Create /historia page (Marysia's story)
- **Scope:** Create `docs/historia/index.html` with structured story content
- **Delivers:** Longer narrative about Marysia, warm tone, photo placeholders with alt text
- **Depends on:** 005 (shared nav/footer)
- **Acceptance:** Page loads, headings are semantic, images have alt text

### 008 — Create /faq page
- **Scope:** Create `docs/faq/index.html` with FAQ content in Polish
- **Delivers:** Frequently asked questions with JSON-LD `FAQPage` structured data
- **Depends on:** 005 (shared nav/footer)
- **Acceptance:** Page loads, JSON-LD is valid, questions/answers are accurate

### 009 — Create /dla-ksiegowych page (accountant pack)
- **Scope:** Create `docs/dla-ksiegowych/index.html` with download links and copy-paste email/post templates
- **Delivers:** Accountant-friendly page with PDF placeholder, image placeholders, email template copy block
- **Depends on:** 005 (shared nav/footer)
- **Acceptance:** Page loads, copy blocks work, download links point to correct paths

---

## Phase 2 — SEO, structured data, and polish (can run in parallel)

### 010 — Add JSON-LD structured data (WebSite + FAQPage)
- **Scope:** Add `WebSite` JSON-LD to homepage, ensure `FAQPage` JSON-LD on /faq
- **Delivers:** Rich search result eligibility
- **Depends on:** 001, 008
- **Acceptance:** JSON-LD validates with Google Rich Results Test

### 011 — Create OG image and add to all pages
- **Scope:** Create a shareable OG image (`docs/assets/og-image.jpg`), update all pages' OG meta tags
- **Delivers:** Clean link previews on Facebook/Instagram/WhatsApp
- **Depends on:** 006, 007, 008, 009 (all pages exist)
- **Acceptance:** OG image loads, preview looks correct in Facebook Sharing Debugger

### 012 — Update sitemap.xml with all pages
- **Scope:** Update `docs/sitemap.xml` to include all created pages
- **Depends on:** 006, 007, 008, 009
- **Acceptance:** sitemap.xml lists all pages with correct URLs

### 013 — Create accountant assets (PDF + social images)
- **Scope:** Create `docs/assets/pack/ksiegowi.pdf`, `docs/assets/pack/post-square.png`, `docs/assets/pack/story-vertical.png` (or placeholders)
- **Delivers:** Downloadable assets for accountants
- **Depends on:** 009
- **Acceptance:** Files exist and are linked correctly from /dla-ksiegowych

---

## Phase 3 — Testing, accessibility, and performance

### 014 — Add Playwright tests for all pages
- **Scope:** Create test files for each page: navigation, content presence, copy buttons, download links
- **Delivers:** Full E2E test coverage
- **Depends on:** 004, 006, 007, 008, 009
- **Acceptance:** `npm run test:e2e` passes for all pages

### 015 — Accessibility audit and fixes
- **Scope:** Run axe-core or Lighthouse accessibility audit, fix any issues (focus states, contrast, alt text, ARIA)
- **Delivers:** Accessible site meeting WCAG 2.1 AA basics
- **Depends on:** all pages created
- **Acceptance:** Lighthouse Accessibility ≥ 90

### 016 — Performance optimization
- **Scope:** Optimize images (WebP), minify CSS if needed, check Lighthouse Performance
- **Delivers:** Fast-loading site on mobile
- **Depends on:** all pages created
- **Acceptance:** Lighthouse Performance ≥ 90 on mobile

---

## Phase 4 — English and extras (lower priority)

### 017 — Create /en page (minimal English info)
- **Scope:** Create `docs/en/index.html` with basic English summary of the donation flow
- **Delivers:** English-language entry point for non-Polish speakers
- **Depends on:** 005
- **Acceptance:** Page loads, content is in English, nav works

### 018 — Add UTM parameter templates for share links
- **Scope:** Document UTM link templates in a markdown file or add them as data attributes on share buttons
- **Delivers:** Trackable links for Facebook, Instagram, email sharing
- **Depends on:** 001
- **Acceptance:** UTM parameters are documented and consistent

---

## Task dependency graph (summary)

```
001 ──┬── 002
      ├── 003 ── 004
      ├── 005 ──┬── 006 ──┐
      │         ├── 007 ──┤
      │         ├── 008 ──┼── 010, 011, 012, 014, 015, 016
      │         ├── 009 ──┼── 013
      │         └── 017   │
      └── 018              │
```

---

## Execution notes

- **Codex starts with:** `tasks/001-scaffold-homepage.md`
- **Parallel tracks after Phase 0:** Pages 006–009 can be built in parallel by separate Codex agents
- **Each task = one PR** — keep diffs small and reviewable
- **Claude Code reviews** each PR for tone, accuracy, and SEO compliance before merge
