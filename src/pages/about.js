import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Layout from "../layouts/Layout"
import Text from "src/utils/Text"
import SEO from "src/components/SEO"

const about = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Container>
        <Row className="py-4 py-md-6">
          <Col md={8} className="mx-auto">
            <Text id="7IyBU1ZmXouKamyq6h8afp" />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default about
