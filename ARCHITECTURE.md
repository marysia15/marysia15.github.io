# Architecture

## Scope
Static GitHub Pages site for Marysia 1.5% PIT campaign. No backend, no build pipeline.

## Current implementation status (as of 2026-03-02)

### 1) Website runtime
- Hosting model: static files served from `docs/` via GitHub Pages.
- Main published content is in `docs/`.
- `docs/index.html` is the canonical single-page landing (all sections on one page).
- Root `index.html` currently redirects to `./docs/` — **should be removed** once GitHub Pages source is set to `/docs` folder (see deployment note below).

### 2) Homepage (`docs/index.html`) — full single-page landing
Polish mobile-first landing page redesigned with a warm, credible aesthetic. All sections live on one page:

- **Navigation** (`<nav class="site-nav">`): Sticky top bar with brand text and anchor links (Dane do PIT, Jak przekazać, O Marysi, FAQ). Desktop-only nav links; brand always visible.
- **Hero** (`#` / `.hero`): Full-bleed `szpital-operacja.jpg` banner (4:3 mobile, 21:9 cinematic desktop) with gradient fade into content. H1, intro paragraph (mama's voice), trust line ("To nic nie kosztuje"), primary CTA scrolling to donation card. Text centered below photo.
- **Donation Card** (`#dane-do-pit` / `.pit-data`): Prominent card with coral border. KRS and cel szczegółowy with copy buttons. Trust badge ("100% wpłat trafia na subkonto"), filing window date, link to foundation subaccount.
- **How-to Steps** (`#jak-przekazac` / `.how-to`): Three numbered steps (e-PIT login, KRS entry, cel szczegółowy entry) with inline copy buttons. Filing deadline badge. Alternative methods note.
- **Story** (`#historia` / `.story`): Flowing single-column layout with photos interleaved between paragraphs. Real story text in Adrianna's (mama) voice — 5 paragraphs covering premature birth, personality, rehabilitation, fund usage, and personal sign-off. Photos: `terapia.jpg` and `hero2.jpg`.
- **Photo Gallery** (`#galeria` / `.gallery`): Chronological 12-photo gallery titled "Marysia na przekór diagnozom". Responsive grid (2-col mobile, 3-col desktop). Each photo has a figcaption. Uses 12 of 16 available photos covering Marysia's journey from NICU to present day.
- **FAQ** (`#faq` / `.faq`): Seven `<details>` accordion items covering common Polish donor questions. FAQPage JSON-LD structured data included in `<head>`.
- **Bank Transfer** (`#przelew` / `.bank`): PLN account (PL31 1090 2835...) with copy button. Transfer title with copy button.
- **Updates** (`#aktualnosci` / `.updates`): Links to Facebook page "Marysia na przekór diagnozom". No embedded widgets.
- **Footer** (`.site-footer`): Foundation name, KRS repeat, OPP status, footer navigation links, copyright.
- **Sticky Mobile CTA** (`.sticky-cta`): Fixed bottom bar on mobile (<640px) with "Kopiuj KRS" button. Hides via IntersectionObserver when donation card is visible.

Canonical donation data shown:
  - KRS: `0000382243`
  - Cel szczegółowy: `1884 pomoc dla Marysi Wywiał`

SEO metadata:
  - `<title>`, `<meta name="description">`, canonical URL
  - Open Graph tags with local OG image placeholder
  - `og:locale` = `pl_PL`

### 3) Design system (`docs/css/style.css`)
CSS custom properties define a consistent design system:
- **Color palette:** Warm coral primary (`--accent: #c8513b`), sage green trust (`--trust: #1b7a4a`), warm off-white backgrounds (`--bg: #fffaf7`)
- **Typography:** System font stack, multiple size presets, 800-weight headings
- **Components:** Buttons (primary coral, secondary outline, pill-shaped), copy buttons with "copied" state, donation cards, FAQ accordion, step numbers
- **Layout:** `--container-max: 720px`, mobile-first with `@media (width >= 640px)` breakpoint
- **Effects:** Backdrop blur on nav/sticky CTA, box shadows, smooth transitions

### 4) Client-side JavaScript (`docs/js/copy.js`)
- Copy-to-clipboard via `navigator.clipboard.writeText()` with "Skopiowano!" visual feedback
- Sticky CTA visibility toggle via IntersectionObserver (hides when donation card is in viewport)

### 5) Static assets (`docs/assets/`)
16 authentic photos of Marysia, 15 used across the site:
- `szpital-operacja.jpg` — full-bleed hero banner (hospital, blue eyes)
- `hero1.jpg` — OG social sharing image + gallery
- `hero2.jpg`, `terapia.jpg` — story section (interleaved with text)
- 11 more in gallery: `wczesniak2.jpg`, `wczesniak.jpg`, `usmiech-mala.jpg`, `christmas.jpg`, `mala_mis.jpg`, `gra_na_pianinie.jpg`, `terapia2.jpg`, `zabawa.jpg`, `uczy_sie.jpg`, `ksiezniczka.jpg`, `wozek_smieje_sie.jpg`
- `wozek.jpg` — available but not currently used

### 6) SEO infrastructure
- `docs/robots.txt` exists and references sitemap.
- `docs/sitemap.xml` exists and includes homepage URL.
- JSON-LD structured data: `WebSite` and `FAQPage` schemas included in `<head>`.

### 7) Tooling and quality gates
- Node tooling configured via `package.json`.
- Formatting: Prettier (`npm run format:check`) — all files pass.
- Linting: ESLint + Stylelint + html-validate (`npm run lint`) — all files pass.
- Config files: `.prettierrc.json`, `.prettierignore`, `eslint.config.js`, `.stylelintrc.json`, `.htmlvalidate.json`

### 8) E2E tests
- Playwright configured in `playwright.config.js`.
- Smoke tests in `tests/e2e/smoke.spec.js` cover:
  - Root response behavior (redirect shell)
  - Homepage load, title, H1
  - Key CTA and copy controls presence
  - Hero CTA scrolls to PIT data card
  - No runtime console/page errors
- All 5 tests passing.

### 9) Task/contracts workflow
- Task contracts stored in `tasks/`.
- Completed tasks: 001–004 (Phase 0), 005–015 (Phase 1 complete — see roadmap.md).

## Deployment note
GitHub Pages should be configured to serve from the `/docs` folder on the `main` branch. This eliminates the `/docs` URL slug and makes `marysia15.github.io` serve `docs/index.html` directly. Once configured, the root `index.html` redirect file can be deleted.

## Not implemented yet (from roadmap)
- Dedicated OG image (currently uses hero1.jpg; ideally a 1200×630 image with text overlay)
- Secondary pages: `/jak-przekazac-15`, `/dla-ksiegowych`, `/en`
- Accountant asset pack (PDF, social images)
- Full-section E2E test coverage beyond smoke tests
- Accessibility audit and performance optimization
