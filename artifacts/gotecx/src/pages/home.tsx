import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight, CheckCircle2, Globe, Shield, Zap, Target, LineChart, Lock,
  Users2, BrainCircuit, Quote, Cloud, LayoutGrid, Cpu, Building2, Briefcase,
  Globe2, Smartphone, BarChart3, Code2, Palette, Mail, Phone,
  ChevronRight, Star, TrendingUp, Award, Clock,
  ShoppingCart, Heart, GraduationCap, Landmark, CreditCard,
  Factory, Truck, Hotel, HandHeart
} from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import heroImg from "@assets/generated_images/modern_enterprise_technology_company_4d4f.png";
import teamImg from "@assets/generated_images/diverse_multicultural_tech_team_1341.png";
import posImg from "@assets/generated_images/modern_retail_point_of_6ff3.png";
import founderImg from "@assets/1777816891225_1784147053274.png";

/* ─── animated counter ─────────────────────────── */
function Counter({ to, suffix = "", prefix = "" }: { to: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(to / 60);
    const id = setInterval(() => {
      start += step;
      if (start >= to) { setCount(to); clearInterval(id); }
      else setCount(start);
    }, 22);
    return () => clearInterval(id);
  }, [inView, to]);
  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
}

/* ─── service cards ─────────────────────────────── */
const services = [
  { icon: Code2,       title: "Software Development",   desc: "Custom web and enterprise applications built with modern stacks. From MVP to full-scale platform.", color: "from-primary/20 to-primary/5" },
  { icon: Smartphone,  title: "Mobile App Development", desc: "Native iOS and Android apps, cross-platform solutions, and PWAs for any business need.", color: "from-primary/15 to-primary/5" },
  { icon: Globe2,      title: "Web Development",        desc: "Fast, responsive, SEO-optimized websites and web portals built for conversion and performance.", color: "from-primary/20 to-primary/5" },
  { icon: BrainCircuit,title: "AI & Automation",        desc: "Intelligent workflows, predictive analytics, NLP, and machine learning integrations.", color: "from-primary/15 to-primary/5" },
  { icon: Cloud,       title: "Cloud Infrastructure",   desc: "Cloud migrations, managed hosting, DevOps, CI/CD pipelines, and multi-region deployments.", color: "from-primary/20 to-primary/5" },
  { icon: Shield,      title: "Cybersecurity",          desc: "Penetration testing, security audits, endpoint protection, and compliance frameworks.", color: "from-primary/15 to-primary/5" },
  { icon: BarChart3,   title: "Data Analytics",         desc: "Business intelligence dashboards, data warehousing, and real-time reporting systems.", color: "from-primary/20 to-primary/5" },
  { icon: Palette,     title: "UI/UX Design",           desc: "User-centered design, brand identity, product design systems, and interactive prototypes.", color: "from-primary/15 to-primary/5" },
  { icon: Briefcase,   title: "IT Consulting",          desc: "Technology strategy, architecture planning, digital roadmaps, and CTO-on-demand services.", color: "from-primary/20 to-primary/5" },
];

/* ─── process steps ─────────────────────────────── */
const steps = [
  { num: "01", title: "Discovery",     desc: "We learn your business, goals, challenges, and vision through structured discovery sessions." },
  { num: "02", title: "Strategy",      desc: "We define the technology roadmap, architecture, timeline, and success metrics tailored to you." },
  { num: "03", title: "Design",        desc: "Our design team creates user-centered interfaces that are both intuitive and on-brand." },
  { num: "04", title: "Development",   desc: "Engineers build your solution with modern practices, code review, and continuous testing." },
  { num: "05", title: "Launch",        desc: "We deploy, monitor, and ensure a smooth go-live with full stakeholder support." },
  { num: "06", title: "Growth",        desc: "Ongoing optimization, feature development, and performance improvements post-launch." },
];

