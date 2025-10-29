import { Facebook, Instagram, Send } from "lucide-react"
import type { Language } from "@/lib/translations"

interface FooterProps {
  language: Language
}

export default function Footer({ language }: FooterProps) {
  const footerContent = {
    ru: {
      about: "О нас",
      company: "О компании",
      vacancies: "Вакансии",
      contacts: "Контакты",
      partners: "Партнёрам",
      address: "Адрес",
      name: "Наименование",
      brand: "Бренд под ключ",
      social: "В социальных сетях:",
      copyright: "©2023 ООО «BMIX». ИНН 164805502. Все права защищены",
    },
    en: {
      about: "About Us",
      company: "About Company",
      vacancies: "Vacancies",
      contacts: "Contacts",
      partners: "For Partners",
      address: "Address",
      name: "Name",
      brand: "Full Brand",
      social: "Social Media:",
      copyright: "©2023 LLC «BMIX». All rights reserved",
    },
    uz: {
      about: "Biz Haqida",
      company: "Kompaniya Haqida",
      vacancies: "Vakansiyalar",
      contacts: "Kontaktlar",
      partners: "Hamkorlarga",
      address: "Manzil",
      name: "Nomi",
      brand: "To'liq Brend",
      social: "Ijtimoiy Tarmoqlar:",
      copyright: "©2023 LLC «BMIX». Barcha huquqlar himoyalangan",
    },
  }

  const content = footerContent[language]

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold mb-4">{content.about}</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  {content.company}
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  {content.vacancies}
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  {content.contacts}
                </a>
              </li>
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h3 className="font-bold mb-4">{content.partners}</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  {content.address}
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  {content.name}
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  {content.brand}
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold mb-4">{content.social}</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-background text-foreground rounded-full p-2 hover:bg-accent hover:text-accent-foreground transition"
              >
                <Send className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-background text-foreground rounded-full p-2 hover:bg-accent hover:text-accent-foreground transition"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-background text-foreground rounded-full p-2 hover:bg-accent hover:text-accent-foreground transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-sm opacity-60 text-center">
          <p>{content.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
