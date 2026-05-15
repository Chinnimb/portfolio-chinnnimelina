import { Hero } from "./components/Hero";
import { Benefits } from "./components/Benefits";
import { ProductShowcase } from "./components/ProductShowcase";
import { WhyPetsLoveIt } from "./components/WhyPetsLoveIt";
import { BeforeAfter } from "./components/BeforeAfter";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Benefits />
      <ProductShowcase />
      <WhyPetsLoveIt />
      <BeforeAfter />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}