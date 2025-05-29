"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

interface ContactModalProps {
  children: React.ReactNode
}

export function ContactModal({ children }: ContactModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Phone,
      label: "Телефон",
      value: "+7 708 471 2181",
      href: "tel:+77084712181",
    },
    {
      icon: Mail,
      label: "Email",
      value: "Sale@fibc.kz",
      href: "mailto:Sale@fibc.kz",
    },
    {
      icon: MapPin,
      label: "Адрес",
      value: "Казахстан, г. Актобе, ул. Промзона 679/20",
      href: "https://maps.google.com/?q=Актобе,+Промзона+679/20",
    },
  ]

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Свяжитесь с <span className="text-red-600">нами</span>
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Contact Information */}
          <div>
            <p className="text-gray-600 mb-6">
              Готовы обсудить ваш заказ или ответить на любые вопросы о нашей продукции.
            </p>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="bg-red-100 p-2 rounded-full">
                    <info.icon className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{info.label}</p>
                    <p className="font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-4 rounded-lg">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-green-600 mb-2">Сообщение отправлено!</h3>
                <p className="text-gray-600">Мы свяжемся с вами в ближайшее время.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField id="name" label="Имя" type="text" placeholder="Введите ваше имя" required />
                  <FormField id="company" label="Компания" type="text" placeholder="Название компании" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField id="email" label="Email" type="email" placeholder="example@company.com" required />
                  <FormField id="phone" label="Телефон" type="tel" placeholder="+7 (XXX) XXX-XX-XX" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Опишите ваш запрос"
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700" disabled={isSubmitting}>
                  {isSubmitting ? "Отправка..." : "Отправить сообщение"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

interface FormFieldProps {
  id: string
  label: string
  type: string
  placeholder: string
  required?: boolean
}

function FormField({ id, label, type, placeholder, required = false }: FormFieldProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-medium">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={id}
        type={type}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
        placeholder={placeholder}
        required={required}
      />
    </div>
  )
}
