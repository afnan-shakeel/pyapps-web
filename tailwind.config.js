/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "orange-primary": "#F16D32",
        "orange-secondary": {
          100: "#E2E2D5",
          200: "#888883",
        },
      },
    },
  },
  plugins: [],
}

