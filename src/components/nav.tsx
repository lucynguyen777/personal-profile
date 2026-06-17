"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const chapters = [
  { label: "Cover", href: "#cover" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#FAF9F6]/80 backdrop-blur-lg shadow-[0_1px_0_rgba(17,17,17,0.06)]"
          : "bg-transparent"
      }`}
    >
      <nav className="page-width flex items-center justify-between h-16 md:h-20">
        <a
          href="#cover"
          className="text-sm font-medium text-[#111]/60 hover:text-[#111] transition-colors"
        >
          HN
        </a>

        <div className="hidden md:flex items-center gap-8">
          {chapters.map((ch) => (
            <a
              key={ch.href}
              href={ch.href}
              className="text-xs tracking-wider uppercase text-[#111]/40 hover:text-[#111] transition-colors"
            >
              {ch.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="text-xs tracking-wider uppercase text-[#7A6EA5] hover:text-[#111] transition-colors font-medium"
        >
          Let's Talk
        </a>
      </nav>
    </motion.header>
  );
}