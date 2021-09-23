// const { useGatsbyNode } = require("gatsby-plugin-ts-config");

// module.exports = useGatsbyNode(() => require("./config/gatsby-node"));

// const path = require(`path`);
// const slugify = require('slugify')

// exports.createPages = async ({ graphql, actions }) => {
//     const { createPage } = actions;
//     const productPostTemplate = path.resolve(`src/templates/productPage.tsx`);

//     const result = await graphql(`
//       query queryCMSPage {
//         allDatoCmsProduct{
//           nodes{
//             name
//             id
//           }
//         }
//       }
//     `);

//     const config={
//       lower: true,
//     }

//     result.data.allDatoCmsProduct.nodes.forEach(product => {
//         const slugifiedPath = `produkt/${slugify(product.name,config)}`
//         createPage({
//             path: slugifiedPath,
//             component: productPostTemplate,
//             context: {
//                 id: product.id
//             },
//         });
//     });
// };

import * as path from "path"
import { getSlugify } from "./src/helpers/getSlugify"

export const createPages = async ({ graphql, actions }) => {
  const productPostTemplate = path.resolve(`src/templates/productPage.tsx`)
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
