"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Globe } from "lucide-react";
import Link from "next/link";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5 0-1.4-.5-2.5-1.5-3.4.1-.3.6-1.6-.1-3.3 0 0-1.2-.4-3.9 1.4a12.3 12.3 0 0 0-7 0C6.1 1.2 4.9 1.6 4.9 1.6c-.7 1.7-.2 3 .1 3.3-1 1-1.5 2-1.5 3.4 0 5 3 6.2 6 6.5-.4.4-.8 1.1-.9 2.1-.8.4-2.8 1-4-1.1 0 0-.7-1.3-2-1.4 0 0-1.3-.1-.1 1.3 0 0 1 1.6 2.3 2.1 1.2.5 3 .5 3 .5v3" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function CinematicFooter() {
  return (
    <footer className="relative w-full bg-[#050505] pt-32 pb-16 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-heading font-light text-white mb-6"
          >
            Technology should create <br className="hidden md:block" />
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              meaningful impact.
            </span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link href="mailto:ashishghadigaonkar85@gmail.com">
              <button className="group relative px-8 py-4 bg-white text-black rounded-full font-medium text-lg overflow-hidden flex items-center gap-2 transition-transform hover:scale-105">
                <span className="relative z-10">Start a Conversation</span>
                <ArrowUpRight className="w-5 h-5 relative z-10 group-hover:rotate-45 transition-transform" />
                <div className="absolute inset-0 bg-primary translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
              </button>
            </Link>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5">
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Ashish Ghadigaonkar. All rights reserved.
          </div>
          
          <div className="flex gap-6">
            <SocialLink href="https://ashishghadigaonkar.onrender.com" icon={<Globe className="w-5 h-5" />} />
            <SocialLink href="https://github.com/ashishghadigaonkar" icon={<GithubIcon className="w-5 h-5" />} />
            <SocialLink href="https://linkedin.com/in/ashishghadigaonkar" icon={<LinkedinIcon className="w-5 h-5" />} />
            <SocialLink href="mailto:ashishghadigaonkar85@gmail.com" icon={<Mail className="w-5 h-5" />} />
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string, icon: React.ReactNode }) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <motion.div 
        whileHover={{ y: -3, color: "#fff", scale: 1.1 }}
        className="text-gray-500 transition-all p-3 hover:bg-white/5 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] rounded-full border border-transparent hover:border-white/10"
      >
        {icon}
      </motion.div>
    </Link>
  );
}
