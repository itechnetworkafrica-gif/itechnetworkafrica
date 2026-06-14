import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Box, BarChart3, Cloud, Briefcase, Calculator, Smartphone, Zap, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Products() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-24 bg-[#0D1421] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Products Ecosystem</h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-10">
              The flagship Gotecx POS and our visionary roadmap of enterprise tools designed to run your entire operation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Flagship Product */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6">FLAGSHIP PLATFORM</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Gotecx POS</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Not just a point of sale. A complete command center for retail, hospitality, and enterprise operations. Process payments, manage inventory globally, and unlock real-time intelligence.
              </p>
              
              <div className="space-y-6 mb-10">
                {[
                  { title: "Unified Inventory", desc: "Sync stock across physical locations and online channels instantly.", icon: Box },
                  { title: "Real-time Analytics", desc: "Live dashboards tracking sales, employee performance, and margins.", icon: BarChart3 },
                  { title: "Cloud-native Resilience", desc: "Works seamlessly offline and syncs automatically when reconnected.", icon: Cloud }
                ].map((feat, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <feat.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{feat.title}</h4>
                      <p className="text-muted-foreground">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full">Request POS Demo</Button>
                <Button size="lg" variant="outline" className="rounded-full">View Pricing</Button>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              {/* Product Mockup */}
              <div className="bg-[#1A2035] rounded-2xl p-4 md:p-8 shadow-2xl border border-border relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px]"></div>
                <div className="bg-card rounded-xl border border-white/10 overflow-hidden shadow-2xl relative z-10 flex flex-col h-[500px]">
                  {/* Fake UI Header */}
                  <div className="h-14 bg-muted/50 border-b border-border flex items-center justify-between px-6">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="font-bold text-sm">Gotecx POS Dashboard</div>
                    <div className="w-8 h-8 rounded-full bg-primary/20"></div>
                  </div>
                  {/* Fake UI Body */}
                  <div className="flex-1 p-6 grid grid-cols-4 gap-6">
                    <div className="col-span-1 border-r border-border space-y-4 pr-6 hidden md:block">
                      <div className="h-8 bg-primary/20 rounded w-full"></div>
                      <div className="h-8 bg-muted rounded w-3/4"></div>
                      <div className="h-8 bg-muted rounded w-5/6"></div>
                      <div className="h-8 bg-muted rounded w-full"></div>
                    </div>
                    <div className="col-span-4 md:col-span-3 flex flex-col gap-6">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="h-24 bg-card border border-border shadow-sm rounded-xl p-4 flex flex-col justify-end"><div className="h-6 bg-green-500/20 w-1/2 rounded"></div></div>
                        <div className="h-24 bg-card border border-border shadow-sm rounded-xl p-4 flex flex-col justify-end"><div className="h-6 bg-blue-500/20 w-3/4 rounded"></div></div>
                        <div className="h-24 bg-card border border-border shadow-sm rounded-xl p-4 flex flex-col justify-end"><div className="h-6 bg-primary/20 w-2/3 rounded"></div></div>
                      </div>
                      <div className="flex-1 bg-muted/30 rounded-xl border border-border"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Future Roadmap */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-bold mb-6 uppercase tracking-wider">Future Roadmap</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">The Upcoming Ecosystem</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our vision goes beyond point of sale. We are actively developing a complete suite of enterprise tools to run your entire operation from a single pane of glass.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Gotecx AI", desc: "Predictive intelligence for supply chain, pricing optimization, and automated customer service.", icon: Zap },
              { name: "Gotecx Analytics", desc: "Deep data lake integration with beautiful, real-time visualization capabilities.", icon: BarChart3 },
              { name: "Gotecx Business Suite", desc: "All-in-one HR, payroll, scheduling, and team management.", icon: Briefcase },
              { name: "Gotecx CRM", desc: "Customer relationship management designed specifically for the global enterprise.", icon: Smartphone },
              { name: "Gotecx ERP", desc: "Enterprise resource planning that connects manufacturing to front-line sales.", icon: Calculator },
              { name: "Gotecx Cloud", desc: "Our proprietary secure infrastructure hosting the entire Gotecx ecosystem.", icon: ShieldCheck }
            ].map((prod, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className="p-8 rounded-2xl bg-background border border-border relative overflow-hidden group"
              >
                <div className="absolute top-4 right-4 px-2 py-1 bg-secondary text-xs rounded font-semibold text-secondary-foreground">IN DEV</div>
                <prod.icon className="w-10 h-10 text-muted-foreground mb-6 group-hover:text-primary transition-colors" />
                <h3 className="text-xl font-bold mb-3">{prod.name}</h3>
                <p className="text-muted-foreground">{prod.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}