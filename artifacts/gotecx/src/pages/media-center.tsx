import React from "react";
import { motion } from "framer-motion";
import { Download, FileImage } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MediaCenter() {
  return (
    <div className="w-full">
      <section className="py-24 bg-[#1A2035] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Media Center</h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Press releases, brand assets, and company news.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-24">
            <div>
              <h2 className="text-3xl font-bold mb-8">Press Releases</h2>
              <div className="space-y-6">
                {[
                  { date: "Oct 15, 2025", title: "Gotecx Announces Global Availability of Next-Gen Enterprise POS" },
                  { date: "Sep 01, 2025", title: "iTech Network Africa and Gotecx Form Strategic Infrastructure Alliance" },
                  { date: "Jul 12, 2025", title: "Gotecx Achieves SOC2 Type II Certification for Entire Cloud Suite" }
                ].map((pr, i) => (
                  <div key={i} className="pb-6 border-b border-border last:border-0 cursor-pointer group">
                    <div className="text-sm text-primary font-bold mb-2">{pr.date}</div>
                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{pr.title}</h3>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-8">Brand Assets</h2>
              <div className="p-8 bg-card border border-border rounded-2xl mb-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <FileImage className="w-8 h-8 text-primary" />
                  <div>
                    <div className="font-bold">Gotecx Brand Guidelines</div>
                    <div className="text-sm text-muted-foreground">PDF • 4.2 MB</div>
                  </div>
                </div>
                <Button variant="outline" size="icon" className="rounded-full"><Download className="w-4 h-4" /></Button>
              </div>
              <div className="p-8 bg-card border border-border rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <FileImage className="w-8 h-8 text-primary" />
                  <div>
                    <div className="font-bold">Logo Pack (SVG, PNG)</div>
                    <div className="text-sm text-muted-foreground">ZIP • 12.5 MB</div>
                  </div>
                </div>
                <Button variant="outline" size="icon" className="rounded-full"><Download className="w-4 h-4" /></Button>
              </div>
            </div>
          </div>
          
          <div className="text-center max-w-2xl mx-auto p-12 bg-card border border-border rounded-3xl">
            <h2 className="text-2xl font-bold mb-4">Media Inquiries</h2>
            <p className="text-muted-foreground mb-6">For press inquiries, interview requests, or speaker engagements, please contact our media team.</p>
            <div className="font-bold text-lg text-primary">press@gotecx.com</div>
          </div>
        </div>
      </section>
    </div>
  );
}