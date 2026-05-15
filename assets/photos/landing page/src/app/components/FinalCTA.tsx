import { motion } from "motion/react";

export function FinalCTA() {
  return (
    <section className="py-32 px-6 bg-gradient-to-br from-[#FFE5E5] via-[#FFF0F5] to-[#E5F0FF] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-white/30 rounded-full blur-[100px]" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/30 rounded-full blur-[100px]" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <h2 className="text-5xl lg:text-6xl text-gray-900 !leading-tight">
            Give them the comfort they deserve
          </h2>
          <p className="text-2xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Your pet spends half their life sleeping. Make every moment count with the CloudNest™.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-900 text-white px-12 py-6 rounded-full shadow-2xl hover:shadow-3xl transition-shadow text-lg"
            >
              Order Yours Today
            </motion.button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-8 pt-8 text-gray-700">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Free Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>60-Day Returns</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>2-Year Warranty</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
