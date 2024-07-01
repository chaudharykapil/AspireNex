/** @type {import('tailwindcss').Config} */
import { addDynamicIconSelectors } from '@iconify/tailwind';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'oswald': ["Oswald","sans-serif"],
      },
    },
  },
  plugins: [
    addDynamicIconSelectors({prefix:"icon",scale:1.5}),
  ],
}

