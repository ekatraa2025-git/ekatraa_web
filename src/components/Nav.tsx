"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import type { Locale } from "@/lib/translations";

const locales: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "hi", label: "हि" },
  { code: "or", label: "ଓ" },
];

export function Nav() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-ekatraa-border/50"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 min-h-[72px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/ekatraa.svg"
            alt="Ekatraa"
            width={200}
            height={64}
            className="h-12 sm:h-14 w-auto"
            priority
          />
        </Link>
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-1 rounded-full bg-ekatraa-surface border border-ekatraa-border p-1">
            {locales.map(({ code, label }) => (
              <button
                key={code}
                onClick={() => setLocale(code)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                  locale === code
                    ? "bg-ekatraa-primary text-white shadow-md"
                    : "text-gray-600 hover:text-ekatraa-primary"
                }`}
                aria-label={`Switch to ${label}`}
              >
                {label}
              </button>
            ))}
          </div>
          <a
            href="#about"
            className="text-gray-600 hover:text-ekatraa-primary transition-colors text-sm font-medium hidden sm:block"
          >
            {t.nav.about}
          </a>
          <a
            href="#apps"
            className="text-gray-600 hover:text-ekatraa-primary transition-colors text-sm font-medium hidden sm:block"
          >
            {t.nav.ourApps}
          </a>
          <a
            href="#features"
            className="text-gray-600 hover:text-ekatraa-primary transition-colors text-sm font-medium hidden md:block"
          >
            {t.nav.features}
          </a>
          <a
            href="#team"
            className="text-gray-600 hover:text-ekatraa-primary transition-colors text-sm font-medium hidden lg:block"
          >
            {t.nav.team}
          </a>
          <a
            href="#cta"
            className="rounded-full bg-gradient-to-r from-ekatraa-primary to-ekatraa-primary-end text-white px-5 py-2.5 text-sm font-semibold shadow-lg shadow-ekatraa-primary/25 hover:shadow-ekatraa-primary/40 transition-all"
          >
            {t.nav.getStarted}
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
