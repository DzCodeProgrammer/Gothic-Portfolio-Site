import React from 'react'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">About Me</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Fullstack Engineer passionate about creating modern web experiences
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">Who I Am</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
            I'm DzCoder, a fullstack engineer with expertise in modern web technologies.
            I specialize in building scalable web applications using Next.js, TypeScript,
            and Tailwind CSS. My passion lies in creating user-friendly interfaces and
            robust backend systems.
          </p>
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
            When I'm not coding, you can find me exploring new technologies, contributing
            to open source projects, or sharing my knowledge through blog posts and tutorials.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">Technologies</h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: 'Next.js', url: 'https://nextjs.org/' },
              { name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
              { name: 'React', url: 'https://reactjs.org/' },
              { name: 'Node.js', url: 'https://nodejs.org/' },
              { name: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
              { name: 'PostgreSQL', url: 'https://www.postgresql.org/' },
              { name: 'Prisma', url: 'https://www.prisma.io/' },
              { name: 'Git', url: 'https://git-scm.com/' }
            ].map((tech) => (
              <Link
                key={tech.name}
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 bg-slate-50 dark:bg-slate-700 rounded-lg text-center font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors"
              >
                {tech.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Let's Work Together</h2>
        <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
          I'm always interested in new opportunities and exciting projects.
          Whether you have a project in mind or just want to chat about technology,
          feel free to reach out!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-all duration-300"
          >
            Get In Touch
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center px-8 py-4 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-300"
          >
            View My Work
          </Link>
        </div>
      </div>
    </div>
  )
}
