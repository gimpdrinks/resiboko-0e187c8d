import { Camera, Sparkles, TrendingDown, MessageCircle, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: Camera,
    title: "Snap or Speak, We Handle the Rest",
    benefit: "Capture any expense in seconds, even without a paper receipt.",
    features: "AI Receipt Scanning (photo upload/camera), Voice Entry, Quick Presets (Jeepney, etc.)",
  },
  {
    icon: Sparkles,
    title: "Instant Organization, Zero Effort",
    benefit: "See all your spending clearly categorized without manual spreadsheet work.",
    features: "AI Categorization, Real-time Transaction History, Cloud Sync via Firebase",
  },
  {
    icon: TrendingDown,
    title: "Discover Hidden Savings (\"Tipid Opportunities\")",
    benefit: "Let AI find where your money is going unexpectedly and suggest practical ways to save.",
    features: "AI Financial Assistant (\"Piso\"), \"Tipid Opportunity\" Analysis based on fees, habits, and swaps",
  },
  {
    icon: MessageCircle,
    title: "Ask Anything About Your Spending",
    benefit: "Get quick answers to your money questions in plain Taglish.",
    features: "AI Q&A (\"Ask Piso\") - chat with your financial data anytime",
  },
  {
    icon: Shield,
    title: "Your Data, Secure & Accessible",
    benefit: "Access your financial picture anytime, anywhere, knowing your data is safe.",
    features: "Secure Google Sign-In, Firebase Cloud Storage, User Data Privacy",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
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
