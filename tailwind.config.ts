import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        standart_blue: {
          400: "#505F98",
          500: "#37447E",
          800: "#111B47",
        },
      },
    },
  },
  plugins: [],
};
export default config;
