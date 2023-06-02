/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    maxWidth: {
      container: "1440px",
      contentContainer: "1140px",
      containerSmall: "1024px",
      containerxs: "768px",
    },
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Barlow Condensed", "sans-serif"],
        titleFont: ["Roboto", "sans-serif"],
      },
      boxShadow: {
          navBar: "0 10px 30px -10px rgba(2, 12, 27, 0.7)",
      },
      colors: {
        bodyColor: "#F9FBE7",
        colorBaseOne: "#69c24a",
        colorBaseTwo: "#155320",
        textOrangeLight: "#ff8c35",
        textOrangeStrong: "#FC4F00",
        textPriceColor: "#1ebed7",
        textSpecialLinkColor: "#a52a53",
        textSpecialLinkColorHover: "#1ebed7",
        textLight: "#FFF",
        textDark: "#4d4d4d",
        textGray: "#CCC",
        footerColor: "#13131b",
        darkBanner: "#090909",
        btnColor1: "#19A7CE",
        btnColor2: "#5F8D4E",
        cardColor: "#3a1d12",
        btnYellowGradient: "#facc15",
        btnGreen: "#14dd31",
        hoverColor: "rgba(100, 255, 218, 0.1)"
      },
    },
  },
  plugins: [require('tailwind-scrollbar'),],
}
