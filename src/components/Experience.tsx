"use client";

import { motion } from "framer-motion";

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  type: string;
  description: string;
};

const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Java Spring Boot Backend Developer",
    company: "ChokChey Finance Plc",
    period: "Jan 2026 — Present",
    type: "On-site",
    description:
      "Develop and maintain backend services for a lending platform, building REST APIs with Spring Boot and handling secure data flows with Spring Security. Refactored the loan calculation engine to support multiple repayment schedules, cutting processing time by 40%.",
  },
  {
    role: "Founder",
    company: "GenZ Digital",
    period: "Jan 2026 — Present",
    type: "Self-employed",
    description:
      "Run a small software studio delivering web and backend projects for clients, covering system design, development, and deployment with Docker and cloud hosting. Delivered a contract management system for a local firm, reducing their paper-based approval cycle from days to hours.",
  },
  {
    role: "Web Design Specialist",
    company: "Brandbodia",
    period: "Jun 2025 — Dec 2025",
    type: "On-site",
    description:
      "Designed and built websites using PHP, with version control through GitHub. Delivered a 12-page marketing site for a retail client, including a custom admin panel for managing product listings.",
  },
  {
    role: "Frontend Web Developer Intern",
    company: "TURBO TECH",
    period: "Mar 2025 — May 2025",
    type: "On-site",
    description:
      "Built frontend interfaces and assisted with MySQL-backed PHP features during a three-month internship. Owned the implementation of a dashboard filter component that reduced manual report generation for the ops team.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-card">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="font-mono text-xs text-accent tracking-widest uppercase mb-4 block">
            04 / Experience
          </span>
          <h2 className="text-3xl font-bold tracking-tight">Work history</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-border" />

          <div className="space-y-10">
            {EXPERIENCE.map((item, i) => (
              <motion.div
                key={`${item.company}-${item.period}`}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative pl-8"
              >
                <div className="absolute left-0 top-2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-accent ring-2 ring-background" />

                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                  <div>
                    <h3 className="font-semibold text-sm">{item.role}</h3>
                    <p className="text-accent text-sm font-medium">{item.company}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="font-mono text-xs text-muted">{item.period}</span>
                    <span className="font-mono text-xs px-1.5 py-0.5 rounded bg-border text-muted">
                      {item.type}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-muted leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
