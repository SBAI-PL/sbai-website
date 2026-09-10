# Linki i przyciski SBAI

Wspólna implementacja: `src/app/actions.tsx` i sekcja „Shared interaction system” w `src/app/globals.css`. Style sekcji określają odstępy, a nie własne kolory i rozmiary linków.

| Wariant | Zastosowanie | Zachowanie |
| --- | --- | --- |
| Primary | Główna akcja kontaktowa | Pomarańczowe wypełnienie, ciemny tekst; hover zmienia odcień wypełnienia. |
| Secondary | Alternatywna akcja i przycisk menu | Ciemne tło i ramka; hover zmienia tekst, ikonę i ramkę na pomarańczowe. |
| Text | Usługi, produkty, GitHub, LinkedIn, stopka | Pomarańczowy tekst i strzałka; hover podkreśla etykietę. |
| Nav | Nawigacja i wybór języka | Jasny tekst; hover nadaje mu pomarańczowy kolor i podkreślenie. |
| Display | Główny adres e-mail w kontakcie | Większa typografia, wspólna paleta i strzałka; hover wyróżnia dolną ramkę. |

- Primary i secondary mają wspólną geometrię: 60 px wysokości; kompaktowy wariant w nagłówku i menu — 44 px.
- Linki tekstowe i nawigacja mają minimum 44 px wysokości obszaru klikalnego.
- Focus klawiatury jest widocznym pomarańczowym obrysem. Ikony są dekoracyjne dla czytników ekranu.
- Strzałka przy akcji: ↗; przy powrocie na górę: ↑. Nawigacja nie ma dodatkowych strzałek.
- Linki zewnętrzne otwierają się w tej samej karcie. Kontakt pozostaje mailto.
- Hover i active nie przesuwają elementów, nie powiększają ich i nie animują długości linii. Dotyczy to również kart.
- Logo używa zatwierdzonych SVG z finalnej paczki marki i wspólnego focusu. Warianty, wielkości i pole ochronne opisuje `docs/brand-assets.md`.

Zweryfikowano menu (otwarcie, Escape, przywrócenie fokusu i zamknięcie po nawigacji), kotwice, FAQ klawiaturą, jednakowe rozmiary przycisków, tekstowe linki 14 px / 44 px oraz brak przepełnień w PL/EN przy szerokości 320 px. Build i siedem testów statycznego eksportu przechodzą.
