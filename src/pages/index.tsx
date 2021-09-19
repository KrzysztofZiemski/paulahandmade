import ProductItem from "../components/Products/ProductItem/ProductItem"
import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { List, ListItem, makeStyles, Theme } from "@material-ui/core"
import { DatoCmsProduct } from "../types/datoCmsProduct"
import ProductsList from "../components/Products/ProductsList"

const useStyles = makeStyles((theme: Theme) => ({}))

interface IndexPageProps {
  data: {
    allDatoCmsProduct: {
      nodes: DatoCmsProduct[]
    }
  }
}

const IndexPage = ({ data }: IndexPageProps) => {
  const { allDatoCmsProduct } = data
  const nodes = allDatoCmsProduct.nodes
  const classes = useStyles()
  return (
    <Layout>
      <Seo title="Produkty" />
      <ProductsList list={nodes} />
    </Layout>
  )
}

export const query = graphql`
  {
    allDatoCmsProduct {
      nodes {
        id
        category
        name
        price
        photos {
          alt
          fluid(maxWidth: 400) {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
        tags {
          id
          tag
        }
        productColors {
          colorsBase
        }
        shortDescription
        description {
          ... on DatoCmsTextParagraph {
            model {
              apiKey
            }
            text
          }
          ... on DatoCmsTextSubheader {
            model {
              apiKey
            }
            text
          }
        }
      }
    }
  }
`
export default IndexPage
