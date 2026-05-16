/**
 * Legacy WordPress / Elementor / old-slug SEO rules.
 * Used by edge middleware (and mirrored in vercel.json + .htaccess where noted).
 */

/** WordPress & hosting paths — always 404 + noindex */
export const LEGACY_GONE_PREFIXES = [
  '/wp-admin',
  '/wp-content',
  '/wp-includes',
  '/cgi-sys',
]

/** Exact pathname (no trailing slash) → redirect target */
export const LEGACY_PATH_REDIRECTS = {
  '/web-development': '/services/website-as-a-service',
  '/elementor-193': '/resources/best-client-portal-small-accounting-firms',
  '/elementor-504': '/resources/accounting-firm-website-design-guide',
  '/elementor-261': '/resources',
  '/elementor-67-2-2': '/resources',
  '/elementor-117-2-2': '/resources',
  '/elementor-155': '/resources',
}

/** Old /resources/:slug → current slug */
export const LEGACY_RESOURCE_SLUG_REDIRECTS = {
  'how-to-reduce-admin-in-accounting-firm': 'how-to-reduce-admin-accounting-firm',
  'pinnacle-tax-near-story': 'pinnacle-tax-case-study',
  'chen-associates-case-study': 'abc-inc-chartered-accountants-website-case-study',
  'top-6-compliance-accounting-websites': 'popia-compliance-accounting-websites',
  'four-rebuild-requirements': 'fsca-website-requirements',
}

/** Unmatched /elementor-{id} paths fall back here */
export const ELEMENTOR_FALLBACK = '/resources'

export const ELEMENTOR_PATH_PATTERN = /^\/elementor-\d+/

export function normalizePathname(pathname) {
  if (pathname.length > 1 && pathname.endsWith('/')) return pathname.slice(0, -1) || '/'
  return pathname
}

export function isLegacyGonePath(pathname) {
  return LEGACY_GONE_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  )
}

export function resolvePathRedirect(pathname) {
  if (LEGACY_PATH_REDIRECTS[pathname]) return LEGACY_PATH_REDIRECTS[pathname]
  if (ELEMENTOR_PATH_PATTERN.test(pathname)) return ELEMENTOR_FALLBACK
  return null
}

export function resolveResourceSlugRedirect(slug) {
  return LEGACY_RESOURCE_SLUG_REDIRECTS[slug] || null
}

/** WordPress query params: redirect home or treat as gone */
export function resolveQueryLegacy(url) {
  if (url.searchParams.has('page_id')) return '/'
  if (url.searchParams.has('elementor_library')) return null
  return undefined
}
