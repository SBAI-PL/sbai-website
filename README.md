# SBAI — sbai.pl

Robocza strona firmowa **SBAI sp. z o.o.**.

Aktualny stan to statyczna strona zbudowana na bazie poprzedniego statycznego landing page'a, po pierwszej podmianie brandingu i danych rejestrowych na SBAI.

## Struktura

```
.
├── index.html                  # EN homepage
├── pl/index.html               # PL homepage
├── styles.css                  # global styles
├── script.js                   # navigation / language / UI behavior
├── assets/                     # copied visual assets
├── docs/                       # copied specs, partially rebranded
├── content-strategy.md         # SBAI content strategy
└── CNAME                       # sbai.pl
```

## Local Preview

Serve from the repo root so absolute paths like `/static/js/contact-form.js` work:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.

## Rebrand Checklist

- [x] Replace inherited domain references with `sbai.pl`
- [x] Replace logo with simple SBAI wordmark
- [x] Replace company name, tagline, email, NIP/KRS/REGON
- [x] Remove inherited form endpoint and use `mailto:info@sbai.pl`
- [ ] Align EN/PL copy with `content-strategy.md`
- [ ] Review `docs/` and remove or rewrite inherited specs
