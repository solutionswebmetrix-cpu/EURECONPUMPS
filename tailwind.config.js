module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        primary: "#0096d6",
        secondary: "#d62828",
        dark: "#0f172a",
        "card-bg": "rgba(0, 0, 0, 0.03)",
        "glass-border": "rgba(0, 0, 0, 0.08)",
        "text-primary": "#0f172a",
        "text-secondary": "#64748b",
      },
      backgroundImage: {
        'premium-gradient': 'linear-gradient(135deg, #0096d6, #d62828)',
        'blue-glow': 'radial-gradient(circle, rgba(0, 150, 214, 0.45) 0%, transparent 70%)',
        'red-glow': 'radial-gradient(circle, rgba(214, 40, 40, 0.35) 0%, transparent 70%)',
      },
      boxShadow: {
        'blue-glow': '0 0 30px rgba(0, 150, 214, 0.45)',
        'blue-glow-sm': '0 0 15px rgba(0, 150, 214, 0.3)',
        'red-glow': '0 0 30px rgba(214, 40, 40, 0.35)',
        'red-glow-sm': '0 0 15px rgba(214, 40, 40, 0.25)',
        'premium': '0 20px 40px rgba(0, 0, 0, 0.4)',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        'glow-pulse': 'glow-pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: 0.5, filter: 'brightness(1)' },
          '50%': { opacity: 0.8, filter: 'brightness(1.5)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
