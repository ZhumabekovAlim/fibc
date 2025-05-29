"use client"

import type React from "react"
import { Mail, ExternalLink } from "lucide-react"
import { useEmailClient } from "@/hooks/use-email-client"
import { cn } from "@/lib/utils"

interface EmailLinkProps {
    email: string
    subject?: string
    body?: string
    children?: React.ReactNode
    className?: string
    showIcon?: boolean
    showExternalIcon?: boolean
    displayEmail?: boolean
}

export function EmailLink({
                              email,
                              subject,
                              body,
                              children,
                              className,
                              showIcon = true,
                              showExternalIcon = false,
                              displayEmail = true,
                          }: EmailLinkProps) {
    const { composeEmail } = useEmailClient()

    const handleEmailClick = (e: React.MouseEvent) => {
        e.preventDefault()

        // Generate default subject and body if not provided
        const defaultSubject = subject || "Запрос информации - FIBC Kazakhstan"
        const defaultBody =
            body ||
            `Здравствуйте!

Меня интересует ваша продукция биг-бэгов. Прошу предоставить дополнительную информацию.

С уважением,
[Ваше имя]
[Название компании]
[Контактный телефон]`

        composeEmail(email, defaultSubject, defaultBody)
    }

    return (
        <a
            href={`mailto:${email}`}
            onClick={handleEmailClick}
            className={cn(
                "inline-flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded-sm",
                className,
            )}
            title={`Отправить email на ${email}`}
            aria-label={`Отправить email на ${email}`}
        >
            {showIcon && <Mail className="h-4 w-4 flex-shrink-0" />}
            <span>{children || (displayEmail ? email : "Написать письмо")}</span>
            {showExternalIcon && <ExternalLink className="h-3 w-3 flex-shrink-0" />}
        </a>
    )
}
