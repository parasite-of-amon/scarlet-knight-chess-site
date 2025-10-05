import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQ = () => {
  const faqs = [
    {
      question: "What is the most important rule in Chess?",
      answer: "The most important rule is that the king must never be left in check. When your king is threatened, you must either move it to safety, block the attack, or capture the attacking piece.",
    },
    {
      question: "What are the six pieces in chess called?",
      answer: "The six pieces are: King, Queen, Rook, Bishop, Knight, and Pawn. Each piece has unique movement patterns and strategic values in the game.",
    },
    {
      question: "What are the 3 golden rules of chess?",
      answer: "1) Control the center of the board, 2) Develop your pieces quickly and efficiently, 3) Protect your king through castling early in the game.",
    },
    {
      question: "What skill level do I need to join?",
      answer: "Our club welcomes all skill levels, from complete beginners to experienced tournament players. We provide a supportive environment where members can play casual games, participate in tournaments, and learn from each other.",
    },
    {
      question: "How often does the club meet?",
      answer: "We meet twice weekly throughout the academic year - Tuesdays and Fridays from 7-9 PM at the Busch Student Center. There's no attendance requirement; members can attend as frequently as they wish.",
    },
    {
      question: "Can you win in chess without using clockwise?",
      answer: "Yes, you can win without a clock in casual games. However, in tournament play, chess clocks are standard to ensure fair time management for both players.",
    },
    {
      question: "How can I enter the competition?",
      answer: "Join our club officially via getINVOLVED, join our Discord, and join our Chess.com page. We'll announce all upcoming tournaments and competitions through these channels.",
    },
    {
      question: "How much does it cost to join?",
      answer: "Membership is completely free! There are no fees to attend meetings or participate in most events. Equipment is provided, though you're welcome to bring your own.",
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="relative py-32 bg-dark-bg text-dark-foreground overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg/95 to-dark-bg/70 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1560174038-da43ac74f01b?w=1200')",
          }}
        />
        <div className="container mx-auto px-4 text-center relative z-20">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">FAQ</h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <a href="/" className="hover:text-primary">Home</a>
            <span>/</span>
            <span className="text-primary">FAQ</span>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-medium mb-4 uppercase tracking-wider">
              FAQs
            </p>
            <h2 className="font-serif text-4xl font-bold mb-4">General Question</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to commonly asked questions about our chess club, meetings, and membership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.slice(0, 4).map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-6">
                    <AccordionTrigger className="font-serif text-left hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.slice(4).map((faq, index) => (
                  <AccordionItem key={index + 4} value={`item-${index + 4}`} className="bg-card border border-border rounded-lg px-6">
                    <AccordionTrigger className="font-serif text-left hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-dark-bg text-dark-foreground overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg/95 to-dark-bg/70 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1560174038-da43ac74f01b?w=1200')",
          }}
        />
        <div className="container mx-auto px-4 text-center relative z-20">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Join Our Club This Year
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We hold our meetings in Busch Student Center food court every Tuesday and Friday 7-9 PM!
          </p>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
            JOIN NOW
          </Button>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
