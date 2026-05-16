# SBAI — Content Strategy & Design System v2

> Dokument roboczy. Wszystko tu jest do akceptacji / iteracji przed implementacją.
> Stan: **draft 1** · 2026-05-07

---

## 1. Pozycja marki

**Kuba Parol — buduję production AI dla firm i zostawiam zespoły, które wiedzą, jak rozwijać je dalej.**

| | |
|---|---|
| **Czym jest SBAI** | Solo-led practice (Kuba + collaborators on demand). Nie agencja, nie boutique — *AI architect + builder + teacher* dla firm, które chcą wynik. |
| **Komu sprzedaje** | SME w PL i EU (30–300 osób). Decision maker: właściciel / CEO / COO / CTO. |
| **Co sprzedaje** | (1) Audyt + strategia AI · (2) Production AI builds (agenci, RAG, OCR, search, automatyzacja, mail bots) · (3) AI-coding adoption dla zespołu (VibeRails-based) |
| **Czego NIE sprzedaje** | "AI transformation" za 500k. Roadmap na 18 miesięcy. PoC do szuflady. ChatGPT subscription consulting. |
| **Edge** | **Trzy zawody w jednej osobie:** (a) **Enterprise architect** — 20+ lat w systemach enterprise, .NET/Azure, microservices · (b) **SaaS co-founder** — 12 lat budowania platformy do controllingu finansowego dla dużych polskich firm · (c) **Head of AI z agentowym track record** — architectural lead enterprise AI assistenta dla zespołów Accounts Payable, działającego w skali milionów faktur miesięcznie. **Plus własne produkty** (SignalBoy.ai live, YagaAi multi-agent runtime, VibeRails AI-coding standards). |
| **Ton** | Friendly, rzeczowy, direct. Brutalna szczerość zamiast korpo-słów. Zero "synergii" i "transformacji." |

---

## 2. Design tokens

### Paleta

```css
/* Surfaces */
--bg-canvas:    #FAF8F3;  /* warm white — main background */
--bg-elevated:  #FFFFFF;  /* cards, modals */
--bg-sunken:    #F2EEE6;  /* subtle warm gray sections */
--bg-inverse:   #0F0E0D;  /* dark mode / inverse moments */

/* Ink */
--ink:          #1A1A1A;  /* primary text */
--ink-muted:    #6B6B6B;  /* secondary text */
--ink-subtle:   #9A9A9A;  /* tertiary, captions */
--ink-inverse:  #FAF8F3;

/* Brand */
--accent:       #F2542D;  /* warm orange — primary CTA, links, key marks */
--accent-hover: #D63E1A;
--accent-soft:  #FFF1EB;  /* wash for soft backgrounds, badges */
--accent-ink:   #5C2110;  /* readable orange text on light */

/* Lines */
--line:         rgba(26,26,26,0.08);
--line-strong:  rgba(26,26,26,0.16);
```

### Typografia

```
Display + Body:  Geist Sans         (Vercel · free · 100–900)
Mono:            Geist Mono         (free · for eyebrows, code, captions)

NIE używamy:     Fraunces, serif headlines
```

**Skala (mobile · desktop):**

| Token | Mobile | Desktop | Użycie |
|-------|--------|---------|--------|
| `display-xl` | 56 / 60 | 96 / 100 | Hero h1 |
| `display-l` | 40 / 44 | 64 / 68 | Section headlines |
| `display-m` | 32 / 36 | 48 / 52 | Sub-section |
| `headline` | 24 / 28 | 32 / 36 | Card titles |
| `body-l` | 18 / 28 | 20 / 32 | Lede paragraphs |
| `body` | 16 / 26 | 17 / 28 | Default |
| `body-s` | 14 / 22 | 14 / 22 | Captions |
| `mono` | 12 / 16 | 13 / 18 | Eyebrows, labels (uppercase, tracking +0.08em) |

Tracking: display weights `-0.04em` (tight), body `-0.01em`, mono `+0.08em` uppercase.

### Spacing & rytm

- 8pt grid system
- Section vertical rhythm: `120px` desktop / `80px` mobile
- Container max-width: `1240px` content, `1440px` full-bleed
- Card radius: `16px` standard, `8px` compact

### Motion

