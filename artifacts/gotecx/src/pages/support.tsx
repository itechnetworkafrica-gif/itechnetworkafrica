import React from "react";
import { motion } from "framer-motion";
import { Search, Book, Wrench, LifeBuoy, AlertCircle } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Support() {
  return (
    <div className="w-full">
      <section className="py-24 bg-[#0D1421] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Support Center</h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
              How can we help you today? Search our knowledge base or open a ticket.
            </p>
            <div className="relative max-w-2xl mx-auto">
              <input 
                type="text" 
                placeholder="Search for articles, guides, or troubleshooting steps..." 
                className="w-full bg-white/10 border border-white/20 rounded-full py-4 pl-14 pr-6 text-lg text-white placeholder:text-white/40 outline-none focus:border-primary transition-colors backdrop-blur-sm"
              />
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-white/40 w-6 h-6" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {[
              { title: "Getting Started", icon: Book, desc: "Onboarding and setup guides." },
              { title: "Troubleshooting", icon: Wrench, desc: "Fix common issues quickly." },
              { title: "Billing & Account", icon: LifeBuoy, desc: "Manage your subscription." },
              { title: "System Status", icon: AlertCircle, desc: "Check platform uptime." }
            ].map((cat, i) => (
              <div key={i} className="p-6 bg-card border border-border rounded-2xl hover:border-primary transition-colors cursor-pointer text-center group">
                <cat.icon className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold mb-2">{cat.title}</h3>
                <p className="text-sm text-muted-foreground">{cat.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row gap-12 bg-card border border-border p-12 rounded-3xl items-center">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-4">Need technical assistance?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our engineering support team is available 24/7 for enterprise SLA customers. Open a ticket and we'll route it to the right specialist.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90">Open Support Ticket</Button>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="rounded-full">Contact Sales</Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center">
                <LifeBuoy className="w-16 h-16 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}