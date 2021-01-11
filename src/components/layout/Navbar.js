import React, { useContext } from "react"
import { Link } from "gatsby"
import { Navbar as BNavbar, Dropdown, Container } from "react-bootstrap"
import DarkModeToggle from "components/DarkModeToggle"
import { ThemeContext } from "src/layouts/Layout"

const Navbar = () => {
  const { isDark } = useContext(ThemeContext)

  return (
    <BNavbar variant="light" style={{ height: "150px" }}>
      <Container className="position-relative">
        <DarkModeToggle />

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
            size="sm"
            className="montserrat d-flex align-items-center"
            variant={isDark ? "dark" : "light"}
          >
            <span className="d-none d-md-block">MENU</span>
            <div className="hamburger m-0 my-1 my-md-0 ml-md-2">
              <div className="top-bar mt-0"></div>
              <div className="middle-bar"></div>
              <div className="bottom-bar"></div>
            </div>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/about">
              About me
            </Dropdown.Item>
            {/* <Dropdown.Item as={Link} to="/experience">
              Experience
            </Dropdown.Item> */}
            <Dropdown.Item as={Link} to="/">
              Projects
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item as={Link} to="/contact">
              Contact me 🤙
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </BNavbar>
  )
}

export default Navbar
