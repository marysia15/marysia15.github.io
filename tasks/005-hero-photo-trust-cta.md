# Task: Hero section with photo and "to nic nie kosztuje" message

**Slug:** hero-photo-trust-cta
**Branch/workspace:** marysia15/phase1-task005
**Date:** 2026-02-28

## Goal
Zaktualizować sekcję hero na stronie głównej tak, aby od razu budowała zaufanie i prowadziła użytkownika do danych PIT:
- dodać placeholder zdjęcia `docs/assets/hero.jpg`,
- dopracować krótki wstęp w tonie "mama do ludzi",
- dodać wyróżnione hasło "To nic nie kosztuje",
- dodać główny przycisk CTA przewijający do karty z danymi PIT (`#dane-do-pit`).

## Non-goals
- Brak nowych podstron.
- Brak refaktoryzacji poza sekcją hero i niezbędnymi stylami/testami.
- Brak nowych zależności.

## Pages / routes impacted
- `/docs/index.html`

## Acceptance checks (copy/paste commands)
### Local checks
1. Serve site: `python3 -m http.server --directory docs 8000`
2. Manual smoke:
   - Otwórz `http://localhost:8000`
   - Zweryfikuj: obraz hero ładuje się i ma sensowny tekst alternatywny
   - Zweryfikuj: przycisk "Przejdź do danych do PIT" przewija do sekcji `#dane-do-pit`
   - Zweryfikuj: strona nie rzuca błędów w konsoli

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
  - [x] Kliknięcie CTA hero przewija do `#dane-do-pit`
- Snapshots (only if needed):
  - [ ] Added/updated intentionally (explain)

## Implementation notes (agent fills during work)
- Files changed:
  - `docs/index.html`
  - `docs/css/style.css`
  - `docs/assets/hero.jpg`
  - `tests/e2e/smoke.spec.js`
- Risks:
  - Placeholder image wymaga podmiany na docelowe zdjęcie Marysi w kolejnym kroku contentowym.
- Rollback:
  - Revert commit z tym taskiem przywraca poprzedni układ hero.

## Result / Notes (append-only)
- 2026-02-28: Dodano nowy układ hero z obrazem placeholder, dopracowanym wstępem, wyróżnionym komunikatem "To nic nie kosztuje" i CTA do `#dane-do-pit`.
- 2026-02-28: Dodano test Playwright weryfikujący działanie CTA do sekcji PIT.
- 2026-02-28: Uruchomiono i zaliczono: `npm ci`, `npm run format:check`, `npm run lint`, `npm run test:e2e` (5/5 testów Playwright).