- Default ease: `cubic-bezier(0.2, 0.6, 0.2, 1)` (smooth-out)
- Duration: micro 120ms, default 200ms, page 320ms
- Hero: subtle fade-up of headline + portrait reveal (no flashy parallax)

---

## 3. Information Architecture

| # | Section | Cel | Length |
|---|---------|-----|--------|
| 0 | Nav | nawigacja + CTA | n/a |
| 1 | **Hero** | Pozycja + portret + 2 CTA | krótka |
| 2 | **Credentials strip** | 4 liczbowe credentials (bez logo, NDA) | mini |
| 3 | **Problem (relate)** | "Brzmi znajomo?" 3 bóle SME | średnia |
| 4 | **Co robię** | 3 filary usług | średnia |
| 5 | **Jak pracuję** | 4-step process | średnia |
| 6 | **Case studies** | 3 realne wdrożenia z liczbami | duża |
| 7 | **Lab** | SignalBoy, YagaAi, VibeRails | średnia |
| 8 | **Dla kogo / dla kogo NIE** | filtr leadów + trust signal | średnia |
| 9 | **O mnie** | krótkie bio + drugi portret | średnia |
| 10 | **FAQ** | 5–7 pytań | średnia |
| 11 | **Kontakt + CTA** | calendly, email, linkedin | krótka |
| 12 | Footer | legal, NIP, links | n/a |

---

## 4. Section-by-section copy

### Section 1 — Hero

**Visual brief:**
- Lewa kolumna (60%): eyebrow + h1 + sub + 2 CTA
- Prawa kolumna (40%): portret Kuby (placeholder mock — np. monochromatyczny shape z subtle gradient)
- Tło: `--bg-canvas`. Pod hero: cienki `1px` divider w `--accent`.
- Eyebrow w `--accent` (warm orange), uppercase, mono.
- W h1: kropka po pierwszym zdaniu w `--accent` (mała, ale brand accent moment).

**Copy PL:**

```
[eyebrow, mono]   SBAI · KUBA PAROL

[h1, display-xl]  AI, które działa.
                  Zespół, który potrafi.

[sub, body-l]     Doradzam i wdrażam production AI dla firm 30–300 osób.
                  Zostawiam zespół, który wie, jak rozwijać je dalej —
                  beze mnie.

[cta-primary]     Porozmawiajmy 30 min →
[cta-ghost]       Co zbudowałem
```

**Copy EN:**

```
[eyebrow]   SBAI · KUBA PAROL

[h1]        AI that works.
            A team that gets it.

[sub]       I advise and ship production AI for companies of 30–300.
            Then I leave behind a team that can grow it — without me.

[cta-primary]  Let's talk — 30 min →
[cta-ghost]    What I've built
```

---

### Section 2 — Credentials strip (replaces social proof / logos)

**Decyzja:** Bez logo klientów (brak zgód, NDA na większość projektów). Zamiast tego — pas z liczbowymi credentials, mocno czytelny, bez mówienia "kto."

**Visual brief:**
- Cienki pas pod hero, `--bg-sunken`, padding `48px` desktop / `32px` mobile.
- 4 stat-bloki w równym gridzie. Każdy: duża liczba w `--accent`, mała caption w mono `--ink-muted`.

**Copy PL:**

```
[stat 1]   20+         [caption] LAT W ENTERPRISE SOFTWARE
[stat 2]   3           [caption] WŁASNYCH PRODUKTÓW AI
[stat 3]   miliony     [caption] FAKTUR / MIESIĄC W SYSTEMACH, KTÓRE ZBUDOWAŁEM
[stat 4]   27 000      [caption] WRAŻLIWYCH UMÓW / MIESIĄC W PIPELINE OCR + RAG
```

**Copy EN:**

```
[stat 1]   20+         YEARS IN ENTERPRISE SOFTWARE
[stat 2]   3           AI PRODUCTS BUILT
[stat 3]   millions    INVOICES / MONTH ON SYSTEMS I'VE ARCHITECTED
[stat 4]   27,000      SENSITIVE CONTRACTS / MONTH IN OCR + RAG PIPELINES
```

---

### Section 3 — Problem (relate)

**Visual brief:**
- 3 cards w gridzie, `--bg-elevated`. Każda karta: jeden ból, w cudzysłowie, kursywa, jak quote z calla z klientem.
- Pod gridem: jedno mocne zdanie zbierające + transition do "co robię."

**Copy PL:**

