/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        backgroundone:
          "radial-gradient(50% 50% at 50% 50%,#8e9af9 0,rgba(127,208,231,0) 100%)",
      },
      fontFamily: {
        primary: "Graphik,ui-sans-serif,system-ui,sans-serif",
        secondary:
          "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
      },

      maxWidth: {
        large: "1024px",
      },
      minWidth: {
        small: "640px",
      },
      width:{
        eigthyeight:"88%",
        twohundreds:"296px"
      },
      height:{
        twohundendnighty:"296px"
      },
      colors: {
        primary: "#3f4246",
        "light-gray": "#676767",
        "light-green": "#e3f8fa",
        "light-violet": "#8e9af9",
        "purple1": "#9092fb",
        "light-blue": "#86b5ef",
        "white-green": "#7bdde2"
      },
      fontSize: {
        medium: "22px",
        twenty: "20px",
      },
    },
  },
  plugins: [],
};
