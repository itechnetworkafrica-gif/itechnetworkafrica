import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="w-full">
      <section className="py-24 bg-[#1A2035] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Our global team is ready to assist you with sales, support, and partnership inquiries.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold mb-1">Phone</div>
                    <div className="text-muted-foreground">+231 776 836 689</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold mb-1">Email</div>
                    <div className="text-muted-foreground">itechnetworkafrica@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold mb-1">WhatsApp</div>
                    <a href="https://wa.me/231776836689" target="_blank" rel="noreferrer" className="text-primary hover:underline">Message us on WhatsApp</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm">
                <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold">First Name</label>
                      <input type="text" className="w-full bg-background border border-border rounded-lg px-4 py-3 outline-none focus:border-primary transition-colors" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold">Last Name</label>
                      <input type="text" className="w-full bg-background border border-border rounded-lg px-4 py-3 outline-none focus:border-primary transition-colors" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Email Address</label>
                    <input type="email" className="w-full bg-background border border-border rounded-lg px-4 py-3 outline-none focus:border-primary transition-colors" placeholder="john@company.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Inquiry Type</label>
                    <select className="w-full bg-background border border-border rounded-lg px-4 py-3 outline-none focus:border-primary transition-colors">
                      <option>Sales Inquiry</option>
                      <option>Technical Support</option>
                      <option>Partnership Request</option>
                      <option>Careers</option>
                      <option>General Information</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Message</label>
                    <textarea rows={5} className="w-full bg-background border border-border rounded-lg px-4 py-3 outline-none focus:border-primary transition-colors resize-none" placeholder="How can we help you?"></textarea>
                  </div>
                  <Button size="lg" className="w-full rounded-lg bg-primary hover:bg-primary/90">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}