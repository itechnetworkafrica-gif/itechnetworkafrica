import React from "react";
import { motion } from "framer-motion";
import { Handshake, Award, ShieldCheck, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import itechLogo from "@assets/file_000000007fdc72438ace4a48fe9c5139_1781449108190.png";

export default function Partners() {
  return (
    <div className="w-full">
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

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 bg-card p-12 rounded-3xl border border-border shadow-sm mb-24">
            <div className="md:w-1/3 flex justify-center">
              <img src={itechLogo} alt="iTech Network Africa" className="w-48 h-auto" />
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4">Powered by iTech Network Africa</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Gotecx is proud to be powered by iTech Network Africa, a strategic alliance bringing world-class enterprise technology to emerging markets and beyond. Together, we are building digital infrastructure that scales globally.
              </p>
              <Button variant="outline" className="rounded-full">Learn about the alliance</Button>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-center mb-16">Global Technology Partners</h2>
          <div className="flex flex-wrap justify-center gap-12 items-center mb-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholder text logos for major tech partners */}
            <div className="text-2xl font-bold tracking-tighter">AWS</div>
            <div className="text-2xl font-bold tracking-tighter">Microsoft</div>
            <div className="text-2xl font-bold tracking-tighter">Google Cloud</div>
            <div className="text-2xl font-bold tracking-tighter">Oracle</div>
            <div className="text-2xl font-bold tracking-tighter">IBM</div>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Become a Partner</h2>
            <p className="text-muted-foreground mb-10 text-lg">
              Unlock new revenue streams, co-sell enterprise solutions, and get priority access to Gotecx technical resources.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { tier: "Silver Partner", desc: "For agencies and consultants referring Gotecx solutions to clients.", perks: ["15% Referral Margin", "Marketing Materials", "Standard Support"] },
              { tier: "Gold Partner", desc: "For system integrators actively deploying Gotecx technology.", perks: ["25% Reseller Margin", "Technical Training", "Priority Support", "Co-marketing"] },
              { tier: "Platinum Partner", desc: "For enterprise consultancies co-developing major solutions.", perks: ["Custom Revenue Sharing", "Dedicated Account Manager", "Roadmap Influence", "Joint PR"] }
            ].map((tier, i) => (
              <div key={i} className="bg-card border border-border p-8 rounded-2xl flex flex-col">
                <h3 className="text-2xl font-bold mb-2">{tier.tier}</h3>
                <p className="text-sm text-muted-foreground mb-8">{tier.desc}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.perks.map((perk, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <ShieldCheck className="w-4 h-4 text-primary" /> {perk}
                    </li>
                  ))}
                </ul>
                <Button className="w-full rounded-full" variant={i === 1 ? "default" : "outline"}>Apply for {tier.tier.split(' ')[0]}</Button>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}