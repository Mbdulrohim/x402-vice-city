import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "neon-pink": "var(--neon-pink)",
        "neon-cyan": "var(--neon-cyan)",
        "neon-purple": "#b829ff", // Keeping for fallback but mainly replaced
      },
      fontFamily: {
        carter: ["var(--font-carter)"],
        yellowtail: ["var(--font-yellowtail)"],
        montserrat: ["var(--font-montserrat)"],
      },
      animation: {
        "pulse-glow": "pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
