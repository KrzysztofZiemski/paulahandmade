import { makeStyles } from "@material-ui/core"
import ArrowIcon from "@material-ui/icons/ArrowForwardIos"
import React from "react"
const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.primary.main,
    // width: 24,
    // height: 24,
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    // "&::after": {
    //   content: '""',
    //   display: "block",
    //   padding: 8,
    //   backgroundColor: theme.palette.primary.main,
    //   borderRadius: "50%",
    // },
  },
}))

const Marker = ({ className }: { className?: string }) => {
  const classes = useStyles()
  // return <div className={`${classes.root} ${className || ""}`}></div>
  return <ArrowIcon className={`${classes.root} ${className || ""}`} />
}

export default Marker
