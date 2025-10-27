import Hero from "@/components/Hero";
import FilipinoImagery from "@/components/FilipinoImagery";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import ResultsShowcase from "@/components/ResultsShowcase";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <FilipinoImagery />
      <Features />
      <HowItWorks />
      <ResultsShowcase />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
