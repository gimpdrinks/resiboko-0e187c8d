import { Camera, Mic, Brain, PieChart, Smartphone, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Camera,
    title: "Snap & Track",
    description: "Simply take a photo of any receipt. Our AI instantly extracts amounts, merchants, and categories.",
  },
  {
    icon: Mic,
    title: "Voice Expenses",
    description: "\"Gastos 250 sa jeep\" - just say it. ResiboKo understands Taglish and logs it automatically.",
  },
  {
    icon: Brain,
    title: "AI Insights",
    description: "Get smart spending patterns, budget recommendations, and alerts when you're overspending.",
  },
  {
    icon: PieChart,
    title: "Visual Reports",
    description: "Beautiful charts and graphs show where your money goes, making financial planning effortless.",
  },
  {
    icon: Smartphone,
    title: "Works Offline",
    description: "Capture receipts even without internet. Everything syncs when you're back online.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Bank-grade encryption keeps your financial data safe. Your receipts, your control.",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Everything You Need to Master Your Money
          </h2>
          <p className="text-xl text-muted-foreground">
            Built specifically for Filipinos who deal with cash transactions daily
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border-border bg-card"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
