import type { Config } from "tailwindcss";

const config: Config = {
   content: [
      "./app/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         colors: {
            "agdp-green": "#FF6B00",
            "agdp-h-green": "#58A70F",
            "agdp-blue": "#40CC7F",
            "agdp-black": "#414141",
         },
         fontFamily: {
            heading: ["var(--font-noto-sans)"],
            body: ["var(--font-noto-sans)"],
         },
         // backgroundImage: {
         //    "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
         //    "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
         // },
      },
   },
   plugins: [],
};
export default config;
