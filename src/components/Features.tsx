import { Camera, Sparkles, MessageCircle, Mic } from "lucide-react";
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
    gifUrl: "https://res.cloudinary.com/dbylka4xx/image/upload/v1761791781/Captureexpenses_ctbrpi.gif",
  },
  {
    badge: "FLEXIBLE INPUT",
    icon: Mic,
    title: "3 ways to capture: ",
    titleAccent: "Camera, Voice, or Type",
    description: "Snap a receipt photo, speak your expense while commuting, or quickly type it in. ResiboKo adapts to your situation—whether you have a receipt or not, whether you're in a rush or relaxed.",
    details: "Camera capture for receipts. Voice recording works even in noisy jeepneys. Manual entry takes 5 seconds. Smart presets remember common expenses. Choose what fits the moment.",
    mockupPlaceholder: "🎤 Flexible Capture Methods",
    gifUrl: "https://res.cloudinary.com/dbylka4xx/image/upload/v1761793067/CaptureExpenses2_wwfznx.gif",
  },
  {
    badge: "AUTO-ORGANIZE",
    icon: Sparkles,
    title: "See where every peso ",
    titleAccent: "goes",
    description: "No more Excel headaches or calculator stress. Everything's automatically sorted so you can see exactly where every peso goes.",
    details: "Automatic sorting by category. View all your spending in one place. Updates instantly across your devices.",
    mockupPlaceholder: "📊 Expense Dashboard",
    gifUrl: "https://res.cloudinary.com/dbylka4xx/image/upload/v1761793068/PesoGoes_wjnase.gif",
  },
  {
    badge: "AI INSIGHTS",
    icon: MessageCircle,
    title: "Your AI Money Buddy Finds ",
    titleAccent: "Hidden Savings",
    description: "Meet Piso, your AI-powered financial analyst. Spending ₱500/week on fees you don't notice? Buying expensive snacks out of habit? Piso spots these leaks automatically AND answers your money questions in seconds—no math needed.",
    details: "Piso proactively finds wasteful fees, expensive habits, and better alternatives. Plus, chat in English, Tagalog, or Taglish to ask anything: 'How much did I spend on food?' or 'Can I afford that gadget?' Instant, easy answers.",
    mockupPlaceholder: "💬 AI Chat Interface",
    gifUrl: "https://res.cloudinary.com/dbylka4xx/image/upload/v1761793071/PisoAnalysis_w0h9ej.gif",
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

                {/* GIF or Placeholder */}
                <div className="flex-1 w-full">
                  {feature.gifUrl ? (
                    <div className="aspect-video rounded-2xl overflow-hidden shadow-lg border border-muted">
                      <img 
                        src={feature.gifUrl} 
                        alt={`${feature.title}${feature.titleAccent} demonstration`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="aspect-video bg-muted/30 rounded-2xl border-2 border-dashed border-muted-foreground/20 flex items-center justify-center">
                      <div className="text-center px-4">
                        <div className="text-6xl mb-4">{feature.mockupPlaceholder.split(' ')[0]}</div>
                        <p className="text-sm text-muted-foreground font-medium">
                          {feature.mockupPlaceholder.substring(feature.mockupPlaceholder.indexOf(' ') + 1)}
                        </p>
                      </div>
                    </div>
                  )}
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
