import { makeStyles } from "@material-ui/core"
import { Link } from "gatsby"
import { FunctionComponent } from "react"
import { categoriesList } from "../../utils/cateroriesList"
import { routes } from "../../utils/routes"
import NavigationItem from "./NavigationItem"
import React from "react"
import { getSlugify } from "../../helpers/getSlugify"

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
      padding: theme.spacing(2),
      fontSize: 18,
      color: theme.palette.common.black,
      textTransform: "uppercase",
    },
  },
}))

interface NavigationItemsProps {}

const NavigationItems: FunctionComponent<NavigationItemsProps> = () => {
  const classes = useStyles()

  return (
    <>
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
  // <>
  //   <Typography className={classes.navType}>Biżuteria</Typography>
  //   {navigationList.jewelry.map(el => (
  //     <></>
  //   ))}
  //   <Typography className={classes.navType}>Szydełko</Typography>
  //   {categoriesList.crochetHook.map(el => (
  //     <></>
  //   ))}
  // </>
}

export default NavigationItems
