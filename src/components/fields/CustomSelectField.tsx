import {
  InputAdornment,
  InputLabel,
  makeStyles,
  Select,
  TextField,
} from "@material-ui/core"
import React, { FunctionComponent, ReactElement, ReactNode } from "react"

const useStyles = makeStyles(theme => ({
  field: {
    minWidth: "250px",
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

interface CustomSelectFieldProps {
  label?: string
  variant?: "filled" | "outlined"
  name: string
  value: any
  setValue: (v: string) => void
  className?: string
  icon?: ReactElement
  children: ReactNode
}

const CustomSelectField: FunctionComponent<CustomSelectFieldProps> = ({
  label,
  variant,
  name,
  value,
  className,
  setValue,
  icon,
  children,
}) => {
  const classes = useStyles()

  const handleChange = (e: any) => setValue(e.target.value)

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
        onChange={handleChange}
        variant={variant || "outlined"}
        inputProps={{
          className: classes.input,
        }}
      >
        {children}
      </Select>
    </>
  )
}

export default CustomSelectField
