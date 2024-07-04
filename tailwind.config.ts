/* eslint-env node */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'notFound': "url('../src/assets/notFound.jpg')"
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

