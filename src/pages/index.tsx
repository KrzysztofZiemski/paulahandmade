import { graphql } from "gatsby"
import useParams from "../hooks/useParams"
import React, { useEffect, useState } from "react"
import { Params } from "../types/params"
import Layout from "../components/layout"
import ProductsList from "../components/Products/ProductsList"
import Seo from "../components/seo"
import { DatoCmsProduct } from "../types/datoCmsProduct"
import { getSlugify } from "../helpers/getSlugify"

interface IndexPageProps {
  data: {
    allDatoCmsProduct: {
      nodes: DatoCmsProduct[]
    }
  }
}
const filterByCategory = (product: DatoCmsProduct, category: string) => {
  return (
    getSlugify(product.categoryProduct[0].model.apiKey) === category ||
    getSlugify(product.categoryProduct[0]?.subcategory || "") === category
  )
}

const IndexPage = ({ data }: IndexPageProps) => {
  const { allDatoCmsProduct } = data
  const nodes = allDatoCmsProduct.nodes

  const params = useParams()
  const category = params.get(Params.category)
  return (
    <Layout>
      <Seo title="Produkty" />
      <ProductsList
        list={
          category
            ? nodes.filter(item => filterByCategory(item, category))
            : nodes
        }
      />
    </Layout>
  )
}

export const query = graphql`
  {
    allDatoCmsProduct {
      nodes {
        id
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
        categoryProduct {
          ... on DatoCmsKolczyki {
            id
            subcategory
            model {
              apiKey
            }
          }
          ... on DatoCmsBransoletki {
            id
            model {
              apiKey
            }
            subcategory
          }
          ... on DatoCmsChusty {
            id
            model {
              apiKey
            }
            subcategory
          }
          ... on DatoCmsNaszyjniki {
            id
            model {
              apiKey
            }
          }
          ... on DatoCmsTorebki {
            id
            model {
              apiKey
            }
          }
          ... on DatoCmsMaskotki {
            id
            subcategory
            model {
              apiKey
            }
          }
        }
      }
    }
  }
`
export default IndexPage
