import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AboutContent />
          <AboutImage />
        </div>
      </div>
    </section>
  )
}

function AboutContent() {
  const paragraphs = [
    "Наша компания успешно работает на рынке Казахстана с 2015 года, зарекомендовав себя как надежный и качественный производитель. За это время мы заслужили доверие и признание среди наших клиентов благодаря высокому качеству продукции, профессионализму и ответственному подходу к каждому этапу производственного процесса.",
    "С момента основания нашей компании в 2015 году штат работников значительно увеличился с 10 до 200 человек, что является ярким свидетельством эффективности и профессионализма нашей команды. Этот рост обусловлен не только расширением производственных мощностей, но и высокой квалификацией наших сотрудников, которые вносят значительный вклад в успешное развитие компании.",
    "FIBC KAZAKHSTAN специализируется на производстве высококачественных биг-бэгов различных типов и размеров для транспортировки и хранения сыпучих материалов, используя только первичное сырье высокого качества и современное оборудование.",
  ]

  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        О компании <span className="text-red-600">FIBC KAZAKHSTAN</span>
      </h2>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="text-gray-600 mb-6">
          {paragraph}
        </p>
      ))}
    </div>
  )
}

function AboutImage() {
  return (
    <div className="relative h-[400px] rounded-lg overflow-hidden">
      <Image src="./images/about1.jpg" alt="FIBC Kazakhstan Factory" fill className="object-cover" />
    </div>
  )
}
