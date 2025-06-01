import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        satoshi: ['Satoshi-Regular', 'sans-serif'],
        'satoshi-light': ['Satoshi-Light', 'sans-serif'],
        'satoshi-bold': ['Satoshi-Bold', 'sans-serif'],
        'satoshi-black': ['Satoshi-Black', 'sans-serif'],
        'satoshi-medium': ['Satoshi-Medium', 'sans-serif'],
      },
      screens: {
        'xs': {'max': '320px'},
        'sm': {'max': '375px'},
        'from-ml-to-b': {'max': '431px'},
        'from-htal-to-vcal': {'max': '862px', 'min': '432px'},
      }
    },
  },
  plugins: [],
} satisfies Config;
