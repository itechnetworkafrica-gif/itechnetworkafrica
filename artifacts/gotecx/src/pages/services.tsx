import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import {
  Code2, Smartphone, Globe2, Cloud, Palette, Target, BarChart3,
  ShieldCheck, Briefcase, BrainCircuit, Cpu, TrendingUp,
  ArrowRight, CheckCircle2, ChevronRight, Users, Clock,
  Award, Zap, Settings, Database, Lock, LineChart,
  Layers, GitBranch, Server, Monitor, Wifi, Search
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ─── service definitions ──────────────────────────────────────── */
const serviceList = [
  {
    id: "software",
    title: "Software Development",
    tagline: "Custom Software. Enterprise Scale.",
    icon: Code2,
    color: "#6DBE45",
    desc: "We design and build custom software applications that solve real business problems. From complex enterprise platforms to targeted business tools, our engineering teams deliver reliable, scalable, and maintainable software using modern development practices.",
    deliverables: [
      "Custom web applications",
      "Enterprise resource planning (ERP) systems",
      "API design and development",
      "Legacy system modernization",
      "SaaS platform development",
      "Third-party integrations",
    ],
    tech: ["React", "Node.js", "Python", "PostgreSQL", "TypeScript", "Docker"],
    metric: "200+ apps delivered",
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    tagline: "iOS & Android. Built Right.",
    icon: Smartphone,
    color: "#6DBE45",
    desc: "From native performance to cross-platform reach, we build mobile applications that users love. Our mobile team handles the entire product lifecycle — from wireframing and UI design to App Store deployment and ongoing maintenance.",
    deliverables: [
      "Native iOS and Android apps",
      "Cross-platform apps (React Native, Flutter)",
      "Progressive Web Apps (PWA)",
      "Mobile UI/UX design",
      "App Store optimization",
      "Push notifications and analytics",
    ],
    tech: ["React Native", "Flutter", "Swift", "Kotlin", "Expo", "Firebase"],
    metric: "50+ apps shipped",
  },
  {
    id: "web",
    title: "Web Development",
    tagline: "Fast. Modern. Conversion-Driven.",
    icon: Globe2,
    color: "#6DBE45",
    desc: "We build high-performance websites and web portals that make strong first impressions. Whether it's a marketing site, corporate portal, or a complex client-facing platform, we combine clean code with compelling design to maximize engagement and results.",
    deliverables: [
      "Corporate websites",
      "E-commerce platforms",
      "Web portals and dashboards",
      "CMS integration (headless or traditional)",
      "SEO-optimized architecture",
      "Performance audits and optimization",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite", "WordPress"],
    metric: "300+ websites built",
  },
  {
    id: "cloud",
    title: "Cloud Infrastructure",
    tagline: "Secure. Scalable. Always On.",
    icon: Cloud,
    color: "#6DBE45",
    desc: "We architect, migrate, and manage cloud infrastructure that grows with your business. Our certified cloud engineers design resilient systems across AWS, Azure, and Google Cloud — ensuring maximum uptime, data security, and cost efficiency.",
    deliverables: [
      "Cloud migration strategy and execution",
      "Multi-cloud architecture design",
      "CI/CD pipeline setup",
      "Container orchestration (Kubernetes/Docker)",
      "Auto-scaling and load balancing",
      "24/7 infrastructure monitoring",
    ],
    tech: ["AWS", "Microsoft Azure", "Google Cloud", "Kubernetes", "Terraform", "Docker"],
    metric: "99.9% uptime SLA",
  },
  {
    id: "ai",
    title: "AI & Automation",
    tagline: "Intelligent Systems. Real Results.",
    icon: BrainCircuit,
    color: "#6DBE45",
    desc: "We integrate artificial intelligence and automation into your business workflows, enabling smarter decision-making, predictive insights, and significant operational efficiency gains. From natural language processing to machine learning pipelines, we make AI practical and impactful.",
    deliverables: [
      "Machine learning model development",
      "NLP and chatbot solutions",
      "Predictive analytics engines",
      "Business process automation (RPA)",
      "AI-powered dashboards",
      "Data pipeline architecture",
    ],
    tech: ["Python", "TensorFlow", "OpenAI", "LangChain", "Apache Spark", "FastAPI"],
    metric: "60% efficiency gains avg.",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    tagline: "Protect What Matters Most.",
    icon: ShieldCheck,
    color: "#6DBE45",
    desc: "In an era of escalating cyber threats, Gotecx delivers enterprise-grade security services that protect your systems, data, and reputation. Our security specialists assess vulnerabilities, implement controls, and maintain ongoing protection against advanced threats.",
    deliverables: [
      "Penetration testing and vulnerability assessment",
      "Security architecture design",
      "Endpoint and network protection",
      "Compliance frameworks (ISO, GDPR, HIPAA)",
      "Security awareness training",
      "Incident response planning",
    ],
    tech: ["SIEM", "Zero Trust", "OAuth 2.0", "SSL/TLS", "OWASP", "CIS Benchmarks"],
    metric: "Zero reported breaches",
  },
  {
    id: "analytics",
    title: "Data Analytics & BI",
    tagline: "Turn Data Into Competitive Advantage.",
    icon: BarChart3,
    color: "#6DBE45",
    desc: "We transform your raw data into actionable intelligence. Our data team builds end-to-end analytics platforms — from data warehouse design to real-time dashboards — giving your leadership team the visibility to make faster, smarter decisions.",
    deliverables: [
      "Data warehouse and lake architecture",
      "Real-time BI dashboards",
      "KPI reporting systems",
      "ETL pipeline development",
      "Business forecasting models",
      "Data governance frameworks",
    ],
    tech: ["Power BI", "Tableau", "Apache Kafka", "Snowflake", "dbt", "SQL"],
    metric: "10x faster decisions",
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    tagline: "Design That Converts. Experiences That Last.",
    icon: Palette,
    color: "#6DBE45",
    desc: "Great products start with great design. Our UX team applies research-driven methodologies to build interfaces that are intuitive, beautiful, and optimized for conversion. We design for real users — ensuring every interaction is purposeful and on-brand.",
    deliverables: [
      "UX research and user journey mapping",
      "Wireframing and prototyping",
      "Design systems and component libraries",
      "Brand identity design",
      "Usability testing",
      "Motion design and micro-interactions",
    ],
    tech: ["Figma", "Adobe XD", "Framer", "Storybook", "Lottie", "After Effects"],
    metric: "45% avg. UX improvement",
  },
  {
    id: "consulting",
    title: "IT Consulting",
    tagline: "Strategic Technology. Expert Guidance.",
    icon: Briefcase,
    color: "#6DBE45",
    desc: "We serve as your trusted technology advisor, helping you make the right architectural and strategic decisions. Whether you need a CTO-on-demand, a digital roadmap, or help evaluating technology vendors, our consultants bring deep enterprise experience.",
    deliverables: [
      "Digital transformation roadmap",
      "Technology stack assessment",
      "IT audit and gap analysis",
      "Vendor selection and evaluation",
      "CTO-as-a-Service",
      "Change management support",
    ],
    tech: ["TOGAF", "ITIL", "Agile", "PRINCE2", "OKRs", "Six Sigma"],
    metric: "150+ strategies delivered",
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    tagline: "Reach More. Convert Better.",
    icon: TrendingUp,
    color: "#6DBE45",
    desc: "We help businesses build a strong digital presence and drive measurable growth online. From SEO and content strategy to paid campaigns and social media, our marketing team aligns digital channels with your business objectives.",
    deliverables: [
      "SEO strategy and optimization",
      "Paid advertising (Google, Meta, LinkedIn)",
      "Content marketing and strategy",
      "Email marketing automation",
      "Social media management",
      "Analytics and conversion optimization",
    ],
    tech: ["Google Ads", "Meta Ads", "HubSpot", "Ahrefs", "Mailchimp", "GA4"],
    metric: "3x avg. ROI improvement",
  },
];

/* ─── process steps ─────────────────────────────────────────────── */
const process = [
  { num: "01", title: "Discovery & Scoping",   icon: Search,      desc: "We deep-dive into your business, goals, and challenges. Structured discovery sessions define scope, technical requirements, and success metrics." },
  { num: "02", title: "Strategy & Architecture",icon: Layers,      desc: "Our architects design the technology blueprint, select the optimal stack, and map the full development roadmap with milestones." },
  { num: "03", title: "Design & Prototyping",  icon: Palette,     desc: "UX designers create wireframes and interactive prototypes — tested with real users before a single line of production code is written." },
  { num: "04", title: "Development & Testing", icon: GitBranch,   desc: "Agile sprints with continuous integration. Code reviews, automated testing, and QA ensure we ship reliable, high-quality software." },
  { num: "05", title: "Launch & Deployment",   icon: Server,      desc: "We handle the full production deployment — infrastructure provisioning, monitoring setup, and a smooth, zero-downtime go-live." },
  { num: "06", title: "Support & Growth",      icon: TrendingUp,  desc: "Post-launch, we provide ongoing maintenance, feature development, performance monitoring, and dedicated technical support." },
];

/* ─── why us ────────────────────────────────────────────────────── */
const differentiators = [
  { icon: Award,      title: "Proven Track Record",    desc: "500+ projects delivered across 15+ countries. Enterprise clients trust Gotecx to deliver on time and on budget." },
  { icon: Users,      title: "Expert Engineering Teams", desc: "Senior engineers, designers, and consultants with deep domain expertise across every service we offer." },
  { icon: Zap,        title: "Agile Delivery",         desc: "Rapid sprints, continuous feedback loops, and transparent communication — we move fast without cutting corners." },
  { icon: Lock,       title: "Security by Design",     desc: "Security is embedded in every layer of what we build — from architecture to deployment and ongoing maintenance." },
  { icon: Clock,      title: "On-Time Delivery",       desc: "We set realistic timelines and we honor them. Rigorous project management ensures your project stays on track." },
  { icon: Settings,   title: "Post-Launch Support",    desc: "Our commitment doesn't end at launch. Every engagement includes structured handover, training, and ongoing support." },
];

const fade = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

import { useSEO } from "@/components/SEOHead";
export default function Services() {
  useSEO({
    title: "Services",
    description: "Gotecx delivers world-class technology services: consulting, implementation, managed services, training, and 24/7 support.",
    canonical: "/services",
  });


  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <div className="w-full bg-background overflow-hidden">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative py-28 bg-[#0D1421] text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "repeating-linear-gradient(rgba(109,190,69,0.04) 0 1px, transparent 1px 70px), repeating-linear-gradient(90deg, rgba(109,190,69,0.04) 0 1px, transparent 1px 70px)"
        }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 text-center relative z-10 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              <Zap className="w-3.5 h-3.5" /> Complete Technology Services
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Expert Services.<br />
              <span className="text-primary">Exceptional Results.</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-10">
              End-to-end technology services from strategy and design to engineering and deployment. Every service powered by specialists — every project built for lasting impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 font-bold">
                  Request a Consultation <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
              <a href="#services-grid">
                <Button variant="outline" className="rounded-full px-8 h-12 font-semibold border-white/20 text-white hover:bg-white/10">
                  View All Services
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────── */}
      <section className="py-14 bg-[#0D1421] border-b border-white/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: "10+",  label: "Service Lines",       icon: Layers },
              { num: "500+", label: "Projects Delivered",  icon: Award },
              { num: "15+",  label: "Countries Served",    icon: Globe2 },
              { num: "98%",  label: "Client Satisfaction", icon: CheckCircle2 },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
                className="flex flex-col items-center text-center p-5 rounded-2xl border border-white/10 bg-white/[0.03]">
                <s.icon className="w-6 h-6 text-primary mb-3" />
                <div className="text-3xl font-black text-white">{s.num}</div>
                <div className="text-xs text-white/40 font-bold uppercase tracking-wider mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ────────────────────────────────── */}
      <section id="services-grid" className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <div className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Our Services</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">What We Build & Deliver</h2>
            <p className="text-muted-foreground text-lg">Click any service to see full details — deliverables, technologies, and what you can expect.</p>
          </div>

          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {serviceList.map((svc, i) => (
              <motion.div
                key={svc.id}
                variants={fade}
                onClick={() => setActiveId(activeId === svc.id ? null : svc.id)}
                className={`group cursor-pointer rounded-2xl border transition-all ${
                  activeId === svc.id
                    ? "border-primary bg-primary/5 shadow-[0_0_30px_rgba(109,190,69,0.15)]"
                    : "border-border bg-card hover:border-primary/50 hover:shadow-lg hover:-translate-y-1"
                }`}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                      activeId === svc.id ? "bg-primary" : "bg-primary/10 group-hover:bg-primary/20"
                    }`}>
                      <svc.icon className={`w-6 h-6 transition-colors ${activeId === svc.id ? "text-white" : "text-primary"}`} />
                    </div>
                    <ChevronRight className={`w-4 h-4 text-muted-foreground transition-transform ${activeId === svc.id ? "rotate-90 text-primary" : "group-hover:translate-x-0.5"}`} />
                  </div>
                  <h3 className="font-bold text-base mb-1.5">{svc.title}</h3>
                  <p className="text-xs text-primary font-semibold mb-2">{svc.tagline}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{svc.desc}</p>
                </div>

                {/* Expanded detail */}
                <AnimatePresence initial={false}>
                  {activeId === svc.id && (
                    <motion.div
                      key="detail"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="px-6 pb-6 border-t border-primary/20 pt-4">
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{svc.desc}</p>
                        <div className="mb-4">
                          <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-2.5">Key Deliverables</h4>
                          <ul className="space-y-1.5">
                            {svc.deliverables.map((d, j) => (
                              <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" /> {d}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="mb-5">
                          <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-2.5">Technologies</h4>
                          <div className="flex flex-wrap gap-1.5">
                            {svc.tech.map(t => (
                              <span key={t} className="text-xs bg-primary/10 text-primary border border-primary/20 px-2.5 py-1 rounded-full font-medium">{t}</span>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-muted-foreground">{svc.metric}</span>
                          <Link href="/contact">
                            <button className="bg-primary hover:bg-primary/90 text-white text-xs font-bold rounded-full px-4 py-2 transition-colors">
                              Get a Quote
                            </button>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── DEEP-DIVE SHOWCASE: Featured 3 services ─────── */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-14">
            <div className="text-primary font-bold uppercase tracking-widest text-sm mb-3">In Depth</div>
            <h2 className="text-4xl font-bold mb-4">Core Capabilities</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">Our three most requested capabilities — built to enterprise grade from day one.</p>
          </div>

          <div className="space-y-16">
            {[
              {
                id: "software", title: "Software Engineering", icon: Code2,
                headline: "We don't just write code. We engineer solutions.",
                body: "From initial architecture decisions to production deployment, our engineering teams apply modern software development practices — clean architecture, test-driven development, code reviews, and continuous delivery — to build software that scales with your business for years to come.",
                points: ["Full-stack web and enterprise application development", "API-first architecture for interoperability", "Microservices and serverless design patterns", "DevOps, CI/CD, and infrastructure as code", "Legacy modernization and system migration"],
                metric1: { val: "200+", label: "Apps Delivered" },
                metric2: { val: "4.9/5", label: "Client Rating" },
              },
              {
                id: "cloud", title: "Cloud & Infrastructure", icon: Cloud,
                headline: "Infrastructure that works as hard as you do.",
                body: "Your business cannot afford downtime. We design cloud architectures on AWS, Azure, and Google Cloud that are fault-tolerant, auto-scaling, and cost-optimized. Whether you're starting from scratch or migrating legacy systems, our certified cloud engineers deliver the reliability your business depends on.",
                points: ["Cloud-native architecture design and review", "Zero-downtime migration strategies", "Kubernetes orchestration and container management", "Cost optimization and FinOps practices", "Disaster recovery and business continuity planning"],
                metric1: { val: "99.9%", label: "Uptime SLA" },
                metric2: { val: "40%", label: "Avg. Cost Savings" },
              },
              {
                id: "ai", title: "AI & Intelligent Automation", icon: BrainCircuit,
                headline: "Artificial intelligence. Real business impact.",
                body: "We make AI practical and measurable. Our data science and ML engineering teams build production-ready AI systems — not demos or prototypes. From predictive analytics and NLP-powered products to full robotic process automation, we identify where AI creates the most business value and we build it.",
                points: ["Predictive analytics and demand forecasting", "Natural language processing and document intelligence", "Computer vision and image recognition", "Workflow automation with RPA tools", "AI model fine-tuning, training, and deployment"],
                metric1: { val: "60%", label: "Avg. Efficiency Gain" },
                metric2: { val: "30+", label: "AI Projects Built" },
              },
            ].map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={i % 2 !== 0 ? "lg:col-start-2" : ""}>
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="text-primary font-bold uppercase tracking-widest text-xs mb-2">{item.title}</div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-5 leading-snug">{item.headline}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{item.body}</p>
                  <ul className="space-y-3 mb-8">
                    {item.points.map((p, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /> {p}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <button className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white rounded-full px-7 py-3 font-semibold transition-colors text-sm">
                      Discuss Your Project <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
                <div className={`${i % 2 !== 0 ? "lg:col-start-1 lg:row-start-1" : ""} rounded-3xl bg-[#0D1421] border border-white/10 p-10 flex items-center justify-center min-h-[320px] relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-[60px]" />
                  <div className="relative z-10 w-full">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center">
                        <div className="text-3xl font-black text-primary mb-1">{item.metric1.val}</div>
                        <div className="text-xs text-white/50 font-semibold">{item.metric1.label}</div>
                      </div>
                      <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center">
                        <div className="text-3xl font-black text-primary mb-1">{item.metric2.val}</div>
                        <div className="text-xs text-white/50 font-semibold">{item.metric2.label}</div>
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                      <item.icon className="w-8 h-8 text-primary mb-2" />
                      <div className="text-white font-bold text-sm">{item.title}</div>
                      <div className="text-white/50 text-xs mt-0.5">Gotecx Flagship Capability</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR PROCESS ──────────────────────────────────── */}
      <section className="py-24 bg-[#0D1421] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-14">
            <div className="text-primary font-bold uppercase tracking-widest text-sm mb-3">How We Deliver</div>
            <h2 className="text-4xl font-bold mb-4">Our Proven Process</h2>
            <p className="text-white/55 text-lg max-w-2xl mx-auto">A battle-tested 6-phase methodology that consistently delivers results — on time, within budget, and above expectations.</p>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((step, i) => (
              <motion.div key={i} variants={fade} className="relative p-7 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 hover:bg-white/[0.07] transition-all group">
                <div className="absolute top-5 right-5 text-6xl font-black text-white/[0.04] select-none group-hover:text-primary/10 transition-colors">{step.num}</div>
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-5 shadow-[0_0_20px_rgba(109,190,69,0.35)]">
                  <step.icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-primary font-bold text-xs uppercase tracking-widest mb-2">{step.num}</div>
                <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── WHY GOTECX ───────────────────────────────────── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-14">
            <div className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Why Choose Us</div>
            <h2 className="text-4xl font-bold mb-4">The Gotecx Difference</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">What makes our services different from every other technology provider.</p>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((d, i) => (
              <motion.div key={i} variants={fade} className="flex gap-5 p-7 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all group">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <d.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">{d.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────── */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">What Our Clients Say</h2>
            <p className="text-muted-foreground">Real outcomes from organizations we've partnered with.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { tag: "Software Dev",    org: "Enterprise Retail Chain, West Africa", quote: "The team delivered our inventory management platform in 8 weeks. It handles millions of transactions daily without a single failure." },
              { tag: "Cloud Migration", org: "Regional Medical Center",              quote: "Our patient data migration to the cloud was flawless. Zero downtime, zero data loss, and our team was fully trained on day one." },
              { tag: "IT Consulting",   org: "National University",                  quote: "The digital transformation roadmap they created gave our leadership team complete clarity on a 3-year technology strategy." },
            ].map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-7 rounded-2xl bg-background border border-border hover:border-primary/30 transition-colors">
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-4">{t.tag}</div>
                <p className="text-sm leading-relaxed italic text-muted-foreground mb-5">"{t.quote}"</p>
                <div className="text-sm font-bold">{t.org}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Common Questions</h2>
            <p className="text-muted-foreground">Everything you need to know about working with Gotecx.</p>
          </div>
          <div className="space-y-4">
            {[
              { q: "How long does a typical project take?",           a: "Project timelines vary by complexity. A standard web application takes 6–12 weeks. Enterprise platforms can range from 3–9 months. We provide detailed timelines during the scoping phase." },
              { q: "Do you work with startups or only enterprises?",  a: "We work with organizations of all sizes — from early-stage startups to large enterprises and government institutions. Our teams scale with your needs and budget." },
              { q: "How is pricing structured?",                      a: "We offer fixed-scope project pricing, time-and-materials engagements, and dedicated team retainers depending on your needs. All pricing is fully transparent with no hidden costs." },
              { q: "Do you provide ongoing maintenance after launch?",a: "Yes. All projects include a structured handover period, team training, and an optional ongoing support retainer for maintenance, updates, and performance monitoring." },
              { q: "Can you work with our existing internal team?",   a: "Absolutely. Many of our engagements are staff augmentation or co-development arrangements where our engineers work alongside your internal team." },
            ].map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-24 bg-[#0D1421] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(rgba(109,190,69,0.03) 0 1px, transparent 1px 70px), repeating-linear-gradient(90deg, rgba(109,190,69,0.03) 0 1px, transparent 1px 70px)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 max-w-3xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 className="text-4xl md:text-5xl font-black mb-5 leading-tight">Ready to Start Your Project?</h2>
            <p className="text-xl text-white/60 mb-10 max-w-xl mx-auto leading-relaxed">
              Our engineering teams are ready to tackle your most complex technology challenges. Let's build something great together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 h-13 font-bold">
                  Schedule a Consultation <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
              <a href="https://wa.me/231776836689" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="rounded-full px-10 h-13 font-bold border-white/20 text-white hover:bg-white/10">
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/40 transition-colors"
      >
        <span className="font-semibold text-sm leading-snug pr-4">{q}</span>
        <ChevronRight className={`w-4 h-4 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${open ? "rotate-90" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
