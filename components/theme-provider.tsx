"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { clear } from "console"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}clear