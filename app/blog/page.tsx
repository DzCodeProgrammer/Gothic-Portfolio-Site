import React from 'react'
import Link from 'next/link'

export default function BlogPage() {
  const posts = [
    {
      title: "Accessibility First",
      slug: "accessibility-first",
      excerpt: "Designing for all users.",
      date: "2025-05-05"
    },
    {
      title: "Launching Aurora",
      slug: "launching-aurora",
      excerpt: "The journey of building and launching Project Aurora.",
      date: "2024-12-15"
    },
    {
      title: "MDX Tips",
      slug: "mdx-tips",
      excerpt: "Best practices for using MDX in your projects.",
      date: "2024-11-20"
    },
    {
      title: "Scaling APIs",
      slug: "scaling-apis",
      excerpt: "Strategies for scaling RESTful APIs effectively.",
      date: "2024-10-10"
    }
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">Blog</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Thoughts on web development, best practices, and insights from building modern applications.
        </p>
      </div>

      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="rounded-2xl border border-slate-200 dark:border-slate-700 p-8 bg-white dark:bg-slate-800 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>
              <time className="text-sm text-slate-500 dark:text-slate-400" dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              {post.excerpt}
            </p>
            <Link
              href={`/blog/${post.slug}`}
              className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium inline-flex items-center"
            >
              Read More
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </article>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-slate-600 dark:text-slate-400">
          More posts coming soon! Follow for updates.
        </p>
      </div>
    </div>
  )
}
