import {
  AppBar,
  Box,
  Grid,
  IconButton,
  List,
  makeStyles,
  Typography,
} from "@material-ui/core"
import React, { useContext } from "react"
import { SearchContext } from "../../context/searchContext"
import CustomTextField from "../fields/CustomTextField"
import NavItem from "./NavItem"
import { navList } from "./navList"
import MenuIcon from "@material-ui/icons/Menu"
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined"
import SearchInput from "../fields/SearchInput"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 75,
    padding: `0 ${theme.spacing(2)}px`,
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      height: "auto",
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.common.white,
    },
  },
  iconButton: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
  navList: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(1),
      justifyContent: "flex-end",
    },
  },
  secondSection: {
    paddingRight: 20,
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      padding: `${theme.spacing(2)}px`,
      backgroundColor: theme.palette.primary.main,
    },
  },
}))

const Header = ({ onClick }: { onClick: () => void }) => {
  const classes = useStyles()
  const { searchValue, setSearchValue } = useContext(SearchContext)

  return (
    <AppBar className={classes.root} position="static">
      <Grid container alignItems="center">
        <Typography variant="h6">Paula Handmade</Typography>
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
