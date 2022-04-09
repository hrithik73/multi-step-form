import { createTheme } from "@material-ui/core"
import createPalette from "@material-ui/core/styles/createPalette"

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    [key: string]: any
  }
  interface PaletteOptions {
    [key: string]: any
  }
}

const theme = createTheme({
  overrides: {},
  palette: createPalette({
    primary: {
      main: "#a600eb",
    },
    secondary: {
      main: "#00e29f",
    },
    custom: {
      white: "#FFFFFF",
      labelBackground: "#F6F7F7",
      cardBorder: "#BECBD9",
      btnBackground: "#0100A2",
      boxShadow: "#0000001A",
      checkbox: "#02029A",
      cardShadow: "#0001A533",
      line: "#02029A4D",
      selectedBorder: "#0001a5",
      fieldUnderline: "#ced5d9",
      grey: "#edeff0",
      error: "#f44336",
    },
    text: {
      primary: "#002046",
      secondary: "#9eaeb8",
    },
  }),
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  shape: {
    borderRadius: 5,
  },
})

export default theme
