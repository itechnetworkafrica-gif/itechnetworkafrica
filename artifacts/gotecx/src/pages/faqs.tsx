import React from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Faqs() {
  const faqs = [
    {
      q: "What makes Gotecx POS different from other systems?",
      a: "Gotecx POS is built on enterprise-grade cloud architecture. It's not just a cash register, but a full command center that works offline, syncs instantly across global locations, and provides deep analytics usually reserved for massive ERP systems."
    },
    {
      q: "Can Gotecx integrate with our existing ERP?",
      a: "Yes. Gotecx is designed with an API-first approach. Our engineering team can build custom integrations connecting Gotecx to SAP, Oracle, NetSuite, or any custom legacy system you currently operate."
    },
    {
      q: "How does the partnership with iTech Network Africa work?",
      a: "Gotecx is 'Powered by iTech Network Africa'. This strategic alliance allows Gotecx to leverage iTech's deep operational infrastructure and deployment expertise, ensuring world-class support and implementation globally."
    },
    {
      q: "What industries do you serve?",
      a: "We provide tailored solutions for Retail, Healthcare, Education, Government, NGOs, Hospitality, Manufacturing, Banking, Telecommunications, and Logistics."
    },
    {
      q: "Is data stored securely?",
      a: "Security is our foundational pillar. We utilize AES-256 encryption, zero-trust architecture, and comply with international standards including GDPR, SOC2, and PCI-DSS."
    }
  ];

  return (
    <div className="w-full">
      <section className="py-24 bg-[#1A2035] text-white text-center">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Answers to common questions about our platform, services, and technology.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary transition-colors">
                <AccordionTrigger className="text-lg font-bold hover:no-underline py-6 text-left">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}