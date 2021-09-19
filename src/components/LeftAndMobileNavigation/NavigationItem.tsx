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
import { navigate } from "gatsby"
import useParams from "../../hooks/useParams"
import React, { useEffect, useState } from "react"
import { NavigationItemType } from "../../types/navigationItemType"
import CustomDivider from "./CustomDivider"
import { getCategoryParam, subMenuIsOpen } from "./helpers"
import { Params } from "../../types/params"

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
    [theme.breakpoints.up("md")]: {
      "& svg": {
        color: "white",
      },
    },
  },
}))

interface NavigationItemProps {
  item: NavigationItemType
  onClose: () => void
}

const NavigationItem = ({ item, onClose }: NavigationItemProps) => {
  const classes = useStyles()
  const location = useLocation()
  const params = useParams()
  const [isOpen, setIsOpen] = useState(
    typeof window !== `undefined`
      ? subMenuIsOpen({ item, param: getCategoryParam(params) })
      : false
  )

  const [categoryParams, setCategoryParams] = useState<null | string>(
    getCategoryParam(params)
  )

  useEffect(() => {
    const categoryParams = getCategoryParam(params)
    setCategoryParams(categoryParams)

    if (!item.hasSubList || isOpen) return
    setIsOpen(subMenuIsOpen({ item, param: categoryParams }))
  }, [params])

  const { label, hasSubList } = item

  const handleOpenSubMenu = () => setIsOpen(prev => !prev)

  const goTo = (query: string) => {
    if (query === "") {
      navigate(`/`)
    } else {
      location.pathname === "/"
        ? navigate(`?${Params.category}=${query}`)
        : navigate(`/?${Params.category}=${query}`)
    }

    onClose()
  }

  return (
    <>
      <MenuItem
        className={classes.item}
        selected={!hasSubList && categoryParams === item.filter}
        onClick={hasSubList ? handleOpenSubMenu : () => goTo(item.filter)}
      >
        <ListItemText
          primary={<Typography className={classes.title}>{label}</Typography>}
        />
        <ListItemIcon className={classes.downIcon}>
          {hasSubList && <ArrowDropDownIcon color="primary" />}
        </ListItemIcon>
      </MenuItem>
      {hasSubList && (
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {item.list.map(el => (
              <ListItem
                className={classes.subMenuItem}
                key={el.filter}
                button
                selected={categoryParams === el.filter}
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

export default NavigationItem
