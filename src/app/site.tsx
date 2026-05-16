import type { ReactNode } from "react";

type Locale = "pl" | "en";

const legal = {
  email: "info@sbai.pl",
  phone: "+48 790 471 396",
  phoneHref: "+48790471396",
  address: "Stefana Batorego 18/108, 02-591 Warszawa",
  nip: "7011312445",
  krs: "0001239481",
  regon: "544648949",
  linkedin: "https://www.linkedin.com/in/jakub-parol-ai",
  github: "https://github.com/JakubParol",
};

const content = {
  pl: {
    nav: ["Co robię", "Proces", "Case studies", "Lab", "O mnie", "Kontakt"],
    navHref: ["#services", "#process", "#cases", "#lab", "#about", "#contact"],
    langHref: "/en/",
    langLabel: "EN",
    hero: {
      eyebrow: "SBAI · Kuba Parol",
      title: ["AI, które działa.", "Zespół, który potrafi."],
      lead:
        "Doradzam i wdrażam production AI dla firm 30-300 osób. Zostawiam zespół, który wie, jak rozwijać je dalej - beze mnie.",
      primary: "Porozmawiajmy 30 min",
      secondary: "Co zbudowałem",
    },
    stats: [
      ["20+", "lat w enterprise software"],
      ["3", "własne produkty AI"],
      ["miliony", "faktur / miesiąc w systemach, które budowałem"],
      ["27 000", "wrażliwych umów / miesiąc w OCR + RAG"],
    ],
    problem: {
      kicker: "01 · Problem",
      title: "Brzmi znajomo?",
      cards: [
        "Wszyscy mówią o AI, a ja nie wiem, od czego zacząć w mojej firmie.",
        "Ktoś nam sprzedał chatbota za 80 tys. Stoi w szufladzie.",
        "Boję się, że konkurencja wykorzysta AI szybciej niż my.",
      ],
      close:
        "Każde z tych zdań słyszę regularnie. Każde da się rozwiązać - ale nie deckiem, nie warsztatem i nie kolejnym PoC.",
    },
    services: {
      kicker: "02 · Usługi",
      title: "Trzy rzeczy, w których jestem dobry.",
      items: [
        {
          label: "Audyt + strategia",
          title: "Co warto wdrożyć - a czego nie tykać.",
          lead:
            "Jeden warsztat, jasny plan. Konkretne use case'y dla Waszej firmy z estymacją ROI. Wychodzicie z mapą, nie z 'to zależy'.",
          bullets: ["1-3 dni intensywnej pracy", "Fixed fee, nie T&M", "Bez zobowiązania na wdrożenie"],
        },
        {
          label: "Production AI builds",
          title: "RAG, OCR, agenci, mail boty, search.",
          lead:
            "Buduję rozwiązania pod konkretny problem - nie sprzedaję platformy. Hosting w EU, audit log, RBAC, compliance-ready od dnia 1.",
          bullets: ["4-12 tygodni od briefu do produkcji", "Wasz stack, Wasze dane", "Dokumentacja + runbooki"],
        },
        {
          label: "AI-coding adoption",
          title: "Wasz zespół buduje dalej beze mnie.",
          lead:
            "Wprowadzam zespół w pracę z AI agents: Cursor, Claude Code, custom workflows. Zostają standardy, runbooki i sparring.",
          bullets: ["2-6 tygodni hands-on", "Standardy + szablony do reuse", "Sparring + code review po wyjściu"],
        },
      ],
    },
    process: {
      kicker: "03 · Proces",
      title: "Cztery kroki. Bez teatru.",
      steps: [
        ["Słucham", "90 minut na zoomie, free. Zadaję 20 pytań i sprawdzam, czy mogę realnie pomóc."],
        ["Mapuję", "1-3 dni warsztatów i analizy. Zakres, estymacja, ryzyka, fixed fee."],
        ["Buduję", "4-12 tygodni. Tygodniowe demo na realnych danych i decyzje modelu widoczne od początku."],
        ["Uczę i wychodzę", "Transfer wiedzy, runbooki, monitoring i 30 dni dostępności po handoff."],
      ],
    },
    cases: {
      kicker: "04 · Case studies",
      title: "Nie logo na slajdzie. Działające systemy.",
      items: [
        {
          meta: "Globalny SaaS · Accounts Payable · NDA",
          title: "Agentowy AI assistant dla zespołów AP.",
          body:
            "Architektura wieloagentowa dla statusów faktur, payment terms i eskalacji. Event-driven na Azure, human-in-the-loop i observability dla produkcji.",
          stats: ["~70% auto-resolved", "minuty do pierwszej odpowiedzi", "10+ języków"],
        },
        {
          meta: "Ubezpieczenia · OCR + RAG · GDPR",
          title: "27 000 wrażliwych umów miesięcznie.",
          body:
            "Pipeline OCR, ekstrakcja, vector index, RAG i redakcja PII przed wywołaniem LLM. Audit log i RBAC na poziomie klauzul.",
          stats: ["27 000 umów / mc", "~90s do indeksacji", "pełny audit trail"],
        },
        {
          meta: "Produkt własny · SignalBoy.ai",
          title: "AI-powered content triage i semantic knowledge platform.",
          body:
            "Własne laboratorium architektur agentowych: multimodal RAG, conversational search i automatyczna triage treści.",
          stats: ["live product", "multimodal RAG", "agentic pipeline"],
        },
      ],
    },
    lab: {
      kicker: "Lab",
      title: "Co buduję, gdy nie wdrażam dla klientów.",
      lead: "Nie tylko piszę o AI. Używam go każdego dnia.",
      items: [
        ["SignalBoy.ai", "AI knowledge management. Zapisz raz, użyj kiedy potrzebujesz. Live, działa."],
        ["YagaAi", "Multi-agent runtime na Azure do autonomicznego software dev. Research grade."],
        ["VibeRails", "Standardy i guardrails dla zespołów pracujących z AI coding agents."],
      ],
    },
    fit: {
      title: "Pomogę, jeśli...",
      noTitle: "Nie pomogę, jeśli...",
      yes: [
        "Macie 30-300 osób i konkretny ból operacyjny.",
        "Macie zespół tech, z którym mogę pracować.",
        "Chcecie wdrożenie, nie kolejny PoC do szuflady.",
        "Cenicie szczerość ponad 'tak, oczywiście'.",
      ],
      no: [
        "Szukacie najtańszej oferty.",
        "Chcecie AI transformation bez use case'a i ROI.",
        "Macie 2-osobową firmę i wystarczy Wam ChatGPT Plus.",
        "Szukacie etatowego CTO-as-a-service.",
      ],
    },
    about: {
      kicker: "O mnie",
      title: "Kuba Parol.",
      paragraphs: [
        "20+ lat w enterprise software. Ostatnie lata jako Head of AI / AI Architect przy globalnym SaaS w branży Accounts Payable.",
        "Wcześniej 12 lat jako co-founder i tech lead SaaS do controllingu finansowego, używanego przez duże polskie firmy.",
        "Założyłem SBAI, bo SME w PL i EU potrzebują production AI, nie demo. I potrzebują kogoś, kto zbuduje system oraz zostawi zespół, który umie go rozwijać.",
      ],
      meta: ["Founder, SBAI", "Warszawa · PL / EU", "PL native · EN C1"],
    },
    faq: {
      kicker: "FAQ",
      title: "Pytania, które słyszę najczęściej.",
      items: [
        ["Ile to kosztuje?", "Audyt + strategia: 8-24 tys. PLN fixed. Production build: 60-250 tys. PLN. AI-coding adoption: 25-80 tys. PLN."],
        ["Jak długo trwa wdrożenie?", "4-12 tygodni od briefu do produkcji. Pierwsze demo na Waszych danych zwykle w 2-3 tygodnie."],
        ["Czy moje dane są bezpieczne?", "Tak. Hosting w EU, redakcja PII, zero data retention na modelach, NDA i DPA standardowo."],
        ["Czy używacie naszych danych do treningu modeli?", "Nie. Nigdy. Modele pracują w trybie no-retention."],
        ["Co po handoff?", "Zostają docs, runbooki, monitoring i 30 dni kontaktu. Długoterminowe SLA ustalamy osobno."],
      ],
    },
    contact: {
      kicker: "Porozmawiajmy",
      title: "30 minut. Bez prezentacji.",
      lead: "Powiedz mi, co chcesz osiągnąć. Jeśli mogę pomóc - powiem jak. Jeśli nie - powiem wprost dlaczego.",
      primary: "Napisz do mnie",
      secondary: "LinkedIn",
    },
    footer: {
      tagline: "Strategic Business AI",
      copyright: "© 2026 SBAI sp. z o.o.",
    },
  },
  en: {
    nav: ["Services", "Process", "Case studies", "Lab", "About", "Contact"],
    navHref: ["#services", "#process", "#cases", "#lab", "#about", "#contact"],
    langHref: "/",
    langLabel: "PL",
    hero: {
      eyebrow: "SBAI · Kuba Parol",
      title: ["AI that works.", "A team that gets it."],
      lead:
        "I advise and ship production AI for companies of 30-300. Then I leave behind a team that can grow it - without me.",
      primary: "Let's talk - 30 min",
      secondary: "What I've built",
    },
    stats: [
      ["20+", "years in enterprise software"],
      ["3", "AI products built"],
      ["millions", "invoices / month on systems I've architected"],
      ["27,000", "sensitive contracts / month in OCR + RAG pipelines"],
    ],
    problem: {
      kicker: "01 · Problem",
      title: "Sound familiar?",
      cards: [
        "Everyone's talking about AI, but I have no idea where to start in my own company.",
        "Someone sold us a chatbot for EUR20k. It's gathering dust.",
        "I'm scared the competition will figure out AI before we do.",
      ],
      close:
        "All three are solvable - but not with a deck, a workshop, or yet another PoC.",
    },
    services: {
      kicker: "02 · Services",
      title: "Three things I'm good at.",
      items: [
        {
          label: "Audit + strategy",
          title: "What's worth building - and what to skip.",
          lead:
            "One workshop, one clear plan. Concrete use cases for your company with ROI estimates.",
          bullets: ["1-3 days of focused work", "Fixed fee, no T&M", "No obligation to build"],
        },
        {
          label: "Production AI builds",
          title: "RAG, OCR, agents, mail bots, search.",
          lead:
            "I build solutions for a specific problem - not platforms. EU hosting, audit log, RBAC, compliance-ready from day 1.",
          bullets: ["4-12 weeks brief to production", "Your stack, your data", "Full docs + runbooks"],
        },
        {
          label: "AI-coding adoption",
          title: "Your team keeps shipping after I leave.",
          lead:
            "I onboard your team into AI agents: Cursor, Claude Code and custom workflows.",
          bullets: ["2-6 weeks hands-on", "Reusable standards + templates", "Sparring + code review"],
        },
      ],
    },
    process: {
      kicker: "03 · Process",
      title: "Four steps. No theater.",
      steps: [
        ["I listen", "90 minutes on Zoom, free. I ask 20 questions and check whether I can actually help."],
        ["I map", "1-3 days of workshops and analysis. Concrete scope, estimate, risks, fixed fee."],
        ["I build", "4-12 weeks. Weekly demos on real data and model decisions visible from the start."],
        ["I teach and leave", "Knowledge transfer, runbooks, monitoring and 30 days of availability after handoff."],
      ],
    },
    cases: {
      kicker: "04 · Case studies",
      title: "Not logos on a slide. Working systems.",
      items: [
        {
          meta: "Global SaaS · Accounts Payable · NDA",
          title: "Agentic AI assistant for AP teams.",
          body:
            "Multi-agent architecture for invoice status, payment terms and escalations. Event-driven on Azure, human-in-the-loop and production observability.",
          stats: ["~70% auto-resolved", "minutes to first response", "10+ languages"],
        },
        {
          meta: "Insurance · OCR + RAG · GDPR",
          title: "27,000 sensitive contracts a month.",
          body:
            "OCR, extraction, vector index, RAG and PII redaction before LLM calls. Audit log and RBAC down to clause level.",
          stats: ["27,000 contracts / month", "~90s to indexing", "full audit trail"],
        },
        {
          meta: "Own product · SignalBoy.ai",
          title: "AI-powered content triage and semantic knowledge platform.",
          body:
            "My own lab for agentic architectures: multimodal RAG, conversational search and automated content triage.",
          stats: ["live product", "multimodal RAG", "agentic pipeline"],
        },
      ],
    },
    lab: {
      kicker: "Lab",
      title: "What I build when I'm not working for clients.",
      lead: "I don't just write about AI. I use it every day.",
      items: [
        ["SignalBoy.ai", "AI knowledge management. Save once, actually use it later. Live and shipped."],
        ["YagaAi", "Multi-agent runtime on Azure for autonomous software dev. Research grade."],
        ["VibeRails", "Standards and guardrails for teams working with AI coding agents."],
      ],
    },
    fit: {
      title: "I'll help if...",
      noTitle: "I won't help if...",
      yes: [
        "You're a 30-300 person company with concrete operational pain.",
        "You have an internal tech team I can pair with.",
        "You want a working system, not another PoC for the drawer.",
        "You value honesty over 'yes, of course'.",
      ],
      no: [
        "You're chasing the cheapest quote.",
        "You want AI transformation without use case or ROI.",
        "You're a 2-person company and ChatGPT Plus is enough.",
        "You need someone in-house on payroll.",
      ],
    },
    about: {
      kicker: "About",
      title: "Kuba Parol.",
      paragraphs: [
        "20+ years in enterprise software. Recently Head of AI / AI Architect for a global SaaS in Accounts Payable.",
        "Before that, 12 years as co-founder and tech lead of a financial controlling SaaS used by leading Polish companies.",
        "I started SBAI because SMEs in PL and EU need production AI, not demos - and someone who can build the system and leave a capable team behind.",
      ],
      meta: ["Founder, SBAI", "Warsaw · PL / EU", "PL native · EN C1"],
    },
    faq: {
      kicker: "FAQ",
      title: "Questions I hear most often.",
      items: [
        ["How much does it cost?", "Audit + strategy: EUR2-6k fixed. Production build: EUR15-60k. AI-coding adoption: EUR6-20k."],
        ["How long does implementation take?", "4-12 weeks from brief to production. First demo on your data usually in 2-3 weeks."],
        ["Is my data safe?", "Yes. EU hosting, PII redaction, zero data retention models, NDA and DPA as standard."],
        ["Do you train models on our data?", "No. Never. Models run in no-retention mode."],
        ["What happens after handoff?", "Docs, runbooks, monitoring and 30 days of contact stay with you. Longer SLA is separate."],
      ],
    },
    contact: {
      kicker: "Let's talk",
      title: "30 minutes. No deck.",
      lead: "Tell me what you want to achieve. If I can help - I'll tell you how. If I can't - I'll tell you exactly why.",
      primary: "Email me",
      secondary: "LinkedIn",
    },
    footer: {
      tagline: "Strategic Business AI",
      copyright: "© 2026 SBAI sp. z o.o.",
    },
  },
} as const;

