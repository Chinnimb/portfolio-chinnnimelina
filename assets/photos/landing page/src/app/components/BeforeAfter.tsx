import { motion } from "motion/react";
import { X, Check } from "lucide-react";

export function BeforeAfter() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-[#FFF0F5]">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl lg:text-5xl text-gray-900">The difference is real</h2>
          <p className="text-xl text-gray-600">Compare traditional beds to the CloudNest™ experience</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-lg border-2 border-gray-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <X className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-2xl text-gray-900">Traditional Beds</h3>
            </div>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                <span>Flat, unsupportive cushions that compress over time</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                <span>Difficult to clean, harbors odors and allergens</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                <span>Generic designs that clash with your decor</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                <span>No joint support for aging pets</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                <span>Slides around on hard floors</span>
              </li>
            </ul>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#FFE5E5] to-[#E5F0FF] p-8 rounded-3xl shadow-xl border-2 border-gray-900"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                <Check className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl text-gray-900">CloudNest™</h3>
            </div>
            <ul className="space-y-4 text-gray-900">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#E8F5E8] mt-1 flex-shrink-0" />
                <span>3-layer orthopedic memory foam that never flattens</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#E8F5E8] mt-1 flex-shrink-0" />
                <span>Machine-washable cover keeps it fresh and clean</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#E8F5E8] mt-1 flex-shrink-0" />
                <span>Minimal aesthetic that elevates any room</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#E8F5E8] mt-1 flex-shrink-0" />
                <span>Veterinarian-designed for maximum joint relief</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#E8F5E8] mt-1 flex-shrink-0" />
                <span>Anti-slip base keeps it perfectly in place</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
