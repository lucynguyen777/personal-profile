"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 pb-24 md:pb-32">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Ha Nguyen
        </motion.h1>

        <motion.p
          className="text-2xl md:text-3xl lg:text-4xl text-[#111111] mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Building AI tools for scientific research, language learning, and
          biological discovery.
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            href="#projects"
            className="inline-block px-8 py-4 text-lg bg-[#111111] text-white hover:bg-[#333333] transition-colors duration-300 rounded"
          >
            View Work
          </Link>
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 text-lg border-2 border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white transition-colors duration-300 rounded"
          >
            GitHub
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 text-lg border border-[#111111]/30 text-[#111111] hover:bg-[#111111] hover:text-white transition-colors duration-300 rounded"
          >
            LinkedIn
          </Link>
        </motion.div>

        <motion.p
          className="mt-16 text-lg md:text-xl text-[#111111]/70 max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          I combine biological sciences, artificial intelligence, and software
          engineering to create practical tools for researchers, students, and
          knowledge workers.
        </motion.p>
      </div>
    </section>
  );
}