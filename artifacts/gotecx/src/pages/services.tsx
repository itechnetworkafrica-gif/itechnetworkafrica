import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Code, Smartphone, LayoutDashboard, Cloud, Palette, Target, Megaphone, ShieldAlert, Users, Network, Cpu, BrainCircuit, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Services() {
  const services = [
    { id: "web", title: "Website Development", icon: LayoutDashboard, desc: "High-performance, scalable web platforms built on modern frameworks." },
    { id: "mobile", title: "Mobile App Development", icon: Smartphone, desc: "Native and cross-platform mobile experiences for iOS and Android." },
    { id: "software", title: "Software Development", icon: Code, desc: "Custom software solutions engineered to solve complex business challenges." },
    { id: "cloud", title: "Cloud Infrastructure", icon: Cloud, desc: "Secure, scalable cloud architecture and migration services." },
    { id: "uiux", title: "UI/UX Design", icon: Palette, desc: "Data-driven design that prioritizes user engagement and conversion." },
    { id: "branding", title: "Branding", icon: Target, desc: "Strategic brand identity development for the digital age." },
    { id: "marketing", title: "Digital Marketing", icon: Megaphone, desc: "Performance marketing, SEO, and digital growth strategies." },
    { id: "cybersecurity", title: "Cybersecurity", icon: ShieldAlert, desc: "Enterprise-grade threat protection, auditing, and compliance." },
    { id: "consulting", title: "IT Consulting", icon: Users, desc: "Strategic technology roadmapping and digital transformation guidance." },
    { id: "enterprise", title: "Enterprise Consulting", icon: Network, desc: "Large-scale technology integration and organizational change management." },
    { id: "automation", title: "Business Automation", icon: Cpu, desc: "Workflow optimization and robotic process automation (RPA)." },
    { id: "ai", title: "AI Integration", icon: BrainCircuit, desc: "Deploying artificial intelligence to unlock new operational capabilities." },
  ];

  return (
    <div className="w-full bg-background">
      <section className="py-24 bg-[#1A2035] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Expert Services</h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              End-to-end technology services. From strategic consulting to custom software engineering, we build the infrastructure of tomorrow.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((svc, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary transition-all shadow-sm flex flex-col h-full"
                id={svc.id}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <svc.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3">{svc.title}</h3>
                <p className="text-muted-foreground flex-1 mb-8">{svc.desc}</p>
                <Link href="/contact" className="text-sm font-bold text-foreground group-hover:text-primary flex items-center gap-2 transition-all">
                  Inquire Now <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-16">Our Engineering Process</h2>
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-border -z-10"></div>
            {[
              { step: "01", title: "Discovery", desc: "Deep dive into your business objectives and technical requirements." },
              { step: "02", title: "Architecture", desc: "Designing scalable systems and mapping out the development roadmap." },
              { step: "03", title: "Execution", desc: "Agile development sprints with continuous testing and feedback." },
              { step: "04", title: "Deployment", desc: "Seamless rollout, team training, and ongoing proactive support." }
            ].map((phase, i) => (
              <div key={i} className="bg-background border border-border p-8 rounded-2xl relative z-10 shadow-sm">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-6 shadow-lg shadow-primary/30">{phase.step}</div>
                <h3 className="font-bold text-xl mb-3">{phase.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to start your project?</h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">Our engineering teams are ready to tackle your most complex technology challenges.</p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="rounded-full px-10 h-14 text-lg font-bold">Schedule a Consultation</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
