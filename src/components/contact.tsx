"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const links = [
  { label: "Email", href: "mailto:hello@hanguyen.dev" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nguyenthithuha203/" },
  { label: "GitHub", href: "https://github.com/lucynguyen777" },
  { label: "Resume", href: "/resume.pdf" }
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 md:py-48 bg-[#FAF9F6] border-t border-[#111]/[0.06]">
      <div className="page-width">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-6xl md:text-8xl tracking-tight text-[#111] leading-[0.9] mb-12"
          >
            LET'S TALK
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl md:text-2xl text-[#111]/60 leading-relaxed max-w-2xl mx-auto mb-20"
          >
            Interested in research collaborations, AI tool development, or bioinformatics projects.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16"
          >
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') || link.href.startsWith('/') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto') || link.href.startsWith('/') ? undefined : 'noopener noreferrer'}
                className="text-sm font-medium tracking-widest uppercase text-[#111] hover:text-[#7A6EA5] transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-2 left-0 w-full h-px bg-[#7A6EA5] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </Link>
            ))}
          </motion.div>
        </div>

        <div className="mt-40 pt-8 border-t border-[#111]/[0.06] flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="overline">© {new Date().getFullYear()} Ha Nguyen</span>
          <span className="overline">Designed in 2026</span>
        </div>
      </div>
    </section>
  );
}