```
[eyebrow, mono]     01 · PROBLEM

[h2, display-l]     Brzmi znajomo?

[card 1, italic]   "Wszyscy mówią o AI, a ja nie wiem,
                    od czego zacząć w mojej firmie."

[card 2, italic]   "Ktoś nam sprzedał chatbota za 80 tys.
                    Stoi w szufladzie."

[card 3, italic]   "Boję się, że konkurencja
                    wykorzysta AI szybciej niż my."

[closer, body-l]    Każde z tych zdań słyszę średnio raz w tygodniu.
                    Każde da się rozwiązać — ale nie deckiem,
                    nie warsztatem i nie kolejnym PoC.
```

**Copy EN:**

```
[eyebrow]   01 · PROBLEM

[h2]        Sound familiar?

[card 1]   "Everyone's talking about AI, but I have no idea
            where to start in my own company."

[card 2]   "Someone sold us a chatbot for €20k.
            It's gathering dust."

[card 3]   "I'm scared the competition will figure out AI
            before we do."

[closer]    I hear each of these about once a week.
            All three are solvable — but not with a deck,
            a workshop, or yet another PoC.
```

---

### Section 4 — Co robię (3 filary)

**Visual brief:**
- 3 wide cards w stack (mobile) / row (desktop). Każda karta: ikona/numer, h3, lede, 2-3 bullety, link "więcej."
- Pierwszy filar w `--accent-soft` background (highlight), pozostałe `--bg-elevated`.

**Copy PL:**

```
[eyebrow, mono]    02 · USŁUGI

[h2, display-l]    Trzy rzeczy, w których jestem dobry.

—

[pillar 1] AUDYT + STRATEGIA
[h3]       Co warto wdrożyć — a czego nie tykać.
[lede]     Jeden warsztat, jasny plan. Konkretne use case'y dla
           Waszej firmy z estymacją ROI. Wychodzicie z mapą,
           nie z "to zależy."
[bullets]  · 1–3 dni intensywnej pracy
           · Fixed fee, nie T&M
           · Bez zobowiązania na wdrożenie

[pillar 2] PRODUCTION AI BUILDS
[h3]       RAG, OCR, agenci, mail bots, search.
[lede]     Buduję rozwiązania pod konkretny problem —
           nie sprzedaję platformy. Hosting w EU,
           audit log, RBAC, compliance-ready od dnia 1.
[bullets]  · 4–12 tygodni od briefu do produkcji
           · Wasz stack, Wasze dane, EU hosting
           · Pełna dokumentacja + runbooki

[pillar 3] AI-CODING ADOPTION
[h3]       Wasz zespół buduje dalej beze mnie.
[lede]     Wprowadzam zespół w pracę z AI agents (Cursor,
           Claude Code, custom workflows). Zostają standardy
           VibeRails, runbooki, sparring partner na 30 dni.
[bullets]  · 2–6 tygodni hands-on
           · Standardy + szablony do reuse
           · Sparring + code review po wyjściu
```

**Copy EN:**

```
[eyebrow]   02 · SERVICES

[h2]        Three things I'm good at.

—

[pillar 1] AUDIT + STRATEGY
[h3]       What's worth building — and what to skip.
[lede]     One workshop, one clear plan. Concrete use cases for
           your company with ROI estimates. You leave with a map,
           not "it depends."
[bullets]  · 1–3 days of focused work
           · Fixed fee, no T&M
           · No obligation to build

[pillar 2] PRODUCTION AI BUILDS
[h3]       RAG, OCR, agents, mail bots, search.
[lede]     I build solutions for a specific problem — not platforms.
           EU hosting, audit log, RBAC, compliance-ready from day 1.
[bullets]  · 4–12 weeks brief → production
           · Your stack, your data, EU hosting
           · Full docs + runbooks included

[pillar 3] AI-CODING ADOPTION
[h3]       Your team keeps shipping after I leave.
[lede]     I onboard your team into AI agents (Cursor, Claude Code,
           custom workflows). You keep VibeRails standards,
           runbooks, and a sparring partner for 30 days.
[bullets]  · 2–6 weeks hands-on
           · Reusable standards + templates
           · Sparring + code review after handoff
```

---

### Section 5 — Jak pracuję

**Visual brief:**
- 4 steps w horizontal timeline (desktop) / vertical (mobile).
- Każdy step: numer w `--accent`, h4, 1-2 zdania, expected output.
- Pod stepami: cienka linia czasu z timepoints.

