# Task: Fix local root preview routing

**Slug:** fix-root-preview
**Branch/workspace:** marysia15/phase0-core
**Date:** 2026-02-28

## Goal
Make local preview from repository root load the website instead of a directory listing, especially for flows like `http://localhost:55020/`.

## Non-goals
- Do not change donation content or page layout in `docs/index.html`.
- Do not add new dependencies.

## Pages / routes impacted
- `/` (repo root local preview)
- `/docs/` (existing site location)

## Acceptance checks (copy/paste commands)
### Local checks
1. `python3 -m http.server 55020`
2. Open `http://localhost:55020/` and verify it redirects to `/docs/`.
3. Verify homepage content appears after redirect.

### Automated checks
- `npm run format:check`
- `npm run lint`
- `npm run test:e2e`

## UI test plan (Playwright)
- Existing smoke test remains the primary homepage regression guard.
- No new interaction behavior added.

## Implementation notes (agent fills during work)
- Files changed:
  - `index.html`
  - `README.md`
- Risks:
  - Incorrect redirect target could break local preview.
- Rollback:
  - Revert commit that adds root redirect file and README text.

## Result / Notes (append-only)
- **2026-02-28:** Reproduced issue locally: `python3 -m http.server 55020` served repo root and showed directory listing.
- **2026-02-28:** Added root `index.html` redirect (`meta refresh` + `window.location.replace`) to `./docs/`.
- **2026-02-28:** Updated `README.md` with two working local run options:
  - explicit `--directory docs`
  - root server flow for ports like `55020`
- **2026-02-28:** Verified root no longer shows directory listing and now renders redirect page.
- **2026-02-28:** Checks passed: `npm run format:check`, `npm run lint`, `npm run test:e2e`.
- **2026-02-28:** Hardened Playwright setup to serve repository root (`python3 -m http.server 4173`) instead of `--directory docs`, so smoke tests validate root behavior.
- **2026-02-28:** Added smoke assertion that `/` response contains redirect shell and does not contain `Directory listing for /`.
- **2026-02-28:** Added README troubleshooting for stale process on port `55020`.
