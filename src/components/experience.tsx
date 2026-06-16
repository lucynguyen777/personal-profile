"use client";

import { motion } from "framer-motion";

const experience = [
  {
    role: "Online Tutor",
    company: "Gauth Expert",
    period: "Remote | 2024 — Present",
    description:
      "Provided educational support across diverse academic subjects while maintaining high standards of accuracy, clarity, and responsiveness in a remote environment. Developed communication skills and the ability to explain complex concepts to learners at varying levels.",
    delay: 0,
  },
];

const education = [
  {
    degree: "Biological Sciences",
    institution: "University",
    period: "",
    description:
      "Graduate with a strong foundation in molecular biology, genetics, and biochemistry. Developed analytical thinking, research methodology, and a systems-level understanding of complex biological processes that directly informs AI research.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24 bg-[#F7F5F2]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl md:text-7xl font-bold tracking-tighter mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        <div className="space-y-16">
          {experience.map((item, index) => (
            <motion.div
              key={index}
              className="relative pl-8 border-l-2 border-[#111111]/20"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: item.delay }}
            >
              <div className="absolute w-3 h-3 bg-[#111111] rounded-full left-[-7px] top-1.5" />
              <h3 className="text-3xl font-bold mb-1">{item.role}</h3>
              <p className="text-lg text-[#111111]/60 mb-1">{item.company}</p>
              <p className="text-sm text-[#111111]/40 mb-4">{item.period}</p>
              <p className="text-lg leading-relaxed text-[#111111]/80 max-w-2xl">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.h2
          className="text-5xl md:text-7xl font-bold tracking-tighter mb-20 mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>

        <div className="space-y-16">
          {education.map((item, index) => (
            <motion.div
              key={index}
              className="relative pl-8 border-l-2 border-[#111111]/20"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="absolute w-3 h-3 bg-[#111111] rounded-full left-[-7px] top-1.5" />
              <h3 className="text-3xl font-bold mb-1">{item.degree}</h3>
              <p className="text-lg text-[#111111]/60 mb-4">{item.institution}</p>
              <p className="text-lg leading-relaxed text-[#111111]/80 max-w-2xl">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}