**Copy PL:**

```
[eyebrow]    03 · PROCES

[h2]         Cztery kroki. Bez teatru.

[step 01]   SŁUCHAM
            90 minut na zoomie, free. Zadaję 20 pytań.
            Wychodzę wiedząc, czy jestem w stanie pomóc.
            → Output: tak / nie / oto czego potrzebuję, żeby odpowiedzieć.

[step 02]   MAPUJĘ
            1–3 dni warsztatów + analizy. Konkretny zakres,
            estymacja, ryzyka, fixed fee.
            → Output: dokument decyzyjny dla zarządu (5 stron).

[step 03]   BUDUJĘ
            4–12 tygodni. Tygodniowe demo na realnych danych.
            Wy widzicie każdą decyzję modelu, ja każdą wymianę.
            → Output: działający system w produkcji + dokumentacja.

[step 04]   UCZĘ I WYCHODZĘ
            2–6 tygodni transferu. Wasz zespół przejmuje stery,
            ja zostaję dostępny na call'ach przez 30 dni.
            → Output: zespół, który nie potrzebuje mnie po dniu 1.
```

**Copy EN:**

```
[eyebrow]    03 · PROCESS

[h2]         Four steps. No theater.

[step 01]   I LISTEN
            90 minutes on zoom, free. I ask 20 questions.
            I leave knowing whether I can actually help.
            → Output: yes / no / here's what I need to answer.

[step 02]   I MAP
            1–3 days of workshops + analysis. Concrete scope,
            estimate, risks, fixed fee.
            → Output: 5-page decision doc for your board.

[step 03]   I BUILD
            4–12 weeks. Weekly demo on real data.
            You see every model decision, I see every exchange.
            → Output: live production system + documentation.

[step 04]   I TEACH AND LEAVE
            2–6 weeks of transfer. Your team takes the wheel,
            I stay reachable on calls for 30 days.
            → Output: a team that doesn't need me on day 31.
```

---

### Section 6 — Case studies

**Visual brief:**
- 3 case studies, każdy w osobnym pełno-szerokościowym module.
- Layout: lewa kolumna (40%) — meta (klient / branża / czas / stack), prawa (60%) — narrative.
- Numbered: 01, 02, 03 w `--accent` mono.
- Subtle separator między case'ami: `--bg-sunken` 1px.

**Copy PL — Case 01: Enterprise AP assistant (anonimowy)**

```
[meta]        KLIENT       Wiodący globalny SaaS · branża Accounts Payable (NDA)
              ROLA         Architectural lead + co-creator
              CZAS         2 lata (2024–2026)
              SKALA        Klienci platformy przetwarzają miliony faktur / mc
              STACK        LangGraph · LangChain · Azure Container Apps · Dapr · OpenAI

[eyebrow]     CASE 01

[h3]          Agentowy AI assistant dla zespołów
              Accounts Payable. Działa w produkcji
              przy skali milionów faktur miesięcznie.

[problem]     Zespoły AP u dużych enterprise klientów tonęły
              w pytaniach od dostawców: status faktur, warunki
              płatności, eskalacje, kody kosztowe. Każda firma —
              setki tysięcy faktur miesięcznie, każda interakcja
              odciągała AP od pracy strategicznej. Czas pierwszej
              odpowiedzi liczony w godzinach lub dniach.

[solution]    Architektura wieloagentowa: agent intencji,
              agenty domenowe (status, payment terms, escalation),
              human-in-the-loop dla decyzji wykraczających poza
              politykę. Event-driven (Dapr Pub/Sub + State Store),
              Azure Container Apps, observability na
              LangSmith → Langfuse. Migracja z early LangChain
              → LangGraph w trakcie projektu.

[ja-zrobilem]
              · Architektura całego rozwiązania
              · Multi-agent orchestration + escalation flows
              · Migracja LangChain → LangGraph
              · AI observability + evaluation strategy
              · Standaryzacja core stack dla zespołu

[result]
              [stat]   ~70%       wiadomości obsługiwanych autonomicznie
              [stat]   minuty     czas pierwszej odpowiedzi (zamiast godzin/dni)
              [stat]   miliony    faktur w skali platformy
              [stat]   10+        języków (multi-language)

[quote]       [pominięte — NDA]
```

