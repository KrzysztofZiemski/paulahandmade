import {
  Box,
  Drawer,
  Grid,
  Hidden,
  IconButton,
  makeStyles,
  MenuList,
  Paper,
  Typography,
} from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"
import React from "react"
import NavigationItems from "./NavigationItems"

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(1),
  },
  titleContainer: {
    justifyContent: "space-between",
    padding: theme.spacing(1),
    alignItems: "center",
  },
  title: {
    fontWeight: 700,
    fontSize: 22,
  },
  icon: {
    color: theme.palette.common.black,
  },
  paperMobile: {
    height: "100%",
    top: "0",
  },
  desktopMenuPaper: {
    height: "100%",
    width: 210,
  },
  desktopMenuList: {
    [theme.breakpoints.up("md")]: {
      position: "sticky",
      overflow: "auto",
      height: "100vh",
      top: 0,
      paddingTop: 0,
      "&::-webkit-scrollbar": {
        width: 3,
      },
      "&::-webkit-scrollbar-track": {
        background: "#f1f1f1",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "#888",
      },
      "&::-webkit-scrollbar-thumb:hover": {
        background: "#555",
      },
    },
  },
  navCategoryTitle: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      backgroundColor: theme.palette.common.white,
      textAlign: "center",
      padding: theme.spacing(1),
      fontSize: 20,
      color: theme.palette.common.black,
      textTransform: "uppercase",
    },
  },
  listItemAll: {
    "&.MuiListItem-root": {
      borderBottom: `8px solid ${theme.palette.primary.main} !important`,
      backgroundColor: theme.palette.common.white,
      textAlign: "center",
      padding: theme.spacing(1),
      color: theme.palette.common.black,
      textTransform: "uppercase",
      border: "none !important",
      "& p": {
        fontSize: "20px",
      },
    },
  },
}))

const LeftAndMobileNavigation = ({
  open,
  onClose,
  hideLeftNav,
}: {
  open: boolean
  onClose: () => void
  hideLeftNav: boolean
}) => {
  const classes = useStyles()

  return (
    <>
      <Hidden mdUp implementation="css">
        <Drawer
          BackdropProps={{ invisible: true }}
          classes={{ paper: classes.paperMobile }}
          anchor={"bottom"}
          open={open}
          onClose={onClose}
        >
          <Box className={classes.container}>
            <Grid container className={classes.titleContainer}>
              <Typography className={classes.title}>Kategorie</Typography>
              <IconButton onClick={onClose}>
                <CloseIcon fontSize="large" className={classes.icon} />
              </IconButton>
            </Grid>
            <Grid>
              <MenuList>
                <NavigationItems />
              </MenuList>
            </Grid>
          </Box>
        </Drawer>
      </Hidden>
      {!hideLeftNav && (
        <Hidden smDown implementation="css">
          <Paper className={classes.desktopMenuPaper}>
            <MenuList className={classes.desktopMenuList}>
              <NavigationItems />
            </MenuList>
          </Paper>
        </Hidden>
      )}
    </>
  )
}

export default LeftAndMobileNavigation
