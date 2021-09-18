import {
  InputAdornment,
  InputLabel,
  makeStyles,
  TextField,
  TextFieldProps,
} from "@material-ui/core"
import React, { ChangeEvent } from "react"
import { ReactElement } from "react"

const useStyles = makeStyles(theme => ({
  field: {
    padding: theme.spacing(1),
  },
  label: {
    marginLeft: theme.spacing(1),
  },
  input: {
    backgroundColor: theme.palette.common.white,
    borderRadius: 5,
  },
}))

const CustomTextField = ({
  label,
  variant,
  name,
  value,
  className,
  placeholder,
  type,
  ...other
}: TextFieldProps) => {
  const classes = useStyles()

  return (
    <>
      {label && (
        <InputLabel shrink htmlFor={name} className={classes.label}>
          {label}
        </InputLabel>
      )}
      <TextField
        type={type || "text"}
        className={`${classes.field} ${className || ""}`}
        value={value}
        placeholder={placeholder || ""}
        variant={variant || "outlined"}
        size="small"
        {...other}
      />
    </>
  )
}

export default CustomTextField
