"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Briefcase, Award } from "lucide-react";

export default function About() {
  const highlights = [
    { icon: <Briefcase className="w-5 h-5" />, label: "Full Stack & AI", value: "Expertise" },
    { icon: <GraduationCap className="w-5 h-5" />, label: "B.E. IT", value: "2026 Grad" },
    { icon: <MapPin className="w-5 h-5" />, label: "Location", value: "Mumbai, India" },
    { icon: <Award className="w-5 h-5" />, label: "CGPA", value: "9.0 / 10" },
  ];

  return (
    <section id="about" className="relative py-24 w-full px-6 flex flex-col items-center">
      <div className="max-w-6xl w-full">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-4">
              About Me
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 font-heading leading-tight">
              Crafting Digital Solutions with{" "}
              <span className="text-gradient">Precision &amp; Intelligence</span>
            </h3>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Information Technology undergraduate (2026) with strong expertise in Full Stack
              Development, AI/ML, Data Analytics, and Backend Engineering. Experienced in building
              scalable applications, anomaly detection systems, and analytics platforms processing
              datasets exceeding 1M+ records.
            </p>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              Passionate about solving real-world problems through technology, system design,
              automation, and data-driven decision-making. I bridge the gap between complex
              algorithms and user-friendly interfaces.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">{item.icon}</div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-slate-500">
                      {item.label}
                    </span>
                    <span className="text-sm font-semibold text-white">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative aspect-square max-w-md w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-blue-500/20 rounded-3xl blur-2xl" />
            <div className="relative h-full w-full rounded-3xl border border-white/10 bg-slate-900/50 backdrop-blur-md overflow-hidden flex items-center justify-center group">
              {/* Abstract Code Representation */}
              <div className="p-8 w-full font-mono text-[10px] md:text-xs text-slate-500 space-y-2 overflow-hidden">
                <p className="text-primary">{"const developer = {"}</p>
                <p className="pl-4">
                  name: <span className="text-cyan-400">"Ashish Ghadigaonkar"</span>,
                </p>
                <p className="pl-4">
                  role: <span className="text-cyan-400">"Full Stack & AI Engineer"</span>,
                </p>
                <p className="pl-4">
                  passion: <span className="text-cyan-400">"Problem Solving"</span>,
                </p>
                <p className="pl-4">
                  traits: [
                  <span className="text-purple-400">"Scalability"</span>,{" "}
                  <span className="text-purple-400">"Intelligence"</span>,{" "}
                  <span className="text-purple-400">"Efficiency"</span>],
                </p>
                <p className="pl-4">
                  focus: <span className="text-cyan-400">"Data-Driven Decisions"</span>,
                </p>
                <p className="pl-4">
                  projects: [<span className="text-purple-400">"Anomatrix"</span>,{" "}
                  <span className="text-purple-400">"GroceryShopONE"</span>],
                </p>
                <p className="text-primary">{"}"}</p>

                <div className="pt-8 space-y-2 opacity-30 group-hover:opacity-60 transition-opacity">
                  <div className="h-1 w-full bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "90%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 1 }}
                      className="h-full bg-primary"
                    />
                  </div>
                  <div className="h-1 w-full bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 1.2 }}
                      className="h-full bg-blue-500"
                    />
                  </div>
                  <div className="h-1 w-full bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "80%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 1.4 }}
                      className="h-full bg-cyan-500"
                    />
                  </div>
                </div>
              </div>

              {/* Decorative Blobs */}
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full border border-primary/20 animate-float" />
              <div
                className="absolute bottom-8 left-8 w-20 h-20 rounded-full border border-blue-500/20 animate-float"
                style={{ animationDelay: "1s" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
