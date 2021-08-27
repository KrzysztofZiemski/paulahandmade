import { InputLabel, makeStyles, TextField } from "@material-ui/core"
import { mergeClasses } from "@material-ui/styles"
import React from "react"

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
}
const CustomTextField = ({
  label,
  variant,
  name,
  value,
  className,
  setValue,
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
        style={{ marginTop: 0 }}
        inputProps={{
          className: classes.input,
        }}
        // className={classes.field}
        value={value}
        onChange={handleChange}
        variant={variant || "outlined"}
        size="small"
      ></TextField>
    </>
  )
}

export default CustomTextField
