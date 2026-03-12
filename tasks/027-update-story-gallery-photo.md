# Task: Update story and gallery photo

**Slug:** update-story-gallery-photo
**Branch/workspace:** marysia15/update-marysia-photo
**Date:** 2026-03-12

## Goal
Replace the first image in the "Poznaj Marysię" section with the newly provided photo, and move the previous story image into the gallery with updated caption text.

## Non-goals
Do not change site layout, section order, or unrelated copy.

## Pages / routes impacted
- `/`

## Acceptance checks (copy/paste commands)
### Local checks
1. `python -m http.server --directory docs 8000`
2. Manual smoke:
   - Open `http://localhost:8000`
   - Verify the first image in "Poznaj Marysię" shows the newly provided wheelchair photo
   - Verify the gallery tile formerly labeled "Ćwiczenia z sensem" now uses the old story photo and caption "Codzienna rehabilitacja"

### Automated checks
- `npm ci`
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
  - [ ] Click/submit behavior verified
- Snapshots (only if needed):
  - [ ] Added/updated intentionally (explain)

## Implementation notes (agent fills during work)
- Files changed:
  - `docs/components/story.html`
  - `docs/components/gallery.html`
  - `docs/assets/marysia-wozek.jpg`
  - `tests/e2e/smoke.spec.js`
  - `tasks/roadmap.md`
  - `ARCHITECTURE.md`
- Risks:
  - Included component content is injected client-side, so tests must wait for the updated markup to render before asserting image and caption content.
- Rollback:
  - Revert the single commit that adds task 027 and updates the homepage component assets.

## Result / Notes (append-only)
- Summary of what changed:
  - Added the provided photo as `docs/assets/marysia-wozek.jpg` and used it as the first image in "Poznaj Marysię".
  - Moved the previous first story image (`terapia.jpg`) into the gallery tile that previously used `terapia2.jpg`.
  - Updated the gallery caption from "Ćwiczenia z sensem" to "Codzienna rehabilitacja".
  - Added smoke-test coverage for the swapped story image, gallery image, and updated caption.
  - Updated roadmap and architecture notes to reflect the new asset placement.
- Any test failures encountered and how resolved:
  - `npm run format:check` initially failed because `docs/index.html` and `docs/components/faq.html` already had Prettier drift, and `tests/e2e/smoke.spec.js` needed formatting after the edit. Ran Prettier on those flagged files only.
  - `npm run test:e2e` initially failed on a stale H1 assertion in `tests/e2e/smoke.spec.js`; updated the expectation to match the current hero heading in `docs/index.html`.
- Any follow-up tasks created:
  - None.
