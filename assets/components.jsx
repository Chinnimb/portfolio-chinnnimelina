/* Shared components: stickers SVG, nav, footer, cursor, tweaks panel */

// === Botanical SVG stickers ===
const LeafSticker = ({ size = 40, color = "var(--olive)", rotate = 0, style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" style={{ transform: `rotate(${rotate}deg)`, ...style }}>
    <path d="M20 4 C 8 10, 6 28, 20 36 C 34 28, 32 10, 20 4 Z" fill={color} opacity="0.9" />
    <path d="M20 6 L 20 34" stroke="#faf5ea" strokeWidth="1" fill="none" opacity="0.6" />
    <path d="M20 14 Q 26 16, 28 20" stroke="#faf5ea" strokeWidth="0.8" fill="none" opacity="0.5" />
    <path d="M20 22 Q 14 24, 12 28" stroke="#faf5ea" strokeWidth="0.8" fill="none" opacity="0.5" />
  </svg>
);

const BranchSticker = ({ size = 80, color = "var(--olive)", rotate = 0, style = {} }) => (
  <svg width={size} height={size * 0.6} viewBox="0 0 80 48" style={{ transform: `rotate(${rotate}deg)`, ...style }}>
    <path d="M4 40 Q 30 20, 76 8" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <ellipse cx="20" cy="28" rx="5" ry="3" fill={color} transform="rotate(-20 20 28)" opacity="0.85" />
    <ellipse cx="35" cy="20" rx="6" ry="3.5" fill={color} transform="rotate(-15 35 20)" opacity="0.85" />
    <ellipse cx="52" cy="14" rx="5" ry="3" fill={color} transform="rotate(-10 52 14)" opacity="0.85" />
    <ellipse cx="68" cy="10" rx="4" ry="2.5" fill={color} transform="rotate(-5 68 10)" opacity="0.85" />
    <ellipse cx="28" cy="34" rx="4" ry="2.5" fill={color} transform="rotate(10 28 34)" opacity="0.7" />
    <ellipse cx="45" cy="26" rx="4" ry="2.5" fill={color} transform="rotate(15 45 26)" opacity="0.7" />
  </svg>
);

const SquiggleSticker = ({ size = 60, color = "var(--rust)", rotate = 0, style = {} }) => (
  <svg width={size} height={size * 0.4} viewBox="0 0 60 24" style={{ transform: `rotate(${rotate}deg)`, ...style }}>
    <path d="M4 12 Q 12 4, 20 12 T 36 12 T 56 12" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" />
  </svg>
);

const CircleSticker = ({ size = 40, color = "var(--mustard)", style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" style={style}>
    <circle cx="20" cy="20" r="14" fill="none" stroke={color} strokeWidth="2" strokeDasharray="3 3" />
  </svg>
);

const FlowerSticker = ({ size = 36, color = "var(--terracotta)", rotate = 0, style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 36 36" style={{ transform: `rotate(${rotate}deg)`, ...style }}>
    {[0, 72, 144, 216, 288].map(a => (
      <ellipse key={a} cx="18" cy="8" rx="4" ry="7" fill={color} opacity="0.9" transform={`rotate(${a} 18 18)`} />
    ))}
    <circle cx="18" cy="18" r="3" fill="var(--mustard)" />
  </svg>
);

const StarburstSticker = ({ size = 40, color = "var(--mustard)", style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" style={style}>
    <g stroke={color} strokeWidth="2" strokeLinecap="round" fill="none">
      <line x1="20" y1="4" x2="20" y2="12" />
      <line x1="20" y1="28" x2="20" y2="36" />
      <line x1="4" y1="20" x2="12" y2="20" />
      <line x1="28" y1="20" x2="36" y2="20" />
      <line x1="9" y1="9" x2="14" y2="14" />
      <line x1="26" y1="26" x2="31" y2="31" />
      <line x1="9" y1="31" x2="14" y2="26" />
      <line x1="26" y1="14" x2="31" y2="9" />
    </g>
    <circle cx="20" cy="20" r="3" fill={color} />
  </svg>
);

const DotDashSticker = ({ size = 80, color = "var(--olive)", rotate = 0, style = {} }) => (
  <svg width={size} height="8" viewBox="0 0 80 8" style={{ transform: `rotate(${rotate}deg)`, ...style }}>
    <line x1="0" y1="4" x2="80" y2="4" stroke={color} strokeWidth="1.5" strokeDasharray="2 4" strokeLinecap="round" />
  </svg>
);

const WashiTape = ({ width = 120, rotate = 0, style = {}, color1 = "var(--mustard-soft)", color2 = "var(--sage-soft)" }) => (
  <div style={{
    width, height: 28,
    background: `repeating-linear-gradient(45deg, ${color1} 0 10px, ${color2} 10px 20px)`,
    transform: `rotate(${rotate}deg)`,
    opacity: 0.75,
    boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
    ...style,
  }} />
);

// === Custom cursor sticker ===
const CursorSticker = () => {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  const [rotating, setRotating] = React.useState(0);

  React.useEffect(() => {
    let raf;
    let x = 0, y = 0, tx = 0, ty = 0, rot = 0;
    const onMove = (e) => {
      x = e.clientX; y = e.clientY;
      if (!visible) setVisible(true);
    };
    const loop = () => {
      tx += (x - tx) * 0.18;
      ty += (y - ty) * 0.18;
      rot += 0.6;
      if (ref.current) {
        ref.current.style.transform = `translate(${tx}px, ${ty}px) translate(-50%, -50%) rotate(${rot}deg)`;
      }
      raf = requestAnimationFrame(loop);
    };
    const onLeave = () => setVisible(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    loop();
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className={`cursor-sticker ${visible ? "visible" : ""}`}>
      <LeafSticker size={28} color="var(--olive)" />
    </div>
  );
};

// === Nav ===
const Nav = ({ active = "home" }) => {
  const { t } = useT();
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="index.html" className="nav-logo">
          <span className="leaf-mark">
            <svg width="28" height="26" viewBox="0 0 185 173" fill="currentColor">
              <path d="M 0 70 L 0 71 L 6 72 L 12 78 L 21 94 L 31 105 L 55 121 L 84 136 L 86 136 L 105 145 L 129 153 L 132 155 L 152 161 L 155 163 L 161 164 L 184 172 L 177 170 L 164 164 L 162 164 L 148 157 L 146 157 L 116 142 L 114 140 L 106 136 L 86 122 L 72 108 L 67 101 L 63 93 L 62 83 L 61 82 L 62 72 L 63 71 L 63 68 L 70 54 L 90 24 L 94 20 L 104 6 L 110 0 L 68 36 L 47 58 L 35 75 L 31 76 L 20 64 L 17 63 L 11 64 L 6 68 Z"/>
            </svg>
          </span>
          melina.
        </a>
        <div className="nav-links">
          <a href="index.html" className={`link-animated ${active === "home" ? "active" : ""}`}>{t.nav.home}</a>
          <a href="about.html" className={`link-animated ${active === "about" ? "active" : ""}`}>{t.nav.about}</a>
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
      <div style={{ marginBottom: 8 }}>
        <SquiggleSticker size={50} color="var(--mustard)" style={{ display: "inline-block" }} />
      </div>
      {t.footer} <span style={{ color: "var(--rust)" }}>♥</span>
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
