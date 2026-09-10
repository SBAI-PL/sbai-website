import { BrandLogo } from "./brand-logo";
import { Navigation } from "./navigation";
import { ActionLink } from "./actions";

type Locale = "pl" | "en";
const mail = (subject: string) =>
  `mailto:info@sbai.pl?subject=${encodeURIComponent(subject.replaceAll("\u00a0", " "))}`;

export function LandingPage({ locale }: { locale: Locale }) {
  const en = locale === "en";
  const t = (pl: string, english: string) =>
    en ? english : pl.replace(/(^|\s)([aiouwzAIUOWZ])\s+/g, "$1$2\u00a0");
  const money = new Intl.NumberFormat(en ? "en-GB" : "pl-PL", {
    useGrouping: true,
  });
  const offers = [
    {
      id: "review-ai",
      number: "01",
      featured: true,
      label: t("Przegląd systemu AI", "AI system review"),
      title: t(
        "Drugie spojrzenie na Twój system AI",
        "A second opinion on your AI system",
      ),
      subtitle: "",
      audience: t(
        "Dla CTO i zespołów rozwijających AI",
        "For CTOs and teams building with AI",
      ),
      description: t(
        "Masz PoC, system RAG lub agenta AI i chcesz ocenić, co wymaga uwagi przed produkcją. Przeglądam uzgodniony zestaw materiałów, rozmawiam z zespołem i przygotowuję krótki raport z priorytetami.",
        "You have an AI proof of concept, RAG system or agent and want to understand what needs attention before production. I review an agreed set of materials, speak with your team and deliver a short report with clear priorities.",
      ),
      results: [
        t(
          "Najważniejsze ryzyka i luki w rozwiązaniu",
          "The main risks and gaps in the solution",
        ),
        t(
          "Co poprawić teraz, a co może poczekać",
          "What to fix now and what can wait",
        ),
        t(
          "Gdzie warto ograniczyć złożoność",
          "Where to keep the design simpler",
        ),
      ],
      scope: t(
        "Przegląd ma uzgodniony zakres. Nie obejmuje implementacji ani stałego utrzymania.",
        "The review has an agreed scope. Implementation and ongoing maintenance are not included.",
      ),
      low: 2500,
      high: 4000,
      unit: t("netto", "excluding VAT"),
      cta: t("Porozmawiajmy o Twoim systemie", "Discuss your AI system"),
      subject: t(
        "SBAI — drugie spojrzenie na system AI",
        "SBAI — AI system review enquiry",
      ),
    },
    {
      id: "codex-workshop",
      number: "02",
      featured: false,
      label: t("Warsztat dla zespołu", "Team workshop"),
      title: t("Codex w zespole", "Codex for development teams"),
      subtitle: t(
        "Od zadania do zweryfikowanego PR",
        "From task to verified pull request",
      ),
      audience: t(
        "Dla software house’ów i zespołów wewnętrznych",
        "For software companies and in-house teams",
      ),
      description: t(
        "Na moich autorskich materiałach i bezpiecznym repozytorium szkoleniowym przechodzimy przez wymagania, granice samodzielności agenta, testy, przegląd kodu i kontrolę kosztów. Ćwiczymy weryfikację zmian przed ich przyjęciem do projektu.",
        "Using my own teaching materials and a safe training repository, we work through requirements, agent autonomy, tests, code review and cost control. Your team practises checking changes before accepting them into a project.",
      ),
      results: [
        t(
          "Przećwiczony proces od zadania do zweryfikowanego pull requestu, czyli propozycji zmian w kodzie",
          "Hands-on practice from a task to a reviewed pull request",
        ),
        t(
          "Ustalone granice samodzielności agenta",
          "Clear boundaries for agent autonomy and human decisions",
        ),
        t(
          "Sposoby sprawdzania jakości i kontrolowania kosztów",
          "Practical ways to check quality and track costs",
        ),
      ],
      scope: t(
        "Warsztat odbywa się w środowisku szkoleniowym. Dalsze wdrożenie procesu w firmie ustalamy osobno.",
        "The workshop uses a training environment. Adopting the workflow in your organisation is scoped separately.",
      ),
      low: 4000,
      high: 7000,
      unit: t("netto za warsztat", "excluding VAT per workshop"),
      cta: t("Porozmawiajmy o warsztacie", "Discuss a team workshop"),
      subject: t(
        "SBAI — warsztat Codex dla zespołu",
        "SBAI — Codex team workshop enquiry",
      ),
    },
    {
      id: "finance-ai",
      number: "03",
      featured: false,
      label: t("Finanse i controlling", "Finance and management accounting"),
      title: t(
        "Gdzie AI ma sens w finansach i controllingu?",
        "Where can AI help your finance team?",
      ),
      subtitle: "",
      audience: t("Dla CFO i właścicieli firm", "For CFOs and business owners"),
      description: t(
        "Przyglądamy się procesowi, wybieramy jedno zastosowanie AI i sprawdzamy jego założenia ekonomiczne. Korzystam z doświadczenia w finansach i controllingu, żeby połączyć potrzeby biznesu z realiami danych i technologii.",
        "We examine a process, select one AI use case and assess its economic assumptions. I draw on my finance and management accounting background to connect business needs with the realities of data and technology.",
      ),
      results: [
        t(
          "Jedno zastosowanie: problem, potrzebne dane i oczekiwany efekt",
          "One use case: the problem, data needs and intended outcome",
        ),
        t(
          "Założenia do oceny kosztów i potencjalnych korzyści",
          "Assumptions for assessing costs and potential benefits",
        ),
        t(
          "Rekomendacja: wdrażać, uporządkować dane lub zrezygnować",
          "A recommendation: proceed, organise the data first or stop",
        ),
      ],
      scope: t(
        "Oceniamy jedno zastosowanie. Wdrożenie i przygotowanie danych wymagają osobnych ustaleń.",
        "We assess one use case. Implementation and data preparation require a separate agreement.",
      ),
      low: 3000,
      high: 5000,
      unit: t("netto", "excluding VAT"),
      cta: t("Omówmy Twój proces finansowy", "Discuss your finance process"),
      subject: t(
        "SBAI — AI w finansach i controllingu",
        "SBAI — finance AI consulting enquiry",
      ),
    },
  ];
  const products = [
    {
      key: "yaga",
      name: "Yaga",
      status: t(
        "W ROZWOJU · GŁÓWNY KIERUNEK",
        "IN DEVELOPMENT · PRIMARY FOCUS",
      ),
      title: t(
        "Zespół agentów do tworzenia oprogramowania.",
        "A team of agents for software development.",
      ),
      description: t(
        "Rozwijam środowisko, w którym autonomiczni agenci mają pracować jak zespół: rozumieć zadania, tworzyć rozwiązania, przeglądać kod i wykonywać testy. Podstawą są standardy pracy i kontroli jakości VibeRails.",
        "I’m developing an environment designed for autonomous agents to work as a team: understanding tasks, building solutions, reviewing code and running tests. VibeRails provides the working standards and quality checks.",
      ),
    },
    {
      key: "iqcontrol",
      name: "IQControl",
      status: t(
        "W ROZWOJU · KOLEJNE ETAPY",
        "IN DEVELOPMENT · BUILT IN STAGES",
      ),
      title: t(
        "Jasny plan i odpowiedzialność za budżet.",
        "Clear plans and clear budget ownership.",
      ),
      description: t(
        "Gdy budżety są rozproszone między arkuszami i zespołami, trudno ustalić odpowiedzialność i wyjaśnić odchylenia. Stopniowo rozwijam IQControl.Ai, by połączyć planowanie i controlling ze wsparciem AI opartym na uporządkowanych danych.",
        "When budgets are scattered across spreadsheets and teams, ownership and variances become hard to trace. I’m building IQControl.Ai in stages to connect financial planning, budgeting and accountability, with AI support grounded in organised data.",
      ),
    },
    {
      key: "signalboy",
      name: "SignalBoy",
      status: t("W ROZWOJU", "IN DEVELOPMENT"),
      title: t(
        "Wracaj do treści, które warto wykorzystać.",
        "Put your saved content to use.",
      ),
      description: t(
        "Wartościowy post łatwo zgubić wśród kolejnych zapisanych linków. Rozwijam SignalBoy.Ai, żeby pomagał porządkować treści z mediów społecznościowych, wskazywać to, co istotne, i odnajdywać materiały wtedy, gdy są potrzebne.",
        "Useful posts often disappear into a growing collection of saved links. I’m developing SignalBoy.Ai to organise saved social content, prioritise what matters and make relevant material easier to find when you need it.",
      ),
    },
  ];
  const questions = [
    [
      t(
        "Nie wiem jeszcze, od czego zacząć. Czy mogę napisać?",
        "I’m not sure where to start. Can I still get in touch?",
      ),
      t(
        "Tak. Opisz, co chcesz usprawnić, co już masz i z jaką decyzją potrzebujesz pomocy. Nie potrzebujesz gotowego rozwiązania ani specyfikacji. Na tej podstawie ustalimy, która forma współpracy pasuje do Twojej sytuacji.",
        "Yes. Tell me what you want to improve, what you already have and which decision you need help with. You don’t need a solution or a specification in mind. We’ll use that context to find the right starting point.",
      ),
    ],
    [
      t("Jakie materiały przygotować?", "What should I prepare?"),
      t(
        "Na początek wystarczy krótki opis sytuacji. Przed rozpoczęciem pracy uzgodnimy dokumenty, przykłady procesu lub fragmenty rozwiązania potrzebne do przeglądu oraz sposób ich udostępnienia. Warsztat odbywa się na repozytorium szkoleniowym.",
        "Start with a brief description of your situation. Before work begins, we’ll agree on any documents, process examples or parts of the solution needed for the review, and how to share them. Workshops use a training repository.",
      ),
    ],
    [
      t("Co oznaczają ceny testowe?", "How do the test price ranges work?"),
      t(
        "To widełki dla opisanych ofert na etapie ich dopracowywania. Kwoty są podane netto. Konkretną cenę, zakres i oczekiwany rezultat uzgodnimy przed rozpoczęciem. Prace wykraczające poza ten zakres wymagają osobnej wyceny.",
        "These are price ranges for the services described while I refine the offers. They exclude VAT. We’ll agree on the fee, scope and expected outcome before starting. Work beyond that scope requires a separate quote.",
      ),
    ],
    [
      t(
        "Co dalej po konsultacji lub warsztacie?",
        "What happens after a consultation or workshop?",
      ),
      t(
        "Możesz kontynuować z własnym zespołem lub uzgodnić ze mną kolejny krok, np. prototyp. Przegląd wskazuje ryzyka w ustalonym zakresie; nie jest certyfikacją gotowości produkcyjnej. Prototyp służy sprawdzeniu założeń. Każdy kolejny etap ma osobny zakres i cenę.",
        "You can continue with your own team or discuss a separately scoped next step, such as a prototype. A review identifies risks within the agreed scope; it is not a production-readiness certification. A prototype tests assumptions. Further work has its own scope and fee.",
      ),
    ],
  ];
  return (
    <div lang={locale}>
      <a className="skip-link" href="#main">
        {t("Przejdź do treści", "Skip to content")}
      </a>
      <Navigation locale={locale} />
      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <img
            className="hero-image"
            src="/assets/sbai-architecture.webp"
            alt=""
            width="1672"
            height="941"
            fetchPriority="high"
          />
          <div className="hero-shade" />
          <div className="wrap hero-inner">
            <div className="hero-topline">
              <span className="eyebrow">
                <i className="dot" />
                {t(
                  "Jakub Parol · Doradztwo i architektura AI",
                  "Jakub Parol · AI consulting & architecture",
                )}
              </span>
            </div>
            <div className="hero-copy">
              <h1 id="hero-title">
                {t("Podejmuj świadome", "Make informed")}
                <br />
                <span className="heading-accent">
                  {t("decyzje o AI.", "decisions about AI.")}
                </span>
              </h1>
              <p>
                {t(
                  "Łączę doświadczenie w finansach, prowadzeniu firmy i inżynierii. Pomagam ocenić system AI, sprawdzić pomysł i ustalić, jak zespół ma weryfikować pracę agentów programistycznych.",
                  "I bring together finance, business ownership and engineering. I help you assess an AI system, test a business idea and establish how your team will verify the work of coding agents.",
                )}
              </p>
              <div className="hero-actions">
                <ActionLink variant="primary" href="#contact">
                  {t("Porozmawiajmy", "Let’s talk")}
                </ActionLink>
                <ActionLink variant="secondary" href="#services">
                  {t("Zobacz konsultacje", "Explore consulting")}
                </ActionLink>
              </div>
            </div>
          </div>
        </section>

        <section id="approach" className="approach wrap section-space">
          <div className="section-label">
            {t("Moja perspektywa", "My perspective")}
          </div>
          <div>
            <h2>
              {t("AI musi mieć sens", "AI has to make sense")}
              <br />
              <span className="muted">
                {t("także po wdrożeniu.", "beyond the demo.")}
              </span>
            </h2>
            <div className="approach-copy">
              <p>
                {t(
                  "Patrzę na AI z perspektywy finansów, produktu i inżynierii. Czy oszczędność w jednym miejscu nie oznacza dodatkowej pracy w innym? Czy rozwiązanie pomaga ludziom w ich zadaniach? Co trzeba będzie utrzymywać, gdy skończy się demo?",
                  "I assess AI through finance, product and engineering. Do the savings in one area create extra work elsewhere? Does the solution help people do their jobs? What will it take to maintain once the demo is over?",
                )}
              </p>
              <p>
                {t(
                  "Dlatego od początku ustalamy, kto odpowiada za proces, kto ocenia wyniki AI i jakie skutki może mieć błąd. Te odpowiedzi wpływają na architekturę, zakres automatyzacji i decyzje, które powinny pozostać po stronie człowieka.",
                  "We establish who owns the process, who checks the AI’s output and what happens when it gets something wrong. Those answers shape the architecture, how much to automate and which decisions need human judgment.",
                )}
              </p>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="services consulting section-space"
          aria-labelledby="consulting-title"
        >
          <div className="wrap">
            <div className="section-heading">
              <div>
                <div className="section-label">
                  {t("Usługi konsultingowe", "AI consulting services")}
                </div>
                <h2 id="consulting-title">
                  {t("Konkretna decyzja.", "A clear decision.")}
                  <br />
                  <span className="heading-accent">
                    {t("Ustalony zakres.", "A defined scope.")}
                  </span>
                </h2>
              </div>
              <p>
                {t(
                  "Przegląd systemu, praktyczny warsztat albo ocena zastosowania AI w finansach. Wybierz punkt startu, który odpowiada na Twoje najbliższe pytanie.",
                  "An AI system review, a practical workshop or a finance use-case assessment. Start with the service that helps answer the question in front of you.",
                )}
              </p>
            </div>
            <p className="offer-pricing-note">
              {t(
                "Podane ceny są testowe. Zakres i ostateczną kwotę uzgadniamy przed rozpoczęciem współpracy.",
                "These are test price ranges. We agree on the scope and final fee before work begins.",
              )}
            </p>
            <div className="service-grid">
              {offers.map((offer) => (
                <article
                  id={offer.id}
                  data-offer={offer.id}
                  className={`service-card consulting-offer${offer.featured ? " is-featured" : ""}`}
                  key={offer.id}
                >
                  <div className="service-intro">
                    <div className="offer-index">
                      <span className="service-number">{offer.number}</span>
                      {offer.featured && (
                        <span className="offer-featured-label">
                          {t(
                            "Polecany punkt startu",
                            "Suggested starting point",
                          )}
                        </span>
                      )}
                    </div>
                    <div className="service-label">{offer.label}</div>
                    <h3>
                      {offer.title}
                      {offer.subtitle && (
                        <span className="offer-subtitle">{offer.subtitle}</span>
                      )}
                    </h3>
                    <div className="offer-price">
                      <span>{t("Cena testowa", "Test price")}</span>
                      <strong>
                        {en ? "PLN " : ""}
                        {money.format(offer.low)}–{money.format(offer.high)}
                        {en ? "" : " zł"}
                      </strong>
                      <span>{offer.unit}</span>
                    </div>
                  </div>
                  <div className="service-description">
                    <p className="offer-audience">{offer.audience}</p>
                    <p>{offer.description}</p>
                    <ActionLink href={mail(offer.subject)}>
                      {offer.cta}
                    </ActionLink>
                  </div>
                  <div className="deliverable">
                    <span>{t("Co otrzymasz", "What you take away")}</span>
                    <ul>
                      {offer.results.map((result) => (
                        <li key={result}>{result}</li>
                      ))}
                    </ul>
                    <p className="offer-scope">{offer.scope}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="experiment-followup">
              <div>
                <span className="section-label">
                  {t("Możliwy kolejny krok", "A possible next step")}
                </span>
                <h3>
                  {t(
                    "Sprawdźmy pomysł w praktyce.",
                    "Let’s test the idea in practice.",
                  )}
                </h3>
              </div>
              <div>
                <p>
                  {t(
                    "Jeśli do podjęcia decyzji potrzebny będzie eksperyment, możemy osobno uzgodnić niewielki prototyp. Warto wrócić także do pomysłów, które wcześniej były zbyt kosztowne. Prototyp sprawdza wybrane założenia; jego zakres i cena wymagają osobnych ustaleń.",
                    "If the decision needs evidence from an experiment, we can agree on a focused prototype. That may include revisiting ideas previously considered too expensive. A prototype tests selected assumptions and has a separately agreed scope and fee.",
                  )}
                </p>
                <ActionLink
                  href={mail(
                    t(
                      "SBAI — eksperyment i prototyp AI",
                      "SBAI — AI prototype enquiry",
                    ),
                  )}
                >
                  {t("Porozmawiajmy o prototypie", "Discuss a prototype")}
                </ActionLink>
              </div>
            </div>
          </div>
        </section>

        <section id="teams" className="team-section wrap section-space">
          <div className="team-intro">
            <div className="section-label">
              {t("Sposób pracy", "How I work")}
            </div>
            <h2>
              {t("Jasne zasady", "Clear rules for")}
              <br />
              <span className="heading-accent">
                {t("pracy z agentami.", "working with agents.")}
              </span>
            </h2>
            <p>
              {t(
                "Zaczynamy od zadania, potrzebnego kontekstu i kryteriów oceny wyniku. Ustalamy, co agent może zrobić sam, a kiedy potrzebuje decyzji człowieka.",
                "We start with the task, the context it needs and the criteria for checking the result. We agree on where an agent can work independently and when it needs a person to decide.",
              )}
            </p>
            <p>
              {t(
                "Testy, przegląd kodu i zapis wykonanych sprawdzeń są częścią procesu. Zespół określa też limity pracy agenta i sposób śledzenia kosztów. Te zasady ćwiczymy na warsztacie.",
                "Tests, code review and a record of the checks are part of the process. The team also establishes how to track costs and set limits on agent work. The workshop puts these rules into practice.",
              )}
            </p>
            <ActionLink href="#codex-workshop">
              {t("Zobacz zakres warsztatu", "Explore the workshop")}
            </ActionLink>
          </div>
          <article className="viberails">
            <div className="rails-identity">
              <span className="project-tag">Open source · MIT</span>
              <h3 className="rails-wordmark">
                Vibe<span>Rails</span>
              </h3>
              <p>
                {t(
                  "Zasady pracy zapisane w repozytorium.",
                  "Working standards in the repository.",
                )}
              </p>
            </div>
            <div className="rails-copy">
              <p>
                {t(
                  "VibeRails to publiczny projekt, w którym rozwijam standardy, instrukcje i szablony do pracy z agentami programistycznymi. Obecnie skupia się na Codex. Repozytorium pokazuje, jak przekładam zasady współpracy i weryfikacji na praktykę.",
                  "VibeRails is a public project where I develop standards, instructions and templates for coding-agent workflows. Currently focused on Codex, the repository shows how I turn collaboration and verification principles into practical guidance.",
                )}
              </p>
              <ActionLink href="https://github.com/JakubParol/VibeRails">
                {t(
                  "Zobacz VibeRails na GitHubie",
                  "Explore VibeRails on GitHub",
                )}
              </ActionLink>
              <p className="ownership-note">
                {t(
                  "Publiczne pliki są dostępne bezpłatnie na licencji MIT. Płatny warsztat obejmuje moje autorskie materiały dydaktyczne i wspólną praktykę.",
                  "The public files are freely available under the MIT licence. The paid workshop covers my own teaching materials and hands-on practice.",
                )}
              </p>
            </div>
          </article>
        </section>

        <section id="products" className="products section-space">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <div className="section-label">
                  {t("Własne produkty", "My own products")}
                </div>
                <h2>
                  {t("Produkty, nad którymi", "Products I’m")}
                  <br />
                  <span className="heading-accent">
                    {t("pracuję.", "building.")}
                  </span>
                </h2>
              </div>
              <p>
                {t(
                  "Rozwijam trzy własne produkty. Najwięcej uwagi poświęcam dziś Yaga.Ai. Każdy odpowiada na inny problem: organizację pracy programistycznej, planowanie finansowe albo wykorzystanie zapisanych treści.",
                  "I’m developing three products, with Yaga.Ai as my main focus. Each addresses a practical problem: coordinating software development, managing financial plans or making use of saved content.",
                )}
              </p>
            </div>
            <div className="product-list">
              {products.map((product) => (
                <article
                  className={`product-card product-${product.key}`}
                  data-status="in-development"
                  key={product.key}
                >
                  <div className="product-status">{product.status}</div>
                  <div
                    className={`product-art art-${product.key}`}
                    aria-hidden="true"
                  />
                  <div className="product-content">
                    <h3>
                      {product.name}
                      <span>.Ai</span>
                    </h3>
                    <h4>{product.title}</h4>
                    <p>{product.description}</p>
                    <ActionLink href={mail(`${product.name}.Ai`)}>
                      {t(
                        `Zapytaj o ${product.name}.Ai`,
                        `Ask about ${product.name}.Ai`,
                      )}
                    </ActionLink>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="about section-space">
          <div className="wrap about-grid">
            <div className="about-identity">
              <div className="section-label">{t("O mnie", "About me")}</div>
              <h2>
                Jakub Parol
                <span>
                  {t("Możesz mówić mi Kuba.", "You can call me Kuba.")}
                </span>
              </h2>
              <div className="career-path">
                <span>
                  {t(
                    "Finanse i controlling",
                    "Finance and management accounting",
                  )}
                </span>
                <span>
                  {t(
                    "Własna firma i produkt",
                    "Business and product ownership",
                  )}
                </span>
                <span>
                  {t("Inżynieria oprogramowania", "Software engineering")}
                </span>
                <span>{t("Architektura AI", "AI architecture")}</span>
              </div>
              <ActionLink href="https://www.linkedin.com/in/jakub-parol-ai/">
                {t("Poznaj mnie na LinkedIn", "Find me on LinkedIn")}
              </ActionLink>
            </div>
            <div className="about-story">
              <p className="large-copy">
                {t(
                  "Moja droga do AI zaczęła się od ekonomii, finansów i controllingu. Od ponad 20 lat pracuję przy systemach dla przedsiębiorstw — od strony biznesowej i technicznej.",
                  "My background is in economics, finance and management accounting. I have spent more than 20 years working on enterprise systems, from both the business and engineering sides.",
                )}
              </p>
              <p>
                {t(
                  "Przez 12 lat współtworzyłem LargoQ i system IQControl do controllingu finansowego i budżetowania. Prowadzenie firmy i rozwijanie produktu nauczyły mnie łączyć decyzje techniczne z potrzebami ludzi, którzy korzystają z systemu.",
                  "For 12 years, I helped build LargoQ and IQControl, a financial planning and budgeting system. Running a business and developing a product taught me to connect technical decisions with the needs of the people using it.",
                )}
              </p>
              <p>
                {t(
                  "Obecnie pracuję w ElitMind jako Lead AI Architect / Lead AI Consultant. Prowadzę zespoły, rozmawiam z zarządami i właścicielami procesów, projektuję rozwiązania i nadal piszę kod.",
                  "Today, I work at ElitMind as Lead AI Architect / Lead AI Consultant. I lead teams, work with executives and process owners, design solutions and still write code.",
                )}
              </p>
              <p>
                {t(
                  "SBAI — SmartBusiness AI — to moja niezależna marka doradcza i miejsce rozwoju własnych produktów.",
                  "SBAI — SmartBusiness AI — is my independent consulting brand and home for my own products.",
                )}
              </p>
              <details className="toolbox">
                <summary>
                  {t(
                    "Technologie, z którymi pracuję",
                    "Technologies I work with",
                  )}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>
                  Python · C# / .NET · Azure · PostgreSQL
                  <br />
                  LangGraph / LangChain · RAG · OCR ·{" "}
                  {t(
                    "integracje i agenci programistyczni",
                    "integrations and coding agents",
                  )}
                </p>
              </details>
            </div>
          </div>
        </section>

        <section className="faq wrap section-space">
          <div>
            <div className="section-label">
              {t("Przed pierwszą rozmową", "Before our first conversation")}
            </div>
            <h2>{t("Pytania o współpracę.", "Working together.")}</h2>
          </div>
          <div>
            {questions.map(([question, answer]) => (
              <details key={question}>
                <summary>
                  {question}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="wrap">
            <div className="section-label">{t("Kontakt", "Get in touch")}</div>
            <div className="contact-grid">
              <h2>
                {t("Zacznijmy", "Let’s start")}
                <br />
                <span className="heading-accent">
                  {t("od Twojego pytania.", "with your question.")}
                </span>
              </h2>
              <div>
                <p>
                  {t(
                    "Opisz krótko swój system, proces albo sposób pracy zespołu. Napisz, z jaką decyzją potrzebujesz pomocy. Wystarczy kilka zdań — nie potrzebujesz gotowej specyfikacji.",
                    "Tell me briefly about your system, process or the way your team works, and the decision you need help with. A few sentences are enough to start; you don’t need a full specification.",
                  )}
                </p>
                <ActionLink
                  variant="display"
                  href={mail(
                    t(
                      "SBAI — pytanie o konsultację AI",
                      "SBAI — AI consulting enquiry",
                    ),
                  )}
                >
                  info@sbai.pl
                </ActionLink>
                <ActionLink href="https://www.linkedin.com/in/jakub-parol-ai/">
                  {t("Napisz do mnie na LinkedIn", "Message me on LinkedIn")}
                </ActionLink>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="wrap">
        <div className="footer-top">
          <BrandLogo locale={locale} signature />
          <ActionLink arrow="up" href="#main">
            {t("Wróć na górę", "Back to top")}
          </ActionLink>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} SBAI sp. z o.o.</span>
          <span>
            Stefana Batorego 18/108, 02-591 Warszawa
            <br />
            NIP 7011312445 · KRS 0001239481 · REGON 544648949
          </span>
          <ActionLink href="mailto:info@sbai.pl">info@sbai.pl</ActionLink>
        </div>
      </footer>
    </div>
  );
}
