import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import {
  Navbar as BNavbar,
  Nav,
  NavDropdown,
  Dropdown,
  Container,
} from "react-bootstrap"

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
          to="/"
          className="font-weight-bold montserrat mx-auto"
          style={{ letterSpacing: "2px" }}
        >
          COZMIC CREATIVES
        </BNavbar.Brand>

        <Dropdown alignRight className="position-absolute" style={{ right: 0 }}>
          <Dropdown.Toggle
            variant="light"
            size="sm"
            className="montserrat d-flex"
          >
            <span className="d-none d-md-block">MENU</span>
            <div className="hamburger">
              <div className="top-bar"></div>
              <div className="middle-bar"></div>
              <div className="bottom-bar"></div>
            </div>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#action/3.1">About me</Dropdown.Item>
            <Dropdown.Item href="#action/3.2">Experience</Dropdown.Item>
            <Dropdown.Item href="#action/3.2">Projects</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#action/3.4">Contact me 🤙</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </BNavbar>
  )
}

export default Navbar
