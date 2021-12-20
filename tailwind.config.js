module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        hd: "1980px",
        med: "768px"
      },
      width: {
        "192": "49rem"
      },
      height: {
        "192": "50rem"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
