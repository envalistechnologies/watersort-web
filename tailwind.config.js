/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ocean-900': '#001A33',
        'ocean-800': '#00264D',
        'ocean-600': '#004080',
        'cyan-500': '#00BFFF',
        'cyan-400': '#33CCFF',
        'aqua-300': '#00FFFF',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'ocean-gradient': 'linear-gradient(135deg, #001A33 0%, #004080 50%, #00BFFF 100%)',
      }
    },
  },
  plugins: [],
}
