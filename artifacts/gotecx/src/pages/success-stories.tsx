import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, ShieldCheck, Zap } from "lucide-react";
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
      desc: "Replacing fragmented legacy systems with a unified cloud POS, enabling real-time inventory management across all regions.",
      icon: TrendingUp
    },
    {
      company: "NexoHealth",
      industry: "Healthcare",
      metric: "Zero",
      metricLabel: "Downtime during migration",
      title: "Secure cloud migration for a network of 12 hospitals",
      desc: "A complete infrastructure overhaul ensuring HIPAA compliance and sub-second patient record retrieval.",
      icon: ShieldCheck
    },
    {
      company: "Finserve Bank",
      industry: "Finance",
      metric: "2.4x",
      metricLabel: "Increase in digital onboarding",
      title: "Building a next-generation mobile banking experience",
      desc: "Developing a custom React Native application with advanced biometric security and AI-driven insights.",
      icon: Zap
    },
    {
      company: "Global Logistics Ltd",
      industry: "Logistics",
      metric: "-30%",
      metricLabel: "Reduction in routing overhead",
      title: "Automating fleet management with custom ERP",
      desc: "Implementing a custom IoT-enabled tracking system to optimize delivery routes and reduce fuel consumption.",
      icon: TrendingUp
    }
  ];

  return (
    <div className="w-full bg-background">
      <section className="py-24 bg-[#0D1421] text-white text-center">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Success Stories</h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              See how global enterprises use Gotecx technology to transform their operations, secure their infrastructure, and accelerate growth.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-4 mb-16 flex-wrap">
            <Button variant="default" className="rounded-full bg-primary text-primary-foreground font-bold px-6">All Industries</Button>
            <Button variant="outline" className="rounded-full font-bold px-6">Retail</Button>
            <Button variant="outline" className="rounded-full font-bold px-6">Finance</Button>
            <Button variant="outline" className="rounded-full font-bold px-6">Healthcare</Button>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {stories.map((story, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-[2rem] overflow-hidden border border-border bg-card hover:border-primary hover:shadow-xl transition-all cursor-pointer flex flex-col"
              >
                <div className="h-56 bg-muted relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-[#1A2535]"></div>
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-overlay"></div>
                  <div className="absolute bottom-6 left-8 z-20">
                    <span className="px-4 py-1.5 rounded-full bg-background text-foreground text-xs font-bold uppercase tracking-wider shadow-sm">
                      {story.industry}
                    </span>
                  </div>
                  <story.icon className="w-20 h-20 text-white/10 relative z-10 group-hover:scale-110 transition-transform" />
                </div>
                <div className="p-10 flex-1 flex flex-col">
                  <div className="mb-4 text-sm font-bold text-primary uppercase tracking-wider">{story.company}</div>
                  <h3 className="text-3xl font-bold mb-4 leading-tight">{story.title}</h3>
                  <p className="text-muted-foreground text-lg mb-10 flex-1">{story.desc}</p>
                  
                  <div className="pt-8 border-t border-border flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-3xl font-black text-foreground mb-1">
                        {story.metric}
                      </div>
                      <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{story.metricLabel}</div>
                    </div>
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 text-center p-16 bg-[#1A2535] rounded-[3rem] text-white">
            <h3 className="text-4xl font-bold mb-8">Ready to write your success story?</h3>
            <Link href="/contact">
              <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 px-10 h-14 text-lg font-bold">Talk to our experts</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