const industries = [
  { label: "Retail & Commerce",    Icon: ShoppingCart },
  { label: "Healthcare",           Icon: Heart },
  { label: "Education",            Icon: GraduationCap },
  { label: "Government",           Icon: Landmark },
  { label: "Financial Services",   Icon: CreditCard },
  { label: "Manufacturing",        Icon: Factory },
  { label: "Logistics",            Icon: Truck },
  { label: "Real Estate",          Icon: Building2 },
  { label: "Hospitality",          Icon: Hotel },
  { label: "NGOs & Non-Profits",   Icon: HandHeart },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function Home() {
  return (
    <div className="w-full bg-background overflow-hidden">

      {/* ── HERO ────────────────────────────────────────── */}
      <section className="relative min-h-[100vh] flex items-center pt-16 overflow-hidden bg-[#0D1421]">
        {/* Background grid */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(rgba(109,190,69,0.04) 0 1px, transparent 1px 80px), repeating-linear-gradient(90deg, rgba(109,190,69,0.04) 0 1px, transparent 1px 80px)" }} />
        {/* Glow */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[700px] bg-primary/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
        {/* Floating orbs */}
        <motion.div animate={{ y: [0,-28,0], x:[0,16,0] }} transition={{ duration:6, repeat:Infinity, ease:"easeInOut" }} className="absolute top-1/4 right-1/3 w-24 h-24 bg-primary/25 rounded-full blur-[32px] pointer-events-none" />
        <motion.div animate={{ y: [0,32,0], x:[0,-20,0] }} transition={{ duration:8, repeat:Infinity, ease:"easeInOut" }} className="absolute bottom-1/3 left-1/5 w-36 h-36 bg-blue-500/15 rounded-full blur-[48px] pointer-events-none" />

        <div className="container relative z-10 px-4 mx-auto grid lg:grid-cols-2 gap-12 items-center py-16">
          {/* Left */}
          <motion.div initial={{ opacity:0, x:-48 }} animate={{ opacity:1, x:0 }} transition={{ duration:0.85 }}>
            <motion.div initial={{ opacity:0, scale:0.9 }} animate={{ opacity:1, scale:1 }} transition={{ delay:0.1, duration:0.5 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold tracking-wider mb-8 uppercase">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Powered by iTech Network Africa · Founded in Liberia
            </motion.div>
            <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-black tracking-tight text-white mb-6 leading-[1.08]">
              Empowering<br />
              Businesses<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-green-400 to-[#2D9F6F]">Through Technology</span>
            </h1>
            <p className="text-lg md:text-xl text-white/65 mb-10 max-w-lg leading-relaxed">
              Helping organizations around the world automate, innovate, transform, and scale with intelligent technology solutions.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-13 font-bold shadow-[0_0_30px_rgba(109,190,69,0.35)] text-base">
                  Request a Demo <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
              <Link href="/solutions">
                <Button size="lg" variant="outline" className="rounded-full px-8 h-13 border-white/20 text-white hover:bg-white/10 font-semibold bg-white/5 backdrop-blur-sm text-base">
                  Explore Solutions
                </Button>
              </Link>
              <Link href="/products">
                <Button size="lg" variant="ghost" className="rounded-full px-8 h-13 text-white hover:bg-white/10 font-semibold text-base">
                  See Products
                </Button>
              </Link>
            </div>
            {/* Trust signals */}
            <div className="mt-10 flex flex-wrap items-center gap-6">
              {[{ icon: CheckCircle2, label: "500+ Projects" }, { icon: Globe2, label: "15+ Countries" }, { icon: Award, label: "98% Satisfaction" }].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-white/50 text-sm font-medium">
                  <Icon className="w-4 h-4 text-primary" /> {label}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — hero image + floating cards */}
          <motion.div initial={{ opacity:0, scale:0.92 }} animate={{ opacity:1, scale:1 }} transition={{ duration:1, delay:0.25 }} className="relative hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(109,190,69,0.15)]">
              <img src={heroImg} alt="Gotecx Technology" className="w-full h-auto object-cover" style={{ maxHeight: 500 }} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1421]/70 via-transparent to-transparent" />
            </div>
            {/* Floating stat cards */}
            <motion.div animate={{ y:[0,-10,0] }} transition={{ duration:3.5, repeat:Infinity, ease:"easeInOut" }} className="absolute -left-8 top-12 bg-card/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center"><TrendingUp className="w-5 h-5 text-primary" /></div>
                <div>
                  <div className="text-white font-black text-xl">300+</div>
                  <div className="text-white/50 text-xs">Businesses Served</div>
                </div>
              </div>
            </motion.div>
            <motion.div animate={{ y:[0,12,0] }} transition={{ duration:4, repeat:Infinity, ease:"easeInOut", delay:0.8 }} className="absolute -right-6 bottom-20 bg-card/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center"><Star className="w-5 h-5 text-blue-400" /></div>
                <div>
                  <div className="text-white font-black text-xl">98%</div>
                  <div className="text-white/50 text-xs">Client Satisfaction</div>
                </div>
              </div>
            </motion.div>
            <motion.div animate={{ y:[0,-8,0] }} transition={{ duration:5, repeat:Infinity, ease:"easeInOut", delay:1.5 }} className="absolute left-10 -bottom-6 bg-primary rounded-2xl p-4 shadow-2xl">
              <div className="text-white font-bold text-sm">Gotecx POS Live</div>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span className="text-white/80 text-xs">Processing transactions</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div animate={{ y:[0,10,0] }} transition={{ duration:2, repeat:Infinity }} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 flex flex-col items-center gap-1">
          <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </section>

      {/* ── AUTO-SLIDING TICKER ─────────────────────────── */}
      <div className="bg-[#0D1421] border-b border-white/[0.08] overflow-hidden py-0">
        {/* Row 1 — scrolls left */}
        <div className="relative flex overflow-x-hidden py-4 border-b border-white/[0.06]">
          <motion.div
            className="flex gap-4 flex-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
          >
            {[
              "Software Development", "Cloud Infrastructure", "AI & Machine Learning", "Mobile Apps",
              "Cybersecurity", "UI/UX Design", "Web Development", "IT Consulting",
              "Data Analytics", "Digital Marketing", "Business Automation", "Enterprise ERP",
              "Software Development", "Cloud Infrastructure", "AI & Machine Learning", "Mobile Apps",
              "Cybersecurity", "UI/UX Design", "Web Development", "IT Consulting",
              "Data Analytics", "Digital Marketing", "Business Automation", "Enterprise ERP",
            ].map((item, i) => (
              <span key={i} className="flex-shrink-0 flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/[0.04] text-white/60 text-xs font-semibold whitespace-nowrap hover:border-primary/40 hover:text-primary transition-colors cursor-default">
                <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="relative flex overflow-x-hidden py-4">
          <motion.div
            className="flex gap-4 flex-nowrap"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, duration: 32, ease: "linear" }}
          >
            {[
              "Liberia", "Nigeria", "Ghana", "South Africa", "Kenya", "USA", "UK", "Europe",
              "Healthcare Tech", "Gov Technology", "EdTech", "FinTech", "RetailTech", "AgriTech",
              "Liberia", "Nigeria", "Ghana", "South Africa", "Kenya", "USA", "UK", "Europe",
              "Healthcare Tech", "Gov Technology", "EdTech", "FinTech", "RetailTech", "AgriTech",
            ].map((item, i) => (
              <span key={i} className="flex-shrink-0 flex items-center gap-3 px-5 py-2 rounded-full border border-primary/20 bg-primary/[0.06] text-primary/70 text-xs font-semibold whitespace-nowrap hover:bg-primary/15 hover:text-primary transition-colors cursor-default">
                <span className="w-1.5 h-1.5 bg-primary/60 rounded-full flex-shrink-0" />
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── ANIMATED STATS ──────────────────────────────── */}
      <section className="py-20 bg-[#0D1421] border-b border-white/10">
        <div className="container mx-auto px-4">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once:true }} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {[
              { num: 500, suffix: "+", label: "Projects Delivered" },
              { num: 20,  suffix: "+", label: "Industries Served" },
              { num: 50,  suffix: "+", label: "Tech Solutions" },
              { num: 300, suffix: "+", label: "Businesses Supported" },
              { num: 15,  suffix: "+", label: "Countries Reached" },
              { num: 98,  suffix: "%", label: "Client Satisfaction" },
            ].map((s, i) => (
              <motion.div key={i} variants={fadeUp} className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center hover:border-primary/30 transition-colors">
                <div className="text-3xl lg:text-4xl font-black text-white mb-1">
                  <Counter to={s.num} suffix={s.suffix} />
                </div>
                <div className="text-xs font-bold text-white/40 uppercase tracking-wider">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── WHO WE ARE ──────────────────────────────────── */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-4 max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity:0, x:-32 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.7 }}>
            <div className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Our Story</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">Building the Future<br />Through Technology</h2>
            <p className="text-lg text-muted-foreground mb-5 leading-relaxed">
              Founded in Monrovia, Liberia by <strong>Wilmot Kerkulah</strong>, iTech Network Africa was established to address the growing need for technology-driven business solutions that help organizations thrive in an increasingly digital world.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              As the company evolved, <strong>Gotecx</strong> was launched as the flagship technology brand — positioning our products and services on a global stage.
            </p>
            <div className="p-7 rounded-2xl bg-card border border-border relative overflow-hidden">
              <div className="absolute top-4 left-5 text-7xl font-serif text-primary/10 leading-none select-none">"</div>
              <p className="text-lg font-medium italic relative z-10 mb-3 leading-relaxed">
                "We built Gotecx because we believe every business deserves world-class technology, regardless of where they are in the world."
              </p>
              <div className="flex items-center gap-3">
                <img src={founderImg} alt="Wilmot Kerkulah" className="w-10 h-10 rounded-full object-cover object-top border-2 border-primary/30" />
                <div>
                  <div className="font-bold text-primary text-sm">Wilmot Kerkulah</div>
                  <div className="text-xs text-muted-foreground">Founder & Executive Director</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div initial={{ opacity:0, x:32 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.7 }}>
            <div className="relative pl-10 border-l-2 border-border space-y-10">
              {[
                { year: "2020", title: "Founded",          desc: "iTech Network Africa established in Monrovia, Liberia." },
                { year: "2021", title: "First Services",   desc: "Technology consulting and software development launched." },
                { year: "2023", title: "Gotecx Launched",  desc: "Flagship brand created for global technology delivery." },
                { year: "2025", title: "Gotecx POS",       desc: "Enterprise point-of-sale platform launched worldwide." },
                { year: "2026", title: "Global Ecosystem", desc: "Serving enterprises, NGOs, and governments worldwide." },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity:0, x:20 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }} className="relative">
                  <div className="absolute -left-[49px] top-1 w-9 h-9 bg-card border-2 border-primary rounded-full flex items-center justify-center shadow-[0_0_12px_rgba(109,190,69,0.3)]">
                    <div className="w-2.5 h-2.5 bg-primary rounded-full" />
                  </div>
                  <div className="text-primary font-black text-lg mb-0.5">{item.year}</div>
                  <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────────── */}
      <section className="py-28 bg-card border-y border-border">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <div className="text-primary font-bold uppercase tracking-widest text-sm mb-3">What We Do</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Complete Technology Services</h2>
            <p className="text-muted-foreground text-lg">From concept to deployment — every technology service your organization needs, delivered by experts.</p>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once:true }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <motion.div key={i} variants={fadeUp} className={`group relative p-7 rounded-2xl border border-border hover:border-primary/50 bg-background bg-gradient-to-br ${s.color} transition-all hover:shadow-xl hover:-translate-y-1 cursor-pointer`}>
                <div className="w-13 h-13 bg-background border border-border rounded-xl flex items-center justify-center mb-5 group-hover:border-primary/40 group-hover:bg-primary/5 transition-all">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                <Link href="/services" className="text-primary text-sm font-semibold flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                  Learn More <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-10">
            <Link href="/services">
              <Button variant="outline" className="rounded-full px-8 h-12 border-primary text-primary hover:bg-primary hover:text-white font-semibold transition-colors">
                View All Services <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── GOTECX POS PRODUCT ──────────────────────────── */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <div className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Flagship Platform</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">The Gotecx Ecosystem</h2>
            <p className="text-lg text-muted-foreground">A unified suite of products designed to manage, scale, and secure your entire business.</p>
          </div>
          <div className="rounded-3xl overflow-hidden border border-border shadow-2xl bg-[#0D1421] grid lg:grid-cols-2">
            <div className="p-10 lg:p-14 flex flex-col justify-center">
              <div className="inline-flex px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-bold mb-6 uppercase tracking-wider w-fit">Gotecx POS — Available Now</div>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-5 leading-snug">Command Your Business Operations</h3>
              <p className="text-white/65 mb-7 text-lg leading-relaxed">
                Real-time inventory management, multi-location support, advanced analytics, employee management, and offline capabilities — built for the modern enterprise.
              </p>
              <ul className="space-y-3 mb-8">
                {["Multi-location inventory sync", "Advanced sales analytics dashboard", "Employee & role management", "Offline mode with auto-sync", "Customer loyalty programs"].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <Link href="/products">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 w-fit font-semibold">
                  Explore Gotecx POS <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
            <div className="bg-[#111827] flex items-center justify-center p-8 overflow-hidden">
              <motion.div initial={{ opacity:0, scale:0.9 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }} transition={{ duration:0.7 }} className="rounded-2xl overflow-hidden shadow-2xl w-full">
                <img src={posImg} alt="Gotecx POS" className="w-full h-auto object-cover" />
              </motion.div>
            </div>
          </div>

          {/* Coming soon products */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
            {[
              { name: "Gotecx AI",        icon: BrainCircuit },
              { name: "Gotecx Analytics", icon: BarChart3 },
              { name: "Gotecx ERP",       icon: Building2 },
              { name: "Gotecx CRM",       icon: Users2 },
              { name: "Gotecx Cloud",     icon: Cloud },
            ].map((p, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-4 text-center flex flex-col items-center gap-2 hover:border-primary/30 transition-colors">
                <p.icon className="w-6 h-6 text-muted-foreground" />
                <h4 className="font-bold text-sm">{p.name}</h4>
                <span className="text-[10px] text-muted-foreground uppercase font-semibold bg-muted px-2 py-0.5 rounded-full">Coming Soon</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY GOTECX ──────────────────────────────────── */}
      <section className="py-28 bg-[#0D1421] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-14">
            <div className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Why Gotecx</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">The Gotecx Advantage</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">What sets us apart from the rest — and why global organizations choose us.</p>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once:true }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Innovation First",   desc: "We continuously explore emerging technologies to deliver cutting-edge solutions.",     metric: "50+ Solutions Built",   icon: Zap },
              { title: "Infinite Scalability",desc: "Systems architected to grow seamlessly with your business, from startup to enterprise.", metric: "Millions of transactions", icon: TrendingUp },
              { title: "Bank-Grade Security", desc: "Multi-layer security, encryption at rest and in transit, plus continuous monitoring.",    metric: "Zero breach record",    icon: Shield },
              { title: "99.9% Uptime SLA",   desc: "Redundant infrastructure, failover systems, and 24/7 monitoring guarantee availability.", metric: "Guaranteed reliability", icon: Clock },
              { title: "Global Expertise",   desc: "Proudly from Liberia, our global perspective bridges local insight and world-class standards.", metric: "15+ Countries",   icon: Globe },
              { title: "Client Obsession",   desc: "Your success is our success. We measure impact by the outcomes we create for you.",       metric: "98% Satisfaction",      icon: Star },
            ].map((p, i) => (
              <motion.div key={i} variants={fadeUp} className="p-7 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/8 hover:border-primary/30 transition-all group">
                <div className="w-12 h-12 bg-primary/15 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/25 transition-colors">
                  <p.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-white/55 mb-5 text-sm leading-relaxed">{p.desc}</p>
                <div className="text-xs font-bold text-primary px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full inline-block">{p.metric}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── INDUSTRIES ──────────────────────────────────── */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-14">
            <div className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Industries</div>
            <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Global vision applied to specific sector challenges. Our solutions are built for real-world industry needs.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.05, duration:0.4 }}
                whileHover={{ scale:1.04, y:-4 }}
                className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary hover:shadow-lg transition-all group cursor-pointer"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                  <ind.Icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">{ind.label}</h4>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/industries">
              <Button variant="outline" className="rounded-full px-7 h-11 border-primary text-primary hover:bg-primary hover:text-white transition-colors">
                All Industries <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ─────────────────────────────────── */}
      <section className="py-28 bg-card border-y border-border">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-14">
            <div className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Our Process</div>
            <h2 className="text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">A proven 6-step process that delivers results — on time, on budget, and above expectations.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.07 }}
                className="relative p-7 rounded-2xl bg-background border border-border hover:border-primary/40 transition-all group"
              >
                <div className="absolute top-5 right-5 text-6xl font-black text-primary/5 leading-none select-none group-hover:text-primary/10 transition-colors">{step.num}</div>
                <div className="w-11 h-11 bg-primary rounded-xl flex items-center justify-center text-white font-black text-sm mb-5 shadow-[0_0_16px_rgba(109,190,69,0.4)]">
                  {step.num}
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM SECTION ────────────────────────────────── */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div initial={{ opacity:0, x:-32 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.7 }}>
              <div className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Our Team</div>
              <h2 className="text-4xl font-bold mb-5 leading-tight">A World-Class Team<br />From Liberia to the Globe</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Our team of engineers, designers, strategists, and consultants are passionate about solving complex technology challenges. We bring together diverse expertise to deliver solutions that make a real difference.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Led by founder Wilmot Kerkulah, we are building one of Africa's most innovative technology companies — with a global vision and a deep commitment to excellence.
              </p>
              <div className="flex gap-4">
                <Link href="/about">
                  <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-7 font-semibold">
                    Our Story <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
                <Link href="/careers">
                  <Button variant="outline" className="rounded-full px-7 font-semibold">
                    Join Our Team
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity:0, x:32 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.7 }} className="relative">
              <div className="rounded-3xl overflow-hidden border border-border shadow-2xl">
                <img src={teamImg} alt="Gotecx Team" className="w-full h-auto" />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-primary rounded-2xl p-5 shadow-xl">
                <div className="text-white font-black text-2xl">15+</div>
                <div className="text-white/80 text-xs font-medium">Countries Reached</div>
              </div>
              <div className="absolute -top-5 -right-5 bg-card border border-border rounded-2xl p-5 shadow-xl">
                <div className="text-foreground font-black text-2xl">300+</div>
                <div className="text-muted-foreground text-xs font-medium">Businesses Served</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────── */}
      <section className="py-28 bg-[#0D1421] text-white relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/8 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-14">
            <div className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Social Proof</div>
            <h2 className="text-4xl font-bold mb-4">Customer Success Stories</h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">Real results from real organizations around the world.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { tag: "Retail",     result: "40% increase in sales efficiency", quote: "Gotecx POS completely transformed how we manage our 12 locations. The real-time insights are invaluable.", org: "Enterprise Retail Chain, West Africa" },
              { tag: "Healthcare", result: "Zero downtime infrastructure",     quote: "The cloud migration led by iTech Network Africa secured our patient data while making it instantly accessible.", org: "Regional Medical Center" },
              { tag: "Education",  result: "Streamlined administration",       quote: "Their software solutions automated our entire enrollment and grading processes, saving hundreds of hours.", org: "National University" },
            ].map((story, i) => (
              <motion.div key={i} initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">{story.tag}</span>
                  <div className="flex gap-0.5">{[...Array(5)].map((_,k) => <Star key={k} className="w-3.5 h-3.5 text-primary fill-primary" />)}</div>
                </div>
                <h3 className="text-xl font-black mb-4 leading-snug">{story.result}</h3>
                <p className="text-white/55 italic mb-5 text-sm leading-relaxed">"{story.quote}"</p>
                <div className="text-sm font-bold text-white/80">{story.org}</div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/success-stories">
              <Button variant="outline" className="rounded-full px-8 h-12 border-white/20 text-white hover:bg-white/10 font-semibold">
                More Success Stories <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── TECH MARQUEE ────────────────────────────────── */}
      <section className="py-12 bg-card border-y border-border overflow-hidden">
        <div className="container mx-auto px-4 text-center mb-6">
          <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Our Technology Ecosystem</h3>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex gap-14 whitespace-nowrap animate-[marquee_25s_linear_infinite]">
            {['AWS', 'Microsoft Azure', 'Google Cloud', 'Oracle', 'IBM', 'SAP', 'Salesforce', 'MongoDB', 'PostgreSQL', 'React', 'Node.js', 'Python', 'AWS', 'Microsoft Azure', 'Google Cloud', 'Oracle', 'IBM', 'SAP', 'Salesforce', 'MongoDB', 'PostgreSQL', 'React', 'Node.js', 'Python'].map((p, i) => (
              <span key={i} className="text-xl font-black text-foreground/15 hover:text-primary/60 transition-colors cursor-default select-none">{p}</span>
            ))}
          </div>
        </div>
        <style dangerouslySetInnerHTML={{__html:`@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}} />
      </section>

      {/* ── BLOG + EVENTS ───────────────────────────────── */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Knowledge Hub</div>
              <h2 className="text-3xl font-bold mb-8">Latest Insights</h2>
              <div className="space-y-0">
                {[
                  { cat: "Technology",      title: "The Future of AI in Enterprise Business Management",          date: "Jul 10, 2026" },
                  { cat: "Product Update",  title: "New Features in Gotecx POS v2.0 — What's Changed",          date: "Jun 28, 2026" },
                  { cat: "Insight",         title: "Digital Transformation in Emerging African Markets",          date: "Jun 14, 2026" },
                  { cat: "Case Study",      title: "How Retail Chains Are Scaling with Gotecx POS",              date: "May 30, 2026" },
                ].map((post, i) => (
                  <Link key={i} href="/blog" className="group block py-5 border-b border-border hover:border-primary/40 transition-colors">
                    <div className="text-xs font-bold text-primary mb-1.5">{post.cat} · {post.date}</div>
                    <h3 className="text-base font-bold group-hover:text-primary transition-colors leading-snug">{post.title}</h3>
                  </Link>
                ))}
              </div>
              <Link href="/blog" className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm mt-6 hover:gap-2.5 transition-all">
                View All Articles <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div>
              <div className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Events</div>
              <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
              <div className="space-y-4">
                {[
                  { date: "Oct 15, 2026", title: "Global Tech Summit 2026",            type: "Conference", location: "Virtual" },
                  { date: "Nov 02, 2026", title: "Scaling with Cloud Infrastructure",   type: "Webinar",    location: "Online" },
                  { date: "Dec 10, 2026", title: "Gotecx Developer Connect",            type: "Meetup",     location: "Virtual" },
                  { date: "Jan 20, 2027", title: "iTech Africa Innovation Forum",       type: "Summit",     location: "Monrovia, Liberia" },
                ].map((event, i) => (
                  <div key={i} className="flex gap-5 items-center p-5 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all group cursor-pointer">
                    <div className="bg-primary/10 text-primary p-3 rounded-xl text-center min-w-[72px] flex-shrink-0 border border-primary/20">
                      <div className="text-sm font-black">{event.date.split(",")[0]}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold group-hover:text-primary transition-colors">{event.title}</h3>
                      <div className="text-sm text-muted-foreground">{event.type} · {event.location}</div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                  </div>
                ))}
              </div>
              <Link href="/events" className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm mt-6 hover:gap-2.5 transition-all">
                All Events <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT BAND ────────────────────────────────── */}
      <section className="py-16 bg-primary/10 border-y border-primary/20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="text-primary font-bold uppercase tracking-widest text-xs mb-1">Get in Touch</div>
              <h3 className="text-2xl font-bold">Have questions? We're here to help.</h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <a href="tel:+2317768366689" className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-card border border-border hover:border-primary text-sm font-semibold transition-colors">
                <Phone className="w-4 h-4 text-primary" /> +231 776 836 689
              </a>
              <a href="https://wa.me/231776836689" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-primary hover:bg-primary/90 text-white text-sm font-semibold transition-colors">
                Chat on WhatsApp <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────── */}
      <section className="py-32 bg-[#0D1421] text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-primary/15 blur-[130px] pointer-events-none rounded-full" />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(rgba(109,190,69,0.03) 0 1px, transparent 1px 60px), repeating-linear-gradient(90deg, rgba(109,190,69,0.03) 0 1px, transparent 1px 60px)" }} />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <motion.div initial={{ opacity:0, y:32 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs font-bold tracking-wider mb-8 uppercase">
              <Zap className="w-3.5 h-3.5" /> Ready to Get Started?
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Transform Your Business With Technology That Scales
            </h2>
            <p className="text-xl text-white/65 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join the global organizations powered by Gotecx and iTech Network Africa.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 h-14 text-base font-bold shadow-[0_0_40px_rgba(109,190,69,0.3)]">
                  Request a Demo <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
              <Link href="/solutions">
                <Button size="lg" variant="outline" className="rounded-full px-10 h-14 text-base border-white/20 hover:bg-white/10 text-white font-bold bg-white/5">
                  Explore Solutions
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="ghost" className="rounded-full px-10 h-14 text-base hover:bg-white/10 text-white font-bold">
                  Talk to Sales
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
