/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    colors: {
      primary: "#FFF",
      secondary: "#6AF5FF",
      tertiary: "#282828",
    },
    spacing: {
      "1/2": "50%",
      "100px": "100px",
      "200px": "200px",
      "300px": "300px",
      "1rem": "1rem",
      "0.5rem": "0.5rem",
      0: "0",
      "400px": "400px",
    },
    fontFamily: {
      FiraCode: ["Fira Code", "monospace"],
    },
    boxShadow: {
      "3xl": "-10px 10px 0px 0px #FFF;",
      "4xl": "-15px 15px 0px 0px #FFF;",
    },
    backgroundImage: {
      "hero-pattern": "url('/src/images/hero-pattern.svg')",
      raccoon: "url('/src/assets/raccoon.webp')",
      genesisColper: "url('/src/assets/genesiscolper.webp')",
      transportesDonJuan: "url('/src/assets/transportesdonjuan.webp')",
    },
  },
  plugins: [],
};
