"use client";

import { motion } from "framer-motion";

const cards = [
  {
    id: "mobile",
    title: "Ekatraa Mobile App",
    subtitle: "For customers",
    description:
      "Plan your events with ease. Browse verified vendors, compare prices, book services, and pay securely — all in one app. From intimate gatherings to grand occasions.",
    features: [
      "One-stop booking for all event services",
      "Verified vendors & transparent pricing",
      "Secure digital payments",
      "Insurance-backed bookings",
    ],
    gradient: "from-ekatraa-primary to-ekatraa-primary-end",
    cta: "Download for iOS & Android",
    icon: "📱",
  },
  {
    id: "vendor",
    title: "Ekatraa Vendor App",
    subtitle: "For service providers",
    description:
      "Grow your business with Ekatraa. Get verified, receive enquiries, send quotations, and manage bookings — all from your phone. Join a trusted ecosystem.",
    features: [
      "Verified profile & more visibility",
      "Manage enquiries & quotations",
      "Calendar & booking management",
      "Secure payments & payouts",
    ],
    gradient: "from-ekatraa-primary-end to-ekatraa-primary",
    cta: "Register as Vendor",
    icon: "🏪",
  },
];

export function AppsSection() {
  return (
    <section id="apps" className="section-padding bg-white">
      <div className="max-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Our Apps
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            One platform, two powerful apps — for everyone in the event
            ecosystem.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {cards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ delay: i * 0.12, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -4 }}
              className="relative rounded-3xl border border-ekatraa-border bg-white p-8 shadow-xl shadow-gray-200/50 hover:shadow-ekatraa-primary/10 transition-shadow duration-300 overflow-hidden group"
            >
              <div
                className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${card.gradient} opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:opacity-10 transition-opacity`}
              />
              <div className="relative">
                <span className="text-4xl">{card.icon}</span>
                <p className="mt-2 text-sm font-medium text-ekatraa-primary">
                  {card.subtitle}
                </p>
                <h3 className="mt-2 text-xl sm:text-2xl font-bold text-gray-900">
                  {card.title}
                </h3>
                <p className="mt-4 text-gray-600">{card.description}</p>
                <ul className="mt-6 space-y-2">
                  {card.features.map((f, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2 text-gray-700 text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-ekatraa-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#cta"
                  className={`mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r ${card.gradient} text-white px-6 py-3 text-sm font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]`}
                >
                  {card.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
