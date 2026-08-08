import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Lang = "en" | "am";

const en = {
  nav: {
    about: "About",
    divisions: "Divisions",
    approach: "Approach",
    focus: "Focus",
    contact: "Contact",
    cta: "Start a conversation",
    menu: "Toggle menu",
    langLabel: "Language",
  },
  hero: {
    eyebrow: "Capital Markets · Institutions · Technology & Talent",
    titleA: "We build ",
    titleHighlight: "institutions",
    titleB: " — and the technology that runs them.",
    body: "Strategy Innovations works with banks, investors and institutions in emerging markets. We take a venture from feasibility study and regulatory licensing through to business model, capital structure and go-live — and we build the technology platforms and engineering teams that make it operate.",
    ctaPrimary: "Start a conversation",
    ctaSecondary: "Our divisions",
    locations: "Addis Ababa · London · East Africa",
    imageAlt: "Aerial view of the Addis Ababa skyline at night",
  },
  about: {
    eyebrow: "About",
    heading: "Advisers who build institutions, not just recommend them.",
    p1: "Most advisory firms stop at the report. We don't. Our work runs the full arc of establishing a regulated financial institution: the feasibility study and demand assessment that test whether it should exist at all; the business model, product mix and capital structure that define what it is; the licensing, governance and compliance frameworks that make it permissible; and the programme management that carries it to its first day of trading.",
    p2: "Alongside that we are standing up a second division, because in emerging markets the binding constraint is rarely capital — it is systems and skills. It is designed to build the technology capability financial institutions actually need, and the talent organisations behind it: engineering delivery, AI and data capability, and academies that create a sustainable supply of technologists rather than importing one.",
    p3: "We work where the opportunity is structural rather than incremental — markets building financial infrastructure for the first time, where an institution designed well at the right moment can shape how a whole market develops.",
    p4: "And we build to hand over. Our engagements are designed around knowledge transfer, with local teams shadowed, trained and progressively given the reins. ",
    p4Emphasis: "The measure of our success is that the institution runs without us.",
    pillars: [
      {
        title: "Practitioners, not commentators",
        body: "Our teams have established investment banks and capital markets businesses in both mature and emerging markets.",
      },
      {
        title: "Regulator-aligned by design",
        body: "Structures built to meet licensing, prudential and AML standards from the first draft — not retrofitted.",
      },
      {
        title: "Institution and technology together",
        body: "The business model and the platform designed as one problem, because they fail as one problem.",
      },
      {
        title: "Built for handover",
        body: "Local capability building and knowledge transfer written into every engagement.",
      },
    ],
  },
  divisions: {
    eyebrow: "Divisions",
    heading: "Two divisions, one mandate",
    intro:
      "Clients come to us to establish something that does not yet exist. Some engage a single division; most find they need both, because an institution and the technology that runs it are the same problem viewed from two sides.",
    tabOneLabel: "Division One",
    tabOneTitle: "Capital Markets & Institutions",
    tabTwoLabel: "Division Two",
    tabTwoTitle: "Technology & Talent",
    oneP1:
      "We design, licence and stand up regulated financial institutions — investment banks, broker-dealers, advisory businesses and the shared and consortium structures that make them viable in young markets, where no single institution can carry the cost or the risk alone.",
    oneP2:
      "The division advises and builds. It does not itself trade, deal or hold client assets.",
    twoBuild: "In build.",
    twoP1:
      " This division is being established now — delivery capability, university partnerships and the first client engagements are in formation. We are talking to clients who want to shape it, and to be first in the queue when it opens.",
    twoP2:
      "It is designed as a single system rather than a set of separate services. The academy trains technologists; the strongest join the delivery teams or a client's own engineering function; others are placed through recruitment. Delivery engagements surface hiring needs, and hiring relationships surface delivery work. Each rotation lowers the cost of talent and deepens the client relationship.",
    twoP3:
      "Four core business lines, and a fifth to be pursued selectively as capability matures.",
    imageOneAlt: "Trading floor at dusk with market data screens",
    imageTwoAlt: "Young engineers working together in an academy classroom",
    one: [
      {
        n: "01",
        title: "Feasibility & Market Studies",
        lead: "Testing whether the institution should exist at all, and saying so plainly if it should not.",
        items: [
          "Demand assessment across equity, debt and advisory",
          "Supply and competitor mapping",
          "Competitive gaps and white spaces",
          "Go / no-go recommendation",
        ],
      },
      {
        n: "02",
        title: "Institution & Business Model Design",
        lead: "Defining what the institution is and how it earns.",
        items: [
          "Product mix and service offering",
          "Target customer segments and prioritisation",
          "Revenue streams and distribution model",
          "Shared-service and partnership structures",
        ],
      },
      {
        n: "03",
        title: "Regulatory, Licensing & Compliance",
        lead: "Making the institution permissible, and keeping it that way.",
        items: [
          "Regulatory architecture and licence mapping",
          "Application documentation and regulator engagement",
          "Governance, risk and internal control frameworks",
          "AML / KYC / CFT and client-money design",
        ],
      },
      {
        n: "04",
        title: "Capital Structure & Ownership",
        lead: "Designing who owns it, who governs it, and how they leave.",
        items: [
          "Shareholding and consortium design",
          "Capital adequacy and reserve planning",
          "Board composition and reserved matters",
          "Shareholder agreements and exit strategy",
        ],
      },
      {
        n: "05",
        title: "Financial Modelling & Investment Cases",
        lead: "Numbers a board and a regulator can interrogate.",
        items: [
          "Multi-year revenue and cost models",
          "Headcount, compensation and cost philosophy",
          "Sensitivity and stress testing",
          "Investor and regulator-facing documentation",
        ],
      },
      {
        n: "06",
        title: "Programme Delivery & Pre-Opening PMO",
        lead: "Turning an approved plan into an operating institution.",
        items: [
          "Project governance and pre-opening PMO",
          "Phased licensing and go-live planning",
          "Pre-opening budget and capital deployment",
          "Recruitment and readiness milestones",
        ],
      },
    ],
    two: [
      {
        n: "Line I",
        title: "Technology & AI Recruitment",
        lead: "Specialist recruitment of technology and AI talent for international clients across the UK, Europe and the Gulf.",
        items: [
          "Contingency recruitment: software, data, AI/ML, cloud, cybersecurity",
          "Retained and executive search for technology leadership",
          "Contract staffing and statement-of-work placements",
          "Recruitment process outsourcing (RPO)",
          "Employer-of-record and managed payroll",
          "Salary benchmarking and workforce advisory",
        ],
      },
      {
        n: "Line II",
        title: "Technology Outsourcing & Delivery",
        lead: "A managed, quality-assured engineering organisation — not a body shop — delivering to international standards.",
        items: [
          "Dedicated development teams and team extensions",
          "Bespoke and customised software development",
          "Quality assurance, testing and DevOps",
          "ERP integration and systems interface development",
          "Cybersecurity services and managed IT operations",
          "Back-office technology operations for financial services",
        ],
      },
      {
        n: "Line III",
        title: "Technology Training & the Academy",
        lead: "Built with universities and colleges on a hire–train–deploy model: trained to secured demand, never to hope.",
        items: [
          "Software engineering conversion programmes",
          "AI and machine learning practitioner tracks",
          "Data engineering, cloud and cybersecurity certification",
          "English and professional skills for international delivery",
          "Capital markets technology training",
          "Corporate training for banks, telecoms and institutions",
        ],
      },
      {
        n: "Line IV",
        title: "Capital Markets Technology",
        lead: "The systems a modern investment bank or broker-dealer runs on — designed, built and then productised.",
        items: [
          "Order and trade management; brokerage operations",
          "Client onboarding with KYC/AML",
          "Portfolio and wealth management systems",
          "Regulatory reporting and controls dashboards",
          "Exchange connectivity and market data integration",
          "Investor portals and mobile channels",
        ],
      },
      {
        n: "Line V",
        title: "Complementary Opportunities",
        lead: "Adjacent lines that arise naturally from the first four, pursued selectively as capability and capital allow.",
        items: [
          "AI data services at scale: annotation, evaluation and human feedback",
          "Fintech infrastructure: payments integration and open-banking middleware",
          "Managed talent platform: vetted talent, engaged on subscription",
          "Technology import and distribution",
          "Innovation and venture pipeline",
        ],
      },
    ],
  },
  approach: {
    eyebrow: "Approach",
    heading: "From question to go-live.",
    intro:
      "Establishing an institution — or the technology organisation behind it — is not a single project but a sequence of gates, each of which can stop the venture. We structure engagements so that the expensive commitments come only after the cheap questions have been answered honestly.",
    stages: [
      {
        n: "Stage 01",
        title: "Assess",
        body: "Market, demand, competition and regulatory feasibility — with a real willingness to recommend against.",
      },
      {
        n: "Stage 02",
        title: "Design",
        body: "Business model, product mix, ownership, capital structure, technology architecture and financial case.",
      },
      {
        n: "Stage 03",
        title: "Licence",
        body: "Regulatory engagement, application documentation and compliance frameworks.",
      },
      {
        n: "Stage 04",
        title: "Build",
        body: "Platforms, operations, people and processes assembled under one programme.",
      },
      {
        n: "Stage 05",
        title: "Hand over",
        body: "Go-live, stabilisation, and transfer of the institution to the team who will run it.",
      },
    ],
  },
  focus: {
    eyebrow: "Where we focus",
    heading: "Emerging capital markets — and the talent that runs them.",
    p1a: "Our current centre of gravity is East Africa, and ",
    p1Emphasis: "Ethiopia in particular",
    p1b: ". It is one of the few places in the world where a national capital market is being built from the ground up: a legal framework enacted in 2021, a securities exchange that began trading in January 2025, and a regulator licensing the first generation of investment banks, dealers and advisers.",
    p2: "Institutions being designed now will set the standards the market inherits. That is unusually consequential work, and it is where we have concentrated our own research and design effort.",
    p3: "The same market makes the second half of our work urgent. International demand for technology and AI expertise continues to outstrip supply, while East Africa has a large, young and fast-growing graduate population. Connecting the two — properly trained, properly managed, delivering to international standards — is the opportunity we are building for.",
    facts: [
      {
        title: "Capital Market Proclamation, 2021",
        body: "Ethiopia's legal framework for securities markets, establishing the Ethiopian Capital Market Authority.",
      },
      {
        title: "Exchange launched January 2025",
        body: "The Ethiopian Securities Exchange began operations, creating demand for licensed intermediaries.",
      },
      {
        title: "A growing outsourcing market",
        body: "Ethiopia's business process outsourcing market was estimated at around USD 490m in 2025 and projected to reach roughly USD 846m by 2030. Source: Addis Insight, 2025.",
      },
      {
        title: "A market being built, not entered",
        body: "Products, infrastructure and standards are still being set — and shaped by those who arrive first.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    headingA: "Start a ",
    headingHighlight: "conversation.",
    body: "If you are considering establishing a financial institution, building the technology capability behind one, or testing whether a venture stands up — we would be glad to talk.",
    email: "Email",
    phone: "Telephone",
    company: "Strategy Innovations",
    person: "Peter Morris",
    offices: "Offices",
    uk: "United Kingdom",
    et: "Addis Ababa, Ethiopia",
    footerTag: "Capital Markets · Institutions · Technology & Talent",
  },
  chat: {
    open: "Open chat",
    close: "Close chat",
    title: "Strategy Innovations",
    subtitle: "Usually replies within a day",
    greeting: "Hi 👋 How can I help you today?",
    options: [
      "Establishing a financial institution",
      "Technology & talent services",
      "Something else",
    ],
    reply:
      "Thanks — a member of our team will follow up. You can also email peter.morris@strategy-innovations.com.",
    placeholder: "Type a message…",
    send: "Send",
  },
};

type Dict = typeof en;

const am: Dict = {
  nav: {
    about: "ስለ እኛ",
    divisions: "ክፍሎች",
    approach: "አቀራረብ",
    focus: "ትኩረት",
    contact: "አግኙን",
    cta: "ውይይት ይጀምሩ",
    menu: "ማውጫ ክፈት",
    langLabel: "ቋንቋ",
  },
  hero: {
    eyebrow: "የካፒታል ገበያ · ተቋማት · ቴክኖሎጂ እና ተሰጥኦ",
    titleA: "እኛ ",
    titleHighlight: "ተቋማትን",
    titleB: " እንገነባለን — እና የሚያንቀሳቅሳቸውን ቴክኖሎጂ።",
    body: "ስትራቴጂ ኢኖቬሽንስ በታዳጊ ገበያዎች ውስጥ ከባንኮች፣ ከባለሀብቶች እና ከተቋማት ጋር ይሰራል። አንድን ተነሳሽነት ከአዋጭነት ጥናት እና ከቁጥጥር ፈቃድ ጀምሮ እስከ የንግድ ሞዴል፣ የካፒታል መዋቅር እና ሥራ መጀመር ድረስ እንመራለን — እንዲሁም እንዲሠራ የሚያደርጉትን የቴክኖሎጂ መድረኮች እና የምህንድስና ቡድኖች እንገነባለን።",
    ctaPrimary: "ውይይት ይጀምሩ",
    ctaSecondary: "ክፍሎቻችን",
    locations: "አዲስ አበባ · ለንደን · ምስራቅ አፍሪካ",
    imageAlt: "የአዲስ አበባ ከተማ በሌሊት ከላይ ሆኖ የተነሳ እይታ",
  },
  about: {
    eyebrow: "ስለ እኛ",
    heading: "ተቋማትን የሚገነቡ አማካሪዎች እንጂ ምክር ብቻ የሚሰጡ አይደለንም።",
    p1: "አብዛኞቹ አማካሪ ድርጅቶች በሪፖርት ያቆማሉ። እኛ ግን አናቆምም። ሥራችን አንድን ቁጥጥር የሚደረግበት የፋይናንስ ተቋም የማቋቋም ሙሉ ሂደት ይሸፍናል፦ ተቋሙ መኖር አለበት ወይ የሚለውን የሚፈትሽ የአዋጭነት ጥናት እና የፍላጎት ግምገማ፤ ተቋሙ ምን እንደሆነ የሚወስኑት የንግድ ሞዴል፣ የምርት ድብልቅ እና የካፒታል መዋቅር፤ ሕጋዊ የሚያደርጉት የፈቃድ፣ የአስተዳደር እና የተገዢነት ማዕቀፎች፤ እንዲሁም እስከ የመጀመሪያው የንግድ ቀን የሚያደርሰው የፕሮግራም አመራር።",
    p2: "ከዚያ ጎን ለጎን ሁለተኛ ክፍል እያቋቋምን ነው፤ ምክንያቱም በታዳጊ ገበያዎች ውስጥ ዋናው እንቅፋት ካፒታል ሳይሆን ሥርዓቶች እና ክህሎቶች ናቸው። የፋይናንስ ተቋማት በእውነት የሚያስፈልጋቸውን የቴክኖሎጂ አቅም እና ከጀርባው ያሉትን የተሰጥኦ ድርጅቶች ለመገንባት የተነደፈ ነው፦ የምህንድስና አገልግሎት፣ የ AI እና የመረጃ አቅም፣ እንዲሁም ቴክኖሎጂስቶችን ከውጭ ከማምጣት ይልቅ ዘላቂ አቅርቦት የሚፈጥሩ አካዳሚዎች።",
    p3: "እድሉ መዋቅራዊ በሆነበት ቦታ እንሠራለን — ለመጀመሪያ ጊዜ የፋይናንስ መሠረተ ልማት በሚገነቡ ገበያዎች ውስጥ፣ በትክክለኛው ጊዜ በደንብ የተነደፈ ተቋም ገበያው እንዴት እንደሚያድግ ሊቀርጽ በሚችልበት ቦታ።",
    p4: "እንዲሁም ለማስረከብ እንገነባለን። ተሳትፎአችን በእውቀት ሽግግር ዙሪያ የተነደፈ ሲሆን የአካባቢው ቡድኖች ይሠለጥናሉ፣ ይከታተላሉ እና ቀስ በቀስ ኃላፊነቱን ይረከባሉ። ",
    p4Emphasis: "የስኬታችን መለኪያ ተቋሙ ያለ እኛ መሥራት መቻሉ ነው።",
    pillars: [
      {
        title: "ተግባራዊ ባለሙያዎች እንጂ ተንታኞች አይደለንም",
        body: "ቡድኖቻችን በበሰሉና በታዳጊ ገበያዎች ውስጥ የኢንቨስትመንት ባንኮችንና የካፒታል ገበያ ንግዶችን አቋቁመዋል።",
      },
      {
        title: "ከቁጥጥር አካላት ጋር የተጣጣመ ንድፍ",
        body: "ከመጀመሪያው ረቂቅ ጀምሮ የፈቃድ፣ የጥንቃቄ እና የ AML መስፈርቶችን የሚያሟሉ መዋቅሮች — በኋላ የተጨመሩ አይደሉም።",
      },
      {
        title: "ተቋምና ቴክኖሎጂ አብረው",
        body: "የንግድ ሞዴሉና መድረኩ እንደ አንድ ችግር ይነደፋሉ፤ ምክንያቱም እንደ አንድ ችግር ይወድቃሉ።",
      },
      {
        title: "ለማስረከብ የተገነባ",
        body: "የአካባቢ አቅም ግንባታና የእውቀት ሽግግር በእያንዳንዱ ተሳትፎ ውስጥ ተካትቷል።",
      },
    ],
  },
  divisions: {
    eyebrow: "ክፍሎች",
    heading: "ሁለት ክፍሎች፣ አንድ ዓላማ",
    intro:
      "ደንበኞች ገና ያልተፈጠረ ነገር ለማቋቋም ወደ እኛ ይመጣሉ። አንዳንዶች አንድ ክፍል ብቻ ይጠቀማሉ፤ አብዛኞቹ ግን ሁለቱም እንደሚያስፈልጓቸው ይረዳሉ፤ ምክንያቱም ተቋሙና የሚያንቀሳቅሰው ቴክኖሎጂ ከሁለት አቅጣጫ የሚታይ አንድ ችግር ናቸው።",
    tabOneLabel: "ክፍል አንድ",
    tabOneTitle: "የካፒታል ገበያ እና ተቋማት",
    tabTwoLabel: "ክፍል ሁለት",
    tabTwoTitle: "ቴክኖሎጂ እና ተሰጥኦ",
    oneP1:
      "ቁጥጥር የሚደረግባቸውን የፋይናንስ ተቋማት እንነድፋለን፣ እናስፈቅዳለን እና እናቋቁማለን — የኢንቨስትመንት ባንኮች፣ ደላሎች፣ የአማካሪ ንግዶች እንዲሁም በአዲስ ገበያዎች ውስጥ አዋጭ የሚያደርጓቸው የጋራና የኮንሰርሺየም መዋቅሮች፤ ምክንያቱም አንድ ተቋም ብቻውን ወጪውንም ሆነ አደጋውን መሸከም አይችልም።",
    oneP2:
      "ክፍሉ ያማክራል እና ይገነባል። ራሱ ግን አይነግድም፣ አይደልልም ወይም የደንበኛ ንብረት አይይዝም።",
    twoBuild: "በግንባታ ላይ።",
    twoP1:
      " ይህ ክፍል አሁን እየተቋቋመ ነው — የአገልግሎት አቅም፣ የዩኒቨርሲቲ አጋርነቶች እና የመጀመሪያዎቹ የደንበኛ ተሳትፎዎች በምስረታ ላይ ናቸው። እሱን መቅረጽ ከሚፈልጉ እና ሲከፈት በቅድሚያ መሆን ከሚፈልጉ ደንበኞች ጋር እየተነጋገርን ነው።",
    twoP2:
      "እንደ የተለያዩ አገልግሎቶች ስብስብ ሳይሆን እንደ አንድ ሥርዓት የተነደፈ ነው። አካዳሚው ቴክኖሎጂስቶችን ያሠለጥናል፤ ምርጦቹ ወደ አገልግሎት ቡድኖቻችን ወይም ወደ ደንበኛው የምህንድስና ክፍል ይቀላቀላሉ፤ ሌሎቹ በቅጥር አገልግሎት ይመደባሉ። የአገልግሎት ተሳትፎዎች የቅጥር ፍላጎቶችን ያሳያሉ፤ የቅጥር ግንኙነቶችም የአገልግሎት ሥራ ያመጣሉ። እያንዳንዱ ዙር የተሰጥኦ ወጪን ይቀንሳል የደንበኛ ግንኙነትንም ያጠናክራል።",
    twoP3: "አራት ዋና የንግድ መስመሮች፣ እና አቅም ሲጎለብት በምርጫ የሚከናወን አምስተኛ።",
    imageOneAlt: "በምሽት የገበያ መረጃ ስክሪኖች ያሉት የንግድ አዳራሽ",
    imageTwoAlt: "በአካዳሚ ክፍል ውስጥ አብረው የሚሠሩ ወጣት መሐንዲሶች",
    one: [
      {
        n: "01",
        title: "የአዋጭነት እና የገበያ ጥናቶች",
        lead: "ተቋሙ በጭራሽ መኖር አለበት ወይ የሚለውን መፈተሽ፣ ካልሆነም በግልጽ መናገር።",
        items: [
          "በአክሲዮን፣ በዕዳ እና በአማካሪ አገልግሎት ላይ የፍላጎት ግምገማ",
          "የአቅርቦትና የተፎካካሪ ካርታ",
          "የውድድር ክፍተቶችና ያልተያዙ ቦታዎች",
          "የመቀጠል / ያለመቀጠል ምክረ ሐሳብ",
        ],
      },
      {
        n: "02",
        title: "የተቋምና የንግድ ሞዴል ንድፍ",
        lead: "ተቋሙ ምን እንደሆነና እንዴት ገቢ እንደሚያገኝ መወሰን።",
        items: [
          "የምርት ድብልቅና የአገልግሎት አቅርቦት",
          "የታለሙ የደንበኛ ክፍሎችና ቅድሚያ አሰጣጥ",
          "የገቢ ምንጮችና የስርጭት ሞዴል",
          "የጋራ አገልግሎትና የአጋርነት መዋቅሮች",
        ],
      },
      {
        n: "03",
        title: "ቁጥጥር፣ ፈቃድ እና ተገዢነት",
        lead: "ተቋሙ ሕጋዊ እንዲሆንና እንዲቀጥል ማድረግ።",
        items: [
          "የቁጥጥር መዋቅርና የፈቃድ ካርታ",
          "የማመልከቻ ሰነዶችና ከተቆጣጣሪ ጋር ግንኙነት",
          "የአስተዳደር፣ የአደጋና የውስጥ ቁጥጥር ማዕቀፎች",
          "AML / KYC / CFT እና የደንበኛ ገንዘብ ንድፍ",
        ],
      },
      {
        n: "04",
        title: "የካፒታል መዋቅርና ባለቤትነት",
        lead: "ማን እንደሚይዘው፣ ማን እንደሚያስተዳድረውና እንዴት እንደሚወጡ መንደፍ።",
        items: [
          "የአክሲዮን ድርሻና የኮንሰርሺየም ንድፍ",
          "የካፒታል በቂነትና የመጠባበቂያ ዕቅድ",
          "የቦርድ ስብጥርና የተጠበቁ ጉዳዮች",
          "የባለአክሲዮኖች ስምምነትና የመውጫ ስትራቴጂ",
        ],
      },
      {
        n: "05",
        title: "የፋይናንስ ሞዴሊንግና የኢንቨስትመንት ጉዳዮች",
        lead: "ቦርድና ተቆጣጣሪ ሊመረምሩት የሚችሉ ቁጥሮች።",
        items: [
          "የበርካታ ዓመታት የገቢና የወጪ ሞዴሎች",
          "የሰው ኃይል፣ የክፍያና የወጪ ፍልስፍና",
          "የስሜታዊነትና የጭንቀት ሙከራ",
          "ለባለሀብትና ለተቆጣጣሪ የሚቀርቡ ሰነዶች",
        ],
      },
      {
        n: "06",
        title: "የፕሮግራም አፈጻጸምና ቅድመ-ክፍት PMO",
        lead: "የጸደቀን ዕቅድ ወደ ሚሠራ ተቋም መቀየር።",
        items: [
          "የፕሮጀክት አስተዳደርና ቅድመ-ክፍት PMO",
          "በደረጃ የፈቃድና የሥራ መጀመሪያ ዕቅድ",
          "የቅድመ-ክፍት በጀትና የካፒታል ስምሪት",
          "የቅጥርና የዝግጁነት ምዕራፎች",
        ],
      },
    ],
    two: [
      {
        n: "መስመር I",
        title: "የቴክኖሎጂና AI ቅጥር",
        lead: "በዩኬ፣ በአውሮፓና በባህረ ሰላጤው ላሉ ዓለም አቀፍ ደንበኞች የቴክኖሎጂና የ AI ተሰጥኦ ልዩ ቅጥር።",
        items: [
          "የሶፍትዌር፣ የመረጃ፣ የ AI/ML፣ የክላውድና የሳይበር ደህንነት ቅጥር",
          "ለቴክኖሎጂ አመራር የተያዘና የአስፈጻሚ ፍለጋ",
          "የኮንትራት ሠራተኛና የሥራ መግለጫ ምደባ",
          "የቅጥር ሂደት አውትሶርሲንግ (RPO)",
          "የቀጣሪ ውክልናና የተመራ የደመወዝ ክፍያ",
          "የደመወዝ ንጽጽርና የሰው ኃይል ምክር",
        ],
      },
      {
        n: "መስመር II",
        title: "የቴክኖሎጂ አውትሶርሲንግና አገልግሎት",
        lead: "የተመራ፣ ጥራቱ የተረጋገጠ የምህንድስና ድርጅት — ዓለም አቀፍ ደረጃን የሚያሟላ።",
        items: [
          "የተመደቡ የልማት ቡድኖችና የቡድን ማስፋፊያ",
          "ብጁ የሶፍትዌር ልማት",
          "የጥራት ማረጋገጫ፣ ሙከራና DevOps",
          "የ ERP ውህደትና የሥርዓት ማገናኛ ልማት",
          "የሳይበር ደህንነት አገልግሎትና የተመራ IT ሥራ",
          "ለፋይናንስ አገልግሎት የጀርባ ቢሮ ቴክኖሎጂ ሥራዎች",
        ],
      },
      {
        n: "መስመር III",
        title: "የቴክኖሎጂ ስልጠናና አካዳሚው",
        lead: "ከዩኒቨርሲቲዎችና ኮሌጆች ጋር በቅጥር–ስልጠና–ምደባ ሞዴል የተገነባ፦ በተረጋገጠ ፍላጎት ልክ ይሠለጥናል።",
        items: [
          "የሶፍትዌር ምህንድስና የሽግግር ፕሮግራሞች",
          "የ AI እና የማሽን ትምህርት ተግባራዊ መስመሮች",
          "የመረጃ ምህንድስና፣ ክላውድና ሳይበር ደህንነት ሰርተፍኬት",
          "ለዓለም አቀፍ አገልግሎት የእንግሊዝኛና ሙያዊ ክህሎቶች",
          "የካፒታል ገበያ ቴክኖሎጂ ስልጠና",
          "ለባንኮች፣ ለቴሌኮምና ለተቋማት የድርጅት ስልጠና",
        ],
      },
      {
        n: "መስመር IV",
        title: "የካፒታል ገበያ ቴክኖሎጂ",
        lead: "ዘመናዊ የኢንቨስትመንት ባንክ ወይም ደላላ የሚሠራባቸው ሥርዓቶች — ተነድፈው፣ ተገንብተው ወደ ምርት የሚቀየሩ።",
        items: [
          "የትዕዛዝና የግብይት አስተዳደር፤ የደላላ ሥራዎች",
          "በ KYC/AML የደንበኛ ምዝገባ",
          "የፖርትፎሊዮና የሀብት አስተዳደር ሥርዓቶች",
          "የቁጥጥር ሪፖርትና የቁጥጥር ዳሽቦርዶች",
          "የገበያ ትስስርና የገበያ መረጃ ውህደት",
          "የባለሀብት ፖርታሎችና የሞባይል መተግበሪያዎች",
        ],
      },
      {
        n: "መስመር V",
        title: "ተጓዳኝ ዕድሎች",
        lead: "ከመጀመሪያዎቹ አራት በተፈጥሮ የሚመነጩ፣ አቅምና ካፒታል ሲፈቅድ በምርጫ የሚከናወኑ መስመሮች።",
        items: [
          "በስፋት የ AI መረጃ አገልግሎት፦ ማብራሪያ፣ ግምገማና የሰው ግብረ መልስ",
          "የፊንቴክ መሠረተ ልማት፦ የክፍያ ውህደትና ክፍት-ባንኪንግ ሚድልዌር",
          "የተመራ የተሰጥኦ መድረክ፦ የተመረመረ ተሰጥኦ በደንበኝነት",
          "የቴክኖሎጂ ማስመጣትና ስርጭት",
          "የፈጠራና የቬንቸር ቧንቧ",
        ],
      },
    ],
  },
  approach: {
    eyebrow: "አቀራረብ",
    heading: "ከጥያቄ እስከ ሥራ መጀመር።",
    intro:
      "አንድን ተቋም — ወይም ከጀርባው ያለውን የቴክኖሎጂ ድርጅት — ማቋቋም አንድ ፕሮጀክት ሳይሆን ተከታታይ በሮች ናቸው፤ እያንዳንዱም ተነሳሽነቱን ሊያቆም ይችላል። ውድ የሆኑ ውሳኔዎች ርካሽ ጥያቄዎች በሐቀኝነት ከተመለሱ በኋላ ብቻ እንዲመጡ ሥራችንን እናዋቅራለን።",
    stages: [
      {
        n: "ደረጃ 01",
        title: "ግምገማ",
        body: "ገበያ፣ ፍላጎት፣ ውድድርና የቁጥጥር አዋጭነት — ካልሆነም ላለመቀጠል የመምከር ዝግጁነት።",
      },
      {
        n: "ደረጃ 02",
        title: "ንድፍ",
        body: "የንግድ ሞዴል፣ የምርት ድብልቅ፣ ባለቤትነት፣ የካፒታል መዋቅር፣ የቴክኖሎጂ አርክቴክቸርና የፋይናንስ ጉዳይ።",
      },
      {
        n: "ደረጃ 03",
        title: "ፈቃድ",
        body: "ከተቆጣጣሪ ጋር ግንኙነት፣ የማመልከቻ ሰነዶችና የተገዢነት ማዕቀፎች።",
      },
      {
        n: "ደረጃ 04",
        title: "ግንባታ",
        body: "መድረኮች፣ ሥራዎች፣ ሰዎችና ሂደቶች በአንድ ፕሮግራም ስር ይሰባሰባሉ።",
      },
      {
        n: "ደረጃ 05",
        title: "ማስረከብ",
        body: "ሥራ መጀመር፣ ማረጋጋትና ተቋሙን ለሚያንቀሳቅሰው ቡድን ማስረከብ።",
      },
    ],
  },
  focus: {
    eyebrow: "የምንሠራበት ቦታ",
    heading: "ታዳጊ የካፒታል ገበያዎች — እና የሚያንቀሳቅሳቸው ተሰጥኦ።",
    p1a: "አሁን ትኩረታችን ምስራቅ አፍሪካ ነው፣ በተለይም ",
    p1Emphasis: "ኢትዮጵያ",
    p1b: "። ብሔራዊ የካፒታል ገበያ ከመሠረቱ እየተገነባ ካሉ ጥቂት ቦታዎች አንዷ ናት፦ በ2021 የጸደቀ ሕጋዊ ማዕቀፍ፣ በጥር 2025 ግብይት የጀመረ የሴኩሪቲ ገበያ፣ እና የመጀመሪያውን ትውልድ የኢንቨስትመንት ባንኮች፣ ደላሎችና አማካሪዎች የሚያስፈቅድ ተቆጣጣሪ።",
    p2: "አሁን የሚነደፉ ተቋማት ገበያው የሚወርሳቸውን መስፈርቶች ያስቀምጣሉ። ይህ ያልተለመደ ተጽዕኖ ያለው ሥራ ነው፤ የራሳችንንም ጥናትና ንድፍ ጥረት ያሰባሰብንበት ነው።",
    p3: "ተመሳሳዩ ገበያ የሥራችንን ሁለተኛ ግማሽ አስቸኳይ ያደርገዋል። ዓለም አቀፍ የቴክኖሎጂና የ AI ክህሎት ፍላጎት ከአቅርቦት እያለፈ ነው፤ ምስራቅ አፍሪካ ደግሞ ትልቅ፣ ወጣትና በፍጥነት እያደገ ያለ የተመራቂ ሕዝብ አላት። እነዚህን ሁለቱን ማገናኘት — በአግባቡ ሠልጥኖ፣ በአግባቡ ተመርቶ፣ ዓለም አቀፍ ደረጃን አሟልቶ — የምንገነባለት ዕድል ነው።",
    facts: [
      {
        title: "የካፒታል ገበያ አዋጅ፣ 2021",
        body: "የኢትዮጵያ የሴኩሪቲ ገበያ ሕጋዊ ማዕቀፍ፣ የኢትዮጵያ ካፒታል ገበያ ባለሥልጣንን ያቋቋመ።",
      },
      {
        title: "ገበያው በጥር 2025 ተከፈተ",
        body: "የኢትዮጵያ ሴኩሪቲ ገበያ ሥራ ጀመረ፤ ይህም ፈቃድ ላላቸው አማላጆች ፍላጎት ፈጥሯል።",
      },
      {
        title: "እያደገ ያለ የአውትሶርሲንግ ገበያ",
        body: "የኢትዮጵያ የቢዝነስ ሂደት አውትሶርሲንግ ገበያ በ2025 በግምት 490 ሚሊዮን ዶላር ሲሆን በ2030 ወደ 846 ሚሊዮን ዶላር ይደርሳል ተብሎ ይጠበቃል። ምንጭ፦ Addis Insight, 2025።",
      },
      {
        title: "እየተገነባ ያለ ገበያ እንጂ የተጠናቀቀ አይደለም",
        body: "ምርቶች፣ መሠረተ ልማትና መስፈርቶች አሁንም እየተቀመጡ ናቸው — በቅድሚያ በሚደርሱትም ይቀረጻሉ።",
      },
    ],
  },
  contact: {
    eyebrow: "አግኙን",
    headingA: "ውይይት ",
    headingHighlight: "ይጀምሩ።",
    body: "የፋይናንስ ተቋም ማቋቋም፣ ከጀርባው ያለውን የቴክኖሎጂ አቅም መገንባት ወይም አንድ ተነሳሽነት አዋጭ መሆኑን መፈተሽ እያሰቡ ከሆነ — ልንነጋገር በደስታ እንፈልጋለን።",
    email: "ኢሜይል",
    phone: "ስልክ",
    company: "ስትራቴጂ ኢኖቬሽንስ",
    person: "ፒተር ሞሪስ",
    offices: "ቢሮዎች",
    uk: "ዩናይትድ ኪንግደም",
    et: "አዲስ አበባ፣ ኢትዮጵያ",
    footerTag: "የካፒታል ገበያ · ተቋማት · ቴክኖሎጂ እና ተሰጥኦ",
  },
  chat: {
    open: "ውይይት ክፈት",
    close: "ውይይት ዝጋ",
    title: "ስትራቴጂ ኢኖቬሽንስ",
    subtitle: "አብዛኛውን ጊዜ በአንድ ቀን ውስጥ ምላሽ ይሰጣል",
    greeting: "ሰላም 👋 ዛሬ እንዴት ልረዳዎት እችላለሁ?",
    options: ["የፋይናንስ ተቋም ማቋቋም", "የቴክኖሎጂና ተሰጥኦ አገልግሎቶች", "ሌላ ነገር"],
    reply:
      "እናመሰግናለን — የቡድናችን አባል ያገኝዎታል። በ peter.morris@strategy-innovations.com ኢሜይል መላክም ይችላሉ።",
    placeholder: "መልእክት ይጻፉ…",
    send: "ላክ",
  },
};

const dictionaries: Record<Lang, Dict> = { en, am };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };

const LanguageContext = createContext<Ctx>({ lang: "en", setLang: () => {}, t: en });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem("si-lang");
    if (stored === "am" || stored === "en") setLang(stored);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("si-lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t: dictionaries[lang] }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useI18n() {
  return useContext(LanguageContext);
}
