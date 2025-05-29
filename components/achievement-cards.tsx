import type React from "react"
import { Award, Users, Factory, TrendingUp } from "lucide-react"

export function AchievementCards() {
  const achievements = [
    {
      icon: Award,
      title: "С 2015 года",
      description: "на рынке Казахстана",
    },
    {
      icon: Users,
      title: "200+ сотрудников",
      description: "высококвалифицированных специалистов",
    },
    {
      icon: Factory,
      title: "Модернизация",
      description: "экструзионной линии в 2024 году",
    },
    {
      icon: TrendingUp,
      title: "100% автономность",
      description: "собственное сырье для производства",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
      {achievements.map((achievement, index) => (
        <AchievementCard key={index} {...achievement} />
      ))}
    </div>
  )
}

interface AchievementCardProps {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

function AchievementCard({ icon: Icon, title, description }: AchievementCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
        <Icon className="h-8 w-8 text-red-600" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
