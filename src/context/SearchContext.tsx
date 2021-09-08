import React, { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react"

interface SearchContext{
  searchValue:string
  setSearchValue:Dispatch<SetStateAction<string>>
}

export const SearchContext = createContext({searchValue:'', setSearchValue:()=>{}} as SearchContext)

export const SearchProvider = ({ children }:{children:ReactNode}) => {
  const [searchValue, setSearchValue] = useState("")

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchContext.Provider>
  )
}
