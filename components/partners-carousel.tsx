"use client"

import { useState, useEffect, useRef } from "react"
import type { Language } from "@/lib/translations"

interface PartnersCarouselProps {
  language: Language
}

export default function PartnersCarousel({ language }: PartnersCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const titles = {
    ru: "Наши партнеры",
    en: "Our Partners",
    uz: "Bizning Hamkorlarimiz",
  }

  const partnerLogos = [
    "/partner-logo.jpg",
    "/partner-logo.jpg",
    "/partner-logo.jpg",
    "/partner-logo.jpg",
    "/partner-logo.jpg",
    "/partner-logo.jpg",
    "/partner-logo.jpg",
    "/partner-logo.jpg",
  ]

  // Avtomatik aylantirish
  useEffect(() => {
    if (paused) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % partnerLogos.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [paused, partnerLogos.length])

  // Ekranga qarab ko‘rinadigan logolar soni
  const getVisibleCount = () => {
    if (typeof window === "undefined") return 5
    if (window.innerWidth < 640) return 2
    if (window.innerWidth < 1024) return 4
    return 5
  }

  const visibleCount = getVisibleCount()

  const getVisibleLogos = () => {
    const visible = []
    for (let i = 0; i < visibleCount; i++) {
      visible.push(partnerLogos[(currentIndex + i) % partnerLogos.length])
    }
    return visible
  }

  return (
    <section
      id="partners"
      className="bg-white py-12 border-t border-border overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-8">{titles[language]}</h2>

        <div className="flex gap-6 justify-center transition-transform duration-700 ease-in-out"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          ref={containerRef}
        >
          {getVisibleLogos().map((logo, idx) => (
            <div
              key={idx}
              className="bg-gray-100 rounded-xl shrink-0 w-36 h-24 flex items-center justify-center overflow-hidden hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <img
                src={logo}
                alt={`Partner ${idx + 1}`}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {partnerLogos.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "bg-primary w-6" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
