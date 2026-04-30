# CLAUDE.md — CarSim Learning Portal

## Project

CarSim 日本顧客向け学習ポータル。GitHub Pages + SSG で構築し、CarSim.com を補完する独立サイト。

- Owner: Takahiko (Applied, Japan)
- Repo: carsim-learning-portal
- Deploy: GitHub Pages via GitHub Actions
- Language: Japanese (UI/content), English (code/comments)

## Tech stack

- SSG: [TBD — Astro or VitePress]
- Styling: Tailwind CSS
- Search: Pagefind (client-side, post-build)
- Video embed: YouTube unlisted or Vimeo (iframe)
- CI/CD: GitHub Actions → GitHub Pages

## Directory structure

```
/
├── CLAUDE.md              # This file
├── src/
│   ├── pages/             # Page routes
│   │   ├── index          # Home (level selector, quick links, what's new)
│   │   ├── getting-started/
│   │   │   ├── index      # Checklist overview
│   │   │   ├── install    # Install guide (video embed)
│   │   │   ├── license    # License setup (video embed)
│   │   │   ├── quick-start # First simulation walkthrough
│   │   │   └── training-prep # Monthly training prep (video embed)
│   │   ├── kb/
│   │   │   ├── faq/
│   │   │   │   ├── index  # FAQ index with level/category filter
│   │   │   │   └── [slug] # Individual FAQ articles
│   │   │   ├── troubleshoot # Interactive troubleshooting flow
│   │   │   └── glossary   # A-Z term glossary
│   │   ├── learn/
│   │   │   └── skill-map  # Radar chart + self-assessment
│   │   ├── support/
│   │   │   ├── index      # Contact & escalation guide
│   │   │   └── ticket     # Ticket submission guidance
│   │   ├── search         # Pagefind search results
│   │   └── about          # Portal info + feedback
│   ├── components/        # Reusable UI components
│   ├── layouts/           # Page layouts
│   └── content/           # Markdown content
│       └── faq/           # FAQ markdown files
├── public/                # Static assets (images, icons)
└── .github/
    └── workflows/         # GitHub Actions deploy
```

## Content authoring

### FAQ files

Each FAQ is a markdown file in `src/content/faq/` with frontmatter:

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

本文をここに書く。スクリーンショットは `/public/images/faq/` に配置。
```

### Page cross-links

Every page must avoid dead ends:
- Getting started pages → link to related FAQ at bottom
- FAQ articles → link to /support/ if unresolved
- Support page → link back to /kb/faq/ and /kb/troubleshoot/

## Coding conventions

- Components: PascalCase (`FaqFilter.astro` or `FaqFilter.vue`)
- Pages: kebab-case (`quick-start.astro`)
- CSS: Tailwind utility classes; custom CSS only when Tailwind is insufficient
- Commits: conventional commits (`feat:`, `fix:`, `docs:`, `content:`)
- Content commits use `content:` prefix (e.g., `content: add faq license-activation`)

## Design guidelines

- Primary font: system font stack (Noto Sans JP for Japanese)
- Color scheme: match CarSim brand (dark blue #1a365d, accent teal #0d9488)
- Mobile-first responsive
- Accessibility: WCAG 2.1 AA minimum
- No JavaScript required for content reading (progressive enhancement only)

## Key decisions

- GitHub Pages chosen over CarSim.com integration for editorial autonomy
- Separate site linked from CarSim.com (one-time US request for link addition)
- FAQ managed as individual markdown files for scalability
- Pagefind for search (zero-cost, no server dependency)
- Videos hosted externally (not in repo) to keep repo lightweight

## Phase 1 scope

12 pages + 30-40 FAQ articles. See project-knowledge-base.md for full Phase plan.

## What NOT to do

- Do not hardcode Japanese text in components — use content files or i18n keys
- Do not add authentication — this is a public learning portal
- Do not store videos in the repo — embed from external hosting
- Do not use server-side rendering — static export only (GitHub Pages constraint)
