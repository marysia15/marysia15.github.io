# Task: Final Polish Landing Copy

**Slug:** final-polish-copy
**Branch/workspace:** marysia15/polish-site-copy
**Date:** 2026-03-12

## Goal

Nadać stronie głównej i FAQ finalne polskie treści: naturalne, osobiste, chwytliwe w krótkich formach i pomagające szybko przekazać 1,5% dla Marysi.

## Non-goals

- Nie zmieniam treści w `docs/historia.html`.
- Nie zmieniam struktury strony ani jej funkcji poza testami zależnymi od treści.
- Nie dodaję nowych zależności.

## Pages / routes impacted

- `/`
- `/faq.html`

## Acceptance checks (copy/paste commands)

### Local checks

1. Serve site: `python -m http.server --directory docs 8000`
2. Manual smoke:
   - Otwórz `http://localhost:8000` i sprawdź hero, sekcję danych do PIT, galerię oraz skrót FAQ.
   - Otwórz `http://localhost:8000/faq.html` i sprawdź nagłówek, kategorie pytań oraz CTA powrotu.
   - Zweryfikuj, że treści są po polsku, brzmią naturalnie i nie używają perspektywy mamy na landing page ani FAQ.

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
  - [x] Hero CTA scroll behavior remains verified
- Snapshots (only if needed):
  - [ ] Added/updated intentionally (explain)

## Implementation notes (agent fills during work)

- Files changed:
  - `docs/index.html`
  - `docs/components/story.html`
  - `docs/components/faq.html`
  - `docs/components/media.html`
  - `docs/components/gallery.html`
  - `docs/components/bank.html`
  - `docs/components/updates.html`
  - `docs/faq.html`
  - `tests/e2e/smoke.spec.js`
  - `docs/historia.html`
  - `docs/css/historia.css`
  - `docs/js/historia.js`
  - `tasks/roadmap.md`
  - `ARCHITECTURE.md`
- Risks:
  - Dłuższe teksty mogą zaburzyć rytm sekcji mobilnych, więc trzeba to sprawdzić w testach i szybkim smoke.
- Rollback:
  - Revert commit introducing task `026-final-polish-copy`.

## Result / Notes (append-only)
- Summary of what changed: landing page i pełne FAQ dostały finalne polskie treści, z mocniejszym hero, bardziej osobistą prezentacją Marysi, nowymi nagłówkami sekcji, poprawionymi CTA i uproszczonym FAQ nastawionym na szybkie przekazanie 1,5%.
- Summary of follow-up revision: przywrócono poprzedni układ trust pill + pierwszego CTA w hero, usunięto nazwisko z miejsc innych niż dokładne instrukcje, skrócono odstęp przed sekcją o Marysi i dodano krótką wzmiankę o diagnozach w sekcji „Poznaj Marysię”.
- Any test failures encountered and how resolved: `npm run format:check` i `npm run lint` początkowo blokowały się na istniejących problemach w plikach historii; zostały usunięte przez techniczne uporządkowanie klas i formatowania bez zmiany treści `docs/historia.html`.
- Any follow-up tasks created: brak.
