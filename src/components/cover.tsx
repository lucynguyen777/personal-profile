"use client";

import { motion } from "framer-motion";

export default function Cover() {
  return (
    <section id="cover" className="min-h-screen flex flex-col justify-center relative section-pad">
      <div className="page-width w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-12"
        >
          {/* Main Title */}
          <div>
            <h1 className="font-serif text-[12vw] md:text-[140px] leading-[0.85] tracking-tight text-[#111]">
              <span className="block">HA</span>
              <span className="block text-[#7A6EA5]">NGUYEN</span>
            </h1>
          </div>

          {/* Subtext */}
          <div className="md:w-[320px] pb-4">
            <div className="h-px w-12 bg-[#111]/20 mb-6" />
            <p className="text-sm md:text-base leading-relaxed text-[#111]/60">
              I combine biological sciences, artificial intelligence, and software engineering to build practical tools for research, language learning, and scientific discovery.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-24 md:mt-40 pt-8 border-t border-[#111]/[0.08] flex justify-between items-center"
        >
          <span className="overline">Portfolio Publication</span>
          <span className="overline">2026 Edition</span>
        </motion.div>
      </div>
    </section>
  );
}