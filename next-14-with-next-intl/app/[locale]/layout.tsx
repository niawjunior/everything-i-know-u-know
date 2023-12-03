import { Inter } from "next/font/google"
import { notFound } from "next/navigation"
import { getTranslations, unstable_setRequestLocale } from "next-intl/server"
import { ReactNode } from "react"
import { locales } from "../config"
import ProviderPage from "./provider"

const inter = Inter({ subsets: ["latin"] })

type Props = {
  children: ReactNode
  params: { locale: string }
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">) {
  const t = await getTranslations({ locale, namespace: "IndexPage" })

  return {
    title: t("title"),
  }
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound()

  let messages
  try {
    messages = (await import(`../messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

  // Enable static rendering
  unstable_setRequestLocale(locale)

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <ProviderPage params={{ locale }} messages={messages}>
          {children}
        </ProviderPage>
      </body>
    </html>
  )
}
