import { List, ListItem, makeStyles, Theme } from "@material-ui/core"
import { SearchContext } from "../../context/SearchContext"
import React, { useContext } from "react"
import { DatoCmsProduct } from "../../types/datoCmsProduct"
import { Tag } from "../../types/tag"
import ProductItem from "./ProductItem/ProductItem"
import { Filter } from "../../helpers/Filter"
import { getSlugify } from "../../helpers/getSlugify"

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
        ({
          name,
          photos,
          tags,
          shortDescription,
          id,
          price,
        }: DatoCmsProduct) => (
          <ProductItem
            key={id}
            price={price}
            link={`produkt/${getSlugify(name)}`}
            title={name}
            tags={tags}
            fluidImage={photos[0].fluid}
            imageAlt={photos[0].alt}
            description={shortDescription}
          />
        )
      )}
    </List>
  )
}

export default ProductsList
