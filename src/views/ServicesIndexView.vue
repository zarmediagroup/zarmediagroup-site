<template>
  <div class="services-index-page">
    <section
      class="relative min-h-[70vh] flex items-center bg-navy-900 overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-20"
      aria-label="Services for accounting firms"
    >
      <div class="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <BreadcrumbNav :crumbs="[{ label: 'Home', path: '/' }, { label: 'Services', path: '/services' }]" />

        <span class="section-label reveal-up">South Africa · Accountants, tax &amp; bookkeeping</span>
        <h1 class="font-serif text-display-lg text-white mt-6 mb-8 max-w-4xl reveal-up" style="transition-delay: 100ms;">
          Digital services for <span class="text-gradient">accounting firms</span>
        </h1>
        <p class="font-sans text-white/65 text-lg max-w-3xl leading-relaxed reveal-up mb-6" style="transition-delay: 200ms;">
          Zar Media Group helps practices win more clients and cut admin with
          <strong class="text-white/90">client portals for accountants</strong>,
          <strong class="text-white/90">managed firm websites</strong>,
          <strong class="text-white/90">CRM integration</strong>, and
          <strong class="text-white/90">POPIA-conscious compliance</strong>—built as one programme, not disconnected projects.
        </p>
        <p class="font-sans text-white/50 text-base max-w-3xl leading-relaxed reveal-up" style="transition-delay: 250ms;">
          Whether you are searching for a <RouterLink to="/services/accounting-portals-crm" class="text-gold-500/90 hover:text-gold-400 underline-offset-2 hover:underline">client portal for your accounting firm</RouterLink>,
          a continuously optimised <RouterLink to="/services/website-as-a-service" class="text-gold-500/90 hover:text-gold-400 underline-offset-2 hover:underline">website for accountants</RouterLink>,
          or <RouterLink to="/services/workflow-integration" class="text-gold-500/90 hover:text-gold-400 underline-offset-2 hover:underline">CRM integration with Xero and HubSpot</RouterLink>,
          each service below is purpose-built for regulated financial work in South Africa.
        </p>
        <div class="gold-divider mt-10 reveal-up" style="transition-delay: 300ms;"></div>
        <div class="flex flex-col sm:flex-row gap-4 mt-10 reveal-up" style="transition-delay: 350ms;">
          <RouterLink to="/contact" class="btn-primary">Book a strategy call</RouterLink>
          <RouterLink to="/resources" class="btn-ghost">Read free guides</RouterLink>
        </div>
      </div>
    </section>

    <section class="section-padding bg-cream" aria-labelledby="services-list-heading">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 id="services-list-heading" class="font-serif text-display-md text-navy-900 mb-4">
          Our services for financial professionals
        </h2>
        <p class="font-sans text-charcoal-600 text-lg max-w-3xl leading-relaxed mb-14">
          Choose the capability that matches your firm today. Most practices combine a
          <strong>client-facing portal</strong> with a <strong>managed public website</strong> so prospects and logged-in clients see one brand.
        </p>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <article
            v-for="(service, i) in offerings"
            :key="service.path"
            class="reveal-up bg-white border border-navy-900/8 p-8 lg:p-10 hover:border-gold-500/40 hover:shadow-card-hover transition-all duration-300"
            :style="{ transitionDelay: i * 60 + 'ms' }"
          >
            <h3 class="font-serif text-2xl text-navy-900 mb-4">
              <RouterLink :to="service.path" class="hover:text-gold-600 transition-colors">
                {{ service.name }}
              </RouterLink>
            </h3>
            <p class="font-sans text-charcoal-600 text-sm leading-relaxed mb-6">{{ service.summary }}</p>
            <RouterLink :to="service.path" class="btn-text text-xs">
              View {{ service.shortLabel }}
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </RouterLink>
          </article>
        </div>
      </div>
    </section>

    <SeoRelatedGuides :slugs="relatedGuides" />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'
import { useSeoMeta, SCHEMAS, BASE_URL } from '@/composables/useSeoMeta'
import { getPageSeo, SERVICE_OFFERINGS } from '@/data/seo-pages'
import BreadcrumbNav from '@/components/ui/BreadcrumbNav.vue'
import SeoRelatedGuides from '@/components/seo/SeoRelatedGuides.vue'

const seo = getPageSeo('services-index')
const relatedGuides = seo.relatedGuides

const offerings = SERVICE_OFFERINGS.map((s) => ({
  ...s,
  shortLabel: s.id === 'client-portal' ? 'portal tour' : 'service details',
}))

const { initReveal } = useScrollReveal()
onMounted(() => setTimeout(initReveal, 50))

useSeoMeta({
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  canonical: seo.canonical,
  schemas: [
    SCHEMAS.breadcrumb([
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      '@id': `${BASE_URL}/services#collection`,
      url: `${BASE_URL}/services`,
      name: seo.title,
      description: seo.description,
      inLanguage: 'en-ZA',
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: SERVICE_OFFERINGS.map((s, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: s.name,
          url: `${BASE_URL}${s.path}`,
          description: s.summary,
        })),
      },
    },
    SCHEMAS.faqPage([
      {
        question: 'What services does Zar Media Group offer accounting firms?',
        answer:
          'We offer client portals and CRM integration, Website as a Service for firm sites, workflow integration with Xero and HubSpot, compliance-first website architecture, and a dedicated accounting client portal product tour for South African practices.',
      },
      {
        question: 'Do you only work with accountants in South Africa?',
        answer:
          'We are headquartered in South Africa and specialise in POPIA and local financial sector requirements, while also supporting firms in the UK, US, and Australia with GDPR and international compliance needs.',
      },
    ]),
  ],
})
</script>
