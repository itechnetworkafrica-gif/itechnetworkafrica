import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, ArrowRight, Clock, Users, Globe2, X, CheckCircle2, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const events = [
  {
    id: "summit-2026",
    title: "Enterprise Tech Summit 2026",
    date: "August 15–17, 2026",
    time: "09:00 AM – 06:00 PM GST",
    type: "In-Person Conference",
    location: "Dubai, UAE",
    seats: "Limited — 500 Seats",
    desc: "Three days of keynotes, workshops, and networking sessions on the future of enterprise technology across Africa and the Middle East.",
    topics: ["Digital Transformation", "AI in Enterprise", "Cloud Strategy", "Cybersecurity"],
  },
  {
    id: "pos-unveil",
    title: "Gotecx POS Global Unveil",
    date: "September 02, 2026",
    time: "02:00 PM – 04:00 PM WAT",
    type: "Virtual Keynote",
    location: "Online (Zoom)",
    seats: "Open Registration",
    desc: "Join us for the worldwide launch of Gotecx POS 2.0 — packed with AI-powered analytics, multi-currency support, and a redesigned interface.",
    topics: ["Gotecx POS 2.0", "Retail Technology", "Live Demo", "Q&A Session"],
  },
  {
    id: "cloud-workshop",
    title: "Securing Cloud Infrastructure in Finance",
    date: "September 20, 2026",
    time: "10:00 AM – 01:00 PM WAT",
    type: "Technical Workshop",
    location: "Online (Zoom)",
    seats: "Open Registration",
    desc: "A hands-on workshop for IT professionals and CTOs on hardening cloud infrastructure, compliance frameworks, and zero-trust architecture in financial services.",
    topics: ["Zero Trust", "Compliance", "AWS Security", "Pen Testing"],
  },
  {
    id: "itech-innovation-day",
    title: "iTech Network Africa Innovation Day",
    date: "October 10, 2026",
    time: "08:00 AM – 05:00 PM EAT",
    type: "In-Person Event",
    location: "Nairobi, Kenya",
    seats: "Limited — 200 Seats",
    desc: "Celebrating African tech innovation with product showcases, startup pitches, and strategic panels on technology-driven development across the continent.",
    topics: ["African Innovation", "Startup Showcase", "Product Demos", "Networking"],
  },
  {
    id: "ai-masterclass",
    title: "AI Integration Masterclass",
    date: "November 05, 2026",
    time: "11:00 AM – 02:00 PM WAT",
    type: "Virtual Workshop",
    location: "Online (Zoom)",
    seats: "Open Registration",
    desc: "A practical 3-hour masterclass on integrating AI tools into existing business operations — from LLM-powered workflows to computer vision use cases.",
    topics: ["LLM Integration", "AI Workflow", "Machine Learning", "Live Coding"],
  },
  {
    id: "gotecx-partner-summit",
    title: "Gotecx Partner Summit 2026",
    date: "December 03, 2026",
    time: "09:00 AM – 04:00 PM GMT",
    type: "In-Person & Virtual",
    location: "Monrovia, Liberia + Online",
    seats: "Partners Only",
    desc: "Annual gathering for Gotecx partners and resellers. Covers 2027 roadmap, co-sell programs, new certifications, and exclusive partner benefits.",
    topics: ["2027 Roadmap", "Partner Program", "Certifications", "Co-Sell"],
  },
];

type RegistrationForm = {
  firstName: string; lastName: string; email: string;
  phone: string; org: string; role: string;
};
const emptyForm: RegistrationForm = { firstName: "", lastName: "", email: "", phone: "", org: "", role: "" };

