import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { Upload, Brain, TrendingDown, Lightbulb } from "lucide-react";
import demoStep1 from "@/assets/demo-step-1.jpg";
import demoStep2 from "@/assets/demo-step-2.jpg";
import demoStep3 from "@/assets/demo-step-3.jpg";
import demoStep4 from "@/assets/demo-step-4.jpg";

interface DemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const demoSteps = [
  {
    title: "Transaction Upload",
    description: "Snap a photo of your receipt or speak your expense. Our AI instantly captures the details.",
    icon: Upload,
    color: "from-blue-500 to-blue-600",
    image: demoStep1,
  },
  {
    title: "AI Analysis in Progress",
    description: "Piso analyzes your spending patterns, categorizes transactions, and detects anomalies.",
    icon: Brain,
    color: "from-purple-500 to-purple-600",
    image: demoStep2,
  },
  {
    title: "Cash Leak Report",
    description: "See exactly where your money is going with highlighted areas of wasteful spending.",
    icon: TrendingDown,
    color: "from-red-500 to-red-600",
    image: demoStep3,
  },
  {
    title: "Tipid Opportunities",
    description: "Get personalized suggestions to save money based on your unique spending habits.",
    icon: Lightbulb,
    color: "from-accent to-accent-light",
    image: demoStep4,
  },
];

const DemoModal = ({ open, onOpenChange }: DemoModalProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-2xl">See How ResiboKo Works</DialogTitle>
          <DialogDescription>
            Watch how easy it is to transform your financial chaos into clarity
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 overflow-hidden px-2">
          {/* Video Option - Uncomment and add your video URL */}
          {/* <div className="aspect-video rounded-lg overflow-hidden bg-muted">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="ResiboKo Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="border-0"
            />
          </div> */}

          {/* Image Carousel */}
          <div className="relative min-h-[480px] flex items-center">
            <Carousel className="w-full max-w-full overflow-hidden" opts={{ loop: true }}>
              <CarouselContent className="-ml-4">
                {demoSteps.map((step, index) => (
                  <CarouselItem key={index} className="pl-4">
                    <Card className="p-3 md:p-4 overflow-hidden">
                      <div className="flex flex-col items-center text-center space-y-4">
                        {/* Icon with gradient background */}
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl`}>
                          <step.icon className="w-10 h-10 text-white" />
                        </div>

                        {/* Title */}
                        <div>
                          <div className="text-sm font-medium text-muted-foreground mb-2">
                            Step {index + 1} of {demoSteps.length}
                          </div>
                          <h3 className="text-2xl font-bold text-foreground mb-3">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                            {step.description}
                          </p>
                        </div>

                        {/* Screenshot/mockup */}
                        <div className="w-full aspect-video rounded-lg overflow-hidden border-2 border-border">
                          <img 
                            src={step.image} 
                            alt={step.title}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Progress indicators */}
                        <div className="flex gap-2">
                          {demoSteps.map((_, i) => (
                            <div
                              key={i}
                              className={`h-2 rounded-full transition-all ${
                                i === index ? "w-8 bg-accent" : "w-2 bg-muted-foreground/30"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 md:left-4" />
              <CarouselNext className="right-2 md:right-4" />
            </Carousel>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-4">
            Use the arrows to navigate through each step
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DemoModal;
