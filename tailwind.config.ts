import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // components 기본 경로 수정
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    darkTheme: false,
  },
  theme: {
    extend: {},
    fontFamily: {
      pretendard: ["Pretendard-Regular", "Helvetica", "Arial", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
};

export default config;
