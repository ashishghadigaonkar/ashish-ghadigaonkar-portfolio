"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, GraduationCap, Trophy } from "lucide-react";

const achievements = [
  { title: "Hackathon 2025", subtitle: "2nd Prize Winner", icon: <Trophy className="w-5 h-5" /> },
  { title: "Smart India Hackathon", subtitle: "2024 & 2025 Participant", icon: <ShieldCheck className="w-5 h-5" /> },
  { title: "Project Exhibition", subtitle: "1st Prize Winner", icon: <Award className="w-5 h-5" /> },
  { title: "LeetCode", subtitle: "150+ Problems Solved", icon: <Award className="w-5 h-5" /> },
];

const certifications = [
  "AWS Certified Developer – Associate",
  "HackerRank SQL Certification",
  "Kaggle Data Science & ML",
  "freeCodeCamp APIs & Microservices",
  "Postman API Fundamentals Student Expert",
  "Generative AI with Python",
  "Microsoft Power BI Learning Path",
  "Introduction to NoSQL",
];

export default function Recognitions() {
  return (
    <section id="recognitions" className="relative py-24 w-full px-6 flex flex-col items-center">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold tracking-widest text-primary uppercase mb-4"
          >
            Milestones
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white font-heading"
          >
            Achievements & <span className="text-gradient">Education</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Achievements */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-3xl bg-white/5 border border-white/10 flex items-start gap-4 hover:border-primary/50 transition-colors group"
              >
                <div className="p-3 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">{item.title}</h4>
                  <p className="text-sm text-slate-400">{item.subtitle}</p>
                </div>
              </motion.div>
            ))}

            {/* Certifications Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-blue-500/10 border border-white/10 backdrop-blur-md"
            >
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <ShieldCheck className="text-primary" /> Professional Certifications
              </h4>
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert, i) => (
                  <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300 hover:text-white hover:bg-primary/20 transition-colors cursor-default">
                    {cert}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-between"
          >
            <div>
              <div className="p-4 rounded-2xl bg-blue-500/10 text-blue-500 w-fit mb-6">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2 leading-tight">
                Finolex Academy of Management and Technology
              </h4>
              <p className="text-primary font-medium mb-4">Bachelor of Engineering in IT</p>
              <p className="text-sm text-slate-400 mb-8">
                Focused on software engineering, system design, and advanced data structures. 
                Consistently ranked among the top performers in the department.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500">Duration</span>
                <span className="text-white">2022 – 2026</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500">Current CGPA</span>
                <span className="text-2xl font-bold text-gradient">9.0/10</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
