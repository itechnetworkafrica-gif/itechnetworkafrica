import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, CheckCircle2, Globe, Shield, Zap } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-[#0D1421]">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px]"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        </div>

        <div className="container relative z-10 px-4 mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Powered by iTech Network Africa
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              Empowering Businesses Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#2D5F3F]">Technology</span>
            </h1>
            <p className="text-lg text-white/70 mb-8 max-w-xl leading-relaxed">
              Helping organizations around the world automate, innovate, transform, and scale through intelligent technology solutions. Command your business from the future.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12">
                Request Demo
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 h-12 border-white/20 text-white hover:bg-white/10">
                Explore Solutions
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block h-[600px]"
          >
            {/* Abstract Tech Representation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[400px] h-[400px] border border-white/10 rounded-full animate-[spin_60s_linear_infinite]"></div>
              <div className="absolute w-[500px] h-[500px] border border-white/5 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
              
              {/* Floating Cards */}
              <div className="absolute top-1/4 left-0 bg-card/80 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-2xl animate-[bounce_4s_ease-in-out_infinite]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Gotecx POS</p>
                    <p className="text-xs text-white/50">Processing transaction...</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-1/4 right-0 bg-card/80 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-2xl animate-[bounce_5s_ease-in-out_infinite_reverse]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Security Active</p>
                    <p className="text-xs text-white/50">0 threats detected</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background border-y border-border relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            {[
              { num: "500+", label: "Projects Delivered" },
              { num: "20+", label: "Industries Served" },
              { num: "50+", label: "Tech Solutions" },
              { num: "300+", label: "Businesses Supported" },
              { num: "15+", label: "Countries Reached" },
              { num: "98%", label: "Customer Satisfaction" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.num}</div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Mission Control for Your Business</h2>
            <p className="text-lg text-muted-foreground">
              We empower global organizations through cutting-edge technology. Our vision is to be the world's most trusted technology transformation partner.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {['Innovation', 'Integrity', 'Impact', 'Inclusion'].map((value, i) => (
              <div key={i} className="p-6 bg-background rounded-2xl border border-border text-center group hover:border-primary transition-colors">
                <div className="w-12 h-12 mx-auto bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-xl mb-2">{value}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Ecosystem */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="text-primary font-bold uppercase tracking-wider text-sm mb-2">Our Ecosystem</div>
              <h2 className="text-3xl md:text-5xl font-bold">The Gotecx Platform</h2>
            </div>
            <Link href="/products">
              <Button variant="outline" className="rounded-full">View All Products <ArrowRight className="ml-2 w-4 h-4" /></Button>
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center bg-card rounded-3xl border border-border overflow-hidden">
            <div className="p-10 lg:p-16">
              <div className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-bold mb-6">FLAGSHIP PRODUCT</div>
              <h3 className="text-4xl font-bold mb-4">Gotecx POS</h3>
              <p className="text-muted-foreground mb-8 text-lg">
                The ultimate point-of-sale command center. Manage inventory, process transactions, and analyze sales data in real-time across multiple locations.
              </p>
              <ul className="space-y-4 mb-8">
                {['Real-time inventory sync', 'Multi-location management', 'Advanced analytics dashboard', 'Offline mode support'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="bg-primary hover:bg-primary/90 rounded-full">Explore Gotecx POS</Button>
            </div>
            <div className="h-full min-h-[400px] bg-[#1A2035] relative p-8 flex items-center justify-center">
              {/* Mockup Placeholder */}
              <div className="w-full max-w-md aspect-[4/3] bg-card rounded-xl border border-border shadow-2xl flex flex-col overflow-hidden">
                <div className="h-10 bg-muted/50 border-b border-border flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 p-4 grid grid-cols-3 gap-4">
                  <div className="col-span-2 space-y-4">
                    <div className="h-24 bg-primary/10 rounded border border-primary/20"></div>
                    <div className="h-32 bg-muted/30 rounded"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-16 bg-muted/30 rounded"></div>
                    <div className="h-16 bg-muted/30 rounded"></div>
                    <div className="h-16 bg-muted/30 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Enterprise Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Comprehensive technology solutions designed for scale, security, and performance.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Business Solutions", desc: "Tailored operations for retail, healthcare, and enterprise.", icon: Globe },
              { title: "Cloud Services", desc: "Secure, scalable infrastructure for modern applications.", icon: Shield },
              { title: "AI & Automation", desc: "Intelligent workflows that reduce manual overhead.", icon: Zap },
              { title: "Cybersecurity", desc: "Enterprise-grade protection for your digital assets.", icon: Shield },
              { title: "Data Analytics", desc: "Transform raw data into actionable business intelligence.", icon: CheckCircle2 },
              { title: "Digital Transformation", desc: "End-to-end modernization of legacy systems.", icon: ArrowRight },
            ].map((sol, i) => (
              <div key={i} className="p-8 rounded-2xl bg-background border border-border hover:border-primary transition-all group cursor-pointer">
                <sol.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-3">{sol.title}</h3>
                <p className="text-muted-foreground mb-6">{sol.desc}</p>
                <div className="text-primary font-semibold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-[#1A2035] to-[#0D1421] text-white relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/20 blur-[150px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto">Transform Your Business With Technology That Scales</h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Join hundreds of global organizations powered by Gotecx and iTech Network Africa.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-14 text-lg">
              Request Demo
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg border-white/20 hover:bg-white/10 text-white">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}