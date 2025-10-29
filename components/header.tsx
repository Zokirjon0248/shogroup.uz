"use client"

import { Heart, User, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import LanguageSwitcher from "./language-switcher"
import type { Language } from "@/lib/translations"
import { translations } from "@/lib/translations"

interface HeaderProps {
  language: Language
  onLanguageChange: (lang: Language) => void
}

export default function Header({ language, onLanguageChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const t = translations[language]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold text-primary">BMIX</h1>
            <nav className="hidden md:flex gap-6 text-sm text-foreground">
              <button onClick={() => scrollToSection("portfolio")} className="hover:text-accent transition">
                {t.portfolio}
              </button>
              <button onClick={() => scrollToSection("about")} className="hover:text-accent transition">
                {t.aboutUs}
              </button>
              <button onClick={() => scrollToSection("contacts")} className="hover:text-accent transition">
                {t.contacts}
              </button>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <LanguageSwitcher currentLanguage={language} onLanguageChange={onLanguageChange} />
            <Button variant="destructive" size="sm" className="hidden sm:flex">
              {t.requestQuote}
            </Button>
            <Button variant="outline" size="sm" className="hidden sm:flex bg-transparent">
              {t.address}
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden flex flex-col gap-3 pb-4 border-t border-border pt-4">
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-sm hover:text-accent transition text-left"
            >
              {t.portfolio}
            </button>
            <button onClick={() => scrollToSection("about")} className="text-sm hover:text-accent transition text-left">
              {t.aboutUs}
            </button>
            <button
              onClick={() => scrollToSection("contacts")}
              className="text-sm hover:text-accent transition text-left"
            >
              {t.contacts}
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
