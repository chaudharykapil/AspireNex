import { addDynamicIconSelectors } from '@iconify/tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Fira': ["Fira Sans Condensed","sans-serif"],
      },
    },
  },
  plugins: [
    addDynamicIconSelectors(),
  ],
}

