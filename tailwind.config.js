/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'parallax': "url('https://i.ibb.co/W3fdWx6/annie-spratt-t-G822f1-Xz-T4-unsplash.jpg')",
      }
    },
  },
  plugins: [require("daisyui"),],
};
