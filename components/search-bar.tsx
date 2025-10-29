"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import type { Language } from "@/lib/translations"
import { translations } from "@/lib/translations"

interface SearchBarProps {
  onSearch: (query: string) => void
  language: Language
}

export default function SearchBar({ onSearch, language }: SearchBarProps) {
  const t = translations[language]

  return (
    <div className="bg-white border-b border-border py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex gap-3">
          <Button variant="outline" className="hidden sm:flex gap-2 bg-transparent">
            📁 {language === "ru" ? "Каталог" : language === "en" ? "Catalog" : "Katalog"}
          </Button>
          <div className="flex-1 relative">
            <Input placeholder={t.search} onChange={(e) => onSearch(e.target.value)} className="w-full pl-4 pr-10" />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          </div>
        </div>
      </div>
    </div>
  )
}
