import type { Config } from "tailwindcss";

const config: Config = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         backgroundImage: {
            "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            "gradient-conic":
               "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
         },
         colors: {
            light: {
               primary: "#ffffff", // your light mode primary color
               fontColor: "#000000",
            },
            dark: {
               primary: "rgb(38,38,38)", // your dark mode primary color
               secondary: "rgb(32,32,32)",
               third: "rgb(26,26,26)",
               lightDark:"rgb(64,64,64)",
               fontColor: "#FFFFFF",
            },
         },
         fontSize: {
            sm: '0.8rem',
            base: '1rem',
            xl: '1.25rem',
            '2xl': '1.563rem',
            '3xl': '1.953rem',
            '4xl': '2.441rem',
            '5xl': '3.052rem',
         }
      },
   },
   darkMode: "class",
   plugins: [
      require("tailwindcss-dark-mode")(),
   ],
};
export default config;
