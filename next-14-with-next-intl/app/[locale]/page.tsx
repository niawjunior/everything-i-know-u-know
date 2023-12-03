import { useTranslations } from "next-intl"
import { unstable_setRequestLocale } from "next-intl/server"
import LocaleSwitcher from "./components/LocaleSwitcher"

type Props = {
  params: { locale: string }
}

export default function IndexPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale)
  const t = useTranslations("IndexPage")

  return (
    <div>
      {t("title")} <LocaleSwitcher />
    </div>
  )
}
