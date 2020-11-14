import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Text = props => {
  const data = useStaticQuery(graphql`
    {
      texts: allContentfulText {
        nodes {
          text {
            childMarkdownRemark {
              html
            }
          }
          contentful_id
        }
      }
    }
  `)

  const text = data.texts.nodes.find(n => {
    return n.contentful_id.includes(props.id)
  })

  const {
    text: {
      childMarkdownRemark: { html },
    },
  } = text

  if (!text) {
    return null
  }

  return (
    <span
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    ></span>
  )
}

export default Text
