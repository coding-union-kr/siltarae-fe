import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./layout/*.tsx",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // components 기본 경로 수정
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    darkTheme: false,
  },
  theme: {
    extend: {
      colors: {
        primary: "#9CC490",
        secondary: "#856E69",
      },
      screens: {
        xs: "400px",
        sm: "300px",
      },
    },
    fontFamily: {
      pretendard: ["Pretendard-Regular", "Helvetica", "Arial", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
};

export default config;
