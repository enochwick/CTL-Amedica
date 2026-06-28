import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Accent (CTL brand amber/gold)
        gold: "#F9C349",
        amber: "#FFB100",
        // Dark surfaces (awwwards cinematic theme)
        base: "#0A0A0A", // page background
        panel: "#111111", // raised panel
        ink: "#0A0A0A", // legacy alias -> deep black surface
        stone: {
          DEFAULT: "#8A8A8A", // muted text
          light: "#5A5A5A",
        },
        slate: "#B5B5B5", // body text on dark
        cream: "#111111", // legacy alias -> dark panel
        mist: "#0C0C0C", // legacy alias -> near-black
      },
      fontFamily: {
        display: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        body: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        container: "1240px",
      },
      boxShadow: {
        card: "0 1px 0 rgba(255,255,255,0.04) inset, 0 24px 48px -24px rgba(0,0,0,0.8)",
        "card-hover": "0 1px 0 rgba(255,255,255,0.08) inset, 0 32px 64px -24px rgba(0,0,0,0.9)",
        glow: "0 0 0 1px rgba(255,177,0,0.25), 0 24px 60px -20px rgba(255,177,0,0.25)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "trail": {
          "0%": { opacity: "0.3" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0.3" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        "trail": "trail 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
