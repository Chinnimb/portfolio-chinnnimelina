import { motion } from "motion/react";
import { Star } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    image: "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    text: "My senior dog has arthritis, and since getting the CloudNest, she sleeps through the night without waking up in pain. The design is gorgeous too—it looks like a piece of furniture, not a pet bed.",
    rating: 5
  },
  {
    name: "Michael Chen",
    image: "https://images.unsplash.com/photo-1609660791404-afdd1da51718?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    text: "I'm obsessed with minimal design and this bed is perfection. My cat immediately claimed it as her favorite spot. The soft pink color matches my living room perfectly.",
    rating: 5
  },
  {
    name: "Emma Rodriguez",
    image: "https://images.unsplash.com/photo-1629740067905-bd3f515aa739?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    text: "Worth every penny. The quality is incredible—way better than the cheap beds I used to buy. My golden retriever loves the raised edges; he curls up and sleeps like a baby.",
    rating: 5
  }
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl lg:text-5xl text-gray-900">Pet parents love us</h2>
          <p className="text-xl text-gray-600">Join thousands of happy customers</p>
        </motion.div>

        <div className="relative">
          {/* Testimonial cards */}
          <div className="overflow-hidden">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-[#FFF8F3] to-[#FFF0F5] p-12 rounded-[40px] shadow-xl"
            >
              <div className="flex gap-2 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-[#FFB84D] text-[#FFB84D]" />
                ))}
              </div>
              <p className="text-2xl text-gray-900 mb-8 leading-relaxed">
                "{testimonials[activeIndex].text}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                />
                <div>
                  <p className="text-xl text-gray-900">{testimonials[activeIndex].name}</p>
                  <p className="text-gray-600">CloudNest™ Customer</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === index ? "bg-gray-900 w-8" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
