/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xxs': '320px',
        'xs': '376px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      fontSize: {
        'xxs': '10px',
        'xs': '12px',
        'sm': '14px',
        'base': '16px',
        'lg': '18px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '28px',
        '4xl': '32px',
        '5xl': '36px',
        'hero-heading-gradient': '56px',
        'hero-heading': '40px',
        'primary-heading': '32px',
        'secondary-heading': '24px',
        'paragraph': '14px',
      },
      colors: {
        'primary': '#f7fcff',
        'secondary': '#105ECF',
        'second-secondary': '#4caf50',
        'text-primary': '#000',
        'text-secondary': '#fff'
      },
      boxShadow: {
        'custom-blue': '0 4px 8px -1px rgba(16, 94, 207, 0.2), 0 2px 4px -1px rgba(16, 94, 207, 0.06)',
      },
      padding: {
        'xs': '10px',
        'sm': '16px',
        'md': '24px',
        'lg': '36px',
        'xl': '42px',
        'xxl': '70px',
      },
      margin: {
        'xs': '10px',
        'sm': '16px',
        'md': '24px',
        'lg': '36px',
        'xl': '42px',
        'xxl': '70px',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {},

    },
  },
  plugins: [],
})
