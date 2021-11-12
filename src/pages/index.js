import React, { useState } from "react"
import {
  Card,
  CardColumns,
  Container,
  Badge,
  Button,
  Row,
} from "react-bootstrap"
import Layout, { ThemeContext } from "../layouts/Layout"
import Image from "gatsby-image"
import htmlExists from "src/utils/htmlExists"
import { Link, graphql } from "gatsby"
import SEO from "src/components/SEO"

const Index = ({
  data: {
    contentfulArray: { items: projects },
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

  const options = [
    "all",
    "product design",
    "graphic design",
    "web design",
    "writing",
  ]

  return (
    <Layout>
      <SEO title="Projects" />
      <ThemeContext.Consumer>
        {({ isDark }) => (
          <Container>
            <Row className="justify-content-center mono ">
              {options.map(option => (
                <Button
                  variant={isDark ? "dark" : "light"}
                  className="mx-2 mb-4"
                  size="sm"
                  onClick={() => filterProjects(option)}
                  key={option}
                >
                  {option.replace(/ .*/, "")}
                </Button>
              ))}
            </Row>

            <CardColumns>
              {filteredProjects.map(
                ({ introduction, slug, tags, thumbnail: { fluid } }, index) => (
                  <Card
                    className={`border-0 shadow-sm slide-up-fade-in`}
                    style={{
                      animationDelay: `${100 * index}ms`,
                      marginBottom: "20px",
                    }}
                    key={index}
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
                      {tags.map((tag, index) => (
                        <Badge
                          pill
                          variant={isDark ? "dark" : "light"}
                          className="mr-2 font-weight-normal"
                          key={index}
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
        )}
      </ThemeContext.Consumer>
    </Layout>
  )
}

export const query = graphql`
  {
    contentfulArray(contentful_id: { eq: "1449rrFKe0Ev87UCAjAziH" }) {
      items {
        thumbnail {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        slug
        tags
        contentful_id
        title
        introduction {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`

export default Index
