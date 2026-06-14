import React from "react";
import { motion } from "framer-motion";
import { Search, Book, Wrench, LifeBuoy, AlertCircle, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Support() {
  return (
    <div className="w-full bg-background">
      <section className="py-24 bg-[#0D1421] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Support Center</h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-12">
              How can we help you today? Search our knowledge base or open a ticket.
            </p>
            <div className="relative max-w-3xl mx-auto">
              <input 
                type="text" 
                placeholder="Search for articles, guides, or troubleshooting steps..." 
                className="w-full bg-white/5 border border-white/20 rounded-2xl py-6 pl-16 pr-8 text-lg text-white placeholder:text-white/40 outline-none focus:border-primary focus:bg-white/10 transition-all backdrop-blur-md shadow-2xl"
              />
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/40 w-7 h-7" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {[
              { title: "Getting Started", icon: Book, desc: "Onboarding and setup guides for new users." },
              { title: "Troubleshooting", icon: Wrench, desc: "Fix common issues and resolve errors quickly." },
              { title: "Billing & Account", icon: LifeBuoy, desc: "Manage your subscription and invoices." },
              { title: "System Status", icon: AlertCircle, desc: "Check platform uptime and service health." }
            ].map((cat, i) => (
              <div key={i} className="p-8 bg-card border border-border rounded-2xl hover:border-primary hover:shadow-lg transition-all cursor-pointer group flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <cat.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3">{cat.title}</h3>
                <p className="text-muted-foreground">{cat.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row gap-12 bg-[#1A2535] text-white border border-border p-12 lg:p-16 rounded-[2rem] items-center shadow-xl relative overflow-hidden">
             <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full"></div>
            <div className="md:w-2/3 relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Need technical assistance?</h2>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                Our engineering support team is available 24/7 for enterprise SLA customers. Open a ticket and we'll route it to the right specialist immediately.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 font-bold px-8 h-14 text-lg shadow-[0_0_20px_rgba(var(--primary),0.3)]">
                  Open Support Ticket
                </Button>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="rounded-full font-bold px-8 h-14 text-lg border-white/20 bg-white/5 hover:bg-white/10 text-white">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center relative z-10">
              <div className="w-40 h-40 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                <LifeBuoy className="w-20 h-20 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
