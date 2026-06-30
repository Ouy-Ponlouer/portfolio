"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg bg-background border border-border text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-colors";

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="font-mono text-xs text-accent tracking-widest uppercase mb-4 block">
            05 / Contact
          </span>
          <h2 className="text-3xl font-bold tracking-tight mb-3">
            Let&apos;s talk
          </h2>
          <p className="text-muted">
            Open to backend or full-stack roles. Drop a message or reach me
            directly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {status === "success" ? (
              <div className="p-6 rounded-xl border border-accent/30 bg-accent/5 text-sm text-foreground">
                <p className="font-medium mb-1">Message sent.</p>
                <p className="text-muted">I&apos;ll get back to you soon.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 text-xs text-accent hover:underline"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs text-muted mb-1.5 font-mono">
                    Name
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs text-muted mb-1.5 font-mono">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs text-muted mb-1.5 font-mono">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What's on your mind?"
                    required
                    rows={5}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {status === "error" && (
                  <p className="text-xs text-red-400">
                    Something went wrong. Try emailing me directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="flex items-center gap-2 px-6 py-3 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent/90 transition-colors disabled:opacity-60"
                >
                  <Send size={14} />
                  {status === "loading" ? "Sending…" : "Send message"}
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-5"
          >
            <a
              href="mailto:genzdigital7926@gmail.com"
              className="flex items-center gap-3 text-sm text-muted hover:text-accent transition-colors group"
            >
              <div className="p-2.5 rounded-lg border border-border group-hover:border-accent/40 transition-colors">
                <Mail size={16} />
              </div>
              genzdigital7926@gmail.com
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-muted hover:text-accent transition-colors group"
            >
              <div className="p-2.5 rounded-lg border border-border group-hover:border-accent/40 transition-colors">
                <GithubIcon size={16} />
              </div>
              GitHub
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-muted hover:text-accent transition-colors group"
            >
              <div className="p-2.5 rounded-lg border border-border group-hover:border-accent/40 transition-colors">
                <LinkedinIcon size={16} />
              </div>
              LinkedIn
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
