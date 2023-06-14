/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['inter', 'sans-serif'],
    },
    extend: {
      colors:{
        primary: '#E9ED1A',
        secondary: '#0F31A9',
        grayed: '#9D9D9D',
      },
    },
  },
  plugins: [],
}

