import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Careers() {
  const jobs = [
    { title: "Senior React Engineer", dept: "Engineering", location: "Remote (Global)", type: "Full-time" },
    { title: "Cloud Infrastructure Architect", dept: "Infrastructure", location: "Monrovia, Liberia", type: "Full-time" },
    { title: "Enterprise Account Executive", dept: "Sales", location: "London, UK", type: "Full-time" },
    { title: "Product Marketing Manager", dept: "Marketing", location: "Remote (US)", type: "Full-time" },
    { title: "Security Operations Analyst", dept: "Security", location: "Remote (Global)", type: "Full-time" },
    { title: "UX/UI Lead Designer", dept: "Design", location: "Berlin, UK", type: "Full-time" },
  ];

  return (
    <div className="w-full">
      <section className="py-24 bg-[#1A2035] text-white text-center">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Build the Future of Enterprise Tech</h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Join a global team of engineers, designers, and strategists working on the hardest problems in enterprise technology.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Open Positions</h2>
            <p className="text-muted-foreground text-lg">Find your next role at Gotecx.</p>
          </div>

          <div className="flex flex-col gap-4">
            {jobs.map((job, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group p-6 bg-card border border-border rounded-xl hover:border-primary transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer"
              >
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {job.dept}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {job.type}</span>
                  </div>
                </div>
                <Button variant="outline" className="shrink-0 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                  Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 p-12 bg-card border border-border rounded-3xl text-center">
            <h3 className="text-2xl font-bold mb-4">Don't see a fit?</h3>
            <p className="text-muted-foreground mb-8">We are always looking for exceptional talent to join our mission.</p>
            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90">Send Us Your Resume</Button>
          </div>
        </div>
      </section>
    </div>
  );
}