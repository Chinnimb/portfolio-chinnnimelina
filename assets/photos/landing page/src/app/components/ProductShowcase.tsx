import { motion } from "motion/react";
import { useState } from "react";

const colors = [
  { name: "Cloud Cream", hex: "#FFF8F3", image: "https://images.unsplash.com/photo-1774440865524-2eb51089ad60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800" },
  { name: "Soft Pink", hex: "#FFE5E5", image: "https://images.unsplash.com/photo-1610112645245-36020fc0e128?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800" },
  { name: "Sage Green", hex: "#E8F5E8", image: "https://images.unsplash.com/photo-1629740067905-bd3f515aa739?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800" },
  { name: "Sky Blue", hex: "#E5F0FF", image: "https://images.unsplash.com/photo-1605447730905-a567de50759b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800" },
];

export function ProductShowcase() {
  const [activeColor, setActiveColor] = useState(0);

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-[#FFF8F3]">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl lg:text-5xl text-gray-900">Choose your aesthetic</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Four beautiful colorways to match your home's vibe
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image showcase */}
          <motion.div
            key={activeColor}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="relative rounded-[40px] overflow-hidden shadow-2xl"
          >
            <img
              src={colors[activeColor].image}
              alt={colors[activeColor].name}
              className="w-full h-auto object-cover"
            />
          </motion.div>

          {/* Color selector */}
          <div className="space-y-8">
            <div className="space-y-6">
              {colors.map((color, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveColor(index)}
                  whileHover={{ x: 8 }}
                  className={`w-full flex items-center gap-6 p-6 rounded-3xl transition-all ${
                    activeColor === index
                      ? "bg-white shadow-xl border-2 border-gray-900"
                      : "bg-white/50 shadow-md border-2 border-transparent hover:shadow-lg"
                  }`}
                >
                  <div
                    className="w-16 h-16 rounded-2xl border-2 border-white shadow-lg"
                    style={{ backgroundColor: color.hex }}
                  />
                  <span className="text-xl text-gray-900">{color.name}</span>
                </motion.button>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-lg space-y-4"
            >
              <h3 className="text-2xl text-gray-900">Premium Details</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#E8F5E8] text-2xl">✓</span>
                  <span>Ultra-soft microfiber exterior with luxury feel</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#E8F5E8] text-2xl">✓</span>
                  <span>3-layer memory foam for maximum support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#E8F5E8] text-2xl">✓</span>
                  <span>Hidden waterproof liner for easy maintenance</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
