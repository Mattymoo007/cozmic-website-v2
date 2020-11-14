// import React from "react"
// import { useStaticQuery, graphql } from "gatsby"

// const Text = props => {
//   const data = useStaticQuery(graphql`
//     {
//       texts: allContentfulText {
//         nodes {
//           contentful_id
//           childContentfulTextTextTextNode {
//             childMarkdownRemark {
//               html
//             }
//           }
//         }
//       }
//     }
//   `)

//   const text = data.texts.nodes.find(n => {
//     return n.contentful_id.includes(props.id)
//   })

//   const {
//     childContentfulTextTextTextNode: {
//       childMarkdownRemark: { html },
//     },
//   } = text

//   if (!text) {
//     return null
//   }

//   return (
//     <span
//       dangerouslySetInnerHTML={{
//         __html: html,
//       }}
//     ></span>
//   )
// }

// export default Text
