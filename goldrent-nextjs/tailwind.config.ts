import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Color palette from Gold Rent Italia (basato su screenshot)
        primary: {
          black: '#000000', // Header e footer nero puro
          dark: '#2b2b2b', // Sfondo scuro per overlay
          gold: '#d4af37', // Logo oro
        },
        accent: {
          red: '#e74c3c', // Bottone CONVENZIONE LEONARDO
          orange: '#ff6900', // Accenti arancione
          white: '#ffffff', // Bottoni outline
          cyan: '#00d084', // Per compatibilità con vecchio codice
          green: '#2ea85c', // Per compatibilità con vecchio codice
        },
      },
      fontFamily: {
        sans: ['Public Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'fluid-sm': 'clamp(14px, 0.875rem + 0.469vw, 20px)',
        'fluid-lg': 'clamp(22.041px, 1.378rem + 1.091vw, 36px)',
        'fluid-xl': 'clamp(25.014px, 1.563rem + 1.327vw, 42px)',
      },
      spacing: {
        '40': '1rem',
        '50': '1.5rem',
        '60': '2.25rem',
        '70': '3.38rem',
        '80': '5.06rem',
      },
      animation: {
        'gradient': 'gradient 8s cubic-bezier(0.165, 0.84, 0.44, 1) infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
