/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        semi: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(180deg)" },
        },
        whole: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        wave: {
          "0%, 100%": {
            clipPath:
              "polygon(0 48%, 10% 34%, 26% 30%, 42% 33%, 51% 46%, 72% 54%, 88% 54%, 100% 50%, 100% 100%, 0 100%)",
          },
          "50%": {
            clipPath:
              "polygon(0 63%, 13% 66%, 26% 70%, 43% 65%, 58% 55%, 70% 44%, 91% 44%, 100% 52%, 100% 100%, 0 100%)",
          },
        },
      },

      animation: {
        semi: "semi 9s linear",
        whole: "whole 6s linear",
        wave: "wave 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
