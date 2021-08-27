import React from "react"
import { ThemeProvider } from "@material-ui/core/styles"
import { createTheme, ThemeOptions } from "@material-ui/core/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: "#903A58",
    },
  },
  typography: {
    h1: {},
  },
})

const CustomThemeProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
  //   return <>{children}</>
}

export default CustomThemeProvider
