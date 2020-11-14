import React, { useState } from "react"
import { Card, CardColumns, Container, Badge } from "react-bootstrap"
import FilterBar from "components/FilterBar"
import Layout from "../layouts/Layout"
import Image from "gatsby-image"
import htmlExists from "src/utils/htmlExists"
import { Link } from "gatsby"

const Index = ({
  data: {
    allContentfulProject: { projects },
  },
}) => {
  const [filteredProjects, setFilteredProjects] = useState([...projects])

  const filterProjects = tag => {
    if (tag === "all") return setFilteredProjects(projects)

    const newArr = projects.filter(project => {
      return project.tags.some(_tag => _tag === tag)
    })

    setFilteredProjects(newArr)
  }

  return (
    <Layout>
      <Container>
        <FilterBar filterProjects={filterProjects} className="mb-4" />

        <CardColumns>
          {filteredProjects.map(
            ({ introduction, slug, tags, thumbnail: { fluid } }) => (
              <Card
                className="border-0 shadow-sm"
                style={{ marginBottom: "20px" }}
              >
                <Link to={`/projects/${slug}`}>
                  <Card.Img as={Image} fluid={fluid} />
                </Link>
                <Card.Body>
                  <div
                    className="text-sm"
                    dangerouslySetInnerHTML={{
                      __html: htmlExists(introduction),
                    }}
                  />
                  {tags.map(tag => (
                    <Badge
                      pill
                      variant="light"
                      className="mr-2 font-weight-normal"
                    >
                      #{tag}
                    </Badge>
                  ))}
                </Card.Body>
              </Card>
            )
          )}
        </CardColumns>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProject {
      projects: nodes {
        slug
        tags
        thumbnail {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        title
        introduction {
          childMarkdownRemark {
            html
          }
        }
        contentful_id
      }
    }
  }
`

export default Index
