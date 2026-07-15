import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Calendar, Clock, User, Mail, Phone, MessageSquare,
  CheckCircle2, ArrowRight, Briefcase, ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";

const serviceOptions = [
  "Software Development",
  "Mobile App Development",
  "Web Development",
  "Cloud Infrastructure",
  "AI & Automation",
  "Cybersecurity",
  "Data Analytics & BI",
  "UI/UX Design",
  "IT Consulting",
  "Digital Marketing",
  "Gotecx POS Platform",
  "Other / Not Sure Yet",
];

const timeSlots = [
  "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM",
  "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM",
  "04:00 PM", "05:00 PM",
];

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  date: string;
  time: string;
  message: string;
};

const empty: FormState = {
  firstName: "", lastName: "", email: "", phone: "",
  company: "", service: "", date: "", time: "", message: "",
};

export default function Booking() {
  const [form, setForm] = useState<FormState>(empty);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const set = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm(f => ({ ...f, [field]: e.target.value }));
    setErrors(er => ({ ...er, [field]: "" }));
  };

  const validate = () => {
    const e: Partial<FormState> = {};
    if (!form.firstName.trim())  e.firstName = "Required";
    if (!form.lastName.trim())   e.lastName  = "Required";
    if (!form.email.includes("@")) e.email   = "Valid email required";
    if (!form.phone.trim())      e.phone     = "Required";
    if (!form.service)           e.service   = "Please select a service";
    if (!form.date)              e.date      = "Please pick a date";
    if (!form.time)              e.time      = "Please pick a time";
    return e;
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    const text = encodeURIComponent(
      `*New Booking Request — Gotecx*\n\n` +
      `Name: ${form.firstName} ${form.lastName}\n` +
      `Email: ${form.email}\n` +
      `Phone: ${form.phone}\n` +
      `Company: ${form.company || "N/A"}\n` +
      `Service: ${form.service}\n` +
      `Preferred Date: ${form.date}\n` +
      `Preferred Time: ${form.time}\n` +
      `Message: ${form.message || "None"}`
    );
    window.open(`https://wa.me/231776836689?text=${text}`, "_blank");
    setSubmitted(true);
  };

  const inputBase = "w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder-muted-foreground";
  const inputStyle = (err?: string) =>
    `${inputBase} ${err ? "border-red-500 focus:border-red-500" : "border-border focus:border-primary"}`;

  return (
    <div className="w-full bg-background">

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative py-24 bg-[#0D1421] text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(rgba(109,190,69,0.04) 0 1px, transparent 1px 70px), repeating-linear-gradient(90deg, rgba(109,190,69,0.04) 0 1px, transparent 1px 70px)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 max-w-3xl text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              <Calendar className="w-3.5 h-3.5" /> Book a Consultation
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-5 leading-tight">
              Schedule Your Free<br />
              <span className="text-primary">Consultation</span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl mx-auto leading-relaxed">
              Book a free 30-minute strategy session with our team. Tell us about your project — we'll come prepared with ideas, a roadmap, and a clear path forward.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── TRUST STRIP ─────────────────────────────── */}
      <div className="bg-[#0D1421] border-b border-white/10 py-5">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: CheckCircle2, label: "Free, No-Obligation Session" },
              { icon: Clock,        label: "30 Minutes, Fully Prepared" },
              { icon: Briefcase,    label: "Senior Consultant Assigned" },
              { icon: Phone,        label: "WhatsApp Confirmation Sent" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-white/55 text-sm font-medium">
                <Icon className="w-4 h-4 text-primary" /> {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FORM ─────────────────────────────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          {submitted ? (
            /* Success State */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-lg mx-auto text-center py-20"
            >
              <div className="w-20 h-20 bg-primary/15 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-3xl font-black mb-4">Booking Request Sent!</h2>
              <p className="text-muted-foreground text-lg mb-3 leading-relaxed">
                Your booking request has been sent to our team via WhatsApp. We'll confirm your appointment within a few hours.
              </p>
              <p className="text-sm text-muted-foreground mb-8">
                You can also reach us directly at{" "}
                <a href="tel:+231776836689" className="text-primary font-semibold">+231 776 836 689</a>
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button onClick={() => { setForm(empty); setSubmitted(false); }}
                  className="bg-primary hover:bg-primary/90 text-white rounded-full px-7 py-3 font-semibold transition-colors text-sm">
                  Book Another Session
                </button>
                <Link href="/">
                  <button className="border border-border hover:border-primary/50 rounded-full px-7 py-3 font-semibold transition-colors text-sm">
                    Back to Home
                  </button>
                </Link>
              </div>
            </motion.div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-10">

              {/* Left: What to expect */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-1"
              >
                <h2 className="text-2xl font-bold mb-6">What to Expect</h2>
                <div className="space-y-6 mb-8">
                  {[
                    { step: "01", title: "Submit Your Request",   desc: "Fill in your details and preferred time. We confirm via WhatsApp." },
                    { step: "02", title: "Pre-Meeting Prep",      desc: "We review your business context and prepare tailored recommendations." },
                    { step: "03", title: "30-Min Strategy Call",  desc: "A focused session on your goals, challenges, and our proposed approach." },
                    { step: "04", title: "Custom Proposal",       desc: "We send a detailed proposal within 24 hours of the session." },
                  ].map((s, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0">
                        {s.step}
                      </div>
                      <div>
                        <h4 className="font-bold text-sm mb-1">{s.title}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-5 rounded-2xl bg-primary/5 border border-primary/20">
                  <h4 className="font-bold text-sm text-primary mb-2">Need immediate help?</h4>
                  <p className="text-xs text-muted-foreground mb-3">Contact us directly on WhatsApp or phone.</p>
                  <a href="https://wa.me/231776836689" target="_blank" rel="noopener noreferrer"
                    className="text-primary font-bold text-sm flex items-center gap-1.5 hover:gap-2.5 transition-all">
                    +231 776 836 689 <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>

              {/* Right: Form */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2"
              >
                <div className="bg-card border border-border rounded-3xl p-8 md:p-10">
                  <h2 className="text-2xl font-bold mb-7">Your Details</h2>
                  <form onSubmit={submit} noValidate className="space-y-5">

                    {/* Name row */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">First Name *</label>
                        <div className="relative">
                          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <input type="text" value={form.firstName} onChange={set("firstName")} placeholder="Wilmot"
                            className={`${inputStyle(errors.firstName)} pl-10`} />
                        </div>
                        {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">Last Name *</label>
                        <input type="text" value={form.lastName} onChange={set("lastName")} placeholder="Kerkulah"
                          className={inputStyle(errors.lastName)} />
                        {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                      </div>
                    </div>

                    {/* Email + Phone */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">Email Address *</label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <input type="email" value={form.email} onChange={set("email")} placeholder="you@company.com"
                            className={`${inputStyle(errors.email)} pl-10`} />
                        </div>
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">Phone / WhatsApp *</label>
                        <div className="relative">
                          <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <input type="tel" value={form.phone} onChange={set("phone")} placeholder="+231 776 836 689"
                            className={`${inputStyle(errors.phone)} pl-10`} />
                        </div>
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                      </div>
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">Company / Organization</label>
                      <div className="relative">
                        <Briefcase className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input type="text" value={form.company} onChange={set("company")} placeholder="Your organization name (optional)"
                          className={`${inputStyle()} pl-10`} />
                      </div>
                    </div>

                    {/* Service */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">Service Interested In *</label>
                      <div className="relative">
                        <Briefcase className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                        <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                        <select value={form.service} onChange={set("service")}
                          className={`${inputStyle(errors.service)} pl-10 pr-10 appearance-none cursor-pointer`}>
                          <option value="">Select a service...</option>
                          {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                      {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
                    </div>

                    {/* Date + Time */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">Preferred Date *</label>
                        <div className="relative">
                          <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                          <input
                            type="date"
                            value={form.date}
                            onChange={set("date")}
                            min={new Date().toISOString().split("T")[0]}
                            className={`${inputStyle(errors.date)} pl-10`}
                          />
                        </div>
                        {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">Preferred Time *</label>
                        <div className="relative">
                          <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                          <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                          <select value={form.time} onChange={set("time")}
                            className={`${inputStyle(errors.time)} pl-10 pr-10 appearance-none cursor-pointer`}>
                            <option value="">Select a time...</option>
                            {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
                          </select>
                        </div>
                        {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time}</p>}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">Tell Us About Your Project</label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-muted-foreground" />
                        <textarea
                          value={form.message}
                          onChange={set("message")}
                          rows={4}
                          placeholder="Brief description of your project, challenges, or goals..."
                          className={`${inputStyle()} pl-10 resize-none`}
                        />
                      </div>
                    </div>

                    <Button type="submit" size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl h-13 font-bold text-base shadow-[0_0_24px_rgba(109,190,69,0.3)]">
                      Book Consultation — Send via WhatsApp <ArrowRight className="w-5 h-5 ml-1" />
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Your booking request will be sent directly to our team via WhatsApp. We'll confirm your slot within a few hours.
                    </p>
                  </form>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
