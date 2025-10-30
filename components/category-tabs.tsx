"use client"

import { Button } from "@/components/ui/button"
import type { Language } from "@/lib/translations"
import { translations } from "@/lib/translations"

interface CategoryTabsProps {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
  language: Language
}

export default function CategoryTabs({ categories, activeCategory, onCategoryChange, language }: CategoryTabsProps) {
  const t = translations[language]

  return (
    <div className="bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
          <Button
            onClick={() => onCategoryChange("Все")}
            variant={activeCategory === "Все" ? "default" : "outline"}
            className={`whitespace-nowrap transition-all ${
              activeCategory === "Все"
                ? "bg-accent text-white hover:bg-accent/90"
                : "border-border text-foreground hover:bg-accent hover:text-white"
            }`}
          >
            {t.allCategories}
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => onCategoryChange(category)}
              variant={activeCategory === category ? "default" : "outline"}
              className={`whitespace-nowrap transition-all ${
                activeCategory === category
                  ? "bg-accent text-white hover:bg-accent/90"
                  : "border-border text-foreground hover:bg-accent hover:text-white"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
