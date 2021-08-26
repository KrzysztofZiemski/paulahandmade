import { Box, ListItem, makeStyles, MenuItem } from "@material-ui/core"
import { Link } from "gatsby"
import React from "react"

const useStyles = makeStyles(theme => ({
  root: {
    padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  },
  link: {
    color: theme.palette.common.white,
    textDecoration: "none",
    fontFamily: "Roboto",
    fontWeight: 400,
  },
}))

type NavItemProps = {
  active: boolean
  value: string
  to: string
}

const NavItem = ({ active, value, to }: NavItemProps) => {
  const classes = useStyles()
  return (
    <ListItem className={classes.root}>
      <Link to={to} className={classes.link}>
        {value}
      </Link>
    </ListItem>
  )
}

export default NavItem
