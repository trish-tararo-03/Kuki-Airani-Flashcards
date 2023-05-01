/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#002B7F', // Blue from the Cook Islands flag
        secondary: '#FFFFFF', // White from the Cook Islands flag
        accent: '#DD0016', // Red from the Cook Islands flag
        green: '#00A74A', // Green color
      },
    },
  },
  plugins: [],
}
