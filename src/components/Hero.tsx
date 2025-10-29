import { useState } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import { Sparkles, TrendingUp, MapPin, CheckCircle2, Shield, Clock } from "lucide-react";
import DemoModal from "./DemoModal";

const Hero = () => {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <>
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary-light to-primary" aria-label="Hero section">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="text-white space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">AI-Powered Finance Tracking</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Master Your Gastos,{" "}
              <span className="text-accent">One Snap at a Time</span>
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed max-w-xl">
              Effortlessly track all your Filipino expenses—from jeepney rides to Jollibee runs—using just your phone&apos;s camera or voice. ResiboKo&apos;s AI turns chaos into clarity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                variant="hero" 
                className="text-lg px-8 py-6"
                aria-label="Start tracking expenses for free"
              >
                Start Tracking for Free
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white"
                onClick={() => setDemoOpen(true)}
                aria-label="See how ResiboKo works"
              >
                See How It Works
              </Button>
            </div>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-3 pt-4">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-sm">Effortless AI Tracking</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <TrendingUp className="w-4 h-4 text-accent" />
                <span className="text-sm">Find Tipid Opportunities</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-sm">Built for PH Cash Spends</span>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-4 pt-2 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>Free to Start</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-accent" />
                <span>Secure Google Sign-In</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent" />
                <span>2-Minute Setup</span>
              </div>
            </div>
          </div>

          {/* Right column - Hero image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="ResiboKo app interface showing AI-powered receipt scanning" 
                className="w-full h-auto object-cover"
                loading="eager"
              />
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent" aria-hidden="true"></div>
            </div>
            {/* Floating video ad */}
            <div className="absolute -bottom-6 -left-6 rounded-xl overflow-hidden shadow-2xl hidden md:block w-80 aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=YOUR_VIDEO_ID"
                title="ResiboKo Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <DemoModal open={demoOpen} onOpenChange={setDemoOpen} />
    </>
  );
};

export default Hero;
