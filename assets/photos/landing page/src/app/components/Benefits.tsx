import { motion } from "motion/react";
import { Heart, Sparkles, Shield, Home } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Orthopedic Comfort",
    description: "Memory foam support designed by veterinarians for joint health and deep sleep",
    color: "#FFE5E5"
  },
  {
    icon: Sparkles,
    title: "Machine Washable",
    description: "Premium removable cover with hidden zipper—fresh and clean in minutes",
    color: "#E5F0FF"
  },
  {
    icon: Shield,
    title: "Anti-Slip Base",
    description: "Stay-put silicone dots keep the bed secure on any surface",
    color: "#E8F5E8"
  },
  {
    icon: Home,
    title: "Aesthetic Design",
    description: "Minimal, modern silhouette that complements any interior style",
    color: "#F5E8FF"
  }
];

export function Benefits() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl lg:text-5xl text-gray-900">Designed for comfort. Made for life.</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every detail of the CloudNest™ is crafted with your pet's wellbeing and your home's aesthetic in mind.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-100"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: benefit.color }}
                >
                  <Icon className="w-8 h-8 text-gray-800" />
                </div>
                <h3 className="text-xl text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
