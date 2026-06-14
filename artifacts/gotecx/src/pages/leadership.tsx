import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail, Twitter, Globe, Quote, Star, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import founderImg from "@assets/generated_images/professional_corporate_portrait_of_d454.png";
import teamImg from "@assets/generated_images/diverse_multicultural_tech_team_1341.png";

export default function Leadership() {
  return (
    <div className="w-full bg-background overflow-hidden">

      {/* Hero */}
      <section className="relative py-28 bg-[#0D1421] text-white text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "repeating-linear-gradient(rgba(109,190,69,0.04) 0 1px, transparent 1px 60px), repeating-linear-gradient(90deg, rgba(109,190,69,0.04) 0 1px, transparent 1px 60px)"
        }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              <Star className="w-3.5 h-3.5" /> Our Leadership
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Guided by Vision.<br />
              <span className="text-primary">Driven by Impact.</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Meet the founder and executive director building the future of global technology through iTech Network Africa and Gotecx.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Feature Card */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl overflow-hidden border border-border shadow-2xl grid md:grid-cols-5"
          >
            {/* Photo side */}
            <div className="md:col-span-2 relative min-h-[420px] bg-[#0D1421] overflow-hidden">
              <img
                src={founderImg}
                alt="Wilmot Kerkulah"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1421] via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <div className="flex gap-3">
                  <a href="#" className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-primary transition-colors">
                    <Linkedin className="w-4 h-4 text-white" />
                  </a>
                  <a href="#" className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-primary transition-colors">
                    <Twitter className="w-4 h-4 text-white" />
                  </a>
                  <a href="mailto:itechnetworkafrica@gmail.com" className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-primary transition-colors">
                    <Mail className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Bio side */}
            <div className="md:col-span-3 bg-card p-10 lg:p-14 flex flex-col justify-center">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                Founder & Executive Director
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-2">Wilmot Kerkulah</h2>
              <p className="text-primary font-semibold mb-8 text-lg">iTech Network Africa · Gotecx</p>

              <div className="space-y-5 text-muted-foreground leading-relaxed mb-10">
                <p>
                  Wilmot Kerkulah is the Founder and Executive Director of iTech Network Africa and the visionary behind the Gotecx brand. Founded in Monrovia, Liberia, he established the organization to address the growing need for technology-driven business solutions that help organizations thrive in an increasingly digital world.
                </p>
                <p>
                  Driven by a deep passion for technology, innovation, entrepreneurship, and digital transformation, he created a company with a bold global vision — to leverage technology as a catalyst for business growth, innovation, efficiency, and sustainable development across Africa and around the world.
                </p>
                <p>
                  His leadership continues to guide the organization's mission of building innovative technology solutions that deliver meaningful impact locally and globally, with Gotecx serving as the flagship brand delivering these solutions to clients worldwide.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-10">
                {[
                  { num: "300+", label: "Businesses Served" },
                  { num: "15+", label: "Countries Reached" },
                  { num: "10+", label: "Years Experience" },
                ].map((stat, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-background border border-border text-center">
                    <div className="text-2xl font-bold text-primary">{stat.num}</div>
                    <div className="text-xs text-muted-foreground mt-1 leading-snug">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Link href="/about">
                <button className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-sm">
                  Learn more about our story <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote / Philosophy */}
      <section className="py-20 bg-[#0D1421]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <Quote className="w-12 h-12 text-primary/30 mx-auto mb-8" />
            <blockquote className="text-2xl md:text-3xl font-medium text-white leading-relaxed mb-8 italic">
              "We built Gotecx because we believe every business deserves world-class technology, regardless of where they are in the world. Our mission is to bridge that gap — from Monrovia to the global stage."
            </blockquote>
            <div className="text-primary font-bold">Wilmot Kerkulah</div>
            <div className="text-white/50 text-sm mt-1">Founder & Executive Director, iTech Network Africa</div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Leadership Philosophy</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every decision, every product, and every partnership.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Technology for All", desc: "World-class technology should be accessible to every organization, regardless of size or geography. We build for everyone.", icon: Globe },
              { title: "Impact Over Output", desc: "Success is measured not by lines of code, but by the transformation we create in the businesses and communities we serve.", icon: Star },
              { title: "Global Vision, Local Roots", desc: "Proudly founded in Liberia, our ambition is global. We bring a unique perspective that bridges local insight with international standards.", icon: Globe },
              { title: "Build for Tomorrow", desc: "Every solution we create is designed to scale — not just for today's needs, but for the challenges and opportunities of tomorrow.", icon: ArrowRight },
              { title: "Partnership First", desc: "We don't just build technology for clients — we build partnerships. Long-term success requires mutual growth, trust, and collaboration.", icon: Linkedin },
              { title: "Continuous Innovation", desc: "We embrace change, challenge the status quo, and continuously push the boundaries of what technology can achieve.", icon: Star },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="p-7 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Photo */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Building a World-Class Team</h2>
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                Under Wilmot's leadership, we are assembling a team of passionate technologists, designers, business strategists, and innovators united by one goal — to build technology that transforms businesses worldwide.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We're actively growing. If you're passionate about technology and want to be part of building the future, we'd love to hear from you.
              </p>
              <Link href="/careers">
                <button className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white rounded-full px-7 py-3 font-semibold transition-colors">
                  View Open Positions <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-2xl overflow-hidden border border-border shadow-xl"
            >
              <img src={teamImg} alt="Gotecx Team" className="w-full h-auto object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advisory Board Placeholder */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Advisory Board</h2>
          <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
            We are assembling a world-class advisory board of industry leaders, technology experts, and business innovators. Announcements coming soon.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {["Technology Advisor", "Business Strategy Advisor", "Global Markets Advisor"].map((role, i) => (
              <div key={i} className="p-8 rounded-2xl bg-card border border-dashed border-border">
                <div className="w-16 h-16 rounded-full bg-muted mx-auto mb-4" />
                <div className="font-semibold text-muted-foreground">{role}</div>
                <div className="text-sm text-muted-foreground/60 mt-1">Announcement Coming Soon</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0D1421] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">Partner with a team that's as committed to your success as you are.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-3 font-semibold transition-colors">
                Get in Touch
              </button>
            </Link>
            <Link href="/careers">
              <button className="border border-white/20 hover:border-primary hover:text-primary text-white rounded-full px-8 py-3 font-semibold transition-colors">
                Join Our Team
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
