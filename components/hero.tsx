import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="relative h-[70vh] bg-gray-900">
        <Image
          src="./images/hero.jpg"
          alt="FIBC Big Bags"
          fill
          className="object-cover object-top "
          priority
        />
        <div className="container relative z-20 h-full flex flex-col justify-center items-start text-white">
          <HeroContent />
        </div>
      </div>
    </section>
  )
}

function HeroContent() {
  return (
    <>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-2xl mb-4">
        Качественные биг-бэги для вашего бизнеса
      </h1>
      <p className="text-lg md:text-xl max-w-xl mb-8">
        Современное производство мягких контейнеров для транспортировки и хранения сыпучих материалов
      </p>
      <HeroActions />
    </>
  )
}

function HeroActions() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Button className="bg-red-600 hover:bg-red-700 text-white"
              onClick={() => {
                  const productSection = document.getElementById('products');
                  if (productSection) {
                      productSection.scrollIntoView({ behavior: 'smooth' });
                  }
              }}
      >
        Каталог продукции
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
        <Button
            variant="outline"
            className="border-white text-black hover:bg-red-700 hover:text-white"
            onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                }
            }}
        >
            Связаться с нами
        </Button>
    </div>
  )
}
