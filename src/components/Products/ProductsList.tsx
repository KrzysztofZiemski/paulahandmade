import { List, makeStyles, Theme } from "@material-ui/core"
import { SearchContext } from "../../context/SearchContext"
import React, { useContext, useEffect } from "react"
import { DatoCmsProduct, ProductColor } from "../../types/datoCmsProduct"
import { Tag } from "../../types/tag"
import ProductItem from "./ProductItem/ProductItem"
import { Filter } from "../../helpers/Filter"
import { getSlugify } from "../../helpers/getSlugify"
import useParams from "../../hooks/useParams"

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
  const resultByColors = filter.checkArrBy(
    "productColors",
    (color: ProductColor) => color.colorsBase
  )
  return resultByString || resultByTags || resultByColors
}

const ProductsList = ({ list }: { list: DatoCmsProduct[] }) => {
  const classes = useStyles()

  const { searchValue } = useContext(SearchContext)

  const listToRender =
    searchValue.length < 3
      ? list
      : list.filter(product => filterHandler(product, searchValue))

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
