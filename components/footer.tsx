"use client"

import type React from "react"
import Image from "next/image"
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"
import { ContactModal } from "@/components/contact-modal"

export function Footer() {
  const { scrollToSection, scrollToTop } = useSmoothScroll(80)

  const navigationLinks = [
    { href: "about", label: "О нас" },
    { href: "achievements", label: "Достижения" },
    { href: "products", label: "Продукция" },
    { href: "advantages", label: "Преимущества" },
    { href: "contact", label: "Контакты" },
  ]

  const contactInfo = [
    {
      icon: Phone,
      label: "Телефон",
      value: "+7 708 471 2181",
      href: "tel:+77084712181",
      external: false,
    },
    {
      icon: Mail,
      label: "Email",
      value: "Sale@fibc.kz",
      href: "mailto:Sale@fibc.kz",
      external: false,
    },
    {
      icon: MapPin,
      label: "Адрес",
      value: "Казахстан, г. Актобе , ул. Промзона 679/20",
      href: "https://maps.google.com/?q=Актобе,+Промзона+679/20",
      external: true,
    },
  ]

  return (
    <footer className="border-t bg-gray-50">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CompanyInfo />
          <NavigationSection links={navigationLinks} onNavigate={scrollToSection} />
          <ContactSection contacts={contactInfo} />
        </div>
        <Copyright />
      </div>
    </footer>
  )
}

function CompanyInfo() {
  const { scrollToTop } = useSmoothScroll()

  return (
    <div>
      <button
        onClick={scrollToTop}
        className="flex items-center gap-3 mb-4 hover:opacity-90 transition-opacity  rounded-md"
        aria-label="FIBC Kazakhstan - На главную"
      >
        <Image
          src="/images/logo.png"
          alt="FIBC Kazakhstan Logo"
          width={120}
          height={40}
          className="h-10 w-auto object-contain"
        />
      </button>
      <p className="text-sm text-gray-500 max-w-xs">
        Производство качественных биг-бэгов для промышленных нужд с использованием современных технологий.
      </p>
    </div>
  )
}

function NavigationSection({
  links,
  onNavigate,
}: {
  links: Array<{ href: string; label: string }>
  onNavigate: (href: string) => void
}) {
  return (
    <div>
      <h3 className="font-medium mb-4">Навигация</h3>
      <nav className="grid grid-cols-1 gap-2" role="navigation" aria-label="Навигация в подвале">
        {links.map((link) => (
          <button
            key={link.href}
            onClick={() => onNavigate(link.href)}
            className="text-sm text-gray-500 hover:text-red-600 transition-colors text-left  rounded-md px-1 py-1"
          >
            {link.label}
          </button>
        ))}
      </nav>
    </div>
  )
}

function ContactSection({
  contacts,
}: {
  contacts: Array<{
    icon: React.ComponentType<{ className?: string }>
    label: string
    value: string
    href: string
    external: boolean
  }>
}) {
  return (
    <div>
      <h3 className="font-medium mb-4">Контакты</h3>
      <div className="space-y-3">
        {contacts.map((contact, index) => (
          <a
            key={index}
            href={contact.href}
            target={contact.external ? "_blank" : undefined}
            rel={contact.external ? "noopener noreferrer" : undefined}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-red-600 transition-colors  rounded-md p-1"
            aria-label={`${contact.label}: ${contact.value}`}
          >
            <contact.icon className="h-4 w-4 text-red-600 flex-shrink-0" />
            <span className="break-words">{contact.value}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

function Copyright() {
  return (
    <div className="border-t mt-8 pt-8 text-center text-sm text-gray-500">
      <p>© {new Date().getFullYear()} FIBC KAZAKHSTAN. Все права защищены.</p>
    </div>
  )
}
