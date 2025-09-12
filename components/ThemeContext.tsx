'use client'

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Theme = 'light' | 'dark' | 'gothic' | 'modern' | 'hybrid'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  // 🔹 Saat pertama kali mount, cek localStorage / sistem
  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme') as Theme
    if (savedTheme) {
      setThemeState(savedTheme)
    } else {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      setThemeState(systemTheme)
    }
  }, [])

  // 🔹 Apply ke <html> setiap kali theme berubah
  useEffect(() => {
    if (mounted) {
      const root = window.document.documentElement
      root.classList.remove('light', 'dark', 'gothic', 'modern', 'hybrid')
      root.classList.add(theme)
      localStorage.setItem('theme', theme)
    }
  }, [theme, mounted])

  // 🔹 Untuk set theme manual
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  // 🔹 Untuk toggle sederhana (antara light ↔ dark)
  const toggleTheme = () => {
    setThemeState(prev =>
      prev === 'light' ? 'dark' : prev === 'dark' ? 'gothic' : prev === 'gothic' ? 'modern' : prev === 'modern' ? 'hybrid' : 'light'
    )
  }

  // 🔹 Render children meskipun belum mounted (biar no flicker)
  if (!mounted) {
    return <>{children}</>
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    return {
      theme: 'light' as const,
      setTheme: () => {},
      toggleTheme: () => {}
    }
  }
  return context
}
