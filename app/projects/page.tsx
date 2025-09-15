import React from 'react'
import Link from 'next/link'

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">My Projects</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          A collection of projects I've worked on, showcasing my skills in web development and software engineering.
        </p>
      </div>

      <div className="w-full max-w-full grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Placeholder project cards */}
        <div className="w-full max-w-full rounded-2xl border border-slate-200 dark:border-slate-700 p-4 sm:p-6 bg-white dark:bg-slate-800 hover:shadow-lg transition-all duration-300">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">Project Aurora</h3>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-4">A modern web application built with Next.js and TypeScript.</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-2 sm:px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-xs sm:text-sm">Next.js</span>
            <span className="px-2 sm:px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 rounded-full text-xs sm:text-sm">TypeScript</span>
          </div>
          <Link href="/projects/featured" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium text-sm sm:text-base">
            View Details →
          </Link>
        </div>

        <div className="w-full max-w-full rounded-2xl border border-slate-200 dark:border-slate-700 p-4 sm:p-6 bg-white dark:bg-slate-800 hover:shadow-lg transition-all duration-300">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">StaticBlog CMS</h3>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-4">A headless CMS for static blog generation.</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-2 sm:px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-xs sm:text-sm">Node.js</span>
            <span className="px-2 sm:px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs sm:text-sm">React</span>
          </div>
          <Link href="/projects" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium text-sm sm:text-base">
            View Details →
          </Link>
        </div>

        <div className="w-full max-w-full rounded-2xl border border-slate-200 dark:border-slate-700 p-4 sm:p-6 bg-white dark:bg-slate-800 hover:shadow-lg transition-all duration-300">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">Enginx API</h3>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-4">RESTful API for content management.</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-2 sm:px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-xs sm:text-sm">Express</span>
            <span className="px-2 sm:px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-full text-xs sm:text-sm">MongoDB</span>
          </div>
          <Link href="/projects" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium text-sm sm:text-base">
            View Details →
          </Link>
        </div>
      </div>

      <div className="text-center mt-12">
        <Link
          href="/projects/featured"
          className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-all duration-300"
        >
          View Featured Projects
        </Link>
      </div>
    </div>
  )
}
