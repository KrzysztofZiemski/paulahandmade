import { getCategoryParam } from "../components/LeftAndMobileNavigation/helpers"
import { graphql } from "gatsby"
import * as React from "react"

import Layout from "../components/layout"
import ProductsList from "../components/Products/ProductsList"
import Seo from "../components/seo"
import { getSlugify } from "../helpers/getSlugify"
import useParams from "../hooks/useParams"
import { DatoCmsProduct } from "../types/datoCmsProduct"
import { Params } from "../types/params"
import PageName from "../components/PageName.tsx/PageName"
import { PageContextFilter } from "../types/PageContextFilter"

interface IndexPageProps {
  data: {
    allDatoCmsProduct: {
      nodes: DatoCmsProduct[]
    }
  }
  pageContext: {
    filter: PageContextFilter
  }
}
const filterByCategory = (product: DatoCmsProduct, category: string) => {
  return (
    getSlugify(product.categoryProduct[0].model.apiKey) === category ||
    getSlugify(product.categoryProduct[0]?.subcategory || "") === category
  )
}

const IndexPage = ({ data, pageContext }: IndexPageProps) => {
  const { allDatoCmsProduct } = data
  const nodes = allDatoCmsProduct.nodes
  const params = useParams()
  // const [list, setList] = useState(nodes)
  // console.log(pageContext)
  // useEffect(() => {
  //   const category = getCategoryParam(params)

  //   const list = category
  //     ? nodes.filter(item => filterByCategory(item, category))
  //     : nodes
  //   setList(list)
  // }, [params])

  return (
    <Layout>
      <Seo
        lang="pl"
        title="Paula Handmade Rękodzieło. Maskotki, bransoletki, chusty, kolczyki, naszyjniki, torebki."
        description="Rękodzieło z pasją. Sprawdź moje maskotki lub bużuterię i dodatki. 
        Wszystko wykonuje własnoręcznie, więc gwarantuje, że nie znajdziesz duplikatu. 
        Sprawdź co posiadam aktualnie w ofercie, ale również specjalizuję w tworzeniu na zamówienie. 
        Okazjonalne prezenty zarówno ślubne jak i na chrzciny nie są mi obce."
      />
      <PageName> Oferta </PageName>
      <ProductsList list={nodes} />
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
          ... on DatoCmsInne {
            id
            model {
              apiKey
            }
            subcategory
          }
        }
      }
    }
  }
`
export default IndexPage
