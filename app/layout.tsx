import './globals.css'
import React, { ReactNode } from 'react'
import Navbar from '../components/Navbar/Navbar'
import { LanguageProvider } from '../components/LanguageContext'
import { ThemeProvider } from '../components/ThemeContext'
import { MediaProvider } from '../components/MediaContext'
import PageTransition from '../components/PageTransition'
import BackgroundMedia from '../components/BackgroundMedia'

import type { Viewport } from 'next'

export const metadata = {
  title: 'Gothic Portfolio',
  description: 'A dark, elegant...',
  manifest: '/manifest.json',
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'Gothic Portfolio',
  },
}

// tambahkan export viewport
export const viewport: Viewport = {
  themeColor: '#000000',
}


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    // remove transition-colors class here to avoid animating root color
    <html lang="en" style={{ backgroundColor: '#000' }}>
      {/* Force body bg inline to prevent flash before CSS loads */}
      <body
        style={{ backgroundColor: '#000' }}
        className="min-h-screen text-slate-100 antialiased gothic-body"
      >
        <ThemeProvider>
          <LanguageProvider>
            <MediaProvider>
              <BackgroundMedia />
              <Navbar />
              <main
                id="content"
              className="mx-auto max-w-full sm:max-w-3xl md:max-w-5xl lg:max-w-6xl px-2 sm:px-4 py-8 gothic-main relative z-10"
                style={{ backgroundColor: 'transparent' }}
              >
                <PageTransition>
                  {children}
                </PageTransition>
              </main>
              <footer
                className="text-center py-8 text-sm gothic-footer relative z-10"
              >
                <span className="block">
                  © {new Date().getFullYear()} • Gothic Portfolio Starter
                </span>
                <span className="block mt-1 text-xs text-slate-500 dark:text-slate-400">
                  Crafted with passion, elegance, and a touch of darkness
                </span>
              </footer>
            </MediaProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
