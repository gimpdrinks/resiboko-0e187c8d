import { Camera, Sparkles, MessageCircle, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    badge: "SMART CAPTURE",
    icon: Camera,
    title: "Capture expenses ",
    titleAccent: "instantly",
    description: "Tired of pockets full of crumpled resibos? Just snap a photo or say it out loud. Done in 3 seconds.",
    details: "Take a photo, use your voice, or tap a preset. Works even without receipts.",
    mockupPlaceholder: "📸 Receipt Capture Flow",
  },
  {
    badge: "AUTO-ORGANIZE",
    icon: Sparkles,
    title: "See where every peso ",
    titleAccent: "goes",
    description: "No more Excel headaches or calculator stress. Everything's automatically sorted so you can see exactly where every peso goes.",
    details: "Automatic sorting by category. View all your spending in one place. Updates instantly across your devices.",
    mockupPlaceholder: "📊 Expense Dashboard",
  },
  {
    badge: "AI INSIGHTS",
    icon: MessageCircle,
    title: "Your AI Money Buddy Finds ",
    titleAccent: "Hidden Savings",
    description: "Meet Piso, your AI-powered financial analyst. Spending ₱500/week on fees you don't notice? Buying expensive snacks out of habit? Piso spots these leaks automatically AND answers your money questions in seconds—no math needed.",
    details: "Piso proactively finds wasteful fees, expensive habits, and better alternatives. Plus, chat in English, Tagalog, or Taglish to ask anything: 'How much did I spend on food?' or 'Can I afford that gadget?' Instant, easy answers.",
    mockupPlaceholder: "💬 AI Chat Interface",
  },
  {
    badge: "SECURITY",
    icon: Shield,
    title: "Your data stays ",
    titleAccent: "private",
    description: "Check your spending from anywhere—home, office, or commute. Your financial data is locked down tight, only you can see it.",
    details: "Sign in safely with Google. Your data is encrypted and secure. Access from any device, anytime.",
    mockupPlaceholder: "🔒 Security Dashboard",
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

        <div className="max-w-7xl mx-auto space-y-24">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`flex flex-col ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 md:gap-12 items-center`}
              >
                {/* Text Content */}
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-accent-light flex items-center justify-center shadow-md flex-shrink-0">
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20 hover:bg-accent/20">
                      {feature.badge}
                    </Badge>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-card-foreground">
                    {feature.title}
                    <span className="text-accent">{feature.titleAccent}</span>
                  </h3>
                  
                  <p className="text-lg text-foreground font-medium leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {feature.details}
                  </p>
                </div>

                {/* GIF Placeholder */}
                <div className="flex-1 w-full">
                  <div className="aspect-video bg-muted/30 rounded-2xl border-2 border-dashed border-muted-foreground/20 flex items-center justify-center">
                    <div className="text-center px-4">
                      <div className="text-6xl mb-4">{feature.mockupPlaceholder.split(' ')[0]}</div>
                      <p className="text-sm text-muted-foreground font-medium">
                        {feature.mockupPlaceholder.substring(feature.mockupPlaceholder.indexOf(' ') + 1)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
