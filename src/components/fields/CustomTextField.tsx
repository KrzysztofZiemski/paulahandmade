import {
  InputAdornment,
  InputLabel,
  makeStyles,
  TextField,
} from "@material-ui/core"
import React from "react"
import { ReactElement } from "react"

const useStyles = makeStyles(theme => ({
  field: {
    margin: 0,
  },
  input: {
    backgroundColor: theme.palette.common.white,
    borderRadius: 5,
    // padding:
  },
}))

type CustomTextFieldProps = {
  label?: string
  variant?: "filled" | "outlined"
  name: string
  value: string
  setValue: (v: string) => void
  className?: string
  placeholder?: string
  icon?: ReactElement
}
const CustomTextField = ({
  label,
  variant,
  name,
  value,
  className,
  setValue,
  placeholder,
  icon,
}: CustomTextFieldProps) => {
  const classes = useStyles()

  const handleChange = e => setValue(e.target.value)

  return (
    <>
      {label && (
        <InputLabel shrink htmlFor={name}>
          {label}
        </InputLabel>
      )}
      <TextField
        className={`${classes.field} ${className || ""}`}
        value={value}
        placeholder={placeholder || ""}
        onChange={handleChange}
        variant={variant || "outlined"}
        size="small"
        InputProps={{
          endAdornment: icon ? (
            <InputAdornment position="start">{icon}</InputAdornment>
          ) : (
            ""
          ),
          className: classes.input,
        }}
      />
    </>
  )
}

export default CustomTextField
