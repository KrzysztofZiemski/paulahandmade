import React from "react"
import { Grid, makeStyles, Theme } from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    width: "100%",
  },
}))

const MainContainer = ({
  children,
}: {
  children: React.ReactNode | React.ReactChild | React.ReactChild[]
}) => {
  const classes = useStyles()

  return (
    <Grid component="main" className={classes.root}>
      {children}
    </Grid>
  )
}

export default MainContainer
