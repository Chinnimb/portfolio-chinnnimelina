// Spacey shop: catálogo, carrito (localStorage) y drawer lateral compartidos por todas las páginas.
(function () {
  const LINES = {
    moon: {
      name: 'Moon Line', short: 'Moon', strain: 'Indica', pack: 'tin', price: 26,
      tagline: 'To rest. Unwind, recover, sleep.',
      blurb: 'Sugar-coated moon gummies dosed by phase. A round, child-resistant tin with a window to peek at the moon inside.',
      contents: '10 gummies · 50 mg THC total',
      flavors: {
        mix: { name: 'Moon Mix', note: 'Lavender, blueberry & pearl', img: 'pk-moon-dark.jpg', video: 'v-moon-mix.mp4', open: 'v-open-moon.mp4', bg: '#2E1A5C', ink: '#E6DAFF' },
        blueberry: { name: 'Blueberry', note: 'Wild blueberry', img: 'f-blueberry.jpg', video: 'v-blueberry.mp4', bg: '#2F4FC9', ink: '#DCE6FF' },
        grape: { name: 'Grape', note: 'Concord grape', img: 'f-grape.jpg', video: 'v-grape.mp4', bg: '#7A3FB8', ink: '#F0E4FF' },
        mint: { name: 'Mint', note: 'Cool garden mint', img: 'f-mint.jpg', video: 'v-mint.mp4', bg: '#3FA88A', ink: '#E2FFF4' },
      },
      gummies: ['g-crescent.webp', 'g-half.webp', 'g-full.webp'],
      life: 'life-moon.jpg', extra: ['open-tin.jpg', 'gal-cloud.jpg', 'gal-hand.jpg'],
    },
    stars: {
      name: 'Star Line', short: 'Stars', strain: 'Sativa', pack: 'tube', price: 24,
      tagline: 'To enjoy. Lift, focus, connect.',
      blurb: 'Glossy star gummies tuned by effect. A slim twist tube that fits any pocket, with a child-resistant cap.',
      contents: '10 gummies · 50 mg THC total',
      flavors: {
        mix: { name: 'Star Mix', note: 'Pink, peach & lemon', img: 'pk-star-dark.jpg', video: 'v-star-mix.mp4', open: 'v-open-stars.mp4', bg: '#5A1240', ink: '#FFE0EC' },
        strawberry: { name: 'Strawberry', note: 'Sun-ripe strawberry', img: 'f-strawberry.jpg', video: 'v-strawberry.mp4', bg: '#E2324F', ink: '#FFE3EA' },
        orange: { name: 'Orange', note: 'Blood orange', img: 'f-orange.jpg', video: 'v-orange.mp4', bg: '#F07A1E', ink: '#FFF1E2' },
        lemon: { name: 'Lemon', note: 'Sparkling lemon', img: 'f-lemon.jpg', video: 'v-lemon.mp4', bg: '#F5C912', ink: '#1E2A5A' },
      },
      gummies: ['g-shooting.webp', 'g-north.webp', 'g-twin.webp'],
      life: 'life-stars.jpg', extra: ['life-paint.jpg', 'gal-spill.jpg', 'gal-picnic.jpg'],
    },
  };
  const SUB_OFF = 0.15, FREE_SHIP = 50;
  const money = n => '$' + n.toFixed(2);
  const unit = it => LINES[it.line].price * (it.sub ? 1 - SUB_OFF : 1);

  // --- carrito ---
  let cart = [];
  try { cart = JSON.parse(localStorage.getItem('spaceyCart') || '[]'); } catch (e) { cart = []; }
  const save = () => { try { localStorage.setItem('spaceyCart', JSON.stringify(cart)); } catch (e) {} render(); };
  const count = () => cart.reduce((s, i) => s + i.qty, 0);
  const subtotal = () => cart.reduce((s, i) => s + unit(i) * i.qty, 0);

  function add(line, flavor, qty = 1, sub = false) {
    const id = `${line}-${flavor}-${sub ? 's' : 'o'}`;
    const ex = cart.find(i => i.id === id);
    if (ex) ex.qty += qty; else cart.push({ id, line, flavor, qty, sub });
    save(); open();
  }
  function setQty(id, q) { const it = cart.find(i => i.id === id); if (!it) return; it.qty = q; if (q <= 0) cart = cart.filter(i => i.id !== id); save(); }
  function clear() { cart = []; save(); }

  // --- drawer ---
  const drawer = document.createElement('div');
  drawer.className = 'cart';
  drawer.innerHTML = `
    <div class="cart-scrim" data-close></div>
    <aside class="cart-panel" role="dialog" aria-modal="true" aria-label="Your cart">
      <header class="cart-head"><h3>Your cart <span class="cart-n"></span></h3><button type="button" class="cart-x" data-close aria-label="Close cart">&times;</button></header>
      <div class="cart-ship"><p></p><div class="cart-ship-bar"><i></i></div></div>
      <ul class="cart-items"></ul>
      <div class="cart-empty"><img src="assets/g-crescent.webp" alt=""><p>Your cart is floating empty.</p><a href="product.html#line=moon" class="btn">Shop the Moon Line</a></div>
      <footer class="cart-foot"><div class="cart-sub"><span>Subtotal</span><b></b></div><p>Taxes and shipping calculated at checkout.</p><a href="checkout.html" class="btn cart-go">Checkout</a></footer>
    </aside>`;
  document.body.appendChild(drawer);
  const panel = drawer.querySelector('.cart-panel');
  function open() { drawer.classList.add('on'); document.documentElement.style.overflow = 'hidden'; }
  function close() { drawer.classList.remove('on'); document.documentElement.style.overflow = ''; }
  drawer.addEventListener('click', e => {
    if (e.target.closest('[data-close]')) return close();
    const b = e.target.closest('[data-q]'); if (!b) return;
    const it = cart.find(i => i.id === b.dataset.id); if (it) setQty(it.id, it.qty + +b.dataset.q);
  });
  addEventListener('keydown', e => { if (e.key === 'Escape') close(); });

  function render() {
    const n = count(), sub = subtotal();
    document.querySelectorAll('.cart-count').forEach(el => { el.textContent = n; el.hidden = !n; });
    drawer.querySelector('.cart-n').textContent = n ? `(${n})` : '';
    drawer.querySelector('.cart-items').innerHTML = cart.map(it => {
      const L = LINES[it.line], F = L.flavors[it.flavor];
      return `<li><img src="assets/${F.img}" alt=""><div><b>${L.name} · ${F.name}</b><span>${it.sub ? 'Subscribe & save · monthly' : 'One-time purchase'}</span>
        <div class="qty"><button type="button" data-id="${it.id}" data-q="-1" aria-label="Remove one">−</button><em>${it.qty}</em><button type="button" data-id="${it.id}" data-q="1" aria-label="Add one">+</button></div></div>
        <strong>${money(unit(it) * it.qty)}</strong></li>`;
    }).join('');
    drawer.querySelector('.cart-sub b').textContent = money(sub);
    const left = FREE_SHIP - sub;
    drawer.querySelector('.cart-ship p').innerHTML = left > 0 ? `You're <b>${money(left)}</b> away from free shipping` : `You've unlocked <b>free shipping</b> ✦`;
    drawer.querySelector('.cart-ship-bar i').style.width = Math.min(100, sub / FREE_SHIP * 100) + '%';
    drawer.classList.toggle('is-empty', !n);
  }

  // Botones "add to cart" declarativos: data-add="moon:mix"
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-add]'); if (!b) return;
    e.preventDefault(); const [l, f] = b.dataset.add.split(':'); add(l, f);
  });
  document.addEventListener('click', e => { if (e.target.closest('.cart-btn')) { e.preventDefault(); open(); } });

  // Age gate para las páginas internas (la home tiene el suyo)
  if (!document.getElementById('gate')) {
    let ok = false; try { ok = sessionStorage.getItem('spacey21') === '1'; } catch (e) {}
    if (!ok) {
      const g = document.createElement('div'); g.className = 'gate'; g.id = 'gate';
      g.innerHTML = `<div class="gate-card"><span class="logo"></span><h3>Are you 21 or older?</h3><p>Spacey products are for adults of legal age only. Please confirm your age to enter.</p><div class="gate-actions"><button class="btn gate-no" type="button">Not yet</button><button class="btn" type="button">Yes, I'm 21+</button></div></div>`;
      document.body.appendChild(g);
      g.querySelectorAll('button')[1].onclick = () => { g.remove(); try { sessionStorage.setItem('spacey21', '1'); } catch (e) {} };
      g.querySelectorAll('button')[0].onclick = () => { g.querySelector('p').textContent = 'Come back when you are 21. The sky will still be here.'; };
    }
  }

  window.Spacey = { LINES, SUB_OFF, FREE_SHIP, money, unit, add, clear, open, close, get cart() { return cart; }, subtotal, count };
  render();
})();
