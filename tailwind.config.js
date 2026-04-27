/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./App.tsx"
  ],
  theme: {
    extend: {
      colors: {
        'medical-slate': '#0f172a',
        'primary': '#04A3CB', // Formerly alert-orange
        'alert-orange': '#ff4d00', // Restored for specific sections
        'clinical-white': '#f8fafc',
        'brutalist-black': '#000000',
        'grid-line': '#e2e8f0',
        'soft-orange': '#fff7ed', // Kept for legacy support or soft backgrounds, can be removed if unused
        'fluid-blue': '#eff6ff',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'hard': '6px 6px 0px 0px #000000',
        'hard-sm': '3px 3px 0px 0px #000000',
        'hard-xl': '12px 12px 0px 0px #000000',
        // New Soft Shadows
        'soft-sm': '0 2px 8px -1px rgba(0, 0, 0, 0.05)',
        'soft': '0 4px 16px -2px rgba(0, 0, 0, 0.08)',
        'soft-xl': '0 12px 32px -4px rgba(0, 0, 0, 0.12)',
        'soft-primary': '0 8px 24px -4px rgba(4, 163, 203, 0.2)', // Updated color
        'soft-orange': '0 8px 24px -4px rgba(255, 77, 0, 0.2)', // Restored
        'glow': '0 0 20px rgba(4, 163, 203, 0.3)', // Updated color
      },
      animation: {
        'ticker': 'ticker 20s linear infinite',
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        marquee: "marquee var(--duration) infinite linear",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        "marquee-reverse": "marquee-reverse var(--duration) linear infinite",
        gradient: "gradient 8s linear infinite",
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
        gradient: {
          to: {
            backgroundPosition: "var(--bg-size, 300%) 0",
          },
        },
        "marquee-reverse": {
          from: { transform: "translateX(calc(-100% - var(--gap)))" },
          to: { transform: "translateX(0)" },
        },
      }
    },
  },
  plugins: [],
}
