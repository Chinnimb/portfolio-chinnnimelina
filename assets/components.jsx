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

// === Logo: "C" almohadón peludo en lila (generado en Higgsfield) ===
const Logo = ({ size = 40 }) => (
  <img className="brand-logo" src="assets/logo/chinni-c.webp" alt="" width={size} height={size} />
);

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
          <Logo size={44} />
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
        <a href="index.html" className="footer-logo"><Logo size={34} /> chinni studio</a>
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
          <a href="https://www.upwork.com/freelancers/~0130a1107f75341044" target="_blank" rel="noopener" className="chip-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/></svg>
            Upwork
          </a>
          <a href="https://www.behance.net/melinachinni" target="_blank" rel="noopener" className="chip-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.969 16.927a2.561 2.561 0 0 0 1.901.677 2.501 2.501 0 0 0 1.531-.475c.362-.235.636-.584.779-.99h2.585a5.091 5.091 0 0 1-1.9 2.896 5.292 5.292 0 0 1-3.091.88 5.839 5.839 0 0 1-2.284-.433 4.871 4.871 0 0 1-1.723-1.211 5.657 5.657 0 0 1-1.08-1.874 7.057 7.057 0 0 1-.383-2.393c-.005-.8.129-1.595.396-2.349a5.313 5.313 0 0 1 5.088-3.604 4.87 4.87 0 0 1 2.376.563c.661.362 1.231.87 1.668 1.485a6.2 6.2 0 0 1 .943 2.133c.194.821.263 1.666.205 2.508h-7.699c-.063.79.184 1.574.688 2.187ZM6.947 4.084a8.065 8.065 0 0 1 1.928.198 4.29 4.29 0 0 1 1.49.638c.418.303.748.711.958 1.182.241.579.357 1.203.341 1.83a3.506 3.506 0 0 1-.506 1.961 3.726 3.726 0 0 1-1.503 1.287 3.588 3.588 0 0 1 2.027 1.437c.464.747.697 1.615.67 2.494a4.593 4.593 0 0 1-.423 2.032 3.945 3.945 0 0 1-1.163 1.413 5.114 5.114 0 0 1-1.683.807 7.135 7.135 0 0 1-1.928.259H0V4.084h6.947Zm-.235 12.9c.308.004.616-.029.916-.099a2.18 2.18 0 0 0 .766-.332c.228-.158.411-.371.534-.619.142-.317.208-.663.191-1.009a2.08 2.08 0 0 0-.642-1.715 2.618 2.618 0 0 0-1.696-.505h-3.54v4.279h3.471Zm13.635-5.967a2.13 2.13 0 0 0-1.654-.619 2.336 2.336 0 0 0-1.163.259 2.474 2.474 0 0 0-.738.62 2.359 2.359 0 0 0-.396.792c-.074.239-.12.485-.137.734h4.769a3.239 3.239 0 0 0-.679-1.785l-.002-.001Zm-13.813-.648a2.254 2.254 0 0 0 1.423-.433c.399-.355.607-.88.56-1.413a1.916 1.916 0 0 0-.178-.891 1.298 1.298 0 0 0-.495-.533 1.851 1.851 0 0 0-.711-.274 3.966 3.966 0 0 0-.835-.073H3.241v3.631h3.293v-.014ZM21.62 5.122h-5.976v1.527h5.976V5.122Z"/></svg>
            Behance
          </a>
          <a href="https://contra.com/melina_chinni_3rdmrgsg/work?r=melina_chinni_3rdmrgsg" target="_blank" rel="noopener" className="chip-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="7" width="18" height="13" rx="2.5"/><path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7"/><path d="M3 12.5h18"/></svg>
            Contra
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
  CursorSticker, Logo, Nav, Footer, ContactCTA, useReveal, ParallaxSticker, TweaksPanel,
});
