"use client";

import { motion } from "framer-motion";

const skillClusters = [
  {
    category: "AI & Data",
    items: [
      "LLM Fine-tuning",
      "Prompt Engineering",
      "RAG Systems",
      "NLP / NLU",
      "Data Pipeline Design",
      "Model Evaluation",
    ],
    delay: 0,
  },
  {
    category: "Bioinformatics",
    items: [
      "Sequence Analysis",
      "Genomic Data Processing",
      "Phylogenetics",
      "Protein Structure",
      "Biological Databases",
      "Scientific Workflows",
    ],
    delay: 0.2,
  },
  {
    category: "Research",
    items: [
      "Experimental Design",
      "Literature Review",
      "Statistical Analysis",
      "Scientific Writing",
      "Hypothesis Testing",
      "Reproducible Research",
    ],
    delay: 0.4,
  },
  {
    category: "Software Engineering",
    items: [
      "TypeScript / Python",
      "Next.js / React",
      "API Design",
      "Version Control",
      "Testing & CI/CD",
      "System Architecture",
    ],
    delay: 0.6,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl md:text-7xl font-bold tracking-tighter mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {skillClusters.map((cluster, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: cluster.delay }}
            >
              <h3 className="text-2xl font-semibold mb-6 border-b border-[#111111]/10 pb-4">
                {cluster.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cluster.items.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 text-sm text-[#111111]/70 bg-[#111111]/5 rounded hover:bg-[#111111]/10 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}