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
    minWidth: "250px",
    margin: theme.spacing(1),
  },
  label: {
    marginLeft: theme.spacing(1),
  },
  input: {
    backgroundColor: theme.palette.common.white,
    borderRadius: 5,
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
  type?: "number" | "password" | "text"
  rows?: number
  multiline?: boolean
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
  type,
  rows,
  multiline = false,
}: CustomTextFieldProps) => {
  const classes = useStyles()

  const handleChange = (e: any) => setValue(e.target.value)

  return (
    <>
      {label && (
        <InputLabel shrink htmlFor={name} className={classes.label}>
          {label}
        </InputLabel>
      )}
      <TextField
        multiline
        rows={rows && rows}
        type={type || "text"}
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
