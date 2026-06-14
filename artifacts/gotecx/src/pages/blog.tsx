import React from "react";
import { motion } from "framer-motion";

export default function Blog() {
  const posts = [
    { category: "Engineering", title: "Scaling PostgreSQL for Global Enterprise POS Systems", date: "Oct 12, 2025" },
    { category: "AI & Automation", title: "Predictive Analytics in Retail: Moving Beyond Historical Data", date: "Oct 05, 2025" },
    { category: "Cybersecurity", title: "Zero Trust Architecture Implementation Guide for Financial Institutions", date: "Sep 28, 2025" },
    { category: "Company News", title: "Gotecx and iTech Network Africa Announce Expanded Partnership", date: "Sep 15, 2025" },
    { category: "Cloud Infrastructure", title: "Multi-Region Kubernetes Deployments: Lessons Learned", date: "Sep 02, 2025" },
    { category: "Digital Transformation", title: "Why Legacy Migration Projects Fail (And How to Ensure Yours Succeeds)", date: "Aug 20, 2025" },
  ];

  return (
    <div className="w-full">
      <section className="py-24 bg-[#1A2035] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Engineering Blog</h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Deep technical dives, industry analysis, and product updates from the Gotecx team.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-video bg-card border border-border rounded-2xl mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/20 transition-colors"></div>
                </div>
                <div className="text-sm font-bold text-primary mb-3 uppercase tracking-wider">{post.category}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                <div className="text-sm text-muted-foreground">{post.date}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}