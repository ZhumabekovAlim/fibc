"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle,
  Factory,
  FlaskRoundIcon as Flask,
  Recycle,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Users,
  TrendingUp,
  Award,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Achievement } from "@/components/achievement"
import { Products } from "@/components/products"
import { Advantages } from "@/components/advantages"
import { Efficiency } from "@/components/efficiency"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Achievement />
        <Products />
        <Advantages />
        <Efficiency />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)} className="text-black">
        <Menu className="h-6 w-6" />
        <span className="sr-only">Open menu</span>
      </Button>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="FIBC Kazakhstan Logo"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <span className="text-xl font-bold">FIBC KAZAKHSTAN</span>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-black">
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="container grid gap-4 py-8">
            <Link
              href="#about"
              className="text-lg font-medium hover:text-red-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              О нас
            </Link>
            <Link
              href="#achievements"
              className="text-lg font-medium hover:text-red-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Достижения
            </Link>
            <Link
              href="#products"
              className="text-lg font-medium hover:text-red-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Продукция
            </Link>
            <Link
              href="#advantages"
              className="text-lg font-medium hover:text-red-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Преимущества
            </Link>
            <Link
              href="#contact"
              className="text-lg font-medium hover:text-red-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Контакты
            </Link>
            <Button className="mt-4 w-full bg-red-600 hover:bg-red-700" onClick={() => setIsOpen(false)}>
              Связаться с нами
            </Button>
          </nav>
        </div>
      )}
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="relative h-[70vh] bg-gray-900">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="FIBC Big Bags"
          fill
          className="object-cover"
          priority
        />
        <div className="container relative z-20 h-full flex flex-col justify-center items-start text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-2xl mb-4">
            Качественные биг-бэги для вашего бизнеса
          </h1>
          <p className="text-lg md:text-xl max-w-xl mb-8">
            Современное производство мягких контейнеров для транспортировки и хранения сыпучих материалов
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              Каталог продукции
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              Связаться с нами
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              О компании <span className="text-red-600">FIBC KAZAKHSTAN</span>
            </h2>
            <p className="text-gray-600 mb-6">
              Наша компания успешно работает на рынке Казахстана с 2015 года, зарекомендовав себя как надежный и
              качественный производитель. За это время мы заслужили доверие и признание среди наших клиентов благодаря
              высокому качеству продукции, профессионализму и ответственному подходу к каждому этапу производственного
              процесса.
            </p>
            <p className="text-gray-600 mb-6">
              С момента основания нашей компании в 2015 году штат работников значительно увеличился с 10 до 200 человек,
              что является ярким свидетельством эффективности и профессионализма нашей команды. Этот рост обусловлен не
              только расширением производственных мощностей, но и высокой квалификацией наших сотрудников, которые
              вносят значительный вклад в успешное развитие компании.
            </p>
            <p className="text-gray-600">
              FIBC KAZAKHSTAN специализируется на производстве высококачественных биг-бэгов различных типов и размеров
              для транспортировки и хранения сыпучих материалов, используя только первичное сырье высокого качества и
              современное оборудование.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="FIBC Kazakhstan Factory"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function AchievementsSection() {
  return (
    <section id="achievements" className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Наши <span className="text-red-600">достижения</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Постоянное развитие и совершенствование - ключевые принципы нашей компании
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="FIBC Kazakhstan Team"
              fill
              className="object-cover"
            />
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Модернизация производства</h3>
            <p className="text-gray-600 mb-6">
              В 2024 году мы сделали значительный шаг в развитии, модернизировав экструзионную линию, что позволило нам
              значительно повысить производственные мощности и улучшить качество выпускаемой продукции.
            </p>
            <p className="text-gray-600">
              Важным достиже��ием стало также внедрение полной автономности в производстве, обеспечив 100% содержание
              собственного сырья, что позволяет нам не только улучшать качество продукции, но и контролировать все этапы
              производства.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="FIBC Kazakhstan Production Line"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
              <Award className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">С 2015 года</h3>
            <p className="text-gray-600">на рынке Казахстана</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
              <Users className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">200+ сотрудников</h3>
            <p className="text-gray-600">высококвалифицированных специалистов</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
              <Factory className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Модернизация</h3>
            <p className="text-gray-600">экструзионной линии в 2024 году</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
              <TrendingUp className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">100% автономность</h3>
            <p className="text-gray-600">собственное сырье для производства</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProductsSection() {
  const products = [
    {
      id: 1,
      name: "Биг-бэг с верхним клапаном",
      description: "Биг-бэг с верхним загрузочным клапаном и красными стропами",
      image: "/images/big-bag-4.jpeg",
    },
    {
      id: 2,
      name: "Биг-бэг с петлевыми ручками",
      description: "Биг-бэг с открытым верхом и петлевыми ручками",
      image: "/images/big-bag-5.jpeg",
    },
    {
      id: 3,
      name: "Стандартный биг-бэг",
      description: "Классический биг-бэг с петлями для подъема и плоским дном",
      image: "/images/big-bag-1.png",
    },
    {
      id: 4,
      name: "Биг-бэг с разгрузочным клапаном",
      description: "Биг-бэг с верхней загрузкой и нижним разгрузочным клапаном",
      image: "/images/big-bag-2.png",
    },
    {
      id: 5,
      name: "Биг-бэг с верхним и нижним клапаном",
      description: "Биг-бэг с верхним загрузочным и нижним разгрузочным клапаном",
      image: "/images/big-bag-3.png",
    },
    {
      id: 6,
      name: "Лента для биг-бэгов",
      description: "Высокопрочная лента для производства биг-бэгов различной грузоподъемности",
      image: "/images/webbing.png",
    },
    {
      id: 7,
      name: "Биг-бэг с антистатическим покрытием",
      description: "Биг-бэг с защитой от статического электричества",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 8,
      name: "Биг-бэг для опасных грузов",
      description: "Специальный биг-бэг для транспортировки опасных материалов",
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  return (
    <section id="products" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Наша <span className="text-red-600">продукция</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Мы производим широкий ассортимент биг-бэгов различных типов и размеров для разных отраслей промышленности
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-64 bg-[#f2f2f2]">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-contain p-2"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button className="bg-red-600 hover:bg-red-700">Запросить полный каталог</Button>
        </div>
      </div>
    </section>
  )
}

function AdvantagesSection() {
  const advantages = [
    {
      id: 1,
      title: "Качественное первичное сырье",
      description:
        "Мы используем только высококачественное первичное сырье, что гарантирует прочность и долговечность наших биг-бэгов",
      icon: <CheckCircle className="h-10 w-10 text-red-600" />,
    },
    {
      id: 2,
      title: "Собственная лаборатория",
      description: "Наша лаборатория проводит тщательный контроль качества на всех этапах производства",
      icon: <Flask className="h-10 w-10 text-red-600" />,
    },
    {
      id: 3,
      title: "Современная производственная линия 2024 год",
      description:
        "Новейшее оборудование позволяет нам производить биг-бэги высочайшего качества с минимальными затратами",
      icon: <Factory className="h-10 w-10 text-red-600" />,
    },
    {
      id: 4,
      title: "100% безотходное производство",
      description: "Мы заботимся об окружающей среде, поэтому наше производство организовано по принципу безотходности",
      icon: <Recycle className="h-10 w-10 text-red-600" />,
    },
  ]

  return (
    <section id="advantages" className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Наши <span className="text-red-600">преимущества</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Почему клиенты выбирают именно нас для производства биг-бэгов
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage) => (
            <div key={advantage.id} className="bg-white p-6 rounded-lg shadow-md transition-shadow hover:shadow-lg">
              <div className="mb-4">{advantage.icon}</div>
              <h3 className="font-bold text-lg mb-2">{advantage.title}</h3>
              <p className="text-gray-600 text-sm">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductionSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Наша <span className="text-red-500">производительность</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Современное оборудование и опытный персонал позволяют нам достигать высоких показателей производства
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-800 p-8 rounded-lg">
            <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">1 000 000+</div>
            <p className="text-gray-300">биг-бэгов в год</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg">
            <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">24/7</div>
            <p className="text-gray-300">режим работы производства</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg">
            <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">200+</div>
            <p className="text-gray-300">квалифицированных сотрудников</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Свяжитесь с <span className="text-red-600">нами</span>
            </h2>
            <p className="text-gray-600 mb-8">
              Готовы обсудить ваш заказ или ответить на любые вопросы о нашей продукции. Заполните форму, и мы свяжемся
              с вами в ближайшее время.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Телефон</p>
                  <p className="font-medium">+7 708 471 2181</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">Sale@fibc.kz</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Адрес</p>
                  <p className="font-medium">Казахстан, г. Актобе, ул. Промзона 679/20</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Имя
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Введите ваше имя"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">
                    Компания
                  </label>
                  <input
                    id="company"
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Название компании"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="example@company.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Телефон
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="+7 (XXX) XXX-XX-XX"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Опишите ваш запрос"
                />
              </div>
              <Button className="w-full bg-red-600 hover:bg-red-700">Отправить сообщение</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
