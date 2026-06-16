"use client";

import { motion } from "framer-motion";

const aboutItems = [
  {
    title: "Biological Sciences",
    description:
      "Deep expertise in molecular biology, genetics, and bioinformatics. Understanding the complexities of living systems provides the foundation for building meaningful AI tools.",
    delay: 0,
  },
  {
    title: "Transition to AI",
    description:
      "Recognizing the transformative power of artificial intelligence, I made a deliberate shift toward LLMs, machine learning, and computational research methods.",
    delay: 0.2,
  },
  {
    title: "Research Mindset",
    description:
      "Approaching problems with scientific rigor: formulating hypotheses, designing experiments, analyzing results, and iterating based on evidence.",
    delay: 0.4,
  },
  {
    title: "Product Development",
    description:
      "Building practical tools that solve real-world problems for researchers, students, and knowledge workers in scientific domains.",
    delay: 0.6,
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 bg-[#F7F5F2]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl md:text-7xl font-bold tracking-tighter mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {aboutItems.map((item, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: item.delay }}
            >
              <h3 className="text-3xl md:text-4xl font-semibold mb-6 group-hover:text-[#333333] transition-colors">
                {item.title}
              </h3>
              <p className="text-xl leading-relaxed text-[#111111]/80">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}