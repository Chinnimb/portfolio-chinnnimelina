import { Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl">CloudNest™</h3>
            <p className="text-gray-400 leading-relaxed">
              Premium pet beds designed for comfort, crafted for aesthetics.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h4 className="text-lg">Shop</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">All Products</a></li>
              <li><a href="#" className="hover:text-white transition-colors">CloudNest™ Beds</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gift Cards</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sale</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg">Support</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg">Stay Updated</h4>
            <p className="text-gray-400">Get exclusive offers and pet care tips</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border border-white/20 rounded-full px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-white/40 transition-colors"
              />
              <button className="bg-white text-gray-900 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Instagram Gallery Preview */}
        <div className="mb-12">
          <h4 className="text-lg mb-6">@cloudnest on Instagram</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="https://images.unsplash.com/photo-1774440865547-6329be652bb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400" alt="Instagram" className="w-full aspect-square object-cover rounded-2xl" />
            <img src="https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400" alt="Instagram" className="w-full aspect-square object-cover rounded-2xl" />
            <img src="https://images.unsplash.com/photo-1610112645245-36020fc0e128?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400" alt="Instagram" className="w-full aspect-square object-cover rounded-2xl" />
            <img src="https://images.unsplash.com/photo-1629740067905-bd3f515aa739?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400" alt="Instagram" className="w-full aspect-square object-cover rounded-2xl" />
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <p>© 2026 CloudNest™. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
