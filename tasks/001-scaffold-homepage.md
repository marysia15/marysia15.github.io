# Task: Scaffold homepage with donation block and SEO metadata

**Slug:** scaffold-homepage
**Branch/workspace:** marysia15/scaffold-homepage
**Date:** 2026-02-18

## Goal
Create the initial `docs/index.html` page that loads instantly, works on mobile, and presents the core donation data (KRS + cel szczegółowy) above the fold with copy-to-clipboard buttons. This is the foundation for the entire site.

The page must:
- Display a clear H1 with "Przekaż 1,5% podatku dla Marysi Wywiał"
- Show the donation data block (KRS: `0000382243`, cel szczegółowy: `1884 pomoc dla Marysi Wywiał`) with "Kopiuj" buttons
- Include a short intro sentence (Adrianna/mama voice, 2–3 sentences)
- Have a primary CTA button linking to /jak-przekazac-15 ("Jak przekazać 1,5% w Twój e-PIT")
- Have a secondary CTA linking to http://kawalek-nieba.pl/marysia-wywial/
- Include proper SEO metadata (see below)
- Be mobile-first, fast, and accessible

## Non-goals
- Do NOT create any other pages (historia, FAQ, dla-ksiegowych, etc.)
- Do NOT add a build step, framework, or heavy dependencies
- Do NOT create tests or CI pipeline (that is a separate task)
- Do NOT add analytics or tracking
- Do NOT add navigation to other pages (pages don't exist yet)
- Do NOT embed Facebook widgets

## Pages / routes impacted
- `docs/index.html` (new file — the homepage)
- `docs/css/style.css` (new file — shared stylesheet)
- `docs/js/copy.js` (new file — copy-to-clipboard logic)

## Canonical donation data (use exactly these strings)
- Foundation page: http://kawalek-nieba.pl/marysia-wywial/
- KRS: `0000382243`
- Cel szczegółowy: `1884 pomoc dla Marysi Wywiał`
- Core CTA: "Wpisz KRS i cel szczegółowy w rozliczeniu PIT / Twój e-PIT."

## SEO metadata requirements
All of these must be present in `<head>`:
- `<html lang="pl">`
- Exactly one `<h1>` on the page
- `<title>` includes "1,5% podatku" + "Marysia Wywiał"
- `<meta name="description">` with intent + CTA
- Open Graph tags: `og:title`, `og:description`, `og:type`, `og:url`, `og:image` (use a placeholder image path `assets/og-image.jpg`)
- `<link rel="canonical">` pointing to `https://marysia15.github.io/`
- Viewport meta for mobile

## Content requirements (Polish)
- H1: "Przekaż 1,5% podatku dla Marysi Wywiał"
- Intro (2–3 sentences, warm "mama do ludzi" tone): brief who Marysia is and why this matters
- Donation block: visually prominent card/box with KRS and cel szczegółowy, each with a "Kopiuj" button
- Filing window note: "Rozliczenie PIT: 15 lutego – 30 kwietnia 2026"
- Primary CTA button: "Jak przekazać 1,5% w Twój e-PIT" (links to `/jak-przekazac-15` — will 404 for now, that's fine)
- Secondary link: "Przejdź do subkonta fundacji" → http://kawalek-nieba.pl/marysia-wywial/

## Technical constraints
- Plain HTML + CSS + minimal vanilla JS (no frameworks, no build step)
- Mobile-first responsive design
- Use semantic HTML: proper headings, `<main>`, `<header>`, `<footer>`, `<section>`, `<button>`
- All text in Polish
- Use relative paths for CSS/JS (`css/style.css`, `js/copy.js`)
- Copy-to-clipboard JS: use `navigator.clipboard.writeText()` with a visual confirmation ("Skopiowano!")
- Keep CSS clean and minimal — generous spacing, readable fonts, calm colors
- Image placeholders: use empty `alt` or descriptive Polish alt text

## Acceptance checks (copy/paste commands)
### Local checks
1. Serve site: `python -m http.server --directory docs 8000`
2. Manual smoke:
   - Open `http://localhost:8000` on desktop and mobile viewport
   - Verify: H1 is visible, donation block is above the fold on mobile
   - Verify: "Kopiuj" buttons copy the correct text to clipboard
   - Verify: page has no console errors
   - Verify: HTML validates (no broken tags, proper structure)

### Automated checks
- `npx html-validate docs/index.html` (if available)
- Lighthouse mobile score ≥ 90 (manual check)

## UI test plan (Playwright)
*Tests are out of scope for this task — will be added in a dedicated testing task.*

## Implementation notes (agent fills during work)
- Files changed:
  - `docs/index.html`
  - `docs/css/style.css`
  - `docs/js/copy.js`
- Risks:
  - Copy-to-clipboard requires HTTPS or localhost (works on localhost for testing)
  - OG image is a placeholder path — real image added in a later task
- Rollback:
  - Single commit revert restores empty docs/ directory

## Result / Notes (append-only)
- **2026-02-19:** Implemented all three files: `docs/index.html`, `docs/css/style.css`, `docs/js/copy.js`.
- All 12 acceptance checks pass (lang, h1 count, title keywords, meta description, OG tags, canonical, viewport, donation data, copy buttons, data-testid attrs, filing window, CTA links).
- Copy-to-clipboard uses `navigator.clipboard.writeText()` with "Skopiowano!" visual feedback and `.copied` CSS class.
- Mobile-first responsive design with 640px breakpoint.
- OG image path set to placeholder `assets/og-image.jpg` as specified.
- No frameworks or build steps introduced.
