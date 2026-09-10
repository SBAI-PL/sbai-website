# Logo i favicon SBAI

Aktualny zestaw **v1.1, 10.09.2026**: cztery warianty logo oraz zatwierdzony favicon **03 - Punkt w kadrze**, odtworzony w Inkscape.

| Materiał                                  | Gdzie go znaleźć                                                                                                       |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Instrukcja PDF, 7 stron                   | [SBAI_Brand_Guide.pdf](branding/SBAI_Brand_Package/08_Guide/SBAI_Brand_Guide.pdf)                                      |
| Wszystkie pliki i opis formatów           | [SBAI_Brand_Package](branding/SBAI_Brand_Package/) / [START HERE](branding/SBAI_Brand_Package/00_START_HERE.txt)       |
| Logo: źródła Inkscape                     | [01_Inkscape_Masters](branding/SBAI_Brand_Package/01_Inkscape_Masters/)                                                |
| Logo bez tła: jasne i ciemne zastosowania | [06_Transparent](branding/SBAI_Brand_Package/06_Transparent/)                                                          |
| Logo do druku: PDF CMYK                   | [07_Print_CMYK](branding/SBAI_Brand_Package/07_Print_CMYK/)                                                            |
| Favicon: źródła, SVG, ICO, PNG, PDF i EPS | [09_Favicon](branding/SBAI_Brand_Package/09_Favicon/) / [instrukcja](branding/SBAI_Brand_Package/09_Favicon/README.md) |
| Podgląd faviconu i małych rozmiarów       | [SBAI_Favicon_Overview.png](branding/SBAI_Brand_Package/09_Favicon/SBAI_Favicon_Overview.png)                          |

Paleta: granat **#001C38**, pomarańcz **#FF6D1F**, biel **#FFFFFF**. Materiały produkcyjne są w rozpakowanej finalnej paczce. Robocze propozycje i dodatkowy ZIP usunięto podczas porządkowania repo.

## Ikony używane przez stronę

- [src/app/icon.svg](../src/app/icon.svg) - podstawowy favicon na granatowym tle.
- [src/app/favicon.ico](../src/app/favicon.ico) - 16, 32, 48, 64, 128 i 256 px w jednym pliku.
- [src/app/apple-icon.png](../src/app/apple-icon.png) - Apple Touch, 180 × 180 px.

Next.js dodaje linki do tych plików automatycznie na `/`, `/pl/` i `/en/`. Wersje biała i przezroczyste są dostępne jako dodatkowe eksporty. Przy zmianie znaku należy zaktualizować źródła w paczce i kopie używane przez stronę.

Ukierunkowana kontrola plików, bez builda: `node --test tests/favicon.test.mjs`.

## Logo podłączone do strony

Nagłówek i stopka używają wspólnego komponentu [BrandLogo](../src/app/brand-logo.tsx). Zastępuje on wcześniejszy znak składany z tekstu i CSS. Kopie w `public/assets/brand/` są identyczne bajtowo z finalnymi plikami z `06_Transparent/SVG`.

| Miejsce                 | Plik                                   | Szerokość całej planszy SVG |
| ----------------------- | -------------------------------------- | --------------------------- |
| Nagłówek, desktop       | `SBAI_02_navy_symbol_transparent.svg`  | 192 px                      |
| Nagłówek, telefon       | `SBAI_02_navy_symbol_transparent.svg`  | 160 px                      |
| Stopka, desktop         | `SBAI_01_navy_tagline_transparent.svg` | 312 px                      |
| Stopka, ekran do 600 px | `SBAI_02_navy_symbol_transparent.svg`  | 192 px                      |

Wszystkie miejsca z logo mają ciemne tło, dlatego użyte są przezroczyste warianty navy. Wbudowane pole ochronne pozostaje w SVG; obraz nie jest kadrowany, rozciągany ani przemalowywany przez CSS. Na małych ekranach stopka używa znaku bez podpisu, zamiast pomniejszać podpis poniżej zalecanego rozmiaru.

Weryfikacja integracji: wygląd desktop/mobile, brak poziomego przepełnienia przy 320 px, poprawne przełączanie języka, zgodność dwóch kopii SVG z paczką oraz HTTP 200 i identyczność faviconów na `/`, `/pl/`, `/en/`. `node --test tests/favicon.test.mjs`: 2/2 testy przechodzą. Favicony w `src/app/` pozostawiono bez zmian. Kontrola była ukierunkowana, bez pełnego builda i bez publikacji.
