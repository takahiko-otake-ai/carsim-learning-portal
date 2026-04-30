# CLAUDE.md — CarSim Learning Portal

## Project

CarSim ユーザー向け多言語学習ポータル。GitHub Pages + VitePress で構築し、CarSim.com を補完する独立サイト。
日本語をデフォルトロケールとし、将来的に英語・韓国語など複数言語に対応できる構造で設計する。

- Owner: Takahiko (Applied Intuition, Japan)
- Repo: carsim-learning-portal
- Deploy: GitHub Pages via GitHub Actions
- Default language: Japanese (`/`) — English (`/en/`), Korean (`/ko/`) as future locales
- Code/comments: English

## Tech stack

- SSG: VitePress 1.6+
- Styling: VitePress default theme + CSS variable overrides (`docs/.vitepress/theme/style.css`)
- Search: VitePress built-in local search (Pagefind is not used)
- Video embed: YouTube unlisted or Vimeo (iframe)
- CI/CD: GitHub Actions → GitHub Pages
- Font: Noto Sans JP (loaded via system font stack)

## Directory structure

```
/
├── CLAUDE.md                        # This file
├── package.json
├── docs/
│   ├── .vitepress/
│   │   ├── config.mts               # VitePress config (locales, nav, sidebar, search)
│   │   └── theme/
│   │       ├── index.ts             # Theme entry (imports style.css)
│   │       └── style.css            # CSS variable overrides (brand colors, nav, fonts)
│   ├── index.md                     # JA: Home (hero + features)
│   ├── about.md                     # JA: About this portal
│   ├── getting-started/
│   │   ├── index.md                 # JA: Overview (checklist)
│   │   ├── install.md               # JA: Install guide
│   │   ├── license.md               # JA: License setup
│   │   ├── quick-start.md           # JA: Quick start
│   │   └── training-prep.md         # JA: Training preparation
│   ├── kb/
│   │   ├── faq/index.md             # JA: FAQ index
│   │   ├── troubleshoot.md          # JA: Troubleshooting
│   │   └── glossary.md              # JA: Glossary
│   ├── learn/skill-map.md           # JA: Skill map
│   ├── support/
│   │   ├── index.md                 # JA: Contact & escalation
│   │   └── ticket.md                # JA: Ticket guide
│   └── en/                          # EN locale (mirrors JA structure)
│       ├── index.md
│       ├── getting-started/index.md
│       ├── kb/faq/index.md
│       ├── learn/skill-map.md
│       └── support/index.md
└── .github/
    └── workflows/                   # GitHub Actions deploy
```

## i18n rules

- Japanese content lives at the root (`/getting-started/`, `/kb/`, etc.)
- English content lives under `/en/` with the same path structure
- Korean content will live under `/ko/` when added
- Never hardcode locale-specific text in `config.mts` nav/sidebar directly — define locale-specific nav/sidebar variables (e.g. `jaNav`, `enNav`) and assign them under the `locales` key
- To add Korean: uncomment the `ko` block in `config.mts` and create `docs/ko/` pages

## Content authoring

### FAQ files

Each FAQ is a markdown file in `docs/kb/faq/` with frontmatter:

```yaml
---
title: "ライセンスが認証されない場合"
level: beginner          # beginner | intermediate
category: license        # install | license | ui | modeling | output | scripting
updated: 2025-07-15
related:
  - license-types
  - contact-support
---

本文をここに書く。スクリーンショットは `docs/public/images/faq/` に配置。
```

For English FAQ, mirror the file under `docs/en/kb/faq/` with the same slug.

### Page cross-links

Every page must avoid dead ends:
- Getting started pages → link to related FAQ at bottom
- FAQ articles → link to /support/ (or /en/support/) if unresolved
- Support page → link back to /kb/faq/ and /kb/troubleshoot/

## Coding conventions

- Pages: kebab-case (`quick-start.md`)
- CSS: CSS variables in `style.css`; do not use Tailwind (not installed)
- Commits: conventional commits (`feat:`, `fix:`, `docs:`, `content:`, `style:`)
- Content commits use `content:` prefix (e.g., `content: add faq license-activation`)
- i18n content additions use `content(en):` or `content(ko):` prefix

## Design guidelines

- Reference site: https://www.carsim.com/contactus/support.php
- Nav background: dark navy `#1a365d`
- Accent / links: teal `#0d9488`
- Headings: dark navy `#1a365d`, bold, h2 with teal bottom border
- Primary font: system font stack with Noto Sans JP
- Mobile-first responsive
- Accessibility: WCAG 2.1 AA minimum
- No JavaScript required for content reading (progressive enhancement only)

## Key decisions

- VitePress chosen over Astro for simplicity and built-in i18n + search
- GitHub Pages chosen over CarSim.com integration for editorial autonomy
- Separate site linked from CarSim.com (one-time US request for link addition)
- Japanese as default root locale (`/`); other locales added under sub-paths (`/en/`, `/ko/`)
- FAQ managed as individual markdown files for scalability
- Built-in local search replaces Pagefind (VitePress 1.x includes it natively)
- Videos hosted externally (not in repo) to keep repo lightweight

## Phase 1 scope

12 pages (JA) + 30–40 FAQ articles. English/Korean locales prepared structurally but content is stub.
See project-knowledge-base.md for full Phase plan.

## What NOT to do

- Do not hardcode locale-specific text in components or theme files — keep it in markdown or config locale blocks
- Do not add authentication — this is a public learning portal
- Do not store videos in the repo — embed from external hosting
- Do not use server-side rendering — static export only (GitHub Pages constraint)
- Do not use Tailwind CSS — VitePress theme CSS variables are sufficient
