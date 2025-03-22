/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        overlay: "rgb(0, 0, 0, 0.45);",
        black: "#141414",
        green: "#00502E",
        primaryGreen: "#00502E",
        secondaryGreen: "#DEE8CF",
        tertiaryGreen: "#E8F1ED"      },
      screens: {
        'md': '800px',
        'xs': '320px',
        '2xs': '240px'
      },
    },
  },
  plugins: [],
};
