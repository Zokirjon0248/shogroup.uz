"use client"

import { useState } from "react"
import Header from "@/components/header"
import BannerCarousel from "@/components/banner-carousel"
import SearchBar from "@/components/search-bar"
import CategoryTabs from "@/components/category-tabs"
import ProductGrid from "@/components/product-grid"
import AboutUs from "@/components/about-us"
import PartnersCarousel from "@/components/partners-carousel"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import type { Language } from "@/lib/translations"
import { translations } from "@/lib/translations"

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("Все")
  const [language, setLanguage] = useState<Language>("ru")

  const t = translations[language]

  return (
    <main className="min-h-screen bg-background">
      <Header language={language} onLanguageChange={setLanguage} />
      <BannerCarousel />
      <SearchBar onSearch={setSearchQuery} language={language} />
      <CategoryTabs
        categories={t.categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        language={language}
      />
      <ProductGrid searchQuery={searchQuery} activeCategory={activeCategory} language={language} />
      <AboutUs language={language} />
      <PartnersCarousel language={language} />
      <Footer language={language} />
      <ScrollToTop />
    </main>
  )
}
