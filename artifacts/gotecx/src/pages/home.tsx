import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Globe, Shield, Zap, Target, LineChart, Lock, Users2, BrainCircuit, Quote, Cloud } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="w-full bg-background">
      {/* Section 1 - Hero */}
      <section className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden bg-[#0D1421]">
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: "repeating-linear-gradient(rgba(255,255,255,0.03) 0 1px, transparent 1px 100%), repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0 1px, transparent 1px 100%)", backgroundSize: "40px 40px" }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px]"></div>
          
          {/* Floating Orbs */}
          <motion.div animate={{ y: [0, -30, 0], x: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/4 right-1/4 w-32 h-32 bg-primary/30 rounded-full blur-[40px]"></motion.div>
          <motion.div animate={{ y: [0, 40, 0], x: [0, -30, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-blue-500/20 rounded-full blur-[50px]"></motion.div>
        </div>

        <div className="container relative z-10 px-4 mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold tracking-wider mb-8 uppercase">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Powered by iTech Network Africa • Founded in Liberia
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
              Empowering Businesses Through <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-green-400 to-[#2D5F3F] block mt-2">Technology</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-10 max-w-xl leading-relaxed">
              Helping organizations around the world automate, innovate, transform, and scale through intelligent technology solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-14 font-semibold shadow-[0_0_20px_rgba(var(--primary),0.3)]">
                Request Demo
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 h-14 border-white/20 text-white hover:bg-white/10 font-semibold bg-white/5 backdrop-blur-sm">
                Explore Solutions
              </Button>
              <Button size="lg" variant="ghost" className="rounded-full px-8 h-14 text-white hover:bg-white/10 font-semibold">
                Contact Sales
              </Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="relative hidden lg:flex items-center justify-center h-[600px]">
            <div className="relative w-full h-full max-w-lg">
              {/* Central Globe */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/20 rounded-full border border-primary/50 shadow-[0_0_50px_rgba(var(--primary),0.4)] flex items-center justify-center">
                <Globe className="w-24 h-24 text-primary animate-[spin_20s_linear_infinite]" />
              </div>

              {/* Orbiting Elements */}
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card/90 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-2xl flex items-center gap-3 w-48" style={{ transform: 'rotate(-360deg)' }}>
                  <div className="p-2 bg-primary/20 rounded-lg"><Zap className="w-5 h-5 text-primary" /></div>
                  <div>
                    <p className="text-sm font-bold text-white">Gotecx POS</p>
                    <p className="text-[10px] text-white/50">Active</p>
                  </div>
                </div>
              </motion.div>
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute inset-0">
                <div className="absolute bottom-0 right-0 bg-card/90 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-2xl flex items-center gap-3 w-48" style={{ transform: 'rotate(360deg)' }}>
                  <div className="p-2 bg-blue-500/20 rounded-lg"><BrainCircuit className="w-5 h-5 text-blue-500" /></div>
                  <div>
                    <p className="text-sm font-bold text-white">AI Solutions</p>
                    <p className="text-[10px] text-white/50">Processing</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center">
          <span className="text-xs uppercase tracking-widest mb-2 font-semibold">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
        </motion.div>
      </section>

      {/* Section 2 - Animated Stats */}
      <section className="py-24 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { num: "500+", label: "Projects Delivered" },
              { num: "20+", label: "Industries Served" },
              { num: "50+", label: "Tech Solutions" },
              { num: "300+", label: "Businesses Supported" },
              { num: "15+", label: "Countries Reached" },
              { num: "98%", label: "Customer Satisfaction" },
            ].map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-2xl bg-background border border-border border-b-primary text-center">
                <div className="text-3xl lg:text-4xl font-black text-foreground mb-2">{stat.num}</div>
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 - Who We Are */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Our Story</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Building the Future Through Technology</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Founded in Monrovia, Liberia by Kerkulah Kerkulah, iTech Network Africa was established to address the growing need for technology-driven business solutions that help organizations thrive in an increasingly digital world.
            </p>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              As the company evolved, <strong>Gotecx</strong> was launched as the flagship technology brand to expand the organization's reach and position its products and services on a global stage.
            </p>
            <div className="p-8 rounded-2xl bg-card border border-border relative">
              <Quote className="w-12 h-12 text-primary/20 absolute top-4 left-4" />
              <p className="text-xl font-medium italic relative z-10 mb-4">
                "We built Gotecx because we believe every business deserves world-class technology, regardless of where they are in the world."
              </p>
              <p className="font-bold text-primary">— Kerkulah Kerkulah, Founder</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-border"></div>
            <div className="space-y-12">
              {[
                { year: "2020", title: "Founded", desc: "iTech Network Africa established in Monrovia, Liberia." },
                { year: "2021", title: "First Product", desc: "Launched initial software solutions for local businesses." },
                { year: "2023", title: "Gotecx Launched", desc: "Flagship brand created for global technology delivery." },
                { year: "2026", title: "Global Ecosystem", desc: "Serving enterprises, NGOs, and governments worldwide." }
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative pl-14">
                  <div className="absolute left-0 top-1 w-10 h-10 bg-card border-2 border-primary rounded-full flex items-center justify-center z-10 shadow-lg">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                  <div className="text-primary font-bold text-xl mb-1">{item.year}</div>
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Product Ecosystem */}
      <section className="py-32 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Flagship Platform</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">The Gotecx Ecosystem</h2>
            <p className="text-lg text-muted-foreground">A unified suite of products designed to manage, scale, and secure your entire business operation.</p>
          </div>

          <div className="bg-[#0D1421] rounded-3xl overflow-hidden border border-border shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 flex flex-col justify-center">
              <div className="inline-flex px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-bold mb-6 uppercase tracking-wider">Gotecx POS</div>
              <h3 className="text-3xl font-bold text-white mb-4">Command Your Business</h3>
              <p className="text-white/70 mb-8 text-lg">
                Real-time inventory management, multi-location support, advanced analytics, and offline mode capabilities built for the modern enterprise.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full w-fit">
                Explore Gotecx POS
              </Button>
            </div>
            <div className="lg:w-1/2 bg-[#1A2535] p-8 flex items-center justify-center">
              {/* CSS UI Mockup */}
              <div className="w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col h-[350px]">
                <div className="h-12 bg-gray-100 border-b border-gray-200 flex items-center justify-between px-4">
                  <div className="font-bold text-gray-800 flex items-center gap-2"><div className="w-6 h-6 bg-primary rounded"></div> Gotecx POS</div>
                  <div className="text-xs font-medium text-gray-500 bg-gray-200 px-2 py-1 rounded">Register 1</div>
                </div>
                <div className="flex-1 flex">
                  <div className="flex-1 p-4 grid grid-cols-2 gap-3 overflow-hidden">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="bg-gray-50 rounded border border-gray-100 p-3 flex flex-col justify-between">
                        <div className="w-10 h-10 bg-gray-200 rounded mb-2"></div>
                        <div className="h-3 bg-gray-300 rounded w-full mb-1"></div>
                        <div className="h-3 bg-primary/20 rounded w-1/2"></div>
                      </div>
                    ))}
                  </div>
                  <div className="w-1/3 bg-gray-50 border-l border-gray-200 flex flex-col">
                    <div className="flex-1 p-3 space-y-2">
                      <div className="flex justify-between items-center text-xs"><span className="text-gray-500">Item 1</span><span className="font-medium">$45.00</span></div>
                      <div className="flex justify-between items-center text-xs"><span className="text-gray-500">Item 2</span><span className="font-medium">$12.50</span></div>
                      <div className="w-full h-px bg-gray-200 my-2"></div>
                      <div className="flex justify-between items-center text-sm font-bold"><span>Total</span><span>$57.50</span></div>
                    </div>
                    <div className="p-3 border-t border-gray-200">
                      <div className="w-full py-2 bg-primary text-white text-center text-xs font-bold rounded shadow-sm">Process Payment</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
            {['Gotecx AI', 'Analytics', 'Gotecx ERP', 'Gotecx CRM', 'Gotecx Cloud'].map((prod, i) => (
              <div key={i} className="bg-background border border-border rounded-xl p-4 text-center">
                <h4 className="font-bold text-sm mb-1">{prod}</h4>
                <span className="text-[10px] text-muted-foreground uppercase font-semibold">Coming Soon</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 - Solutions */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Solutions Ecosystem</h2>
            <p className="text-lg text-muted-foreground">Comprehensive capabilities for modern organizations.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Business Solutions", desc: "Streamline operations with tailored management tools.", icon: Target },
              { title: "Cloud Infrastructure", desc: "Secure, scalable hosting and cloud computing.", icon: Cloud },
              { title: "AI & Automation", desc: "Intelligent systems that learn and optimize.", icon: BrainCircuit },
              { title: "Cybersecurity", desc: "Enterprise-grade protection for critical data.", icon: Lock },
              { title: "Data Analytics", desc: "Actionable insights from complex datasets.", icon: LineChart },
              { title: "Digital Transformation", desc: "End-to-end modernization of legacy systems.", icon: Zap },
            ].map((sol, i) => (
              <div key={i} className="group p-8 rounded-2xl bg-card border border-border hover:border-primary transition-all">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <sol.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{sol.title}</h3>
                <p className="text-muted-foreground mb-6">{sol.desc}</p>
                <Link href="/solutions" className="text-primary font-semibold flex items-center gap-2">
                  Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 - Industries */}
      <section className="py-32 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-lg text-muted-foreground">Global vision applied to specific sector challenges.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              "Retail & Commerce", "Healthcare", "Education", "Government", "Financial Services",
              "Manufacturing", "Logistics", "Real Estate", "Hospitality", "NGOs"
            ].map((industry, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-background border border-border rounded-xl p-6 text-center hover:border-primary hover:shadow-lg transition-all group">
                <Globe className="w-8 h-8 mx-auto mb-3 text-muted-foreground group-hover:text-primary transition-colors" />
                <h4 className="font-bold text-sm">{industry}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 - Why Gotecx */}
      <section className="py-32 bg-[#0D1421] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Gotecx</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Innovation", desc: "Continuously exploring new technologies.", metric: "50+ Solutions Built", icon: Zap },
              { title: "Scalability", desc: "Systems that grow with your organization.", metric: "Millions of transactions", icon: LineChart },
              { title: "Security", desc: "Uncompromising data protection.", metric: "Bank-grade encryption", icon: Shield },
              { title: "Reliability", desc: "Consistent performance when it matters.", metric: "99.9% Uptime SLA", icon: CheckCircle2 },
              { title: "Global Vision", desc: "Local roots, international impact.", metric: "15+ Countries", icon: Globe },
              { title: "Expertise", desc: "World-class engineering teams.", metric: "Industry Leaders", icon: Users2 }
            ].map((pillar, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <pillar.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{pillar.title}</h3>
                <p className="text-white/60 mb-6">{pillar.desc}</p>
                <div className="text-sm font-bold text-primary px-3 py-1 bg-primary/10 rounded-full inline-block">{pillar.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8 - Success Stories */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">Customer Success</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { tag: "Retail", result: "40% increase in sales efficiency", quote: "Gotecx POS completely transformed how we manage our 12 locations. The real-time insights are invaluable.", co: "Enterprise Retail Chain, West Africa" },
              { tag: "Healthcare", result: "Zero downtime infrastructure", quote: "The cloud migration led by iTech Network Africa secured our patient data while making it instantly accessible to our doctors.", co: "Regional Medical Center" },
              { tag: "Education", result: "Streamlined administration", quote: "Their software solutions automated our entire enrollment and grading processes, saving hundreds of hours.", co: "National University" }
            ].map((story, i) => (
              <div key={i} className="p-8 rounded-2xl bg-card border border-border shadow-sm">
                <div className="text-xs font-bold text-primary uppercase tracking-wider mb-4">{story.tag}</div>
                <div className="text-2xl font-black mb-6 leading-tight">{story.result}</div>
                <p className="text-muted-foreground italic mb-6">"{story.quote}"</p>
                <div className="text-sm font-bold">{story.co}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9 - Partners Marquee */}
      <section className="py-16 bg-card border-y border-border overflow-hidden">
        <div className="container mx-auto px-4 text-center mb-8">
          <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Our Technology Ecosystem</h3>
        </div>
        <div className="flex gap-8 whitespace-nowrap animate-[marquee_20s_linear_infinite] px-4">
          {['AWS', 'Microsoft Azure', 'Google Cloud', 'Oracle', 'IBM', 'SAP', 'AWS', 'Microsoft Azure', 'Google Cloud', 'Oracle'].map((partner, i) => (
            <div key={i} className="text-2xl font-black text-foreground/20 hover:text-primary transition-colors cursor-default select-none">
              {partner}
            </div>
          ))}
        </div>
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}} />
      </section>

      {/* Section 10 & 11 - Knowledge Hub & Events */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-8">Knowledge Hub</h2>
              <div className="space-y-6">
                {[
                  { cat: "Technology", title: "The Future of AI in Enterprise Business" },
                  { cat: "Product Update", title: "New Features in Gotecx POS v2.0" },
                  { cat: "Industry Insight", title: "Digital Transformation in Emerging Markets" }
                ].map((post, i) => (
                  <div key={i} className="group cursor-pointer">
                    <div className="text-xs font-bold text-primary mb-2">{post.cat}</div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                    <div className="w-full h-px bg-border mt-4"></div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
              <div className="space-y-6">
                {[
                  { date: "Oct 15, 2026", title: "Global Tech Summit", type: "Conference" },
                  { date: "Nov 02, 2026", title: "Scaling with Cloud Infrastructure", type: "Webinar" },
                  { date: "Dec 10, 2026", title: "Gotecx Developer Connect", type: "Virtual Meetup" }
                ].map((event, i) => (
                  <div key={i} className="flex gap-6 items-center p-4 rounded-xl bg-card border border-border hover:border-primary transition-colors">
                    <div className="bg-primary/10 text-primary p-3 rounded-lg text-center min-w-[80px]">
                      <div className="text-sm font-bold">{event.date.split(',')[0]}</div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{event.title}</h3>
                      <div className="text-sm text-muted-foreground">{event.type}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 12 - Final CTA */}
      <section className="py-32 bg-[#0D1421] text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-primary/20 blur-[120px] pointer-events-none rounded-full"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto leading-tight">Transform Your Business With Technology That Scales</h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            Join the global organizations powered by Gotecx and iTech Network Africa.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 h-14 text-lg font-bold">
              Request Demo
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-10 h-14 text-lg border-white/20 hover:bg-white/10 text-white font-bold bg-white/5">
              Contact Us
            </Button>
            <Button size="lg" variant="ghost" className="rounded-full px-10 h-14 text-lg hover:bg-white/10 text-white font-bold">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
