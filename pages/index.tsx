import Home from "./home"
import { CssBaseline, ThemeProvider } from "@material-ui/core"
import { Provider } from "react-redux"
import theme from "../src/theme"
import AppLayout from "../src/layout/AppLayout"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppLayout>
        <Home />
      </AppLayout>
    </ThemeProvider>
  )
}

export default App
