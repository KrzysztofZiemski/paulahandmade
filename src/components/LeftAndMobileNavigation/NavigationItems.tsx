import { Divider, makeStyles } from "@material-ui/core"
import { Link } from "gatsby"
import { FunctionComponent } from "react"
import { categoriesList } from "../../utils/cateroriesList"
import { routes } from "../../utils/routes"
import NavigationItem from "./NavigationItem"
import React from "react"
import { getSlugify } from "../../helpers/getSlugify"
import CustomDivider from "./CustomDivider"

const useStyles = makeStyles(theme => ({
  navType: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: theme.spacing(1),
    textDecoration: "none",
    display: "block",
    [theme.breakpoints.up("md")]: {
      backgroundColor: theme.palette.common.white,
      textAlign: "center",
      padding: theme.spacing(1.5),
      fontSize: 18,
      color: theme.palette.common.black,
      textTransform: "uppercase",
    },
  },
  driver: {
    backgroundColor: theme.palette.primary.main,
  },
}))

interface NavigationItemsProps {
  onClose?: () => void
}

const NavigationItems: FunctionComponent<NavigationItemsProps> = ({
  onClose,
}) => {
  const classes = useStyles()

  return (
    <>
      <Link className={classes.navType} to={"/"}>
        Pokaż wszystko
      </Link>
      <Divider className={classes.driver} />
      {categoriesList.map(({ type, categories }) => {
        const baseUrl = `${routes.products}/${getSlugify(type)}`
        return (
          <div key={type}>
            <Link className={classes.navType} to={baseUrl}>
              {type}
            </Link>

            {categories.map(category => {
              return (
                <NavigationItem
                  onClose={onClose}
                  key={category.name}
                  category={category}
                  baseUrl={baseUrl}
                />
              )
            })}
          </div>
        )
      })}
    </>
  )
}

export default NavigationItems
