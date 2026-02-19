# AGENTS.md

This repo is a static website published via GitHub Pages. Your job as an agent is to make small, reviewable changes that pass automated checks and basic UI (User Interface) tests.

## Repo layout (assumed; update if different)
- `docs/` — the published site (GitHub Pages source)
- `assets/` or `docs/assets/` — images, fonts, etc.
- `tests/e2e/` — Playwright End-to-End (E2E) UI tests
- `tasks/` — task contracts (one file per change)
- `scripts/` — helper scripts (optional)

## Golden workflow (do this every time)
1. Create or pick a task file: `tasks/<slug>.md` (use `tasks/TEMPLATE.md`).
2. Implement the smallest change that satisfies the acceptance checks.
3. Update or add tests (especially UI tests if any visible behavior changes).
4. Run the checks locally (commands below).
5. Update the “Result / Notes” section in the task file.
6. Stop. Do not keep refactoring unless the task explicitly asks.

## Local dev (no build step assumed)
Serve the site from `docs/`:
- Python (preferred): `python -m http.server --directory docs 8000`
- Then open: `http://localhost:8000`

If the repo uses a generator (e.g., Jekyll, Eleventy), add the real commands here and use those instead.

## Automated checks (Continuous Integration (CI) parity)
Agents MUST keep CI green. The target is:
- Formatting (Prettier)
- Linting (ESLint (ECMAScript/JavaScript linting), Stylelint (CSS linting), HTML validation)
- UI tests (Playwright)

### Suggested npm scripts (align your work to these)
- Install: `npm ci`
- Format check: `npm run format:check`
- Lint: `npm run lint`
- UI tests: `npm run test:e2e`
- UI tests (UI Mode): `npm run test:e2e:ui`

(If these scripts don’t exist yet, create them as part of a task that explicitly adds testing.)

## UI testing protocol (Playwright)
We use Playwright for browser-level checks in CI.

### What must be covered
1. **Smoke tests (always):**
   - Homepage loads with HTTP 200 (or file served) and expected `<title>`
   - Primary navigation renders and links work
   - No obvious runtime errors (console error guard)

2. **Interaction tests (when UI changes):**
   - Any new button, form, menu, accordion, modal, etc. gets an interaction test.
   - Prefer stable selectors: add `data-testid="..."` to key elements.

3. **Visual checks (optional, only if needed):**
   - Use screenshot snapshots for a small number of high-value pages/components.
   - If updating snapshots, note it explicitly in the task “Result / Notes”.

### How to debug failures
- Use Playwright HTML report and trace artifacts from CI (download from the CI run).
- Locally: run `npm run test:e2e -- --headed` and/or `npm run test:e2e:ui`.

## Content + accessibility rules (keep it simple)
- Use semantic HTML (HyperText Markup Language): headings in order, buttons for actions, links for navigation.
- All images must have meaningful `alt` text (or empty `alt=""` if decorative).
- Avoid layout-only text in images unless explicitly required.

## Change hygiene (non-negotiable)
- Do not introduce new dependencies unless the task explicitly approves it.
- Do not reformat unrelated files.
- Keep diffs small and scoped to the task.
- Prefer plain, understandable JavaScript (JS) over clever abstractions.
- If you touch multiple pages, add at least one UI test that covers the changed path.

## GitHub Pages constraints
- Everything must work as static hosting (no server-side assumptions).
- Use relative paths that behave correctly under a GitHub Pages base path.
