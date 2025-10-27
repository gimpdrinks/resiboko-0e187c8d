import { Camera, Brain, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Camera,
    title: "Capture or Speak",
    description: "Snap a photo of your receipt or simply tell ResiboKo about your expense using voice input.",
  },
  {
    number: "02",
    icon: Brain,
    title: "AI Processing",
    description: "Our AI instantly reads receipts, categorizes expenses, and organizes everything automatically.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Get Insights",
    description: "View beautiful reports, track spending patterns, and receive personalized financial recommendations.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Sobrang Simple Lang
          </h2>
          <p className="text-xl text-muted-foreground">
            Three easy steps to financial clarity
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-accent-light flex items-center justify-center shadow-lg">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>

              {/* Connector line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-accent/30"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
