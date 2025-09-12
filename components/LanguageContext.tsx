'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'en' | 'id'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations: Record<Language, Record<string, string>> = {
  en: {
    home: 'Home',
    projects: 'Projects',
    featured: 'Featured',
    allProjects: 'All Projects',
    blog: 'Blog',
    about: 'About',
    contact: 'Contact',
    downloadResume: 'Download Resume',
    language: 'Language',
    viewMyWork: 'View My Work',
    getInTouch: 'Get In Touch',
    featuredProjects: 'Featured Projects',
    latestPosts: 'Latest Posts',
    technologies: 'Technologies I Work With',
  },
  id: {
    home: 'Beranda',
    projects: 'Proyek',
    featured: 'Unggulan',
    allProjects: 'Semua Proyek',
    blog: 'Blog',
    about: 'Tentang',
    contact: 'Kontak',
    downloadResume: 'Unduh Resume',
    language: 'Bahasa',
    viewMyWork: 'Lihat Karya Saya',
    getInTouch: 'Hubungi Saya',
    featuredProjects: 'Proyek Unggulan',
    latestPosts: 'Postingan Terbaru',
    technologies: 'Teknologi yang Saya Gunakan',
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language
    if (saved && ['en', 'id'].includes(saved)) {
      setLanguageState(saved)
    } else {
      // fallback ke browser language
      const browserLang = navigator.language.startsWith('id') ? 'id' : 'en'
      setLanguageState(browserLang)
      localStorage.setItem('language', browserLang)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: string) => {
    return (
      translations[language][key as keyof typeof translations['en']] ||
      translations['en'][key as keyof typeof translations['en']] ||
      key
    )
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
