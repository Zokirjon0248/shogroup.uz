"use client"

import type { Language } from "@/lib/translations"

interface AboutUsProps {
  language: Language
}

export default function AboutUs({ language }: AboutUsProps) {
  const content = {
    ru: {
      title: "О нас",
      description:
        "BMIX - это ведущая онлайн-платформа для покупки и продажи товаров. Мы предоставляем широкий выбор продукции от надежных поставщиков и производителей. Наша миссия - сделать покупки удобными, безопасными и доступными для каждого.",
      mission: "Наша миссия",
      missionText: "Предоставить лучший сервис и качество товаров нашим клиентам.",
      vision: "Наше видение",
      visionText: "Стать лидирующей платформой электронной коммерции в регионе.",
      history: "История компании",
      historyText:
        "Основана в 2015 году, BMIX выросла из небольшого стартапа в крупную платформу электронной коммерции, обслуживающую миллионы клиентов.",
      values: "Наши ценности",
      valuesText:
        "Честность, качество, инновация и ориентация на клиента - это основные принципы, которыми мы руководствуемся в своей деятельности.",
    },
    en: {
      title: "About Us",
      description:
        "BMIX is a leading online platform for buying and selling goods. We provide a wide selection of products from reliable suppliers and manufacturers. Our mission is to make shopping convenient, safe and accessible to everyone.",
      mission: "Our Mission",
      missionText: "Provide the best service and quality of goods to our customers.",
      vision: "Our Vision",
      visionText: "Become the leading e-commerce platform in the region.",
      history: "Company History",
      historyText:
        "Founded in 2015, BMIX has grown from a small startup into a major e-commerce platform serving millions of customers.",
      values: "Our Values",
      valuesText: "Honesty, quality, innovation and customer focus are the core principles that guide our business.",
    },
    uz: {
      title: "Biz Haqida",
      description:
        "BMIX - tovarlarni sotib olish va sotish uchun etakchi onlayn platformasi. Biz ishonchli ta'minotchilar va ishlab chiqaruvchilardan keng assortimentdagi mahsulotlarni taqdim etamiz. Bizning maqsadimiz - xaridni har bir kishi uchun qulay, xavfsiz va mavjud qilishdir.",
      mission: "Bizning Maqsadi",
      missionText: "Bizning mijozlarimizga eng yaxshi xizmat va tovar sifatini taqdim etish.",
      vision: "Bizning Ko'rinishi",
      visionText: "Mintaqada etakchi e-tijorat platformasi bo'lish.",
      history: "Kompaniya Tarixi",
      historyText:
        "2015 yilda tashkil etilgan BMIX kichik startupdan millionlab mijozlarga xizmat ko'rsatadigan katta e-tijorat platformasiga aylandi.",
      values: "Bizning Qadriyatlari",
      valuesText:
        "Halollik, sifat, innovatsiya va mijozga yo'naltirilganlik - bu bizning faoliyatimizni boshqaradigan asosiy tamoyillar.",
    },
  }

  const t = content[language]

  return (
    <section id="about" className="bg-white py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">{t.title}</h2>
        <p className="text-foreground mb-8 leading-relaxed text-lg">{t.description}</p>

        {/* Brand Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-muted rounded-lg h-64 flex items-center justify-center overflow-hidden">
            <img src="/electronics-sale-banner.png" alt="Brand" className="w-full h-full object-cover" />
          </div>
          <div className="bg-muted rounded-lg h-64 flex items-center justify-center overflow-hidden">
            <img src="/electronics-sale-banner.png" alt="Brand" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Mission, Vision, History, Values */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-muted p-6 rounded-lg">
            <h3 className="text-lg font-bold mb-3 text-accent">{t.mission}</h3>
            <p className="text-foreground">{t.missionText}</p>
          </div>
          <div className="bg-muted p-6 rounded-lg">
            <h3 className="text-lg font-bold mb-3 text-accent">{t.vision}</h3>
            <p className="text-foreground">{t.visionText}</p>
          </div>
          <div className="bg-muted p-6 rounded-lg">
            <h3 className="text-lg font-bold mb-3 text-accent">{t.history}</h3>
            <p className="text-foreground">{t.historyText}</p>
          </div>
          <div className="bg-muted p-6 rounded-lg">
            <h3 className="text-lg font-bold mb-3 text-accent">{t.values}</h3>
            <p className="text-foreground">{t.valuesText}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
