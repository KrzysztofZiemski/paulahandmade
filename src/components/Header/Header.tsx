import {
  AppBar,
  Box,
  Grid,
  IconButton,
  List,
  makeStyles,
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import Logo from "../Logo/Logo"

import React, { useContext } from "react"
import { SearchContext } from "../../context/SearchContext"
import SearchInput from "../fields/SearchInput"
import NavItem from "./NavItem"
import { navList } from "./navList"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 75,
    padding: `0 ${theme.spacing(2)}px`,
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      height: "auto",
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.common.white,
    },
  },
  iconButton: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  navList: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(1),
      justifyContent: "flex-end",
    },
  },
  logo: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  firstSection: {},
  secondSection: {
    paddingRight: 20,
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
      backgroundColor: theme.palette.primary.main,
    },
  },
}))

const Header = ({ onClick }: { onClick: () => void }) => {
  const classes = useStyles()
  const { searchValue, setSearchValue } = useContext(SearchContext)

  return (
    <AppBar className={classes.root} position="static">
      <Grid container alignItems="center" className={classes.firstSection}>
        <Logo className={classes.logo} />
        <Box component={"nav"} flexGrow="1">
          <List className={classes.navList}>
            {navList.map(el => (
              <NavItem key={el.path} label={el.label} to={el.path} />
            ))}
          </List>
        </Box>
      </Grid>
      <Grid className={classes.secondSection}>
        <SearchInput
          value={searchValue}
          setValue={setSearchValue}
          name="search"
        />
        <IconButton onClick={onClick} className={classes.iconButton}>
          <MenuIcon style={{ color: "white" }} fontSize="large" />
        </IconButton>
      </Grid>
    </AppBar>
  )
}

export default Header
