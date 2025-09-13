import React from 'react'
import Link from 'next/link'

export default function FeaturedProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">Featured Projects</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Highlighted projects that showcase my best work and technical expertise.
        </p>
      </div>

      <div className="space-y-12">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 p-8 bg-white dark:bg-slate-800 hover:shadow-xl transition-all duration-300">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center">
              <svg className="w-8 h-8 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">Project Aurora</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                A cutting-edge web application built with Next.js 14, featuring real-time collaboration,
                advanced state management, and a modern UI designed for optimal user experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm">Next.js</span>
                <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm">Tailwind CSS</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm">Prisma</span>
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium">Live Demo →</a>
                <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 font-medium">GitHub →</a>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 p-8 bg-white dark:bg-slate-800 hover:shadow-xl transition-all duration-300">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-cyan-100 dark:bg-cyan-900/30 rounded-xl flex items-center justify-center">
              <svg className="w-8 h-8 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">StaticBlog CMS</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                A headless content management system designed for static site generation.
                Features include markdown support, SEO optimization, and automated deployment.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-900/30 text-gray-600 dark:text-gray-400 rounded-full text-sm">MDX</span>
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium">Live Demo →</a>
                <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 font-medium">GitHub →</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <Link
          href="/projects"
          className="inline-flex items-center px-8 py-4 border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 font-semibold rounded-full hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-slate-900 transition-all duration-300"
        >
          ← Back to All Projects
        </Link>
      </div>
    </div>
  )
}
