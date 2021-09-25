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
import Marker from "./Marker"

const useStyles = makeStyles(theme => ({
  navType: {
    color: theme.palette.common.white,
    paddingLeft: theme.spacing(1),
    textTransform: "capitalize",
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },
  driver: {
    backgroundColor: theme.palette.common.white,
  },
  icon: {
    minWidth: "auto",
  },
  marker: {
    color: theme.palette.common.white,
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

  const isActive = location.hash.replaceAll("/", "") === to.replaceAll("/", "")

  return (
    <>
      <MenuItem component={Link} className={`${classes.navType}`} to={to}>
        <ListItemText primary={text} />
        {isActive && (
          <ListItemIcon className={classes.icon}>
            <Marker className={classes.marker} />
          </ListItemIcon>
        )}
      </MenuItem>
      <Divider className={classes.driver} />
    </>
  )
}

export default NavigationItemType
