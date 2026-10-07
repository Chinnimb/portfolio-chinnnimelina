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
    studio: {
      kicker: "Melina Chinni · Buenos Aires",
      lede: "Diseño UX/UI, e-commerce y branding para marcas que quieren verse bien y funcionar todavía mejor.",
      cta1: "Ver trabajos",
      cta2: "Contacto",
      servicesKicker: "Servicios",
      servicesTitle: "Mis <em>servicios</em>",
      servicesLede: "Acompaño cada proyecto de punta a punta: estrategia, diseño y piezas listas para lanzar.",
      services: [
        { title: "UX / UI Design", desc: "Apps, webs y dashboards pensados desde el usuario, con interfaces claras y consistentes.", items: ["Apps y sitios web", "Dashboards", "Rediseños", "Design systems"], tools: "Figma · Framer · Maze" },
        { title: "AI Native Designer", desc: "Diseño desde cero y lo dejo funcionando: del prototipo al sitio publicado, con IA en cada paso.", items: ["Diseño desde cero", "Prototipos funcionales", "Desarrollo con IA", "Publicación online"], tools: "Figma Make · Claude · GitHub · Vercel" },
        { title: "Diseño de e‑commerce", desc: "Tiendas online que guían la compra, desde la home hasta el checkout.", items: ["Tiendas online", "Fichas de producto", "Optimización del checkout", "Experiencia mobile"], tools: "Figma · Shopify · Tiendanube" },
        { title: "Branding", desc: "Identidades visuales con personalidad, coherentes en pantalla, impresas y en redes.", items: ["Identidad visual", "Brandbook", "Diseño de anuncios", "Guías de marca"], tools: "Figma · Illustrator · Spline" },
        { title: "Imágenes y video con IA", desc: "Contenido visual generado con IA, dirigido con criterio de marca.", items: ["Fotos de producto", "Campañas y anuncios", "Videos para redes", "Escenas y ambientaciones"], tools: "Midjourney · Higgsfield · Runway" },
      ],
      requestCta: "Solicitar servicio",
      prevLabel: "Servicio anterior",
      nextLabel: "Servicio siguiente",
      form: {
        title: "Contame sobre tu proyecto",
        intro: "Con estas respuestas puedo entender qué necesitás y escribirte con una propuesta concreta.",
        name: "Nombre",
        email: "Email",
        company: "Marca o empresa",
        companyHint: "Opcional",
        phone: "Teléfono o WhatsApp",
        phoneHint: "Opcional",
        service: "Servicio",
        projectType: "Tipo de proyecto",
        projectTypes: ["Algo nuevo desde cero", "Rediseño o mejora", "Todavía no lo sé"],
        goal: "¿Qué necesitás y qué querés lograr?",
        goalHint: "Contame el contexto, el objetivo y para quién es.",
        timeline: "¿Para cuándo lo necesitás?",
        timelines: ["Lo antes posible", "En 1 a 3 meses", "En más de 3 meses", "Flexible"],
        budget: "Presupuesto estimado",
        budgets: ["Menos de USD 500", "USD 500 – 1.500", "USD 1.500 – 3.000", "Más de USD 3.000", "Prefiero conversarlo"],
        assets: "¿Ya tenés marca o contenido?",
        assetsOptions: ["Sí, todo listo", "Algunas cosas", "No, empiezo de cero"],
        links: "Web o redes",
        linksHint: "Opcional",
        submit: "Enviar solicitud",
        sending: "Enviando…",
        sentTitle: "¡Gracias! Ya recibí tu solicitud",
        sentBody: "Te escribo dentro de las próximas 24 horas al email que dejaste.",
        mailtoTitle: "Tu solicitud está lista",
        mailtoBody: "Se abrió tu programa de mail con todas tus respuestas. Solo falta que la envíes.",
        error: "No se pudo enviar. Probá de nuevo o escribime directo a",
        close: "Cerrar",
        required: "Obligatorio",
      },
      workKicker: "Portfolio",
      workTitle: "Trabajos <em>recientes</em>",
      filtersLabel: "Filtrar trabajos por categoría",
      filters: [{ id: "all", label: "Todos" }, { id: "uxui", label: "UX/UI" }, { id: "redesign", label: "Redesign" }, { id: "branding", label: "Branding" }, { id: "ecommerce", label: "E‑commerce" }, { id: "ai", label: "AI Generation" }],
      emptyFilter: "Próximamente: proyectos de generación de imágenes y video con IA.",
      workLede: "Una selección de proyectos de producto, e-commerce y marca.",
      seeAll: "Ver todos los trabajos",
      contactKicker: "Contacto",
      contactTitle: "Trabajemos <em>juntos</em>",
      contactLede: "Contame sobre tu proyecto y te respondo dentro de las 24 horas.",
      contactCta: "Escribime",
    },
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
    studio: {
      kicker: "Melina Chinni · Buenos Aires",
      lede: "UX/UI, e-commerce and brand design for brands that want to look good and work even better.",
      cta1: "See my work",
      cta2: "Contact",
      servicesKicker: "Services",
      servicesTitle: "My <em>services</em>",
      servicesLede: "I take each project end to end: strategy, design and assets ready to launch.",
      services: [
        { title: "UX / UI Design", desc: "Apps, websites and dashboards built around the user, with clear and consistent interfaces.", items: ["Apps & websites", "Dashboards", "Redesigns", "Design systems"], tools: "Figma · Framer · Maze" },
        { title: "AI Native Designer", desc: "I design from scratch and ship it working: from prototype to live site, with AI at every step.", items: ["Design from scratch", "Working prototypes", "AI-assisted development", "Going live"], tools: "Figma Make · Claude · GitHub · Vercel" },
        { title: "E‑commerce design", desc: "Online stores that guide the purchase, from the homepage to checkout.", items: ["Online stores", "Product pages", "Checkout optimization", "Mobile experience"], tools: "Figma · Shopify · Tiendanube" },
        { title: "Branding", desc: "Visual identities with personality, consistent on screen, in print and on social.", items: ["Visual identity", "Brandbook", "Ad design", "Brand guidelines"], tools: "Figma · Illustrator · Spline" },
        { title: "AI images & video", desc: "AI-generated visual content, art-directed with a brand eye.", items: ["Product photography", "Campaigns & ads", "Social video", "Scenes & settings"], tools: "Midjourney · Higgsfield · Runway" },
      ],
      requestCta: "Request service",
      prevLabel: "Previous service",
      nextLabel: "Next service",
      form: {
        title: "Tell me about your project",
        intro: "These answers help me understand what you need and get back to you with a concrete proposal.",
        name: "Name",
        email: "Email",
        company: "Brand or company",
        companyHint: "Optional",
        phone: "Phone or WhatsApp",
        phoneHint: "Optional",
        service: "Service",
        projectType: "Project type",
        projectTypes: ["Something new from scratch", "Redesign or improvement", "Not sure yet"],
        goal: "What do you need and what do you want to achieve?",
        goalHint: "Share the context, the goal and who it's for.",
        timeline: "When do you need it?",
        timelines: ["As soon as possible", "In 1 to 3 months", "In more than 3 months", "Flexible"],
        budget: "Estimated budget",
        budgets: ["Under USD 500", "USD 500 – 1,500", "USD 1,500 – 3,000", "Over USD 3,000", "I'd rather discuss it"],
        assets: "Do you already have a brand or content?",
        assetsOptions: ["Yes, all set", "Some things", "No, starting from scratch"],
        links: "Website or social",
        linksHint: "Optional",
        submit: "Send request",
        sending: "Sending…",
        sentTitle: "Thank you! I got your request",
        sentBody: "I'll write to you within the next 24 hours at the email you left.",
        mailtoTitle: "Your request is ready",
        mailtoBody: "Your email app opened with all your answers. You just need to hit send.",
        error: "It couldn't be sent. Please try again or email me directly at",
        close: "Close",
        required: "Required",
      },
      workKicker: "Portfolio",
      workTitle: "Recent <em>work</em>",
      filtersLabel: "Filter work by category",
      filters: [{ id: "all", label: "All" }, { id: "uxui", label: "UX/UI" }, { id: "redesign", label: "Redesign" }, { id: "branding", label: "Branding" }, { id: "ecommerce", label: "E‑commerce" }, { id: "ai", label: "AI Generation" }],
      emptyFilter: "AI image and video generation projects are coming soon.",
      workLede: "A selection of product, e-commerce and brand projects.",
      seeAll: "See all projects",
      contactKicker: "Contact",
      contactTitle: "Let's work <em>together</em>",
      contactLede: "Tell me about your project and I'll get back to you within 24 hours.",
      contactCta: "Write to me",
    },
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
