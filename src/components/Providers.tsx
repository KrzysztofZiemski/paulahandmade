import React from "react"
import { SearchProvider } from "../context/searchContext"
import CustomThemeProvider from "../styles/theme"

const Providers = ({ children }) => {
  return (
    <CustomThemeProvider>
      <SearchProvider>{children}</SearchProvider>
    </CustomThemeProvider>
  )
}

export default Providers
