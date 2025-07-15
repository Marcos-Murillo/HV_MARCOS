"use client"
import { createContext, useContext, useEffect, useState } from "react"
import type React from "react"

type Theme = "light" | "dark"
type Language = "es" | "en"

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  language: Language
  toggleLanguage: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light")
  const [language, setLanguage] = useState<Language>("es")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme
    const savedLanguage = localStorage.getItem("language") as Language

    if (savedTheme) {
      setTheme(savedTheme)
    }
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
    localStorage.setItem("theme", theme)
  }, [theme])

  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"))
  }

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, language, toggleLanguage }}>{children}</ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
