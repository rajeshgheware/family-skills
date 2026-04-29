# Family Skills

A field guide for the runway years — ten foundational skills for the years before professional life.

Live site: https://rajeshgheware.github.io/family-skills/

## What this is

Ten essays, one per pillar, covering: Strategic Thinking, Critical Thinking, AI Skills, Communication, Social & Situational Awareness, Self-Protection, Success Mindset, Financial Literacy, Health Foundations, and Resilience. Each chapter has a short narrative opening, the underlying principles, a few actionable practices, recommended resources, and one specific first step.

Written first for Shreya and Naina, public for anyone walking the same runway.

## Stack

- **Jekyll** (built into GitHub Pages — no build infra needed)
- **Plain HTML/CSS/JS** — no framework, no JS dependencies
- **Google Fonts** — Fraunces (display) + Manrope (body)
- **GoatCounter** — privacy-friendly, free analytics
- **SVG illustrations** — hand-built, per pillar, themed by accent color

## Local development

```bash
bundle install
bundle exec jekyll serve
# Open http://127.0.0.1:4000/family-skills/
```

## Structure

```
.
├── _config.yml                 # Site config
├── _data/pillars.yml           # Pillar metadata (titles, accents, ordering)
├── _layouts/                   # default / home / pillar templates
├── _includes/
│   ├── header.html             # Reusable header
│   ├── footer.html             # Reusable footer (with GoatCounter badge)
│   ├── analytics.html          # GoatCounter script
│   ├── decorations/            # Hero SVG
│   └── svg/                    # One SVG per pillar
├── _pillars/                   # Ten essays, one per pillar
├── assets/
│   ├── css/main.css
│   └── js/main.js
├── index.md                    # Home page
└── about.md                    # About page
```

## Deploying to GitHub Pages

1. Push to `main` on `rajeshgheware/family-skills`.
2. In repo Settings → Pages, set Source to "Deploy from a branch", branch `main`, folder `/` (root).
3. Wait ~2 minutes for the first build.

## Setting up GoatCounter

GoatCounter is free, privacy-friendly, and open source. Visit counts on every page work without any additional config — but to capture analytics you need an account:

1. Register a site at [https://www.goatcounter.com](https://www.goatcounter.com).
2. Pick a site code (e.g. `family-skills`).
3. Update `goatcounter_code` in `_config.yml` to match your code.
4. The visit-count badge in the footer will start showing data within minutes.

## License

Content is offered freely for personal use. Attribution appreciated, not required.
