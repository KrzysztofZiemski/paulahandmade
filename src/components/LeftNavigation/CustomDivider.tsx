import { makeStyles, Divider } from "@material-ui/core"
import React from "react"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
  },
}))

const CustomDivider = () => {
  const classes = useStyles()
  return <Divider className={classes.root} />
}

export default CustomDivider
