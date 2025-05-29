import type React from "react"
import { CheckCircle, FlaskRoundIcon as Flask, Factory, Recycle } from "lucide-react"

export function Advantages() {
  const advantages = [
    {
      id: 1,
      title: "Качественное первичное сырье",
      description:
        "Мы используем только высококачественное первичное сырье, что гарантирует прочность и долговечность наших биг-бэгов",
      icon: CheckCircle,
    },
    {
      id: 2,
      title: "Собственная лаборатория",
      description: "Наша лаборатория проводит тщательный контроль качества на всех этапах производства",
      icon: Flask,
    },
    {
      id: 3,
      title: "Современная производственная линия 2024 год",
      description:
        "Новейшее оборудование позволяет нам производить биг-бэги высочайшего качества с минимальными затратами",
      icon: Factory,
    },
    {
      id: 4,
      title: "100% безотходное производство",
      description: "Мы заботимся об окружающей среде, поэтому наше производство организовано по принципу безотходности",
      icon: Recycle,
    },
  ]

  return (
    <section id="advantages" className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <AdvantagesHeader />
        <AdvantagesGrid advantages={advantages} />
      </div>
    </section>
  )
}

function AdvantagesHeader() {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Наши <span className="text-red-600">преимущества</span>
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">Почему клиенты выбирают именно нас для производства биг-бэгов</p>
    </div>
  )
}

interface Advantage {
  id: number
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

function AdvantagesGrid({ advantages }: { advantages: Advantage[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {advantages.map((advantage) => (
        <AdvantageCard key={advantage.id} advantage={advantage} />
      ))}
    </div>
  )
}

function AdvantageCard({ advantage }: { advantage: Advantage }) {
  const Icon = advantage.icon

  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-shadow hover:shadow-lg">
      <div className="mb-4">
        <Icon className="h-10 w-10 text-red-600" />
      </div>
      <h3 className="font-bold text-lg mb-2">{advantage.title}</h3>
      <p className="text-gray-600 text-sm">{advantage.description}</p>
    </div>
  )
}
