import { InputLabel, makeStyles, Select, SelectProps } from "@material-ui/core"
import React, { FunctionComponent } from "react"

const useStyles = makeStyles(theme => ({
  field: {
    padding: 0,
    margin: theme.spacing(1),
  },
  input: {
    backgroundColor: theme.palette.common.white,
    borderRadius: 5,
    padding: "10.5px 14px",
  },
  label: {
    marginLeft: theme.spacing(1),
  },
}))

const CustomSelectField: FunctionComponent<SelectProps> = ({
  label,
  variant,
  name,
  value,
  className,
  children,
  ...other
}) => {
  const classes = useStyles()

  return (
    <>
      {label && (
        <InputLabel shrink htmlFor={name} className={classes.label}>
          {label}
        </InputLabel>
      )}
      <Select
        className={`${classes.field} ${className || ""}`}
        value={value}
        name={name}
        variant={variant || "outlined"}
        inputProps={{
          className: classes.input,
        }}
        {...other}
      >
        {children}
      </Select>
    </>
  )
}

export default CustomSelectField