function RegistrationFormPanel({
 event, onClose }: { event: typeof events[0]; onClose: () => void }) {
  const [form, setForm] = useState<RegistrationForm>(emptyForm);
  const [errors, setErrors] = useState<Partial<RegistrationForm>>({});
  const [done, setDone] = useState(false);

  const set = (k: keyof RegistrationForm) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [k]: e.target.value }));
    setErrors(er => ({ ...er, [k]: "" }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const err: Partial<RegistrationForm> = {};
    if (!form.firstName.trim()) err.firstName = "Required";
    if (!form.lastName.trim())  err.lastName  = "Required";
    if (!form.email.includes("@")) err.email  = "Valid email required";
    if (!form.phone.trim())     err.phone     = "Required";
    if (Object.keys(err).length) { setErrors(err); return; }

    const text = encodeURIComponent(
      `*Event Registration — ${event.title}*\n\n` +
      `Name: ${form.firstName} ${form.lastName}\n` +
      `Email: ${form.email}\n` +
      `Phone: ${form.phone}\n` +
      `Organization: ${form.org || "N/A"}\n` +
      `Role: ${form.role || "N/A"}\n` +
      `Event: ${event.title}\n` +
      `Date: ${event.date}\n` +
      `Location: ${event.location}`
    );
    window.open(`https://wa.me/231776836689?text=${text}`, "_blank");
    setDone(true);
  };

  const inp = (err?: string) =>
    `w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors placeholder-muted-foreground bg-background ${err ? "border-red-500" : "border-border focus:border-primary"}`;

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      style={{ overflow: "hidden" }}
    >
      <div className="border-t border-border bg-background/60 px-8 pb-8 pt-6">
        {done ? (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
            <div className="w-16 h-16 bg-primary/15 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Registration Submitted!</h3>
            <p className="text-sm text-muted-foreground mb-1">Your registration for <strong>{event.title}</strong> was sent via WhatsApp.</p>
            <p className="text-sm text-muted-foreground">We'll confirm your spot shortly.</p>
            <button onClick={onClose} className="mt-5 text-sm text-primary font-semibold hover:underline">Close</button>
          </motion.div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-5">
              <h4 className="font-bold text-base">Register for This Event</h4>
              <button onClick={onClose} className="w-8 h-8 rounded-lg hover:bg-muted flex items-center justify-center transition-colors">
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
            <form onSubmit={submit} noValidate className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">First Name *</label>
                  <input type="text" value={form.firstName} onChange={set("firstName")} placeholder="John" className={inp(errors.firstName)} />
                  {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">Last Name *</label>
                  <input type="text" value={form.lastName} onChange={set("lastName")} placeholder="Smith" className={inp(errors.lastName)} />
                  {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">Email Address *</label>
                  <input type="email" value={form.email} onChange={set("email")} placeholder="you@company.com" className={inp(errors.email)} />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">Phone / WhatsApp *</label>
                  <input type="tel" value={form.phone} onChange={set("phone")} placeholder="+1 234 567 8900" className={inp(errors.phone)} />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">Organization</label>
                  <input type="text" value={form.org} onChange={set("org")} placeholder="Your company name" className={inp()} />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">Job Role</label>
                  <div className="relative">
                    <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                    <select value={form.role} onChange={set("role")} className={`${inp()} appearance-none cursor-pointer pr-10`}>
                      <option value="">Select your role...</option>
                      {["CEO / Founder", "CTO / IT Director", "Developer / Engineer", "Product Manager", "Business Analyst", "Student", "Other"].map(r => (
                        <option key={r} value={r}>{r}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <button type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl py-3.5 font-bold text-sm transition-colors flex items-center justify-center gap-2">
                Confirm Registration — Send via WhatsApp <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-muted-foreground text-center">
                Registration is confirmed via WhatsApp. You'll receive a confirmation from our team shortly.
              </p>
            </form>
          </>
        )}
      </div>
    </motion.div>
  );
}

import { useSEO } from "@/components/SEOHead";
export default function Events() {
  useSEO({
    title: "Events",
    description: "Discover upcoming Gotecx events, conferences, webinars, and industry summits. Connect with our global technology community.",
    canonical: "/events",
  });

  const [openForm, setOpenForm] = useState<string | null>(null);

  const toggle = (id: string) => setOpenForm(prev => (prev === id ? null : id));

  return (
    <div className="w-full bg-background">

      {/* ── HERO ─────────────────────────────────── */}
      <section className="relative py-28 bg-[#0D1421] text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(rgba(109,190,69,0.04) 0 1px, transparent 1px 70px), repeating-linear-gradient(90deg, rgba(109,190,69,0.04) 0 1px, transparent 1px 70px)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 text-center relative z-10 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              <Calendar className="w-3.5 h-3.5" /> Events & Webinars 2026
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-5 leading-tight">
              Connect. Learn.<br /><span className="text-primary">Grow Together.</span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl mx-auto leading-relaxed">
              Join Gotecx and iTech Network Africa at world-class conferences, hands-on workshops, and virtual summits across the globe.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── EVENTS LIST ─────────────────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-5">
            {events.map((evt, i) => (
              <motion.div
                key={evt.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className={`rounded-2xl border transition-all overflow-hidden ${openForm === evt.id ? "border-primary shadow-[0_0_24px_rgba(109,190,69,0.12)]" : "border-border hover:border-primary/50"} bg-card`}
              >
                <div className="p-7 md:p-8">
                  <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[11px] font-bold uppercase tracking-wider">
                          {evt.type}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground text-[11px] font-semibold uppercase tracking-wider">
                          {evt.seats}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{evt.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-lg">{evt.desc}</p>
                      <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-primary" /> {evt.date}</span>
                        <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-primary" /> {evt.time}</span>
                        <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> {evt.location}</span>
                      </div>
                      {/* Topics */}
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {evt.topics.map(t => (
                          <span key={t} className="text-[11px] px-2.5 py-1 rounded-full bg-background border border-border text-muted-foreground font-medium">{t}</span>
                        ))}
                      </div>
                    </div>
                    <button
                      onClick={() => toggle(evt.id)}
                      className={`flex-shrink-0 flex items-center gap-2 rounded-full px-7 py-3 font-bold text-sm transition-all ${
                        openForm === evt.id
                          ? "bg-primary/10 text-primary border border-primary/40"
                          : "bg-primary hover:bg-primary/90 text-white"
                      }`}
                    >
                      {openForm === evt.id ? "Close Form" : "Register Now"}
                      <motion.span animate={{ rotate: openForm === evt.id ? 180 : 0 }} transition={{ duration: 0.2 }}>
                        <ChevronDown className="w-4 h-4" />
                      </motion.span>
                    </button>
                  </div>
                </div>

                {/* Inline registration form */}
                <AnimatePresence initial={false}>
                  {openForm === evt.id && (
                    <RegistrationFormPanel key="form" event={evt} onClose={() => setOpenForm(null)} />
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPEAK / SPONSOR CTA ──────────────────── */}
      <section className="py-16 bg-[#0D1421] border-t border-white/10">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Want to Speak or Sponsor?</h2>
            <p className="text-white/55 mb-7 max-w-lg mx-auto text-sm leading-relaxed">
              We're looking for speakers, sponsors, and partners for our 2026 events. Get your brand in front of thousands of enterprise technology leaders.
            </p>
            <a href="https://wa.me/231776836689" target="_blank" rel="noopener noreferrer">
              <button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-3 font-bold text-sm transition-colors inline-flex items-center gap-2">
                Get in Touch <ArrowRight className="w-4 h-4" />
              </button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
