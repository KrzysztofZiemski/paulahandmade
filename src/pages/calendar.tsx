import { graphql } from "gatsby"
import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { routes } from "../utils/routes"

const IndexPage = () => (
  <Layout>
    <Seo title="Nowości" />
    nowości
  </Layout>
)

export default IndexPage
