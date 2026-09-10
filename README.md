# SBAI — SmartBusiness AI

Dwujęzyczna strona SBAI sp. z o.o. w Next.js, eksportowana statycznie. Trasy: `/` (PL), `/pl/` (alias PL), `/en/` (EN).

## Lokalny podgląd

```sh
npm ci
npm run dev -- --hostname 127.0.0.1 --port 3010
```

Podgląd: http://127.0.0.1:3010/. Zależności instaluj przy pierwszym uruchomieniu lub zmianie lockfile.

## Kontrole

Favicony można sprawdzić bez builda:

```sh
node --test tests/favicon.test.mjs
```

Eksport i testy wygenerowanej strony:

```sh
npm run build
node --test tests/site.test.mjs
```

`out/` powstaje podczas builda i nie jest źródłem strony. Workflow `.github/workflows/pages.yml` publikuje ten eksport. Domena jest ustawiona w `public/CNAME`.

## Struktura

- `src/app/` — strona PL/EN, nawigacja, wspólne akcje, logo, favicony i metadane.
- `public/assets/` — wyłącznie zasoby używane przez stronę.
- `docs/branding/SBAI_Brand_Package/` — zatwierdzone źródła i eksporty marki; część służy jako wzorzec dla testów faviconów.
- `tests/` — ukierunkowane testy eksportu i ikon.

## Dokumentacja

- [Treść i oferta](docs/content.md)
- [Linki i przyciski](docs/interaction-patterns.md)
- [Logo i favicony](docs/brand-assets.md)

## Porządek w repo

`node_modules/`, `.next/`, `out/`, `output/`, raporty testowe, lokalne cache i `next-env.d.ts` są generowane i ignorowane przez Git. Next.js odtwarza `next-env.d.ts` podczas uruchamiania.

Robocze grafiki, propozycje logo i eksporty zapisuj w `output/`. Do `public/assets/` trafiają tylko zasoby używane przez stronę. Finalna paczka marki jest przechowywana rozpakowana; dodatkowe ZIP-y i archiwum propozycji nie są wersjonowane.

Lokalnych `.env` nie commitujemy. Przykładowe szablony `.env.example` mogą być wersjonowane. Lockfile `package-lock.json` pozostaje w repo.
