# Task: Update media heading

**Slug:** update-media-heading
**Branch/workspace:** marysia15/update-marysia-photo
**Date:** 2026-03-12

## Goal
Rename the homepage media section heading to "Marysia w mediach" and remove the descriptive subheader beneath it.

## Non-goals
Do not change the linked media outlets, ticker behavior, or other homepage copy.

## Pages / routes impacted
- `/`

## Acceptance checks (copy/paste commands)
### Local checks
1. `python -m http.server --directory docs 8000`
2. Manual smoke:
   - Open `http://localhost:8000`
   - Verify the media section heading reads "Marysia w mediach"
   - Verify there is no subheader text under that heading

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
  - [ ] Click/submit behavior verified
- Snapshots (only if needed):
  - [ ] Added/updated intentionally (explain)

## Implementation notes (agent fills during work)
- Files changed:
  - `docs/components/media.html`
  - `tests/e2e/smoke.spec.js`
  - `tasks/roadmap.md`
- Risks:
  - The media section is loaded through client-side includes, so smoke coverage needs to wait for that markup before asserting text.
- Rollback:
  - Revert the commit that adds task 028 and updates the media component/test.

## Result / Notes (append-only)
- Summary of what changed:
  - Renamed the media section heading to "Marysia w mediach".
  - Removed the supporting sentence under the media heading.
  - Added smoke-test coverage to assert the new heading is present and the removed sentence no longer appears.
  - Updated roadmap and architecture notes to reflect the media section copy change.
- Any test failures encountered and how resolved:
  - None.
- Any follow-up tasks created:
  - None.
