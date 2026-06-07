/**
 * useSeoMeta — Production-ready SEO composable for Zar Media Group
 *
 * Handles per-page:
 *  - <title>, meta description/keywords/robots/author
 *  - Canonical URL
 *  - Open Graph (og:*) tags
 *  - Twitter Card tags
 *  - JSON-LD structured data injection
 *  - Full support for plain strings AND computed/ref values
 *  - Automatic re-application when reactive options change (e.g. article slug nav)
 *  - Cleanup on unmount to prevent schema bleed between routes
 */
import { onMounted, onUnmounted, isRef, watch } from 'vue'

export const BASE_URL = 'https://zarmediagroup.com'
export const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`
export const ORG_LOGO = `${BASE_URL}/logo.png`
export const ORG_NAME = 'Zar Media Group'

// ─── helpers ────────────────────────────────────────────────────────────────

/** Unwrap a plain value, a Vue ref, or a computed ref */
function val(v) {
  return isRef(v) ? v.value : v
}

function upsertMeta(attr, attrValue, content) {
  if (!content) return
  let el = document.querySelector(`meta[${attr}="${attrValue}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, attrValue)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel, href, extra = {}) {
  if (!href) return
  const selector = extra.hreflang
    ? `link[rel="${rel}"][hreflang="${extra.hreflang}"]`
    : `link[rel="${rel}"]`
  let el = document.querySelector(selector)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
  if (extra.hreflang) el.setAttribute('hreflang', extra.hreflang)
}

function injectSchema(schema, uid) {
  removeSchema(uid)
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.dataset.schemaId = uid
  script.textContent = JSON.stringify(schema, null, 0)
  document.head.appendChild(script)
}

function removeSchema(uid) {
  const existing = document.querySelector(`script[data-schema-id="${uid}"]`)
  if (existing) existing.remove()
}

// ─── main composable ─────────────────────────────────────────────────────────

/**
 * @param {Object} options
 * @param {string|Ref<string>} options.title          - Page <title> (50–60 chars)
 * @param {string|Ref<string>} options.description    - Meta description (150–160 chars)
 * @param {string|Ref<string>} [options.keywords]     - Comma-separated keywords
 * @param {string|Ref<string>} [options.canonical]    - Relative path, e.g. '/services/waas'
 * @param {string|Ref<string>} [options.ogImage]      - Absolute or relative image URL
 * @param {string|Ref<string>} [options.ogImageAlt]   - Accessible description for og:image
 * @param {string}             [options.ogType]       - 'website' | 'article' (default: 'website')
 * @param {string|Ref<string>} [options.robots]       - Robots directive (default: 'index, follow')
 * @param {Array|Ref<Array>}   [options.schemas]      - Array of JSON-LD schema objects
 */
