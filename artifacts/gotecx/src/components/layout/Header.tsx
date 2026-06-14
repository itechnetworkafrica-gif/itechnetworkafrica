import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import {
  Menu, X, Search, Globe, Moon, Sun, ChevronDown, ChevronRight,
  CreditCard, Briefcase, LayoutGrid, Cpu, Cloud, Shield,
  BarChart3, Globe2, Users, Building2, Zap, BookOpen, HelpCircle,
  Headphones, Newspaper, LifeBuoy, Phone, Mail
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

export function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();

  const toggleMenu = (menu: string) => {
    setActiveMenu(prev => prev === menu ? null : menu);
  };

  const closeAll = () => {
    setActiveMenu(null);
    setIsMobileOpen(false);
    setMobileSection(null);
  };

  // Close desktop menus when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-nav-item]")) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  const MegaMenu = ({ items }: { items: typeof solutions }) => (
    <div className="grid grid-cols-2 gap-2">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={closeAll}
          className="flex items-start gap-3 p-3 rounded-xl hover:bg-primary/5 border border-transparent hover:border-primary/20 transition-all group"
        >
          <div className="mt-0.5 bg-[#0D1421] p-2 rounded-lg flex-shrink-0 group-hover:bg-primary/10 transition-colors">
            <item.icon className="w-4 h-4 text-primary" />
          </div>
          <div>
            <div className="font-semibold text-sm text-foreground">{item.label}</div>
            <div className="text-xs text-muted-foreground mt-0.5">{item.desc}</div>
          </div>
        </Link>
      ))}
    </div>
  );

  const navItems = [
    {
      id: "solutions", label: "Solutions",
      content: <MegaMenu items={solutions} />,
      width: "w-[560px]",
    },
    {
      id: "products", label: "Products",
      content: (
        <div className="space-y-3">
          <Link href="/products" onClick={closeAll} className="flex items-start gap-4 p-4 rounded-xl bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-colors">
            <div className="bg-[#0D1421] p-2.5 rounded-xl flex-shrink-0">
              <CreditCard className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="font-bold text-primary">Gotecx POS</div>
              <div className="text-xs text-muted-foreground mt-1">Flagship point-of-sale & business management platform</div>
            </div>
          </Link>
          <div className="pt-1">
            <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3">Future Roadmap</div>
            <div className="grid grid-cols-2 gap-2">
              {[
                { icon: Cpu, name: "Gotecx AI" },
                { icon: BarChart3, name: "Gotecx Analytics" },
                { icon: Building2, name: "Gotecx ERP" },
                { icon: Cloud, name: "Gotecx Cloud" },
              ].map((p) => (
                <div key={p.name} className="flex items-center gap-2.5 p-2.5 rounded-lg bg-muted/40 opacity-60 cursor-not-allowed">
                  <p.icon className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">{p.name}</div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wide">Coming Soon</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
      width: "w-[360px]",
    },
    {
      id: "services", label: "Services",
      content: <MegaMenu items={services} />,
      width: "w-[520px]",
    },
    {
      id: "company", label: "Company",
      content: <MegaMenu items={company} />,
      width: "w-[520px]",
    },
    {
      id: "resources", label: "Resources",
      content: <MegaMenu items={resources} />,
      width: "w-[420px]",
    },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-background/90 backdrop-blur-xl">
        <div className="container mx-auto px-4 lg:px-6 h-[72px] flex items-center justify-between gap-4">

          {/* Logo */}
          <Link href="/" onClick={closeAll} className="flex-shrink-0 flex flex-col items-start">
            <img
              src={gotecxLogo}
              alt="Gotecx"
              className="h-9 w-auto"
              style={{ maxWidth: "140px" }}
            />
            <span className="text-[9px] text-muted-foreground uppercase tracking-[0.15em] font-semibold leading-tight mt-0.5 whitespace-nowrap">
              Powered by iTech Network Africa
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-1 font-medium text-sm flex-1 justify-center">
            <Link href="/" onClick={closeAll} className="px-3 py-2 rounded-lg hover:bg-muted hover:text-primary transition-colors">Home</Link>
            <Link href="/about" onClick={closeAll} className="px-3 py-2 rounded-lg hover:bg-muted hover:text-primary transition-colors">About</Link>

            {navItems.map((item) => (
              <div key={item.id} className="relative" data-nav-item>
                <button
                  onClick={() => toggleMenu(item.id)}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-muted transition-colors ${activeMenu === item.id ? "text-primary bg-muted" : "hover:text-primary"}`}
                >
                  {item.label}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === item.id ? "rotate-180 text-primary" : ""}`} />
                </button>
                <AnimatePresence>
                  {activeMenu === item.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className={`absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 ${item.width} bg-card border border-border rounded-2xl shadow-2xl p-4 z-50`}
                    >
                      {item.content}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <Link href="/industries" onClick={closeAll} className="px-3 py-2 rounded-lg hover:bg-muted hover:text-primary transition-colors">Industries</Link>
            <Link href="/contact" onClick={closeAll} className="px-3 py-2 rounded-lg hover:bg-muted hover:text-primary transition-colors">Contact</Link>
          </nav>

          {/* Right Actions */}
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

          {/* Mobile Hamburger */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-9 h-9 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
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

      {/* Mobile Nav — rendered OUTSIDE header to avoid stacking context issues */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeAll}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="fixed top-0 right-0 h-full w-[88vw] max-w-[360px] bg-[#0A0F1E] z-50 flex flex-col shadow-2xl"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-[#0D1421] flex-shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center p-1 flex-shrink-0 overflow-hidden">
                    <img src={itechLogo} alt="iTech" className="w-full h-auto object-contain" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm leading-tight">
                      <span className="text-white">iTech</span>
                      <span className="text-primary">Network</span>
                    </div>
                    <div className="text-[10px] text-white/50 leading-tight">Powered by Gotecx</div>
                  </div>
                </div>
                <button
                  onClick={closeAll}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Drawer Content — scrollable */}
              <div className="flex-1 overflow-y-auto">
                <div className="p-4 space-y-6">

                  {/* Quick Links */}
                  <div className="flex gap-2">
                    <Link href="/" onClick={closeAll} className="flex-1 text-center py-2.5 px-3 rounded-xl bg-white/5 border border-white/10 text-white/80 text-sm font-medium hover:bg-white/10 transition-colors">Home</Link>
                    <Link href="/about" onClick={closeAll} className="flex-1 text-center py-2.5 px-3 rounded-xl bg-white/5 border border-white/10 text-white/80 text-sm font-medium hover:bg-white/10 transition-colors">About</Link>
                    <Link href="/contact" onClick={closeAll} className="flex-1 text-center py-2.5 px-3 rounded-xl bg-white/5 border border-white/10 text-white/80 text-sm font-medium hover:bg-white/10 transition-colors">Contact</Link>
                  </div>

                  {/* Products */}
                  <div>
                    <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-3 px-1">Products</div>
                    <Link href="/products" onClick={closeAll} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all">
                      <div className="w-11 h-11 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <CreditCard className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm">Gotecx POS</div>
                        <div className="text-xs text-white/50 mt-0.5">Next-gen point of sale system</div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-white/30 ml-auto" />
                    </Link>
                  </div>

                  {/* Solutions */}
                  <div>
                    <button
                      onClick={() => setMobileSection(prev => prev === "solutions" ? null : "solutions")}
                      className="w-full flex items-center justify-between text-[10px] font-bold text-white/40 uppercase tracking-widest mb-3 px-1 hover:text-white/60 transition-colors"
                    >
                      <span>Solutions</span>
                      <ChevronDown className={`w-3 h-3 transition-transform ${mobileSection === "solutions" ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {mobileSection === "solutions" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="space-y-2">
                            {solutions.map((item) => (
                              <Link key={item.href} href={item.href} onClick={closeAll} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-primary/20 transition-all">
                                <div className="w-9 h-9 bg-primary/15 rounded-lg flex items-center justify-center flex-shrink-0">
                                  <item.icon className="w-4 h-4 text-primary" />
                                </div>
                                <div>
                                  <div className="font-semibold text-white text-sm">{item.label}</div>
                                  <div className="text-[11px] text-white/50">{item.desc}</div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    {mobileSection !== "solutions" && (
                      <div className="grid grid-cols-2 gap-2">
                        {solutions.slice(0, 4).map((item) => (
                          <Link key={item.href} href={item.href} onClick={closeAll} className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all">
                            <div className="w-7 h-7 bg-primary/15 rounded-lg flex items-center justify-center flex-shrink-0">
                              <item.icon className="w-3.5 h-3.5 text-primary" />
                            </div>
                            <span className="text-xs font-semibold text-white/80 leading-tight">{item.label}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Company */}
                  <div>
                    <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-3 px-1">Company</div>
                    <div className="space-y-2">
                      {[
                        { icon: Briefcase, label: "Services", desc: "What we can do for you", href: "/services" },
                        { icon: Globe2, label: "Industries", desc: "Sectors we serve", href: "/industries" },
                        { icon: Users, label: "Leadership", desc: "Meet our executives", href: "/leadership" },
                        { icon: Briefcase, label: "Careers", desc: "Join our team", href: "/careers" },
                      ].map((item) => (
                        <Link key={item.href} href={item.href} onClick={closeAll} className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-primary/20 transition-all">
                          <div className="w-10 h-10 bg-[#1A2535] rounded-xl flex items-center justify-center flex-shrink-0">
                            <item.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <div className="font-bold text-white text-sm">{item.label}</div>
                            <div className="text-xs text-white/50">{item.desc}</div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-white/20 ml-auto" />
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Resources */}
                  <div>
                    <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-3 px-1">Resources & Support</div>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { icon: BookOpen, label: "Blog", href: "/blog" },
                        { icon: HelpCircle, label: "FAQs", href: "/faqs" },
                        { icon: LifeBuoy, label: "Support", href: "/support" },
                        { icon: LayoutGrid, label: "Docs", href: "/docs" },
                      ].map((item) => (
                        <Link key={item.href} href={item.href} onClick={closeAll} className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all">
                          <div className="w-7 h-7 bg-primary/15 rounded-lg flex items-center justify-center flex-shrink-0">
                            <item.icon className="w-3.5 h-3.5 text-primary" />
                          </div>
                          <span className="text-xs font-semibold text-white/80">{item.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Contact info */}
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-2">
                    <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-3">Get in Touch</div>
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

              {/* Drawer Footer CTA */}
              <div className="p-4 border-t border-white/10 bg-[#0D1421] flex-shrink-0 space-y-2">
                <Link href="/contact" onClick={closeAll} className="block text-center text-sm text-white/60 hover:text-primary transition-colors py-1">
                  Contact Support
                </Link>
                <Link href="/contact" onClick={closeAll} className="block">
                  <button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full h-13 py-3.5 text-base font-bold transition-colors">
                    Access Client Portal
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
