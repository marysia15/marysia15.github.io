# Architecture

## Scope
Static GitHub Pages site for Marysia 1.5% PIT campaign. No backend, no build pipeline.

## Current implementation status (as of 2026-02-28)

### 1) Website runtime
- Hosting model: static files served from `docs/` via GitHub Pages.
- Main published content is in `docs/`.
- `docs/index.html` is the canonical single-page landing (all sections on one page).
- Root `index.html` currently redirects to `./docs/` — **should be removed** once GitHub Pages source is set to `/docs` folder (see deployment note below).

### 2) Homepage (`docs/index.html`) — full single-page landing
Polish mobile-first landing page redesigned with a warm, credible aesthetic. All sections live on one page:

- **Navigation** (`<nav class="site-nav">`): Sticky top bar with brand text and anchor links (Dane do PIT, Jak przekazać, O Marysi, FAQ). Desktop-only nav links; brand always visible.
- **Hero** (`#` / `.hero`): Two-column layout (photo + content) on desktop, stacked on mobile. H1, intro paragraph (mama's voice), trust line ("To nic nie kosztuje"), primary CTA scrolling to donation card.
- **Donation Card** (`#dane-do-pit` / `.pit-data`): Prominent card with coral border. KRS and cel szczegółowy with copy buttons. Trust badge ("100% wpłat trafia na subkonto"), filing window date, link to foundation subaccount.
- **How-to Steps** (`#jak-przekazac` / `.how-to`): Three numbered steps (e-PIT login, KRS entry, cel szczegółowy entry) with inline copy buttons. Filing deadline badge. Alternative methods note.
- **Story** (`#historia` / `.story`): Two-column grid (text + photos). Placeholder copy marked with `<!-- REPLACE -->` comments. Two photo placeholders.
- **FAQ** (`#faq` / `.faq`): Seven `<details>` accordion items covering common Polish donor questions. Placeholder for JSON-LD FAQPage structured data (task 009).
- **Bank Transfer** (`#przelew` / `.bank`): PLN account placeholder with copy button. Placeholder for IBAN/SWIFT for foreign transfers.
- **Updates** (`#aktualnosci` / `.updates`): Placeholder for curated Facebook post links. No embedded widgets.
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
- `hero.jpg` — hero photo placeholder (provided by user)
- `story-1.jpg` — story section photo placeholder (solid color)
- `story-2.jpg` — story section photo placeholder (solid color)
- `og-image.jpg` — Open Graph image placeholder (solid color, 1200x630)

### 6) SEO infrastructure
- `docs/robots.txt` exists and references sitemap.
- `docs/sitemap.xml` exists and includes homepage URL.
- JSON-LD structured data: not yet added (tasks 009, 015).

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
- Completed tasks: 001–004 (Phase 0), 005–014 (Phase 1 core — see roadmap.md).

## Deployment note
GitHub Pages should be configured to serve from the `/docs` folder on the `main` branch. This eliminates the `/docs` URL slug and makes `marysia15.github.io` serve `docs/index.html` directly. Once configured, the root `index.html` redirect file can be deleted.

## Not implemented yet (from roadmap)
- JSON-LD structured data: `FAQPage` (task 009) and `WebSite` (task 015)
- Real photos replacing placeholders (hero, story, OG image)
- Real content replacing `<!-- REPLACE -->` placeholders (bank account, Facebook URLs, story text verification)
- Secondary pages: `/jak-przekazac-15`, `/dla-ksiegowych`, `/en`
- Accountant asset pack (PDF, social images)
- Full-section E2E test coverage beyond smoke tests
- Accessibility audit and performance optimization
