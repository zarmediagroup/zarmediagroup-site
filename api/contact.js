/**
 * Vercel Serverless Function — contact form email (Resend).
 * Env (set in Vercel Dashboard → Project → Settings → Environment Variables):
 *   RESEND_API_KEY   — required (https://resend.com/api-keys)
 *   CONTACT_TO_EMAIL — recipient(s); comma-separated optional (default: info@zarmediagroup.com)
 *   RESEND_FROM      — verified sender on a SUBDOMAIN Resend recommends for deliverability, e.g.
 *                      "Zar Media Group <notifications@mail.zarmediagroup.com>"
 *                      Avoid using the same address as CONTACT_TO_EMAIL as From (e.g. info→info),
 *                      which often causes greylisting / “Delivery delayed” on Google and others.
 *                      Verify the subdomain domain in Resend and add its DNS records before going live.
 */

function clean(str) {
  return String(str ?? '')
    .replace(/[<>]/g, '')
    .trim()
}

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = []
    req.on('data', (c) => chunks.push(c))
    req.on('end', () => {
      try {
        const raw = Buffer.concat(chunks).toString('utf8')
        resolve(raw ? JSON.parse(raw) : {})
      } catch (e) {
        reject(e)
      }
    })
    req.on('error', reject)
  })
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ success: false, message: 'Method not allowed.' })
    return
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    res.status(503).json({
      success: false,
      message: 'Email service is not configured. Please email info@zarmediagroup.com directly.',
    })
    return
  }

  let body
  try {
    if (req.body && typeof req.body === 'object' && !Buffer.isBuffer(req.body)) {
      body = req.body
    } else if (typeof req.body === 'string' && req.body.length) {
      body = JSON.parse(req.body)
    } else {
      body = await readJsonBody(req)
    }
  } catch {
    res.status(400).json({ success: false, message: 'Invalid request.' })
    return
  }

  if (body?.websiteTrap) {
    res.status(400).json({ success: false, message: 'Invalid request.' })
    return
  }

  const firstName = clean(body?.firstName)
  const lastName = clean(body?.lastName)
  const email = clean(body?.email)
  const phone = clean(body?.phone)
  const firmName = clean(body?.firmName)
  const firmType = clean(body?.firmType)
  const website = clean(body?.website)
  const message = clean(body?.message)
  const sourceRaw = clean(body?.source).toLowerCase()
  const sourceLabel =
    sourceRaw === 'lp_client_portal_demo'
      ? 'Google Ads landing — client portal demo'
      : sourceRaw === 'chat_float'
        ? 'floating chat assistant'
        : sourceRaw === 'chat'
          ? 'contact assistant'
          : 'contact form'
  const services = Array.isArray(body?.services)
    ? body.services.map((s) => clean(s)).filter(Boolean).join(', ')
    : ''

  if (!firstName || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    res.status(422).json({ success: false, message: 'Name and a valid email are required.' })
    return
  }

  if (
    firstName.length > 80 ||
    lastName.length > 80 ||
    firmName.length > 120 ||
    message.length > 3000
  ) {
    res.status(422).json({ success: false, message: 'One or more fields are too long.' })
    return
  }

  const toRaw = process.env.CONTACT_TO_EMAIL || 'info@zarmediagroup.com'
  const toList = toRaw.split(',').map((s) => s.trim()).filter(Boolean)
  const from = process.env.RESEND_FROM || 'Zar Media Group <onboarding@resend.dev>'

  const text = `
==============================================
  NEW ENQUIRY — ZAR MEDIA GROUP
==============================================

NAME:       ${firstName} ${lastName}
EMAIL:      ${email}
PHONE:      ${phone}

FIRM NAME:  ${firmName}
FIRM TYPE:  ${firmType}
WEBSITE:    ${website}

SERVICES OF INTEREST:
  ${services}

MESSAGE:
  ${message}

==============================================
  Sent via zarmediagroup.com ${sourceLabel}
==============================================
`.trim()

  const subject =
    sourceRaw === 'lp_client_portal_demo'
      ? `New Demo Request (Google Ads) — ${firstName} ${lastName}`.trim()
      : sourceRaw === 'chat_float'
        ? `New Floating Chat Enquiry — ${firstName} ${lastName}`.trim()
        : sourceRaw === 'chat'
          ? `New Contact Chat Enquiry — ${firstName} ${lastName}`.trim()
          : `New Contact Form Submission — ${firstName} ${lastName}`

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: toList,
        reply_to: email,
        subject,
        text,
      }),
    })

    const data = await r.json().catch(() => ({}))

    if (!r.ok) {
      res.status(500).json({
        success: false,
        message: data?.message || 'Failed to send. Please try again or email us directly.',
      })
      return
    }

    res.status(200).json({ success: true, message: 'Your message has been sent.' })
  } catch {
    res.status(500).json({
      success: false,
      message: 'Failed to send. Please try again or email us directly.',
    })
  }
}
