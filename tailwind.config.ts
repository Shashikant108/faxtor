import type { Config } from "tailwindcss";

// every value points at a token in app/globals.css, so the look is changed there
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "var(--color-navy)",
          ink: "var(--color-ink)",
          slate: "var(--color-slate)",
          blue: "var(--color-blue)",
          purple: "var(--color-purple)",
          divider: "var(--color-divider)",
          line: "var(--color-fold-line)",
        },
      },
      fontFamily: {
        sans: ["var(--font-lexend)", "system-ui", "sans-serif"],
        display: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        hand: ["var(--font-hand)", "cursive"],
        logo: ["var(--font-logo)", "system-ui", "sans-serif"],
      },
      fontSize: {
        eyebrow: "var(--fs-eyebrow)",
        display: "var(--fs-display)",
        lead: "var(--fs-lead)",
        body: "var(--fs-body)",
        nav: "var(--fs-nav)",
        label: "var(--fs-label)",
        h2: "var(--fs-h2)",
        h3: "var(--fs-h3)",
        copy: "var(--fs-copy)",
        item: "var(--fs-item)",
        chip: "var(--fs-chip)",
      },
      backgroundImage: {
        "brand-gradient": "var(--gradient-brand)",
      },
      boxShadow: {
        brand: "var(--shadow-brand)",
        "brand-sm": "var(--shadow-brand-sm)",
      },
      spacing: {
        gutter: "var(--page-gutter)",
      },
      maxWidth: {
        page: "var(--page-max)",
      },
    },
  },
  plugins: [],
};

export default config;
