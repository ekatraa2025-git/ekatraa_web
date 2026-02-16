"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const floatVariants = {
  animate: {
    y: [0, -12, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 mesh-bg" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,65,23,0.15),transparent)]" />
      <motion.div
        variants={floatVariants}
        animate="animate"
        className="absolute top-1/4 left-1/4 w-[420px] h-[420px] bg-ekatraa-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        variants={floatVariants}
        animate="animate"
        transition={{ duration: 5, delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-ekatraa-primary-end/12 rounded-full blur-3xl"
      />
      <motion.div
        className="absolute top-1/3 right-10 w-2 h-2 rounded-full bg-ekatraa-primary/40"
        animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/3 left-16 w-3 h-3 rounded-full bg-ekatraa-primary-end/50"
        animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.3, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          <motion.div variants={itemUp} className="mb-6">
            <Image
              src="/ekatraa.svg"
              alt="Ekatraa"
              width={260}
              height={88}
              className="h-20 sm:h-24 w-auto mx-auto drop-shadow-lg"
              priority
            />
          </motion.div>
          <motion.h1
            variants={itemUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight"
          >
            {t.hero.tagline.includes("Ekatraa") ? (
              <>
                {t.hero.tagline.split("Ekatraa")[0]}
                <span className="gradient-text">Ekatraa</span>
                {t.hero.tagline.split("Ekatraa")[1]}
              </>
            ) : (
              t.hero.tagline
            )}
          </motion.h1>
          <motion.div
            variants={itemUp}
            className="max-w-2xl mx-auto space-y-4 text-left sm:text-center"
          >
            <p className="text-lg sm:text-xl text-gray-600 font-medium">
              <span className="text-ekatraa-primary font-semibold">Vision:</span> {t.hero.vision}
            </p>
            <p className="text-base sm:text-lg text-gray-600">
              <span className="text-ekatraa-primary font-semibold">Mission:</span> {t.hero.mission}
            </p>
            <div className="pt-2">
              <p className="text-xs uppercase tracking-wider text-ekatraa-accent font-medium">
                {t.hero.odiaLabel}
              </p>
              <p className="text-xl sm:text-2xl font-medium text-gray-800 mt-1" dir="ltr">
                {t.hero.odiaQuote}
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={itemUp}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#apps"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-ekatraa-primary to-ekatraa-primary-end text-white px-8 py-4 text-base font-semibold shadow-xl shadow-ekatraa-primary/30 hover:shadow-ekatraa-primary/50 transition-shadow"
            >
              {t.hero.exploreApps}
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-full border-2 border-ekatraa-primary text-ekatraa-primary px-8 py-4 text-base font-semibold hover:bg-ekatraa-primary/5 transition-colors"
            >
              {t.hero.learnMore}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
