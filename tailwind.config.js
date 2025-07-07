/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lxj: {
          primary: "#0a2463",
          accent: "#3e92cc",
          softWhite: "#fffaff",
          alert: "#d8315b",
          dark: "#1e1b18",
          softYellow: "#EEE8A5",
        },
      },
    },
  },
  plugins: [],
};

