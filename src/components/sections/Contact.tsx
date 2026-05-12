"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, GitBranch, Link2, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 w-full px-6 flex flex-col items-center">
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-4">
              Get in Touch
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 font-heading">
              Let&apos;s build something{" "}
              <span className="text-gradient">extraordinary</span>
            </h3>
            <p className="text-lg text-slate-400 mb-12 max-w-md leading-relaxed">
              Whether you have a question, a project idea, or just want to say hi, my inbox is
              always open.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-6 group">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-primary group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:ashishghadigaonkar85@gmail.com"
                    className="text-lg text-white hover:text-primary transition-colors"
                  >
                    ashishghadigaonkar85@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-primary group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+918010371285"
                    className="text-lg text-white hover:text-primary transition-colors"
                  >
                    +91 8010371285
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-primary group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">
                    Location
                  </p>
                  <p className="text-lg text-white">Mumbai, Maharashtra, India</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {[
                {
                  icon: <GitBranch className="w-5 h-5" />,
                  href: "https://github.com/ashishghadigaonkar",
                  label: "GitHub",
                },
                {
                  icon: <Link2 className="w-5 h-5" />,
                  href: "https://linkedin.com/in/ashishghadigaonkar",
                  label: "LinkedIn",
                },
                {
                  icon: <MessageSquare className="w-5 h-5" />,
                  href: "https://dev.to/ashish_ghadigaonkar",
                  label: "Dev.to",
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-4 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-primary transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px] rounded-full" />

            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 ml-1">Full Name</label>
                  <Input
                    placeholder="John Doe"
                    className="bg-white/5 border-white/10 focus:border-primary/50 text-white rounded-xl h-12"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 ml-1">Email Address</label>
                  <Input
                    placeholder="john@example.com"
                    className="bg-white/5 border-white/10 focus:border-primary/50 text-white rounded-xl h-12"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 ml-1">Subject</label>
                <Input
                  placeholder="Project Inquiry"
                  className="bg-white/5 border-white/10 focus:border-primary/50 text-white rounded-xl h-12"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 ml-1">Message</label>
                <Textarea
                  placeholder="How can I help you?"
                  className="bg-white/5 border-white/10 focus:border-primary/50 text-white rounded-2xl min-h-[150px] resize-none"
                />
              </div>
              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold rounded-xl h-14 group"
              >
                Send Message{" "}
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
