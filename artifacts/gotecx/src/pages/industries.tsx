import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Stethoscope, GraduationCap, Building2, HeartHandshake, Utensils, Factory, Landmark, Radio, Truck, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Industries() {
  const industries = [
    { id: "retail", name: "Retail & E-commerce", icon: ShoppingCart, desc: "Omnichannel point of sale, inventory management, and personalized customer experiences." },
    { id: "healthcare", name: "Healthcare", icon: Stethoscope, desc: "Secure patient data systems, telemedicine infrastructure, and clinic management." },
    { id: "education", name: "Education", icon: GraduationCap, desc: "E-learning platforms, campus management systems, and student portals." },
    { id: "government", name: "Government", icon: Building2, desc: "Secure civic portals, data digitisation, and public service automation." },
    { id: "ngo", name: "NGOs & Non-profits", icon: HeartHandshake, desc: "Donor management, transparent fund tracking, and global operations software." },
    { id: "hospitality", name: "Hospitality", icon: Utensils, desc: "Restaurant POS, hotel booking systems, and guest experience applications." },
    { id: "manufacturing", name: "Manufacturing", icon: Factory, desc: "Supply chain visibility, IoT integration, and ERP systems." },
    { id: "banking", name: "Banking & Finance", icon: Landmark, desc: "Fintech applications, secure payment gateways, and compliance architecture." },
    { id: "telecom", name: "Telecommunications", icon: Radio, desc: "Billing systems, network management dashboards, and customer self-service." },
    { id: "logistics", name: "Logistics", icon: Truck, desc: "Fleet tracking, warehouse management, and routing optimization." }
  ];

  return (
    <div className="w-full bg-background">
      <section className="py-24 bg-[#0D1421] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Industries We Serve</h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Domain-specific technology solutions tailored for the unique regulatory, operational, and scaling needs of major global sectors.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((ind, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                id={ind.id}
                className="flex flex-col sm:flex-row gap-6 p-8 rounded-3xl bg-card border border-border hover:shadow-xl hover:border-primary/50 transition-all group"
              >
                <div className="w-20 h-20 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <ind.icon className="w-10 h-10" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">{ind.name}</h3>
                  <p className="text-muted-foreground mb-6 text-lg">{ind.desc}</p>
                  <div className="space-y-3 mb-8 p-4 bg-background rounded-xl border border-border">
                    <div className="text-sm"><span className="font-bold text-foreground">Challenge:</span> Outdated legacy systems and fragmented data.</div>
                    <div className="text-sm"><span className="font-bold text-primary">Gotecx Solution:</span> Unified digital platforms and automated workflows.</div>
                  </div>
                  <Link href="/contact" className="inline-flex items-center text-primary font-bold hover:underline">
                    Discuss your specific needs <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
