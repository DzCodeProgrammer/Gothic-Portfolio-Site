/**
 * Seed script (node+ts): writes fallback JSON data to /data if DB not used.
 * Usage: ts-node scripts/seed.ts
 */
import fs from 'fs'
import path from 'path'

// Type definitions for better type safety
interface Project {
  title: string
  slug: string
  excerpt: string
  featured: boolean
  tags: string[]
  cover: string
  content: string
}

interface Post {
  title: string
  slug: string
  excerpt: string
  file: string
}

// Utility function to validate data structure
function validateProjects(projects: any[]): projects is Project[] {
  return projects.every(project =>
    typeof project.title === 'string' &&
    typeof project.slug === 'string' &&
    typeof project.excerpt === 'string' &&
    typeof project.featured === 'boolean' &&
    Array.isArray(project.tags) &&
    typeof project.cover === 'string' &&
    typeof project.content === 'string'
  )
}

function validatePosts(posts: any[]): posts is Post[] {
  return posts.every(post =>
    typeof post.title === 'string' &&
    typeof post.slug === 'string' &&
    typeof post.excerpt === 'string' &&
    typeof post.file === 'string'
  )
}

// Main seeding function with error handling
function seedData(): void {
  try {
    const dataDir = path.join(process.cwd(), 'data')

    // Ensure data directory exists
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true })
      console.log('Created data directory')
    }

    // Project data
    const projects: Project[] = [
      {
        title: 'Project Aurora',
        slug: 'project-aurora',
        excerpt: 'A demo project showing UX and design system.',
        featured: true,
        tags: ['design', 'frontend'],
        cover: '/images/aurora.jpg',
        content: 'data/projects/project-aurora.mdx'
      },
      {
        title: 'EngineX - API Platform',
        slug: 'enginx-api',
        excerpt: 'Scalable API platform with observability.',
        featured: false,
        tags: ['backend', 'api'],
        cover: '/images/enginx.jpg',
        content: 'data/projects/enginx-api.mdx'
      },
      {
        title: 'StaticBlog CMS',
        slug: 'staticblog-cms',
        excerpt: 'MDX-first content workflow and editor integration.',
        featured: false,
        tags: ['cms', 'mdx'],
        cover: '/images/staticblog.jpg',
        content: 'data/projects/staticblog-cms.mdx'
      }
    ]

    // Validate projects data
    if (!validateProjects(projects)) {
      throw new Error('Invalid projects data structure')
    }

    // Write projects.json
    const projectsPath = path.join(dataDir, 'projects.json')
    fs.writeFileSync(projectsPath, JSON.stringify(projects, null, 2))
    console.log('Successfully wrote data/projects.json')

    // Post data
    const posts: Post[] = [
      { title: 'Launching Aurora', slug: 'launching-aurora', excerpt: 'Announcing project aurora.', file: 'data/posts/launching-aurora.mdx' },
      { title: 'Scaling APIs', slug: 'scaling-apis', excerpt: 'Best practices for API scaling.', file: 'data/posts/scaling-apis.mdx' },
      { title: 'MDX Tips', slug: 'mdx-tips', excerpt: 'How to write rich MDX content.', file: 'data/posts/mdx-tips.mdx' },
      { title: 'Accessibility first', slug: 'accessibility-first', excerpt: 'Designing for all users.', file: 'data/posts/accessibility-first.mdx' }
    ]

    // Validate posts data
    if (!validatePosts(posts)) {
      throw new Error('Invalid posts data structure')
    }

    // Write posts.json
    const postsPath = path.join(dataDir, 'posts.json')
    fs.writeFileSync(postsPath, JSON.stringify(posts, null, 2))
    console.log('Successfully wrote data/posts.json')

    console.log('Seeding completed successfully!')

  } catch (error) {
    console.error('Error during seeding:', error)
    process.exit(1)
  }
}

// Execute the seeding function
seedData()
