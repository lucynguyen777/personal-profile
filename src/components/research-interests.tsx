"use client";

import { motion } from "framer-motion";

const themes = [
  {
    title: "Artificial Intelligence",
    description: "Developing robust models and tools that extend human cognitive capabilities and automate complex analytical tasks.",
  },
  {
    title: "Bioinformatics",
    description: "Applying computational methods to understand biological data, from sequence analysis to evolutionary modeling.",
  },
  {
    title: "Scientific Discovery",
    description: "Building systems that accelerate the pace of research by streamlining literature review and experimental design.",
  },
  {
    title: "LLM Evaluation",
    description: "Creating rigorous frameworks to test, benchmark, and align language models for specialized domains.",
  },
  {
    title: "Language Technology",
    description: "Engineering applications that facilitate language acquisition, translation, and linguistic analysis.",
  },
  {
    title: "Human Learning",
    description: "Designing educational tools that adapt to individual learning patterns and provide meaningful feedback.",
  }
];

export default function ResearchInterests() {
  return (
    <section id="research" className="section-pad bg-[#FAF9F6] border-t border-[#111]/[0.06]">
      <div className="page-width">
        <div className="mb-16 md:mb-24">
          <span className="chapter-marker">Chapter 06</span>
        </div>

        <div className="page-spread">
          <div className="spread-left mb-16 md:mb-0">
            <h2 className="font-serif text-5xl md:text-7xl tracking-tight text-[#111] leading-[0.9] sticky top-32">
              RESEARCH<br />THEMES
            </h2>
          </div>

          <div className="spread-right">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
              {themes.map((theme, index) => (
                <motion.div
                  key={theme.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="space-y-4"
                >
                  <div className="h-px w-full bg-[#111]/10 mb-8" />
                  <span className="text-[#7A6EA5] font-serif text-xl italic">
                    0{index + 1}
                  </span>
                  <h3 className="text-2xl font-serif text-[#111] leading-tight">
                    {theme.title}
                  </h3>
                  <p className="text-[#111]/60 leading-relaxed">
                    {theme.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}