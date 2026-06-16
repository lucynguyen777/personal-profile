"use client";

import { motion } from "framer-motion";

const interests = [
  {
    title: "Artificial Intelligence",
    description:
      "Advancing the capabilities and understanding of intelligent systems through novel architectures, training methods, and alignment techniques.",
    delay: 0,
  },
  {
    title: "Bioinformatics",
    description:
      "Applying computational methods to biological data. Developing tools that accelerate genomic analysis, protein modeling, and drug discovery pipelines.",
    delay: 0.2,
  },
  {
    title: "Scientific Discovery",
    description:
      "Using AI to accelerate the scientific method: automated hypothesis generation, experimental design, and literature synthesis at scale.",
    delay: 0.4,
  },
  {
    title: "LLM Evaluation",
    description:
      "Building rigorous, reproducible frameworks for assessing model capabilities, limitations, and safety across diverse domains and tasks.",
    delay: 0.6,
  },
  {
    title: "Language Technology",
    description:
      "Creating systems that understand, generate, and translate human language with greater nuance, accuracy, and cultural awareness.",
    delay: 0.8,
  },
  {
    title: "Human Learning",
    description:
      "Understanding how people learn and designing AI tools that augment rather than replace human cognition and curiosity.",
    delay: 1.0,
  },
];

export default function ResearchInterests() {
  return (
    <section id="research" className="py-24 px-6 md:px-12 lg:px-24 bg-[#F7F5F2]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl md:text-7xl font-bold tracking-tighter mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Research Interests
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interests.map((interest, index) => (
            <motion.div
              key={index}
              className="group p-8 bg-white rounded"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: interest.delay }}
            >
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-[#333333] transition-colors">
                {interest.title}
              </h3>
              <p className="text-base leading-relaxed text-[#111111]/70">
                {interest.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}