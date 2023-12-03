import { Pathnames } from "next-intl/navigation"

export const locales = ["en", "th"] as const

export const pathnames = {
  "/": "/",
  "/pathnames": {
    en: "/pathnames",
    th: "/pfadnamen",
  },
} satisfies Pathnames<typeof locales>

// Use the default: `always`
export const localePrefix = undefined

export type AppPathnames = keyof typeof pathnames
