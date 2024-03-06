/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'roboto': ['Roboto', 'sans-serif'],
        'tenor-sans': ['Tenor Sans', 'sans-serif'],
        'ubuntu': ['Ubuntu', 'sans-serif']
      },
      colors:{
       "gray":"DEDFE2",
       "blue":"#2870EA"
      }
    },
  },
  plugins: [],
}