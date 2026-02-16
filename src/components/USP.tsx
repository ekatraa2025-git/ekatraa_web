"use client";

import { motion } from "framer-motion";

const usps = [
  "Revenue at booking stage",
  "Insurance-based trustworthy ecosystem",
  "Highly scalable, asset-light model",
  "Full ecosystem on one platform",
  "AI + Digital payments",
  "First-mover locally",
];

export function USP() {
  return (
    <section className="section-padding bg-white">
      <div className="max-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Why Ekatraa
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            Built for trust, scale, and the future of events in India.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {usps.map((u, i) => (
            <motion.span
              key={u}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="inline-flex items-center rounded-full bg-ekatraa-surface border border-ekatraa-border px-5 py-2.5 text-sm font-medium text-gray-700"
            >
              {u}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
