import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {},
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        revival: ["var(--font-revival)"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "30px",
          lg: "70px",
        },
      },

      fontSize: {},
      colors: {},

      backgroundImage: {},
    },
  },
  plugins: [],
};
export default config;
