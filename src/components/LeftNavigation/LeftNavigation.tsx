import { Hidden, makeStyles, SwipeableDrawer } from "@material-ui/core"
import React from "react"

const useStyles = makeStyles(theme => ({}))

const LeftNavigation = ({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) => {
  return (
    <>
      <Hidden mdUp implementation="css">
        MOBILE
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
