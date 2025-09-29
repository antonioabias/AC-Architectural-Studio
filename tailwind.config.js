module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#2C2C2C", // architectural-dark
        secondary: "#F8F8F8", // architectural-light
        accent: "#B8860B", // brass-accent
        background: "#FFFFFF", // pure-white
        surface: "#F5F5F5", // subtle-gray
        text: {
          primary: "#1A1A1A", // deep-black
          secondary: "#666666", // medium-gray
        },
        success: "#2E7D32", // green-700
        warning: "#F57C00", // orange-600
        error: "#C62828", // red-700
        border: "#E0E0E0", // light-gray
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        source: ['Source Sans Pro', 'sans-serif'],
        crimson: ['Crimson Text', 'serif'],
        sans: ['Source Sans Pro', 'sans-serif'],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
      },
      boxShadow: {
        light: '0 2px 8px rgba(0,0,0,0.1)',
        medium: '0 4px 16px rgba(0,0,0,0.12)',
        architectural: '0 2px 8px rgba(0,0,0,0.1)',
        elevated: '0 4px 16px rgba(0,0,0,0.12)',
      },
      transitionDuration: {
        smooth: '300ms',
        page: '400ms',
      },
      transitionTimingFunction: {
        'ease-out': 'ease-out',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderWidth: {
        hairline: '1px',
      },
    },
  },
  plugins: [],
}