"use client"

import { createContext, useEffect, useState } from "react"

export const ThemeContext = createContext<any>(null)

export function ThemeProvider({ children }: any) {
  const [theme, setTheme] = useState("dark")

  useEffect(() => {
    const saved = localStorage.getItem("theme")
    if (saved) {
      setTheme(saved)
      document.documentElement.classList.add(saved)
    }
  }, [])

  const changeTheme = (value: string) => {
    document.documentElement.classList.remove(theme)
    document.documentElement.classList.add(value)
    setTheme(value)
    localStorage.setItem("theme", value)
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme: changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}