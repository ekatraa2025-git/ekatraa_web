"use client";

import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/ekatraa.svg"
            alt="Ekatraa"
            width={100}
            height={32}
            className="h-8 w-auto brightness-0 invert opacity-90"
          />
        </Link>
        <p className="text-sm text-center sm:text-right" suppressHydrationWarning>
          © {new Date().getFullYear()} Ekatraa. Building the future of event
          planning in India.
        </p>
      </div>
    </footer>
  );
}
