import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is my financial data safe?",
    answer: "Absolutely. ResiboKo uses Firebase's enterprise-grade security infrastructure with bank-level encryption to protect your data. We also use Secure Google Sign-In for authentication, so you never need to create another password. Your financial information is encrypted both in transit and at rest, and we never share your data with third parties.",
  },
  {
    question: "What's a 'tipid opportunity'?",
    answer: "A tipid opportunity is when Piso (our AI assistant) identifies patterns in your spending where you could save money—like recurring fees you might not notice, cheaper alternatives for regular purchases, or spending habits that add up over time. It's not about judging your budget; it's about finding inefficiencies and helping you keep more of your hard-earned money.",
  },
  {
    question: "How is this different from my bank app?",
    answer: "Bank apps only track card transactions and formal bank transfers. ResiboKo is built specifically for Filipino cash culture—capturing jeepney fares, tindahan purchases, carinderia meals, and any expense without a digital trail. Plus, our AI provides insights and savings recommendations that bank apps don't offer. Think of it as your personal financial assistant for all the spending your bank can't see.",
  },
  {
    question: "Can it read faded or crumpled resibos?",
    answer: "Our AI is trained to handle real-world Filipino receipts, including faded ink and crumpled paper. While it works best with clear photos, it can often extract information from less-than-perfect receipts. If the AI can't read something, you can quickly edit or manually enter the details. We're constantly improving our recognition technology.",
  },
  {
    question: "Do I need to connect my bank account?",
    answer: "No! ResiboKo doesn't require bank account connections. We focus on the expenses you capture yourself—whether through photos, voice, or manual entry. This gives you complete control over what you track and keeps your banking information separate and secure.",
  },
  {
    question: "How does it handle cash expenses like jeepney fares?",
    answer: "Super easy! You can use voice entry (just say \"Gastos 15 sa jeep\"), manual entry, or quick presets for common expenses like jeepney rides. No receipt needed. It takes just seconds to log cash expenses, making it perfect for the daily costs that usually slip through the cracks.",
  },
  {
    question: "Can I cancel my Pro plan anytime?",
    answer: "Yes, absolutely. There are no long-term contracts or cancellation fees. You can cancel your Pro subscription anytime from your account settings, and you'll still have access until the end of your billing period. We believe in earning your subscription every month.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Mga Madalas Itanong
            </h2>
            <p className="text-xl text-muted-foreground">
              Get answers to common questions about ResiboKo
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
