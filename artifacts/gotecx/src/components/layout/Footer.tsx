import React, { useState } from "react";
import { Link } from "wouter";
import gotecxLogo from "@assets/file_0000000069c471f4b1db489ae2ff9c8b_1781449096936.png";
import itechLogo from "@assets/file_000000007fdc72438ace4a48fe9c5139_1781449108190.png";
import {
  Facebook, Twitter, Linkedin, Instagram, Youtube,
  ArrowRight, Phone, Mail, MapPin, ChevronDown
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const socials = [
  { label: "FACEBOOK",  Icon: Facebook,  href: "#" },
  { label: "INSTAGRAM", Icon: Instagram, href: "#" },
  { label: "X",         Icon: Twitter,   href: "#" },
  { label: "LINKEDIN",  Icon: Linkedin,  href: "#" },
  { label: "YOUTUBE",   Icon: Youtube,   href: "#" },
];

const sections = [
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
      { label: "Software Development",   href: "/services#software" },
      { label: "Mobile App Dev",         href: "/services#mobile" },
      { label: "Web Development",        href: "/services#web" },
      { label: "IT Consulting",          href: "/services#consulting" },
      { label: "Digital Marketing",      href: "/services#marketing" },
      { label: "UI/UX Design",           href: "/services#uiux" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Retail & Commerce",      href: "/industries#retail" },
      { label: "Healthcare",             href: "/industries#healthcare" },
      { label: "Education",              href: "/industries#education" },
      { label: "Government",             href: "/industries#government" },
      { label: "Financial Services",     href: "/industries#finance" },
      { label: "NGOs & Non-Profits",     href: "/industries#ngo" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us",               href: "/about" },
      { label: "Leadership",             href: "/leadership" },
      { label: "Careers",                href: "/careers" },
      { label: "Partners",               href: "/partners" },
      { label: "Success Stories",        href: "/success-stories" },
      { label: "Media Center",           href: "/media-center" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog",                   href: "/blog" },
      { label: "Documentation",          href: "/docs" },
      { label: "FAQs",                   href: "/faqs" },
      { label: "Support Center",         href: "/support" },
      { label: "Events",                 href: "/events" },
      { label: "Investors",              href: "/investors" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy",         href: "/privacy" },
      { label: "Terms of Service",       href: "/terms" },
      { label: "Cookie Policy",          href: "/privacy#cookies" },
      { label: "Compliance",             href: "/about#compliance" },
    ],
  },
];

function AccordionSection({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/10 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-5 py-4 text-left"
        style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
      >
        <span className="font-bold text-white text-[15px]">{title}</span>
        <ChevronDown className={`w-5 h-5 text-white/50 transition-transform duration-250 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div className="px-5 pb-5 pt-2 space-y-3" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
              {links.map(l => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block text-sm text-white/55 hover:text-primary transition-colors py-0.5"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer style={{ backgroundColor: "#070C14" }} className="text-white relative overflow-hidden">
      {/* Green gradient top line */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />

      {/* ── CTA band ─────────────────────────────── */}
      <div className="border-b border-white/[0.08] py-12">
        <div className="container mx-auto px-4 max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-7">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-1.5">Ready to Transform Your Business?</h3>
            <p className="text-white/50 max-w-lg text-sm">Join hundreds of organizations powered by Gotecx and iTech Network Africa.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link href="/contact">
              <button className="bg-primary hover:bg-primary/90 text-white rounded-full px-7 py-3 font-semibold transition-colors whitespace-nowrap text-sm">
                Get in Touch
              </button>
            </Link>
            <Link href="/products">
              <button className="border border-white/15 hover:border-primary/60 hover:text-primary text-white/80 rounded-full px-7 py-3 font-semibold transition-colors whitespace-nowrap text-sm">
                Explore Products
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* ── MOBILE: accordion sections ───────────── */}
      <div className="lg:hidden">
        {/* Brand header */}
        <div className="px-4 pt-10 pb-6 border-b border-white/[0.07]">
          <div className="flex items-center gap-4 mb-5">
            <img src={gotecxLogo} alt="Gotecx" className="h-9 w-auto" />
            <div className="h-9 w-px bg-white/15" />
            <img src={itechLogo} alt="iTech Network Africa" className="h-10 w-auto" />
          </div>
          <p className="text-white/45 text-xs leading-relaxed">
            Building the Future Through Technology · Founded in Monrovia, Liberia
          </p>
          <div className="mt-4 space-y-2 text-xs text-white/45">
            <a href="tel:+2317768366689" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-3.5 h-3.5 text-primary" /> +231 776 836 689
            </a>
            <a href="mailto:itechnetworkafrica@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-3.5 h-3.5 text-primary" /> itechnetworkafrica@gmail.com
            </a>
          </div>
        </div>

        {/* Accordion items */}
        <div className="px-4 py-6 space-y-3">
          {sections.map(s => <AccordionSection key={s.title} title={s.title} links={s.links} />)}
        </div>

        {/* Newsletter */}
        <div className="px-4 pb-6 border-b border-white/[0.07]">
          <p className="text-[10px] font-bold uppercase tracking-widest text-white/35 mb-2">Newsletter</p>
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full rounded-full py-3 pl-5 pr-12 text-sm outline-none transition-colors placeholder-white/25 text-white"
              style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
              onFocus={e => (e.currentTarget.style.borderColor = "rgba(109,190,69,0.6)")}
              onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors">
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* Mobile social + copyright */}
        <div className="px-4 py-7">
          <div className="flex flex-wrap gap-5 mb-5">
            {socials.map(({ label, Icon, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-primary hover:text-white transition-colors group">
                <Icon className="w-4 h-4" />
                <span className="text-[11px] font-bold tracking-widest">{label}</span>
              </a>
            ))}
          </div>
          <p className="text-[11px] text-white/25 uppercase tracking-wide leading-relaxed">
            GOTECX · ITECH NETWORK AFRICA (PTY)<br />ALL RIGHTS RESERVED. &copy; 2026
          </p>
        </div>
      </div>

      {/* ── DESKTOP: multi-column grid ───────────── */}
      <div className="hidden lg:block">
        <div className="container mx-auto px-4 max-w-7xl py-16">
          <div className="grid grid-cols-7 gap-10 mb-14">
            {/* Brand col — spans 2 */}
            <div className="col-span-2">
              <div className="flex items-center gap-4 mb-5">
                <img src={gotecxLogo} alt="Gotecx" className="h-9 w-auto" />
                <div className="h-9 w-px bg-white/15" />
                <img src={itechLogo} alt="iTech Network Africa" className="h-10 w-auto" />
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-5">
                Gotecx is the flagship global technology brand of iTech Network Africa — delivering world-class software, AI, and digital transformation to organizations worldwide.
              </p>
              <div className="space-y-2.5 text-sm text-white/50 mb-6">
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
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/35 mb-2.5">Newsletter</p>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full rounded-full py-2.5 pl-4 pr-10 text-xs outline-none transition-colors placeholder-white/25 text-white"
                  style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                />
                <button className="absolute right-1.5 top-1/2 -translate-y-1/2 w-7 h-7 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </button>
              </div>
            </div>

            {/* Link columns */}
            {sections.map(sec => (
              <div key={sec.title}>
                <h4 className="font-bold text-xs uppercase tracking-widest text-white/40 mb-5">{sec.title}</h4>
                <ul className="space-y-3">
                  {sec.links.map(l => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-sm text-white/55 hover:text-primary transition-colors leading-snug">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/[0.08] pt-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            {/* Social links with text labels */}
            <div className="flex flex-wrap items-center gap-6">
              {socials.map(({ label, Icon, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-white/35 hover:text-primary transition-colors group">
                  <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-bold tracking-[0.15em] uppercase">{label}</span>
                </a>
              ))}
            </div>
            <p className="text-[11px] text-white/25 uppercase tracking-wide">
              &copy; 2026 GOTECX · ITECH NETWORK AFRICA (PTY) · ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
