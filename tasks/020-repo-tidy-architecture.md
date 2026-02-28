# Task: Repo tidy-up + architecture doc

**Slug:** repo-tidy-architecture
**Branch/workspace:** marysia15/phase0-core
**Date:** 2026-02-28

## Goal
Tidy repository housekeeping, capture concise lessons learned in `AGENTS.md`, and add `ARCHITECTURE.md` documenting what is already implemented.

## Non-goals
- Do not add new product features.
- Do not change website content behavior.

## Pages / routes impacted
- No route changes.

## Acceptance checks (copy/paste commands)
### Local checks
1. Ensure generated test artifacts are removed from workspace.
2. Confirm `AGENTS.md` references `ARCHITECTURE.md`.
3. Confirm `ARCHITECTURE.md` summarizes current implementation status.

### Automated checks
- `npm run format:check`
- `npm run lint`
- `npm run test:e2e`

## UI test plan (Playwright)
- Existing smoke suite only (no UI behavior changes).

## Implementation notes (agent fills during work)
- Files changed:
  - `AGENTS.md`
  - `ARCHITECTURE.md`
  - `tasks/020-repo-tidy-architecture.md`
- Risks:
  - None; documentation-only plus cleanup.
- Rollback:
  - Revert commit.

## Result / Notes (append-only)
- **2026-02-28:** Removed generated local artifacts (`playwright-report/`, `test-results/`) from workspace.
- **2026-02-28:** Added `ARCHITECTURE.md` with concise current-state snapshot (runtime, homepage, SEO infra, tooling, tests, completed tasks, remaining roadmap scope).
- **2026-02-28:** Updated `AGENTS.md` with:
  - explicit reference to `ARCHITECTURE.md`
  - very concise learnings from prior mistakes (wrong cwd assumptions, stale port process checks).
