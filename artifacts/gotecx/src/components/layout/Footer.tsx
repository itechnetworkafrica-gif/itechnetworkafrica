import React from "react";
import { Link } from "wouter";
import gotecxLogo from "@assets/file_0000000069c471f4b1db489ae2ff9c8b_1781449096936.png";
import itechLogo from "@assets/file_000000007fdc72438ace4a48fe9c5139_1781449108190.png";
import { Facebook, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0D1421] text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-1">
            <img src={gotecxLogo} alt="Gotecx" className="h-12 w-auto mb-6 brightness-0 invert" />
            <p className="text-white/60 text-sm mb-6 leading-relaxed">
              Empowering organizations around the world to automate, innovate, transform, and scale through intelligent technology solutions.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><Linkedin className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><Instagram className="w-4 h-4" /></a>
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
              <li><Link href="/industries#government" className="hover:text-primary transition-colors">Government</Link></li>
              <li><Link href="/industries#finance" className="hover:text-primary transition-colors">Financial Services</Link></li>
              <li><Link href="/industries#telecom" className="hover:text-primary transition-colors">Telecommunications</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Resources & Legal</h4>
            <ul className="flex flex-col gap-3 text-sm text-white/60 mb-6">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
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

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img src={itechLogo} alt="iTech Network Africa" className="h-10 w-auto" />
            <div className="h-8 w-px bg-white/20"></div>
            <div className="text-sm text-white/60">
              <p>+231 776 836 689</p>
              <p>itechnetworkafrica@gmail.com</p>
            </div>
          </div>
          <div className="text-sm text-white/40 text-center md:text-right">
            &copy; {new Date().getFullYear()} Gotecx. All Rights Reserved.<br />
            Powered by iTech Network Africa.
          </div>
        </div>
      </div>
    </footer>
  );
}