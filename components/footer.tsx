"use client"

import { Instagram, Send, Phone } from "lucide-react"
import type { Language } from "@/lib/translations"

interface FooterProps {
  language: Language
}

export default function Footer({ language }: FooterProps) {
  const footerContent = {
    ru: {
      portfolio: "Портфолио",
      aboutUs: "О нас",
      contact: "Контакт",
      orderInfo: "Как заказать",
      orderSteps: "1. Выберите товар\n2. Нажмите 'Заказать'\n3. Заполните форму\n4. Подтвердите заказ",
      social: "Социальные сети",
      copyright: "©2023 ООО «BMIX». ИНН 164805502. Все права защищены",
      phone: "+998 (90) 123-45-67",
    },
    en: {
      portfolio: "Portfolio",
      aboutUs: "About Us",
      contact: "Contact",
      orderInfo: "How to Order",
      orderSteps: "1. Select a product\n2. Click 'Place Order'\n3. Fill in the form\n4. Confirm your order",
      social: "Social Media",
      copyright: "©2023 LLC «BMIX». All rights reserved",
      phone: "+998 (90) 123-45-67",
    },
    uz: {
      portfolio: "Portfel",
      aboutUs: "Biz Haqida",
      contact: "Kontak",
      orderInfo: "Qanday Buyurtma Berish",
      orderSteps:
        "1. Mahsulotni tanlang\n2. 'Buyurtma Berish' tugmasini bosing\n3. Shaklni to'ldiring\n4. Buyurtmani tasdiqlang",
      social: "Ijtimoiy Tarmoqlar",
      copyright: "©2023 LLC «BMIX». Barcha huquqlar himoyalangan",
      phone: "+998 (90) 123-45-67",
    },
  }

  const content = footerContent[language]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Portfolio */}
          <div>
            <h3 className="font-bold mb-4 text-lg">{content.portfolio}</h3>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-sm opacity-80 hover:opacity-100 transition block"
            >
              {language === "ru" ? "Все товары" : language === "en" ? "All Products" : "Barcha Mahsulotlar"}
            </button>
          </div>

          {/* About Us */}
          <div>
            <h3 className="font-bold mb-4 text-lg">{content.aboutUs}</h3>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm opacity-80 hover:opacity-100 transition block"
            >
              {language === "ru" ? "О компании" : language === "en" ? "About Company" : "Kompaniya Haqida"}
            </button>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4 text-lg">{content.contact}</h3>
            <a
              href="tel:+998901234567"
              className="text-sm opacity-80 hover:opacity-100 transition flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              {content.phone}
            </a>
          </div>
        </div>

        {/* Order Info */}
        <div className="bg-background/10 p-6 rounded-lg mb-8">
          <h3 className="font-bold mb-3">{content.orderInfo}</h3>
          <p className="text-sm opacity-80 whitespace-pre-line">{content.orderSteps}</p>
        </div>

        {/* Social Media */}
        <div className="flex items-center justify-between border-t border-background/20 pt-8">
          <p className="text-sm opacity-60">{content.copyright}</p>
          <div className="flex gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background text-foreground rounded-full p-2 hover:bg-accent hover:text-accent-foreground transition"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://telegram.me"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background text-foreground rounded-full p-2 hover:bg-accent hover:text-accent-foreground transition"
            >
              <Send className="w-5 h-5" />
            </a>
            <a
              href="tel:+998901234567"
              className="bg-background text-foreground rounded-full p-2 hover:bg-accent hover:text-accent-foreground transition"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
