import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#081735",
        midnight: "#0d1f44",
        slate: "#6a7691",
        cloud: "#f3f7fb",
        aqua: "#1cc4af",
        aquaDark: "#14a495",
        line: "rgba(255,255,255,0.12)"
      },
      fontFamily: {
        sans: ["\"Avenir Next\"", "\"Segoe UI\"", "\"Helvetica Neue\"", "Arial", "sans-serif"],
        display: ["\"Avenir Next Condensed\"", "\"Avenir Next\"", "\"Trebuchet MS\"", "\"Segoe UI\"", "sans-serif"]
      },
      boxShadow: {
        glow: "0 24px 80px rgba(28, 196, 175, 0.18)",
        panel: "0 20px 60px rgba(4, 17, 42, 0.18)"
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
