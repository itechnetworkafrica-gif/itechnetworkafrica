import React from "react";
import { motion } from "framer-motion";
import { BookOpen, FileText, Video, ArrowRight } from "lucide-react";
import { Link } from "wouter";

import { useSEO } from "@/components/SEOHead";
export default function Resources() {
  useSEO({
    title: "Resources",
    description: "Access Gotecx's library of whitepapers, guides, webinars, and technical resources to accelerate your digital transformation.",
    canonical: "/resources",
  });


  return (
    <div className="w-full bg-background">
      <section className="py-24 bg-[#0D1421] text-white text-center">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Knowledge Hub</h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Insights, technical guides, and thought leadership from the engineers building the future of enterprise tech.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/blog">
              <div className="p-10 rounded-[2rem] bg-card border border-border hover:border-primary hover:shadow-xl transition-all cursor-pointer group h-full flex flex-col">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">Blog</h3>
                <p className="text-muted-foreground mb-10 text-lg flex-1">Latest news, engineering insights, and tech trends.</p>
                <div className="text-primary font-bold flex items-center gap-2 group-hover:gap-3 transition-all text-lg">Read articles <ArrowRight className="w-5 h-5" /></div>
              </div>
            </Link>
            
            <Link href="/docs">
              <div className="p-10 rounded-[2rem] bg-card border border-border hover:border-primary hover:shadow-xl transition-all cursor-pointer group h-full flex flex-col">
                 <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">Documentation</h3>
                <p className="text-muted-foreground mb-10 text-lg flex-1">API references, product guides, and technical setups.</p>
                <div className="text-primary font-bold flex items-center gap-2 group-hover:gap-3 transition-all text-lg">View docs <ArrowRight className="w-5 h-5" /></div>
              </div>
            </Link>

            <Link href="/media-center">
              <div className="p-10 rounded-[2rem] bg-card border border-border hover:border-primary hover:shadow-xl transition-all cursor-pointer group h-full flex flex-col">
                 <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <Video className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">Media Center</h3>
                <p className="text-muted-foreground mb-10 text-lg flex-1">Webinars, tech talks, brand assets, and press releases.</p>
                <div className="text-primary font-bold flex items-center gap-2 group-hover:gap-3 transition-all text-lg">Explore media <ArrowRight className="w-5 h-5" /></div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