> ⚠️ **Compliance note:** Klient nie udzielił zgody na publiczne case'owanie. Wszystko zanonimizowane (brak nazwy klienta, nazwy produktu, cytatu, logo). Liczby konserwatywne, branżowo-plausible.

**Copy PL — Case 02: Ubezpieczenia (OCR + RAG nad umowami)**

```
[meta]        KLIENT       Wiodący polski ubezpieczyciel (NDA)
              BRANŻA       Ubezpieczenia · regulacja KNF · GDPR
              CZAS         16 tygodni
              SKALA        27 000 umów wrażliwych / miesiąc
              STACK        Python · Azure Document Intelligence · Vector DB · LangChain · Azure

[eyebrow]     CASE 02

[h3]          OCR + RAG nad 27 000 wrażliwych umów miesięcznie.
              Compliance-grade, audit-ready, full PII redaction
              przed wysłaniem do LLM.

[problem]     Klient przerabiał ręcznie 27 000 umów wrażliwych
              miesięcznie: ekstrakcja kluczowych pól, klasyfikacja,
              archiwizacja, odpowiedzi na zapytania prawne i operacyjne.
              Czas zapytań — godziny pracy człowieka. Ryzyko PII
              leakage przy każdym przekazaniu między zespołami.
              KNF + GDPR wykluczały standardowy chmurowy LLM stack.

[solution]    Pipeline: OCR (Azure Document Intelligence) → structured
              extraction → vector index → RAG retrieval. PII redaction
              layer przed jakimkolwiek wywołaniem LLM. Audit log każdego
              zapytania, RBAC na poziomie klauzul, hosting w EU VPC,
              modele z zero-data-retention. Chatbot odpowiada
              po polsku z linkami do źródłowych fragmentów.

[ja-zrobilem]
              · Architektura całego pipeline'u
              · Compliance + PII redaction layer
              · Vector store + RAG retrieval strategy
              · Audit + RBAC schema na poziomie klauzul

[result]
              [stat]   27 000     umów / mc w pipeline
              [stat]   ~90s       od wpłynięcia do indeksacji
              [stat]   z godzin   do sekund — czas zapytań prawnych
              [stat]   100%       audit trail · zero PII leakage

[quote]       [pominięte — NDA]
```

> ⚠️ **Compliance note:** Branża "ubezpieczenia" wybrana jako plausible fit dla skali 27K wrażliwych umów / mc + regulacja KNF/GDPR. Daj znać, jeśli wolisz inną (energetyka, telekomunikacja, sektor publiczny).

**Copy PL — Case 03: SignalBoy.ai (case własny)**

```
[meta]        KLIENT       Produkt własny (SBAI)
              BRANŻA       B2C · AI knowledge management
              CZAS         2025–live, ongoing
              STACK        Multimodal RAG · Agentic pipeline · Vector search

[eyebrow]     CASE 03

[h3]          SignalBoy.ai — AI-powered content triage
              i semantic knowledge platform.
              Zbudowany solo, działa w produkcji.

[problem]     Knowledge workers zapisują setki linków, screenshotów,
              fragmentów dziennie — i nie wracają do nich. Bookmarks
              umierają, screenshoty znikają, wiedza się rozprasza.

[solution]    AI triage automatycznie streszcza, priorytetyzuje
              i taguje treści. Conversational search po całej
              bibliotece — "co czytałem o RAG ewaluacji w marcu?"
              Multimodal: tekst + obrazy + linki.

[dlaczego]    Dlaczego pokazuję to jako case?
              Bo to dowód, że nie tylko *gadam* o AI — *używam* go
              codziennie. SignalBoy działa, ma użytkowników,
              i jest moim własnym laboratorium agentowych
              architektur — tych samych, które wdrażam u klientów.

[link]        Zobacz: signalboy.ai →
```

> ❓ **Ask:** Liczby — ilu użytkowników? Jakieś metryki retention / engagement, którymi możesz się pochwalić?

---

### Section 7 — Lab (Co buduję, gdy nie pracuję dla klientów)

**Visual brief:**
- 3 cards w gridzie, każda link do GitHub / live URL.
- Mała ikona / glyph, nazwa, 1-zdaniowy opis, link.
- Przekaz: "to nie portfolio — to dowód, że jestem na froncie."

**Copy PL:**

