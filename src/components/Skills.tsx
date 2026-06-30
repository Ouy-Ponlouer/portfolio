"use client";

import { motion } from "framer-motion";
import { Server, Database, Globe, Wrench } from "lucide-react";

const SKILLS = [
  {
    icon: Server,
    title: "Backend",
    items: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Hibernate/JPA",
      "MyBatis",
      "Microservices",
    ],
  },
  {
    icon: Database,
    title: "Databases",
    items: ["PostgreSQL", "MySQL"],
  },
  {
    icon: Globe,
    title: "Frontend",
    items: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    icon: Wrench,
    title: "Tools & DevOps",
    items: ["Docker", "Git", "CI/CD", "Cloud Deployment"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-card">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="font-mono text-xs text-accent tracking-widest uppercase mb-4 block">
            02 / Skills
          </span>
          <h2 className="text-3xl font-bold tracking-tight">Tech stack</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map(({ icon: Icon, title, items }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-6 rounded-xl border border-border bg-background hover:border-accent/40 transition-colors"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Icon size={18} className="text-accent" />
                </div>
                <h3 className="font-semibold text-sm">{title}</h3>
              </div>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="font-mono text-xs text-muted flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/60 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
