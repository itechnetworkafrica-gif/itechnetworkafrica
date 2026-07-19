import React from "react";
import { motion } from "framer-motion";
import { CreditCard, Cpu, BarChart3, Cloud, Layers, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

import { useSEO } from "@/components/SEOHead";
export default function Products() {
  useSEO({
    title: "Products",
    description: "Discover Gotecx's enterprise product portfolio — cloud platforms, AI tools, security suites, and business management systems.",
    canonical: "/products",
  });


  return (
    <div className="w-full bg-background">
      <section className="py-24 bg-[#0D1421] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Discover the Gotecx ecosystem of powerful, scalable business applications designed for global enterprises.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-card border border-border rounded-3xl p-8 lg:p-16 flex flex-col lg:flex-row gap-12 items-center mb-16 shadow-lg">
            <div className="lg:w-1/2">
              <div className="inline-flex px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold mb-6 uppercase tracking-wider">
                Flagship Platform
              </div>
              <h2 className="text-4xl font-bold mb-6">Gotecx POS</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                The ultimate point-of-sale and business management platform. Manage inventory, process transactions, and analyze sales data in real-time across multiple locations.
              </p>
              <ul className="space-y-4 mb-8">
                {['Real-time inventory sync', 'Multi-location management', 'Advanced analytics dashboard', 'Offline mode support'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                    <span className="font-medium text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="bg-primary text-white rounded-full font-bold px-8 hover:bg-primary/90">
                Request a Demo
              </Button>
            </div>
            <div className="lg:w-1/2 bg-[#1A2535] rounded-2xl p-8 w-full min-h-[400px] flex items-center justify-center border border-white/5 relative overflow-hidden">
               <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(rgba(255,255,255,1) 0 1px, transparent 1px 40px), repeating-linear-gradient(90deg, rgba(255,255,255,1) 0 1px, transparent 1px 40px)" }}></div>
              <div className="text-center relative z-10">
                <CreditCard className="w-20 h-20 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-2">Smart Terminal UI</h3>
                <p className="text-white/50">Interactive Demo Available Soon</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-10 text-center">Future Roadmap</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Gotecx AI", desc: "Intelligent automation and predictive analytics.", icon: Cpu },
              { name: "Gotecx Analytics", desc: "Deep insights and reporting platform.", icon: BarChart3 },
              { name: "Gotecx ERP", desc: "Complete enterprise resource planning.", icon: Layers },
              { name: "Gotecx Cloud", desc: "Secure infrastructure and hosting.", icon: Cloud }
            ].map((prod, i) => (
              <div key={i} className="p-8 rounded-2xl bg-muted/30 border border-border text-center hover:border-primary/50 transition-colors">
                <prod.icon className="w-12 h-12 text-primary/60 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{prod.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{prod.desc}</p>
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest bg-background px-3 py-1 rounded-full border border-border inline-block">Coming Soon</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
