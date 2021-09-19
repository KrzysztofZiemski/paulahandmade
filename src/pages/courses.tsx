import ImageSlider from "../components/ImageSlider/ImageSlider"
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import { DatoCmsProduct } from "../types/datoCmsProduct"
import { useState } from "react"

const IndexPage = ({ data }: any) => {
  const { allDatoCmsProduct } = data
  const nodes: DatoCmsProduct[] = allDatoCmsProduct.nodes
  const [open, setOpen] = useState(true)
  return (
    <Layout>
      <Seo title="Kursy" />
      <ImageSlider
        initialSlide={0}
        show={open}
        onClose={() => {
          setOpen(false)
        }}
        images={nodes[1].photos.map(photo => photo)}
      />
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
