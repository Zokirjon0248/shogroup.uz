"use client"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import type { Language } from "@/lib/translations"
import { useState } from "react"

interface LanguageSwitcherProps {
  currentLanguage: Language
  onLanguageChange: (lang: Language) => void
}

export default function LanguageSwitcher({ currentLanguage, onLanguageChange }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)

  const languages: { code: Language; label: string }[] = [
    { code: "ru", label: "РУ" },
    { code: "en", label: "EN" },
    { code: "uz", label: "ОЗ" },
  ]

  const currentLabel = languages.find((l) => l.code === currentLanguage)?.label

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="sm"
        className="bg-transparent border-border hover:bg-accent/10 flex items-center gap-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xs font-semibold">{currentLabel}</span>
        <ChevronDown className="w-4 h-4" />
      </Button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white border border-border rounded-md shadow-lg z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                onLanguageChange(lang.code)
                setIsOpen(false)
              }}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-accent/10 transition ${
                currentLanguage === lang.code ? "bg-accent/20 font-semibold" : ""
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
