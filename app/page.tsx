'use client'
import React from 'react'
import Link from 'next/link'
import { useLanguage } from '../components/LanguageContext'
import Hero from '../components/Hero'

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <div className="space-y-16">
      {/* Hero Section (now from components/Hero) */}
      <Hero />

      {/* Featured Sections */}
      <section className="grid gap-8 md:grid-cols-2">
        <Link href="/projects" className="group">
          <div className="gothic-card p-8 hover:shadow-red-700/40">
            <div className="flex items-center mb-4">
              <div
                className="p-3 bg-[#2a0a0a] rounded-xl mr-4 group-hover:bg-[#7a003c]/50 transition-colors"
              >
                <svg
                  className="w-8 h-8 text-red-500 dark:text-red-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h2
                className="text-2xl md:text-3xl font-bold gothic-title text-slate-100 group-hover:text-red-500 transition-colors"
              >
                {t('featuredProjects') || 'Featured Projects'}
              </h2>
            </div>
            <p className="text-slate-400 leading-relaxed gothic-subtitle">
              Explore my latest work including web applications, APIs, and innovative gothic-inspired solutions.
            </p>
            <div className="mt-6 flex items-center text-red-500 font-medium">
              {t('projects') || 'Projects'}
              <svg
                className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </Link>

        <Link href="/blog" className="group">
          <div className="gothic-card p-8 hover:shadow-purple-700/40">
            <div className="flex items-center mb-4">
              <div
                className="p-3 bg-[#1a0a2a] rounded-xl mr-4 group-hover:bg-purple-900/50 transition-colors"
              >
                <svg
                  className="w-8 h-8 text-purple-500 dark:text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h2
                className="text-2xl md:text-3xl font-bold gothic-title text-slate-100 group-hover:text-purple-500 transition-colors"
              >
                {t('latestPosts') || 'Latest Posts'}
              </h2>
            </div>
            <p className="text-slate-400 leading-relaxed gothic-subtitle">
              Read my thoughts on web development, best practices, and insights — all wrapped in a gothic tone.
            </p>
            <div className="mt-6 flex items-center text-purple-500 font-medium">
              {t('blog') || 'Blog'}
              <svg
                className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </Link>
      </section>

      {/* Skills Preview */}
      <section className="text-center py-16">
        <h2 className="text-2xl md:text-4xl font-bold gothic-title text-slate-100 mb-8">
          {t('technologies') || 'Technologies I Work With'}
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { name: 'Next.js', color: 'hover:text-white' },
            { name: 'TypeScript', color: 'hover:text-blue-400' },
            { name: 'Tailwind CSS', color: 'hover:text-cyan-400' },
            { name: 'React', color: 'hover:text-blue-300' },
            { name: 'Node.js', color: 'hover:text-green-500' },
            { name: 'PostgreSQL', color: 'hover:text-indigo-400' }
          ].map((tech) => (
            <div
              key={tech.name}
              className={`px-6 py-3 gothic-card rounded-full font-medium text-slate-300 transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${tech.color}`}
            >
              {tech.name}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
