import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        istok: ["Istok_Web"],
        manrope: ["Manrope"],
        inter: ["Inter"],
        roboto: ["Roboto"],
      },
      backgroundImage: {
        "custom-gradient":
        "linear-gradient(0deg, #1C2327 0%, #1C2226 27%, rgba(27, 33, 37, 0.00) 100%)",
      },
      colors: {
        primary: "#1C2327",
        secondary: "#8BC1C9",
        nimbi: "#00ACE6",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
