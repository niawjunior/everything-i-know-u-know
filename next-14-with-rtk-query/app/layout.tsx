import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ReduxProviders } from "./redux/provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Next 14 with RTK Query",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProviders>{children}</ReduxProviders>
      </body>
    </html>
  )
}
