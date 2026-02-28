# Architecture

## Scope
Static GitHub Pages site for Marysia 1.5% PIT campaign. No backend, no build pipeline.

## Current implementation status (as of 2026-02-28)

### 1) Website runtime
- Hosting model: static files.
- Main published content is in `docs/`.
- `docs/index.html` is the current homepage.
- Root `index.html` redirects to `./docs/` for local root-server previews.

### 2) Homepage (`docs/index.html`)
- Polish landing page with one H1 and donation-focused hero content.
- Canonical donation data shown prominently:
  - KRS: `0000382243`
  - Cel szczegółowy: `1884 pomoc dla Marysi Wywiał`
- Copy buttons for KRS and cel szczegółowy.
- CTA links:
  - `/jak-przekazac-15` (planned page)
  - `http://kawalek-nieba.pl/marysia-wywial/` (foundation page)
- SEO metadata included:
  - title, description, canonical
  - Open Graph tags (including placeholder OG image path)

### 3) Styling and client JS
- `docs/css/style.css`: mobile-first layout and component styles.
- `docs/js/copy.js`: clipboard copy logic with visual "Skopiowano!" feedback.

### 4) SEO infrastructure
- `docs/robots.txt` exists and references sitemap.
- `docs/sitemap.xml` exists and currently includes homepage URL.

### 5) Tooling and quality gates
- Node tooling is configured via `package.json`.
- Formatting: Prettier (`npm run format:check`).
- Linting: ESLint + Stylelint + html-validate (`npm run lint`).
- Config files:
  - `.prettierrc.json`, `.prettierignore`
  - `eslint.config.js`
  - `.stylelintrc.json`
  - `.htmlvalidate.json`

### 6) E2E tests
- Playwright configured in `playwright.config.js`.
- Smoke tests in `tests/e2e/smoke.spec.js` cover:
  - root response behavior
  - homepage load/title/H1
  - key CTA and copy controls presence
  - no runtime console/page errors

### 7) Task/contracts workflow
- Task contracts stored in `tasks/`.
- Completed Phase 0 task files include:
  - `001-scaffold-homepage.md`
  - `002-add-robots-sitemap.md`
  - `003-setup-dev-tooling.md`
  - `004-setup-playwright-smoke.md`
  - `019-fix-root-preview.md`

## Not implemented yet (from roadmap)
- Shared multi-page navigation/footer across all planned pages.
- Core content pages: `/jak-przekazac-15`, `/historia`, `/faq`, `/dla-ksiegowych`, `/en`.
- Accountant asset pack files and broader SEO/structured-data phases.
- Full-page E2E coverage beyond homepage smoke tests.
