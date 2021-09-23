import * as path from "path"
import { getSlugify } from "./src/helpers/getSlugify"
import { categoriesList } from "./src/utils/cateroriesList"
import { PageContextFilter } from "./src/types/pageContextFilter"

export const createPages = async ({ graphql, actions }) => {
  const productPageTemplate = path.resolve(`src/templates/productPage.tsx`)
  const productsByCategoriesTemplate = path.resolve(
    `src/templates/productsByCategories.tsx`
  )
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
  categoriesList.forEach(el => {
    let slugifiedPath = `produkty/${getSlugify(el.type)}`

    const filter: PageContextFilter = {
      type: el.type,
      category: null,
      subcategory: null,
    }

    //creating page by type
    createPage({
      path: slugifiedPath,
      component: productsByCategoriesTemplate,
      context: {
        filter,
      },
    })

    el.categories.forEach(({ subcategories, name }) => {
      slugifiedPath = slugifiedPath + `/${getSlugify(name)}`
      filter.category = name
      //create page by category
      createPage({
        path: slugifiedPath,
        component: productsByCategoriesTemplate,
        context: {
          filter,
        },
      })
      subcategories.forEach(subcategory => {
        slugifiedPath = slugifiedPath + `/${getSlugify(subcategory)}`
        filter.subcategory = subcategory

        //create page by subcategory
        createPage({
          path: slugifiedPath,
          component: productsByCategoriesTemplate,
          context: {
            filter,
          },
        })
      })
    })
  })

  result.data.allDatoCmsProduct.nodes.forEach(product => {
    const slugifiedPath = `produkt/${getSlugify(product.name)}`
    createPage({
      path: slugifiedPath,
      component: productPageTemplate,
      context: {
        id: product.id,
      },
    })
  })
}
