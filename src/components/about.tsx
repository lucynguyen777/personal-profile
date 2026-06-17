"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section-pad bg-[#F3F0EA]">
      <div className="page-width">
        <div className="mb-16 md:mb-24">
          <span className="chapter-marker">Chapter 01</span>
        </div>

        <div className="page-spread items-start">
          <div className="spread-left mb-12 md:mb-0 sticky top-32">
            <h2 className="font-serif text-6xl md:text-8xl tracking-tight text-[#111] leading-[0.9]">
              ABOUT
            </h2>
          </div>

          <div className="spread-right space-y-8 md:space-y-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-2xl md:text-4xl font-serif text-[#111] leading-tight"
            >
              My journey began in biological sciences, where I learned to analyze complex natural systems. Today, I apply that same analytical rigor to building artificial intelligence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="prose prose-lg text-[#111]/70 leading-relaxed max-w-none space-y-6"
            >
              <p>
                As an AI Product Builder and Research Engineer, my focus is on bridging the gap between theoretical capabilities and practical application. I specialize in creating tools that enhance how we learn, research, and discover.
              </p>
              <p>
                Whether it's developing evaluation frameworks for large language models or building specialized bioinformatics pipelines, my work is driven by a desire to accelerate scientific and human progress.
              </p>
              <p>
                I thrive at the intersection of disciplines, combining molecular biology insights with modern software engineering and advanced machine learning techniques to solve multi-faceted problems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-8 border-t border-[#111]/10 flex flex-wrap gap-4"
            >
              <span className="px-4 py-2 border border-[#111]/20 rounded-full text-sm text-[#111]/60">AI Product Builder</span>
              <span className="px-4 py-2 border border-[#111]/20 rounded-full text-sm text-[#111]/60">Bioinformatics</span>
              <span className="px-4 py-2 border border-[#111]/20 rounded-full text-sm text-[#111]/60">Research Engineer</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}