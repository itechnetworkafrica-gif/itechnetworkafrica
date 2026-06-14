import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Events() {
  const events = [
    { title: "Enterprise Tech Summit 2026", date: "March 15-17, 2026", type: "In-Person Conference", location: "Dubai, UAE" },
    { title: "Gotecx POS Global Unveil", date: "April 02, 2026", type: "Virtual Keynote", location: "Online" },
    { title: "Securing Cloud Infrastructure in Finance", date: "April 20, 2026", type: "Technical Workshop", location: "Online" },
    { title: "iTech Network Africa Innovation Day", date: "May 10, 2026", type: "In-Person Event", location: "Nairobi, Kenya" },
  ];

  return (
    <div className="w-full bg-background">
      <section className="py-24 bg-[#0D1421] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Events & Webinars</h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Join us globally or virtually to explore the future of enterprise technology.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-6">
            {events.map((evt, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-card border border-border rounded-2xl flex flex-col md:flex-row gap-8 md:items-center justify-between group hover:border-primary transition-all shadow-sm"
              >
                <div className="flex-1">
                  <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4 uppercase tracking-wider">
                    {evt.type}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{evt.title}</h3>
                  <div className="flex flex-wrap gap-6 text-sm text-muted-foreground font-medium">
                    <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-primary" /> {evt.date}</span>
                    <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> {evt.location}</span>
                  </div>
                </div>
                <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 shrink-0 font-bold px-8">
                  Register Now <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
