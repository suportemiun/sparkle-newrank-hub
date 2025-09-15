import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQ = () => {
  const faqs = [
    {
      question: "How does Newrank's game boosting work?",
      answer: "Our professional boosters are verified experts who will safely and efficiently boost your rank. We use secure methods that comply with game terms of service, and your account information is protected with military-grade encryption.",
    },
    {
      question: "Is my account safe during boosting services?",
      answer: "Absolutely. We implement multiple security layers including VPN protection, secure login protocols, and real-time monitoring. Our boosters are thoroughly vetted professionals with clean track records.",
    },
    {
      question: "How long does it take to complete a boost?",
      answer: "Completion times vary depending on your current rank and target rank. Most boosts are completed within 24-72 hours. We provide real-time progress updates throughout the entire process.",
    },
    {
      question: "Can I play on my account while it's being boosted?",
      answer: "For security and efficiency, we recommend not playing during active boost sessions. However, we can arrange specific time windows where you can access your account if needed.",
    },
    {
      question: "What games do you support?",
      answer: "We support all major competitive games including League of Legends, CS2, Valorant, Overwatch 2, Apex Legends, Rocket League, and many more. Our service catalog is constantly expanding.",
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 30-day money-back guarantee for all our services. If you're not completely satisfied with our service, we'll provide a full refund no questions asked.",
    },
    {
      question: "How do I track my boost progress?",
      answer: "Every client gets access to our real-time dashboard where you can monitor your boost progress, view match history, and communicate with your assigned booster through our secure messaging system.",
    },
    {
      question: "Are there any hidden fees?",
      answer: "No hidden fees, ever. The price you see is the price you pay. All our pricing is transparent and includes everything needed to complete your service.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-background dark:from-gray-900 dark:to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about Newrank services and how we can help elevate your gaming experience
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 hover:shadow-md transition-all duration-300"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions?
          </p>
          <Button variant="outline" size="lg" className="btn-apple">
            Contact Support
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;