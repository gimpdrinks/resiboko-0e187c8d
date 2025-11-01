import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Zap, Crown, Sparkles } from "lucide-react";
const freePlanFeatures = ["30 AI Scans/month (photo/voice)", "Manual Entry", "Transaction History", "Daily/Weekly Summaries"];
const proPlanFeatures = ["60+ AI Scans/month", "Unlimited AI Q&A (\"Ask Piso\")", "Automated \"Tipid Opportunity\" Audits", "CSV Export", "Google Sheets Sync (Coming Soon)", "Priority Support"];
const pricingTiers = [{
  name: "Monthly",
  price: "₱199",
  period: "/month",
  savings: null
}, {
  name: "Annual",
  price: "₱1,788",
  period: "/year",
  savings: "Save ₱600",
  popular: true
}, {
  name: "Lifetime",
  price: "₱4,999",
  period: "one-time",
  savings: "Launch Special!"
}];
const Pricing = () => {
  const [selectedTier, setSelectedTier] = React.useState<number>(1); // Default to Annual

  return <section id="pricing" className="py-20 bg-secondary" aria-labelledby="pricing-heading">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="pricing-heading" className="text-4xl font-bold text-foreground mb-4">
            Simple Pricing for Peace of Mind
          </h2>
          <p className="text-xl text-muted-foreground">
            Less than ₱7/day to gain complete control of your money
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {/* Free Plan */}
          <Card className="p-8 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Free Plan</h3>
                <p className="text-muted-foreground">Try ResiboKo for Free</p>
              </div>
            </div>

            <div className="mb-6">
              <div className="text-4xl font-bold text-foreground mb-2">₱0</div>
              <p className="text-muted-foreground">Forever free</p>
            </div>

            <ul className="space-y-3 mb-8">
              {freePlanFeatures.map((feature, index) => <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>)}
            </ul>

            <Button variant="outline" className="w-full" size="lg" aria-label="Start with free plan">
              Start Free
            </Button>
          </Card>

          {/* Pro Plan */}
          <Card className="p-8 border-accent/50 bg-gradient-to-br from-accent/5 to-accent/10 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <div className="bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
                POPULAR
              </div>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                <Crown className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Pro Plan</h3>
                <p className="text-muted-foreground">For Serious Savers</p>
              </div>
            </div>

            {/* Pricing Tiers Toggle */}
            <div className="grid grid-cols-3 gap-2 mb-6">
              {pricingTiers.map((tier, index) => <div key={index} onClick={() => setSelectedTier(index)} role="button" tabIndex={0} onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setSelectedTier(index);
              }
            }} aria-pressed={selectedTier === index} className={`text-center p-3 rounded-lg border-2 transition-all cursor-pointer ${selectedTier === index ? 'border-accent bg-accent/10 shadow-lg scale-105' : 'border-border bg-background hover:border-accent/30 hover:shadow-md'}`}>
                  <div className="text-xs font-medium text-muted-foreground mb-1">
                    {tier.name}
                  </div>
                  <div className="text-lg font-bold text-foreground">{tier.price}</div>
                  <div className="text-xs text-muted-foreground">{tier.period}</div>
                  {tier.savings && <div className="text-xs font-semibold text-accent mt-1">
                      {tier.savings}
                    </div>}
                </div>)}
            </div>

            <ul className="space-y-3 mb-8">
              {proPlanFeatures.map((feature, index) => <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </li>)}
            </ul>

            <Button variant="accent" className="w-full" size="lg" aria-label={`Upgrade to Pro plan - ${pricingTiers[selectedTier].name}`}>
              Get Pro - {pricingTiers[selectedTier].name}
            </Button>
          </Card>
        </div>

        {/* Guarantee */}
        <Card className="max-w-4xl mx-auto p-6 bg-gradient-to-r from-accent/10 to-accent/5 border-accent/30">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-foreground mb-2">Our Guarantee</h4>
              <p className="text-muted-foreground">If  AI“Piso” Financial Analyst doesn't find you at least ₱1,000 in savings opportunities within your first 30 days of Pro (minimum 40 transactions tracked), we'll refund your first month. Guaranteed.</p>
            </div>
          </div>
        </Card>
      </div>
    </section>;
};
export default Pricing;