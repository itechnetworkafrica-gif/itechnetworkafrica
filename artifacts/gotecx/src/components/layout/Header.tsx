import React, { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import {
  Menu, X, Search, Globe, Moon, Sun, ChevronDown, ChevronRight,
  CreditCard, Briefcase, LayoutGrid, Cpu, Cloud, Shield,
  BarChart3, Globe2, Users, Building2, Zap, BookOpen, HelpCircle,
  Headphones, Newspaper, LifeBuoy, Phone, Mail, ArrowRight
} from "lucide-react";
import { useTheme } from "next-themes";
import gotecxLogo from "@assets/file_0000000069c471f4b1db489ae2ff9c8b_1781449096936.png";
import itechLogo from "@assets/file_000000007fdc72438ace4a48fe9c5139_1781449108190.png";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const solutions = [
  { icon: Building2, label: "Enterprise Solutions", desc: "Scalable platforms for large organizations", href: "/solutions#enterprise" },
  { icon: Cloud, label: "Cloud Infrastructure", desc: "Secure and reliable hosting services", href: "/solutions#cloud" },
  { icon: Cpu, label: "AI & Automation", desc: "Intelligent workflows and analytics", href: "/solutions#ai" },
  { icon: Shield, label: "Cybersecurity", desc: "Advanced protection for digital assets", href: "/solutions#cybersecurity" },
  { icon: BarChart3, label: "Data Analytics", desc: "Turn data into business insights", href: "/solutions#analytics" },
  { icon: Zap, label: "Digital Transformation", desc: "Modernize your entire business", href: "/solutions#digital" },
];

const services = [
  { icon: LayoutGrid, label: "Software Development", desc: "Custom apps & platforms", href: "/services#software" },
  { icon: Globe2, label: "Web Development", desc: "Modern, fast websites", href: "/services#web" },
  { icon: Cpu, label: "Mobile Apps", desc: "iOS & Android solutions", href: "/services#mobile" },
  { icon: Briefcase, label: "IT Consulting", desc: "Expert technology guidance", href: "/services#consulting" },
  { icon: Shield, label: "Cybersecurity", desc: "Protect your business", href: "/services#cybersecurity" },
  { icon: Zap, label: "AI Integration", desc: "Automate with intelligence", href: "/services#ai" },
];

const company = [
  { icon: Users, label: "Leadership", desc: "Meet our executives", href: "/leadership" },
  { icon: Building2, label: "About Gotecx", desc: "Our story & mission", href: "/about" },
  { icon: Briefcase, label: "Careers", desc: "Join our team", href: "/careers" },
  { icon: Globe2, label: "Partners", desc: "Strategic alliances", href: "/partners" },
  { icon: Newspaper, label: "Media Center", desc: "Press & news", href: "/media-center" },
  { icon: BarChart3, label: "Investors", desc: "Investor relations", href: "/investors" },
];

const resources = [
  { icon: BookOpen, label: "Blog", desc: "Insights & articles", href: "/blog" },
  { icon: LayoutGrid, label: "Documentation", desc: "Technical guides", href: "/docs" },
  { icon: HelpCircle, label: "FAQs", desc: "Common questions", href: "/faqs" },
  { icon: Headphones, label: "Support Center", desc: "Get help fast", href: "/support" },
];

type MobileSection = "solutions" | "services" | "company" | "resources" | null;

function MobileNavItem({ icon: Icon, label, desc, href, onClick }: { icon: React.ElementType; label: string; desc: string; href: string; onClick: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/[0.07] hover:bg-white/10 hover:border-primary/30 active:scale-[0.98] transition-all"
    >
      <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-semibold text-white text-sm leading-tight">{label}</div>
        <div className="text-xs text-white/50 mt-0.5 leading-tight">{desc}</div>
      </div>
      <ChevronRight className="w-4 h-4 text-white/20 flex-shrink-0" />
    </Link>
  );
}

function MobileAccordion({ title, items, open, onToggle, onClose }: {
  title: string;
  items: typeof solutions;
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  return (
    <div>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-2 px-1"
      >
        <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{title}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-white/40 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div className="flex flex-col gap-2 pt-2 pb-1">
              {items.map((item) => (
                <MobileNavItem
                  key={item.href}
                  icon={item.icon}
                  label={item.label}
                  desc={item.desc}
                  href={item.href}
                  onClick={onClose}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function DesktopMegaMenu({ items }: { items: typeof solutions }) {
  return (
    <div className="grid grid-cols-2 gap-1.5">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted border border-transparent hover:border-border transition-all group"
        >
          <div className="mt-0.5 bg-primary/10 p-2 rounded-lg flex-shrink-0">
            <item.icon className="w-4 h-4 text-primary" />
          </div>
          <div>
            <div className="font-semibold text-sm text-foreground">{item.label}</div>
            <div className="text-xs text-muted-foreground mt-0.5 leading-snug">{item.desc}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileSection, setMobileSection] = useState<MobileSection>(null);
  const { theme, setTheme } = useTheme();
  const headerRef = useRef<HTMLElement>(null);

  const closeAll = () => {
    setActiveMenu(null);
    setIsMobileOpen(false);
    setMobileSection(null);
  };

  const toggleMobileSection = (section: MobileSection) => {
    setMobileSection(prev => prev === section ? null : section);
  };

  // Close desktop dropdowns when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  const desktopMenus = [
    {
      id: "solutions", label: "Solutions",
      content: <DesktopMegaMenu items={solutions} />,
      width: "w-[540px]",
    },
    {
      id: "products", label: "Products",
      content: (
        <div className="space-y-3 w-full">
          <Link href="/products" onClick={closeAll} className="flex items-start gap-3 p-3.5 rounded-xl bg-primary/10 border border-primary/20 hover:bg-primary/15 transition-colors">
            <div className="bg-primary/20 p-2 rounded-lg flex-shrink-0">
              <CreditCard className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="font-bold text-primary text-sm">Gotecx POS</div>
              <div className="text-xs text-muted-foreground mt-0.5">Flagship point-of-sale & business management platform</div>
            </div>
          </Link>
          <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest px-1">Future Roadmap</div>
          <div className="grid grid-cols-2 gap-1.5">
            {[{ icon: Cpu, name: "Gotecx AI" }, { icon: BarChart3, name: "Gotecx Analytics" }, { icon: Building2, name: "Gotecx ERP" }, { icon: Cloud, name: "Gotecx Cloud" }].map(p => (
              <div key={p.name} className="flex items-center gap-2.5 p-2.5 rounded-lg bg-muted/40 opacity-60 cursor-not-allowed">
                <p.icon className="w-4 h-4 text-muted-foreground" />
                <div>
                  <div className="text-xs font-medium text-muted-foreground">{p.name}</div>
                  <div className="text-[10px] text-muted-foreground">Coming Soon</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
      width: "w-[320px]",
    },
    {
      id: "services", label: "Services",
      content: <DesktopMegaMenu items={services} />,
      width: "w-[500px]",
    },
    {
      id: "company", label: "Company",
      content: <DesktopMegaMenu items={company} />,
      width: "w-[500px]",
    },
    {
      id: "resources", label: "Resources",
      content: <DesktopMegaMenu items={resources} />,
      width: "w-[400px]",
    },
  ];

  return (
    <>
      <header ref={headerRef} className="sticky top-0 z-40 w-full border-b border-white/10 bg-background/90 backdrop-blur-xl">
        <div className="container mx-auto px-4 lg:px-6 h-[72px] flex items-center justify-between gap-4">

          {/* Logo */}
          <Link href="/" onClick={closeAll} className="flex-shrink-0 flex flex-col items-start">
            <img src={gotecxLogo} alt="Gotecx" className="h-9 w-auto" style={{ maxWidth: 140 }} />
            <span className="text-[9px] text-muted-foreground uppercase tracking-[0.12em] font-semibold mt-0.5 whitespace-nowrap">
              Powered by iTech Network Africa
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-0.5 font-medium text-sm flex-1 justify-center">
            <Link href="/" onClick={closeAll} className="px-3 py-2 rounded-lg hover:bg-muted hover:text-primary transition-colors whitespace-nowrap">Home</Link>
            <Link href="/about" onClick={closeAll} className="px-3 py-2 rounded-lg hover:bg-muted hover:text-primary transition-colors whitespace-nowrap">About</Link>

            {desktopMenus.map((item) => (
              <div key={item.id} className="relative">
                <button
                  onClick={() => setActiveMenu(prev => prev === item.id ? null : item.id)}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${activeMenu === item.id ? "text-primary bg-muted" : "hover:bg-muted hover:text-primary"}`}
                >
                  {item.label}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === item.id ? "rotate-180 text-primary" : ""}`} />
                </button>
                <AnimatePresence>
                  {activeMenu === item.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.15 }}
                      className={`absolute top-[calc(100%+6px)] left-1/2 -translate-x-1/2 ${item.width} bg-card border border-border rounded-2xl shadow-2xl p-4 z-50`}
                      onClick={closeAll}
                    >
                      {item.content}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <Link href="/industries" onClick={closeAll} className="px-3 py-2 rounded-lg hover:bg-muted hover:text-primary transition-colors whitespace-nowrap">Industries</Link>
            <Link href="/contact" onClick={closeAll} className="px-3 py-2 rounded-lg hover:bg-muted hover:text-primary transition-colors whitespace-nowrap">Contact</Link>
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden xl:flex items-center gap-2 flex-shrink-0">
            <button className="w-9 h-9 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
              <Search className="w-4 h-4" />
            </button>
            <button className="w-9 h-9 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
              <Globe className="w-4 h-4" />
            </button>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-9 h-9 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <Link href="/contact" onClick={closeAll}>
              <Button className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full px-5 h-9 text-sm">
                Access Client Portal
              </Button>
            </Link>
          </div>

          {/* Mobile Right */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-9 h-9 flex items-center justify-center rounded-lg text-muted-foreground hover:bg-muted transition-colors"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setIsMobileOpen(true)}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-muted hover:bg-muted/80 text-foreground transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Drawer ── rendered outside <header> to avoid stacking context issues */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeAll}
              className="fixed inset-0 bg-black/70 z-50"
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 260 }}
              className="fixed top-0 right-0 h-full w-[88vw] max-w-[360px] z-50 flex flex-col"
              style={{ backgroundColor: "#0A0F1E" }}
            >
              {/* Drawer header */}
              <div
                className="flex items-center justify-between px-5 py-4 border-b border-white/10 flex-shrink-0"
                style={{ backgroundColor: "#0D1421" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-1.5 flex-shrink-0 overflow-hidden">
                    <img src={itechLogo} alt="iTech" className="w-full h-auto object-contain" />
                  </div>
                  <div>
                    <div className="font-bold text-sm leading-tight">
                      <span className="text-white">iTech</span>
                      <span className="text-primary">Network</span>
                    </div>
                    <div className="text-[10px] text-white/50 leading-tight">Powered by Gotecx</div>
                  </div>
                </div>
                <button
                  onClick={closeAll}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white/60 hover:text-white transition-colors"
                  style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Scrollable content */}
              <div className="flex-1 overflow-y-auto" style={{ overscrollBehavior: "contain" }}>
                <div className="p-4 space-y-5">

                  {/* Quick links */}
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { label: "Home", href: "/" },
                      { label: "About", href: "/about" },
                      { label: "Contact", href: "/contact" },
                    ].map(({ label, href }) => (
                      <Link
                        key={href}
                        href={href}
                        onClick={closeAll}
                        className="text-center py-2.5 px-2 rounded-xl text-white/80 text-sm font-medium border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-colors"
                        style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
                      >
                        {label}
                      </Link>
                    ))}
                  </div>

                  {/* Products */}
                  <div>
                    <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-3 px-1">Products</div>
                    <Link
                      href="/products"
                      onClick={closeAll}
                      className="flex items-center gap-4 p-4 rounded-2xl border border-white/[0.07] hover:border-primary/30 hover:bg-white/5 active:scale-[0.98] transition-all"
                      style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
                    >
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(109,190,69,0.2)" }}>
                        <CreditCard className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-white">Gotecx POS</div>
                        <div className="text-xs text-white/50 mt-0.5">Next-gen point of sale system</div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-white/20 flex-shrink-0" />
                    </Link>
                  </div>

                  {/* Solutions accordion */}
                  <div style={{ backgroundColor: "rgba(255,255,255,0.02)", borderRadius: 16, padding: "12px 12px" }}>
                    <MobileAccordion
                      title="Solutions"
                      items={solutions}
                      open={mobileSection === "solutions"}
                      onToggle={() => toggleMobileSection("solutions")}
                      onClose={closeAll}
                    />
                  </div>

                  {/* Services accordion */}
                  <div style={{ backgroundColor: "rgba(255,255,255,0.02)", borderRadius: 16, padding: "12px 12px" }}>
                    <MobileAccordion
                      title="Services"
                      items={services}
                      open={mobileSection === "services"}
                      onToggle={() => toggleMobileSection("services")}
                      onClose={closeAll}
                    />
                  </div>

                  {/* Company accordion */}
                  <div style={{ backgroundColor: "rgba(255,255,255,0.02)", borderRadius: 16, padding: "12px 12px" }}>
                    <MobileAccordion
                      title="Company"
                      items={company}
                      open={mobileSection === "company"}
                      onToggle={() => toggleMobileSection("company")}
                      onClose={closeAll}
                    />
                  </div>

                  {/* Resources accordion */}
                  <div style={{ backgroundColor: "rgba(255,255,255,0.02)", borderRadius: 16, padding: "12px 12px" }}>
                    <MobileAccordion
                      title="Resources"
                      items={resources}
                      open={mobileSection === "resources"}
                      onToggle={() => toggleMobileSection("resources")}
                      onClose={closeAll}
                    />
                  </div>

                  {/* Contact card */}
                  <div className="rounded-2xl p-4 border border-white/10 space-y-3" style={{ backgroundColor: "rgba(255,255,255,0.03)" }}>
                    <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Get in Touch</div>
                    <a href="tel:+2317768366689" className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors text-sm">
                      <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                      +231 776 836 689
                    </a>
                    <a href="mailto:itechnetworkafrica@gmail.com" className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors text-sm">
                      <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                      itechnetworkafrica@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Drawer footer */}
              <div
                className="p-4 border-t border-white/10 flex-shrink-0 space-y-2"
                style={{ backgroundColor: "#0D1421" }}
              >
                <Link href="/contact" onClick={closeAll} className="block text-center text-sm text-white/50 hover:text-primary transition-colors py-1">
                  Contact Support
                </Link>
                <Link href="/contact" onClick={closeAll}>
                  <button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full py-3.5 text-base font-bold transition-colors flex items-center justify-center gap-2">
                    Access Client Portal <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
