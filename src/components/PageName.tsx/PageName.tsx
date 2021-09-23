import React, { ReactChild, ReactNode } from "react"
import { makeStyles, Theme, Typography } from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    color: theme.palette.primary.main,
    fontWeight: 700,
    textAlign: "center",
    fontSize: 21,
    fontFamily: "Lato",
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    "&::first-letter": {
      textTransform: "uppercase",
    },
  },
}))

interface PageNameProps {
  children: ReactNode
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
