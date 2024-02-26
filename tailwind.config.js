 /** @type {import('tailwindcss').Config} */


export default {
  content: [
        "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{ 
        primaryDark: '#2b373d',
        lightDark: '#445760',
      }
    },
  },
  plugins: [],
}

