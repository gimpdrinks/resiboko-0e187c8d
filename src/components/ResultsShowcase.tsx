import { X, Check, Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const beforeItems = [
  "Wallet full of faded receipts",
  "Hours lost to spreadsheets",
  "Sayang spending you can't track",
  "Anxiety about where pera goes",
];

const afterItems = [
  "Expenses logged in seconds",
  "Automatic categorization",
  "AI finds tipid opportunities",
  "Clear picture of your finances",
];

const testimonials = [
  {
    name: "Maria Santos",
    role: "Freelance Graphic Designer",
    quote: "ResiboKo saved me hours every week! No more manual receipts or Excel sheets. Perfect for tracking all my client expenses and jeepney rides.",
    rating: 5,
  },
  {
    name: "Juan dela Cruz",
    role: "Small Business Owner",
    quote: "Finally, an app that gets Filipino expenses! The voice input for quick cash spends is a game-changer. 'Piso' even found ₱3,000 in savings last month!",
    rating: 5,
  },
  {
    name: "Patricia Reyes",
    role: "Marketing Professional",
    quote: "Super easy to use, even for someone who's not techy. I love seeing where my money actually goes. The AI insights are surprisingly helpful!",
    rating: 5,
  },
];

const ResultsShowcase = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Comparison Section */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              From Resibo Chaos to Financial Clarity
            </h2>
            <p className="text-xl text-muted-foreground">
              See the difference ResiboKo makes in your daily life
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Before Column */}
            <Card className="p-8 bg-muted/50 border-destructive/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                  <X className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">
                  Before ResiboKo
                </h3>
              </div>
              <ul className="space-y-4">
                {beforeItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* After Column */}
            <Card className="p-8 bg-gradient-to-br from-accent/5 to-accent/10 border-accent/30 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Check className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">
                  With ResiboKo
                </h3>
              </div>
              <ul className="space-y-4">
                {afterItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Sabi ng Mga Gumagamit
            </h2>
            <p className="text-xl text-muted-foreground">
              Real stories from Filipino users who've transformed their finances
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsShowcase;
