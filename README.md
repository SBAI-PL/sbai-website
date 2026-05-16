# SBAI — sbai.pl

Strona firmowa **SBAI sp. z o.o.** zbudowana w Next.js jako statyczny export pod GitHub Pages.

Treści i architektura informacji są prowadzone przez [`content-strategy.md`](content-strategy.md).

## Struktura

```
.
├── src/app/                    # Next.js App Router
├── public/                     # statyczne assety i CNAME dla GitHub Pages
├── docs/                       # copied specs, partially rebranded
├── content-strategy.md         # SBAI content strategy
├── .github/workflows/pages.yml # build + deploy GitHub Pages
└── CNAME                       # www.sbai.pl
```

## Local Development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000/`.

## Static Build

```bash
npm run lint
npm run build
```

Next.js exports the site to `out/`. The GitHub Pages workflow deploys that directory and keeps the custom domain from `public/CNAME`.

## Routes

- `/` — Polish landing page
- `/pl/` — Polish alias
- `/en/` — English landing page
