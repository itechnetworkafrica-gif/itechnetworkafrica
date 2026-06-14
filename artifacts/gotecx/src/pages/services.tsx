import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Code, Smartphone, LayoutDashboard, Cloud, Palette, Target, Megaphone, ShieldAlert, Users, Network, Cpu, BrainCircuit, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Services() {
  const services = [
    { title: "Website Development", icon: LayoutDashboard, desc: "High-performance, scalable web platforms built on modern frameworks." },
    { title: "Mobile App Development", icon: Smartphone, desc: "Native and cross-platform mobile experiences for iOS and Android." },
    { title: "Software Development", icon: Code, desc: "Custom software solutions engineered to solve complex business challenges." },
    { title: "Cloud Infrastructure", icon: Cloud, desc: "Secure, scalable cloud architecture and migration services." },
    { title: "UI/UX Design", icon: Palette, desc: "Data-driven design that prioritizes user engagement and conversion." },
    { title: "Branding", icon: Target, desc: "Strategic brand identity development for the digital age." },
    { title: "Digital Marketing", icon: Megaphone, desc: "Performance marketing, SEO, and digital growth strategies." },
    { title: "Cybersecurity", icon: ShieldAlert, desc: "Enterprise-grade threat protection, auditing, and compliance." },
    { title: "IT Consulting", icon: Users, desc: "Strategic technology roadmapping and digital transformation guidance." },
    { title: "Enterprise Consulting", icon: Network, desc: "Large-scale technology integration and organizational change management." },
    { title: "Business Automation", icon: Cpu, desc: "Workflow optimization and robotic process automation (RPA)." },
    { title: "AI Integration", icon: BrainCircuit, desc: "Deploying artificial intelligence to unlock new operational capabilities." },
  ];

  return (
    <div className="w-full">
      {/* Hero */}
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

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((svc, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary transition-all hover:shadow-lg flex flex-col h-full"
                id={svc.title.toLowerCase().split(' ')[0]}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svc.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{svc.title}</h3>
                <p className="text-muted-foreground flex-1 mb-6">{svc.desc}</p>
                <Link href="/contact" className="text-sm font-bold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                  Inquire Now <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
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
              <div key={i} className="bg-background border border-border p-6 rounded-xl relative z-10">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4 -mt-10 border-4 border-card">{phase.step}</div>
                <h3 className="font-bold text-lg mb-2">{phase.title}</h3>
                <p className="text-sm text-muted-foreground">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to start your project?</h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">Our engineering teams are ready to tackle your most complex technology challenges.</p>
          <Button size="lg" variant="secondary" className="rounded-full px-8 h-14 text-lg">Schedule a Consultation</Button>
        </div>
      </section>
    </div>
  );
}