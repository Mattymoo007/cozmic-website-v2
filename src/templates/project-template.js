import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Layout from "src/layouts/Layout"
import htmlExists from "src/utils/htmlExists"
import { graphql } from "gatsby"

const project = ({
  data: {
    project: { thumbnail, tags, description },
  },
}) => {
  return (
    <Layout>
      <Container>
        <Row>
          <Col md={8} className="mx-auto project-description">
            <div
              dangerouslySetInnerHTML={{ __html: htmlExists(description) }}
            ></div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleProject($slug: String) {
    project: contentfulProject(slug: { eq: $slug }) {
      thumbnail {
        fluid {
          src
        }
      }
      tags
      description {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

export default project
