import * as path from "path"
import { getSlugify } from "./src/helpers/getSlugify"

export const createPages = async ({ graphql, actions }) => {
  const productPageTemplate = path.resolve(`src/templates/productPage.tsx`)

  const { createPage } = actions
  const result = await graphql(`
    query queryCMSPage {
      allDatoCmsProduct {
        nodes {
          name
          id
        }
      }
    }
  `)

  await result.data.allDatoCmsProduct.nodes.forEach(async product => {
    const slugifiedPath = `produkt/${getSlugify(product.name)}`
    await createPage({
      path: slugifiedPath,
      component: productPageTemplate,
      context: {
        id: product.id,
      },
    })
  })
}
