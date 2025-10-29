import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

// Contact form schema with validation
const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  subject: z.string().trim().max(200, "Subject must be less than 200 characters").optional(),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters"),
  // Honeypot field - should remain empty
  website: z.string().max(0).optional(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Footer = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [formStartTime, setFormStartTime] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      website: "",
    },
  });

  // Track when the form is opened for time-based validation
  useEffect(() => {
    if (contactOpen) {
      setFormStartTime(Date.now());
    }
  }, [contactOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const onSubmit = async (data: ContactFormValues) => {
    // Honeypot check
    if (data.website && data.website.length > 0) {
      console.warn("Spam detected via honeypot");
      return;
    }

    // Time-based validation (must take at least 3 seconds)
    const timeTaken = Date.now() - formStartTime;
    if (timeTaken < 3000) {
      toast({
        title: "Error",
        description: "Please take your time filling out the form.",
        variant: "destructive",
      });
      return;
    }

    // Rate limiting check (1 submission per minute)
    const lastSubmission = localStorage.getItem("lastContactSubmission");
    if (lastSubmission) {
      const timeSinceLastSubmission = Date.now() - parseInt(lastSubmission);
      if (timeSinceLastSubmission < 60000) {
        const remainingTime = Math.ceil((60000 - timeSinceLastSubmission) / 1000);
        toast({
          title: "Please wait",
          description: `You can submit again in ${remainingTime} seconds.`,
          variant: "destructive",
        });
        return;
      }
    }

    setIsSubmitting(true);

    try {
      // Replace with your Web3Forms access key
      const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY_HERE";
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: data.name,
          email: data.email,
          subject: data.subject || "New contact form submission from ResiboKo",
          message: data.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        localStorage.setItem("lastContactSubmission", Date.now().toString());
        toast({
          title: "Message sent!",
          description: "We'll get back to you as soon as possible.",
        });
        form.reset();
        setContactOpen(false);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or email us directly at hello@resiboko.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <footer className="bg-primary text-white py-12">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-3">ResiboKo</h3>
              <p className="text-white/80 mb-4 max-w-md">
                AI-powered expense tracking made simple for Filipino professionals. 
                Turn receipts and spoken expenses into clear financial insights.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Product</h4>
              <ul className="space-y-2 text-white/80">
                <li>
                  <button onClick={() => scrollToSection("features")} className="hover:text-accent transition-colors">
                    Features
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("how-it-works")} className="hover:text-accent transition-colors">
                    How It Works
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("pricing")} className="hover:text-accent transition-colors">
                    Pricing
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("faq")} className="hover:text-accent transition-colors">
                    FAQ
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Legal</h4>
              <ul className="space-y-2 text-white/80">
                <li>
                  <button onClick={() => setPrivacyOpen(true)} className="hover:text-accent transition-colors">
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button onClick={() => setTermsOpen(true)} className="hover:text-accent transition-colors">
                    Terms of Service
                  </button>
                </li>
                <li>
                  <button onClick={() => setContactOpen(true)} className="hover:text-accent transition-colors">
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>&copy; 2025 ResiboKo / Ai For Pinoys. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      <Dialog open={contactOpen} onOpenChange={setContactOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">Contact Us</DialogTitle>
            <DialogDescription>
              Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </DialogDescription>
          </DialogHeader>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Honeypot field - hidden from users */}
              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem className="hidden">
                    <FormControl>
                      <Input {...field} tabIndex={-1} autoComplete="off" />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Juan dela Cruz" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="juan@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="How can we help?" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us what's on your mind..." 
                        className="min-h-[120px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                Or email us directly at{" "}
                <a href="mailto:hello@resiboko.com" className="text-accent hover:underline">
                  hello@resiboko.com
                </a>
              </p>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      {/* Privacy Policy Modal */}
      <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Privacy Policy</DialogTitle>
            <DialogDescription>Last updated: January 2025</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 text-sm text-muted-foreground">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Introduction</h3>
              <p>
                ResiboKo (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your privacy and is committed to protecting your personal data. 
                This privacy policy explains how we collect, use, and safeguard your information when you use our expense tracking application.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Information We Collect</h3>
              <p className="mb-2">We collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Account information (email address, name) provided through Google Sign-In</li>
                <li>Receipt images and transaction data you upload or input</li>
                <li>Voice recordings when you use voice entry features</li>
                <li>Usage data and analytics to improve our service</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">How We Use Your Information</h3>
              <p className="mb-2">Your information is used to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Process and categorize your expenses using AI</li>
                <li>Provide personalized financial insights and &ldquo;tipid opportunities&rdquo;</li>
                <li>Sync your data across devices via Firebase</li>
                <li>Improve our AI models and service features</li>
                <li>Send important updates about your account</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Data Security</h3>
              <p>
                We use Firebase&apos;s enterprise-grade security infrastructure with bank-level encryption to protect your data. 
                Your information is encrypted both in transit and at rest. We do not share your personal financial data with third parties 
                for marketing purposes.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Your Rights</h3>
              <p className="mb-2">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Access your personal data</li>
                <li>Request deletion of your data</li>
                <li>Export your transaction history</li>
                <li>Opt out of non-essential communications</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Contact Us</h3>
              <p>
                For privacy concerns or data requests, please contact us at{" "}
                <a href="mailto:privacy@resiboko.com" className="text-accent hover:underline">
                  privacy@resiboko.com
                </a>
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Terms of Service Modal */}
      <Dialog open={termsOpen} onOpenChange={setTermsOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Terms of Service</DialogTitle>
            <DialogDescription>Last updated: January 2025</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 text-sm text-muted-foreground">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Acceptance of Terms</h3>
              <p>
                By accessing and using ResiboKo, you accept and agree to be bound by the terms and provisions of this agreement. 
                If you do not agree to these terms, please do not use our service.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Service Description</h3>
              <p>
                ResiboKo is an AI-powered expense tracking application designed for Filipino users. We provide tools to capture, 
                categorize, and analyze your financial transactions through receipt scanning, voice entry, and manual input.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">User Responsibilities</h3>
              <p className="mb-2">You agree to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Provide accurate information when creating your account</li>
                <li>Keep your account credentials secure</li>
                <li>Not use the service for illegal purposes</li>
                <li>Not attempt to reverse engineer or exploit our AI systems</li>
                <li>Not share your account with others</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Subscription and Billing</h3>
              <p>
                ResiboKo offers both free and paid (Pro) plans. Paid subscriptions are billed monthly or annually. 
                You may cancel your subscription at any time, and cancellation will be effective at the end of your current billing period. 
                Refunds are handled on a case-by-case basis.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Money-Back Guarantee</h3>
              <p>
                If Piso doesn&apos;t find you ₱1,000 in potential savings within your first 30 days of Pro membership 
                (after logging at least 40 entries), your next month is free. Contact support to claim this guarantee.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Intellectual Property</h3>
              <p>
                All content, features, and functionality of ResiboKo, including our AI technology, are owned by Ai For Pinoys 
                and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Limitation of Liability</h3>
              <p>
                ResiboKo is provided &ldquo;as is&rdquo; without warranties of any kind. We are not responsible for financial decisions 
                made based on insights provided by our AI. Always consult a qualified financial advisor for important financial decisions.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Changes to Terms</h3>
              <p>
                We reserve the right to modify these terms at any time. We will notify users of significant changes via email. 
                Continued use of the service after changes constitutes acceptance of the new terms.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Contact</h3>
              <p>
                For questions about these terms, contact us at{" "}
                <a href="mailto:legal@resiboko.com" className="text-accent hover:underline">
                  legal@resiboko.com
                </a>
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Footer;
