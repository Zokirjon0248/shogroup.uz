"use client"

import { Heart } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import type { Language } from "@/lib/translations"
import { translations } from "@/lib/translations"
import OrderDialog from "./order-dialog"

interface ProductGridProps {
  searchQuery: string
  activeCategory: string
  language: Language
}

const PRODUCTS = [
  { id: 1, name: "Электроника", price: "150,000 сум", category: "Техника" },
  { id: 2, name: "Мебель", price: "250,000 сум", category: "Дом" },
  { id: 3, name: "Одежда", price: "50,000 сум", category: "Мода" },
  { id: 4, name: "Обувь", price: "75,000 сум", category: "Мода" },
  { id: 5, name: "Книги", price: "25,000 сум", category: "Образование" },
  { id: 6, name: "Спорт", price: "100,000 сум", category: "Спорт" },
  { id: 7, name: "Косметика", price: "35,000 сум", category: "Красота" },
  { id: 8, name: "Украшения", price: "200,000 сум", category: "Аксессуары" },
  { id: 9, name: "Игрушки", price: "40,000 сум", category: "Дети" },
  { id: 10, name: "Посуда", price: "60,000 сум", category: "Дом" },
]

export default function ProductGrid({ searchQuery, activeCategory, language }: ProductGridProps) {
  const [favorites, setFavorites] = useState<number[]>([])
  const [selectedProduct, setSelectedProduct] = useState<(typeof PRODUCTS)[0] | null>(null)
  const [isOrderDialogOpen, setIsOrderDialogOpen] = useState(false)
  const t = translations[language]

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = activeCategory === "Все" || product.category === activeCategory

    return matchesSearch && matchesCategory
  })

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]))
  }

  const handleOrderClick = (product: (typeof PRODUCTS)[0]) => {
    setSelectedProduct(product)
    setIsOrderDialogOpen(true)
  }

  return (
    <>
      <section id="portfolio" className="bg-background py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition group">
                <div className="relative bg-muted aspect-square flex items-center justify-center overflow-hidden">
                  <img
                    src={'/p.jpg'}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                  />
                  <button
                    onClick={() => toggleFavorite(product.id)}
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
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                    onClick={() => handleOrderClick(product)}
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
        <OrderDialog
          isOpen={isOrderDialogOpen}
          onClose={() => setIsOrderDialogOpen(false)}
          product={selectedProduct}
          language={language}
        />
      )}
    </>
  )
}
