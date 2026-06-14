import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Globe2, Target, HeartHandshake, Zap, Scale, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  const values = [
    { title: "Innovation", desc: "We continuously explore new ideas, technologies, and opportunities that create value for our customers and communities.", icon: Zap },
    { title: "Excellence", desc: "We are committed to delivering high-quality solutions, services, and experiences that exceed expectations.", icon: Target },
    { title: "Integrity", desc: "We operate with honesty, transparency, professionalism, and accountability in everything we do.", icon: ShieldIcon },
    { title: "Customer Success", desc: "Our success is measured by the success of the organizations and communities we serve.", icon: HeartHandshake },
    { title: "Collaboration", desc: "We believe meaningful innovation is achieved through partnerships, teamwork, and shared knowledge.", icon: UsersIcon },
    { title: "Continuous Improvement", desc: "We embrace learning, growth, and adaptation to remain at the forefront of technological advancement.", icon: BookOpen }
  ];

  return (
    <div className="w-full bg-background">
      {/* Hero */}
      <section className="py-32 bg-[#0D1421] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: "repeating-linear-gradient(rgba(255,255,255,0.02) 0 1px, transparent 1px 40px), repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0 1px, transparent 1px 40px)" }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Building the Future <br/>Through Technology</h1>
            <p className="text-xl text-primary font-medium tracking-wide">Founded in Monrovia, Liberia</p>
          </motion.div>
        </div>
      </section>

      {/* About iTech */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">About iTech Network Africa</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Founded in Monrovia, Liberia by Kerkulah Kerkulah, iTech Network Africa was established to address the growing need for technology-driven business solutions that help organizations thrive in an increasingly digital world.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Recognizing the transformative power of technology, the organization set out to build solutions that simplify operations, improve decision-making, increase productivity, and create opportunities for growth.
          </p>
        </div>
      </section>

      {/* Gotecx Brand */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <Globe2 className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-3xl font-bold mb-8">Gotecx — Our Flagship Brand</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            As the company evolved, <strong>Gotecx</strong> was launched as the flagship technology brand to expand the organization's reach and position its products and services on a global stage. It is the customer-facing ecosystem through which software platforms, business management solutions, digital transformation services, AI technologies, and future innovations are delivered to clients worldwide.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 max-w-5xl grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-lg leading-relaxed opacity-90">
              To become a globally recognized technology company that empowers businesses, organizations, and communities through innovative digital solutions that create lasting impact and sustainable growth.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg leading-relaxed opacity-90">
              To deliver world-class technology solutions that drive innovation, improve efficiency, accelerate growth, and create long-term value for organizations worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((val, i) => (
              <div key={i} className="p-8 rounded-2xl bg-card border border-border">
                <val.icon className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-4">{val.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 bg-card border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-16">Our Journey</h2>
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
            {[
              { year: "2020", title: "The Foundation", desc: "iTech Network Africa established in Monrovia, Liberia." },
              { year: "2021", title: "Initial Solutions", desc: "Development of localized software to solve pressing business needs." },
              { year: "2023", title: "Gotecx Is Born", desc: "Flagship brand launched to organize and deliver products globally." },
              { year: "2024", title: "Ecosystem Expansion", desc: "Introduction of Gotecx POS and enterprise services." },
              { year: "2026", title: "Global Reach", desc: "Scaling operations to serve an international client base." }
            ].map((item, i) => (
              <div key={i} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10"></div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-background border border-border shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-xl">{item.title}</h3>
                    <span className="text-primary font-bold">{item.year}</span>
                  </div>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-32 bg-background border-t border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="aspect-square bg-muted rounded-3xl overflow-hidden relative border border-border">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-card">
                Kerkulah Kerkulah Portrait
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-2">Kerkulah Kerkulah</h2>
              <h3 className="text-xl text-primary font-bold mb-6">Founder & Executive Director</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Driven by a passion for technology, innovation, entrepreneurship, and digital transformation, he established the organization with the goal of creating technology solutions that empower businesses, create opportunities, and contribute to economic growth.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                His leadership continues to guide the organization's mission of building innovative technology solutions that deliver meaningful impact locally and globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Vision */}
      <section className="py-32 bg-[#0D1421] text-center text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <Globe2 className="w-16 h-16 text-primary mx-auto mb-8" />
          <h2 className="text-4xl font-bold mb-8">Our Global Vision</h2>
          <p className="text-xl text-white/70 leading-relaxed mb-16">
            While proudly founded in Liberia, the vision extends far beyond borders. We are building a technology ecosystem designed to serve businesses, startups, SMEs, enterprises, NGOs, educational institutions, and governments around the world.
          </p>
          <div className="p-8 border border-white/20 rounded-2xl bg-white/5 inline-block">
            <h3 className="text-2xl font-bold text-primary tracking-wide">One Vision. One Mission. One Family.</h3>
          </div>
        </div>
      </section>
      
      {/* End CTA */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Empowering Businesses Through Technology</h2>
          <Button size="lg" variant="secondary" className="rounded-full px-10 h-14 text-lg font-bold">
            Work With Us
          </Button>
        </div>
      </section>
    </div>
  );
}

function ShieldIcon(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z"/></svg>;
}

function UsersIcon(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
}
