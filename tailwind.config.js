/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "sm": "560px",
      },
      fontFamily: {
        cursive: [' "Dancing Script" ',' "Caveat" ','cursive'],
        playFair: ['"Playfair Display"', 'serif'],
        lato: ['"Lato"', 'sans-serif'],
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%, 100%": { borderRadius: "50% 50% 50% 50%" },
          "25%": { borderRadius: "60% 40% 60% 40%" },
          "50%": { borderRadius: "50% 60% 40% 60%" },
          "75%": { borderRadius: "40% 60% 60% 40%" },
        },
      },
    },
  },
  plugins: [],
}