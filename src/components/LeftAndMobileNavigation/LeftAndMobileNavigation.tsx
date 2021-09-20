import {
  Grid,
  Hidden,
  makeStyles,
  SwipeableDrawer,
  Typography,
  MenuList,
  Box,
  IconButton,
  Drawer,
  Menu,
  MenuItem,
  Paper,
} from "@material-ui/core"
import React from "react"
import NavigationItem from "./NavigationItem"
import { navigationList } from "./navigationList"
import CloseIcon from "@material-ui/icons/Close"

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
    },
  },
}))

const LeftAndMobileNavigation = ({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
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
                {navigationList.map(el => (
                  <NavigationItem key={el.label} item={el} onClose={onClose} />
                ))}
              </MenuList>
            </Grid>
          </Box>
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Paper className={classes.desktopMenuPaper}>
          <MenuList className={classes.desktopMenuList}>
            {navigationList.map(el => (
              <NavigationItem key={el.label} item={el} onClose={onClose} />
            ))}
          </MenuList>
        </Paper>
      </Hidden>
    </>
  )
}

export default LeftAndMobileNavigation
