"use client"

import { useCallback } from "react"

interface EmailOptions {
    to?: string
    subject?: string
    body?: string
    cc?: string
    bcc?: string
}

export function useEmailClient() {
    const openEmailClient = useCallback((options: EmailOptions = {}) => {
        const { to = "", subject = "", body = "", cc = "", bcc = "" } = options

        // Create mailto URL with parameters
        const params = new URLSearchParams()

        if (subject) params.append("subject", subject)
        if (body) params.append("body", body)
        if (cc) params.append("cc", cc)
        if (bcc) params.append("bcc", bcc)

        const paramString = params.toString()
        const mailtoUrl = `mailto:${to}${paramString ? `?${paramString}` : ""}`

        // Try to open email client
        try {
            window.location.href = mailtoUrl
        } catch (error) {
            console.error("Failed to open email client:", error)
            // Fallback: copy email to clipboard
            if (navigator.clipboard && to) {
                navigator.clipboard
                    .writeText(to)
                    .then(() => {
                        alert(`Email address copied to clipboard: ${to}`)
                    })
                    .catch(() => {
                        // Final fallback: show email address
                        alert(`Please send email to: ${to}`)
                    })
            }
        }
    }, [])

    const composeEmail = useCallback(
        (to: string, subject?: string, body?: string) => {
            openEmailClient({ to, subject, body })
        },
        [openEmailClient],
    )

    return { openEmailClient, composeEmail }
}
