/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'aureus-gold': '#D4AF37',
        'aureus-navy': '#1e3a8a',
      }
    },
  },
  plugins: [],
}
