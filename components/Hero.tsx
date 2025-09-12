'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from './LanguageContext'

const IMAGES = [
  '/gothic_assets/gothic1.jpeg',
  '/gothic_assets/gothic2.jpeg',
  '/gothic_assets/gothic3.webp',
]

export default function Hero() {
  const { t } = useLanguage()
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % IMAGES.length)
    }, 5000) // ganti interval kalau mau lebih cepat/lambat
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative w-full overflow-hidden rounded-3xl shadow-2xl">
      {/* moving gradient base to give soft motion (no white) */}
      <div className="absolute inset-0 bg-gothic-gradient opacity-40 pointer-events-none" />

      {/* image area */}
      <div className="relative h-[80vh]">
        {IMAGES.map((src, i) => (
          <motion.div
            key={src}
            initial={{ opacity: 0 }}
            animate={{ opacity: i === index ? 1 : 0 }}
            transition={{ duration: 1.0, ease: 'easeInOut' }}
            className="absolute inset-0"
            style={{ zIndex: i === index ? 2 : 1 }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${src})`, filter: 'brightness(0.7) contrast(1.05)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/60" />
          </motion.div>
        ))}

        {/* content on top */}
        <div className="relative z-30 flex h-full items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center px-6"
          >
            <h1
              className="text-5xl md:text-7xl font-bold gothic-title bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent mb-4"
            >
              Hi, I'm DzCoder
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 gothic-subtitle">
              {t('Fullstack Engineer crafting modern web experiences with a dark gothic aesthetic') || 'heroSubtitle'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/projects"
                className="inline-flex items-center px-8 py-4 bg-[#7a003c] text-white font-semibold rounded-full hover:bg-[#9b174c] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-800/50"
              >
                {t('viewMyWork') || 'View My Work'}
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-[#7a003c] text-[#7a003c] dark:text-[#9b174c] font-semibold rounded-full hover:bg-[#7a003c] hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                {t('getInTouch') || 'Get In Touch'}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
