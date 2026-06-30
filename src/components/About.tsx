"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-xs text-accent tracking-widest uppercase mb-4 block">
            01 / About
          </span>
          <h2 className="text-3xl font-bold tracking-tight mb-8">
            Building systems that last
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-5 text-muted leading-relaxed text-base"
        >
          <p>
            I&apos;m a backend developer focused on Java and Spring Boot, with
            experience building RESTful APIs, integrating databases, and
            deploying services to the cloud. I care about writing code that
            &apos;s maintainable six months later, not just code that works
            today.
          </p>
          <p>
            Outside of backend work, I also build frontends with Next.js when a
            project needs full ownership end to end. Currently working as a
            Spring Boot Backend Developer at a fintech company, while also
            running my own software studio on the side.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
