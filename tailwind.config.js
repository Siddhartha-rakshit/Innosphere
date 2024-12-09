/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 10px 25px -3px rgba(0, 0, 0, 0.5), 0 4px 10px -2px rgba(0, 0, 0, 0.4)', // Example custom shadow
        'huge': '0 20px 50px rgba(0, 0, 0, 0.7)', // Even bigger shadow
      },
    },
  },
  plugins: [],
};
