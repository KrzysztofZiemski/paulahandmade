import { Box, ListItem, makeStyles, MenuItem } from "@material-ui/core"
import { Link } from "gatsby"
import React from "react"

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    width: "auto",
    padding: 0,
  },
  link: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "100%",
    color: theme.palette.common.white,
    textDecoration: "none",
    fontFamily: "Lato",
    fontWeight: 300,
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    [theme.breakpoints.down("md")]: {
      color: theme.palette.primary.main,
    },
  },
  active: {
    "&:after": {
      position: "absolute",
      content: '""',
      display: "block",
      height: 1,
      width: "100%",
      bottom: 0,
      left: 0,
      backgroundColor: theme.palette.common.white,
      [theme.breakpoints.down("md")]: {
        height: 2,
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
}))

type NavItemProps = {
  label: string
  to: string
}

const NavItem = ({ label, to }: NavItemProps) => {
  const classes = useStyles()
  return (
    <ListItem className={classes.root}>
      <Link to={to} className={classes.link} activeClassName={classes.active}>
        {label}
      </Link>
    </ListItem>
  )
}

export default NavItem
