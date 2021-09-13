import ProductItem from "../components/ProductItem/ProductItem"
import { graphql } from "gatsby"
import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { routes } from "../utils/routes"
import { List, ListItem, makeStyles, Theme } from "@material-ui/core"
import { Product } from "interfaces/Product"

const useStyles = makeStyles((theme: Theme) => ({
  list: {
    justifyContent: "center",
    display: "flex",
    flexWrap: "wrap",
  },
}))

interface IndexPageProps {
  data: {
    allDatoCmsProduct: {
      nodes: Product[]
    }
  }
}

const IndexPage = ({ data }: any) => {
  const { allDatoCmsProduct } = data
  console.log("allDatoCmsProduct", allDatoCmsProduct)
  const classes = useStyles()

  return (
    <Layout>
      <Seo title="Produkty" />
      <List className={classes.list}>
        <ListItem style={{ width: "auto" }}>
          {" "}
          <ProductItem />{" "}
        </ListItem>

        <ListItem style={{ width: "auto" }}>
          {" "}
          <ProductItem />{" "}
        </ListItem>
        <ListItem style={{ width: "auto" }}>
          {" "}
          <ProductItem />{" "}
        </ListItem>
      </List>
    </Layout>
  )
}

export const query = graphql`
  {
    allDatoCmsProduct {
      nodes {
        id
        category
        description
        name
        price
        photos {
          alt
          url
        }
        tags
      }
    }
  }
`
export default IndexPage
