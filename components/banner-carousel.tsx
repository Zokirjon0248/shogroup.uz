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
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Client ekanligini belgilash
    setIsClient(true)
    
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

  // SSR uchun - har doim 3ta banner
  // Client-side uchun - responsive
  const getVisibleBanners = () => {
    if (!isClient) {
      // Server-side: har doim 3ta ko'rsatish
      return BANNERS.slice(0, 3)
    }
    
    // Client-side: responsive
    const isMobile = window.innerWidth < 768
    const count = isMobile ? 1 : 3
    const visible = []
    for (let i = 0; i < count; i++) {
      visible.push(BANNERS[(currentIndex + i) % BANNERS.length])
    }
    return visible
  }

  const visibleBanners = getVisibleBanners()

  return (
    <div className="relative w-full overflow-hidden">
      {/* Banners Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 py-6 max-w-7xl mx-auto">
        {visibleBanners.map((banner) => (
          <div key={banner.id} className="relative h-64 rounded-lg shadow-lg overflow-hidden group cursor-pointer">
            <img src={banner.image || "/placeholder.svg"} alt={banner.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition">
              <h2 className="text-white text-lg md:text-xl font-bold text-center px-4">{banner.title}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white z-10"
        onClick={goToPrevious}
      >
        <ChevronLeft className="w-6 h-6 text-black" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white z-10"
        onClick={goToNext}
      >
        <ChevronRight className="w-6 h-6 text-black" />
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 py-4">
        {BANNERS.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? "bg-accent w-6" : "bg-gray-300"}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}