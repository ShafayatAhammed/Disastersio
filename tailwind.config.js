/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "normal-pmr": "#FB923C",
        "high-pmr": "#F26922",
        "normal-gray": "#A1A1AA",
        "medium-gray": "#71717A",
        "high-gray": "#27272A",
        "normal-whitesmoke": "#F4F4F5",
        "high-whitesmoke": "#E4E4E7",
        "normal-dark": "#18181B",
        "high-dark": "#09090B",
      },
      fontFamily: {
        "bebas-neue": ["Bebas Neue", "sans-serif"],
      },
      screens: {
        xlnav: "1200px",
        xl4: "1700px",
        mdpghd: "850px",
        smpghd: "690px",
        xspghd: "450px",
      },
    },
  },
  plugins: [],
};
