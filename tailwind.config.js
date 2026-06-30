/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#121017",
          900: "#191722",
          850: "#201e2b",
          800: "#272433",
          700: "#332f41",
          600: "#423d52",
        },
        gold: {
          100: "#f7ecd2",
          200: "#efdcae",
          300: "#e6c98c",
          400: "#d9b36b",
          500: "#c8973f",
          600: "#a87a2c",
          700: "#835d21",
        },
        cream: "#f3ede0",
        crimson: "#b5403a",
        teal: "#4aa3a0",
      },
      fontFamily: {
        serif: ['"Playfair Display"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      boxShadow: {
        glow: "0 0 60px -15px rgba(217, 179, 107, 0.45)",
        card: "0 30px 80px -40px rgba(0,0,0,0.9)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.8)", opacity: "0.7" },
          "100%": { transform: "scale(2.2)", opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s ease forwards",
        shimmer: "shimmer 6s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2.4s ease-out infinite",
      },
    },
  },
  plugins: [],
};
