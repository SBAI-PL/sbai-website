# Favicon SBAI - Punkt w kadrze

Zatwierdzony kierunek **03**, odtworzony jako wektor w **Inkscape 1.4.4**. Wersja produkcyjna ma jednolite kolory i geometrię dopasowaną do małych rozmiarów.

## Pliki

| Folder / plik | Zastosowanie |
| --- | --- |
| [01_Inkscape_Masters](01_Inkscape_Masters/) | Cztery edytowalne SVG z warstwami. |
| [02_SVG](02_SVG/) | Gotowe SVG: Navy, White, On_Dark_Transparent i On_Light_Transparent. |
| [03_PNG](03_PNG/) | Warianty z tłem: 16, 32, 48, 64, 128, 180, 192, 256, 512 i 1024 px. Przezroczyste: 256 i 512 px. |
| [favicon.ico](favicon.ico) | Sześć osobnych obrazów: 16, 32, 48, 64, 128 i 256 px, bez przeskalowania po eksporcie. |
| [04_PDF_RGB](04_PDF_RGB/) / [05_EPS](05_EPS/) | Wektorowe warianty granatowy i biały, kolory RGB. |
| [SBAI_Favicon_Overview.png](SBAI_Favicon_Overview.png) | Porównanie wersji i podglądy małych rozmiarów. |

## Konstrukcja

- Plansza 64 × 64 jednostki; margines 8 jednostek.
- Dwa ramiona o grubości 8; centralny kwadrat 16 × 16.
- Dla 16 × 16 px: margines i ramiona po 2 px, punkt 4 × 4 px.
- Granat `#001C38`, pomarańcz `#FF6D1F`, biel `#FFFFFF`.
- Wszystkie kształty są wypełnieniami. Brak bitmap, fontów, filtrów i obrysów w SVG.

Wariant **Navy** jest podstawowym faviconem strony. **White** ma granatowe narożniki na bieli. Wersje transparentne zachowują te same dwa kolory narożników i pomarańczowy punkt. Podłoże faviconu nie zmienia się automatycznie wraz z motywem przeglądarki.

## Next.js

Kopie produkcyjne znajdują się w `src/app/icon.svg`, `src/app/favicon.ico` oraz `src/app/apple-icon.png` (180 × 180 px). Konwencje Next.js dodają linki do ikon na `/`, `/pl/` i `/en/`.

Po zmianie mastera należy ponownie wyeksportować rozmiary, odświeżyć ICO oraz kopie w aplikacji. Kontrola zgodności: `node --test tests/favicon.test.mjs` z katalogu głównego repozytorium.

PNG powstały w Inkscape z docelowym rozmiarem eksportu. Kontener ICO łączy gotowe PNG bez ponownego skalowania. PDF/EPS faviconu są w RGB; profilowane pliki CMYK głównego logo znajdują się w `07_Print_CMYK`.
