/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
        "background": "#fafafa", // zinc-50
        "surface": "#ffffff", // white
        "surface-container": "#f4f4f5", // zinc-100
        "surface-variant": "#e4e4e7", // zinc-200

        "on-background": "#09090b", // zinc-950
        "on-surface": "#18181b", // zinc-900
        "on-surface-variant": "#52525b", // zinc-600

        "primary": "#9F0AFA", // Radiant Purple
        "primary-container": "#e0e7ff",
        "on-primary": "#ffffff",

        "secondary": "#2A0044", // Deep Violet
        "secondary-container": "#e0f2fe",
        "on-secondary": "#ffffff",

        "accent": "#9333ea", // Purple 600

        "tertiary-fixed": "#e0e7ff",
        "on-tertiary-fixed-variant": "#4f46e5",
        "on-secondary-fixed": "#0a0a0a",
        "on-tertiary-fixed": "#1e1b4b",
        "secondary-fixed-dim": "#a5b4fc",
        "secondary-container-original": "#ffb7fa",

        "outline": "#d4d4d8", // zinc-300
        "outline-variant": "#e4e4e7" // zinc-200
      },
      "borderRadius": {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "full": "9999px"
      },
      "fontFamily": {
        "headline": ["Arimo", "sans-serif"],
        "body": ["Arimo", "sans-serif"],
        "cursive": ["Satisfy", "cursive"]
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #4f46e5 0deg, #0284c7 180deg, #4f46e5 360deg)',
      }
    },
  },
  plugins: [],
}
