"use client";

import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { AppsSection } from "@/components/AppsSection";
import { Features } from "@/components/Features";
import { USP } from "@/components/USP";
import { Team } from "@/components/Team";
import { Newsletter } from "@/components/Newsletter";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />
      <Hero />
      <About />
      <AppsSection />
      <Features />
      <USP />
      <Team />
      <Newsletter />
      <CTA />
      <Footer />
    </main>
  );
}
