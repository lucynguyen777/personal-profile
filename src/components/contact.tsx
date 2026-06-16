"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const links = [
  {
    label: "Email",
    href: "mailto:hello@hanguyen.dev",
  },
  {
    label: "GitHub",
    href: "https://github.com/hanguyen",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/hanguyen",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 pb-48">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl md:text-7xl font-bold tracking-tighter mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contact
        </motion.h2>

        <motion.p
          className="text-xl md:text-2xl text-[#111111]/70 max-w-2xl mb-16 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Interested in research collaborations, AI tool development, or
          bioinformatics projects. Open to roles at AI labs, research
          institutes, and scientific companies.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={
                link.href.startsWith("mailto")
                  ? undefined
                  : "noopener noreferrer"
              }
              className="text-2xl font-semibold text-[#111111]/80 hover:text-[#111111] transition-colors border-b border-[#111111]/20 hover:border-[#111111]/60 pb-1"
            >
              {link.label}
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}