import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        gold: "#F9C349",
        amber: "#FFB100",
        ink: "#1E1810",
        stone: {
          DEFAULT: "#62615C",
          light: "#8A887F",
        },
        slate: "#4B4F58",
        cream: "#F8F7F3",
        mist: "#F6F7F8",
      },
      fontFamily: {
        display: ["var(--font-work-sans)", "system-ui", "sans-serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(30,24,16,0.04), 0 8px 24px rgba(30,24,16,0.06)",
        "card-hover": "0 2px 4px rgba(30,24,16,0.06), 0 16px 40px rgba(30,24,16,0.10)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
