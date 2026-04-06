import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import WhyChooseSection from "./components/WhyChooseSection";
import HowItWorksSection from "./components/HowItWorksSection";
import FaqSection from "./components/FaqSection";
import CaseStudiesSection from "./components/CaseStudiesSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 pt-0">
        <Hero />
        <AboutSection />
        <ServicesSection />
        <WhyChooseSection />
        <HowItWorksSection />
        <FaqSection />
        <CaseStudiesSection />
      </main>
      <Footer />
    </div>
  );
}