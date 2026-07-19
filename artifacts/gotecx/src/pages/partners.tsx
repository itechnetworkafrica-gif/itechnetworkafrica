import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import itechLogo from "@assets/file_000000007fdc72438ace4a48fe9c5139_1781449108190.png";

import { useSEO } from "@/components/SEOHead";
export default function Partners() {
  useSEO({
    title: "Partners",
    description: "Gotecx partners with world-leading technology organizations. Explore our partner ecosystem and alliance programs.",
    canonical: "/partners",
  });


  return (
    <div className="w-full bg-background">
      <section className="py-24 bg-[#0D1421] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Partner Ecosystem</h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Join a global network of technology leaders, system integrators, and resellers driving digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-16 bg-card p-12 lg:p-16 rounded-[2rem] border border-border shadow-xl mb-32 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]"></div>
            <div className="md:w-1/3 flex justify-center relative z-10">
              <div className="bg-white p-8 rounded-full shadow-lg">
                 <img src={itechLogo} alt="iTech Network Africa" className="w-40 h-auto" />
              </div>
            </div>
            <div className="md:w-2/3 text-center md:text-left relative z-10">
              <h2 className="text-4xl font-bold mb-6">Powered by iTech Network Africa</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Gotecx is proud to be powered by iTech Network Africa, a strategic alliance bringing world-class enterprise technology to emerging markets and beyond. Together, we are building digital infrastructure that scales globally.
              </p>
              <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 font-bold px-8 h-14">Learn about the alliance</Button>
            </div>
          </div>

          <h2 className="text-4xl font-bold text-center mb-16">Global Technology Partners</h2>
          <div className="flex flex-wrap justify-center gap-16 items-center mb-32 opacity-50 hover:opacity-100 transition-opacity duration-500 bg-muted/50 p-12 rounded-[2rem] border border-border">
            <div className="text-3xl font-black tracking-tighter text-foreground">AWS</div>
            <div className="text-3xl font-black tracking-tighter text-foreground">Microsoft</div>
            <div className="text-3xl font-black tracking-tighter text-foreground">Google Cloud</div>
            <div className="text-3xl font-black tracking-tighter text-foreground">Oracle</div>
            <div className="text-3xl font-black tracking-tighter text-foreground">IBM</div>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold mb-6">Become a Partner</h2>
            <p className="text-muted-foreground text-lg">
              Unlock new revenue streams, co-sell enterprise solutions, and get priority access to Gotecx technical resources.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { tier: "Silver Partner", desc: "For agencies and consultants referring Gotecx solutions to clients.", perks: ["15% Referral Margin", "Marketing Materials", "Standard Support"] },
              { tier: "Gold Partner", desc: "For system integrators actively deploying Gotecx technology.", perks: ["25% Reseller Margin", "Technical Training", "Priority Support", "Co-marketing"] },
              { tier: "Platinum Partner", desc: "For enterprise consultancies co-developing major solutions.", perks: ["Custom Revenue Sharing", "Dedicated Account Manager", "Roadmap Influence", "Joint PR"] }
            ].map((tier, i) => (
              <div key={i} className={`bg-card border ${i===1 ? 'border-primary shadow-xl scale-105 z-10' : 'border-border shadow-sm'} p-10 rounded-3xl flex flex-col relative`}>
                {i===1 && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">Most Popular</div>}
                <h3 className="text-2xl font-bold mb-4">{tier.tier}</h3>
                <p className="text-muted-foreground mb-8 text-lg">{tier.desc}</p>
                <ul className="space-y-4 mb-10 flex-1">
                  {tier.perks.map((perk, j) => (
                    <li key={j} className="flex items-center gap-3 font-medium text-foreground">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0"><ShieldCheck className="w-4 h-4 text-primary" /></div> {perk}
                    </li>
                  ))}
                </ul>
                <Button size="lg" className="w-full rounded-full font-bold h-14" variant={i === 1 ? "default" : "outline"}>Apply for {tier.tier.split(' ')[0]}</Button>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
