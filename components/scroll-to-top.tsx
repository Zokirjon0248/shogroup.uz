"use client"

import { ChevronUp } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    isVisible && (
      <Button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground p-3 shadow-lg"
        size="icon"
      >
        <ChevronUp className="w-5 h-5" />
      </Button>
    )
  )
}
