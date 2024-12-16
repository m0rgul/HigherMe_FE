/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        side2side: "side2side 2s ease-in-out infinite",
      },
      keyframes: {
        side2side: {
          "0%,100%": { transform: "translateX(-50%)" },
          "50%": { transform: "translateX(150%)" },
        },
      },
    },
  },
  plugins: [],
};
