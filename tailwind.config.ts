import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        cairo: ["var(--font-cairo)"],
        inter: ["var(--font-inter)"],
      },
      colors: {
        brand: {
          primary: "#006c75",
          secondary: "#071717",
          accent: "#0cca32",
          lightBg: "#ecf6f9",
          text: "#040316",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        dark: {
          bg: "#0a0a0a",       
          surface: "#1a1a1a",  
          text: "#f0f0f0",    
          muted: "#a0a0a0",   
        }
      },
      keyframes: {
        myScale: {
          '0%': { transform: 'scale(0)' },
          '60%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        myScale: 'myScale 0.4s ease-in-out',
      },
    },
  },
  plugins: [],
} satisfies Config;