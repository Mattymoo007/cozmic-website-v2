import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { Navbar as BNavbar, Nav, NavDropdown, Container } from "react-bootstrap"

const Navbar = () => {
  useEffect(() => {
    document.addEventListener("scroll", handleScroll)
  }, [])

  const [isScroll, setScroll] = useState(false)

  const handleScroll = () => {
    if (document.documentElement.scrollTop > 80) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  return (
    <BNavbar variant="light" style={{ height: "150px" }}>
      <Container className="position-relative">
        <BNavbar.Brand
          as={Link}
          to="/index"
          className="font-weight-bold montserrat mx-auto"
          style={{ letterSpacing: "2px" }}
        >
          COZMIC CREATIVES
        </BNavbar.Brand>

        <Nav className="position-absolute" style={{ right: 0 }}>
          <NavDropdown
            title="Menu"
            id="collasible-nav-dropdown"
            className="montserrat"
            alignRight
          >
            <NavDropdown.Item href="#action/3.1">
              What's this about?
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Professional experience
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Projects</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Contact me 🤙
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </BNavbar>
  )
}

export default Navbar
