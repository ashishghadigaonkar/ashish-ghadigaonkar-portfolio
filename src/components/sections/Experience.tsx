"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    title: "Freelance Full-Stack & AI Developer",
    company: "Propelligence Advisors Private Limited",
    duration: "Aug 2024 – Present",
    description: [
      "Built and deployed Anomatrix processing 1M+ financial records.",
      "Automated analytics workflows reducing manual effort by 40%.",
      "Developed scalable backend APIs and data pipelines.",
      "Implemented anomaly detection systems.",
    ],
  },
  {
    title: "HVAC Analytics & Chiller Optimization",
    company: "Johnson Controls",
    duration: "Ongoing Domain Work",
    description: [
      "Developed analytics platform for industrial optimization.",
      "Built KPI dashboards and ROI simulations.",
      "Analyzed HVAC performance and operational efficiency.",
    ],
  },
  {
    title: "AI/ML Intern",
    company: "IBM SkillsBuild with CSRBOX",
    duration: "July 2025",
    description: [
      "Built NLP chatbot achieving 90%+ intent accuracy.",
      "Worked on preprocessing, feature engineering, and model tuning.",
    ],
  },
  {
    title: "Web Developer Intern",
    company: "Gadre Infotech Pvt. Ltd.",
    duration: "June 2024",
    description: [
      "Developed Node.js-based web application.",
      "Improved UI responsiveness and backend workflows.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 w-full px-6 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold tracking-widest text-primary uppercase mb-4"
          >
            My Journey
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white font-heading"
          >
            Professional <span className="text-gradient">Experience</span>
          </motion.h3>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-9px] top-0 w-[18px] h-[18px] rounded-full bg-[#050816] border-2 border-primary flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-primary/30 transition-colors group">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                      {exp.title}
                    </h4>
                    <div className="flex items-center gap-2 text-primary font-medium mt-1">
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 text-sm bg-white/5 px-3 py-1 rounded-full border border-white/5">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-3 text-slate-400 leading-relaxed group/item">
                      <CheckCircle2 className="w-5 h-5 text-primary/50 group-hover/item:text-primary transition-colors flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
