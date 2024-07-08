import type { Config } from "tailwindcss";
const flowbite = require("flowbite-react/tailwind");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        "green-primary": "#1d3531",
        "green-secundary": "#142320",
        "green-actived": "#5d8a83",
        "green-border": "#2a4b46",
        "green-botton": "#a8f22c",
      },
      maxWidth: {
        grid: "77.5rem",
        textAboutSection: "66rem",
        areaIcon: "53.4375rem",
        areaMockups: "59.8125rem",
      },
      height: {
        aboutSection: "54.625rem",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;
