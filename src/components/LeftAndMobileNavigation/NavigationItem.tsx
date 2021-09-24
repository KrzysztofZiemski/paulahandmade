import {
  Collapse,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  MenuItem,
  Theme,
  Typography,
} from "@material-ui/core"
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"

import React, { useEffect, useState } from "react"
import { getSlugify } from "../../helpers/getSlugify"
import { NameOfCategory } from "../../types/datoCmsCategoryProduct"
import CustomDivider from "./CustomDivider"
import { useLocation } from "@reach/router"
import Dot from "./Dot"
import { Link } from "gatsby"

const useStyles = makeStyles((theme: Theme) => ({
  item: {
    "&.MuiListItem-root": {
      whiteSpace: "nowrap",
      textTransform: "capitalize",
      // paddingLeft: theme.spacing(3),
      // [theme.breakpoints.up("md")]: {
      //   backgroundColor: theme.palette.primary.main,
      //   color: theme.palette.common.white,
      //   border: `1px solid ${theme.palette.primary.main}`,
      // },
    },
    "&.Mui-selected.MuiListItem-root": {
      // color: theme.palette.primary.main,
      // backgroundColor: "inherit",
      // [theme.breakpoints.up("md")]: {
      //   border: `1px solid ${theme.palette.primary.main}`,
      // },
    },
  },
  active: {
    backgroundColor: "rgba(49,122,140, .1)",
  },
  subMenuItem: {
    "&.MuiListItem-root": {
      whiteSpace: "nowrap",
      paddingLeft: theme.spacing(3),
      textTransform: "capitalize",
      // paddingLeft: theme.spacing(4),
      // [theme.breakpoints.up("md")]: {
      //   color: theme.palette.primary.main,
      //   backgroundColor: theme.palette.common.white,
      // },
    },
  },
  title: {
    // fontWeight: 700,
    // [theme.breakpoints.up("md")]: {
    //   fontWeight: 400,
    // },
  },
  downIcon: {
    minWidth: "auto",
    // zIndex: 10000,
    // [theme.breakpoints.up("md")]: {
    //   "& svg": {
    //     color: "white",
    //   },
    // },
  },
}))

type Category = {
  name: NameOfCategory
  subcategories: string[]
}

interface NavigationItemProps {
  baseUrl: string
  category: Category
  onClose?: () => void
}

const NavigationItem = ({
  baseUrl,
  category,
  onClose,
}: NavigationItemProps) => {
  const classes = useStyles()
  const { name, subcategories } = category
  const location = useLocation()
  const link = `${baseUrl}/${getSlugify(name)}`

  const checkIsActive = () => {
    const matchPaths = [link]
    subcategories.forEach(subcategory =>
      matchPaths.push(`${link}/${getSlugify(subcategory)}`)
    )
    let isActive = false
    matchPaths.forEach(path => {
      if (location.hash.includes(path)) isActive = true
    })
    return isActive
  }

  const [isOpen, setIsOpen] = useState(checkIsActive())

  const handleSwitchOpen = () => setIsOpen(prev => !prev)

  const isCategoryActive = !!location.hash
    .replaceAll("/", "")
    .includes(link.replaceAll("/", ""))
  return (
    <>
      <MenuItem
        component={Link}
        onClick={handleSwitchOpen}
        to={link}
        className={`${classes.item} ${isCategoryActive ? classes.active : ""}`}
      >
        <ListItemText
          primary={<Typography className={classes.title}>{name}</Typography>}
        />
        <ListItemIcon className={classes.downIcon}>
          {isCategoryActive ? (
            <Dot />
          ) : (
            !!subcategories.length && <ArrowDropDownIcon color="primary" />
          )}
        </ListItemIcon>
      </MenuItem>
      {!!subcategories.length && (
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {subcategories.map(subcategory => {
              const subCategoryLink = `${link}/${getSlugify(subcategory)}`
              const isActive =
                location.hash.replaceAll("/", "") ===
                subCategoryLink.replaceAll("/", "")
              return (
                <ListItem
                  onClick={onClose}
                  component={Link}
                  to={subCategoryLink}
                  className={`${classes.subMenuItem} ${
                    isActive ? classes.active : ""
                  }`}
                  key={subcategory}
                  button
                >
                  <ListItemText primary={subcategory} />
                  {isActive && (
                    <ListItemIcon className={classes.downIcon}>
                      <Dot />
                    </ListItemIcon>
                  )}
                </ListItem>
              )
            })}
          </List>
        </Collapse>
      )}
      <CustomDivider />
    </>
  )
}

export default NavigationItem
