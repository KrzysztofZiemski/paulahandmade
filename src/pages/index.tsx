import ProductItem from "../components/ProductItem/ProductItem"
import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { List, ListItem, makeStyles, Theme } from "@material-ui/core"
import { DatoCmsProduct } from "../types/datoCmsProduct"

const useStyles = makeStyles((theme: Theme) => ({
  list: {
    justifyContent: "center",
    alignItems: "flex-start",
    display: "flex",
    flexWrap: "wrap",
  },
  listItem: {
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10,
    [theme.breakpoints.up("sm")]: {
      width: "50%",
      height: 500,
    },
  },
}))

interface IndexPageProps {
  data: {
    allDatoCmsProduct: {
      nodes: DatoCmsProduct[]
    }
  }
}

const IndexPage = ({ data }: any) => {
  const { allDatoCmsProduct } = data
  const nodes = allDatoCmsProduct.nodes

  const classes = useStyles()
  return (
    <Layout>
      <Seo title="Produkty" />
      <List className={classes.list}>
        {nodes.map(
          ({ name, photos, tags, description, id }: DatoCmsProduct) => (
            <ListItem className={classes.listItem} key={id}>
              <ProductItem
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
