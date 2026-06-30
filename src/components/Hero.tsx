"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-3xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="font-mono text-xs text-accent tracking-widest uppercase mb-6 block">
            Available for backend &amp; full-stack roles
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6"
        >
          Java Backend Developer{" "}
          <span className="text-accent">building scalable APIs</span> with
          Spring Boot
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="text-lg text-muted leading-relaxed mb-10 max-w-2xl"
        >
          I design and ship backend systems that handle real traffic, from REST
          APIs to database architecture. I also build frontends with Next.js
          when a project needs full ownership end to end.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="flex flex-wrap gap-4"
        >
          <button
            onClick={() => scrollTo("projects")}
            className="px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent/90 transition-colors text-sm"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-card transition-colors text-sm"
          >
            Contact Me
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={() => scrollTo("about")}
          className="text-muted hover:text-accent transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown size={20} />
        </button>
      </motion.div>
    </section>
  );
}
