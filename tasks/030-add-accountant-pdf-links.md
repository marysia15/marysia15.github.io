# Task: Add accountant PDF download links

**Slug:** add-accountant-pdf-links
**Branch/workspace:** local workspace
**Date:** 2026-03-13

## Goal
Dodać na landing page i w FAQ bezpośredni link do pobrania PDF z instrukcjami dla księgowych.

## Non-goals
- Nie zmieniam treści instrukcji w PDF.
- Nie przebudowuję układu sekcji ani kategorii FAQ.
- Nie dodaję nowej podstrony dla księgowych.

## Pages / routes impacted
- `/`
- `/faq.html`

## Acceptance checks (copy/paste commands)
### Local checks
1. `python3 -m http.server 4173`
2. Manual smoke:
   - Otwórz `http://127.0.0.1:4173/docs/`
   - Sprawdź link „Pobierz PDF z instrukcjami dla księgowych” pod sekcją „Jak przekazać 1,5% dla Marysi?”
   - Otwórz `http://127.0.0.1:4173/docs/faq.html` i sprawdź ten sam link w pytaniu o wysłanie danych księgowej/księgowemu

### Automated checks
- `npm run format:check`
- `npm run lint`
- `npm run test:e2e`

## UI test plan (Playwright)
- Add/update tests in: `tests/e2e/smoke.spec.js`
- Smoke coverage:
  - [x] Page loads
  - [x] Title / heading present
  - [x] Navigation works
  - [x] No console errors
- Interactions (if applicable):
  - [x] PDF download links render with the published `href`
- Snapshots (only if needed):
  - [ ] Added/updated intentionally (explain)

## Implementation notes (agent fills during work)
- Files changed:
  - `docs/index.html`
  - `docs/components/faq.html`
  - `docs/faq.html`
  - `docs/pit-dla-marysi-dla-ksiegowych-final.pdf`
  - `tests/e2e/smoke.spec.js`
- Risks:
  - PDF must live under `docs/` to be reachable on GitHub Pages.
- Rollback:
  - Revert the single commit that adds the PDF links and published PDF copy.

## Result / Notes (append-only)
- Summary of what changed: Added direct PDF download links on the homepage and FAQ, and published the accountant PDF from `docs/` for GitHub Pages compatibility.
- Any test failures encountered and how resolved: `npm run test:e2e` initially could not start the local server in the sandbox, so it was rerun with elevated permissions and then passed. `npm run format:check` still fails on pre-existing unrelated files: `docs/components/story.html` and `docs/historia.html`.
- Any follow-up tasks created: None.
