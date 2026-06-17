"use client";

import { motion } from "framer-motion";

const projects = [
  {
    chapter: "Chapter 02",
    title: "AI DICTIONARY MOBILE",
    role: "Product & Engineering",
    problem: "Language learning tools are fragmented, requiring users to switch between dictionaries, flashcards, and translation apps.",
    solution: "A unified AI-powered dictionary and language learning ecosystem that centralizes the learning experience.",
    features: ["Word Lookup & IPA Analysis", "Pronunciation Feedback", "Automated Flashcards", "Reading Mode", "AI Chatbot Assistant", "Contextual Translation"],
    tech: ["React Native", "TypeScript", "Firebase", "LLM APIs", "NLP"],
    isFlagship: true,
  },
  {
    chapter: "Chapter 03",
    title: "PUBMED RESEARCH ANALYZER",
    role: "Research Engineering",
    problem: "Scientific literature is difficult to process at scale, making literature reviews time-consuming and error-prone.",
    solution: "An automated literature analysis workflow that extracts, summarizes, and categorizes research papers.",
    features: ["Automated PubMed Search", "PMID Retrieval", "Abstract Extraction", "AI-Generated Summaries", "CSV Export Workflow"],
    tech: ["Python", "Pandas", "PubMed API", "OpenAI API"],
    isFlagship: false,
  },
  {
    chapter: "Chapter 04",
    title: "BIOINFORMATICS TOOLKIT",
    role: "Computational Biology",
    problem: "Researchers repeatedly write custom scripts for basic sequence operations, slowing down experimental design.",
    solution: "A robust, reusable toolkit for standard DNA and protein sequence analysis tasks.",
    features: ["FASTA Parsing", "GC Content Analysis", "Reverse Complement Generation", "DNA Translation", "ORF Finder"],
    tech: ["Python", "Biopython", "NumPy"],
    isFlagship: false,
  },
  {
    chapter: "Chapter 05",
    title: "LLM EVALUATION FRAMEWORK",
    role: "AI Alignment",
    problem: "Evaluating model quality across different prompts and use cases is inconsistent and difficult to quantify.",
    solution: "A systematic evaluation framework to benchmark model responses against predefined rubrics.",
    features: ["Instruction Following Evaluation", "Hallucination Detection", "Automated Response Scoring", "Benchmark Testing Suite"],
    tech: ["Python", "LLMs", "Prompt Engineering", "Pytest"],
    isFlagship: false,
  }
];

function ProjectImagePlaceholder({ title, className = "" }: { title: string, className?: string }) {
  return (
    <div className={`bg-[#F3F0EA] flex items-center justify-center border border-[#111]/5 ${className}`}>
      <span className="font-serif text-[#111]/20 text-xl tracking-widest uppercase text-center px-6">
        {title} Visual
      </span>
    </div>
  );
}

export default function Projects() {
  return (
    <div id="projects" className="bg-[#FAF9F6]">
      {projects.map((project, index) => (
        <section key={index} className="section-pad border-t border-[#111]/[0.06]">
          <div className="page-width">
            <div className="mb-16 md:mb-24">
              <span className="chapter-marker">{project.chapter}</span>
            </div>

            <div className="mb-16 md:mb-24">
              <h2 className="font-serif text-5xl md:text-7xl tracking-tight text-[#111] leading-[0.9] mb-6">
                {project.title}
              </h2>
              <p className="text-xl md:text-2xl text-[#7A6EA5] font-serif">
                {project.role}
              </p>
            </div>

            {project.isFlagship ? (
              // Flagship project layout
              <div className="space-y-16 md:space-y-32">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="w-full aspect-[16/9] md:aspect-[21/9]"
                >
                  <ProjectImagePlaceholder title="App Showcase" className="w-full h-full rounded-2xl" />
                </motion.div>

                <div className="page-spread">
                  <div className="spread-left mb-12 md:mb-0">
                    <h3 className="text-sm font-medium tracking-widest uppercase text-[#111]/40 mb-4">The Challenge</h3>
                    <p className="text-2xl font-serif leading-relaxed text-[#111]">{project.problem}</p>
                  </div>
                  <div className="spread-right">
                    <h3 className="text-sm font-medium tracking-widest uppercase text-[#111]/40 mb-4">The Solution</h3>
                    <p className="text-xl leading-relaxed text-[#111]/70">{project.solution}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                  <ProjectImagePlaceholder title="Feature UI" className="aspect-square md:aspect-[4/3] rounded-2xl" />
                  <ProjectImagePlaceholder title="Architecture" className="aspect-square md:aspect-[4/3] rounded-2xl" />
                </div>

                <div className="page-spread pt-16 border-t border-[#111]/10">
                  <div className="spread-left mb-8 md:mb-0">
                    <h3 className="text-sm font-medium tracking-widest uppercase text-[#111]/40 mb-6">Capabilities</h3>
                    <ul className="space-y-4">
                      {project.features.map(f => (
                        <li key={f} className="flex items-start gap-4 text-[#111]/80">
                          <span className="text-[#7A6EA5] mt-1">✦</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="spread-right">
                    <h3 className="text-sm font-medium tracking-widest uppercase text-[#111]/40 mb-6">Technologies</h3>
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map(t => (
                        <span key={t} className="px-4 py-2 border border-[#111]/10 rounded-full text-sm text-[#111]/70">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // Standard project layout
              <div className="space-y-16">
                <div className="page-spread items-center">
                  <div className="spread-left order-2 md:order-1 mt-12 md:mt-0">
                    <div className="space-y-12">
                      <div>
                        <h3 className="text-sm font-medium tracking-widest uppercase text-[#111]/40 mb-4">Problem</h3>
                        <p className="text-xl font-serif text-[#111]">{project.problem}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium tracking-widest uppercase text-[#111]/40 mb-4">Solution</h3>
                        <p className="text-[#111]/70 leading-relaxed">{project.solution}</p>
                      </div>
                      <div className="pt-8 border-t border-[#111]/10">
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map(t => (
                            <span key={t} className="text-xs tracking-wider uppercase text-[#7A6EA5]">
                              {t} <span className="text-[#111]/20 mx-2 last:hidden">•</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="spread-right order-1 md:order-2"
                  >
                    <ProjectImagePlaceholder title="Overview" className="w-full aspect-[4/3] rounded-2xl" />
                  </motion.div>
                </div>
              </div>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}