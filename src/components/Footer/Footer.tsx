import React from "react"
import { makeStyles, Theme } from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: 60,
    backgroundColor: theme.palette.primary.main,
  },
}))

interface FooterProps {}

const Footer = ({}: FooterProps) => {
  const classes = useStyles()

  return <footer className={classes.root}>test</footer>
}

export default Footer
