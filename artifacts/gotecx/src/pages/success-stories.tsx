import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function SuccessStories() {
  const stories = [
    {
      company: "Aura Retail Group",
      industry: "Retail",
      metric: "+145%",
      metricLabel: "Sales processing speed",
      title: "How Aura scaled to 50 locations with Gotecx POS",
      desc: "Replacing fragmented legacy systems with a unified cloud POS, enabling real-time inventory management across all regions."
    },
    {
      company: "NexoHealth",
      industry: "Healthcare",
      metric: "Zero",
      metricLabel: "Downtime during migration",
      title: "Secure cloud migration for a network of 12 hospitals",
      desc: "A complete infrastructure overhaul ensuring HIPAA compliance and sub-second patient record retrieval."
    },
    {
      company: "Finserve Bank",
      industry: "Finance",
      metric: "2.4x",
      metricLabel: "Increase in digital onboarding",
      title: "Building a next-generation mobile banking experience",
      desc: "Developing a custom React Native application with advanced biometric security and AI-driven insights."
    },
    {
      company: "Global Logistics Ltd",
      industry: "Logistics",
      metric: "-30%",
      metricLabel: "Reduction in routing overhead",
      title: "Automating fleet management with custom ERP",
      desc: "Implementing a custom IoT-enabled tracking system to optimize delivery routes and reduce fuel consumption."
    }
  ];

  return (
    <div className="w-full">
      <section className="py-24 bg-[#1A2035] text-white text-center">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Success Stories</h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              See how global enterprises use Gotecx technology to transform their operations, secure their infrastructure, and accelerate growth.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-4 mb-16 flex-wrap">
            <Button variant="default" className="rounded-full bg-primary text-primary-foreground">All Industries</Button>
            <Button variant="outline" className="rounded-full">Retail</Button>
            <Button variant="outline" className="rounded-full">Finance</Button>
            <Button variant="outline" className="rounded-full">Healthcare</Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {stories.map((story, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-3xl overflow-hidden border border-border bg-card hover:border-primary/50 transition-all cursor-pointer flex flex-col"
              >
                <div className="h-48 bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:bg-primary/40 transition-colors"></div>
                  <div className="absolute bottom-4 left-6 z-20">
                    <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider">
                      {story.industry}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="mb-4 text-sm font-semibold text-primary">{story.company}</div>
                  <h3 className="text-2xl font-bold mb-4 line-clamp-2">{story.title}</h3>
                  <p className="text-muted-foreground mb-8 flex-1">{story.desc}</p>
                  
                  <div className="pt-6 border-t border-border flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-2xl font-bold text-foreground">
                        <TrendingUp className="w-5 h-5 text-primary" /> {story.metric}
                      </div>
                      <div className="text-xs text-muted-foreground">{story.metricLabel}</div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold mb-6">Ready to write your success story?</h3>
            <Link href="/contact">
              <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 px-8">Talk to our experts</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}