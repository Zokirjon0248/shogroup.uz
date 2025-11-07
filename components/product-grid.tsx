"use client"

import { Heart } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import type { Language } from "@/lib/translations"
import { translations } from "@/lib/translations"
import ProductDetailModal from "./product-detail-modal"

interface ProductGridProps {
  searchQuery: string
  activeCategory: string
  language: Language
}

// Mahsulotlar tarjimalari
const PRODUCT_TRANSLATIONS = {
  1: { ru: "Электроника", uz: "Elektronika", en: "Electronics" },
  2: { ru: "Мебель", uz: "Mebel", en: "Furniture" },
  3: { ru: "Одежда", uz: "Kiyim", en: "Clothing" },
  4: { ru: "Обувь", uz: "Poyabzal", en: "Shoes" },
  5: { ru: "Книги", uz: "Kitoblar", en: "Books" },
  6: { ru: "Спорт", uz: "Sport", en: "Sports" },
  7: { ru: "Косметика", uz: "Kosmetika", en: "Cosmetics" },
  8: { ru: "Украшения", uz: "Zargarlik buyumlari", en: "Jewelry" },
  9: { ru: "Игрушки", uz: "O'yinchoqlar", en: "Toys" },
  10: { ru: "Посуда", uz: "Idish-tovoq", en: "Tableware" },
}

// Kategoriyalar tarjimalari
const CATEGORY_TRANSLATIONS = {
  tech: { ru: "Техника", uz: "Texnika", en: "Tech" },
  home: { ru: "Дом", uz: "Uy", en: "Home" },
  fashion: { ru: "Мода", uz: "Moda", en: "Fashion" },
  education: { ru: "Образование", uz: "Ta'lim", en: "Education" },
  sport: { ru: "Спорт", uz: "Sport", en: "Sport" },
  beauty: { ru: "Красота", uz: "Go'zallik", en: "Beauty" },
  accessories: { ru: "Аксессуары", uz: "Aksessuarlar", en: "Accessories" },
  kids: { ru: "Дети", uz: "Bolalar", en: "Kids" },
}

const PRODUCTS = [
  { id: 1, nameKey: 1, price: "150,000 сум", categoryKey: "tech" },
  { id: 2, nameKey: 2, price: "250,000 сум", categoryKey: "home" },
  { id: 3, nameKey: 3, price: "50,000 сум", categoryKey: "fashion" },
  { id: 4, nameKey: 4, price: "75,000 сум", categoryKey: "fashion" },
  { id: 5, nameKey: 5, price: "25,000 сум", categoryKey: "education" },
  { id: 6, nameKey: 6, price: "100,000 сум", categoryKey: "sport" },
  { id: 7, nameKey: 7, price: "35,000 сум", categoryKey: "beauty" },
  { id: 8, nameKey: 8, price: "200,000 сум", categoryKey: "accessories" },
  { id: 9, nameKey: 9, price: "40,000 сум", categoryKey: "kids" },
  { id: 10, nameKey: 10, price: "60,000 сум", categoryKey: "home" },
]

export default function ProductGrid({ searchQuery, activeCategory, language }: ProductGridProps) {
  const [favorites, setFavorites] = useState<number[]>([])
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null)
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false)
  const t = translations[language]

  // Mahsulotlarni tarjima qilib olish
  const getLocalizedProducts = () => {
    return PRODUCTS.map(product => ({
      ...product,
      name: PRODUCT_TRANSLATIONS[product.nameKey as keyof typeof PRODUCT_TRANSLATIONS][language],
      category: CATEGORY_TRANSLATIONS[product.categoryKey as keyof typeof CATEGORY_TRANSLATIONS][language],
    }))
  }

  const localizedProducts = getLocalizedProducts()

  const filteredProducts = localizedProducts.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())

    // Barcha tillar uchun "Barchasi" kategoriyasini tekshirish
    const isAllCategory = ["Все", "Hammasi", "All"].includes(activeCategory)
    
    // activeCategory har qaysi tilda bo'lsa ham, mahsulotning categoryKey bilan solishtirish
    const matchesCategory = isAllCategory || (() => {
      // activeCategory qaysi categoryKey ga mos kelishini topish
      for (const [key, translations] of Object.entries(CATEGORY_TRANSLATIONS)) {
        // Agar activeCategory har qanday tildagi tarjimaga mos kelsa
        if (Object.values(translations).includes(activeCategory)) {
          // Mahsulotning kategoriyasi shu key ning joriy tildagi tarjimasiga mos keladimi
          return product.category === CATEGORY_TRANSLATIONS[key as keyof typeof CATEGORY_TRANSLATIONS][language]
        }
      }
      // To'g'ridan-to'g'ri taqqoslash (fallback)
      return product.category === activeCategory
    })()

    return matchesSearch && matchesCategory
  })

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]))
  }

  const handleProductImageClick = (product: any) => {
    setSelectedProduct(product)
    setIsDetailModalOpen(true)
  }

  return (
    <>
      <section id="portfolio" className="bg-background py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition group">
                <div
                  className="relative bg-muted aspect-square flex items-center justify-center overflow-hidden cursor-pointer"
                  onClick={() => handleProductImageClick(product)}
                >
                  <img
                    src={`/partner-logo-.jpg`}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleFavorite(product.id)
                    }}
                    className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:bg-accent hover:text-accent-foreground transition"
                  >
                    <Heart className="w-4 h-4" fill={favorites.includes(product.id) ? "currentColor" : "none"} />
                  </button>
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-sm line-clamp-2 mb-1">{product.name}</h3>
                  <p className="text-xs text-muted-foreground mb-2">{product.category}</p>
                  <p className="text-accent font-bold text-sm mb-3">{product.price}</p>
                  <Button
                    size="sm"
                    className="w-full bg-accent hover:bg-accent/90 text-white"
                    onClick={() => handleProductImageClick(product)}
                  >
                    {t.placeOrder}
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                {language === "ru"
                  ? "Товары не найдены"
                  : language === "en"
                    ? "No products found"
                    : "Mahsulotlar topilmadi"}
              </p>
            </div>
          )}
        </div>
      </section>

      {selectedProduct && (
        <ProductDetailModal
          isOpen={isDetailModalOpen}
          onClose={() => setIsDetailModalOpen(false)}
          product={selectedProduct}
          language={language}
        />
      )}
    </>
  )
}