import React, { useContext } from "react"
import { Link } from "gatsby"
import { Col, Container, Row, Nav } from "react-bootstrap"
import { FaHome, FaTwitter } from "react-icons/fa"
import { ThemeContext } from "src/layouts/Layout"

const Footer = () => {
  const { isDark } = useContext(ThemeContext)

  return (
    <footer>
      <Container>
        <Row className="py-6 text-center">
          <Col>
            <Nav className="justify-content-center pb-2">
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/"
                  eventKey="link-0"
                  className={isDark ? "text-light" : "text-dark"}
                >
                  <FaHome />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="link-1"
                  href="https://twitter.com/CozmicMatt"
                  target="_newTab"
                  className={isDark ? "text-light" : "text-dark"}
                >
                  <FaTwitter />
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <small>
              <p>®{new Date().getFullYear()} Cozmic Creatives</p>
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
