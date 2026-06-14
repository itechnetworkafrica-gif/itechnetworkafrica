import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Leadership() {
  return (
    <div className="w-full bg-background">
      <section className="py-24 bg-[#0D1421] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Leadership</h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Guided by vision, driven by innovation, and committed to global impact.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm flex flex-col md:flex-row">
            <div className="md:w-2/5 bg-muted min-h-[400px] relative border-b md:border-b-0 md:border-r border-border flex items-center justify-center text-muted-foreground">
              {/* Image placeholder */}
              Portrait Image
            </div>
            <div className="md:w-3/5 p-10 lg:p-16 flex flex-col justify-center">
              <h2 className="text-4xl font-bold mb-2">Kerkulah Kerkulah</h2>
              <div className="text-xl text-primary font-bold mb-8">Founder & Executive Director</div>
              
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed mb-8">
                <p>
                  Driven by a passion for technology, innovation, entrepreneurship, and digital transformation, he established iTech Network Africa and Gotecx with the goal of creating technology solutions that empower businesses, create opportunities, and contribute to economic growth.
                </p>
                <p>
                  His leadership continues to guide the organization's mission of building innovative technology solutions that deliver meaningful impact locally and globally.
                </p>
              </div>

              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:itechnetworkafrica@gmail.com" className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-24 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-10">Leadership Philosophy</h2>
            <div className="p-12 rounded-3xl bg-card border border-border relative">
              <div className="text-8xl text-primary/10 font-serif absolute -top-4 left-6">"</div>
              <p className="text-2xl font-medium italic text-foreground relative z-10 leading-relaxed">
                Building technology is not just about writing code; it's about understanding human and business needs. We are committed to building solutions that are not just functional, but transformational—bridging the gap between local talent and global enterprise demands.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Advisory Board</h2>
          <div className="inline-block px-6 py-3 border border-border rounded-full bg-background text-muted-foreground font-medium uppercase tracking-wider text-sm">
            Coming Soon
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Build the Future With Us</h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            We are always looking for passionate innovators to join our growing global team.
          </p>
          <Link href="/careers">
            <button className="bg-background text-foreground hover:bg-muted font-bold px-8 py-4 rounded-full flex items-center gap-2 mx-auto transition-colors shadow-lg">
              Join Our Team <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
