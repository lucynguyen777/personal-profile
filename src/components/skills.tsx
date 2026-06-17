"use client";

import { motion } from "framer-motion";

const skillClusters = [
  {
    category: "AI & Data",
    items: ["Large Language Models", "PyTorch", "NLP Pipelines", "Pandas", "NumPy", "Data Visualization"]
  },
  {
    category: "Bioinformatics",
    items: ["Biopython", "Sequence Analysis", "Computational Biology", "Genomic Pipelines", "Scientific Data Parsing"]
  },
  {
    category: "Research",
    items: ["Experimental Design", "Literature Review", "Quantitative Analysis", "Benchmarking", "Scientific Writing"]
  },
  {
    category: "Software Engineering",
    items: ["TypeScript", "Python", "React", "Next.js", "System Design", "Git"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section-pad bg-[#FAF9F6] border-t border-[#111]/[0.06]">
      <div className="page-width">
        <div className="mb-16 md:mb-24">
          <span className="chapter-marker">Chapter 06.5</span>
        </div>

        <div className="page-spread">
          <div className="spread-left mb-16 md:mb-0">
            <h2 className="font-serif text-5xl md:text-7xl tracking-tight text-[#111] leading-[0.9] sticky top-32">
              CAPABILITIES
            </h2>
          </div>

          <div className="spread-right">
            <div className="space-y-16">
              {skillClusters.map((cluster, index) => (
                <motion.div
                  key={cluster.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-serif text-[#111] border-b border-[#111]/10 pb-4">
                    {cluster.category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {cluster.items.map((item) => (
                      <span
                        key={item}
                        className="px-4 py-2 border border-[#111]/10 rounded-full text-sm text-[#111]/70 bg-[#F3F0EA]/50"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}