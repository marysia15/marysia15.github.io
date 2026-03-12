# Task: Fix historia homepage anchors

**Slug:** fix-historia-home-anchor
**Branch/workspace:** current workspace
**Date:** 2026-03-12

## Goal
Make the landing-page links in `docs/historia.html` resolve to the correct homepage sections, including the CTA "Jak przekazać 1,5% - 3 kroki".

## Non-goals
Do not change story copy, layout, or homepage section content.

## Pages / routes impacted
- `/historia.html`
- `/`

## Acceptance checks (copy/paste commands)
### Local checks
1. `python -m http.server --directory docs 8000`
2. Manual smoke:
   - Open `http://localhost:8000/historia.html`
   - Click `Jak przekazać 1,5% - 3 kroki`
   - Verify the browser lands on `http://localhost:8000/#jak-przekazac` and the heading `Jak przekazać 1,5% dla Marysi?` is visible

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
  - [x] Story CTA links to the correct homepage anchor
- Snapshots (only if needed):
  - [ ] Added/updated intentionally (explain)

## Implementation notes (agent fills during work)
- Files changed:
  - `docs/historia.html`
  - `tests/e2e/smoke.spec.js`
  - `tasks/029-fix-historia-home-anchor.md`
  - `tasks/roadmap.md`
  - `ARCHITECTURE.md`
- Risks:
  - Homepage anchor links must keep working both from the published `/historia.html` route and local static previews.
- Rollback:
  - Revert the commit that switches historia homepage links from `index.html#...` to `./#...`.

## Result / Notes (append-only)
- Summary of what changed:
  - Updated homepage links in `docs/historia.html` to use `./#...` so they resolve against the published landing page route.
  - Updated the homepage include loader to re-apply hash scrolling after async sections and images load, preventing `#jak-przekazac` from being pushed down into the story area.
  - Added smoke coverage to assert the story CTA lands on the homepage how-to section and that the section is actually positioned at the top of the viewport.
  - Updated roadmap and architecture notes for the anchor fix.
- Any test failures encountered and how resolved:
  - Initial CTA test showed the correct URL fragment but the wrong visible section because async homepage includes loaded above the anchor target after navigation. Resolved by restoring hash scroll after includes and full page load using a direct non-animated scroll.
- Any follow-up tasks created:
  - None.
