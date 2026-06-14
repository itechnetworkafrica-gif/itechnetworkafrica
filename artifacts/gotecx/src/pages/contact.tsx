import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="w-full bg-background">
      <section className="py-24 bg-[#0D1421] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Our global team is ready to assist you with sales, support, and partnership inquiries.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1 space-y-10">
              <div>
                <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-lg mb-1">Phone</div>
                      <div className="text-muted-foreground text-lg">+231 776 836 689</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-lg mb-1">Email</div>
                      <div className="text-muted-foreground text-lg">itechnetworkafrica@gmail.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-6 h-6 text-[#25D366]" />
                    </div>
                    <div>
                      <div className="font-bold text-lg mb-1">WhatsApp</div>
                      <a href="https://wa.me/231776836689" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-[#25D366] transition-colors text-lg">Message us on WhatsApp</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-card border border-border rounded-[2rem] p-10 md:p-14 shadow-xl">
                <h3 className="text-3xl font-bold mb-10">Send a Message</h3>
                <form className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-foreground uppercase tracking-wider">First Name</label>
                      <input type="text" className="w-full bg-background border border-border rounded-xl px-5 py-4 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-lg" placeholder="John" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-foreground uppercase tracking-wider">Last Name</label>
                      <input type="text" className="w-full bg-background border border-border rounded-xl px-5 py-4 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-lg" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-foreground uppercase tracking-wider">Email Address</label>
                    <input type="email" className="w-full bg-background border border-border rounded-xl px-5 py-4 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-lg" placeholder="john@company.com" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-foreground uppercase tracking-wider">Inquiry Type</label>
                    <select className="w-full bg-background border border-border rounded-xl px-5 py-4 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-lg appearance-none">
                      <option>Sales Inquiry</option>
                      <option>Technical Support</option>
                      <option>Partnership Request</option>
                      <option>Careers</option>
                      <option>General Information</option>
                    </select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-foreground uppercase tracking-wider">Message</label>
                    <textarea rows={6} className="w-full bg-background border border-border rounded-xl px-5 py-4 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none text-lg" placeholder="How can we help you?"></textarea>
                  </div>
                  <Button size="lg" className="w-full rounded-xl bg-primary hover:bg-primary/90 font-bold h-16 text-lg">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
