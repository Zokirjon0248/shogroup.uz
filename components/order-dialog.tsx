"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import type { Language } from "@/lib/translations"
import { translations } from "@/lib/translations"

interface OrderDialogProps {
  isOpen: boolean
  onClose: () => void
  product: { id: number; name: string; price: string }
  language: Language
}

export default function OrderDialog({ isOpen, onClose, product, language }: OrderDialogProps) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const t = translations[language]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    console.log("[v0] Order Submitted:", {
      product: {
        id: product.id,
        name: product.name,
        price: product.price,
      },
      customer: {
        name: name,
        phone: phone,
      },
      timestamp: new Date().toISOString(),
    })

    alert(t.orderSuccess)
    setName("")
    setPhone("")
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full mx-4">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-lg font-bold">{t.orderForm}</h2>
          <button onClick={onClose} className="hover:bg-accent/10 p-1 rounded transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-4 p-3 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground">{t.price}:</p>
            <p className="font-semibold">{product.name}</p>
            <p className="text-accent font-bold">{product.price}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">{t.name}</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder={t.name}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">{t.phone}</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="+998 (XX) XXX-XX-XX"
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button variant="outline" onClick={onClose} className="flex-1 bg-transparent">
                {t.cancel}
              </Button>
              <Button type="submit" className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground">
                {t.submitOrder}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