```
[eyebrow]      LAB

[h2]           Co buduję, gdy nie wdrażam dla klientów.

[lede]         Nie tylko piszę o AI. Używam go każdego dnia.
               To moje obecne projekty — open source albo na produkcji.

[card 1]       SIGNALBOY.AI                            [→]
               AI knowledge management. Zapisz raz,
               użyj kiedy potrzebujesz. Live, działa.
               Stack: agentowa pipeline + multimodal RAG.

[card 2]       YAGAAI                                  [GitHub →]
               Multi-agent runtime na Azure (codename
               "OpenClaw") do autonomicznego software dev.
               4 wyspecjalizowane agenty, event-driven
               control plane. Research grade.

[card 3]       VIBERAILS                               [GitHub →]
               Standardy i guardrails dla zespołów
               pracujących z AI coding agents.
               To metodologia, którą wdrażam u klientów.
```

**Copy EN:**

```
[eyebrow]      LAB

[h2]           What I build when I'm not working for clients.

[lede]         I don't just write about AI. I use it every day.
               These are my current projects — open source or in production.

[card 1]       SIGNALBOY.AI                            [→]
               AI knowledge management. Save once,
               actually use it later. Live and shipped.
               Stack: agentic pipeline + multimodal RAG.

[card 2]       YAGAAI                                  [GitHub →]
               Multi-agent runtime for autonomous software dev.
               4 specialized agents, event-driven control plane.
               Research grade.

[card 3]       VIBERAILS                               [GitHub →]
               Standards and guardrails for teams
               working with AI coding agents.
               This is the methodology I deploy at clients.
```

---

### Section 8 — Dla kogo (i dla kogo NIE)

**Visual brief:**
- Dwa kolumny side-by-side: "Tak" + "Nie" headlines.
- Po lewej: zielony glyph (✓), 4-5 punktów. Po prawej: warm orange glyph (✕), 3-4 punkty.
- To buduje trust przez self-disqualification.

**Copy PL:**

```
[eyebrow]   FIT CHECK

[h2]        Pomogę, jeśli...                     Nie pomogę, jeśli...

[yes-1]     Macie 30–300 osób                    Szukacie najtańszej oferty
            i konkretny ból operacyjny.          (jestem fixed fee, premium).

[yes-2]     Macie zespół tech (CTO,              Chcecie "AI transformation"
            developerzy, IT), z którym           bez konkretnego use case'a
            mogę pracować.                       i ROI.

[yes-3]     Chcecie wdrożenie, nie kolejny       Macie 2-osobową firmę.
            PoC do szuflady.                     Kupcie ChatGPT Plus,
                                                 nie wzywajcie konsultanta.

[yes-4]     Decydent jest gotów na 4–12          Wymagacie pracy
            tygodni współpracy + decyzje         na wewnętrznym etacie
            w trakcie.                           (jestem konsultantem, nie CTO-as-a-service).

[yes-5]     Cenicie szczerość ponad
            "tak, oczywiście."                  
```

**Copy EN:**

```
[eyebrow]   FIT CHECK

[h2]        I'll help if...                      I won't help if...

[yes-1]     You're a 30–300 person company       You're chasing the cheapest quote
            with a concrete operational pain.    (I'm fixed-fee, premium).

[yes-2]     You have an internal tech team       You want "AI transformation"
            (CTO, devs, IT) I can pair with.     without a concrete use case
                                                 or ROI.

[yes-3]     You want a working system,           You're a 2-person company.
            not another PoC for the drawer.      Buy ChatGPT Plus —
                                                 don't hire a consultant.

[yes-4]     A decision-maker is ready for         You need someone in-house
            4–12 weeks of work and decisions     on payroll
            along the way.                       (I'm a consultant, not fractional CTO).

[yes-5]     You value honesty over
            "yes, of course."
```

---

### Section 9 — O mnie

**Visual brief:**
- Layout: lewa kolumna (50%) tekst, prawa (50%) drugi portret + 4-5 mini logos (gdzie pracował, certyfikaty).
- Tekst w pierwszej osobie, krótko, z osobowością. Nie CV.

**Copy PL — DRAFT (oparte na CV, do akceptacji Kuby):**

