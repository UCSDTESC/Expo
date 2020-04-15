import Typography from "typography"

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.666,
  headerFontFamily: [
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Lato", "sans-serif"],
  overrideStyles: () => ({
    // work around for 0 padding injected by Typography.js
    'th:first-child, td:first-child': {
      paddingLeft: '1.11067rem'
    },
    'th:last-child, td:last-child': {
      paddingRight: '1.11067rem'
    }
  })
})

export default typography
