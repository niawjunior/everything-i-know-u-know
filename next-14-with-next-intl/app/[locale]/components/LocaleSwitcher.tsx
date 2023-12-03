"use client"
import { useLocale, useTranslations } from "next-intl"
import { usePathname } from "../../navigation"

export default function LocaleSwitcher() {
  const t = useTranslations("IndexPage")

  const locale = useLocale()
  const otherLocale = locale === "en" ? "th" : "en"
  const pathname = usePathname()

  return (
    <button
      onClick={() => (window.location.href = `/${otherLocale}${pathname}`)}
      color="success"
    >
      {t("button")} {otherLocale === "en" ? "🇬🇧" : "🇹🇭"}
    </button>
  )
}
