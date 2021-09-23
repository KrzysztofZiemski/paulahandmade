import * as path from "path"
import slugify from "slugify"

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const productPostTemplate = path.resolve(`src/templates/productPage.tsx`)

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

  result.data.allDatoCmsProduct.nodes.forEach(product => {
    const slugifiedPath = `produkt/${getSlugify(product.name)}`
    createPage({
      path: slugifiedPath,
      component: productPostTemplate,
      context: {
        id: product.id,
      },
    })
  })
}

export default createPages
function getSlugify(name: any) {
  throw new Error("Function not implemented.")
}
