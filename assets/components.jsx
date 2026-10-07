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
  CursorSticker, Nav, Footer, useReveal, ParallaxSticker, TweaksPanel,
});
