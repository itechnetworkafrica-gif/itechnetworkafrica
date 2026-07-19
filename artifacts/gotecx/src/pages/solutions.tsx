import React from "react";
import { motion } from "framer-motion";
import { Building2, Cloud, Cpu, Shield, LineChart, Zap, ArrowRight } from "lucide-react";
import { Link } from "wouter";

import { useSEO } from "@/components/SEOHead";
export default function Solutions() {
  useSEO({
    title: "Solutions",
    description: "Explore Gotecx's full suite of enterprise technology solutions: cloud infrastructure, AI automation, cybersecurity, and digital transformation.",
    canonical: "/solutions",
  });


  const solutions = [
    { id: "enterprise", title: "Enterprise Solutions", desc: "Scalable platforms engineered for large organizations requiring complex operational management.", icon: Building2 },
    { id: "cloud", title: "Cloud Infrastructure", desc: "Secure, reliable, and highly available hosting services optimized for global scale.", icon: Cloud },
    { id: "ai", title: "AI & Automation", desc: "Intelligent workflows, machine learning models, and automation tools that reduce manual overhead.", icon: Cpu },
    { id: "cybersecurity", title: "Cybersecurity", desc: "Advanced protection for digital assets, ensuring compliance and data integrity.", icon: Shield },
    { id: "analytics", title: "Data Analytics", desc: "Transform raw data into actionable business intelligence with real-time dashboards.", icon: LineChart },
    { id: "digital", title: "Digital Transformation", desc: "End-to-end modernization of legacy systems to prepare your business for the future.", icon: Zap }
  ];

  return (
    <div className="w-full bg-background">
      <section className="py-24 bg-[#0D1421] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Solutions Ecosystem</h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Comprehensive technology solutions designed for scale, security, and exceptional performance across all business operations.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((sol, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                id={sol.id}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary transition-all shadow-sm"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <sol.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{sol.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">{sol.desc}</p>
                <Link href="/contact" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  Discuss Solution <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
