/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

// const path = require(`path`); teraz chyba normalny import
// const slugify = require('slugify')

// exports.createPages = async ({ graphql, actions }) => {
//     const { createPage } = actions;
//     const articlePostTemplate = path.resolve(`src/layouts/article.tsx`);

//     const result = await graphql(`
//       query queryCMSPage {
//         allDatoCmsArticle{
//           nodes{
//             title
//             id
//           }
//         }
//       }
//     `);

//     result.data.allDatoCmsArticle.nodes.forEach(post => {
//         const slugifiedTitle = slugify(post.title, { lower: true });

//         createPage({
//             path: `articles/${slugifiedTitle}`,
//             component: articlePostTemplate,
//             context: {
//                 id: post.id
//             },
//         });
//     });
// };