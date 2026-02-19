# Task: <short title>

**Slug:** <kebab-case>
**Branch/workspace:** <branch name or Conductor workspace>
**Date:** <YYYY-MM-DD>

## Goal
What user-visible outcome should exist when done?

## Non-goals
What you will NOT change (explicitly). This prevents scope creep.

## Pages / routes impacted
- e.g., `/index.html`
- e.g., `/pricing.html`

## Acceptance checks (copy/paste commands)
### Local checks
1. Serve site
2. Manual smoke (describe exactly what to click/verify):
   - Open page on localhost and served post
   - Verify: <1–3 concrete things>

### Automated checks
- `npm ci`
- `npm run format:check`
- `npm run lint`
- `npm run test:e2e`

## UI test plan (Playwright)
- Add/update tests in: `tests/e2e/<slug>.spec.(js|ts)`
- Smoke coverage:
  - [ ] Page loads
  - [ ] Title / heading present
  - [ ] Navigation works
  - [ ] No console errors
- Interactions (if applicable):
  - [ ] Click/submit behavior verified
- Snapshots (only if needed):
  - [ ] Added/updated intentionally (explain)

## Implementation notes (agent fills during work)
- Files changed:
  - `docs/...`
  - `tests/e2e/...`
- Risks:
  - base path / assets / responsive layout / etc.
- Rollback:
  - what single commit revert restores prior behavior?

## Result / Notes (append-only)
- Summary of what changed:
- Any test failures encountered and how resolved:
- Any follow-up tasks created:
