"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Language } from "@/lib/translations"
import { translations } from "@/lib/translations"
import OrderDialog from "./order-dialog"

interface ProductDetailModalProps {
  isOpen: boolean
  onClose: () => void
  product: {
    id: number
    name: string
    price: string
    category: string
  }
  language: Language
}

export default function ProductDetailModal({ isOpen, onClose, product, language }: ProductDetailModalProps) {
  const [isOrderDialogOpen, setIsOrderDialogOpen] = useState(false)
  const t = translations[language]

  if (!isOpen) return null

  const productImages = [
    `/placeholder.svg?height=400&width=400&query=${product.name}-view-1`,
    `/placeholder.svg?height=400&width=400&query=${product.name}-view-2`,
    `/placeholder.svg?height=400&width=400&query=${product.name}-view-3`,
    `/placeholder.svg?height=400&width=400&query=${product.name}-view-4`,
  ]

  const descriptions = {
    ru: `${product.name} - высокое качество и надежность. Этот товар идеально подходит для ваших потребностей. Изготовлен из лучших материалов с использованием современных технологий. Гарантия качества и долговечности.`,
    en: `${product.name} - high quality and reliability. This product is perfect for your needs. Made from the best materials using modern technologies. Quality and durability guaranteed.`,
    uz: `${product.name} - yuqori sifat va ishonchlilik. Bu mahsulot sizning ehtiyojlaringiz uchun ideal. Eng yaxshi materiallardan zamonaviy texnologiyalar yordamida tayyorlangan. Sifat va chidamlilik kafolatlangan.`,
  }

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
        <div className="bg-white rounded-lg max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-border sticky top-0 bg-white z-10">
            <h2 className="text-xl sm:text-2xl font-bold pr-2 line-clamp-2">{product.name}</h2>
            <button onClick={onClose} className="p-1 hover:bg-muted rounded-lg transition bu">
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-6">
            {/* Product Images Grid */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                {language === "ru" ? "Изображения товара" : language === "en" ? "Product Images" : "Mahsulot Rasmlari"}
              </h3>
              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                {productImages.map((image, idx) => (
                  <div key={idx} className="bg-muted rounded-lg overflow-hidden aspect-square">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} view ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Description */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">
                {language === "ru" ? "Описание" : language === "en" ? "Description" : "Tavsif"}
              </h3>
              <p className="text-sm sm:text-base text-foreground leading-relaxed">{descriptions[language]}</p>
            </div>

            {/* Product Info */}
            <div className="bg-muted p-4 sm:p-6 rounded-lg mb-6 sm:mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">{t.price}</p>
                  <p className="text-xl sm:text-2xl font-bold text-accent">{product.price}</p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {language === "ru" ? "Категория" : language === "en" ? "Category" : "Kategoriya"}
                  </p>
                  <p className="text-base sm:text-lg font-semibold">{product.category}</p>
                </div>
              </div>
            </div>

            {/* Order Form */}
            <div className="border-t border-border pt-4 sm:pt-6">
              <Button
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-white text-base sm:text-lg h-12 sm:h-14"
                onClick={() => setIsOrderDialogOpen(true)}
              >
                {t.placeOrder}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Order Dialog */}
      {isOrderDialogOpen && (
        <OrderDialog
          isOpen={isOrderDialogOpen}
          onClose={() => setIsOrderDialogOpen(false)}
          product={product}
          language={language}
        />
      )}
    </>
  )
}