import { motion } from "motion/react";
import { Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#FFF8F3] via-[#FFF0F5] to-[#F0F4FF] px-6 py-20">
      {/* Abstract background shapes */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#FFE5E5] rounded-full blur-[120px] opacity-40" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#E5F0FF] rounded-full blur-[120px] opacity-40" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Rating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-5 py-3 rounded-full shadow-lg border border-[#FFE5E5]/50"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FFB84D] text-[#FFB84D]" />
                ))}
              </div>
              <span className="text-sm text-gray-700">4.9 from 12,000+ reviews</span>
            </motion.div>

            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl !leading-[1.1] tracking-tight text-gray-900">
                Comfort they'll never want to leave
              </h1>
              <p className="text-xl text-gray-600 max-w-xl !leading-relaxed">
                The CloudNest™ combines orthopedic comfort with minimalist design—giving your pet the rest they deserve while elevating your home aesthetic.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-900 text-white px-10 py-5 rounded-full shadow-xl hover:shadow-2xl transition-shadow"
              >
                Shop Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/80 backdrop-blur-md text-gray-900 px-10 py-5 rounded-full shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
              >
                See Colors
              </motion.button>
            </div>
          </motion.div>

          {/* Right: Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1774440865547-6329be652bb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjBzbGVlcGluZyUyMG9uJTIwbHV4dXJ5JTIwYmVkJTIwYWVzdGhldGljJTIwaG9tZSUyMGludGVyaW9yfGVufDF8fHx8MTc3ODg2NzUxOHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Dog relaxing on CloudNest bed"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, repeat: Infinity, repeatType: "reverse", duration: 2 }}
              className="absolute -bottom-6 -left-6 bg-[#FFE5E5] px-8 py-4 rounded-3xl shadow-xl"
            >
              <p className="text-sm text-gray-600">Trusted by</p>
              <p className="text-2xl text-gray-900">12,000+ pet owners</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
