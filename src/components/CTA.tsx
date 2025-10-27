import { Button } from "@/components/ui/button";
import { CheckCircle2, Shield, Clock, Users } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary-light to-primary">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full border border-accent/40 mb-6">
            <Users className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-white">Limited to 100 Beta Users</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get Early Access to ResiboKo (Beta)
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Limited spots available for our beta program at a special price. Be the first to turn receipt chaos into financial clarity.
          </p>

          {/* Pricing Box */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-8 max-w-md mx-auto">
            <div className="mb-4">
              <div className="text-5xl font-bold mb-2">₱99</div>
              <div className="text-white/80 mb-1">First Month</div>
              <div className="text-sm text-white/60">Then ₱149/month after</div>
            </div>
            <div className="border-t border-white/20 pt-4">
              <p className="text-sm text-white/80">Cancel anytime. No long-term commitment.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" variant="hero" className="text-lg px-10 py-7">
              Join Beta Now (₱99)
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-accent" />
              <span>Secure Google Sign-In</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              <span>Cancel Anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-accent" />
              <span>2-Minute Setup</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
