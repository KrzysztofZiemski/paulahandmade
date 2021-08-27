import {
  AppBar,
  List,
  makeStyles,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@material-ui/core"
import { Link } from "gatsby"
import React, { useContext, useEffect, useState } from "react"
import { SearchContext } from "../../context/searchContext"
import { routes } from "../../routes"
import CustomTextField from "../fields/CustomTextField"
import NavItem from "./NavItem"
import { navList } from "./navList"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 75,
    padding: `0 ${theme.spacing(2)}px`,
    [theme.breakpoints.down("xs")]: {
      backgroundColor: theme.palette.common.white,
      boxShadow: "none",
    },
  },
  list: {
    display: "flex",
    justifyContent: "center",
  },
  nav: {
    flexGrow: 1,
  },
  search: {
    marginRight: 20,
    width: 300,
  },
}))

const Header = () => {
  const classes = useStyles()
  const { searchValue, setSearchValue } = useContext(SearchContext)

  return (
    <AppBar className={classes.root} position="static">
      <Typography variant="h6">Paula Handmade</Typography>
      <nav className={classes.nav}>
        <List className={classes.list}>
          {navList.map(el => (
            <NavItem key={el.path} label={el.label} to={el.path} />
          ))}
        </List>
      </nav>
      <CustomTextField
        name="search"
        value={searchValue}
        setValue={setSearchValue}
        className={classes.search}
      />
    </AppBar>
  )
}

export default Header
