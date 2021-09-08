import React from "react"
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined"
import CustomTextField from "./CustomTextField"

interface SearchInputProps {
  value: string
  setValue: (e:string) => void
  [x: string]: any
}

const SearchInput = ({ value, setValue, ...props }: SearchInputProps) => {
  return (
    <CustomTextField
      icon={<SearchOutlinedIcon />}
      name="search"
      placeholder="szukaj..."
      value={value}
      setValue={setValue}
      {...props}
    />
  )
}

export default SearchInput
