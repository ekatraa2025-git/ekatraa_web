"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export function CTA() {
  const { t } = useLanguage();

  return (
    <section id="cta" className="section-padding bg-gradient-to-br from-ekatraa-primary via-ekatraa-primary to-ekatraa-primary-end relative overflow-hidden">
      <div className="absolute inset-0 bg-black/5" />
      <div className="absolute top-0 left-0 w-full h-full mesh-bg opacity-30" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative max-section text-center"
      >
        <Image
          src="/ekatraa.svg"
          alt="Ekatraa"
          width={160}
          height={50}
          className="h-12 w-auto mx-auto brightness-0 invert opacity-95"
        />
        <h2 className="mt-6 text-2xl sm:text-3xl font-bold text-white">
          {t.cta.title}
        </h2>
        <p className="mt-4 text-white/90 max-w-xl mx-auto">
          {t.cta.subtitle}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#apps"
            className="inline-flex items-center justify-center rounded-full bg-white text-ekatraa-primary px-8 py-4 text-base font-semibold hover:bg-gray-100 transition-colors"
          >
            {t.cta.getApps}
          </a>
          <a
            href="mailto:hello@ekatraa.com"
            className="inline-flex items-center justify-center rounded-full border-2 border-white text-white px-8 py-4 text-base font-semibold hover:bg-white/10 transition-colors"
          >
            {t.cta.contact}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
