import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const INQUIRY_TYPES = [
  "Sales Inquiry",
  "Technical Support",
  "Partnership Request",
  "Careers",
  "General Information",
] as const;

type InquiryType = (typeof INQUIRY_TYPES)[number];

interface FormState {
  first_name: string;
  last_name: string;
  email: string;
  company: string;
  inquiry_type: InquiryType;
  message: string;
}

const empty: FormState = {
  first_name: "",
  last_name: "",
  email: "",
  company: "",
  inquiry_type: "General Information",
  message: "",
};

type Status = "idle" | "loading" | "success" | "error";

import { useSEO } from "@/components/SEOHead";
export default function Contact() {
  useSEO({
    title: "Contact Us",
    description: "Get in touch with Gotecx. Phone: +231 776 836 689 | Email: itechnetworkafrica@gmail.com.",
    canonical: "/contact",
  });


  const [form, setForm] = useState<FormState>(empty);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function set(field: keyof FormState) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await res.json()) as { success?: boolean; error?: string };

      if (!res.ok || !data.success) {
        throw new Error(data.error ?? "Submission failed");
      }

      setStatus("success");
      setForm(empty);
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  const inputCls =
    "w-full bg-background border border-border rounded-xl px-5 py-4 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-lg";

  return (
    <div className="w-full bg-background">
      <section className="py-24 bg-[#0D1421] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Our global team is ready to assist you with sales, support, and partnership inquiries.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Contact info */}
            <div className="lg:col-span-1 space-y-10">
              <div>
                <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>

                <div className="space-y-8">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-lg mb-1">Phone</div>
                      <div className="text-muted-foreground text-lg">+231 776 836 689</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-lg mb-1">Email</div>
                      <div className="text-muted-foreground text-lg">itechnetworkafrica@gmail.com</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-6 h-6 text-[#25D366]" />
                    </div>
                    <div>
                      <div className="font-bold text-lg mb-1">WhatsApp</div>
                      <a
                        href="https://wa.me/231776836689"
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground hover:text-[#25D366] transition-colors text-lg"
                      >
                        Message us on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response time badge */}
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
                <div className="text-primary font-bold text-sm uppercase tracking-wider mb-2">
                  Average Response Time
                </div>
                <div className="text-3xl font-bold">Under 24 Hours</div>
                <div className="text-muted-foreground mt-1 text-sm">
                  Monday – Friday, 8 AM – 6 PM (GMT)
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-border rounded-[2rem] p-10 md:p-14 shadow-xl">
                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-16 gap-6"
                  >
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle className="w-10 h-10 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold mb-3">Message Sent</h3>
                      <p className="text-muted-foreground text-lg max-w-md">
                        Thank you for reaching out. Our team will review your inquiry and
                        get back to you within one business day.
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="lg"
                      className="rounded-xl mt-2"
                      onClick={() => setStatus("idle")}
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="text-3xl font-bold mb-10">Send a Message</h3>

                    {status === "error" && (
                      <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 text-red-500 rounded-xl px-5 py-4 mb-8">
                        <AlertCircle className="w-5 h-5 shrink-0" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <label className="text-sm font-bold text-foreground uppercase tracking-wider">
                            First Name <span className="text-primary">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            className={inputCls}
                            placeholder="John"
                            value={form.first_name}
                            onChange={set("first_name")}
                          />
                        </div>
                        <div className="space-y-3">
                          <label className="text-sm font-bold text-foreground uppercase tracking-wider">
                            Last Name <span className="text-primary">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            className={inputCls}
                            placeholder="Doe"
                            value={form.last_name}
                            onChange={set("last_name")}
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <label className="text-sm font-bold text-foreground uppercase tracking-wider">
                            Email Address <span className="text-primary">*</span>
                          </label>
                          <input
                            type="email"
                            required
                            className={inputCls}
                            placeholder="john@company.com"
                            value={form.email}
                            onChange={set("email")}
                          />
                        </div>
                        <div className="space-y-3">
                          <label className="text-sm font-bold text-foreground uppercase tracking-wider">
                            Company
                          </label>
                          <input
                            type="text"
                            className={inputCls}
                            placeholder="Acme Corp (optional)"
                            value={form.company}
                            onChange={set("company")}
                          />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <label className="text-sm font-bold text-foreground uppercase tracking-wider">
                          Inquiry Type <span className="text-primary">*</span>
                        </label>
                        <select
                          required
                          className={inputCls + " appearance-none cursor-pointer"}
                          value={form.inquiry_type}
                          onChange={set("inquiry_type")}
                        >
                          {INQUIRY_TYPES.map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-3">
                        <label className="text-sm font-bold text-foreground uppercase tracking-wider">
                          Message <span className="text-primary">*</span>
                        </label>
                        <textarea
                          rows={6}
                          required
                          minLength={10}
                          className={inputCls + " resize-none"}
                          placeholder="How can we help you? (at least 10 characters)"
                          value={form.message}
                          onChange={set("message")}
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        disabled={status === "loading"}
                        className="w-full rounded-xl bg-primary hover:bg-primary/90 font-bold h-16 text-lg"
                      >
                        {status === "loading" ? (
                          <span className="flex items-center gap-3">
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Sending...
                          </span>
                        ) : (
                          "Send Message"
                        )}
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
