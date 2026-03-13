# Architecture

## Scope
Static GitHub Pages site for Marysia 1.5% PIT campaign. No backend, no build pipeline.

## Current implementation status (as of 2026-03-13)

### 1) Website runtime
- Hosting model: static files served from `docs/` via GitHub Pages.
- Main published content is in `docs/`.
- `docs/index.html` is the canonical single-page landing (all sections on one page).
- `docs/faq.html` is a dedicated FAQ page with all questions organized by category (quick start, 1.5% PIT, additional support, foundation). The landing page shows 5 curated questions and links here for the full FAQ. The accountant quick-start answer includes a direct link to the published accountant PDF.
- `docs/historia.html` keeps the long-form story content intact; only technical cleanup of class names/formatting was applied to keep quality checks green.
- `docs/historia.html` homepage-return links use root-relative `./#...` anchors so the CTA and nav land on the correct sections in both local preview and published GitHub Pages routing.
- Root `index.html` currently redirects to `./docs/` — **should be removed** once GitHub Pages source is set to `/docs` folder (see deployment note below).

### 2) Homepage (`docs/index.html`) — full single-page landing
Polish mobile-first landing page redesigned with a warm, credible aesthetic. All sections live on one page:

- **Navigation** (`<nav class="site-nav">`): Sticky top bar with a short brand label (`Dla Marysi`) and anchor links (Dane do PIT, Jak przekazać 1.5%, Poznaj Marysię, FAQ). Desktop-only nav links; brand always visible.
- **Hero** (`#` / `.hero`): Two-column layout (photo + content) on desktop, stacked on mobile. Two-line H1 ("1,5% dla Marysi. W PIT to chwila, dla niej codzienna pomoc."), short third-person intro focused on Marysia's character and what 1,5% changes in practice, restored trust pill ("To nic nie kosztuje..."), primary CTA "Przejdź do danych do PIT" scrolling to the donation card.
- **Donation Card** (`#dane-do-pit` / `.pit-data`): Prominent card with coral border. KRS and cel szczegółowy with copy buttons. Clear instruction copy, trust line explaining that 1,5% goes to Marysia's subaccount, filing window date, link to Marysia's foundation subaccount.
- **How-to Steps** (`#jak-przekazac` / `.how-to`): Three numbered steps (Twój e-PIT login, KRS entry, cel szczegółowy entry) with inline copy buttons. Deadline badge, short note for accountant/software-based filings, and a direct download link to the accountant PDF (`pit-dla-marysi-dla-ksiegowych-final.pdf`).
- **Story** (`#historia` / `.story`): Two-column grid (text + photos). Short third-person introduction to Marysia covering her personality, brief diagnosis context (skrajne wcześniactwo, czterokończynowe mózgowe porażenie dziecięce, padaczka), daily rehabilitation, and what the funds support. Top spacing after the hero was reduced to keep this section visually closer to the first CTA. Photos: `marysia-wozek.jpg` (wheelchair photo outdoors) and `hero2.jpg` (reading at home).
- **Media mentions** (`#w-mediach` / `.media`): Homepage ticker of linked media logos under the heading "Marysia w mediach". The previous descriptive subheader was removed to keep the section tighter and more label-like.
- **Photo Gallery** (`#galeria` / `.gallery`): 12-photo gallery titled "Marysia po swojemu" with refreshed figcaptions that highlight personality and daily moments rather than placeholder chronology labels. The rehabilitation tile now reuses `terapia.jpg` from the earlier story section and is captioned "Codzienna rehabilitacja".
- **FAQ** (`#faq` / `.faq`): Five practical `<details>` items under the heading "FAQ bez komplikacji", focused on cost, exact PIT data, what the support covers, deadline, and passing data to an accountant. The accountant question includes the same direct PDF download link as the how-to section. FAQPage JSON-LD structured data included in `<head>` mirrors these practical questions.
- **Bank Transfer** (`#przelew` / `.bank`): Landing page section with PLN account number and transfer title, framed as additional support beyond 1,5%.
- **Updates** (`#aktualnosci` / `.updates`): Direct Facebook profile CTA with final copy encouraging readers to follow Marysia's day-to-day progress. No embedded widgets.
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

### 4a) Client-side includes (`docs/js/includes.js`)
- Homepage sections marked with `data-include` are fetched client-side from `docs/components/`.
- Hash navigation is restored after async include and asset loading so direct links like `/#jak-przekazac` land on the correct visible section instead of being displaced by late-loaded content above the target.

### 5) Static assets (`docs/assets/`)
16 authentic photos of Marysia used across the site:
- `hero1.jpg` — hero photo (Marysia smiling in nature, used in hero section + OG image)
- `hero2.jpg` — reading at home (used in story section)
- `marysia-wozek.jpg` — Marysia in her wheelchair outdoors (used as the first photo in the story section)
- `terapia.jpg`, `terapia2.jpg`, `wczesniak.jpg`, `wczesniak2.jpg`, `usmiech-mala.jpg`, `christmas.jpg`, `mala_mis.jpg`, `szpital-operacja.jpg`, `gra_na_pianinie.jpg`, `zabawa.jpg`, `uczy_sie.jpg`, `ksiezniczka.jpg`, `wozek_smieje_sie.jpg` — available photo assets; `terapia.jpg` is now used in the gallery section
- `wozek.jpg` — available but not currently used on page
- `pit-dla-marysi-dla-ksiegowych-final.pdf` — published accountant instruction PDF linked from the homepage how-to section and FAQ

### 6) SEO infrastructure
- `docs/robots.txt` exists and references sitemap.
- `docs/sitemap.xml` exists and includes homepage and FAQ page URLs.
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
  - Accountant PDF links on homepage and FAQ page
  - Hero CTA scrolls to PIT data card
  - FAQ page load, title, and H1
  - No runtime console/page errors
- All smoke tests passing.

### 9) Task/contracts workflow
- Task contracts stored in `tasks/`.
- Completed tasks include 001–004 (Phase 0), 005–014 (Phase 1 core), and 026 (final Polish landing + FAQ copy refresh).

## Deployment note
GitHub Pages should be configured to serve from the `/docs` folder on the `main` branch. This eliminates the `/docs` URL slug and makes `marysia15.github.io` serve `docs/index.html` directly. Once configured, the root `index.html` redirect file can be deleted.

## Not implemented yet (from roadmap)
- Real content replacing remaining `<!-- REPLACE -->` placeholders (bank account number, Facebook URLs, last year amount)
- Dedicated OG image (currently uses hero1.jpg; ideally a 1200x630 image with text overlay)
- Secondary pages: `/jak-przekazac-15`, `/dla-ksiegowych`, `/en` (note: `/faq.html` is now implemented)
- Accountant asset pack (PDF, social images)
- Full-section E2E test coverage beyond smoke tests
- Accessibility audit and performance optimization
