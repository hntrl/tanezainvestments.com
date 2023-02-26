const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
      colors: {
        black: {
          100: "#ceced0",
          200: "#9d9ea1",
          300: "#6c6d71",
          400: "#3b3d42",
          500: "#0a0c13",
          600: "#080a0f",
          700: "#06070b",
          800: "#040508",
          900: "#020204",
        },
        beige: {
          100: "#fcfaf9",
          200: "#f9f6f2",
          300: "#f6f1ec",
          400: "#f3ede5",
          500: "#f0e8df",
          600: "#c0bab2",
          700: "#908b86",
          800: "#605d59",
          900: "#302e2d",
        },
      },
      fontFamily: {
        display: ["Abril Fatface", ...fontFamily.serif],
      },
      keyframes: {
        slideUpFromBottom: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideUpFromBottomWithMargin: {
          '0%': { transform: 'translateY(125%)' },
          '100%': { transform: 'translateY(0)' },
        }
      },
      animation: {
        slideUpFromBottom: '0.35s ease-out 0s 1 slideUpFromBottom',
        slideUpFromBottomWithMargin: '0.45s ease-out 0s 1 slideUpFromBottomWithMargin',
      }
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
