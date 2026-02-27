/**
 * useSeoMeta — Production-ready SEO composable for Zar Media Group
 *
 * Handles per-page:
 *  - <title>, meta description/keywords/robots/author
 *  - Canonical URL
 *  - Open Graph (og:*) tags
 *  - Twitter Card tags
 *  - JSON-LD structured data injection
 *  - BreadcrumbList schema helper
 *  - Cleanup on unmount to prevent schema bleed between routes
 */
import { onMounted, onUnmounted } from 'vue'

export const BASE_URL = 'https://zarmediagroup.com'
export const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg`
export const ORG_NAME = 'Zar Media Group'

// ─── helpers ────────────────────────────────────────────────────────────────

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

function upsertLink(rel, href) {
  if (!href) return
  let el = document.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
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
 * @param {string} options.title          - Page <title> (50–60 chars)
 * @param {string} options.description    - Meta description (150–160 chars)
 * @param {string} options.keywords       - Comma-separated keywords
 * @param {string} [options.canonical]    - Relative path, e.g. '/services/waas'
 * @param {string} [options.ogImage]      - Absolute or relative image URL
 * @param {string} [options.ogType]       - 'website' | 'article' (default: 'website')
 * @param {Array}  [options.schemas]      - Array of JSON-LD schema objects
 */
export function useSeoMeta(options) {
  const schemaIds = []

  onMounted(() => {
    const {
      title,
      description,
      keywords,
      canonical,
      ogImage,
      ogType = 'website',
      schemas = [],
    } = options

    // ── <title> ──
    if (title) document.title = title

    // ── standard meta ──
    upsertMeta('name', 'description', description)
    upsertMeta('name', 'keywords', keywords)
    upsertMeta('name', 'robots', 'index, follow')
    upsertMeta('name', 'author', ORG_NAME)

    // ── canonical ──
    const canonicalHref = canonical
      ? `${BASE_URL}${canonical}`
      : `${BASE_URL}${window.location.pathname}`
    upsertLink('canonical', canonicalHref)

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

    // ── Twitter Cards ──
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:site', '@zarmediagroup')
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', image)
    upsertMeta('name', 'twitter:image:alt', `${ORG_NAME} — ${title}`)

    // ── JSON-LD schemas ──
    schemas.forEach((schema, i) => {
      const uid = `zmg-schema-${i}-${schema['@type'] || 'generic'}`
      schemaIds.push(uid)
      injectSchema(schema, uid)
    })
  })

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
        url: `${BASE_URL}/logo.png`,
        width: 200,
        height: 60,
      },
      description:
        'Managed website and workflow integration solutions for accountants and financial service providers across South Africa.',
      foundingDate: '2018',
      areaServed: ['ZA', 'US', 'GB', 'AU'],
      sameAs: [
        'https://www.linkedin.com/company/zarmediagroup',
        'https://twitter.com/zarmediagroup',
        'https://www.facebook.com/zarmediagroup',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: 'info@zarmediagroup.com',
        telephone: '+27-000-000-0000',
        availableLanguage: 'English',
        areaServed: 'ZA',
      },
    }
  },

  website() {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: ORG_NAME,
      url: BASE_URL,
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${BASE_URL}/resources?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    }
  },

  localBusiness() {
    return {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: ORG_NAME,
      image: `${BASE_URL}/og-image.jpg`,
      url: BASE_URL,
      telephone: '+27-000-000-0000',
      email: 'info@zarmediagroup.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '123 Sandton Drive',
        addressLocality: 'Sandton',
        addressRegion: 'Gauteng',
        postalCode: '2196',
        addressCountry: 'ZA',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -26.1076,
        longitude: 28.0567,
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
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website as a Service' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Workflow Integration' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Compliance & Trust' } },
        ],
      },
      sameAs: [
        'https://www.linkedin.com/company/zarmediagroup',
        'https://twitter.com/zarmediagroup',
      ],
    }
  },

  service({ name, description, areaServed = 'ZA' } = {}) {
    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: name,
      name,
      description,
      provider: {
        '@type': 'Organization',
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
      url: BASE_URL,
      image: `${BASE_URL}/og-image.jpg`,
    }
  },

  breadcrumb(items) {
    // items: [{ name, url }]
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


