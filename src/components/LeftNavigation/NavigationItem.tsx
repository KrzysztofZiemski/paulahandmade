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
import ArrowRightIcon from "@material-ui/icons/ArrowRight"
import { navigate } from "gatsby"
import React, { useState } from "react"
import { NavigationItemType } from "types/navigationItemType"
import CustomDivider from "./CustomDivider"
import useSiteMetadata from "../../hooks/useSiteMetadata"
import { useLocation } from "@reach/router"

const useStyles = makeStyles((theme: Theme) => ({
  item: {
    "&.Mui-selected.MuiListItem-root": {
      color: theme.palette.primary.main,
      backgroundColor: "inherit",
    },
  },
}))

const getCategoryParam = (params: string) =>
  new URLSearchParams(params).get("category")

const startStateIsOpen = ({
  item,
  param,
}: {
  item: NavigationItemType
  param: string
}) => {
  if (!item.hasSubList) return false
  const index = item.list.findIndex(el => {
    return el.filter === param
  })
  return index !== -1
}

interface NavigationItemProps {
  item: NavigationItemType
  onClose: () => void
}

const NavigationItem = ({ item, onClose }: NavigationItemProps) => {
  const classes = useStyles()
  const location = useLocation()

  const categoryParams = getCategoryParam(location.search) || ""

  const [isOpen, setIsOpen] = useState(
    startStateIsOpen({ item, param: categoryParams })
  )

  const { label, hasSubList } = item

  const handleOpenSubMenu = () => setIsOpen(prev => !prev)

  const goTo = (query: string) => {
    if (query === "") {
      navigate(`/`)
    } else {
      navigate(`?category=${query}`)
    }

    onClose()
  }

  return (
    <>
      <MenuItem
        className={classes.item}
        button
        selected={!hasSubList && categoryParams === item.filter}
        onClick={hasSubList ? handleOpenSubMenu : () => goTo(item.filter)}
      >
        <ListItemText
          primary={<Typography style={{ fontWeight: 700 }}>{label}</Typography>}
        />
        <ListItemIcon>
          {hasSubList ? (
            <ArrowDropDownIcon color="primary" />
          ) : (
            <ArrowRightIcon color="primary" />
          )}
        </ListItemIcon>
      </MenuItem>
      {hasSubList && (
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {item.list.map(el => (
              <ListItem
                className={classes.item}
                key={el.filter}
                button
                selected={categoryParams === el.filter}
                style={{ paddingLeft: "1rem" }}
                onClick={() => goTo(el.filter)}
              >
                <ListItemText primary={el.filter} />
              </ListItem>
            ))}
          </List>
        </Collapse>
      )}

      <CustomDivider />
    </>
  )
}
//https://material-ui.com/components/lists/#nested-list
export default NavigationItem

{
  /* <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
      </Collapse> */
}
