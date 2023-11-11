/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "500px",
        md: "800px",
        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        primary: "#F67516",
        secondary: "#FEB52B",
        white: "#FFFFFF",
        black: "#000000",
        grey: "#E3E3E2",
        hux: "#F3F2F8",
      },
    },
  },
  plugins: [],
};

