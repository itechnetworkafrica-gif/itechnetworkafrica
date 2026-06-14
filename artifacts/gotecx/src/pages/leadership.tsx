import React from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

export default function Leadership() {
  const leaders = [
    { name: "Executive Placeholder 1", role: "Chief Executive Officer", bio: "Visionary leader with 20+ years driving enterprise tech innovation." },
    { name: "Executive Placeholder 2", role: "Chief Technology Officer", bio: "Architect of the Gotecx platform, former lead engineer at top 5 tech firm." },
    { name: "Executive Placeholder 3", role: "Chief Operations Officer", bio: "Scaling global operations and ensuring exceptional client delivery." },
    { name: "Executive Placeholder 4", role: "Head of Strategy", bio: "Driving market expansion and strategic partnerships worldwide." }
  ];

  return (
    <div className="w-full">
      <section className="py-24 bg-[#1A2035] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Leadership</h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Guided by a team of industry veterans dedicated to pushing the boundaries of what technology can achieve for global business.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((leader, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="aspect-[3/4] bg-muted rounded-2xl mb-6 overflow-hidden relative border border-border">
                  {/* Image placeholder - in a real build this would use generate_image */}
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 bg-card">
                    Portrait Placeholder
                  </div>
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-overlay"></div>
                </div>
                <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                <div className="text-primary font-medium text-sm mb-4">{leader.role}</div>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{leader.bio}</p>
                <a href="#" className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-muted hover:bg-primary hover:text-white transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>

          <div className="mt-32 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Leadership Philosophy</h2>
            <div className="p-10 rounded-3xl bg-card border border-border relative">
              <div className="text-6xl text-primary/20 font-serif absolute top-6 left-6">"</div>
              <p className="text-xl italic text-foreground relative z-10 leading-relaxed">
                We believe that true enterprise technology shouldn't just solve today's problems—it should anticipate tomorrow's challenges. Our role as leaders is to build a culture where precision engineering meets bold, global ambition.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}