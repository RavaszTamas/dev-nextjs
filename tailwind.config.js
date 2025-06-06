/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/about/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        exo: ["var(--font-exo)"],
        "new-alenia": ["var(--font-new-alenia)"],
        roboto: ["var(--font-roboto)"],
      },
      colors: {
        primary: "#FFFFFF",
        secondary: "#512A9E",
        background:"#512A9E",
        "primary-orange": "#F15A08",
        "primary-black": "#0B0A0C",
        golden: "#ffff99",
      },

      backgroundImage: {
        "contact-us": "url(/contact-us-background.png)",
        banner: "url(/aqela-banner.png)",
        artist: "url(/artist-bg.png)",
        minting: "url(/minting-bg.png)",
        "gardient-background-contact-us": "url(/gardient-background.png)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
