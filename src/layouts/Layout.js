import React from "react"
import Navbar from "components/layout/Navbar"
import Footer from "components/layout/Footer"

const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default layout
