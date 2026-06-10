# Intelligent Microsystem Lab Website

Maintainable Astro starter for a GitHub Pages lab website.

## Edit Content

Structured content lives in `src/data/`:

- `site.json`: lab identity, contact links, navigation
- `people.json`: PI, lab members, alumni
- `projects.json`: research themes and projects
- `publications.json`: selected publications
- `news.json`: news and updates

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The generated site appears in `dist/`.

Before publishing to GitHub Pages, update `astro.config.mjs` with the final repository URL.
