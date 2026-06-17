"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Online Tutor",
    company: "Gauth Expert",
    period: "2023 — Present",
    description: "Provided step-by-step explanations for academic questions, evaluated student solutions, delivered clear educational feedback, and supported learners in a fully remote environment.",
  },
  {
    role: "AI Research Intern",
    company: "Research Lab",
    period: "2022 — 2023",
    description: "Developed NLP pipelines and evaluation frameworks for large language models. Conducted systematic benchmarking and contributed to research on model alignment.",
  },
  {
    role: "Biological Sciences Graduate",
    company: "University",
    period: "2018 — 2022",
    description: "Bachelor's degree in Biological Sciences with coursework in molecular biology, genetics, bioinformatics, and computational methods. Thesis on computational approaches to sequence analysis.",
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section-pad bg-[#F3F0EA]">
      <div className="page-width">
        <div className="mb-16 md:mb-24">
          <span className="chapter-marker">Chapter 07</span>
        </div>

        <div className="page-spread">
          <div className="spread-left mb-16 md:mb-0">
            <h2 className="font-serif text-5xl md:text-7xl tracking-tight text-[#111] leading-[0.9] sticky top-32">
              EXPERIENCE
            </h2>
          </div>

          <div className="spread-right">
            <div className="space-y-16 md:space-y-24">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8 mb-6">
                    <h3 className="text-3xl md:text-4xl font-serif text-[#111]">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-4 text-sm font-medium tracking-widest uppercase text-[#111]/40">
                      <span>{exp.company}</span>
                      <span className="hidden md:block w-8 h-px bg-[#111]/20" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  
                  <p className="text-xl leading-relaxed text-[#111]/70 max-w-2xl">
                    {exp.description}
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