import { List, ListItem, makeStyles, Theme } from "@material-ui/core"
import { SearchContext } from "../../context/searchContext"
import React, { useContext } from "react"
import { DatoCmsProduct } from "../../types/datoCmsProduct"
import { Tag } from "../../types/tag"
import ProductItem from "./ProductItem/ProductItem"
import { Filter } from "./helpers"

const useStyles = makeStyles((theme: Theme) => ({
  list: {
    justifyContent: "center",
    alignItems: "flex-start",
    display: "flex",
    flexWrap: "wrap",
    [theme.breakpoints.up("md")]: {
      justifyContent: "space-evenly",
    },
  },
  listItem: {
    width: "100%",
    maxWidth: 450,
    paddingLeft: 10,
    paddingRight: 10,

    [theme.breakpoints.up("sm")]: {
      width: "50%",
      height: 450,
    },
    [theme.breakpoints.up("md")]: {
      width: "30%",
      height: 500,
    },
  },
}))

const filterHandler = (item: DatoCmsProduct, filderValue: string) => {
  const filter = new Filter({ item, filter: filderValue })
  const resultByString = filter.check()
  const resultByTags = filter.checkArrBy("tags", (tag: Tag) => tag.tag)

  return resultByString || resultByTags
}

const ProductsList = ({ list }: { list: DatoCmsProduct[] }) => {
  const classes = useStyles()

  const { searchValue, setSearchValue } = useContext(SearchContext)

  const listToRender =
    searchValue.length < 3
      ? list
      : list.filter(a => filterHandler(a, searchValue))

  return (
    <List className={classes.list}>
      {listToRender.map(
        ({ name, photos, tags, description, id, price }: DatoCmsProduct) => (
          <ListItem className={classes.listItem} key={id}>
            {console.log(tags)}
            <ProductItem
              price={price}
              link={"#"}
              title={name}
              tags={tags}
              fluidImage={photos[0].fluid}
              imageAlt={photos[0].alt}
              description={description}
            />{" "}
          </ListItem>
        )
      )}
    </List>
  )
}

export default ProductsList
