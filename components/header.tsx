"use client"

import { Heart, User, Menu, X } from "lucide-react"
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

  const scrollToFooter = () => {
    // Sahifaning eng pastiga scroll qilish
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth"
    })
    setIsMenuOpen(false)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 md:py-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between">
          {/* Logo va Desktop Navigation */}
          <div className="flex items-center gap-4 md:gap-8">
            <h1 className="text-xl md:text-2xl font-bold text-primary">Textnic pro</h1>
            <nav className="hidden md:flex gap-4 lg:gap-6 text-sm text-foreground">
              <button 
                onClick={() => scrollToSection("portfolio")} 
                className="hover:text-accent transition-colors duration-200 font-medium"
              >
                {t.portfolio}
              </button>
              <button 
                onClick={() => scrollToSection("about")} 
                className="hover:text-accent transition-colors duration-200 font-medium"
              >
                {t.aboutUs}
              </button>
              <button 
                onClick={scrollToFooter} 
                className="hover:text-accent transition-colors duration-200 font-medium"
              >
                {language === "ru" ? "Контакт" : language === "en" ? "Contact" : "Aloqa"}
              </button>
            </nav>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <LanguageSwitcher currentLanguage={language} onLanguageChange={onLanguageChange} />
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-3">
            <LanguageSwitcher currentLanguage={language} onLanguageChange={onLanguageChange} />
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden flex flex-col gap-2 pb-3 border-t border-border pt-3 mt-3 animate-in slide-in-from-top-2 duration-200">
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-sm hover:text-accent hover:bg-accent/5 transition-all duration-200 text-left py-2 px-3 rounded-md font-medium"
            >
              {t.portfolio}
            </button>
            <button 
              onClick={() => scrollToSection("about")} 
              className="text-sm hover:text-accent hover:bg-accent/5 transition-all duration-200 text-left py-2 px-3 rounded-md font-medium"
            >
              {t.aboutUs}
            </button>
            <button
              onClick={scrollToFooter}
              className="text-sm hover:text-accent hover:bg-accent/5 transition-all duration-200 text-left py-2 px-3 rounded-md font-medium"
            >
              {language === "ru" ? "Контакт" : language === "en" ? "Contact" : "Aloqa"}
            </button>
         
          </nav>
        )}
      </div>
    </header>
  )
}