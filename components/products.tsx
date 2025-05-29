import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Products() {
  const products = [
    {
      id: 1,
      name: "Биг-бэг с верхним клапаном",
      description: "Биг-бэг с верхним загрузочным клапаном и красными стропами",
      image: "/images/products/big-bag-4.jpeg",
    },
    {
      id: 2,
      name: "Биг-бэг с петлевыми ручками",
      description: "Биг-бэг с открытым верхом и петлевыми ручками",
      image: "/images/products/big-bag-5.jpeg",
    },
    {
      id: 3,
      name: "Стандартный биг-бэг",
      description: "Классический биг-бэг с петлями для подъема и плоским дном",
      image: "/images/products/big-bag-1.png",
    },
    {
      id: 4,
      name: "Биг-бэг с разгрузочным клапаном",
      description: "Биг-бэг с верхней загрузкой и нижним разгрузочным клапаном",
      image: "/images/products/big-bag-2.png",
    },
    {
      id: 5,
      name: "Биг-бэг с верхним и нижним клапаном",
      description: "Биг-бэг с верхним загрузочным и нижним разгрузочным клапаном",
      image: "/images/products/big-bag-3.png",
    },
    {
      id: 6,
      name: "Лента для биг-бэгов",
      description: "Высокопрочная лента для производства биг-бэгов различной грузоподъемности",
      image: "/images/products/webbing.png",
    },
  ]

  return (
    <section id="products" className="py-16 md:py-24 bg-white">
      <div className="container">
        <ProductsHeader />
        <ProductsGrid products={products} />
        <ProductsAction />
      </div>
    </section>
  )
}

function ProductsHeader() {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Наша <span className="text-red-600">продукция</span>
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Мы производим широкий ассортимент биг-бэгов различных типов и размеров для разных отраслей промышленности
      </p>
    </div>
  )
}

interface Product {
  id: number
  name: string
  description: string
  image: string
}

function ProductsGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-64 bg-[#f2f2f2]">
        <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover w-full h-full" />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm">{product.description}</p>
      </div>
    </div>
  )
}

function ProductsAction() {
  return (
    <div className="mt-12 text-center">
      <Button className="bg-red-600 hover:bg-red-700"
         onClick={() => {
           const contactSection = document.getElementById('contact');
             if (contactSection) {
               contactSection.scrollIntoView({ behavior: 'smooth' });
             }
              }}
      >
        Запросить полный каталог
      </Button>
    </div>
  )
}
