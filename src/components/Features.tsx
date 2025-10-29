import { Camera, Sparkles, TrendingDown, MessageCircle, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: Camera,
    title: "No More Lost Receipts",
    benefit: "Tired of pockets full of crumpled resibos? Just snap a photo or say it out loud. Done in 3 seconds.",
    features: "Take a photo, use your voice, or tap a preset. Works even without receipts.",
  },
  {
    icon: Sparkles,
    title: "Stop Guessing Where Your Money Went",
    benefit: "No more Excel headaches or calculator stress. Everything's automatically sorted so you can see exactly where every peso goes.",
    features: "Automatic sorting by category. View all your spending in one place. Updates instantly across your devices.",
  },
  {
    icon: TrendingDown,
    title: "Find Money You Didn't Know You Were Losing",
    benefit: "Spending ₱500/week on fees you don't notice? Buying expensive snacks out of habit? Piso finds these leaks and shows you easy swaps to save thousands.",
    features: "Get personal tipid tips from Piso, your AI money buddy. Spots wasteful fees, expensive habits, and better alternatives.",
  },
  {
    icon: MessageCircle,
    title: "Talk to Your Money Like a Friend",
    benefit: "Curious how much you spent on food this month? Just ask. Want to know if you can afford that gadget? Piso answers in seconds, no math needed.",
    features: "Chat in English, Tagalog, or Taglish. Ask anything about your spending. Get instant, easy-to-understand answers.",
  },
  {
    icon: Shield,
    title: "Your Money Info Stays Private & Safe",
    benefit: "Check your spending from anywhere—home, office, or commute. Your financial data is locked down tight, only you can see it.",
    features: "Sign in safely with Google. Your data is encrypted and secure. Access from any device, anytime.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-background" aria-labelledby="features-heading">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="features-heading" className="text-4xl font-bold text-foreground mb-4">
            How ResiboKo Gives You Back Time & Control
          </h2>
          <p className="text-xl text-muted-foreground">
            Focus on what matters while AI handles your expense tracking
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border-border bg-card"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-accent-light flex items-center justify-center mb-4 shadow-md">
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-base text-foreground mb-3 font-medium">
                {benefit.benefit}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.features}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
