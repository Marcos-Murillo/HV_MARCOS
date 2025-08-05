"use client"
import { Sun, Moon, Languages } from "lucide-react"
import { useTheme } from "@/lib/theme-context"
import { translations } from "@/lib/translations"

export const MinimalHeader = () => {
  const { theme, toggleTheme, language, toggleLanguage } = useTheme()
  const t = translations[language]

  const navItems = [
    { label: t.about, href: "#about" },
    { label: t.projects, href: "#projects" },
    { label: t.experience, href: "#experience" },
    { label: t.contact, href: "#contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-800/20">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Profile Image */}
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-gray-200 dark:ring-gray-700">
            <img src="/perfil.png" alt="Marcos Murillo" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" })}
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors text-sm font-medium"
            >
              {item.label}
            </button>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {theme === "light" ? (
              <Moon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            ) : (
              <Sun className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            )}
          </button>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <Languages className="w-4 h-4 text-gray-600 dark:text-gray-400" />
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {theme === "light" ? (
              <Moon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            ) : (
              <Sun className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            )}
          </button>
          <button
            onClick={toggleLanguage}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <Languages className="w-4 h-4 text-gray-600 dark:text-gray-400" />
          </button>
        </div>
      </div>
    </header>
  )
}
