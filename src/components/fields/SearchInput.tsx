import React from "react"
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined"
import CustomTextField from "./CustomTextField"
import { InputAdornment, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  input: {
    backgroundColor: theme.palette.common.white,
    borderRadius: 5,
  },
}))

interface SearchInputProps {
  value: string
  setValue: (e: string) => void
  [x: string]: any
}

const SearchInput = ({ value, setValue, ...props }: SearchInputProps) => {
  const classes = useStyles()
  const handleChange = (e: any) => setValue(e.target.value)
  return (
    <CustomTextField
      name="search"
      placeholder="szukaj..."
      value={value}
      onChange={handleChange}
      {...props}
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            {<SearchOutlinedIcon />}
          </InputAdornment>
        ),
        className: classes.input,
      }}
    />
  )
}

export default SearchInput