export function useSeoMeta(options) {
  const schemaIds = []

  function applyMeta() {
    const title       = val(options.title)
    const description = val(options.description)
    const keywords    = val(options.keywords)
    const canonical   = val(options.canonical)
    const ogImage     = val(options.ogImage)
    const ogImageAlt  = val(options.ogImageAlt)
    const ogType      = val(options.ogType) || 'website'
    const robots      = val(options.robots) || 'index, follow'
    const schemas     = val(options.schemas) || []

    // ── <title> ──
    if (title) document.title = title

    // ── standard meta ──
    upsertMeta('name', 'description', description)
    if (keywords) upsertMeta('name', 'keywords', keywords)
    upsertMeta('name', 'robots', robots)
    upsertMeta('name', 'author', ORG_NAME)

    // ── canonical ──
    const canonicalHref = canonical
      ? `${BASE_URL}${canonical}`
      : `${BASE_URL}${window.location.pathname}`
    upsertLink('canonical', canonicalHref)
    upsertLink('alternate', canonicalHref, { hreflang: 'en-za' })
    upsertLink('alternate', `${BASE_URL}/`, { hreflang: 'x-default' })

    // ── Open Graph ──
    const image = ogImage
      ? (ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`)
      : DEFAULT_OG_IMAGE

    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:image', image)
    upsertMeta('property', 'og:image:width', '1200')
    upsertMeta('property', 'og:image:height', '630')
    upsertMeta('property', 'og:url', canonicalHref)
    upsertMeta('property', 'og:type', ogType)
    upsertMeta('property', 'og:site_name', ORG_NAME)
    upsertMeta('property', 'og:locale', 'en_ZA')
    if (ogImageAlt || title) upsertMeta('property', 'og:image:alt', ogImageAlt || title)

    // ── Twitter / X Card (link previews when shared on X and compatible apps) ──
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', image)
    upsertMeta('name', 'twitter:url', canonicalHref)

    // ── JSON-LD schemas — remove old, inject new ──
    schemaIds.forEach(removeSchema)
    schemaIds.length = 0
    schemas.forEach((schema, i) => {
      const uid = `zmg-schema-${i}-${schema['@type'] || 'generic'}`
      schemaIds.push(uid)
      injectSchema(schema, uid)
    })
  }

  onMounted(applyMeta)

  // Re-apply whenever any reactive option changes (e.g. navigating between articles)
  const reactiveOptions = Object.values(options).filter(isRef)
  if (reactiveOptions.length > 0) {
    watch(reactiveOptions, applyMeta)
  }

  onUnmounted(() => {
    schemaIds.forEach(removeSchema)
  })
}

// ─── schema builders ─────────────────────────────────────────────────────────

export const SCHEMAS = {
  organization() {
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: ORG_NAME,
      url: BASE_URL,
      logo: {
        '@type': 'ImageObject',
        url: ORG_LOGO,
        width: 200,
        height: 60,
      },
      legalName: 'ZARMEDIAGROUP (PTY) LTD',
      description:
        'Client portals built and managed for accountants and financial service providers across South Africa—with firm websites, intake, and workflows kept in the same managed programme.',
      foundingDate: '2026',
      identifier: {
        '@type': 'PropertyValue',
        name: 'CIPC Registration Number',
        value: '2026/166396/07',
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Cape Town',
        addressRegion: 'Western Cape',
        addressCountry: 'ZA',
      },
      areaServed: ['ZA', 'US', 'GB', 'AU'],
      sameAs: [
        'https://www.linkedin.com/company/zarmediagroup/',
        'https://www.facebook.com/Zarmediagroup/',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: 'info@zarmediagroup.com',
        telephone: '+27685070088',
        availableLanguage: 'English',
        areaServed: 'ZA',
      },
    }
  },

  website() {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      name: ORG_NAME,
      url: BASE_URL,
      inLanguage: 'en-ZA',
    }
  },

  localBusiness() {
    return {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: ORG_NAME,
      image: `${BASE_URL}/og-image.png`,
      url: BASE_URL,
      legalName: 'ZARMEDIAGROUP (PTY) LTD',
      telephone: '+27685070088',
      email: 'info@zarmediagroup.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Cape Town',
        addressRegion: 'Western Cape',
        addressCountry: 'ZA',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -33.9249,
        longitude: 18.4241,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
      ],
      priceRange: '$$',
      currenciesAccepted: 'ZAR, USD',
      areaServed: [
        { '@type': 'Country', name: 'South Africa' },
        { '@type': 'Country', name: 'United States' },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Digital Services for Accountants',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Client Portals & CRM for Accountants' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Accounting Client Portal & Document Vault' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website as a Service (firm site managed with your portal)' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Workflow Integration' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Compliance & Trust' } },
        ],
      },
      sameAs: [
        'https://www.linkedin.com/company/zarmediagroup/',
        'https://www.facebook.com/Zarmediagroup/',
      ],
    }
  },

  service({ name, description, url, image } = {}) {
    const pageUrl = url
      ? (url.startsWith('http') ? url : `${BASE_URL}${url}`)
      : BASE_URL
    const imageUrl = image
      ? (image.startsWith('http') ? image : `${BASE_URL}${image}`)
      : `${BASE_URL}/og-image.png`

    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${pageUrl}#service`,
      serviceType: name,
      name,
      description,
      provider: {
        '@type': 'Organization',
        '@id': `${BASE_URL}/#organization`,
        name: ORG_NAME,
        url: BASE_URL,
      },
      areaServed: [
        { '@type': 'Country', name: 'South Africa' },
        { '@type': 'AdministrativeArea', name: 'Gauteng' },
      ],
      audience: {
        '@type': 'Audience',
        audienceType: 'Accountants, Bookkeepers, Financial Advisors, CFOs, Compliance Officers',
      },
      url: pageUrl,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
      },
      image: imageUrl,
    }
  },

  /** WebPage + Service pair for /services/* routes (Google rich results) */
  servicePage({ name, description, url = '/', image } = {}) {
    const pageUrl = url.startsWith('http') ? url : `${BASE_URL}${url}`
    const imageUrl = image
      ? (image.startsWith('http') ? image : `${BASE_URL}${image}`)
      : `${BASE_URL}/og-image.png`

    return [
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name,
        description,
        inLanguage: 'en-ZA',
        isPartOf: {
          '@type': 'WebSite',
          '@id': `${BASE_URL}/#website`,
          name: ORG_NAME,
          url: BASE_URL,
        },
        about: {
          '@type': 'Service',
          '@id': `${pageUrl}#service`,
          name,
          description,
        },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: imageUrl,
        },
      },
      SCHEMAS.service({ name, description, url, image }),
    ]
  },

  /**
   * BlogPosting / Article schema — used on every resource detail page.
   * Google uses this to understand, index, and display rich results for articles.
   */
  article({ headline, description, image, datePublished, dateModified, author, authorRole, url, keywords }) {
    return {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline,
      description,
      image: {
        '@type': 'ImageObject',
        url: image.startsWith('http') ? image : `${BASE_URL}${image}`,
        width: 1200,
        height: 630,
      },
      datePublished,
      dateModified: dateModified || datePublished,
      author: {
        '@type': 'Person',
        name: author,
        jobTitle: authorRole,
        worksFor: {
          '@type': 'Organization',
          name: ORG_NAME,
          url: BASE_URL,
        },
      },
      publisher: {
        '@type': 'Organization',
        name: ORG_NAME,
        url: BASE_URL,
        logo: {
          '@type': 'ImageObject',
          url: ORG_LOGO,
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': url.startsWith('http') ? url : `${BASE_URL}${url}`,
      },
      url: url.startsWith('http') ? url : `${BASE_URL}${url}`,
      keywords: keywords || '',
      inLanguage: 'en-ZA',
      isPartOf: {
        '@type': 'WebSite',
        name: ORG_NAME,
        url: BASE_URL,
      },
      about: {
        '@type': 'Thing',
        name: 'Accounting Firm Digital Strategy',
      },
    }
  },

  /** Hero / brand video — helps AI engines and Google understand homepage media */
  videoObject({ name, description, contentUrl, thumbnailUrl, uploadDate = '2026-06-07' } = {}) {
    const videoUrl = contentUrl?.startsWith('http') ? contentUrl : `${BASE_URL}${contentUrl}`
    const thumbUrl = thumbnailUrl?.startsWith('http') ? thumbnailUrl : `${BASE_URL}${thumbnailUrl}`

    return {
      '@context': 'https://schema.org',
      '@type': 'VideoObject',
      name,
      description,
      contentUrl: videoUrl,
      thumbnailUrl: thumbUrl,
      uploadDate,
      inLanguage: 'en-ZA',
      publisher: {
        '@type': 'Organization',
        name: ORG_NAME,
        url: BASE_URL,
        logo: {
          '@type': 'ImageObject',
          url: ORG_LOGO,
        },
      },
    }
  },

  breadcrumb(items) {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.name,
        item: item.url.startsWith('http') ? item.url : `${BASE_URL}${item.url}`,
      })),
    }
  },

  faqPage(faqs) {
    // faqs: [{ question, answer }]
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    }
  },

  professionalService({ name, url, description } = {}) {
    return {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name,
      url: url || BASE_URL,
      description,
      provider: {
        '@type': 'Organization',
        name: ORG_NAME,
      },
    }
  },
}
