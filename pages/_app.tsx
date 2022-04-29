import * as React from "react"
import { AppProps } from "next/app"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { PersistGate } from "redux-persist/integration/react"
import { EmotionCache } from "@emotion/react"

import AppLayout from "../src/layout/AppLayout"
import { Provider } from "react-redux"
import { persistStore } from "redux-persist"

import theme from "../src/theme"
import store from "../src/redux/store"

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}
const persistor = persistStore(store)

export default function MyApp(props: MyAppProps) {
  const { Component, pageProps } = props
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  )
}
