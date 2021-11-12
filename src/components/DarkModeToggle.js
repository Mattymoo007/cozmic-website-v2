import React, { useContext } from "react"
import { ThemeContext } from "src/layouts/Layout"

const DarkModeToggle = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext)

  return (
    <span className={`dark-toggle ${isDark && "is-checked"}`}>
      <input
        type="checkbox"
        aria-label="dark-mode"
        onChange={() => toggleTheme()}
        value="dark"
        checked={!!isDark}
      />
    </span>
  )
}

export default DarkModeToggle
