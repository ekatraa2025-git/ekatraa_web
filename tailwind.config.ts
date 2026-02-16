import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ekatraa: {
          primary: "#FF4117",
          "primary-start": "#FF0000",
          "primary-end": "#FF7700",
          secondary: "#FF7700",
          accent: "#918F8F",
          surface: "#FFF8F5",
          "input-bg": "#FFF5F2",
          border: "#FFE5DC",
        },
      },
      fontFamily: {
        sans: ["'Outfit'", "'Plus Jakarta Sans'", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-ekatraa": "linear-gradient(135deg, #FF0000 0%, #FF4117 50%, #FF7700 100%)",
        "gradient-warm": "linear-gradient(135deg, #FF4117 0%, #FF6B35 50%, #FF8C42 100%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(255, 65, 23, 0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(255, 119, 0, 0.5)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
