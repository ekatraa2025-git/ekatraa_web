"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "AI-enabled platform",
    description: "Website & mobile app powered by smart technology.",
    icon: "✨",
  },
  {
    title: "One-stop booking",
    description: "All event services in one place — venues, catering, decor, and more.",
    icon: "📌",
  },
  {
    title: "Verified ecosystem",
    description: "Trusted customers and verified vendors on a single platform.",
    icon: "✓",
  },
  {
    title: "Secure payments",
    description: "Digital payments you can rely on, every time.",
    icon: "🔒",
  },
  {
    title: "Insurance-backed",
    description: "Bookings backed by insurance for your peace of mind.",
    icon: "🛡️",
  },
];

export function Features() {
  return (
    <section id="features" className="section-padding bg-ekatraa-surface">
      <div className="max-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Our Solution
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Ekatraa brings together everything you need for stress-free event
            planning.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl bg-white border border-ekatraa-border p-6 shadow-sm hover:shadow-md hover:border-ekatraa-primary/30 transition-all"
            >
              <span className="text-3xl">{f.icon}</span>
              <h3 className="mt-3 font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
