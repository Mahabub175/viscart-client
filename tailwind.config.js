/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#22C55E",
        primaryLight: "#BBF7D0",
        orange: "#F97316",
        danger: "#FB564B",
        textColor: "#4D4D4D",
        light: "#F0FDF4",
      },
    },
  },
  plugins: [],
};
