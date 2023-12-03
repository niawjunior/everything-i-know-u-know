"use client"

import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl"

const ProviderPage = ({
  children,
  params: { locale },
  messages,
}: {
  children: React.ReactNode
  params: { locale: string }
  messages: AbstractIntlMessages
}) => {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  )
}

export default ProviderPage
