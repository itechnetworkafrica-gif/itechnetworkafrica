import React from "react";
import { motion } from "framer-motion";
import { Zap, Target, Shield, HeartHandshake, Users, BookOpen, Globe2, ArrowRight, CheckCircle2, Quote } from "lucide-react";
import { Link } from "wouter";
import teamImg from "@assets/generated_images/diverse_multicultural_tech_team_1341.png";
import founderImg from "@assets/1777816891225_1784147053274.png";

const values = [
  { title: "Innovation", desc: "We continuously explore new ideas, technologies, and opportunities that create value for our customers and communities.", icon: Zap },
  { title: "Excellence", desc: "We are committed to delivering high-quality solutions, services, and experiences that exceed expectations.", icon: Target },
  { title: "Integrity", desc: "We operate with honesty, transparency, professionalism, and accountability in everything we do.", icon: Shield },
  { title: "Customer Success", desc: "Our success is measured by the success of the organizations and communities we serve.", icon: HeartHandshake },
  { title: "Collaboration", desc: "We believe meaningful innovation is achieved through partnerships, teamwork, and shared knowledge.", icon: Users },
  { title: "Continuous Improvement", desc: "We embrace learning, growth, and adaptation to remain at the forefront of technological advancement.", icon: BookOpen },
];

const milestones = [
  { year: "2020", title: "Founded", desc: "iTech Network Africa established in Monrovia, Liberia by Wilmot Kerkulah." },
  { year: "2021", title: "First Solutions", desc: "Launched initial technology consulting and software development services." },
  { year: "2022", title: "Expanded Services", desc: "Grew into cloud infrastructure, cybersecurity, and digital marketing." },
  { year: "2023", title: "Gotecx Launched", desc: "Gotecx established as the flagship global technology brand." },
  { year: "2024", title: "Going Global", desc: "Expanded reach to clients across Africa, Europe, and the Americas." },
  { year: "2025", title: "Product Platform", desc: "Gotecx POS launched — enterprise point-of-sale and business management." },
  { year: "2026", title: "Global Ecosystem", desc: "Building the complete Gotecx technology ecosystem for worldwide deployment." },
];

