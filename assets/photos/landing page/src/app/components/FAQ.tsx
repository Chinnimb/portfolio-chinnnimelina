import { motion } from "motion/react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What sizes do you offer?",
    answer: "The CloudNest™ comes in Small (20x24 inches), Medium (28x36 inches), and Large (36x44 inches). We recommend measuring your pet from nose to tail while they're sleeping to find the perfect fit."
  },
  {
    question: "Is it really machine washable?",
    answer: "Yes! The cover has a hidden zipper and can be removed in seconds. Just toss it in the washing machine on a gentle cycle and air dry. The memory foam core has a waterproof liner to protect it from accidents."
  },
  {
    question: "Will the memory foam flatten over time?",
    answer: "No. Our 3-layer orthopedic memory foam is designed to maintain its shape and support for years. We use premium, high-density foam that won't compress like cheaper alternatives. Every CloudNest™ comes with a 2-year warranty."
  },
  {
    question: "How do I choose the right color?",
    answer: "All four colors are equally durable and stain-resistant. Choose based on your home's aesthetic! Cloud Cream is the most versatile, Soft Pink adds warmth, Sage Green feels calming, and Sky Blue brings freshness."
  },
  {
    question: "What's your return policy?",
    answer: "We offer a 60-day happiness guarantee. If your pet doesn't love the CloudNest™, return it for a full refund—no questions asked. We even cover return shipping."
  }
];

export function FAQ() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-[#FFF8F3]">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl lg:text-5xl text-gray-900">Questions?</h2>
          <p className="text-xl text-gray-600">Everything you need to know about CloudNest™</p>
        </motion.div>

        <Accordion.Root type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Accordion.Item
                value={`item-${index}`}
                className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="w-full flex justify-between items-center p-8 text-left hover:bg-gray-50 transition-colors group">
                    <span className="text-xl text-gray-900 pr-8">{faq.question}</span>
                    <ChevronDown className="w-6 h-6 text-gray-600 transition-transform duration-300 group-data-[state=open]:rotate-180 flex-shrink-0" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  <div className="px-8 pb-8 text-lg text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            </motion.div>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
