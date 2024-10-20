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
      screens: {
        xlnav: "1200px",
        xl4: "1700px",
        mdpghd: "850px",
        smpghd: "690px",
        xspghd: "450px",
        mdincident: "950px",
        smincident: "550px",
        xsincident: "390px",
        mdlocation: "700px",
      },
      boxShadow: {
        chat: "0px 4px 48px 0px #0000000F",
      },
    },
  },
  plugins: [],
};
