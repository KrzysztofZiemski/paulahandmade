import { AppBar, Box, List, makeStyles, Typography } from "@material-ui/core"
import React from "react"
import NavItem from "./NavItem"

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      backgroundColor: theme.palette.common.white,
      boxShadow: "none",
    },
  },
  menuButton: {
    // marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

const Header = ({ siteTitle }) => {
  const classes = useStyles()
  return (
    <AppBar className={classes.root} position="static">
      <Typography variant="h6" className={classes.title}>
        Paula Handmade
      </Typography>
      <List>
        <NavItem value="Nowości" active={true} to={"#"} />
        {/* <NavItem value="Oferta" active={true} to={"#"} />
        <NavItem value="Kalendarz" active={true} to={"#"} /> */}
      </List>
    </AppBar>
  )
}

export default Header
