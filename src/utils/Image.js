// import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
// import BackgroundImage from "gatsby-background-image"

// const Image = ({
//   id,
//   imgStyle,
//   style,
//   className,
//   background,
//   overlay,
//   children,
// }) => {
//   const data = useStaticQuery(graphql`
//     query {
//       images: allContentfulAsset {
//         nodes {
//           contentful_id
//           title
//           fluid {
//             ...GatsbyContentfulFluid
//           }
//         }
//       }
//     }
//   `)

//   const image = data.images.nodes.find(n => {
//     return n.contentful_id.includes(id)
//   })

//   if (!image) {
//     return null
//   }

//   if (!background) {
//     return (
//       <Img
//         alt={image.title}
//         fluid={image.fluid}
//         imgStyle={imgStyle}
//         style={style}
//       />
//     )
//   } else {
//     return (
//       <BackgroundImage
//         Tag="section"
//         className={className}
//         fluid={image.fluid}
//         style={style}
//       >
//         <div className="image-overlay" style={{ backgroundColor: overlay }} />
//         {children}
//       </BackgroundImage>
//     )
//   }
// }

// export default Image
