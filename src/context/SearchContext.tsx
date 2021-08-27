import React, { createContext, useContext, useState } from "react"

export const SearchContext = createContext({
  searchValue: "",
  setSearchValue: null,
})

export const SearchProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("")

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchContext.Provider>
  )
}
