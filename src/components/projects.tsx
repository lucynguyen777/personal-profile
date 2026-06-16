"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Dictionary Mobile",
    problem:
      "Language learning tools are fragmented across dictionaries, flashcard apps, and reading platforms, creating friction for learners.",
    solution:
      "Unified AI-powered dictionary and learning platform that combines IPA analysis, intelligent flashcards, reading mode, an AI assistant, and translation into a seamless experience.",
    impact: "Reduces context-switching and accelerates vocabulary acquisition through integrated, AI-driven workflows.",
    tags: ["AI", "Mobile", "NLP", "Language Learning"],
    delay: 0,
  },
  {
    title: "PubMed Research Analyzer",
    problem:
      "Scientific literature is difficult to process at scale. Researchers spend hours manually reviewing and synthesizing findings.",
    solution:
      "Automated research analysis workflow that ingests PubMed articles, extracts key findings, identifies trends, and generates structured summaries.",
    impact: "Enables researchers to process 10x more literature with higher comprehension and less manual effort.",
    tags: ["Bioinformatics", "NLP", "LLM", "Research Automation"],
    delay: 0.2,
  },
  {
    title: "Bioinformatics Toolkit",
    problem:
      "Researchers repeatedly perform basic sequence operations using scattered command-line tools, scripts, and web interfaces.",
    solution:
      "Reusable toolkit for DNA and protein analysis with a unified interface. Covers sequence alignment, motif finding, GC content analysis, and phylogenetic preprocessing.",
    impact: "Standardizes common workflows, reduces setup time, and makes bioinformatics more accessible to wet-lab researchers.",
    tags: ["Bioinformatics", "Python", "Computational Biology"],
    delay: 0.4,
  },
  {
    title: "LLM Evaluation Framework",
    problem:
      "Evaluating model quality is inconsistent across teams and use cases. Results are often anecdotal rather than systematic.",
    solution:
      "Framework for systematic evaluation of LLM outputs across multiple dimensions: accuracy, coherence, instruction following, and domain-specific benchmarks.",
    impact: "Provides reproducible, standardized metrics that enable informed model selection and iterative improvement.",
    tags: ["LLM", "Evaluation", "ML Infrastructure"],
    delay: 0.6,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl md:text-7xl font-bold tracking-tighter mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="border-t border-[#111111]/10 pt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: project.delay }}
            >
              <h3 className="text-4xl md:text-5xl font-bold mb-8">
                {project.title}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-[#111111]/50 mb-3">
                    Problem
                  </h4>
                  <p className="text-lg leading-relaxed text-[#111111]/80">
                    {project.problem}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm uppercase tracking-widest text-[#111111]/50 mb-3">
                    Solution
                  </h4>
                  <p className="text-lg leading-relaxed text-[#111111]/80">
                    {project.solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm uppercase tracking-widest text-[#111111]/50 mb-3">
                    Impact
                  </h4>
                  <p className="text-lg leading-relaxed text-[#111111]/80">
                    {project.impact}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 text-sm text-[#111111]/70 bg-[#111111]/5 rounded"
                  >
                    {tag}
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