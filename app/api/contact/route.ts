import { NextResponse } from 'next/server'

/**
 * Simple contact API route.
 * - validates required fields
 * - rate-limits via simple in-memory bucket (per server instance)
 * - if SENDGRID_API_KEY provided, attempts to send email (placeholder)
 * - otherwise, writes to /data/contacts.json (append)
 */

type ContactBody = {
  name?: string
  email?: string
  message?: string
}

const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const RATE_LIMIT_MAX = 10
const buckets: Record<string, { count: number; reset: number }> = {}

function getIp(req: Request) {
  try {
    const ip = req.headers.get('x-forwarded-for') || 'unknown'
    return ip
  } catch (e) {
    return 'unknown'
  }
}

export async function POST(req: Request) {
  try {
    const ip = getIp(req)
    const now = Date.now()
    const bucket = buckets[ip] || { count: 0, reset: now + RATE_LIMIT_WINDOW }
    if (now > bucket.reset) {
      bucket.count = 0
      bucket.reset = now + RATE_LIMIT_WINDOW
    }
    bucket.count++
    buckets[ip] = bucket
    if (bucket.count > RATE_LIMIT_MAX) {
      return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 })
    }

    const body: ContactBody = await req.json()
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    // Basic server-side validation
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(body.email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    // If SENDGRID_API_KEY provided, send email (placeholder)
    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
    if (SENDGRID_API_KEY) {
      // NOTE: to actually send, install @sendgrid/mail and implement here.
      // Keeping placeholder to avoid adding dependencies in minimal starter.
      console.log('Would send email via SendGrid', { to: process.env.CONTACT_TO_EMAIL || 'you@example.com' })
    } else {
      // append to data/contacts.json
      const fs = require('fs')
      const path = require('path')
      const dataDir = path.join(process.cwd(), 'data')
      if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true })
      const contactsFile = path.join(dataDir, 'contacts.json')
      const entries = fs.existsSync(contactsFile) ? JSON.parse(fs.readFileSync(contactsFile, 'utf-8')) : []
      entries.push({ ...body, ip, createdAt: new Date().toISOString() })
      fs.writeFileSync(contactsFile, JSON.stringify(entries, null, 2))

      // Send message to WhatsApp and Instagram via webhook (e.g., Zapier or Make.com)
      const webhookUrl = process.env.CONTACT_WEBHOOK_URL // Set this to your Zapier/Make webhook URL

      const messageText = `New contact message from ${body.name} (${body.email}):\n${body.message}`

      if (webhookUrl) {
        fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: body.name,
            email: body.email,
            message: body.message,
            text: messageText,
            waNumber: '+6281217618503',
            igUrl: 'https://www.instagram.com/dzikripendragon/'
          }),
        }).catch((err: any) => console.error('Webhook error:', err))
      } else {
        console.log('No webhook URL set, message not sent to WA/IG')
      }
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
