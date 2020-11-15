import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Layout from "../layouts/Layout"
import Text from "src/utils/Text"
import SEO from "src/components/SEO"

const contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />

      <Container>
        <Row>
          <Col
            className="text-sm contact mx-auto mt-5 mb-9  font-weight-light"
            md={8}
          >
            <Text id="4U2sKIrLCPemxYiTB2AJAY" />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default contact
