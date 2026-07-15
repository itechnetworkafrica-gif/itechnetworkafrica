import React, { useState } from "react";
import { Link } from "wouter";
import gotecxLogo from "@assets/file_0000000069c471f4b1db489ae2ff9c8b_1781449096936.png";
import itechLogo from "@assets/file_000000007fdc72438ace4a48fe9c5139_1781449108190.png";
import { Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const socials = [
  { label: "FACEBOOK",  Icon: Facebook,  href: "#" },
  { label: "INSTAGRAM", Icon: Instagram, href: "#" },
  { label: "X",         Icon: Twitter,   href: "#" },
  { label: "LINKEDIN",  Icon: Linkedin,  href: "#" },
  { label: "YOUTUBE",   Icon: Youtube,   href: "#" },
];

const footerLinks = [
  {
    title: "Products & Solutions",
    links: [
      { label: "Gotecx POS",             href: "/products" },
      { label: "Enterprise Solutions",   href: "/solutions#enterprise" },
      { label: "Cloud Infrastructure",   href: "/solutions#cloud" },
      { label: "AI & Automation",        href: "/solutions#ai" },
      { label: "Cybersecurity",          href: "/solutions#cybersecurity" },
      { label: "Data Analytics",         href: "/solutions#analytics" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Software Development", href: "/services#software" },
      { label: "Mobile App Dev",        href: "/services#mobile" },
      { label: "Web Development",       href: "/services#web" },
      { label: "IT Consulting",         href: "/services#consulting" },
      { label: "Digital Marketing",     href: "/services#marketing" },
      { label: "UI/UX Design",          href: "/services#uiux" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Retail & Commerce",    href: "/industries#retail" },
      { label: "Healthcare",           href: "/industries#healthcare" },
      { label: "Education",            href: "/industries#education" },
      { label: "Government",           href: "/industries#government" },
      { label: "Financial Services",   href: "/industries#finance" },
      { label: "NGOs & Non-Profits",   href: "/industries#ngo" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us",       href: "/about" },
      { label: "Leadership",     href: "/leadership" },
      { label: "Careers",        href: "/careers" },
      { label: "Partners",       href: "/partners" },
      { label: "Success Stories",href: "/success-stories" },
      { label: "Media Center",   href: "/media-center" },
    ],
  },
];

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-[#0A0F1E] text-white relative overflow-hidden">
      {/* Top green line */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-70" />

      {/* CTA Band */}
      <div className="border-b border-white/10 py-14">
        <div className="container mx-auto px-4 max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Ready to Transform Your Business?</h3>
            <p className="text-white/60 max-w-lg">Join hundreds of organizations powered by Gotecx and iTech Network Africa.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link href="/contact">
              <button className="bg-primary hover:bg-primary/90 text-white rounded-full px-7 py-3 font-semibold transition-colors whitespace-nowrap">
                Get in Touch
              </button>
            </Link>
            <Link href="/products">
              <button className="border border-white/20 hover:border-primary hover:text-primary text-white rounded-full px-7 py-3 font-semibold transition-colors whitespace-nowrap">
                Explore Products
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 mb-14">

          {/* Brand col */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <img src={gotecxLogo} alt="Gotecx" className="h-10 w-auto" />
              <div className="h-10 w-px bg-white/20" />
              <img src={itechLogo} alt="iTech Network Africa" className="h-11 w-auto" />
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Gotecx is the flagship global technology brand established by iTech Network Africa. Delivering software platforms, AI solutions, and digital transformation to organizations worldwide.
            </p>
            <div className="space-y-3 text-sm text-white/60 mb-7">
              <a href="tel:+2317768366689" className="flex items-center gap-2.5 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" /> +231 776 836 689
              </a>
              <a href="mailto:itechnetworkafrica@gmail.com" className="flex items-center gap-2.5 hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" /> itechnetworkafrica@gmail.com
              </a>
              <span className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" /> Monrovia, Liberia
              </span>
            </div>

            {/* Newsletter */}
            <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3">Newsletter</p>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-5 pr-12 text-sm outline-none focus:border-primary transition-colors placeholder-white/30"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors">
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </button>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="font-bold text-sm mb-5 text-white">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map(link => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-white/50 hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom divider */}
        <div className="border-t border-white/10 pt-8">
          {/* Social links — prominent with text labels */}
          <div className="flex flex-wrap items-center gap-6 mb-6">
            {socials.map(({ label, Icon, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/40 hover:text-primary transition-colors group"
              >
                <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-[11px] font-bold tracking-widest uppercase">{label}</span>
              </a>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-white/30">
            <div className="flex flex-wrap gap-4">
              <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
              <Link href="/faqs" className="hover:text-primary transition-colors">FAQs</Link>
              <Link href="/support" className="hover:text-primary transition-colors">Support</Link>
            </div>
            <div>
              &copy; 2026 Gotecx · iTech Network Africa (PTY) · All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
