import { Camera, Mic, Keyboard, Brain, BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    icon: Camera,
    secondaryIcons: [Mic, Keyboard],
    title: "Snap or Speak Your Expense",
    description: "Use your camera for receipts, voice for cash spends (like jeepney!), or type it in. Takes seconds.",
    color: "from-blue-500 to-blue-600",
  },
  {
    number: "02",
    icon: Brain,
    title: "AI Does the Work",
    description: "ResiboKo instantly reads, categorizes, and saves your transaction securely.",
    color: "from-purple-500 to-purple-600",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "See Your Money Story",
    description: "View your history, track spending, and ask 'Piso' to find tipid opportunities.",
    color: "from-accent to-accent-light",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-secondary" aria-labelledby="how-it-works-heading">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="how-it-works-heading" className="text-4xl font-bold text-foreground mb-4">
            Getting Started is Easy
          </h2>
          <p className="text-xl text-muted-foreground">
            Three simple steps to financial clarity
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Card 
                key={index}
                className="relative overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                {/* Step number badge */}
                <div className="absolute top-4 right-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow-md">
                    {step.number}
                  </div>
                </div>

                <div className="p-8">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>


                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className={`h-1 bg-gradient-to-r ${step.color}`} />
              </Card>
            ))}
          </div>

          {/* Progress indicator */}
          <div className="flex justify-center gap-2 mt-12">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full ${
                  index === 0 ? "w-8 bg-accent" : "w-2 bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
