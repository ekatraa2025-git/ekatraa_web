"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const problems = [
  "Seasonal income volatility for vendors",
  "No single digital platform for all services",
  "Lack of trust and price transparency",
  "Time-consuming vendor search",
  "Highly unorganized event industry",
];

const opportunities = [
  "No presence of national or local brands",
  "Scalable across Odisha, West Bengal, and India",
  "High growth, low digital penetration",
  "Bhubaneswar event industry alone > ₹4,000 Cr",
];

const solutions = [
  "AI-enabled website & mobile app",
  "One-stop booking for all event services",
  "Verified customers and vendors",
  "Secure digital payments",
  "Insurance-backed bookings",
];

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative section-padding bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-ekatraa-surface/50 to-transparent pointer-events-none" />
      <div className="max-section relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-ekatraa-primary">
            Our Story
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            {t.about.title}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-6"
          >
            <motion.p variants={item} className="text-gray-600 leading-relaxed text-lg">
              Behind every product and service is a group of passionate individuals who love what they do. We&apos;re innovators, creators, planners and problem-solvers — but above all, we&apos;re people with varied experience in life whose core value is <strong className="text-ekatraa-primary">care</strong>.
            </motion.p>
            <motion.p variants={item} className="text-gray-600 leading-relaxed text-lg">
              At Ekatraa, we believe every event is not just a date on the calendar — it&apos;s a story waiting to be told and a lifelong memory to be cherished. We blend creativity, passion, and smart tools to make planning simple and stress-free.
            </motion.p>
            <motion.p variants={item} className="text-gray-600 leading-relaxed text-lg">
              From connecting you with qualitative vendors to guiding you step-by-step, we&apos;re here to ensure your journey is as joyful as the celebration itself by taking out the stress of planning and arranging it. Whether it&apos;s an intimate gathering or a grand occasion, we treat every event with the same dedication — because we know the memories you create will last a lifetime.
            </motion.p>
            <motion.div variants={item} className="rounded-2xl bg-ekatraa-surface border border-ekatraa-border p-6">
              <p className="text-gray-700 font-semibold">
                {t.about.whyChoose}: When you choose us, you&apos;re not just making a deal — you&apos;re choosing a partner who stands by you, every step of the way, till the completion of your event without any additional cost.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/60 aspect-[4/3] bg-gradient-to-br from-ekatraa-primary/10 to-ekatraa-primary-end/10">
              <Image
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80"
                alt="Event celebration"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white border border-ekatraa-border shadow-xl p-4 max-w-[200px]">
              <p className="text-xs font-semibold text-ekatraa-primary">E-commerce in India</p>
              <p className="text-sm text-gray-600 mt-1">Projected to reach $350B by 2030 — we&apos;re building the future of event planning with AI & digital payments.</p>
            </div>
          </motion.div>
        </div>

        {/* Problem / Opportunity / Solution */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid sm:grid-cols-3 gap-6"
        >
          <div className="rounded-2xl border border-red-200 bg-red-50/50 p-6 shadow-sm">
            <h3 className="font-bold text-red-700 text-lg flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-red-200 flex items-center justify-center text-sm">!</span>
              {t.about.problem}
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              {problems.map((p, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-red-400 shrink-0">•</span> {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-6 shadow-sm">
            <h3 className="font-bold text-amber-800 text-lg flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-amber-200 flex items-center justify-center text-sm">↑</span>
              {t.about.opportunity}
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              {opportunities.map((o, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-amber-500 shrink-0">•</span> {o}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-ekatraa-border bg-ekatraa-surface p-6 shadow-sm">
            <h3 className="font-bold text-ekatraa-primary text-lg flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-ekatraa-primary/20 flex items-center justify-center text-sm">✓</span>
              {t.about.solution}
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              {solutions.map((s, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-ekatraa-primary shrink-0">•</span> {s}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* E-commerce & team intro */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl bg-gradient-to-br from-ekatraa-primary/5 to-ekatraa-primary-end/5 border border-ekatraa-border p-8 sm:p-10"
        >
          <p className="text-gray-700 leading-relaxed">
            E-commerce in India is a rapidly growing sector, driven by a large and expanding base of internet users, including increasing penetration into the rural market. The Indian E-commerce market is projected to reach $350 billion by 2030, with a CAGR of 21.5% during the forecast period (2024-30). This growth is fuelled by factors such as rapid urbanization, the increasing use of smartphones and the convenience of online shopping. E-commerce in India offers global reach, reduced overhead costs, scalability and super-convenience for customers, making it an attractive opportunity for entrepreneurs now.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Hence this is the time when a real long-term impact can be made using the power of E-commerce and integrating it with the super power of Artificial Intelligence and Digital Payment mode in any specific industry — and here we are with absolutely the same intention.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed font-medium">
            We are a group of 6 people, belonging to varied age groups — one senior citizen, two 40+, one 30+ and two 20+ individuals. We strongly believe that this group is one of the most diversified in terms of both experience and maturity, with a lot of youthful enthusiasm and determination to make this idea a huge success.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
