import React from "react"
import { Row, Button } from "react-bootstrap"

const FilterBar = ({ filterProjects, className }) => {
  return (
    <Row className={`justify-content-center mono ${className}`}>
      <Button
        variant="light"
        className="mx-2"
        size="sm"
        onClick={() => filterProjects("all")}
      >
        All
      </Button>
      <Button
        variant="light"
        className="mx-2"
        size="sm"
        onClick={() => filterProjects("product design")}
      >
        Product
      </Button>
      <Button
        variant="light"
        className="mx-2"
        size="sm"
        onClick={() => filterProjects("graphic design")}
      >
        Graphic
      </Button>
      <Button
        variant="light"
        className="mx-2"
        size="sm"
        onClick={() => filterProjects("web design")}
      >
        Web
      </Button>
      <Button
        variant="light"
        className="mx-2"
        size="sm"
        onClick={() => filterProjects("writing")}
      >
        Writing
      </Button>
    </Row>
  )
}

export default FilterBar
