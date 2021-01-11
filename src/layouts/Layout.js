import React, { createContext, useState } from "react"
import Navbar from "components/layout/Navbar"
import Footer from "components/layout/Footer"
import { getTheme, setPreferredTheme } from "src/utils/darkmode"

export const ThemeContext = createContext(null)

const Layout = ({ children }) => {
  const [isDark, setIsDark] = useState(getTheme() === "dark")

  const toggleTheme = () => {
    setIsDark(!isDark)
    setPreferredTheme(isDark ? "light" : "dark")
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </ThemeContext.Provider>
  )
}

export default Layout
