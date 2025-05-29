"use client"

import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { useScrollSpy } from "@/hooks/use-scroll-spy"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"
import { ContactModal } from "@/components/contact-modal"
import { cn } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-white transition-all duration-200",
        isScrolled ? "shadow-md" : "shadow-sm",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Logo />
        <Navigation />
        <MobileNav />
        <ContactModal>
          <Button className="hidden md:flex bg-red-600 hover:bg-red-700">Связаться с нами</Button>
        </ContactModal>
      </div>
    </header>
  )
}

function Logo() {
  const { scrollToTop } = useSmoothScroll()

  return (
    <button
      onClick={scrollToTop}
      className="flex items-center gap-3 hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded-md"
      aria-label="FIBC Kazakhstan - На главную"
    >
      <div className="relative h-10 w-auto">
        <Image
          src="/images/logo.png"
          alt="FIBC Kazakhstan Logo"
          width={120}
          height={40}
          className="h-10 w-auto object-contain"
          priority
        />
      </div>
    </button>
  )
}

function Navigation() {
  const sectionIds = ["about", "achievements", "products", "advantages", "contact"]
  const activeSection = useScrollSpy(sectionIds, 100)
  const { scrollToSection } = useSmoothScroll(80)

  const navItems = [
    { href: "about", label: "О нас" },
    { href: "achievements", label: "Достижения" },
    { href: "products", label: "Продукция" },
    { href: "advantages", label: "Преимущества" },
    { href: "contact", label: "Контакты" },
  ]

  return (
    <nav className="hidden md:flex gap-6" role="navigation" aria-label="Основная навигация">
      {navItems.map((item) => (
        <button
          key={item.href}
          onClick={() => scrollToSection(item.href)}
          className={cn(
            "text-sm font-medium transition-colors px-2 py-1",
            activeSection === item.href ? "text-red-600 font-semibold ring-red-500 ring-offset-2" : "text-gray-700 hover:text-red-600",
          )}
          aria-current={activeSection === item.href ? "page" : undefined}
        >
          {item.label}
        </button>
      ))}
    </nav>
  )
}

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const sectionIds = ["about", "achievements", "products", "advantages", "contact"]
  const activeSection = useScrollSpy(sectionIds, 100)
  const { scrollToSection } = useSmoothScroll(80)

  const navItems = [
    { href: "about", label: "О нас" },
    { href: "achievements", label: "Достижения" },
    { href: "products", label: "Продукция" },
    { href: "advantages", label: "Преимущества" },
    { href: "contact", label: "Контакты" },
  ]

  const handleNavClick = (href: string) => {
    scrollToSection(href)
    setIsOpen(false)
  }

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(true)}
        className="text-black"
        aria-label="Открыть меню"
        aria-expanded={isOpen}
      >
        <Menu className="h-6 w-6" />
      </Button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Mobile Menu */}
          <div className="fixed inset-0 z-50 bg-white">
            <div className="container flex h-16 items-center justify-between">
              <MobileLogo />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-black"
                aria-label="Закрыть меню"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <nav className="container py-8" role="navigation" aria-label="Мобильная навигация">
              <div className="grid gap-4">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      "text-lg font-medium transition-colors text-left p-2 rounded-md",
                      activeSection === item.href
                        ? "text-red-600 font-semibold bg-red-50 ring-2 ring-red-500ring-red-500"
                        : "text-gray-700 hover:text-red-600 hover:bg-gray-50",
                    )}
                    aria-current={activeSection === item.href ? "page" : undefined}
                  >
                    {item.label}
                  </button>
                ))}
                <ContactModal>
                  <Button className="mt-4 w-full  bg-red-600 hover:bg-red-700" onClick={() => setIsOpen(false)}>
                    Связаться с нами
                  </Button>
                </ContactModal>
              </div>
            </nav>
          </div>
        </>
      )}
    </div>
  )
}

function MobileLogo() {
  const { scrollToTop } = useSmoothScroll()

  return (
    <button
      onClick={scrollToTop}
      className="flex items-center gap-3 rounded-md"
      aria-label="FIBC Kazakhstan - На главную"
    >
      <div className="relative h-8 w-auto">
        <Image
          src="/images/logo.png"
          alt="FIBC Kazakhstan Logo"
          width={96}
          height={32}
          className="h-8 w-auto object-contain"
          priority
        />
      </div>
    </button>
  )
}
