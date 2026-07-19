import React from "react";
import { motion, useInView } from "framer-motion";
import {
  Zap, Target, Shield, HeartHandshake, Users, BookOpen,
  Globe2, ArrowRight, CheckCircle2, Quote, Award, TrendingUp,
  Cpu, Building2, Star, MapPin, Calendar, ChevronRight
} from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import teamImg from "@assets/generated_images/diverse_multicultural_tech_team_1341.png";
import founderImg from "@assets/1777816891225_1784147053274.png";
import { useSEO } from "@/components/SEOHead";

/* ─── data ──────────────────────────────────────── */
const values = [
  { title: "Innovation",             desc: "We continuously explore emerging technologies and ideas that create real, measurable value for our customers and communities.", icon: Zap },
  { title: "Excellence",             desc: "We deliver high-quality solutions and experiences that exceed expectations — on every project, for every client.", icon: Target },
  { title: "Integrity",              desc: "Honesty, transparency, and accountability are non-negotiable. We operate with professional standards in everything we do.", icon: Shield },
  { title: "Customer Success",       desc: "Our success is defined entirely by the success of the organizations we serve. Every metric we track starts there.", icon: HeartHandshake },
  { title: "Collaboration",          desc: "Meaningful innovation is achieved through partnership, teamwork, and shared knowledge — inside our walls and beyond.", icon: Users },
  { title: "Continuous Improvement", desc: "We embrace learning, growth, and adaptation to remain at the forefront of technological advancement, always.", icon: BookOpen },
];

const milestones = [
  { year: "2020", title: "Founded",          desc: "iTech Network Africa established in Monrovia, Liberia by Wilmot Kerkulah with a bold vision for technology-driven growth across Africa." },
  { year: "2021", title: "First Solutions",  desc: "Launched initial technology consulting and software development services, serving the first wave of clients." },
  { year: "2022", title: "Expanding",        desc: "Grew into cloud infrastructure, cybersecurity, and digital transformation — expanding the portfolio and the team." },
  { year: "2023", title: "Gotecx Launched",  desc: "Gotecx was established as the flagship global technology brand — the customer-facing tech engine of iTech Network Africa." },
  { year: "2024", title: "Going Global",     desc: "Expanded reach to clients across Africa, Europe, and the Americas. Multi-country delivery teams deployed." },
  { year: "2025", title: "Gotecx POS",       desc: "Flagship Gotecx POS platform launched — enterprise point-of-sale and multi-location business management." },
  { year: "2026", title: "Full Ecosystem",   desc: "Building the complete Gotecx technology ecosystem: AI, ERP, CRM, Cloud, Analytics — for worldwide deployment." },
];

const stats = [
  { val: "500+", label: "Projects Delivered",  icon: Cpu },
  { val: "15+",  label: "Countries Reached",   icon: Globe2 },
  { val: "300+", label: "Businesses Served",   icon: Building2 },
  { val: "98%",  label: "Client Satisfaction", icon: Star },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } };

