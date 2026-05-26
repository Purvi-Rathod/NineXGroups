import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      /* Primary: GT America — dominates all UI */
      sans: ["var(--font-gt-america)", "GT America", "Arial", "sans-serif"],
      "gt-america": ["var(--font-gt-america)", "GT America", "Arial", "sans-serif"],
      /* Accent: Canela Regular Italic — used sparingly for luxury elegance */
      serif: ["var(--font-canela-italic)", "Canela", "Georgia", "serif"],
      display: ["var(--font-canela-italic)", "Canela", "Georgia", "serif"],
      canela: ["var(--font-canela-italic)", "Canela", "Georgia", "serif"],
      /* Legacy aliases → GT America */
      instrument: ["var(--font-gt-america)", "GT America", "Arial", "sans-serif"],
      manrope: ["var(--font-gt-america)", "GT America", "Arial", "sans-serif"],
      lato: ["var(--font-gt-america)", "GT America", "Arial", "sans-serif"],
      playfair: ["var(--font-canela-italic)", "Canela", "Georgia", "serif"],
    },
    extend: {
      colors: {
        primary: "#00B4D8",
        "navy-dark": "#0A1628",
        "navy-footer": "#0D1B2A",
        "bg-light": "#F8F9FA",
        // Leadership page colors
        "leadership-beige": "#FAF8F5",
        "leadership-cream": "#F5F1EB",
        "leadership-accent": "#12D4FF",
        "leadership-accent-dark": "#1959FA",
        "leadership-text": "#2D2A26",
        "leadership-muted": "#6B6560",
      },
      fontSize: {
        "46": "46.27px",
      },
      lineHeight: {
        "120": "120%",
      },
      letterSpacing: {
        "luxury-hero": "-0.03em",
        "luxury-display": "-0.02em",
        "luxury-heading": "-0.01em",
        "luxury-label": "0.1em",
      },

      container: {
        center: true,
        padding: "1.5rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
        },
      },
    },
  },
  plugins: [],
};
export default config;
