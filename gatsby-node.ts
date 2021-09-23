import * as path from "path"
import { getSlugify } from "./src/helpers/getSlugify"
import { categoriesList } from "./src/utils/cateroriesList"
import { PageContextFilter } from "./src/types/pageContextFilter"
import { routes } from "./src/utils/routes"

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
  await categoriesList.forEach(async el => {
    const slugifiedPath = `${routes.products}/${getSlugify(el.type)}`

    const filter: PageContextFilter = {
      type: el.type,
      category: null,
      subcategory: null,
    }

    //creating page by type
    await createPage({
      path: slugifiedPath,
      component: productsByCategoriesTemplate,
      context: {
        filter,
      },
    })

    await el.categories.forEach(async ({ subcategories, name }) => {
      const slugifiedPath2 = slugifiedPath + `/${getSlugify(name)}`
      filter.category = name
      //create page by category
      await createPage({
        path: slugifiedPath2,
        component: productsByCategoriesTemplate,
        context: {
          filter,
        },
      })
      subcategories.forEach(subcategory => {
        const slugifiedPath3 = slugifiedPath2 + `/${getSlugify(subcategory)}`
        filter.subcategory = subcategory

        //create page by subcategory
        createPage({
          path: slugifiedPath3,
          component: productsByCategoriesTemplate,
          context: {
            filter,
          },
        })
      })
    })
  })

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
