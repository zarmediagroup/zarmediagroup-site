/**
 * Post-build SPA prerender — snapshots fully rendered HTML (meta, JSON-LD, body)
 * for every sitemap route so crawlers and link-preview bots get real content.
 *
 * Paths: generated/middleware-paths.js (PRERENDER_PATHS)
 * Skip locally: SKIP_PRERENDER=1 npm run build
 */
import { createServer } from 'node:http'
import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import sirv from 'sirv'
import { PRERENDER_PATHS } from '../generated/middleware-paths.js'

async function launchBrowser() {
  if (process.env.VERCEL) {
    const chromium = (await import('@sparticuz/chromium')).default
    const puppeteer = (await import('puppeteer-core')).default
    return puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
    })
  }
  const puppeteer = (await import('puppeteer')).default
  return puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  })
}

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const distDir = join(root, 'dist')
const PORT = Number(process.env.PRERENDER_PORT) || 4173
const CONCURRENCY = Number(process.env.PRERENDER_CONCURRENCY) || 1
const BASE_ORIGIN = `http://127.0.0.1:${PORT}`

function expectedCanonical(route) {
  return route === '/' ? `${BASE_URL}/` : `${BASE_URL}${route}`
}

const BASE_URL = 'https://zarmediagroup.com'

if (process.env.SKIP_PRERENDER === '1') {
  console.log('SKIP_PRERENDER=1 — prerender skipped')
  process.exit(0)
}

function outFile(route) {
  if (route === '/') return join(distDir, 'index.html')
  return join(distDir, route.replace(/^\//, ''), 'index.html')
}

const serve = sirv(distDir, { dev: false, single: true })

function startServer() {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      serve(req, res, () => {
        res.statusCode = 404
        res.end('not found')
      })
    })
    server.listen(PORT, '127.0.0.1', () => resolve(server))
  })
}

async function waitForPageReady(page, route) {
  const expected = expectedCanonical(route)
  await page.waitForFunction(
    (canonicalExpected) => {
      const href = document.querySelector('link[rel="canonical"]')?.href || ''
      if (!href) return false
      const norm = (u) => u.replace(/\/$/, '') || u
      return norm(href) === norm(canonicalExpected)
    },
    { timeout: 45_000, polling: 100 },
    expected,
  )
  await new Promise((r) => setTimeout(r, 300))
}

async function prerenderRoute(browser, route) {
  const page = await browser.newPage()
  try {
    await page.setViewport({ width: 1280, height: 800 })
    await page.evaluateOnNewDocument((routePath) => {
      try {
        sessionStorage.setItem('zmg_splash_seen', '1')
        localStorage.setItem('zmg_cookies', 'declined')
        if (routePath === '/lp/client-portal-demo/thank-you') {
          sessionStorage.setItem('zmg_lp_demo_submitted', '1')
        }
      } catch {
        /* ignore */
      }
    }, route)

    const url = `${BASE_ORIGIN}${route}`
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60_000 })
    await waitForPageReady(page, route)

    const html = await page.content()
    const dest = outFile(route)
    mkdirSync(dirname(dest), { recursive: true })
    writeFileSync(dest, html, 'utf8')
    return route
  } catch (err) {
    throw new Error(`${route}: ${err.message}`)
  } finally {
    await page.close()
  }
}

async function runPool(browser, routes) {
  const results = []
  for (let i = 0; i < routes.length; i += CONCURRENCY) {
    const batch = routes.slice(i, i + CONCURRENCY)
    const batchResults = await Promise.all(
      batch.map(async (route) => {
        try {
          return await prerenderRoute(browser, route)
        } catch (err) {
          console.error(`  ERROR ${err.message}`)
          throw err
        }
      }),
    )
    results.push(...batchResults)
    console.log(`  ${Math.min(i + CONCURRENCY, routes.length)}/${routes.length} routes done`)
  }
  return results
}

// Longest paths first so /services does not run beside /services/*
const routes = [...PRERENDER_PATHS].sort((a, b) => b.length - a.length)

try {
  console.log(`Prerendering ${routes.length} routes (concurrency ${CONCURRENCY})…`)
  const server = await startServer()
  const browser = await launchBrowser()

  try {
    const done = await runPool(browser, routes)
    console.log(`Prerender complete: ${done.length} HTML files written under dist/`)
  } finally {
    await browser.close()
    server.close()
  }
} catch (err) {
  console.error('Prerender failed:', err)
  if (process.env.VERCEL) {
    console.warn('Vercel: continuing deploy without prerender (SPA routes still work).')
    process.exit(0)
  }
  process.exit(1)
}
