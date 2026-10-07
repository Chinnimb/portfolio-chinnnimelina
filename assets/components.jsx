/* Shared components: nav, footer, reveal, tweaks panel */

// === Adornos del estilo anterior (stickers botánicos, washi tape, cursor de hojita) ===
// El estilo "Chinni Design Studio" no los usa. Quedan como componentes vacíos para que
// las páginas que todavía los nombran sigan funcionando sin mostrarlos.
const Nothing = () => null;
const LeafSticker = Nothing;
const BranchSticker = Nothing;
const SquiggleSticker = Nothing;
const CircleSticker = Nothing;
const FlowerSticker = Nothing;
const StarburstSticker = Nothing;
const DotDashSticker = Nothing;
const WashiTape = Nothing;
const CursorSticker = Nothing;

// === Nav ===
const Nav = ({ active = "home", overlay = false }) => {
  const { t } = useT();
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`nav ${overlay ? "overlay" : ""} ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <a href="index.html" className="nav-logo">
          <span className="leaf-mark">
            <svg width="28" height="26" viewBox="0 0 185 173" fill="currentColor">
              <path d="M 0 70 L 0 71 L 6 72 L 12 78 L 21 94 L 31 105 L 55 121 L 84 136 L 86 136 L 105 145 L 129 153 L 132 155 L 152 161 L 155 163 L 161 164 L 184 172 L 177 170 L 164 164 L 162 164 L 148 157 L 146 157 L 116 142 L 114 140 L 106 136 L 86 122 L 72 108 L 67 101 L 63 93 L 62 83 L 61 82 L 62 72 L 63 71 L 63 68 L 70 54 L 90 24 L 94 20 L 104 6 L 110 0 L 68 36 L 47 58 L 35 75 L 31 76 L 20 64 L 17 63 L 11 64 L 6 68 Z"/>
            </svg>
          </span>
          chinni studio
        </a>
        <div className="nav-links">
          <a href="index.html" className={`link-animated ${active === "home" ? "active" : ""}`}>{t.nav.home}</a>
          <a href="work.html" className={`link-animated ${active === "work" ? "active" : ""}`}>{t.nav.work}</a>
          <a href="about.html" className={`link-animated ${active === "about" ? "active" : ""}`}>{t.nav.about}</a>
          <a href="contact.html" className={`link-animated ${active === "contact" ? "active" : ""}`}>{t.nav.contact}</a>
          <LangSwitch />
        </div>
      </div>
    </nav>
  );
};

// === Footer ===
const Footer = () => {
  const { t } = useT();
  return (
    <footer className="footer" id="contact">
      <div className="footer-inner">
        <a href="index.html" className="footer-logo">chinni studio</a>
        <span>{t.footer}</span>
        <div className="footer-links">
          <a href="work.html">{t.nav.work}</a>
          <a href="contact.html">{t.nav.contact}</a>
          <a href="https://www.linkedin.com/in/melinachinni/" target="_blank" rel="noopener">LinkedIn ↗</a>
        </div>
      </div>
    </footer>
  );
};

// === CTA de contacto (el mismo en todas las páginas) ===
const ContactCTA = () => {
  const { t } = useT();
  const c = t.cta;
  const email = "melinabelenchinni@gmail.com";
  return (
    <section className="contact-band" id="contacto">
      <div className="container-narrow reveal">
        <div className="eyebrow">{c.kicker}</div>
        <h2 dangerouslySetInnerHTML={{ __html: c.title }} />
        <p className="lede">{c.lede}</p>
        <a href={`mailto:${email}`} className="btn btn-light">{c.button}
          <svg className="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </a>
        <div className="contact-links">
          <a href={`mailto:${email}`} className="chip-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/></svg>
            {email}
          </a>
          <a href="https://www.linkedin.com/in/melinachinni/" target="_blank" rel="noopener" className="chip-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            LinkedIn
          </a>
          <a href="https://wa.me/5491122896457" target="_blank" rel="noopener" className="chip-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

// === Reveal on scroll hook ===
const useReveal = () => {
  React.useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
};

// === Parallax sticker ===
const ParallaxSticker = ({ children, speed = 0.3, top, left, right, bottom }) => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const y = window.scrollY * speed;
      ref.current.style.transform = `translateY(${y}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);
  return (
    <div ref={ref} className="sticker" style={{ top, left, right, bottom, zIndex: 1 }}>
      {children}
    </div>
  );
};

// === Tweaks panel ===
const TweaksPanel = () => {
  const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
    "palette": "niebla",
    "fonts": "default",
    "anim": 1,
    "botanical": 1
  }/*EDITMODE-END*/;
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState(TWEAK_DEFAULTS);

  React.useEffect(() => {
    const handler = (e) => {
      if (e.data?.type === "__activate_edit_mode") setOpen(true);
      if (e.data?.type === "__deactivate_edit_mode") setOpen(false);
    };
    window.addEventListener("message", handler);
    window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", handler);
  }, []);

  React.useEffect(() => {
    document.body.dataset.palette = state.palette;
    document.body.dataset.fonts = state.fonts;
    document.documentElement.style.setProperty("--anim", state.anim);
    document.documentElement.style.setProperty("--botanical", state.botanical);
  }, [state]);

  const update = (key, value) => {
    const next = { ...state, [key]: value };
    setState(next);
    window.parent.postMessage({ type: "__edit_mode_set_keys", edits: { [key]: value } }, "*");
  };

  if (!open) return null;
  return (
    <div className="tweaks-panel open">
      <h4>Tweaks</h4>
      <div className="tweak-row">
        <label>Paleta</label>
        <select value={state.palette} onChange={e => update("palette", e.target.value)}>
          <option value="niebla">Niebla</option>
          <option value="earth">Tierra cálida</option>
          <option value="pastel">Pasteles</option>
          <option value="forest">Bosque profundo</option>
        </select>
      </div>
      <div className="tweak-row">
        <label>Tipografías</label>
        <select value={state.fonts} onChange={e => update("fonts", e.target.value)}>
          <option value="default">Hand + Serif</option>
          <option value="serif">Hand + Serif clásico</option>
          <option value="sans">Hand + Sans moderno</option>
          <option value="mono">Hand + Mono</option>
        </select>
      </div>
      <div className="tweak-row">
        <label>Animaciones: {Math.round(state.anim * 100)}%</label>
        <input type="range" min="0" max="1.5" step="0.1" value={state.anim}
               onChange={e => update("anim", parseFloat(e.target.value))} />
      </div>
      <div className="tweak-row">
        <label>Stickers botánicos: {Math.round(state.botanical * 100)}%</label>
        <input type="range" min="0" max="1.5" step="0.1" value={state.botanical}
               onChange={e => update("botanical", parseFloat(e.target.value))} />
      </div>
    </div>
  );
};

// Export globally
Object.assign(window, {
  LeafSticker, BranchSticker, SquiggleSticker, CircleSticker,
  FlowerSticker, StarburstSticker, DotDashSticker, WashiTape,
  CursorSticker, Nav, Footer, ContactCTA, useReveal, ParallaxSticker, TweaksPanel,
});
