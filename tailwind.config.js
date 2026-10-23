/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#646f79",
        "on-primary": "#ffffff",
        background: "#ffffff",
        surface: "#0d0d0d",
        border: "#f3f3f3",
        text: "#ffffff",
        "text-muted": "#0d0d0d",
        accent: "#0d0e10",
      },
      fontFamily: {
        sans: ["TWK Lausanne", "Helvetica Neue", "Helvetica", "sans-serif"],
      },
      fontSize: {
        display: ["30px", { lineHeight: "1.2", fontWeight: "400", letterSpacing: "-1.08px" }],
        heading: ["24px", { lineHeight: "1.2", fontWeight: "500" }],
        body: ["16px", { lineHeight: "1.5", fontWeight: "400" }],
      },
      spacing: {
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        5: "20px",
        6: "24px",
        8: "32px",
        12: "48px",
        16: "64px",
        28: "112px",
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "20px",
        xl: "64px",
      },
      boxShadow: {
        card: "rgba(0, 0, 0, 0.15) 0px 2px 8px 0px",
        elevated: "rgba(0, 0, 0, 0.15) 0px 2px 8px 0px",
      },
      transitionDuration: {
        fast: "100ms",
        base: "200ms",
        slow: "300ms",
      },
      transitionTimingFunction: {
        "ease-in-out": "ease-in-out",
      },
    },
  },
  plugins: [],
}
