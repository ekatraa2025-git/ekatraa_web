"use client";

import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import { useLanguage } from "@/context/LanguageContext";

export function Newsletter() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    try {
      // Replace with your API or newsletter service
      await new Promise((r) => setTimeout(r, 800));
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="newsletter" className="section-padding bg-ekatraa-surface">
      <div className="max-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            {t.newsletter.title}
          </h2>
          <p className="mt-3 text-gray-600">
            {t.newsletter.subtitle}
          </p>
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.newsletter.placeholder}
              required
              disabled={status === "loading"}
              className="flex-1 rounded-full border-2 border-ekatraa-border bg-white px-5 py-3.5 text-gray-900 placeholder-gray-400 focus:border-ekatraa-primary focus:outline-none focus:ring-2 focus:ring-ekatraa-primary/20 transition-all disabled:opacity-60"
              aria-label="Email"
            />
            <motion.button
              type="submit"
              disabled={status === "loading"}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full bg-gradient-to-r from-ekatraa-primary to-ekatraa-primary-end text-white px-6 py-3.5 font-semibold shadow-lg shadow-ekatraa-primary/25 hover:shadow-ekatraa-primary/40 transition-all disabled:opacity-70"
            >
              {status === "loading" ? "..." : t.newsletter.button}
            </motion.button>
          </form>
          {status === "success" && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-ekatraa-primary font-medium"
            >
              {t.newsletter.success}
            </motion.p>
          )}
          {status === "error" && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-red-600 text-sm"
            >
              Something went wrong. Please try again.
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
