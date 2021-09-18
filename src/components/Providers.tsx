import React from "react"
import { SearchProvider } from "../context/SearchContext"
import CustomThemeProvider from "../styles/theme"

const Providers = ({ children }: any) => {
  return (
    <CustomThemeProvider>
      <SearchProvider>{children}</SearchProvider>
    </CustomThemeProvider>
  )
}

export default Providers
