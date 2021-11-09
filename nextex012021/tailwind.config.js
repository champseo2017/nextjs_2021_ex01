module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      NotoSansThai: ["Noto Sans Thai"],
    },
    extend: {
      colors: {
        green: {
          DEFAULT: "#00f260",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
