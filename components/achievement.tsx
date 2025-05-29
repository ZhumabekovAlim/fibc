import Image from "next/image"
import { AchievementCards } from "./achievement-cards"

export function Achievement() {
  return (
    <section id="achievements" className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <AchievementHeader />
        <TeamSection />
        <ModernizationSection />
        <AchievementCards />
      </div>
    </section>
  )
}

function AchievementHeader() {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Наши <span className="text-red-600">достижения</span>
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Постоянное развитие и совершенствование - ключевые принципы нашей компании
      </p>
    </div>
  )
}

function TeamSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
      <div className="relative h-[400px] rounded-lg overflow-hidden">
        <Image src="./images/achive.jpg" alt="FIBC Kazakhstan Team" fill className="object-cover object-top" />
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-4">Наша команда</h3>
        <p className="text-gray-600 mb-6">
          Мы гордимся тем, что смогли создать высококвалифицированный коллектив, способный решать любые задачи и
          обеспечивать стабильный рост компании. Каждый член нашей команды, независимо от должности, стремится к
          совершенствованию и развитию, что способствует достижению высоких результатов.
        </p>
        <p className="text-gray-600">
          Такой рост персонала также свидетельствует о стабильности бизнеса и доверии со стороны наших клиентов и
          партнеров. Наша компания продолжает инвестировать в обучение и развитие сотрудников, что позволяет нам
          поддерживать высокий уровень профессионализма и оставаться конкурентоспособными на рынке.
        </p>
      </div>
    </div>
  )
}

function ModernizationSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div>
        <h3 className="text-2xl font-bold mb-4">Модернизация производства</h3>
        <p className="text-gray-600 mb-6">
          В 2024 году мы сделали значительный шаг в развитии, модернизировав экструзионную линию, что позволило нам
          значительно повысить производственные мощности и улучшить качество выпускаемой продукции.
        </p>
        <p className="text-gray-600">
          Важным достижением стало также внедрение полной автономности в производстве, обеспечив 100% содержание
          собственного сырья, что позволяет нам не только улучшать качество продукции, но и контролировать все этапы
          производства.
        </p>
      </div>
      <div className="relative h-[400px] rounded-lg overflow-hidden">
        <Image
          src="./images/achive2.jpg"
          alt="FIBC Kazakhstan Production Line"
          fill
          className="object-cover"
        />
      </div>
    </div>
  )
}
