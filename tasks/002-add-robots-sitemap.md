# Task: Add robots.txt and sitemap.xml

**Slug:** add-robots-sitemap
**Branch/workspace:** marysia15/phase0-core
**Date:** 2026-02-28

## Goal
Create `docs/robots.txt` and `docs/sitemap.xml` for basic SEO infrastructure, referencing the canonical URL `https://marysia15.github.io/`.

## Non-goals
- Do not change page content or visual layout.
- Do not add additional routes to sitemap beyond existing pages.

## Pages / routes impacted
- `/robots.txt`
- `/sitemap.xml`

## Acceptance checks (copy/paste commands)
### Local checks
1. Serve site: `python -m http.server --directory docs 8000`
2. Verify:
   - `http://localhost:8000/robots.txt` loads and includes sitemap URL
   - `http://localhost:8000/sitemap.xml` loads and contains the homepage URL

### Automated checks
- `npm run lint` (HTML lint remains green)

## UI test plan (Playwright)
- Not applicable (no UI behavior change)

## Implementation notes (agent fills during work)
- Files changed:
  - `docs/robots.txt`
  - `docs/sitemap.xml`
- Risks:
  - Incorrect canonical URL would reduce SEO effectiveness.
- Rollback:
  - Revert the commit that adds these two files.

## Result / Notes (append-only)
- **2026-02-28:** Added `docs/robots.txt` with `User-agent: *`, `Allow: /`, and sitemap pointer to `https://marysia15.github.io/sitemap.xml`.
- **2026-02-28:** Added `docs/sitemap.xml` including homepage URL `https://marysia15.github.io/`.
- **2026-02-28:** Verified with Phase 0 checks; `npm run lint` passes, including HTML validation.