export default function About() {
  useSEO({
    title: "About — iTech Network Africa",
    description: "Learn the story of iTech Network Africa — a global technology company founded in Monrovia, Liberia, empowering organizations worldwide through our flagship brand, Gotecx.",
    canonical: "/about",
  });

  return (
    <div className="w-full bg-background overflow-hidden">

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center bg-[#060c17] overflow-hidden">
        {/* Grid texture */}
        <div className="absolute inset-0 pointer-events-none opacity-40"
          style={{ backgroundImage: "repeating-linear-gradient(rgba(109,190,69,0.05) 0 1px,transparent 1px 80px),repeating-linear-gradient(90deg,rgba(109,190,69,0.05) 0 1px,transparent 1px 80px)" }} />
        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/6 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 container mx-auto px-6 lg:px-8 max-w-7xl py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — text */}
            <motion.div initial="hidden" animate="show" variants={stagger}>
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-8">
                <Globe2 className="w-3.5 h-3.5" /> Our Story
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl xl:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
                Building the Future<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7ED321] via-primary to-[#5AB83A]">
                  Through Technology
                </span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-xl text-white/60 leading-relaxed mb-10 max-w-lg">
                Founded in Monrovia, Liberia in 2020, iTech Network Africa empowers businesses everywhere through innovation, transformation, and intelligent technology solutions — with <strong className="text-primary font-semibold">Gotecx</strong> as our flagship tech platform.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <button className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white rounded-full px-7 py-3.5 font-bold transition-all shadow-[0_0_30px_rgba(109,190,69,0.35)]">
                    Work With Us <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
                <Link href="/leadership">
                  <button className="inline-flex items-center gap-2 border border-white/20 text-white hover:border-primary/60 hover:text-primary rounded-full px-7 py-3.5 font-semibold transition-all backdrop-blur-sm">
                    Meet Our Founder
                  </button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right — founder card + stats */}
            <motion.div
              initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex flex-col gap-5"
            >
              {/* Founder photo card */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.6)]"
                style={{ boxShadow: "0 0 0 1px rgba(109,190,69,0.15), 0 24px 80px rgba(0,0,0,0.6)" }}>
                <img src={founderImg} alt="Wilmot Kerkulah — Founder, iTech Network Africa" className="w-full aspect-[4/3] object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060c17]/90 via-[#060c17]/20 to-transparent" />
                {/* Founder label */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-white font-bold text-lg leading-tight">Wilmot Kerkulah</div>
                  <div className="text-primary text-sm font-medium">Founder & Executive Director · iTech Network Africa</div>
                </div>
                {/* Flagship badge */}
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-primary/90 backdrop-blur-sm">
                  <span className="text-white text-[10px] font-black uppercase tracking-widest">Flagship Brand</span>
                </div>
              </div>

              {/* Stat row */}
              <div className="grid grid-cols-2 gap-3">
                {stats.map((s, i) => (
                  <div key={i} className="rounded-2xl bg-white/[0.05] border border-white/[0.08] p-4 flex items-center gap-3 hover:border-primary/30 transition-colors">
                    <div className="w-9 h-9 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0">
                      <s.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-white font-black text-lg leading-none">{s.val}</div>
                      <div className="text-white/40 text-[11px] font-medium mt-0.5">{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </section>

      {/* ── ITECH NETWORK AFRICA ─────────────────────── */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity:0, x:-28 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.7 }}>
              <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs mb-4 px-3 py-1.5 rounded-full border border-primary/25 bg-primary/8">
                The Parent Company
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-7 leading-tight">
                About iTech<br />Network Africa
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
                <p>
                  Founded in Monrovia, Liberia by <strong className="text-foreground font-semibold">Wilmot Kerkulah</strong>, iTech Network Africa is a technology company established to empower businesses, organizations, institutions, and communities through innovative digital solutions and technology-driven transformation.
                </p>
                <p>
                  Under his leadership as Founder and Executive Director, the organization was created with a bold vision: to leverage technology as a catalyst for business growth, innovation, efficiency, and sustainable development — across Africa and around the world.
                </p>
                <p>
                  As the parent company, iTech Network Africa drives strategic direction, innovation, and the development of technology solutions designed to address real-world challenges and unlock new opportunities for organizations of all sizes.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-7 font-semibold">
                    Work With Us <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>
                </Link>
                <Link href="/leadership">
                  <Button variant="outline" className="rounded-full px-7 font-semibold hover:border-primary hover:text-primary">
                    Meet Our Founder
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity:0, x:28 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.7 }} className="relative">
              <div className="rounded-3xl overflow-hidden border border-border shadow-2xl">
                <img src={teamImg} alt="iTech Network Africa Team" className="w-full h-auto" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-5 shadow-xl">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs text-muted-foreground font-medium">Founded in</span>
                </div>
                <div className="text-foreground font-black text-lg">Monrovia, Liberia</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-primary rounded-2xl p-5 shadow-xl text-white">
                <div className="text-3xl font-black">2020</div>
                <div className="text-white/80 text-sm font-medium">Established</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── GOTECX: FLAGSHIP BRAND ───────────────────── */}
      <section className="py-28 bg-[#060c17] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none opacity-30"
          style={{ backgroundImage: "repeating-linear-gradient(rgba(109,190,69,0.04) 0 1px,transparent 1px 60px),repeating-linear-gradient(90deg,rgba(109,190,69,0.04) 0 1px,transparent 1px 60px)" }} />

        <div className="relative z-10 container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: content */}
            <motion.div initial={{ opacity:0, x:-28 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.7 }}>
              <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs mb-4 px-3 py-1.5 rounded-full border border-primary/25 bg-primary/10">
                ★ The Flagship Brand
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-7 leading-tight">
                Gotecx — Our Global<br />Technology Engine
              </h2>
              <div className="space-y-5 text-white/70 leading-relaxed text-lg">
                <p>
                  To execute the vision of iTech Network Africa at global scale, <strong className="text-white">Gotecx</strong> was established as its flagship technology brand and tech engine. Gotecx is the customer-facing ecosystem through which software platforms, business management solutions, AI technologies, and digital transformation services are delivered to clients worldwide.
                </p>
                <p>
                  Gotecx isn't just a product — it is the brand expression of everything iTech Network Africa stands for: innovation, reliability, and world-class technology made accessible to every organization, regardless of geography.
                </p>
                <p>
                  Together, iTech Network Africa and Gotecx operate under one vision, one mission, and one set of values — united by a commitment to empowering businesses through technology.
                </p>
              </div>
            </motion.div>

            {/* Right: capability grid */}
            <motion.div initial={{ opacity:0, x:28 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.7 }}>
              <div className="rounded-3xl bg-white/[0.03] border border-white/10 p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
                <div className="text-white/40 text-xs font-bold uppercase tracking-widest mb-6">What Gotecx Delivers</div>
                <div className="grid grid-cols-2 gap-3 relative z-10">
                  {[
                    { label: "Enterprise Software Platforms", icon: Cpu },
                    { label: "Business Management Solutions", icon: Building2 },
                    { label: "AI & Intelligent Automation", icon: Zap },
                    { label: "Cloud Infrastructure", icon: Globe2 },
                    { label: "Cybersecurity Services", icon: Shield },
                    { label: "Digital Transformation", icon: TrendingUp },
                    { label: "UI/UX & Product Design", icon: Star },
                    { label: "IT Strategy & Consulting", icon: Target },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-primary/30 hover:bg-primary/5 transition-all group">
                      <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-white/75 group-hover:text-white font-medium leading-tight">{item.label}</span>
                    </div>
                  ))}
                </div>
                {/* Brand relationship callout */}
                <div className="mt-5 p-4 rounded-xl border border-primary/25 bg-primary/8 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-white/70 leading-relaxed">
                    <strong className="text-white">Gotecx</strong> is the flagship brand and tech engine of <strong className="text-white">iTech Network Africa</strong> — powered by the same team, same mission, and same commitment to excellence.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── VISION & MISSION ─────────────────────────── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <div className="text-primary font-bold uppercase tracking-widest text-xs mb-4">Our Direction</div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">Vision & Mission</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">The principles that anchor everything we build, every partnership we forge, and every problem we solve.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Vision */}
            <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}
              className="relative p-10 rounded-3xl bg-primary text-white overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute inset-0 pointer-events-none opacity-20"
                style={{ backgroundImage: "repeating-linear-gradient(rgba(255,255,255,0.05) 0 1px,transparent 1px 40px),repeating-linear-gradient(90deg,rgba(255,255,255,0.05) 0 1px,transparent 1px 40px)" }} />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <Globe2 className="w-6 h-6 text-white" />
                </div>
                <div className="text-white/60 font-bold uppercase tracking-widest text-xs mb-3">Our Vision</div>
                <h3 className="text-2xl font-black mb-5">Where We're Going</h3>
                <p className="text-white/85 leading-relaxed text-lg">
                  To become a globally recognized technology company that empowers businesses, organizations, and communities through innovative digital solutions — creating lasting impact and sustainable growth for every client we serve.
                </p>
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6, delay:0.1 }}
              className="relative p-10 rounded-3xl bg-card border border-border overflow-hidden group hover:border-primary/40 transition-all">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div className="text-primary font-bold uppercase tracking-widest text-xs mb-3">Our Mission</div>
                <h3 className="text-2xl font-black mb-5">Why We Exist</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To deliver world-class technology solutions that drive innovation, improve efficiency, accelerate growth, and create long-term value for organizations worldwide — regardless of their size or location.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ──────────────────────────────── */}
      <section className="py-28 bg-card border-y border-border">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <div className="text-primary font-bold uppercase tracking-widest text-xs mb-4">What Drives Us</div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">Our Core Values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">The principles that define who we are, how we work, and why organizations around the world trust us with their most important technology challenges.</p>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once:true }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <motion.div key={i} variants={fadeUp}
                className="group relative p-8 rounded-2xl bg-background border border-border hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/3 group-hover:to-primary/0 transition-all duration-300 rounded-2xl" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <v.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-black text-xl mb-3 group-hover:text-primary transition-colors">{v.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TIMELINE ─────────────────────────────────── */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <div className="text-primary font-bold uppercase tracking-widest text-xs mb-4">Our Journey</div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">From Monrovia to the World</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">A bold idea in Liberia — now a global technology ecosystem serving businesses across 15+ countries.</p>
          </div>

          <div className="relative">
            {/* Center line — desktop */}
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-border to-primary/20 hidden md:block" />

            <div className="space-y-6">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity:0, x: i % 2 === 0 ? -32 : 32 }}
                  whileInView={{ opacity:1, x:0 }}
                  viewport={{ once:true }}
                  transition={{ duration:0.55, delay:i*0.06 }}
                  className={`flex items-center gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Card */}
                  <div className={`md:w-[calc(50%-32px)] ${i % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10 md:text-left"}`}>
                    <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-lg transition-all group">
                      <div className="flex items-center gap-2 mb-3 text-primary font-black text-sm uppercase tracking-widest justify-start md:justify-end">
                        {i % 2 !== 0 && <Calendar className="w-3.5 h-3.5" />}
                        {m.year}
                        {i % 2 === 0 && <Calendar className="w-3.5 h-3.5" />}
                      </div>
                      <h4 className="font-black text-xl mb-2 group-hover:text-primary transition-colors">{m.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{m.desc}</p>
                    </div>
                  </div>

                  {/* Center node */}
                  <div className="hidden md:flex w-16 flex-shrink-0 items-center justify-center z-10">
                    <div className="w-12 h-12 rounded-full bg-primary text-white font-black text-sm flex items-center justify-center shadow-[0_0_20px_rgba(109,190,69,0.4)] border-4 border-background">
                      {m.year.slice(2)}
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block md:w-[calc(50%-32px)]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUNDER SPOTLIGHT ────────────────────────── */}
      <section className="py-28 bg-[#060c17] text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none opacity-20"
          style={{ backgroundImage: "repeating-linear-gradient(rgba(109,190,69,0.04) 0 1px,transparent 1px 60px),repeating-linear-gradient(90deg,rgba(109,190,69,0.04) 0 1px,transparent 1px 60px)" }} />

        <div className="relative z-10 container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Photo */}
            <motion.div initial={{ opacity:0, x:-28 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.7 }} className="relative">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_32px_100px_rgba(0,0,0,0.7)]"
                style={{ boxShadow:"0 0 0 1px rgba(109,190,69,0.2), 0 32px 100px rgba(0,0,0,0.7)" }}>
                <img src={founderImg} alt="Wilmot Kerkulah" className="w-full aspect-[3/4] object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060c17]/80 via-[#060c17]/10 to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-primary rounded-2xl p-5 shadow-xl">
                <div className="text-white font-black text-sm">Founded in</div>
                <div className="text-white font-black text-lg leading-tight">Monrovia, Liberia</div>
              </div>
              <div className="absolute -top-4 -left-4 bg-card border border-border rounded-2xl px-4 py-3 shadow-xl">
                <div className="flex items-center gap-1.5 mb-0.5">
                  {[...Array(5)].map((_,k) => <Star key={k} className="w-3 h-3 text-primary fill-primary" />)}
                </div>
                <div className="text-foreground text-xs font-bold">Visionary Leadership</div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div initial={{ opacity:0, x:28 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.7 }}>
              <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs mb-5 px-3 py-1.5 rounded-full border border-primary/25 bg-primary/10">
                Founder Spotlight
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-3 leading-tight">Wilmot Kerkulah</h2>
              <p className="text-primary font-medium text-lg mb-7">Founder & Executive Director · iTech Network Africa</p>

              <div className="space-y-4 text-white/70 leading-relaxed text-[17px] mb-8">
                <p>
                  Wilmot Kerkulah is the driving force behind iTech Network Africa and the Gotecx brand. His vision — that technology should be the great equalizer, enabling businesses of all sizes in all parts of the world to compete and thrive — shapes every product, service, and partnership the company pursues.
                </p>
                <p>
                  From founding the company in Monrovia, Liberia, to building a global technology ecosystem that now serves clients across 15+ countries, his journey is proof that world-class innovation can emerge from anywhere.
                </p>
              </div>

              {/* Quote */}
              <div className="relative p-7 rounded-2xl bg-white/[0.04] border border-white/10">
                <div className="absolute top-5 left-6 text-5xl font-serif text-primary/20 leading-none select-none">"</div>
                <p className="text-lg font-medium italic leading-relaxed text-white/85 pl-6 mb-4">
                  Empowering businesses through technology isn't just our mission — it's our purpose. Every solution we build is a step toward a more connected and equitable digital world.
                </p>
                <div className="flex items-center gap-3 pl-6">
                  <div className="w-px h-8 bg-primary/40" />
                  <div>
                    <div className="text-primary font-bold text-sm">Wilmot Kerkulah</div>
                    <div className="text-white/40 text-xs">Founder, iTech Network Africa</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── GLOBAL VISION ────────────────────────────── */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.7 }}>
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-primary/20">
              <Globe2 className="w-8 h-8 text-primary" />
            </div>
            <div className="text-primary font-bold uppercase tracking-widest text-xs mb-4">Our Reach</div>
            <h2 className="text-4xl md:text-5xl font-black mb-8">A Global Vision</h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-10">
              While proudly founded in Liberia, our vision extends far beyond borders. We are building a technology ecosystem designed to serve businesses, startups, SMEs, enterprises, NGOs, educational institutions, and governments around the world. Through innovation, collaboration, and a commitment to excellence, iTech Network Africa and Gotecx are working to become trusted global technology partners — helping every organization embrace the future with confidence.
            </p>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-primary/30 bg-primary/8 text-primary font-bold text-lg">
              <Zap className="w-5 h-5" />
              Empowering Businesses Through Technology
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.7 }}>
            <h2 className="text-4xl md:text-5xl font-black mb-5 leading-tight">
              Ready to Transform<br />Your Business?
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Join hundreds of organizations around the world already powered by Gotecx and iTech Network Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 h-14 text-base font-bold shadow-[0_0_30px_rgba(109,190,69,0.3)]">
                  Get in Touch <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </Link>
              <Link href="/solutions">
                <Button size="lg" variant="outline" className="rounded-full px-10 h-14 text-base font-semibold hover:border-primary hover:text-primary">
                  Explore Solutions <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
