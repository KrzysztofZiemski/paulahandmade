import {
  Divider,
  ListItemIcon,
  ListItemText,
  makeStyles,
  MenuItem,
} from "@material-ui/core"
import { useLocation } from "@reach/router"
import { Link } from "gatsby"
import React, { FunctionComponent } from "react"
import Dot from "./Dot"

const useStyles = makeStyles(theme => ({
  navType: {
    color: theme.palette.common.white,
    // paddingTop: theme.spacing(1.5),
    // paddingBottom: theme.spacing(1.5),
    paddingLeft: theme.spacing(1),
    textTransform: "capitalize",
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.common.black,
    },
    "&:hover div::after": {
      backgroundColor: theme.palette.primary.main,
    },
  },
  active: {
    // backgroundColor: "rgba(49,122,140, .1)",
  },
  driver: {
    backgroundColor: theme.palette.common.white,
  },
  icon: {
    minWidth: "auto",
  },
  dot: {
    "&::after": {
      backgroundColor: theme.palette.common.white,
    },
  },
}))

interface NavigationItemTypeProps {
  text: string
  to: string
  exactly?: boolean
}

const NavigationItemType: FunctionComponent<NavigationItemTypeProps> = ({
  text,
  to,
  exactly,
}) => {
  const classes = useStyles()
  const location = useLocation()

  const isActive = exactly
    ? location.hash.replaceAll("/", "") === to.replaceAll("/", "")
    : !!location.hash.replaceAll("/", "").includes(to.replaceAll("/", ""))

  return (
    <>
      <MenuItem
        component={Link}
        className={`${classes.navType} ${isActive ? classes.active : ""}`}
        to={to}
      >
        <ListItemText primary={text} />
        {isActive && (
          <ListItemIcon className={classes.icon}>
            <Dot className={classes.dot} />
          </ListItemIcon>
        )}
      </MenuItem>
      <Divider className={classes.driver} />
    </>
  )
}

export default NavigationItemType
