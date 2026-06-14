import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, Globe2, Building } from "lucide-react";

export default function Investors() {
  return (
    <div className="w-full">
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

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-4 gap-6 mb-24">
            <div className="p-6 bg-card border border-border rounded-2xl text-center">
              <TrendingUp className="w-8 h-8 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold mb-1">145%</div>
              <div className="text-sm text-muted-foreground">YoY Growth</div>
            </div>
            <div className="p-6 bg-card border border-border rounded-2xl text-center">
              <Users className="w-8 h-8 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Enterprise Clients</div>
            </div>
            <div className="p-6 bg-card border border-border rounded-2xl text-center">
              <Globe2 className="w-8 h-8 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold mb-1">15+</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
            <div className="p-6 bg-card border border-border rounded-2xl text-center">
              <Building className="w-8 h-8 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold mb-1">98%</div>
              <div className="text-sm text-muted-foreground">Client Retention</div>
            </div>
          </div>

          <div className="prose dark:prose-invert max-w-none mb-16">
            <h2 className="text-3xl font-bold mb-6">Investment Thesis</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Gotecx, powered by iTech Network Africa, is positioned at the intersection of three massive global megatrends: cloud migration, AI-driven automation, and emerging market digitization. Our flagship Gotecx POS is just the entry point into a comprehensive enterprise ecosystem designed to replace fragmented legacy systems with a unified, high-performance command center.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Our unique approach combines Silicon Valley engineering standards with deep operational expertise in complex global markets, giving us an unprecedented advantage in deploying resilient, scalable technology where it's needed most.
            </p>
          </div>

          <div className="p-12 bg-card border border-border rounded-3xl text-center">
            <h2 className="text-2xl font-bold mb-4">Contact Investor Relations</h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">For institutional investment inquiries, quarterly reports, and financial disclosures, please reach out to our IR team.</p>
            <div className="font-bold text-lg text-primary">investors@gotecx.com</div>
          </div>
        </div>
      </section>
    </div>
  );
}