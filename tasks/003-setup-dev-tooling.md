# Task: Set up dev tooling (Prettier, ESLint, Stylelint)

**Slug:** setup-dev-tooling
**Branch/workspace:** marysia15/phase0-core
**Date:** 2026-02-28

## Goal
Initialize Node tooling for formatting and linting with npm scripts:
- `format:check`
- `lint`

## Non-goals
- Do not introduce build tooling or frameworks.
- Do not change production HTML/CSS/JS behavior.

## Pages / routes impacted
- No route changes.

## Acceptance checks (copy/paste commands)
### Local checks
1. `npm ci`
2. `npm run format:check`
3. `npm run lint`

### Automated checks
- Same as local checks above.

## UI test plan (Playwright)
- Not applicable for this task alone.

## Implementation notes (agent fills during work)
- Files changed:
  - `package.json`
  - `package-lock.json`
  - `.prettierrc.json`
  - `.prettierignore`
  - `eslint.config.js`
  - `.stylelintrc.json`
  - `.htmlvalidate.json`
- Risks:
  - Overly strict lint rules may fail on baseline files.
- Rollback:
  - Revert tooling/config files in one commit.

## Result / Notes (append-only)
- **2026-02-28:** Initialized Node tooling with `package.json` and `package-lock.json`.
- **2026-02-28:** Added Prettier, ESLint (flat config), Stylelint, and HTML validation configs.
- **2026-02-28:** Added scripts `format:check`, `lint`, `lint:js`, `lint:css`, `lint:html`.
- **2026-02-28:** Updated baseline homepage files to satisfy style/lint rules without changing donation data or intent.
- **2026-02-28:** CI-parity checks passed: `npm ci`, `npm run format:check`, `npm run lint`.
