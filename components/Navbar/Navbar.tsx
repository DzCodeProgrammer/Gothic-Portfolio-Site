'use client'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '../LanguageContext'
import { useTheme } from '../ThemeContext'
import Clock from '../Clock'

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 transform hover:scale-110 
      hover:text-[#7a003c] dark:hover:text-[#ff4da6] gothic-link"
    >
      {children}
    </Link>
  )
}

export default function Navbar() {
  const { language: locale, setLanguage, t } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement | null>(null)
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // close on outside click for mobile menu
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!mobileMenuRef.current) return
      if (!mobileMenuRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    if (open) document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [open])

  // close dropdown on outside click
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!dropdownRef.current) return
      if (!dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    if (dropdownOpen) document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [dropdownOpen])

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 gothic-header ${
        isScrolled ? 'bg-white dark:bg-[#0a0a0a]' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <span
              className={`font-gothic text-2xl tracking-widest transition-all duration-300 ${
                isScrolled ? 'text-[#7a003c]' : 'text-white dark:text-gray-200'
              }`}
            >
              Gothic<span className="text-[#7a003c]">Portfolio</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex md:items-center md:gap-2" aria-label="Primary">
            <NavLink href="/">{t('home')}</NavLink>

            <div className="relative" ref={dropdownRef}>
              <button
                className="px-3 py-2 rounded-md text-sm gothic-link inline-flex items-center gap-1 
                hover:text-[#7a003c] focus:outline-none focus:ring-2 focus:ring-[#7a003c]"
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
                id="projects-menu"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                {t('projects')}
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.12.996l-4.25 4.657a.75.75 0 01-1.08 0L5.21 8.28a.75.75 0 01.02-1.07z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {dropdownOpen && (
                <div
                  className="absolute left-0 mt-2 w-48 rounded-md border border-[#7a003c] bg-black text-white shadow-lg z-50 gothic-dropdown"
                  role="menu"
                  aria-labelledby="projects-menu"
                >
                  <Link
                    href="/projects/featured"
                    className="block px-3 py-2 rounded hover:bg-[#7a003c]/20"
                    onClick={() => setDropdownOpen(false)}
                  >
                    {t('featured')}
                  </Link>
                  <Link
                    href="/projects"
                    className="block px-3 py-2 rounded hover:bg-[#7a003c]/20"
                    onClick={() => setDropdownOpen(false)}
                  >
                    {t('allProjects')}
                  </Link>
                </div>
              )}
            </div>

            <NavLink href="/blog">{t('blog')}</NavLink>
            <NavLink href="/about">{t('about')}</NavLink>
            <NavLink href="/contact">{t('contact')}</NavLink>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          {/* Real-time Clock */}
          <Clock />

          {/* Language switcher */}
          <div className="hidden md:block">
            <select
              id="lang"
              name="lang"
              className="rounded-md border bg-black text-white border-[#7a003c] px-2 py-1 text-sm gothic-select"
              value={locale}
              onChange={(e) => setLanguage(e.target.value as 'en' | 'id')}
            >
              <option value="en">EN</option>
              <option value="id">ID</option>
            </select>
          </div>

          <a
            href="/resume.pdf"
            download="resume.pdf"
            className="hidden md:inline-block rounded-md bg-[#7a003c] px-3 py-2 text-sm font-semibold text-white hover:bg-[#a6004f] gothic-btn"
          >
            Download Resume
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden rounded-md p-2 gothic-btn"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((s) => !s)}
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile slide-over */}
      {open && (
        <div
          ref={mobileMenuRef}
          className="fixed inset-0 z-50 bg-black text-white transform transition-transform duration-300 ease-in-out gothic-mobile"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <div className="mx-auto max-w-md px-6 pt-6">
            <button
              className="mb-4 px-3 py-2 rounded-md gothic-btn"
              onClick={() => setOpen(false)}
              aria-label="Close mobile menu"
            >
              ✕ Close
            </button>
            <nav className="flex flex-col gap-3" aria-label="Mobile navigation">
              <Link href="/" className="px-3 py-2 rounded gothic-link" onClick={() => setOpen(false)}>
                {t('home')}
              </Link>
              <details className="group">
                <summary className="cursor-pointer px-3 py-2 rounded gothic-link">
                  {t('projects')}
                </summary>
                <div className="pl-4 mt-2">
                  <Link
                    href="/projects/featured"
                    className="block px-3 py-2 rounded gothic-link"
                    onClick={() => setOpen(false)}
                  >
                    {t('featured')}
                  </Link>
                  <Link
                    href="/projects"
                    className="block px-3 py-2 rounded gothic-link"
                    onClick={() => setOpen(false)}
                  >
                    {t('allProjects')}
                  </Link>
                </div>
              </details>
              <Link href="/blog" className="px-3 py-2 rounded gothic-link" onClick={() => setOpen(false)}>
                {t('blog')}
              </Link>
              <Link href="/about" className="px-3 py-2 rounded gothic-link" onClick={() => setOpen(false)}>
                {t('about')}
              </Link>
              <Link href="/contact" className="px-3 py-2 rounded gothic-link" onClick={() => setOpen(false)}>
                {t('contact')}
              </Link>
              <a
                href="/resume.pdf"
                download="resume.pdf"
                className="px-3 py-2 rounded-md bg-[#7a003c] text-white font-semibold hover:bg-[#a6004f] gothic-btn inline-block text-center"
                onClick={() => setOpen(false)}
              >
                Download Resume
              </a>
              <div className="px-3 py-2">
                <label htmlFor="mobile-lang" className="block text-sm font-medium mb-1">
                  {t('language')}
                </label>
                <select
                  id="mobile-lang"
                  name="mobile-lang"
                  className="w-full rounded-md border bg-black text-white border-[#7a003c] px-2 py-1 text-sm gothic-select"
                  value={locale}
                  onChange={(e) => setLanguage(e.target.value as 'en' | 'id')}
                >
                  <option value="en">EN</option>
                  <option value="id">ID</option>
                </select>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
