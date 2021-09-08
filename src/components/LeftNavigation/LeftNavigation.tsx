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
} from "@material-ui/core"
import React from "react"
import NavigationItem from "./NavigationItem"
import { navigationList } from "./navigationList"
import CloseIcon from "@material-ui/icons/Close"

const useStyles = makeStyles(theme => ({
  container: {
    // height: "90vh",
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
  paper: {
    height: "calc(100% - 158px)",
    top: "158px",
  },
}))

const LeftNavigation = ({
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
          classes={{ paper: classes.paper }}
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
      <Hidden mdDown implementation="css">
        DESKTOP
      </Hidden>
    </>
    // <Divider />
    // <SwipeableDrawer
    //   anchor={"bottom"}
    //   open={open}
    //   onClose={() => {}}
    //   onOpen={() => {}}
    // >
    //   <div> sasdasdasdadasdasdsds</div>
    // </SwipeableDrawer>
  )
}

export default LeftNavigation
