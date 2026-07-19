import React from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

import { useSEO } from "@/components/SEOHead";
export default function Faqs() {
  useSEO({
    title: "FAQs",
    description: "Frequently asked questions about Gotecx products, services, pricing, and support.",
    canonical: "/faqs",
  });


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
    <div className="w-full bg-background">
      <section className="py-24 bg-[#0D1421] text-white text-center">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Answers to common questions about our platform, services, and technology.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-32">
        <div className="container mx-auto px-4 max-w-4xl">
          <Accordion type="single" collapsible className="w-full space-y-6">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-card border border-border rounded-2xl px-8 shadow-sm data-[state=open]:border-primary data-[state=open]:shadow-md transition-all">
                <AccordionTrigger className="text-xl font-bold hover:no-underline py-8 text-left gap-6">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-8 text-lg leading-relaxed">
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
