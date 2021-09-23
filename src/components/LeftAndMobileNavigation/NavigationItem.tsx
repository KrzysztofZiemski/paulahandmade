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
import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import { getSlugify } from "../../helpers/getSlugify"
import { NameOfCategory } from "../../types/datoCmsCategoryProduct"
import CustomDivider from "./CustomDivider"
import { useLocation } from "@reach/router"

const useStyles = makeStyles((theme: Theme) => ({
  item: {
    "&.MuiListItem-root": {
      [theme.breakpoints.up("md")]: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        border: `1px solid ${theme.palette.primary.main}`,
      },
    },
    "&.Mui-selected.MuiListItem-root": {
      color: theme.palette.primary.main,
      backgroundColor: "inherit",
      [theme.breakpoints.up("md")]: {
        border: `1px solid ${theme.palette.primary.main}`,
      },
    },
  },
  subMenuItem: {
    "&.Mui-selected.MuiListItem-root": {
      color: theme.palette.primary.main,
      backgroundColor: "inherit",
      whiteSpace: "nowrap",
      [theme.breakpoints.up("md")]: {
        "& span": {
          fontWeight: 700,
        },
      },
    },
    "&.MuiListItem-root": {
      paddingLeft: theme.spacing(4),
      [theme.breakpoints.up("md")]: {
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.common.white,
      },
    },
  },
  title: {
    fontWeight: 700,
    [theme.breakpoints.up("md")]: {
      fontWeight: 400,
    },
  },
  downIcon: {
    minWidth: "auto",
    zIndex: 10000,
    [theme.breakpoints.up("md")]: {
      "& svg": {
        color: "white",
      },
    },
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

  return (
    <>
      <MenuItem
        component={Link}
        onClick={handleSwitchOpen}
        to={link}
        className={`${classes.item}`}
      >
        <ListItemText
          primary={<Typography className={classes.title}>{name}</Typography>}
        />
        <ListItemIcon className={classes.downIcon}>
          {!!subcategories.length && <ArrowDropDownIcon color="primary" />}
        </ListItemIcon>
      </MenuItem>
      {!!subcategories.length && (
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {subcategories.map(subcategory => {
              const subCategoryLink = `${link}/${getSlugify(subcategory)}`
              return (
                <ListItem
                  onClick={onClose}
                  component={Link}
                  to={`${link}/${getSlugify(subcategory)}`}
                  className={classes.subMenuItem}
                  key={subcategory}
                  button
                  selected={!!location.hash.includes(subCategoryLink)}
                >
                  <ListItemText primary={subcategory} />
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
