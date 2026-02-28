# Marysia 1.5% PIT Website

Static website content lives in `docs/` (GitHub Pages style, no build step).

## Run locally

Option A (explicitly serve `docs/`):

```bash
python3 -m http.server --directory docs 8000
```

Open:

```text
http://localhost:8000
```

Option B (serve repo root, e.g. preview ports like `55020`):

```bash
python3 -m http.server 55020
```

Open:

```text
http://localhost:55020/
```

The root `index.html` now redirects automatically to `./docs/`.

Stop the server with `Ctrl+C`.

### Troubleshooting

If `http://localhost:55020/` still shows an unexpected directory listing, check whether another process is already using that port:

```bash
lsof -nP -iTCP:55020 -sTCP:LISTEN
```

Then stop it and start the server again from this repository root.

## Optional: run checks and tests

```bash
npm ci
npm run format:check
npm run lint
npx playwright install chromium
npm run test:e2e
```

UI test mode:

```bash
npm run test:e2e:ui
```
