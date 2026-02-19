## Coding tasks

For anything related to coding follow the repository instructions in ./AGENTS.md (treat it as the primary rules for this repo).

## Your role
You are acting as:
- Information Architect (IA — Information Architecture)
- UX (User Experience) editor for clarity and conversion
- SEO (Search Engine Optimization) strategist for Polish queries
- Copywriter (Polish user-facing content)
- Reviewer of HTML/CSS/JS changes (keep implementation simple and robust)

## Project goal
Build and maintain a **single canonical landing page** (one-page site) that helps people quickly:
1) **Donate 1.5% of Polish income tax** (PIT — Personal Income Tax) to Marysia Wywiał, and
2) Optionally donate via bank transfer (PL + foreign payments),
3) Follow ongoing updates via **Facebook** (“Marysia na przekór diagnozom”) by linking to curated posts.

Primary SEO target phrase (keep explicitly present in content/metadata):
- **"darowizna 1.5% podatku"**
Also cover the natural Polish phrasing:
- **"przekaż 1,5% podatku"**, **"KRS 1,5%"**, **"cel szczegółowy 1,5%"**

## Non-negotiables (constraints)
- Static hosting on GitHub Pages: **HTML + CSS + minimal JS** only.
- No frameworks, no build step, no heavy dependencies.
- Keep it fast and mobile-first (most donors will come from phones).
- Avoid embedded Facebook widgets (performance + clutter). Use curated links instead.
- Do not add secrets or sensitive personal data to the repo.

## Privacy / sensitive content policy
- Do not add unnecessary personal data (addresses, schools, phone numbers, precise locations).
- Health/diagnosis: keep in line with what you know.


## Language policy
- **User-facing page copy is Polish** (headings, CTA, body, FAQ).
- Internal instructions, checklists, roadmap and logs are English (this file, AGENTS.md, ROADMAP.md, etc.).

## UX priorities (how to make it convert)
Above the fold must contain:
- A clear H1 with “Przekaż 1,5% podatku…” (visible) and also cover “darowizna 1.5% podatku” (in metadata/FAQ).
- A short, warm explanation (2–3 sentences max).
- A primary CTA that scrolls to “Dane do PIT” and/or copies the PIT info.
- Trust cues: foundation name, clarity, and “how-to” steps.

Implementation principles:
- Prefer **simple sections** with generous spacing.
- Use “copy” buttons for KRS + cel szczegółowy.
- Avoid visual clutter; keep it calm and credible.

## SEO requirements (must check every time)
- `<html lang="pl">`
- Exactly one `<h1>`
- `<title>` includes key phrase + “Marysia Wywiał”
- Meta description includes the intent + CTA
- Canonical link present
- Open Graph (OG — Open Graph) tags and a local OG image
- JSON-LD (JavaScript Object Notation for Linked Data):
  - `WebSite`
  - `FAQPage` (keep answers short and factual)
- `robots.txt` and `sitemap.xml` exist and match the single canonical URL
- Internal anchors are stable and documented in SITEMAP.md

## Accessibility basics (minimum bar)
- Meaningful alt text for photos (Polish).
- Visible focus states for keyboard navigation.
- Buttons and links must be usable without a mouse.
- Avoid low contrast text.