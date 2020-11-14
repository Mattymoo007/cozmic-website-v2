// const path = require("path")

// // create pages dynamically
// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const result = await graphql(`
//     query GetProducts {
//       destinations: allContentfulDestination {
//         nodes {
//           slug
//         }
//       }
//     }
//   `)

//   result.data.destinations.nodes.forEach(destination => {
//     createPage({
//       path: `/destinations/${destination.slug}`,
//       component: path.resolve(`src/templates/destination-template.js`),
//       context: { slug: destination.slug },
//     })
//   })
// }
