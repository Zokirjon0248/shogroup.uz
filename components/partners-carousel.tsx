"use client"

import { useState, useEffect } from "react"
import type { Language } from "@/lib/translations"

interface PartnersCarouselProps {
  language: Language
}

export default function PartnersCarousel({ language }: PartnersCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const titles = {
    ru: "Наши партнеры",
    en: "Our Partners",
    uz: "Bizning Hamkorlari",
  }

  const partnerLogos = [1, 2, 3, 4, 5, 6, 7, 8]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % partnerLogos.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [partnerLogos.length])

  const getVisibleLogos = () => {
    const visible = []
    for (let i = 0; i < 5; i++) {
      visible.push(partnerLogos[(currentIndex + i) % partnerLogos.length])
    }
    return visible
  }

  return (
    <section id="partners" className="bg-white py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">{titles[language]}</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {getVisibleLogos().map((logoNum, idx) => (
            <div
              key={idx}
              className="bg-muted rounded-lg h-24 flex items-center justify-center overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={`/partner-logo-.jpg?height=100&width=150&query=partner-logo-${logoNum}`}
                alt={`Partner ${logoNum}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
