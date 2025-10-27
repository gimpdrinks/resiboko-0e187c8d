import { Camera, Mic, Keyboard, Brain, BarChart3 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Camera,
    secondaryIcons: [Mic, Keyboard],
    title: "Snap or Speak Your Expense",
    description: "Use your camera for receipts, voice for cash spends (like jeepney!), or type it in. Takes seconds.",
  },
  {
    number: "02",
    icon: Brain,
    title: "AI Does the Work",
    description: "ResiboKo instantly reads, categorizes, and saves your transaction securely.",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "See Your Money Story",
    description: "View your history, track spending, and ask 'Piso' to find tipid opportunities.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-secondary">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Getting Started is Easy
          </h2>
          <p className="text-xl text-muted-foreground">
            Three simple steps to financial clarity
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
                
                {/* Secondary icons for step 1 */}
                {step.secondaryIcons && (
                  <div className="flex justify-center gap-2 mb-4">
                    {step.secondaryIcons.map((Icon, i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-accent" />
                      </div>
                    ))}
                  </div>
                )}
                
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
