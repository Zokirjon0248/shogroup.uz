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
            className={`whitespace-nowrap ${
              activeCategory === "Все"
                ? "bg-accent text-accent-foreground hover:bg-accent/90"
                : "border-border hover:bg-muted"
            }`}
          >
            {t.allCategories}
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => onCategoryChange(category)}
              variant={activeCategory === category ? "default" : "outline"}
              className={`whitespace-nowrap ${
                activeCategory === category
                  ? "bg-accent text-accent-foreground hover:bg-accent/90"
                  : "border-border hover:bg-muted"
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
