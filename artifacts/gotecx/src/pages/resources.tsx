import React from "react";
import { motion } from "framer-motion";
import { BookOpen, FileText, Video, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Resources() {
  return (
    <div className="w-full">
      <section className="py-24 bg-[#0D1421] text-white text-center">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Knowledge Hub</h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Insights, technical guides, and thought leadership from the engineers building the future of enterprise tech.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Link href="/blog">
              <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary transition-colors cursor-pointer group">
                <BookOpen className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Blog</h3>
                <p className="text-muted-foreground mb-6">Latest news, engineering insights, and tech trends.</p>
                <div className="text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">Read articles <ArrowRight className="w-4 h-4" /></div>
              </div>
            </Link>
            
            <Link href="/docs">
              <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary transition-colors cursor-pointer group">
                <FileText className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Documentation</h3>
                <p className="text-muted-foreground mb-6">API references, product guides, and technical setups.</p>
                <div className="text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">View docs <ArrowRight className="w-4 h-4" /></div>
              </div>
            </Link>

            <Link href="/media-center">
              <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary transition-colors cursor-pointer group">
                <Video className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Media Center</h3>
                <p className="text-muted-foreground mb-6">Webinars, tech talks, brand assets, and press releases.</p>
                <div className="text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">Explore media <ArrowRight className="w-4 h-4" /></div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}