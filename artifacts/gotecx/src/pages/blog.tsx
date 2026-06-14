import React from "react";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Blog() {
  const posts = [
    { title: "The Future of AI in Enterprise Business", category: "Technology", date: "Oct 12, 2026", author: "Kerkulah Kerkulah" },
    { title: "Scaling Operations with Gotecx POS", category: "Product", date: "Sep 28, 2026", author: "Product Team" },
    { title: "Digital Transformation in Emerging Markets", category: "Industry Insight", date: "Sep 15, 2026", author: "Strategy Team" },
    { title: "Cybersecurity Best Practices for 2027", category: "Security", date: "Sep 02, 2026", author: "Security Operations" },
    { title: "How Cloud Infrastructure is Changing Retail", category: "Cloud", date: "Aug 20, 2026", author: "Engineering Team" },
    { title: "Building a Global Ecosystem from Liberia", category: "Company News", date: "Aug 05, 2026", author: "Leadership" }
  ];

  return (
    <div className="w-full bg-background">
      <section className="py-24 bg-[#0D1421] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Gotecx Blog</h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Insights, updates, and perspectives on the future of enterprise technology.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card border border-border rounded-2xl overflow-hidden group hover:shadow-xl hover:border-primary/50 transition-all flex flex-col cursor-pointer"
              >
                <div className="aspect-[16/9] bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors"></div>
                  <div className="absolute top-4 left-4 bg-background text-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {post.category}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4 text-primary/70" /> {post.date}</span>
                    <span className="flex items-center gap-1"><User className="w-4 h-4 text-primary/70" /> {post.author}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-6 flex-1 group-hover:text-primary transition-colors leading-snug">{post.title}</h3>
                  <div className="inline-flex items-center font-bold text-primary group-hover:gap-2 transition-all">
                    Read Article <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
