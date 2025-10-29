"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const BANNERS = [
  {
    id: 1,
    title: "Скидка 50% на электронику",
    color: "from-red-500 to-red-600",
    image: "/electronics-sale-banner.png",
  },
  {
    id: 2,
    title: "Новая коллекция одежды",
    color: "from-blue-500 to-blue-600",
    image: "/fashion-collection-banner.jpg",
  },
  {
    id: 3,
    title: "Товары для дома со скидкой",
    color: "from-green-500 to-green-600",
    image: "/home-products-banner.jpg",
  },
  {
    id: 4,
    title: "Спортивное оборудование",
    color: "from-purple-500 to-purple-600",
    image: "/sports-equipment-banner.jpg",
  },
]

export default function BannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % BANNERS.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + BANNERS.length) % BANNERS.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % BANNERS.length)
  }

  return (
    <div className="relative w-full h-64 md:h-100 overflow-hidden rounded-lg shadow-lg">
      {/* Banners */}
      <div className="relative w-full h-full">
        {BANNERS.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={banner.image || "/placeholder.svg"} alt={banner.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <h2 className="text-white text-2xl md:text-4xl font-bold text-center px-4">{banner.title}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white z-10"
        onClick={goToPrevious}
      >
        <ChevronLeft className="w-6 h-6 text-black" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white z-10"
        onClick={goToNext}
      >
        <ChevronRight className="w-6 h-6 text-black" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {BANNERS.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? "bg-white w-6" : "bg-white/50"}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}
