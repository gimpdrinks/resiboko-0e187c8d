import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Free to start, no credit card required",
  "AI-powered insights from day one",
  "Works with cash and digital transactions",
  "Available in English and Tagalog",
];

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary-light to-primary">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of Filipino freelancers and professionals who've simplified their expense tracking
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" variant="hero" className="text-lg px-8 py-6">
              Start Tracking Free
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white"
            >
              Book a Demo
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 justify-center sm:justify-start">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-white/90">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
