"use client"

import type React from "react"
import { Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EmailLink } from "@/components/ui/email-link"
import { useEmailClient } from "@/hooks/use-email-client"
import { useState } from "react"

export function Contact() {
    const { composeEmail } = useEmailClient()
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
    })

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
            href: "https://www.google.com/maps/place/FIBC+KAZAKHSTAN/@50.2997564,57.1259023,13.44z/data=!4m10!1m2!2m1!1z0LDQutGC0L7QsdC1INC_0YDQvtC80LfQvtC90LAgNjc5LzIw!3m6!1s0x418223d11f843eb3:0x4067bd48f87d9abe!8m2!3d50.283934!4d57.166978!15sCiTQsNC60YLQvtCx0LUg0L_RgNC-0LzQt9C-0L3QsCA2NzkvMjCSARBjb3Jwb3JhdGVfb2ZmaWNlqgFnEAEqGCIU0L_RgNC-0LzQt9C-0L3QsCA2NzkoDTIfEAEiG7LqS8HcAKOJf4dL3JsFjJeQv48_H4PIC42WezIoEAIiJNCw0LrRgtC-0LHQtSDQv9GA0L7QvNC30L7QvdCwIDY3OSAyMOABAA!16s%2Fg%2F11fz8xqxkq?entry=ttu&g_ep=EgoyMDI1MDUyNi4wIKXMDSoASAFQAw%3D%3D",
        },
    ]

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const subject = `Запрос от ${formData.name} - ${formData.company || "Частное лицо"}`
        const body = `Здравствуйте!

Получен запрос через форму обратной связи на сайте:

Имя: ${formData.name}
Компания: ${formData.company || "Не указана"}
Email: ${formData.email}
Телефон: ${formData.phone}

Сообщение:
${formData.message}

---
Отправлено через форму обратной связи FIBC Kazakhstan`

        composeEmail("Sale@fibc.kz", subject, body)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    return (
        <section id="contact" className="py-16 md:py-24 bg-white">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left Side - Contact Info */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Свяжитесь с <span className="text-red-600">нами</span>
                        </h2>
                        <p className="text-gray-600 mb-12 text-lg leading-relaxed">
                            Готовы обсудить ваш заказ или ответить на любые вопросы о нашей продукции.
                            <br />
                            Заполните форму, и мы свяжемся с вами в ближайшее время.
                        </p>

                        <div className="space-y-8">
                            {contactInfo.map((info, index) => (
                                <ContactInfoItem key={index} info={info} />
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div>
                        <form onSubmit={handleFormSubmit} className="space-y-6">
                            {/* Name and Company Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-700">
                                        Имя
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                                        placeholder="Введите ваше имя"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="company" className="text-sm font-medium text-gray-700">
                                        Компания
                                    </label>
                                    <input
                                        id="company"
                                        name="company"
                                        type="text"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                                        placeholder="Название компании"
                                        value={formData.company}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            {/* Email and Phone Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                                        placeholder="example@company.com"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                                        Телефон
                                    </label>
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                                        placeholder="+7 (XXX) XXX-XX-XX"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Message Field */}
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-700">
                                    Сообщение
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors resize-none"
                                    placeholder="Опишите ваш запрос"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-base font-medium"
                            >
                                Отправить сообщение
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

interface ContactInfoItem {
    icon: React.ComponentType<{ className?: string }>
    label: string
    value: string
    href: string
}

function ContactInfoItem({ info }: { info: ContactInfoItem }) {
    const Icon = info.icon

    if (info.label === "Email") {
        return (
            <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <Icon className="h-6 w-6 text-red-600" />
                </div>
                <div>
                    <p className="text-sm text-gray-500 mb-1">{info.label}</p>
                    <EmailLink
                        email={info.value}
                        className="text-lg font-medium text-gray-900 hover:text-red-600 no-underline hover:underline"
                        showIcon={false}
                        displayEmail={true}
                    >
                        {info.value}
                    </EmailLink>
                </div>
            </div>
        )
    }

    return (
        <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <Icon className="h-6 w-6 text-red-600" />
            </div>
            <div>
                <p className="text-sm text-gray-500 mb-1">{info.label}</p>
                {info.href.startsWith("http") ? (
                    <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-medium text-gray-900 hover:text-red-600 transition-colors"
                    >
                        {info.value}
                    </a>
                ) : (
                    <a href={info.href} className="text-lg font-medium text-gray-900 hover:text-red-600 transition-colors">
                        {info.value}
                    </a>
                )}
            </div>
        </div>
    )
}
