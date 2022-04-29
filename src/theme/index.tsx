import { createTheme } from "@mui/material"

declare module "@mui/material/styles" {
  interface Palette {
    [key: string]: any
  }
  interface PaletteOptions {
    [key: string]: any
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#a600ed",
    },
    secondary: {
      main: "#00e29f",
    },
  },
})

export default theme
