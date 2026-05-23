import { next } from '@vercel/functions/middleware'
import { RESOURCE_SLUGS } from './generated/middleware-paths.js'
import {
  normalizePathname,
  isLegacyGonePath,
  resolvePathRedirect,
  resolveResourceSlugRedirect,
} from './src/seo/legacy-seo.js'

const slugSet = new Set(RESOURCE_SLUGS)

const NOT_FOUND_HTML = `<!DOCTYPE html>
<html lang="en-ZA">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <meta name="robots" content="noindex,follow"/>
  <title>404 — Page not found | Zar Media Group</title>
  <style>
    body{font-family:system-ui,-apple-system,sans-serif;background:#0a1628;color:#f8fafc;margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:1.5rem}
    a{color:#c9a84c;text-decoration:none}
    a:hover{text-decoration:underline}
    h1{font-size:1.125rem;font-weight:600;margin:0 0 .75rem}
    p{opacity:.75;margin:0 0 1.25rem;font-size:.9375rem}
  </style>
</head>
<body>
  <div>
    <h1>Page not found</h1>
    <p>This URL does not exist on zarmediagroup.com.</p>
    <a href="/">Back to home</a>
  </div>
</body>
</html>`

function notFoundResponse() {
  return new Response(NOT_FOUND_HTML, {
    status: 404,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store',
      'X-Robots-Tag': 'noindex, follow',
    },
  })
}

function redirectTo(request, targetPath, status = 308) {
  const dest = new URL(targetPath, request.url)
  dest.search = ''
  return Response.redirect(dest.href, status)
}

export const config = {
  matcher: ['/((?!api/).*)'],
}

/**
 * Block legacy WordPress / junk URLs only.
 * All other paths pass through to the SPA (Vite rewrite → index.html).
 * Resource articles stay allowlisted so old slugs cannot be guessed.
 */
export default function middleware(request) {
  const url = new URL(request.url)
  const pathname = normalizePathname(url.pathname)

  if (pathname.startsWith('/api/')) return next()

  if (isLegacyGonePath(pathname)) return notFoundResponse()

  if (url.searchParams.has('page_id')) return redirectTo(request, '/')
  if (url.searchParams.has('elementor_library')) return notFoundResponse()

  const pathRedirect = resolvePathRedirect(pathname)
  if (pathRedirect) return redirectTo(request, pathRedirect)

  if (pathname.startsWith('/resources/')) {
    const slug = pathname.slice('/resources/'.length).split('/')[0]
    const mapped = slug ? resolveResourceSlugRedirect(slug) : null
    if (mapped) return redirectTo(request, `/resources/${mapped}`)
    if (slug && slugSet.has(slug)) return next()
    return notFoundResponse()
  }

  const lastSeg = pathname.split('/').pop() || ''
  if (lastSeg.includes('.')) return next()

  return next()
}