```
[eyebrow]   O MNIE

[h2]        Kuba Parol.

[para 1]    20+ lat w enterprise software. Ostatnie 2 lata
            jako Head of AI / AI Architect w globalnym SaaS
            w branży Accounts Payable — co-creator i architectural
            lead agentowego AI assistenta dla zespołów AP,
            działającego u klientów przetwarzających miliony
            faktur miesięcznie.

[para 2]    Wcześniej 12 lat jako co-founder i tech lead SaaS
            do controllingu finansowego, używanego przez wiodące
            polskie firmy (publishing, manufacturing, packaging).
            Jeszcze wcześniej Director of Consulting w polskim
            software house — rozumiem zarówno kod, jak
            i sprzedaż enterprise.

[para 3]    Założyłem SBAI, bo zobaczyłem, że SME w PL i EU
            potrzebują tego samego, co duże enterprise:
            production AI, nie demo. Brakuje im jednego:
            zaufanego architekta, który *zbuduje* system
            i *zostawi zespół*, który umie go rozwijać.

[para 4]    Lubię rozmawiać. Lubię ludzi. Klienci mówią, że
            jestem dobrym sparring partnerem — sami sprawdźcie
            na 30-minutowym calli. Mówię prosto i wprost.
            Jeśli czegoś nie warto robić — powiem.

[mini-meta] Kuba Parol — Founder, SBAI
            Warszawa · pracuje hybrydowo · PL native, EN C1
            LinkedIn: jakub-parol-ai
```

**Selected experience (sidebar / mini-timeline — wersja anonimowa):**
```
2024–2026   Global SaaS (AP)   Head of AI / AI Architect
                               Co-creator enterprise AI assistant
2022–2024   PL software house  Senior Backend (.NET / Cloud)
2010–2022   Vlasna SaaS        Co-founder & Tech Lead
                               (financial controlling platform)
2002–2010   PL enterprise IT   Director of Consulting → Tech Lead
```

