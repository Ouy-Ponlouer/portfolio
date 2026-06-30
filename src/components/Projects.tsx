"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";

type Project = {
  title: string;
  description: string;
  detail: string;
  tech: string[];
  repo?: string;
  demo?: string;
};

const PROJECTS: Project[] = [
  {
    title: "Contract Management System",
    description:
      "Spring Boot system for managing contract lifecycles — creation, multi-stage approval, renewal, and document storage.",
    detail:
      "Built a state-based approval workflow where contracts move through review stages with role-based permissions at each step, preventing unauthorized state transitions.",
    tech: ["Java", "Spring Boot", "Spring Security", "MyBatis", "PostgreSQL"],
  },
  {
    title: "HR Management System",
    description:
      "Backend handling employee records, leave management, and role-based access for HR staff vs regular employees.",
    detail:
      "Designed a leave approval flow that detects overlapping requests across departments and automatically recalculates balances on approval or rejection.",
    tech: ["Java", "Spring Boot", "Spring Security", "JPA", "MySQL"],
  },
  {
    title: "Fixed Asset Management System",
    description:
      "Tracks company assets across their full lifecycle — depreciation, assignment, transfer, and audit history.",
    detail:
      "Implemented straight-line and declining-balance depreciation calculations that run on a scheduled job, with an immutable audit trail logging every change to asset records.",
    tech: ["Java", "Spring Boot", "MyBatis", "MySQL"],
  },
  {
    title: "Smart GPS",
    description:
      "Real-time location tracking system that ingests GPS data from multiple devices and displays live positions on a map.",
    detail:
      "Used WebSocket to push continuous location updates to the frontend without polling, batching database writes to avoid overloading under high device concurrency.",
    tech: ["Java", "Spring Boot", "WebSocket", "PostgreSQL", "React"],
  },
];

function Badge({ label }: { label: string }) {
  return (
    <span className="font-mono text-xs px-2 py-0.5 rounded bg-accent/10 text-accent border border-accent/20">
      {label}
    </span>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="font-mono text-xs text-accent tracking-widest uppercase mb-4 block">
            03 / Projects
          </span>
          <h2 className="text-3xl font-bold tracking-tight">What I&apos;ve built</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-xl border border-border bg-card flex flex-col gap-4 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
            >
              <div>
                <h3 className="font-semibold text-base mb-2">{project.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-3">
                  {project.description}
                </p>
                <p className="text-xs text-muted/70 leading-relaxed italic">
                  {project.detail}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {project.tech.map((t) => (
                  <Badge key={t} label={t} />
                ))}
              </div>

              {(project.repo || project.demo) && (
                <div className="flex gap-3 pt-1">
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-muted hover:text-accent transition-colors"
                    >
                      <GithubIcon size={14} />
                      View Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-muted hover:text-accent transition-colors"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
