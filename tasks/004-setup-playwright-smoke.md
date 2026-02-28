# Task: Set up Playwright and smoke tests

**Slug:** setup-playwright-smoke
**Branch/workspace:** marysia15/phase0-core
**Date:** 2026-02-28

## Goal
Add Playwright with a homepage smoke suite that validates:
- page loads successfully,
- expected title and H1,
- no obvious runtime errors,
- copy buttons exist.

## Non-goals
- Do not add visual snapshot tests.
- Do not add full-page navigation tests for pages not yet created.

## Pages / routes impacted
- `/` (validated by tests)

## Acceptance checks (copy/paste commands)
### Local checks
1. `npm ci`
2. `npx playwright install --with-deps chromium` (or `npx playwright install chromium` locally)
3. `npm run test:e2e`

### Automated checks
- `npm run test:e2e`

## UI test plan (Playwright)
- Add test file: `tests/e2e/smoke.spec.js`
- Smoke coverage:
  - [x] Page loads
  - [x] Title / heading present
  - [x] No console errors / runtime errors
  - [x] Copy buttons present
- Snapshots:
  - [ ] Not added

## Implementation notes (agent fills during work)
- Files changed:
  - `playwright.config.js`
  - `tests/e2e/smoke.spec.js`
  - `package.json`
  - `package-lock.json`
- Risks:
  - Browser binaries may be missing locally until Playwright install runs.
- Rollback:
  - Revert Playwright config/tests and related dependencies.

## Result / Notes (append-only)
- **2026-02-28:** Added `playwright.config.js` with static web server (`python3 -m http.server --directory docs 4173`) and `tests/e2e` as test root.
- **2026-02-28:** Added `tests/e2e/smoke.spec.js` covering homepage HTTP load, expected title + H1, key CTA/copy controls, and runtime console/page errors.
- **2026-02-28:** Added scripts `test:e2e` and `test:e2e:ui`.
- **2026-02-28:** Verified Playwright setup with `npx playwright install chromium` and `npm run test:e2e` (3 tests passed).