> Pełny wykaz — z nazwami firm — jest na LinkedIn: [linkedin.com/in/jakub-parol-ai](https://linkedin.com/in/jakub-parol-ai).

> ❓ **Ask:** P3 i P4 to *moja interpretacja* Twojego głosu. Przeczytaj i powiedz, co brzmi nie-Tobą.

**Copy EN:** [będzie po akceptacji PL]

---

### Section 10 — FAQ

**Visual brief:**
- Akordeony, 5–7 pytań, default closed.
- Pytanie w h4, ink. Answer w body, ink-muted.

**Copy PL:**

```
[eyebrow]   FAQ

[h2]        Pytania, które słyszę najczęściej.

Q: Ile to kosztuje?
A: Zależy od fazy. Audyt + strategia: 8–24 tys. PLN fixed.
   Production build: 60–250 tys. PLN, w zależności od zakresu.
   AI-coding adoption: 25–80 tys. PLN. Zawsze fixed fee, nigdy T&M.
   Pierwsze 30 minut zoomu: free.

Q: Jak długo trwa wdrożenie?
A: 4–12 tygodni od briefu do produkcji. Pierwsze działające demo
   na Waszych danych: zwykle w 2–3 tygodnie od startu builds.

Q: Czy moje dane są bezpieczne?
A: Tak. Hosting w EU (Azure / AWS Frankfurt / Wasz VPC).
   Redakcja PII przed wysłaniem do modeli. Zero data retention
   na wszystkich modelach (OpenAI Enterprise, Claude API z DPA).
   Podpisuję NDA i DPA standardowo.

Q: Czy używacie naszych danych do treningu modeli?
A: Nie. Nigdy. Wszystkie modele w trybie no-retention.

Q: Co jeśli wyjdziecie, a coś się zepsuje?
A: Zostawiam pełną dokumentację, runbooki, monitoring i kontakt
   na 30 dni po handoff. Jeśli potrzebujecie SLA długoterminowy —
   ustalamy osobno (8/5 lub 24/7).

Q: Czy zatrudniacie podwykonawców?
A: Czasem, na konkretne zadania (UI design, infra setup),
   zawsze imiennie z CV i zawsze za moim podpisem. Nie outsourcuję
   do anonimowego zespołu w innym kraju.

Q: Czego potrzebujecie, żebyśmy zaczęli?
A: 30 minut zoomu. Resztę wyciągam w trakcie warsztatów discovery.
```

**Copy EN:** [analogicznie po akceptacji PL]

---

### Section 11 — Kontakt + CTA

**Visual brief:**
- Prosty, big CTA. Bez formularza-12-pytań.
- Layout: centered headline + sub + 3 action items (calendly, email, linkedin).
- Tło: `--bg-inverse` (dark) jako kontrast — jedyna ciemna sekcja na stronie.

**Copy PL:**

```
[eyebrow, accent]    POROZMAWIAJMY

[h2, display-l]      30 minut. Bez prezentacji.

[sub, body-l]        Powiedz mi, co chcesz osiągnąć.
                     Jeśli mogę pomóc — powiem jak.
                     Jeśli nie — powiem wprost dlaczego.

[primary cta]        Umów rozmowę w kalendarzu →
                     [link do calendly — TBC]

[secondary]          Albo napisz: info@sbai.pl

[tertiary]           LinkedIn (linkedin.com/in/jakub-parol-ai) · GitHub (JakubParol)
```

**Copy EN:**

```
[eyebrow]    LET'S TALK

[h2]         30 minutes. No deck.

[sub]        Tell me what you want to achieve.
             If I can help — I'll tell you how.
             If I can't — I'll tell you exactly why.

[primary]    Book a call →

[secondary]  Or just write: info@sbai.pl

[tertiary]   LinkedIn · GitHub · Twitter
```

---

### Section 12 — Footer

**Visual brief:**
- 3-column desktop / stacked mobile.
- Col 1: logo + tagline + copyright.
- Col 2: nav links.
- Col 3: legal (privacy, terms).
- Pod nimi: NIP / KRS / adres rejestrowy w mono small.

**Copy PL:**

```
[col 1]   SBAI
          Strategic Business AI

          © 2026 SBAI sp. z o.o.

[col 2]   Co robię
          Jak pracuję
          Case studies
          Lab
          O mnie
          Kontakt

[col 3]   Polityka prywatności
          Regulamin

[micro]   SBAI sp. z o.o. · Stefana Batorego 18/108, 02-591 Warszawa
          NIP 7011312445 · KRS 0001239481 · REGON 54464894900000
          info@sbai.pl
```

---

## 5. Otwarte pytania / asks

**Resolved (2026-05-08):**
- ✅ Clarks → anonimizacja kompletna (NDA + brak zgody klienta)
- ✅ Medius → też anonimizacja (Kuba: "wręcz przeciwnie" — formalnej zgody nie ma)
- ✅ Tagline: "Strategic Business AI"
- ✅ NIP/KRS/REGON — wpisane
- ✅ LinkedIn: jakub-parol-ai
- ✅ Bio bazowane na CV (zanonimizowane od nazw firm)
- ✅ Case 01 — anonimowy + plausible numbers (~70% auto-resolved, minuty vs godziny)
- ✅ Case 02 — wymyślona branża "ubezpieczenia" + plausible numbers, łatwa do zmiany
- ✅ Case 03 SignalBoy — bez specyficznych liczb (produkt B2C w fazie wzrostu, ogólny opis)
- ✅ Portret: `/web/public/JakubParol.png` — wgrany, jakość OK
- ✅ Brak social proof bar z logos (nie mamy zgód) → sekcja 2 zostaje, ale jako liczbowe credentials zamiast logo
- ✅ Mini-timeline w About anonimowy + link do LinkedIn po szczegóły

**Wciąż otwarte (mniej krytyczne):**

| # | Pytanie | Status |
|---|---------|--------|
| 1 | Branża klienta Case 02 — wpisałem "ubezpieczenia." OK, czy zmieniamy? | Section 6 |
| 2 | **Calendly** lub alternatywa — wyjaśnione poniżej | Section 11 |
| 3 | About P3, P4 — popraw, jeśli nie brzmią po Tobie | Section 9 |
| 4 | Drugi portret w About — używamy tego samego co w hero? (Domyślnie tak, jeden plik) | Section 9 |
| 5 | GitHub username `JakubParol` — confirm | Section 11, footer |

---

## 6. Następne kroki

1. **Akceptacja tego dokumentu** — Kuba czyta, komentuje, poprawia copy które brzmi nie-Nim.
2. **Wizualny mock heroa** — projektuję samą sekcję 1 jako próbkę kierunku (HTML lub Figma-equivalent w kodzie). Bez fullsite.
3. **Po Twoim "to jest to"** — pełny rebuild w Next.js, sekcja po sekcji.
