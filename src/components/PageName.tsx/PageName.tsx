import React, { ReactChild } from "react"
import { makeStyles, Theme, Typography } from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    color: theme.palette.primary.main,
    fontWeight: 700,
    textAlign: "center",
    fontSize: 21,
    fontFamily: "Lato",
    marginBottom: theme.spacing(1),
  },
}))

interface PageNameProps {
  children: ReactChild
}
const PageName = ({ children }: PageNameProps) => {
  const classes = useStyles()
  return (
    <Typography component="h1" className={classes.root}>
      {children}
    </Typography>
  )
}

export default PageName
