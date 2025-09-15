'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from './LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative w-full max-w-full overflow-hidden rounded-3xl shadow-2xl">
      {/* moving gradient base to give soft motion (no white) */}
      <div className="absolute inset-0 bg-gothic-gradient opacity-40 pointer-events-none" />

      {/* content area */}
      <div className="relative w-full max-w-full h-[50vh] sm:h-[60vh] md:h-[80vh] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full max-w-full text-center px-4 sm:px-6 pb-8"
        >
          <h1
            className="text-2xl sm:text-3xl md:text-6xl lg:text-7xl font-bold gothic-title bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent mb-4"
          >
            Hi, I'm DzCoder
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-slate-300 mb-6 sm:mb-8 gothic-subtitle">
            {t('Fullstack Engineer crafting modern web experiences with a dark gothic aesthetic') || 'heroSubtitle'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
            <Link
              href="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-[#7a003c] text-white font-semibold rounded-full hover:bg-[#9b174c] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-800/50"
            >
              {t('viewMyWork') || 'View My Work'}
              <svg className="ml-2 w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#7a003c] text-[#7a003c] dark:text-[#9b174c] font-semibold rounded-full hover:bg-[#7a003c] hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              {t('getInTouch') || 'Get In Touch'}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
