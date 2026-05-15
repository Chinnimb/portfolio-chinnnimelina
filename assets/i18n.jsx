// === i18n: ES / EN ===
const TRANSLATIONS = {
  es: {
    nav: { home: "inicio", about: "sobre mí", work: "trabajos", contact: "contacto" },
    hero: {
      kicker: "PORTFOLIO · 2026",
      role: "UX/UI · Visual Design · Branding",
      lede: "Diseño con criterio visual y cabeza de producto. No solo pantallas: research honesto, UI que comunica y branding que se recuerda.",
      cta1: "Ver trabajos",
      cta2: "Contactame",
      stat1: "años diseñando",
      stat2: "proyectos entregados",
      stat3: "países · clientes",
      portrait: "retrato",
      botanic: "botánica",
      badge: "Diseñadora",
    },
    about: {
      kicker: "— SOBRE MÍ",
      title: "Let your visuals\ntell a story",
      body: "Trabajo desde Buenos Aires para equipos en distintos países. Me especializo en el espacio donde UX y diseño visual se cruzan: que algo funcione bien y se vea increíble no deberían ser cosas separadas.",
      body2: "Uso IA de verdad en mi proceso — no como tendencia, sino porque libera tiempo para lo que importa: entender el problema y resolverlo bien.",
      facts: ["UX + Visual Design", "Buenos Aires · remoto", "Figma · Claude", "Disponible para proyectos"],
    },
    work: {
      kicker: "— PROYECTOS SELECCIONADOS",
      title: "Trabajos recientes",
      lede: "Producto, branding y todo lo que pasa en el medio. Mis últimos trabajos.",
      seeAll: "Ver todos los trabajos",
      caseLink: "Ver caso →",
      projects: [
        { title: "ALEO Brandbook", subtitle: "Indumentaria deportiva · Branding", desc: "Identidad visual completa para una marca de ropa deportiva argentina: logo, paleta, brandbook digital e impreso.", metricLabel: "seguidores nuevos" },
        { title: "Flok · Family Planner", subtitle: "App familiar · UX/UI", desc: "Diseño completo de UX e interfaz para una app de planner familiar que conecta a toda la familia, incluso en casos de padres separados.", metricLabel: "de inicio a fin" },
        { title: "Rediseño E-commerce", subtitle: "Moda online · Mobile-first", desc: "Le dimos una vuelta completa al checkout para que comprar desde el celu sea más fácil que pensar en comprar.", metricLabel: "conversión" },
      ],
    },
    process: {
      kicker: "— CÓMO TRABAJO",
      title: "Mi proceso",
      lede: "Sin fórmulas mágicas: investigar, diseñar, iterar. Y usar IA donde realmente ahorra tiempo, no como adorno.",
      steps: [
        { title: "Escuchar", desc: "Antes de abrir Figma, entender qué problema estamos resolviendo, y para quién." },
        { title: "Explorar", desc: "Flujos, referencias, bocetos rápidos. Probar muchas ideas baratas antes de comprometerse con una." },
        { title: "Prototipar", desc: "Iterar hasta que se sienta bien. No hasta que se vea bien, eso es fácil." },
        { title: "Pulir", desc: "Detalles, accesibilidad y un handoff a desarrollo que no haga llorar a nadie." },
      ],
    },
    tools: { kicker: "— SERVICIOS", title: "Mis servicios" },
    contact: {
      kicker: "— HABLEMOS",
      title1: "Contactame",
      lede: "¿Tenés un proyecto, una idea o ganas de tomar un café virtual? Respondo en menos de 24hs, prometido.",
      email: "melinabelenchinni@gmail.com",
    },
    footer: "© 2026 Melina Chinni · diseñado con",
  },
  en: {
    nav: { home: "home", about: "about", work: "work", contact: "contact" },
    hero: {
      kicker: "PORTFOLIO · 2026",
      role: "UX/UI · Visual Design · Branding",
      lede: "Visual thinking meets product logic. Not just pretty screens: honest research, UI that communicates and branding that sticks.",
      cta1: "See my work",
      cta2: "Get in touch",
      stat1: "years designing",
      stat2: "projects delivered",
      stat3: "countries · clients",
      portrait: "portrait",
      botanic: "botanic",
      badge: "Designer",
    },
    about: {
      kicker: "— ABOUT ME",
      title: "Editorial eye,\nproduct brain",
      body: "Based in Buenos Aires, working with teams across countries. I specialize in the space where UX and visual design meet: something working well and looking great shouldn't be separate goals.",
      body2: "I use AI as a real part of my process — not as a trend, but because it frees time for what actually matters: understanding the problem and solving it right.",
      facts: ["UX + Visual Design", "Buenos Aires · remote", "Figma · Claude", "Available for projects"],
    },
    work: {
      kicker: "— SELECTED PROJECTS",
      title: "Recent work",
      lede: "Product, branding and everything in between. Here are a few I had the most fun making.",
      seeAll: "See all projects",
      caseLink: "View case →",
      projects: [
        { title: "ALEO Brandbook", subtitle: "Sportswear · Branding", desc: "Full visual identity for an Argentine sportswear brand: logo, palette, digital and print brandbook.", metricLabel: "new followers" },
        { title: "Flok · Family Planner", subtitle: "Family app · UX/UI", desc: "Full UX and UI design for a family planner app that connects the whole family — even separated parents.", metricLabel: "start to finish" },
        { title: "E-commerce Redesign", subtitle: "Online fashion · Mobile-first", desc: "Rebuilt the checkout so buying from your phone feels easier than thinking about buying.", metricLabel: "conversion" },
      ],
    },
    process: {
      kicker: "— HOW I WORK",
      title: "My process",
      lede: "No magic formula: research, design, iterate. And AI where it actually saves time, not as decoration.",
      steps: [
        { title: "Listen", desc: "Before opening Figma, understanding what we're really solving, and for whom." },
        { title: "Explore", desc: "Flows, references, fast sketches. Try a lot of cheap ideas before committing to one." },
        { title: "Prototype", desc: "Iterate until it feels right. Not until it looks right, that part is easy." },
        { title: "Polish", desc: "Details, accessibility and a handoff to dev that nobody cries over." },
      ],
    },
    tools: { kicker: "— SERVICES", title: "My services" },
    contact: {
      kicker: "— LET'S TALK",
      title1: "Get in touch",
      lede: "Got a project, an idea, or just feel like a virtual coffee? I reply within 24hs, promise.",
      email: "melinabelenchinni@gmail.com",
    },
    footer: "© 2026 Melina Chinni · designed with",
  },
};

const LangContext = React.createContext({ lang: "es", t: TRANSLATIONS.es, setLang: () => {} });

const LangProvider = ({ children }) => {
  const [lang, setLangState] = React.useState(() => {
    try { return localStorage.getItem("mc_lang") || "es"; } catch { return "es"; }
  });
  const setLang = React.useCallback((l) => {
    setLangState(l);
    try { localStorage.setItem("mc_lang", l); } catch {}
    document.documentElement.lang = l;
  }, []);
  React.useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  const value = React.useMemo(() => ({ lang, setLang, t: TRANSLATIONS[lang] }), [lang, setLang]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};

const useT = () => React.useContext(LangContext);

const LangSwitch = () => {
  const { lang, setLang } = useT();
  return (
    <div className="lang-switch" role="group" aria-label="Language">
      <button
        type="button"
        className={lang === "es" ? "active" : ""}
        onClick={() => setLang("es")}
        aria-pressed={lang === "es"}
      >ES</button>
      <span className="lang-divider">/</span>
      <button
        type="button"
        className={lang === "en" ? "active" : ""}
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
      >EN</button>
    </div>
  );
};

Object.assign(window, { LangProvider, LangContext, useT, LangSwitch, TRANSLATIONS });
