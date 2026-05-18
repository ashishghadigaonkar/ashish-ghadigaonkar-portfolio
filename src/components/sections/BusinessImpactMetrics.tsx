"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const metrics = [
  { value: 1, suffix: "M+", label: "Records Processed" },
  { value: 40, suffix: "%", label: "Manual Effort Reduction" },
  { value: 35, suffix: "%", label: "Accuracy Improvement" },
  { value: 90, suffix: "%+", label: "NLP Intent Accuracy" },
  { value: 60, suffix: "%", label: "Better Screening Efficiency" },
  { value: 150, suffix: "+", label: "DSA Problems Solved" },
];

function Counter({ from, to, duration = 2.5, suffix = "" }: { from: number, to: number, duration?: number, suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    if (isInView) {
      let start: number | null = null;
      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / (duration * 1000), 1);
        // easeOutQuart
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        setDisplayValue(Math.floor(easeProgress * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setDisplayValue(to);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
}

export default function BusinessImpactMetrics() {
  return (
    <section className="relative py-32 w-full bg-[#0a0a0a] overflow-hidden z-20">
      {/* Cinematic Top Border Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 tracking-tight"
          >
            Delivering <span className="text-gradient">Measurable Impact</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 font-light max-w-2xl mx-auto"
          >
            Engineering scalable solutions that drive real-world efficiency, performance, and automation.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center justify-center p-8 md:p-12 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Premium hover glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-6 group-hover:from-white group-hover:to-gray-300 transition-all duration-500 font-heading tabular-nums tracking-tighter">
                  <Counter from={0} to={metric.value} suffix={metric.suffix} />
                </div>
                <p className="text-sm md:text-base text-gray-400 font-medium tracking-widest uppercase max-w-[200px] leading-relaxed group-hover:text-primary transition-colors duration-500">
                  {metric.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
