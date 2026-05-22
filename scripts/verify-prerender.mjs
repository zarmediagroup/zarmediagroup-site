/**
 * Validates prerendered HTML contains SEO essentials (run after postbuild).
 */
import { readFileSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { PRERENDER_PATHS } from '../generated/middleware-paths.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = join(__dirname, '..', 'dist')

const KEY_ROUTES = [
  '/',
  '/services',
  '/services/website-as-a-service',
  '/services/client-portal',
  '/resources/accounting-firm-website-design-guide',
  '/contact',
]

function outFile(route) {
  if (route === '/') return join(distDir, 'index.html')
  return join(distDir, route.replace(/^\//, ''), 'index.html')
}

function checkHtml(route, html) {
  const errors = []
  if (!/<h1[^>]*>[\s\S]*?\S[\s\S]*?<\/h1>/i.test(html)) errors.push('missing h1 body content')
  if (!/property="og:title"[^>]+content="[^"]{10,}"/i.test(html)) errors.push('missing og:title')
  if (!/property="og:description"[^>]+content="[^"]{20,}"/i.test(html)) errors.push('missing og:description')
  if (!/name="twitter:card"[^>]+content="summary_large_image"/i.test(html)) errors.push('missing twitter:card')
  if (!/name="twitter:title"[^>]+content="[^"]{10,}"/i.test(html)) errors.push('missing twitter:title')
  if (!/application\/ld\+json/i.test(html)) errors.push('missing JSON-LD')
  return errors
}

let failed = 0

for (const route of PRERENDER_PATHS) {
  const file = outFile(route)
  if (!existsSync(file)) {
    console.error(`FAIL ${route}: file missing (${file})`)
    failed++
    continue
  }
  const html = readFileSync(file, 'utf8')
  const errors = checkHtml(route, html)
  if (errors.length) {
    console.error(`FAIL ${route}: ${errors.join(', ')}`)
    failed++
  }
}

console.log(`Checked ${PRERENDER_PATHS.length} prerendered routes.`)

for (const route of KEY_ROUTES) {
  const file = outFile(route)
  if (!existsSync(file)) continue
  const html = readFileSync(file, 'utf8')
  const title = html.match(/property="og:title"[^>]+content="([^"]+)"/i)?.[1] || '(none)'
  const twitter = html.match(/name="twitter:title"[^>]+content="([^"]+)"/i)?.[1] || '(none)'
  const ldCount = (html.match(/application\/ld\+json/gi) || []).length
  console.log(`  ${route}`)
  console.log(`    og:title → ${title}`)
  console.log(`    twitter:title → ${twitter}`)
  console.log(`    JSON-LD blocks → ${ldCount}`)
}

if (failed > 0) {
  console.error(`\n${failed} route(s) failed verification.`)
  process.exit(1)
}

console.log('\nAll prerendered routes passed local SEO verification.')
