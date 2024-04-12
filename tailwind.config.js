/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        primary: '#0ea5e9',
        secondary: '#2dd4bf',
        dark: '#292929',
        white: '#ffffff',
      },
    },
  },
  plugins: [],
};
