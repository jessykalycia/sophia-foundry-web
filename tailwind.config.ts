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
        "bg-base": "var(--bg-base)",
        "bg-surface": "var(--bg-surface)",
        "bg-elevated": "var(--bg-elevated)",
        "purple-bright": "var(--purple-bright)",
        "purple-primary": "var(--purple-primary)",
        "purple-dim": "var(--purple-dim)",
        "purple-ghost": "var(--purple-ghost)",
        "purple-border": "var(--purple-border)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-muted": "var(--text-muted)",
        "text-accent": "var(--text-accent)",
        "border-subtle": "var(--border-subtle)",
        "border-default": "var(--border-default)",
        "border-strong": "var(--border-strong)",
        destructive: "var(--destructive)",
      },
      fontFamily: {
        raleway: ["var(--font-raleway)"],
        figtree: ["var(--font-figtree)"],
        "space-mono": ["var(--font-space-mono)"],
      },
      maxWidth: {
        container: "1100px",
      },
      keyframes: {
        "scroll-pulse": {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "scroll-pulse": "scroll-pulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
