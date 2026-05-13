# CLAUDE.md — family-dev

Project notes for `rajeshgheware/family-skills` — a Jekyll-based GitHub Pages site at
`https://rajeshgheware.github.io/family-skills/`.

The site is intentionally **lightweight**: no JS framework, no build pipeline beyond
GitHub Pages' built-in Jekyll, no external runtime dependencies other than Google
Fonts and GoatCounter. Preserve that — do not introduce React, Tailwind, Node
build steps, package.json, or bundlers.

## Stack & key facts

- **Jekyll 4.3** (declared in `Gemfile`). Built automatically by GitHub Pages on push to `main`.
- **`baseurl: "/family-skills"`** in `_config.yml`. Always use `{{ '/path' | relative_url }}` in Liquid templates.
- **Fonts:** Fraunces (display, variable) + Manrope (body), loaded from Google Fonts in `_layouts/default.html`.
- **Palette:** cream paper (`--paper: #faf6ee`), terracotta accent (`--accent: #c9533a`), ink (`--ink: #1a1614`). Each pillar overrides `--pillar-accent` via inline style.
- **Analytics:** GoatCounter, site code `family-skills` (`_config.yml: goatcounter_code`). Visit-count badge in footer.

## Layouts

- `default.html` — wraps everything with header, footer, analytics
- `home.html` — landing page (hero + ten-pillar grid)
- `pillar.html` — extends `default`, renders one essay from `_pillars/` using metadata in `_data/pillars.yml`

A page can opt out of the pillar collection treatment by declaring `layout: default` in its
front matter — see `about.md` and `ll-mock-test.md`.

## Pages

| Path | Layout | Notes |
|---|---|---|
| `/` | `home` | Hero + pillar grid |
| `/about/` | `default` | Author intro |
| `/pillars/<slug>/` | `pillar` | One per essay in `_pillars/` |
| `/ll-mock-test/` | `default` | **Self-contained** mock test page (see below) |

## The LL mock test page (`ll-mock-test.md`)

A standalone timed practice test for the Karnataka (Jayanagar RTO) Learner's Licence.
Mirrors the live exam format: **15 questions, 10-minute timer, 9 correct to pass**.

- **One file, no external dependencies.** All CSS lives in a `<style>` block, all JS in a
  `<script>` block. SVG traffic signs are inline string literals inside the JS `SIGNS` map.
  Don't split this into separate `.css` / `.js` files unless you also build a second test
  page that justifies the abstraction.
- **Pool size: ~65 questions.** Each attempt draws 15 at random via `prepareQuestions()`.
  When adding questions, append to the `QUESTIONS` array — order doesn't matter, the
  shuffle handles it. Option order is also re-shuffled per render.
- **Sign categories (red-bordered circle = mandatory, red-bordered triangle = cautionary,
  blue rectangle = informatory).** New signs go into the `SIGNS` map keyed by camelCase
  name and rendered via the `mandatoryRed`, `mandatoryRedSlash`, `mandatoryBlue`,
  `cautionary`, or `informatory` helper. Keep `viewBox="0 0 120 120"` for size consistency.
- **Pass mark & timing are constants.** `TOTAL_TIME_SECONDS`, `PASS_MARK`, `DRAW_COUNT`
  are at the top of the state block — change them there and the UI text in the intro
  cards needs to be updated to match.
- **The page is intentionally not linked from the site nav or footer.** It is a private
  utility shared by URL. Don't add discovery links unless explicitly asked.

## Authoring a pillar

1. Add an entry to `_data/pillars.yml` with `slug`, `title`, `tagline`, `order`, `accent`.
2. Create `_pillars/<slug>.md` with front matter `slug:` matching, and an `_includes/svg/<slug>.svg`.
3. The `pillar.html` layout will pick up everything automatically.

## Local development

```bash
bundle install                      # one-time
bundle exec jekyll serve --livereload
# → http://127.0.0.1:4000/family-skills/
```

If `bundle` is missing, `gem install bundler` first. The site has no Node toolchain.

## Deployment

Push to `main` on `rajeshgheware/family-skills`. GitHub Pages rebuilds in 30–90s.

**Auth gotcha** — the `gh` CLI on this machine is logged into `brainupgrade-in`, not
`rajeshgheware`, so the default git credential helper for github.com hands back the
wrong token. The PAT for `rajeshgheware` lives at `~/.rajesh/.github_rajeshgheware`.
Push with:

```bash
TOKEN=$(tr -d '\n\r ' < ~/.rajesh/.github_rajeshgheware)
git push "https://rajeshgheware:${TOKEN}@github.com/rajeshgheware/family-skills.git" main
unset TOKEN
```

The `rajeshgheware` account has "block command-line pushes that expose my email"
turned on — commits must be authored as `4003385+rajeshgheware@users.noreply.github.com`
(use `git -c user.email=...` for per-commit override) or the push is rejected with `GH007`.

## Conventions

- **No comments in code unless the *why* is non-obvious.** Identifiers should carry meaning.
- **No build-time dependencies** beyond what `Gemfile` already declares.
- **All accent colors come from CSS custom properties** — don't hardcode hex codes in component-level CSS.
- **Liquid templating runs inside `.md` files**, including the LL mock test. Avoid `{{ }}` and `{% %}` in raw HTML/CSS/JS unless you want Liquid to process them.
