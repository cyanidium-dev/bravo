import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";

export default {
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
          xl: "70px",
        },
      },

      fontSize: {
        "6med": ["6px", { fontWeight: "500" }],
        "10reg": ["10px", { fontWeight: "400" }],
        "11med": ["11px", { fontWeight: "500" }],
        "12light": ["12px", { fontWeight: "300" }],
        "12med": ["12px", { fontWeight: "500" }],
        "12semi": ["12px", { fontWeight: "600" }],
        "12bold": ["12px", { fontWeight: "700" }],
        "14light": ["14px", { fontWeight: "300" }],
        "14reg": ["14px", { fontWeight: "400" }],
        "14med": ["14px", { fontWeight: "500" }],
        "14semi": ["14px", { fontWeight: "600" }],
        "14bold": ["14px", { fontWeight: "700" }],
        "16light": ["16px", { fontWeight: "300" }],
        "16reg": ["16px", { fontWeight: "400" }],
        "16med": ["16px", { fontWeight: "500" }],
        "16semi": ["16px", { fontWeight: "600" }],
        "18reg": ["18px", { fontWeight: "400" }],
        "18med": ["18px", { fontWeight: "500" }],
        "18bold": ["18px", { fontWeight: "700" }],
        "20reg": ["20px", { fontWeight: "400" }],
        "20med": ["20px", { fontWeight: "500" }],
        "20semi": ["20px", { fontWeight: "600" }],
        "20bold": ["20px", { fontWeight: "700" }],
        "20extra": ["20px", { fontWeight: "800" }],
        "24med": ["24px", { fontWeight: "500" }],
        "24semi": ["24px", { fontWeight: "600" }],
        "24bold": ["24px", { fontWeight: "700" }],
        "28bold": ["28px", { fontWeight: "700" }],
        "32semi": ["32px", { fontWeight: "600" }],
        "32bold": ["32px", { fontWeight: "700" }],
        "36bold": ["36px", { fontWeight: "700" }],
        "40semi": ["40px", { fontWeight: "600" }],
        "40bold": ["36px", { fontWeight: "700" }],
        "48bold": ["48px", { fontWeight: "700" }],
        "48extra": ["48px", { fontWeight: "800" }],
        "62bold": ["62px", { fontWeight: "700" }],
        "64bold": ["64px", { fontWeight: "700" }],
        "64extra": ["64px", { fontWeight: "800" }],
        "70bold": ["70px", { fontWeight: "700" }],
      },
      colors: {
        white: "#FFFFFF",
        black: "#02170C",
        green: "#23921B",
        pink: "#F31260",
      },
      backgroundImage: {
        article:
          "linear-gradient(297.81deg, rgba(0, 0, 0, 0) 12.32%, rgba(0, 0, 0, 0.7) 83.61%)",
      },
      boxShadow: { hero: "0px 2.25px 7.09px 0px #FFFFFF" },
    },
  },
  plugins: [heroui()],
} satisfies Config;
