import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, Globe2, Building } from "lucide-react";

import { useSEO } from "@/components/SEOHead";
export default function Investors() {
  useSEO({
    title: "Investors",
    description: "Investor information, financial reporting, and corporate governance for Gotecx — a high-growth global technology platform.",
    canonical: "/investors",
  });


  return (
    <div className="w-full bg-background">
      <section className="py-24 bg-[#0D1421] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Investor Relations</h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Fueling the global expansion of enterprise technology through sustainable growth and visionary engineering.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
            <div className="p-8 bg-card border border-border rounded-2xl text-center shadow-sm">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-7 h-7 text-primary" />
              </div>
              <div className="text-4xl font-black mb-2">145%</div>
              <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider">YoY Growth</div>
            </div>
            <div className="p-8 bg-card border border-border rounded-2xl text-center shadow-sm">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <div className="text-4xl font-black mb-2">500+</div>
              <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Enterprise Clients</div>
            </div>
            <div className="p-8 bg-card border border-border rounded-2xl text-center shadow-sm">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe2 className="w-7 h-7 text-primary" />
              </div>
              <div className="text-4xl font-black mb-2">15+</div>
              <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Countries</div>
            </div>
            <div className="p-8 bg-card border border-border rounded-2xl text-center shadow-sm">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="w-7 h-7 text-primary" />
              </div>
              <div className="text-4xl font-black mb-2">98%</div>
              <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Client Retention</div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-24">
            <h2 className="text-3xl font-bold mb-8">Investment Thesis</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Gotecx, powered by iTech Network Africa, is positioned at the intersection of three massive global megatrends: cloud migration, AI-driven automation, and emerging market digitization. Our flagship Gotecx POS is just the entry point into a comprehensive enterprise ecosystem designed to replace fragmented legacy systems with a unified, high-performance command center.
              </p>
              <p>
                Our unique approach combines robust engineering standards with deep operational expertise in complex global markets, giving us an unprecedented advantage in deploying resilient, scalable technology where it's needed most.
              </p>
            </div>
          </div>

          <div className="p-16 bg-[#1A2535] border border-border rounded-[2rem] text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Contact Investor Relations</h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto text-lg">For institutional investment inquiries, quarterly reports, and financial disclosures, please reach out to our IR team.</p>
            <div className="inline-block bg-background/20 px-8 py-4 rounded-xl font-bold text-2xl tracking-wider">investors@gotecx.com</div>
          </div>
        </div>
      </section>
    </div>
  );
}
