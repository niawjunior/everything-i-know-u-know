"use client"

import { CssVarsProvider } from "@mui/joy"
import theme from "./theme"

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <CssVarsProvider theme={theme}>{children}</CssVarsProvider>
    </>
  )
}

export default ThemeProvider
