import React, { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import {
  Menu, X, Search, ChevronRight, ChevronLeft, ChevronDown,
  CreditCard, Building2, Cloud, Cpu, Shield, BarChart3, Globe2,
  Zap, LayoutGrid, Briefcase, Users, Newspaper, LifeBuoy,
  BookOpen, HelpCircle, Headphones, Moon, Sun, Globe,
  Facebook, Instagram, Linkedin, Youtube, Twitter
} from "lucide-react";
import { useTheme } from "next-themes";
import gotecxLogo from "@assets/file_0000000069c471f4b1db489ae2ff9c8b_1781449096936.png";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

/* ─── nav data ─────────────────────────────────── */
const NAV_TREE = [
  { id: "home",       label: "Home",       href: "/" },
  {
    id: "about-us", label: "About Us", sub: [
      { label: "About Gotecx",       href: "/about" },
      { label: "Our Story",          href: "/about#story" },
      { label: "Vision & Mission",   href: "/about#vision" },
      { label: "Core Values",        href: "/about#values" },
      { label: "Leadership",         href: "/leadership" },
      { label: "Partners",           href: "/partners" },
      { label: "Careers",            href: "/careers" },
    ],
  },
  {
    id: "solutions", label: "Solutions", sub: [
      { label: "Enterprise Solutions",    href: "/solutions#enterprise" },
      { label: "Cloud Infrastructure",    href: "/solutions#cloud" },
      { label: "AI & Automation",         href: "/solutions#ai" },
      { label: "Cybersecurity",           href: "/solutions#cybersecurity" },
      { label: "Data Analytics",          href: "/solutions#analytics" },
      { label: "Digital Transformation",  href: "/solutions#digital" },
    ],
  },
  {
    id: "products", label: "Products", sub: [
      { label: "Gotecx POS",       href: "/products" },
      { label: "Gotecx AI",        href: "/products#ai",       tag: "Soon" },
      { label: "Gotecx Analytics", href: "/products#analytics",tag: "Soon" },
      { label: "Gotecx ERP",       href: "/products#erp",      tag: "Soon" },
      { label: "Gotecx Cloud",     href: "/products#cloud",    tag: "Soon" },
    ],
  },
  {
    id: "services", label: "Services", sub: [
      { label: "Software Development", href: "/services#software" },
      { label: "Web Development",      href: "/services#web" },
      { label: "Mobile Apps",          href: "/services#mobile" },
      { label: "IT Consulting",        href: "/services#consulting" },
      { label: "Cybersecurity",        href: "/services#cybersecurity" },
      { label: "AI Integration",       href: "/services#ai" },
      { label: "Digital Marketing",    href: "/services#marketing" },
      { label: "UI/UX Design",         href: "/services#uiux" },
    ],
  },
  {
    id: "company", label: "Company", sub: [
      { label: "About iTech Network Africa", href: "/about" },
      { label: "Leadership",                 href: "/leadership" },
      { label: "Investors",                  href: "/investors" },
      { label: "Media Center",               href: "/media-center" },
      { label: "Partnerships",               href: "/partners" },
      { label: "Success Stories",            href: "/success-stories" },
    ],
  },
  { id: "industries", label: "Industries",  href: "/industries" },
  {
    id: "resources", label: "Resources", sub: [
      { label: "Blog",           href: "/blog" },
      { label: "Documentation",  href: "/docs" },
      { label: "FAQs",           href: "/faqs" },
      { label: "Support Center", href: "/support" },
      { label: "Events",         href: "/events" },
    ],
  },
  { id: "investors", label: "Investors",    href: "/investors" },
  { id: "contact",   label: "Contact",      href: "/contact" },
];

/* ─── desktop mega-menu data ────────────────────── */
const deskMenus = [
  {
    id: "solutions", label: "Solutions", width: "w-[540px]",
    items: [
      { icon: Building2, label: "Enterprise Solutions",   desc: "Scalable platforms for large orgs",   href: "/solutions#enterprise" },
      { icon: Cloud,     label: "Cloud Infrastructure",   desc: "Secure, reliable hosting",            href: "/solutions#cloud" },
      { icon: Cpu,       label: "AI & Automation",        desc: "Intelligent workflows",               href: "/solutions#ai" },
      { icon: Shield,    label: "Cybersecurity",          desc: "Advanced digital protection",        href: "/solutions#cybersecurity" },
      { icon: BarChart3, label: "Data Analytics",         desc: "Turn data into insights",             href: "/solutions#analytics" },
      { icon: Zap,       label: "Digital Transformation", desc: "Modernize your business",             href: "/solutions#digital" },
    ],
  },
  {
    id: "products", label: "Products", width: "w-[320px]",
    custom: true,
  },
  {
    id: "services", label: "Services", width: "w-[500px]",
    items: [
      { icon: LayoutGrid, label: "Software Development", desc: "Custom apps & platforms",   href: "/services#software" },
      { icon: Globe2,     label: "Web Development",      desc: "Modern, fast websites",     href: "/services#web" },
      { icon: Cpu,        label: "Mobile Apps",          desc: "iOS & Android solutions",   href: "/services#mobile" },
      { icon: Briefcase,  label: "IT Consulting",        desc: "Expert tech guidance",      href: "/services#consulting" },
      { icon: Shield,     label: "Cybersecurity",        desc: "Protect your business",     href: "/services#cybersecurity" },
      { icon: Zap,        label: "AI Integration",       desc: "Automate intelligently",    href: "/services#ai" },
    ],
  },
  {
    id: "company", label: "Company", width: "w-[480px]",
    items: [
      { icon: Users,     label: "Leadership",   desc: "Meet our executives", href: "/leadership" },
      { icon: Building2, label: "About",        desc: "Our story & mission", href: "/about" },
      { icon: Briefcase, label: "Careers",      desc: "Join our team",       href: "/careers" },
      { icon: Globe2,    label: "Partners",     desc: "Strategic alliances", href: "/partners" },
      { icon: Newspaper, label: "Media Center", desc: "Press & news",        href: "/media-center" },
      { icon: BarChart3, label: "Investors",    desc: "Investor relations",  href: "/investors" },
    ],
  },
  {
    id: "resources", label: "Resources", width: "w-[400px]",
    items: [
      { icon: BookOpen,   label: "Blog",           desc: "Insights & articles", href: "/blog" },
      { icon: LayoutGrid, label: "Documentation",  desc: "Technical guides",     href: "/docs" },
      { icon: HelpCircle, label: "FAQs",           desc: "Common questions",     href: "/faqs" },
      { icon: Headphones, label: "Support Center", desc: "Get help fast",        href: "/support" },
    ],
  },
];

type Panel = string | null; // nav item id or null = main

function MobileMenu({ onClose }: { onClose: () => void }) {
  const [panel, setPanel] = useState<Panel>(null);
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const currentNode = panel ? NAV_TREE.find(n => n.id === panel) : null;
  const dir = panel ? 1 : -1; // slide direction

  const allLinks = NAV_TREE.flatMap(n =>
    n.sub ? n.sub.map(s => ({ ...s, parent: n.label })) : [{ label: n.label, href: n.href || "/" }]
  );
  const filtered = search.trim()
    ? allLinks.filter(l => l.label.toLowerCase().includes(search.toLowerCase()))
    : [];

  const go = (href: string) => { onClose(); };

  return (
    <div className="flex flex-col h-full" style={{ backgroundColor: "#0A0F1E" }}>

      {/* Top bar */}
      <div className="flex items-center justify-between px-5 h-[64px] flex-shrink-0 border-b border-white/10">
        {panel ? (
          <button
            onClick={() => setPanel(null)}
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors font-semibold text-sm"
          >
            <ChevronLeft className="w-5 h-5" />
            {currentNode?.label}
          </button>
        ) : (
          <img src={gotecxLogo} alt="Gotecx" className="h-8 w-auto" />
        )}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowSearch(s => !s)}
            className="text-white/60 hover:text-white transition-colors"
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Search bar */}
      <AnimatePresence>
        {showSearch && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden flex-shrink-0"
          >
            <div className="px-5 py-3 border-b border-white/10">
              <input
                autoFocus
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search pages, products, services…"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/40 outline-none focus:border-primary transition-colors"
              />
              {filtered.length > 0 && (
                <div className="mt-2 space-y-1">
                  {filtered.slice(0, 8).map((l, i) => (
                    <Link key={i} href={l.href} onClick={go} className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-white/5 text-white/80 hover:text-white text-sm transition-colors">
                      <span>{l.label}</span>
                      {"parent" in l && <span className="text-xs text-white/30">{(l as any).parent}</span>}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Panels */}
      <div className="flex-1 overflow-y-auto relative" style={{ overscrollBehavior: "contain" }}>
        <AnimatePresence mode="wait" initial={false}>
          {panel === null ? (
            /* ── Main Panel ─────────────────────── */
            <motion.div
              key="main"
              initial={{ x: "-8%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-8%", opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="absolute inset-0 overflow-y-auto"
            >
              <nav>
                {NAV_TREE.map((item, i) => (
                  <React.Fragment key={item.id}>
                    {item.sub ? (
                      <button
                        onClick={() => setPanel(item.id)}
                        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-white/[0.04] active:bg-white/[0.07] transition-colors"
                      >
                        <span className="text-white font-medium text-[17px]">{item.label}</span>
                        <ChevronRight className="w-5 h-5 text-white/40" />
                      </button>
                    ) : (
                      <Link
                        href={item.href!}
                        onClick={go}
                        className="w-full flex items-center justify-between px-5 py-4 hover:bg-white/[0.04] active:bg-white/[0.07] transition-colors"
                      >
                        <span className="text-white font-medium text-[17px]">{item.label}</span>
                      </Link>
                    )}
                    {i < NAV_TREE.length - 1 && <div className="mx-5 h-px bg-white/[0.07]" />}
                  </React.Fragment>
                ))}
              </nav>
            </motion.div>
          ) : (
            /* ── Sub Panel ──────────────────────── */
            <motion.div
              key={panel}
              initial={{ x: "8%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "8%", opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="absolute inset-0 overflow-y-auto"
            >
              {currentNode?.sub?.map((item, i) => (
                <React.Fragment key={item.href}>
                  <Link
                    href={item.href}
                    onClick={go}
                    className="flex items-center justify-between px-5 py-4 hover:bg-white/[0.04] active:bg-white/[0.07] transition-colors group"
                  >
                    <span className="text-white font-medium text-[17px] group-hover:text-primary transition-colors">{item.label}</span>
                    {"tag" in item && item.tag && (
                      <span className="text-[10px] font-bold bg-primary/20 text-primary px-2 py-0.5 rounded-full">{item.tag}</span>
                    )}
                  </Link>
                  {i < (currentNode.sub?.length ?? 0) - 1 && <div className="mx-5 h-px bg-white/[0.07]" />}
                </React.Fragment>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom — social links + copyright (shown only on main panel) */}
      <AnimatePresence>
        {panel === null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-shrink-0 border-t border-white/10 px-5 pt-4 pb-6"
          >
            <div className="flex items-center gap-6 mb-3">
              {[
                { label: "FACEBOOK",  href: "#", Icon: Facebook },
                { label: "INSTAGRAM", href: "#", Icon: Instagram },
                { label: "X",         href: "#", Icon: Twitter },
                { label: "LINKEDIN",  href: "#", Icon: Linkedin },
                { label: "YOUTUBE",   href: "#", Icon: Youtube },
              ].map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-primary transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-[11px] text-white/25 uppercase tracking-wider">
              &copy; 2026 Gotecx · iTech Network Africa · All Rights Reserved.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function DesktopGrid({ items }: { items: typeof deskMenus[0]["items"] }) {
  return (
    <div className="grid grid-cols-2 gap-1">
      {items?.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted transition-all group"
        >
          <div className="mt-0.5 bg-primary/10 p-2 rounded-lg flex-shrink-0">
            <item.icon className="w-4 h-4 text-primary" />
          </div>
          <div>
            <div className="font-semibold text-sm">{item.label}</div>
            <div className="text-xs text-muted-foreground mt-0.5">{item.desc}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}

function ProductsMenu() {
  return (
    <div className="space-y-3">
      <Link href="/products" className="flex items-start gap-3 p-3.5 rounded-xl bg-primary/10 border border-primary/20 hover:bg-primary/15 transition-colors">
        <div className="bg-primary/20 p-2 rounded-lg flex-shrink-0"><CreditCard className="w-5 h-5 text-primary" /></div>
        <div>
          <div className="font-bold text-primary text-sm">Gotecx POS</div>
          <div className="text-xs text-muted-foreground mt-0.5">Flagship POS & business management platform</div>
        </div>
      </Link>
      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest px-1">Roadmap</p>
      <div className="grid grid-cols-2 gap-1.5">
        {[{ icon: Cpu, name: "Gotecx AI" }, { icon: BarChart3, name: "Gotecx Analytics" }, { icon: Building2, name: "Gotecx ERP" }, { icon: Cloud, name: "Gotecx Cloud" }].map(p => (
          <div key={p.name} className="flex items-center gap-2.5 p-2.5 rounded-lg bg-muted/40 opacity-60">
            <p.icon className="w-4 h-4 text-muted-foreground" />
            <div>
              <div className="text-xs font-medium text-muted-foreground">{p.name}</div>
              <div className="text-[10px] text-muted-foreground">Coming Soon</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();
  const headerRef = useRef<HTMLElement>(null);

  const closeAll = () => { setActiveMenu(null); setIsMobileOpen(false); };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) setActiveMenu(null);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  return (
    <>
      <header ref={headerRef} className="sticky top-0 z-40 w-full border-b border-white/10 bg-background/90 backdrop-blur-xl">
        <div className="container mx-auto px-4 lg:px-6 h-[68px] flex items-center justify-between gap-4">

          {/* Logo */}
          <Link href="/" onClick={closeAll} className="flex-shrink-0 flex flex-col items-start">
            <img src={gotecxLogo} alt="Gotecx" className="h-9 w-auto" style={{ maxWidth: 140 }} />
            <span className="text-[9px] text-muted-foreground uppercase tracking-[0.12em] font-semibold mt-0.5 whitespace-nowrap hidden sm:block">
              Powered by iTech Network Africa
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-0 font-medium text-sm flex-1 justify-center">
            <Link href="/" onClick={closeAll} className="px-3 py-2 rounded-lg hover:bg-muted hover:text-primary transition-colors whitespace-nowrap">Home</Link>
            <Link href="/about" onClick={closeAll} className="px-3 py-2 rounded-lg hover:bg-muted hover:text-primary transition-colors whitespace-nowrap">About</Link>

            {deskMenus.map((item) => (
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
                      className={`absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 ${item.width} bg-card border border-border rounded-2xl shadow-2xl p-4 z-50`}
                      onClick={closeAll}
                    >
                      {item.custom ? <ProductsMenu /> : <DesktopGrid items={item.items!} />}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <Link href="/industries" onClick={closeAll} className="px-3 py-2 rounded-lg hover:bg-muted hover:text-primary transition-colors whitespace-nowrap">Industries</Link>
            <Link href="/contact" onClick={closeAll} className="px-3 py-2 rounded-lg hover:bg-muted hover:text-primary transition-colors whitespace-nowrap">Contact</Link>
          </nav>

          {/* Desktop Right */}
          <div className="hidden xl:flex items-center gap-1.5 flex-shrink-0">
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
              <Button className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full px-5 h-9 text-sm ml-1">
                Client Portal
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
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-muted text-foreground transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile full-screen overlay ── */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              key="overlay-bg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50"
              style={{ backgroundColor: "#0A0F1E" }}
            />
            <motion.div
              key="overlay-panel"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="fixed inset-0 z-50"
            >
              <MobileMenu onClose={() => setIsMobileOpen(false)} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