export default function About() {
  return (
    <div className="w-full bg-background overflow-hidden">

      {/* Hero */}
      <section className="relative py-28 bg-[#0D1421] text-white text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "repeating-linear-gradient(rgba(109,190,69,0.04) 0 1px, transparent 1px 60px), repeating-linear-gradient(90deg, rgba(109,190,69,0.04) 0 1px, transparent 1px 60px)"
        }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              <Globe2 className="w-3.5 h-3.5" /> About Us
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Building the Future<br />
              <span className="text-primary">Through Technology</span>
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              Founded in Monrovia, Liberia. Built for the world. Empowering businesses through innovation, digital transformation, and intelligent technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About iTech Network Africa */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="text-primary font-bold uppercase tracking-widest text-sm mb-4">The Parent Company</div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">About iTech Network Africa</h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
                <p>
                  Founded in Monrovia, Liberia by <strong className="text-foreground">Wilmot Kerkulah</strong>, iTech Network Africa is a technology company established to empower businesses, organizations, institutions, and communities through innovative digital solutions and technology-driven transformation.
                </p>
                <p>
                  Under his leadership as Founder and Executive Director, the organization was created with a bold vision: to leverage technology as a catalyst for business growth, innovation, efficiency, and sustainable development across Africa and around the world.
                </p>
                <p>
                  As the parent company, iTech Network Africa drives the strategic direction, innovation, and development of technology solutions designed to address real-world challenges and unlock new opportunities for organizations of all sizes.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/contact">
                  <button className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white rounded-full px-7 py-3 font-semibold transition-colors">
                    Work With Us <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
                <Link href="/leadership">
                  <button className="inline-flex items-center gap-2 border border-border hover:border-primary hover:text-primary rounded-full px-7 py-3 font-semibold transition-colors">
                    Meet Our Founder
                  </button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden border border-border shadow-2xl">
                <img src={teamImg} alt="iTech Network Africa Team" className="w-full h-auto" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-5 shadow-xl">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Countries Reached</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-primary rounded-2xl p-5 shadow-xl text-white">
                <div className="text-3xl font-bold">300+</div>
                <div className="text-sm opacity-80">Businesses Served</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gotecx Brand */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-2 lg:order-1 rounded-3xl overflow-hidden bg-[#0D1421] p-10 relative"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
              <div className="grid grid-cols-2 gap-4 relative z-10">
                {[
                  "Software Platforms", "Business Management", "Digital Transformation",
                  "AI Technologies", "Cloud Services", "Cybersecurity"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-white/80 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="order-1 lg:order-2">
              <div className="text-primary font-bold uppercase tracking-widest text-sm mb-4">The Flagship Brand</div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Gotecx — Our Global Technology Ecosystem</h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
                <p>
                  To support the vision of iTech Network Africa, Gotecx was established as its flagship global technology brand. Gotecx serves as the customer-facing technology ecosystem through which software platforms, business management solutions, digital transformation services, artificial intelligence technologies, and future innovations are delivered to clients worldwide.
                </p>
                <p>
                  Together, iTech Network Africa and Gotecx operate under one vision, one mission, and one set of values — united by a commitment to empowering businesses through technology.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "repeating-linear-gradient(rgba(255,255,255,0.04) 0 1px, transparent 1px 40px), repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 40px)"
        }} />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="text-white/60 font-bold uppercase tracking-widest text-xs mb-4">Our Vision</div>
              <h2 className="text-3xl font-bold mb-6">Where We're Going</h2>
              <p className="text-lg leading-relaxed opacity-90">
                To become a globally recognized technology company that empowers businesses, organizations, and communities through innovative digital solutions that create lasting impact and sustainable growth.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="text-white/60 font-bold uppercase tracking-widest text-xs mb-4">Our Mission</div>
              <h2 className="text-3xl font-bold mb-6">Why We Exist</h2>
              <p className="text-lg leading-relaxed opacity-90">
                To deliver world-class technology solutions that drive innovation, improve efficiency, accelerate growth, and create long-term value for organizations worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">The principles that define who we are, how we work, and why organizations around the world trust us.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="p-8 rounded-2xl bg-card border border-border hover:border-primary/40 group transition-all hover:shadow-lg"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Story</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">From a bold idea in Monrovia, Liberia to a global technology ecosystem.</p>
          </div>
          <div className="relative">
            <div className="absolute left-[50%] top-0 bottom-0 w-px bg-border hidden md:block" />
            <div className="space-y-8">
              {milestones.map((milestone, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className={`flex items-center gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className={`md:w-[calc(50%-28px)] ${i % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"}`}>
                    <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-colors">
                      <div className="text-primary font-bold text-sm mb-1 uppercase tracking-widest">{milestone.year}</div>
                      <div className="font-bold text-lg mb-2">{milestone.title}</div>
                      <div className="text-muted-foreground text-sm leading-relaxed">{milestone.desc}</div>
                    </div>
                  </div>
                  <div className="hidden md:flex w-14 h-14 rounded-full bg-primary text-white font-bold text-sm items-center justify-center flex-shrink-0 z-10 shadow-lg shadow-primary/30">
                    {milestone.year.slice(2)}
                  </div>
                  <div className="md:w-[calc(50%-28px)]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Founder Spotlight</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Wilmot Kerkulah</h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-lg">Founder & Executive Director, iTech Network Africa</p>
              <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                <p>
                  Wilmot Kerkulah is the driving force behind iTech Network Africa and the Gotecx brand. His vision — that technology should be the great equalizer, enabling businesses of all sizes in all parts of the world to compete and thrive — shapes every product, service, and partnership the company pursues.
                </p>
                <p>
                  From founding the company in Monrovia, Liberia, to building a global technology ecosystem, his journey is proof that world-class innovation can emerge from anywhere.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border">
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <p className="text-lg font-medium italic leading-relaxed">
                  "Empowering businesses through technology isn't just our mission — it's our purpose. Every solution we build is a step toward a more connected and equitable digital world."
                </p>
                <div className="mt-4 text-primary font-semibold text-sm">— Wilmot Kerkulah</div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden border border-border shadow-2xl aspect-[4/5]">
                <img src={founderImg} alt="Wilmot Kerkulah" className="w-full h-full object-cover object-top" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-white rounded-2xl p-4 shadow-xl">
                <div className="text-sm font-bold">Founded in</div>
                <div className="text-lg font-bold">Monrovia, Liberia</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Vision */}
      <section className="py-24 bg-[#0D1421] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-primary/5 pointer-events-none" />
        <div className="container mx-auto px-4 max-w-5xl text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <Globe2 className="w-16 h-16 text-primary mx-auto mb-8 opacity-80" />
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Our Global Vision</h2>
            <p className="text-xl text-white/70 leading-relaxed mb-8 max-w-4xl mx-auto">
              While proudly founded in Liberia, our vision extends far beyond borders. We are building a technology ecosystem designed to serve businesses, startups, SMEs, enterprises, NGOs, educational institutions, and governments around the world. Through innovation, collaboration, and a commitment to excellence, iTech Network Africa and Gotecx are working to become trusted global technology partners — helping organizations everywhere embrace the future with confidence.
            </p>
            <div className="text-primary text-2xl font-bold tracking-wide">Empowering Businesses Through Technology.</div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto text-lg">
            Join hundreds of organizations around the world powered by Gotecx and iTech Network Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-3.5 font-semibold transition-colors">
                Get in Touch <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link href="/solutions">
              <button className="inline-flex items-center gap-2 border border-border hover:border-primary hover:text-primary rounded-full px-8 py-3.5 font-semibold transition-colors">
                Explore Solutions
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
