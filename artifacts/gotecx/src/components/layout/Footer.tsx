import React from "react";
import { Link } from "wouter";
import gotecxLogo from "@assets/file_0000000069c471f4b1db489ae2ff9c8b_1781449096936.png";
import itechLogo from "@assets/file_000000007fdc72438ace4a48fe9c5139_1781449108190.png";
import { Facebook, Twitter, Linkedin, Instagram, ArrowRight, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0D1421] text-white pt-20 pb-10 border-t border-primary/30 relative">
      {/* Green gradient top border effect */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center mb-16 text-center">
          <div className="flex items-center gap-6 mb-6">
            <img src={gotecxLogo} alt="Gotecx" className="h-10 w-auto" />
            <div className="h-10 w-px bg-white/20"></div>
            <img src={itechLogo} alt="iTech Network Africa" className="h-12 w-auto" />
          </div>
          <p className="text-white/70 text-lg max-w-2xl font-medium tracking-wide">
            Building the Future Through Technology <span className="mx-2 text-primary">•</span> Founded in Monrovia, Liberia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-1">
            <h4 className="font-bold text-lg mb-6">About Us</h4>
            <p className="text-white/60 text-sm mb-6 leading-relaxed">
              Gotecx is the flagship global technology brand established by iTech Network Africa, delivering software platforms, business management solutions, and AI technologies to clients worldwide.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><Linkedin className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><Youtube className="w-4 h-4" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Products & Solutions</h4>
            <ul className="flex flex-col gap-3 text-sm text-white/60">
              <li><Link href="/products" className="hover:text-primary transition-colors">Gotecx POS</Link></li>
              <li><Link href="/solutions#enterprise" className="hover:text-primary transition-colors">Enterprise Solutions</Link></li>
              <li><Link href="/solutions#cloud" className="hover:text-primary transition-colors">Cloud Infrastructure</Link></li>
              <li><Link href="/solutions#ai" className="hover:text-primary transition-colors">AI & Automation</Link></li>
              <li><Link href="/solutions#cybersecurity" className="hover:text-primary transition-colors">Cybersecurity</Link></li>
              <li><Link href="/solutions#analytics" className="hover:text-primary transition-colors">Data Analytics</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="flex flex-col gap-3 text-sm text-white/60">
              <li><Link href="/services#software" className="hover:text-primary transition-colors">Software Development</Link></li>
              <li><Link href="/services#mobile" className="hover:text-primary transition-colors">Mobile App Development</Link></li>
              <li><Link href="/services#web" className="hover:text-primary transition-colors">Web Development</Link></li>
              <li><Link href="/services#consulting" className="hover:text-primary transition-colors">IT Consulting</Link></li>
              <li><Link href="/services#marketing" className="hover:text-primary transition-colors">Digital Marketing</Link></li>
              <li><Link href="/services#uiux" className="hover:text-primary transition-colors">UI/UX Design</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Industries</h4>
            <ul className="flex flex-col gap-3 text-sm text-white/60">
              <li><Link href="/industries#retail" className="hover:text-primary transition-colors">Retail & Commerce</Link></li>
              <li><Link href="/industries#healthcare" className="hover:text-primary transition-colors">Healthcare</Link></li>
              <li><Link href="/industries#education" className="hover:text-primary transition-colors">Education</Link></li>
              <li><Link href="/industries#government" className="hover:text-primary transition-colors">Government & Public Sector</Link></li>
              <li><Link href="/industries#finance" className="hover:text-primary transition-colors">Financial Services</Link></li>
              <li><Link href="/industries#ngo" className="hover:text-primary transition-colors">NGOs & Non-Profits</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Connect</h4>
            <ul className="flex flex-col gap-3 text-sm text-white/60 mb-6">
              <li className="flex items-center gap-2">Phone: +231 776 836 689</li>
              <li className="flex items-center gap-2">Email: itechnetworkafrica@gmail.com</li>
              <li><a href="https://wa.me/231776836689" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-white transition-colors">Chat on WhatsApp</a></li>
            </ul>
            <h4 className="font-bold text-sm mb-3">Newsletter</h4>
            <div className="relative">
              <input type="email" placeholder="Email address" className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-sm outline-none focus:border-primary transition-colors" />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-primary hover:text-white transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
          <div className="text-center md:text-right">
            &copy; 2026 Gotecx. All Rights Reserved. Powered by iTech Network Africa.
          </div>
        </div>
      </div>
    </footer>
  );
}
