import React from "react";
import { motion } from "framer-motion";
import { Download, FileImage, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

import { useSEO } from "@/components/SEOHead";
export default function MediaCenter() {
  useSEO({
    title: "Media Center",
    description: "Gotecx press releases, news, and company announcements. Stay informed about the Gotecx Global Technology Platform.",
    canonical: "/media-center",
  });


  return (
    <div className="w-full bg-background">
      <section className="py-24 bg-[#0D1421] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Media Center</h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Press releases, brand assets, and company news.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="text-3xl font-bold mb-10">Press Releases</h2>
              <div className="space-y-6">
                {[
                  { date: "Oct 15, 2026", title: "Gotecx Announces Global Availability of Next-Gen Enterprise POS" },
                  { date: "Sep 01, 2026", title: "iTech Network Africa and Gotecx Form Strategic Infrastructure Alliance" },
                  { date: "Jul 12, 2026", title: "Gotecx Achieves SOC2 Type II Certification for Entire Cloud Suite" }
                ].map((pr, i) => (
                  <div key={i} className="p-6 bg-card border border-border rounded-2xl cursor-pointer group hover:border-primary transition-colors">
                    <div className="text-sm text-primary font-bold mb-3 uppercase tracking-wider">{pr.date}</div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors leading-snug">{pr.title}</h3>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-10">Brand Assets</h2>
              <div className="space-y-6">
                <div className="p-8 bg-card border border-border rounded-2xl flex items-center justify-between group hover:border-primary transition-colors">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                      <FileText className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">Gotecx Brand Guidelines</div>
                      <div className="text-sm text-muted-foreground font-medium">PDF • 4.2 MB</div>
                    </div>
                  </div>
                  <Button variant="outline" size="icon" className="rounded-full w-12 h-12 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors"><Download className="w-5 h-5" /></Button>
                </div>
                
                <div className="p-8 bg-card border border-border rounded-2xl flex items-center justify-between group hover:border-primary transition-colors">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                      <FileImage className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">Logo Pack (SVG, PNG)</div>
                      <div className="text-sm text-muted-foreground font-medium">ZIP • 12.5 MB</div>
                    </div>
                  </div>
                  <Button variant="outline" size="icon" className="rounded-full w-12 h-12 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors"><Download className="w-5 h-5" /></Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center max-w-3xl mx-auto p-16 bg-[#1A2535] border border-border rounded-[2rem] text-white">
            <h2 className="text-3xl font-bold mb-4">Media Inquiries</h2>
            <p className="text-white/70 mb-8 text-lg">For press inquiries, interview requests, or speaker engagements, please contact our media relations team.</p>
            <div className="inline-block bg-background/20 px-8 py-4 rounded-xl font-bold text-2xl tracking-wider">press@gotecx.com</div>
          </div>
        </div>
      </section>
    </div>
  );
}
