import type { Language } from "@/lib/translations"

interface PartnersProps {
  language: Language
}

export default function Partners({ language }: PartnersProps) {
  const titles = {
    ru: "Наши партнеры",
    en: "Our Partners",
    uz: "Bizning Hamkorlari",
  }

  return (
    <section className="bg-white py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">{titles[language]}</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="bg-muted rounded-lg h-24 flex items-center justify-center">
              <img
                src={`/partner-logo-.jpg?height=100&width=150&query=partner-logo-${i}`}
                alt={`Partner ${i}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
