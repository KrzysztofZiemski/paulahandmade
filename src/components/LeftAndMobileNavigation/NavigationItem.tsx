import {
  Collapse,
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
import { useLocation } from "@reach/router"
import { Link } from "gatsby"
import React, { useState } from "react"
import { getSlugify } from "../../helpers/getSlugify"
import { NameOfCategory } from "../../types/datoCmsCategoryProduct"
import CustomDivider from "./CustomDivider"
import Dot from "./Dot"

const useStyles = makeStyles((theme: Theme) => ({
  item: {
    "&.MuiListItem-root": {
      whiteSpace: "nowrap",
      textTransform: "capitalize",
      paddingLeft: theme.spacing(3),
    },
  },
  active: {
    backgroundColor: "rgba(49,122,140, .1)",
  },
  subMenuItem: {
    "&.MuiListItem-root": {
      whiteSpace: "nowrap",
      paddingLeft: theme.spacing(5),
      textTransform: "capitalize",
    },
  },
  downIcon: {
    minWidth: "auto",
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
      console.log(matchPaths, location.hash)
      if (path.includes(location.hash)) isActive = true
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
        <ListItemText primary={<Typography>{name}</Typography>} />
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
