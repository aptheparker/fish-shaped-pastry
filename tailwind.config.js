/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        mainImg: "url('/src/assets/main-img.jpeg')",
      },
    },
  },
  plugins: [],
};