export function LandingPage({ locale }: { locale: Locale }) {
  const t = content[locale];

  return (
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <a className="logo" href={locale === "pl" ? "/" : "/en/"}>
          SBAI
        </a>
        <div className="nav-links">
          {t.nav.map((item, index) => (
            <a key={item} href={t.navHref[index]}>
              {item}
            </a>
          ))}
        </div>
        <a className="lang" href={t.langHref}>
          {t.langLabel}
        </a>
      </nav>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1>
            <span>{t.hero.title[0]}</span>
            <span>{t.hero.title[1]}</span>
          </h1>
          <p className="hero-lead">{t.hero.lead}</p>
          <div className="hero-actions">
            <a className="button primary" href="#contact">
              {t.hero.primary}
              <span aria-hidden="true">-&gt;</span>
            </a>
            <a className="button ghost" href="#cases">
              {t.hero.secondary}
            </a>
          </div>
        </div>
        <div className="hero-visual" aria-label="AI studio visual">
          <img src="/assets/sbai_hero.png" alt="" />
          <div className="signal-panel">
            <span>human-in-the-loop</span>
            <strong>production AI</strong>
            <small>audit · RBAC · EU hosting</small>
          </div>
        </div>
      </section>

      <section className="stats" aria-label="Credentials">
        {t.stats.map(([value, label]) => (
          <article key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </article>
        ))}
      </section>

      <Section id="problem" kicker={t.problem.kicker} title={t.problem.title}>
        <div className="quote-grid">
          {t.problem.cards.map((card) => (
            <blockquote key={card}>{card}</blockquote>
          ))}
        </div>
        <p className="section-close">{t.problem.close}</p>
      </Section>

      <Section id="services" kicker={t.services.kicker} title={t.services.title}>
        <div className="service-grid">
          {t.services.items.map((item, index) => (
            <article className={index === 0 ? "service-card featured" : "service-card"} key={item.label}>
              <p>{item.label}</p>
              <h3>{item.title}</h3>
              <span>{item.lead}</span>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section id="process" kicker={t.process.kicker} title={t.process.title}>
        <div className="timeline">
          {t.process.steps.map(([title, body], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="cases" kicker={t.cases.kicker} title={t.cases.title}>
        <div className="case-stack">
          {t.cases.items.map((item, index) => (
            <article className="case-card" key={item.title}>
              <div>
                <span className="case-number">{String(index + 1).padStart(2, "0")}</span>
                <p>{item.meta}</p>
              </div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <ul>
                  {item.stats.map((stat) => (
                    <li key={stat}>{stat}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="lab" kicker={t.lab.kicker} title={t.lab.title} lead={t.lab.lead}>
        <div className="lab-grid">
          {t.lab.items.map(([title, body]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </Section>

      <section className="fit-section">
        <div className="fit-card yes">
          <h2>{t.fit.title}</h2>
          <ul>
            {t.fit.yes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="fit-card no">
          <h2>{t.fit.noTitle}</h2>
          <ul>
            {t.fit.no.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <Section id="about" kicker={t.about.kicker} title={t.about.title}>
        <div className="about-grid">
          <div>
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <aside>
            <div className="portrait-mark">KP</div>
            {t.about.meta.map((item) => (
              <span key={item}>{item}</span>
            ))}
            <a href={legal.linkedin}>linkedin.com/in/jakub-parol-ai</a>
          </aside>
        </div>
      </Section>

      <Section id="faq" kicker={t.faq.kicker} title={t.faq.title}>
        <div className="faq-list">
          {t.faq.items.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </Section>

      <section className="contact" id="contact">
        <p className="eyebrow">{t.contact.kicker}</p>
        <h2>{t.contact.title}</h2>
        <p>{t.contact.lead}</p>
        <div className="hero-actions">
          <a className="button primary" href={`mailto:${legal.email}`}>
            {t.contact.primary}
          </a>
          <a className="button ghost inverse" href={legal.linkedin}>
            {t.contact.secondary}
          </a>
        </div>
      </section>

      <footer className="footer">
        <div>
          <a className="logo" href="/">
            SBAI
          </a>
          <p>{t.footer.tagline}</p>
          <small>{t.footer.copyright}</small>
        </div>
        <div>
          <a href="#services">{t.nav[0]}</a>
          <a href="#process">{t.nav[1]}</a>
          <a href="#cases">{t.nav[2]}</a>
          <a href="#contact">{t.nav[5]}</a>
        </div>
        <address>
          SBAI sp. z o.o.
          <br />
          {legal.address}
          <br />
          NIP {legal.nip} · KRS {legal.krs} · REGON {legal.regon}
          <br />
          <a href={`mailto:${legal.email}`}>{legal.email}</a>
        </address>
      </footer>
    </main>
  );
}

function Section({
  id,
  kicker,
  title,
  lead,
  children,
}: {
  id: string;
  kicker: string;
  title: string;
  lead?: string;
  children: ReactNode;
}) {
  return (
    <section className="section" id={id}>
      <div className="section-heading">
        <p className="eyebrow">{kicker}</p>
        <h2>{title}</h2>
        {lead ? <p>{lead}</p> : null}
      </div>
      {children}
    </section>
  );
}
