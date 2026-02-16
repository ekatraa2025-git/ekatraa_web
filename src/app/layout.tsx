import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";

/* eslint-disable @next/next/no-page-custom-font -- Using link for fonts to avoid build-time fetch */

export const metadata: Metadata = {
  title: "Ekatraa – India's Trusted Event Planning Platform",
  description:
    "One-stop booking for all event services. AI-enabled platform connecting customers and verified vendors. Simplify every event with Ekatraa.",
  keywords: ["event planning", "wedding", "vendor booking", "Ekatraa", "India"],
  openGraph: {
    title: "Ekatraa – Event Planning Made Simple",
    description: "Connect with verified vendors. Secure payments. Insurance-backed bookings.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="font-sans antialiased bg-white text-gray-900 min-h-screen overflow-x-hidden"
        style={{
          fontFamily: "'Outfit', 'Plus Jakarta Sans', system-ui, sans-serif",
        }}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
