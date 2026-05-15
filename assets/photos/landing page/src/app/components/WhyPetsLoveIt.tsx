import { motion } from "motion/react";

export function WhyPetsLoveIt() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-[40px] overflow-hidden shadow-2xl order-2 lg:order-1"
          >
            <img
              src="https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
              alt="Cat sleeping peacefully"
              className="w-full h-auto object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 order-1 lg:order-2"
          >
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl text-gray-900 !leading-tight">
                Why pets love it
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                The CloudNest™ isn't just a bed—it's a sanctuary. Our orthopedic memory foam cradles every curve, relieving pressure points and supporting aging joints.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                The raised edges create a sense of security, like being wrapped in a gentle hug. Whether they're napping in the sun or settling in for the night, your pet will feel safe, supported, and deeply comfortable.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#FFF8F3] p-6 rounded-2xl">
                <p className="text-3xl text-gray-900 mb-2">92%</p>
                <p className="text-gray-700">Pets sleep longer</p>
              </div>
              <div className="bg-[#E5F0FF] p-6 rounded-2xl">
                <p className="text-3xl text-gray-900 mb-2">89%</p>
                <p className="text-gray-700">Reduced joint pain</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
