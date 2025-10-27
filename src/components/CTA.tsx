import { Button } from "@/components/ui/button";
import { Shield, Clock } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary-light to-primary">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Stop Wondering Where Your Pera Went.{" "}
            <span className="text-accent">Start Knowing.</span>
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join fellow Filipinos transforming their financial habits effortlessly with ResiboKo.
          </p>

          <div className="mb-6">
            <Button 
              size="lg" 
              variant="hero" 
              className="text-xl px-12 py-8"
              aria-label="Start tracking your expenses for free"
            >
              Start Tracking for Free
            </Button>
          </div>

          <p className="text-white/80 flex items-center justify-center gap-2 flex-wrap">
            <Shield className="w-4 h-4" />
            <span>Secure Google Sign-In</span>
            <span className="text-white/60">•</span>
            <Clock className="w-4 h-4" />
            <span>Takes 2 minutes</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
