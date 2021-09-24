import React from "react"
import { makeStyles, Theme } from "@material-ui/core"
import { FunctionComponent } from "react"
const useStyles = makeStyles(theme => ({
  root: {
    width: 24,
    height: 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&::after": {
      content: '""',
      display: "block",
      padding: 4,
      backgroundColor: theme.palette.primary.main,
      borderRadius: "50%",
    },
  },
}))

const Dot = ({ className }: { className?: string }) => {
  const classes = useStyles()
  return <div className={`${classes.root} ${className || ""}`}></div>
}

export default Dot
