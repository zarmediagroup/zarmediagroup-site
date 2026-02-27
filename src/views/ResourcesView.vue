<template>
  <div class="resources-page">

    <!-- ══ HERO ══ -->
    <section class="relative min-h-[55vh] flex items-end pb-20 bg-navy-900 overflow-hidden pt-40" aria-label="Resources page hero">
      <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div class="absolute inset-0 opacity-[0.025]" style="background-image: linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px); background-size: 60px 60px;"></div>
        <div class="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-gold-500/30"></div>
        <div class="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-gold-500/30"></div>
      </div>
      <div class="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <BreadcrumbNav :crumbs="[{ label: 'Resources', path: '/resources' }]" />

        <span class="section-label reveal-up">Knowledge Hub — Free Resources for Financial Professionals</span>
        <h1 class="font-serif text-display-lg text-white mt-4 mb-6 max-w-3xl reveal-up" style="transition-delay: 100ms;">
          Resources for Accountants &amp;<br/>
          <span class="text-gradient">Financial Professionals</span>
        </h1>
        <p class="font-sans text-white/60 text-lg max-w-2xl leading-relaxed reveal-up" style="transition-delay: 200ms;">
          Free guides, whitepapers, and case studies on digital strategy for accounting firms and financial service providers. Learn how to reduce admin, build a compliant digital presence, and attract more clients online.
        </p>
        <div class="gold-divider mt-8 reveal-up" style="transition-delay: 250ms;"></div>
      </div>
    </section>

    <!-- ══ FILTER ══ -->
    <div class="bg-navy-950 border-b border-white/5 sticky top-16 z-30" role="navigation" aria-label="Resource category filter">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="flex gap-0 overflow-x-auto" role="tablist" aria-label="Filter resources by category">
          <button
            v-for="category in categories"
            :key="category.id"
            class="font-sans text-sm font-semibold px-5 py-4 transition-all duration-200 whitespace-nowrap flex-shrink-0 border-b-2"
            :class="activeCategory === category.id
              ? 'text-gold-400 border-gold-500'
              : 'text-white/40 border-transparent hover:text-white/70'"
            role="tab"
            :aria-selected="activeCategory === category.id"
            @click="activeCategory = category.id"
          >
            {{ category.label }}
            <span class="ml-2 text-xs opacity-50">({{ category.count }})</span>
          </button>
        </div>
      </div>
    </div>

    <!-- ══ RESOURCES GRID ══ -->
    <section class="section-padding bg-cream" aria-labelledby="resources-grid-heading">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="sr-only" id="resources-grid-heading">Resource articles and guides for accountants</div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <article
            v-for="(resource, i) in filteredResources"
            :key="resource.slug"
            class="reveal-up group"
            :style="{ transitionDelay: (i * 60) + 'ms' }"
          >
            <div class="h-full bg-white border border-navy-900/8 hover:border-gold-500/50 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <!-- Resource image area -->
              <div
                class="relative w-full h-44 overflow-hidden"
                :style="{ background: `linear-gradient(135deg, ${resource.gradientFrom} 0%, ${resource.gradientTo} 100%)` }"
              >
                <div class="absolute inset-0 flex items-center justify-center opacity-20" aria-hidden="true">
                  <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="resource.icon"></svg>
                </div>
                <div class="absolute top-4 left-4">
                  <span class="font-sans text-xs font-semibold text-white/90 bg-black/30 px-2.5 py-1 backdrop-blur-sm uppercase tracking-wide">
                    {{ resource.type }}
                  </span>
                </div>
                <div class="absolute bottom-4 right-4 w-10 h-10 flex items-center justify-center bg-gold-500/20 border border-gold-500/40 group-hover:bg-gold-500 transition-all duration-300" aria-hidden="true">
                  <svg class="w-5 h-5 text-gold-500 group-hover:text-navy-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>

              <div class="p-6">
                <div class="flex items-center gap-3 mb-4">
                  <span class="font-sans text-xs text-gold-600 bg-gold-500/10 border border-gold-500/20 px-2 py-0.5">{{ resource.category }}</span>
                  <span class="font-sans text-charcoal-400 text-xs">{{ resource.readTime }} read</span>
                </div>

                <h2 class="font-serif text-navy-900 text-lg font-medium mb-3 group-hover:text-gold-600 transition-colors leading-snug">
                  <a :href="`/resources/${resource.slug}`" :aria-label="`Read: ${resource.title}`">
                    {{ resource.title }}
                  </a>
                </h2>
                <p class="font-sans text-charcoal-500 text-sm leading-relaxed mb-5">{{ resource.excerpt }}</p>

                <div class="flex items-center justify-between pt-4 border-t border-navy-900/8">
                  <div class="flex items-center gap-2">
                    <div class="w-7 h-7 rounded-full bg-navy-900 flex items-center justify-center" aria-hidden="true">
                      <span class="font-serif text-gold-500 font-bold text-xs">{{ resource.authorInitials }}</span>
                    </div>
                    <span class="font-sans text-charcoal-400 text-xs">{{ resource.author }}</span>
                  </div>
                  <time class="font-sans text-charcoal-400 text-xs" :datetime="resource.dateISO">{{ resource.date }}</time>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div v-if="filteredResources.length === 0" class="text-center py-20">
          <p class="font-sans text-charcoal-400 text-lg">No resources found in this category yet. Check back soon.</p>
        </div>
      </div>
    </section>

    <!-- ══ FAQ ══ -->
    <section class="section-padding bg-navy-900" aria-labelledby="faq-heading">
      <div class="max-w-3xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-14 reveal-up">
          <span class="section-label">Common Questions</span>
          <h2 id="faq-heading" class="font-serif text-display-md text-white mb-4">
            Accounting Firm Digital<br/><em class="text-gold-400">Strategy FAQ</em>
          </h2>
          <div class="gold-divider-center"></div>
        </div>

        <dl class="space-y-4">
          <div
            v-for="(faq, i) in faqs"
            :key="i"
            class="reveal-up border border-white/10 overflow-hidden hover:border-white/20 transition-colors"
            :style="{ transitionDelay: (i * 60) + 'ms' }"
          >
            <dt>
              <button
                class="w-full flex items-center justify-between gap-4 p-6 text-left font-sans font-semibold text-white text-sm hover:text-white/80 transition-colors"
                :aria-expanded="openFaq === i"
                :aria-controls="`faq-${i}`"
                @click="openFaq = openFaq === i ? null : i"
              >
                <span>{{ faq.question }}</span>
                <svg
                  class="w-4 h-4 flex-shrink-0 text-white/60 transition-transform duration-300"
                  :class="{ 'rotate-180': openFaq === i }"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
            </dt>
            <Transition name="accordion">
              <dd v-if="openFaq === i" :id="`faq-${i}`" class="px-6 pb-6 font-sans text-white/60 text-sm leading-relaxed">
                {{ faq.answer }}
              </dd>
            </Transition>
          </div>
        </dl>
      </div>
    </section>

    <!-- ══ NEWSLETTER ══ -->
    <section class="section-padding-sm bg-gold-500" aria-labelledby="newsletter-heading">
      <div class="max-w-2xl mx-auto px-6 lg:px-8 text-center reveal-up">
        <h2 id="newsletter-heading" class="font-serif text-display-sm text-navy-900 mb-4">
          Get Digital Strategy Insights<br/>for Accounting Firms
        </h2>
        <p class="font-sans text-navy-900/70 mb-8">
          Join 2,400+ accountants and financial advisors who receive our fortnightly newsletter on digital strategy, compliance updates, and client growth tactics — tailored for the South African financial sector.
        </p>
        <form class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" @submit.prevent="handleNewsletterSubmit" aria-label="Newsletter signup for accountants">
          <label for="newsletter-email" class="sr-only">Email address</label>
          <input
            id="newsletter-email"
            v-model="email"
            type="email"
            required
            placeholder="your@accountingfirm.co.za"
            class="flex-1 px-4 py-3 font-sans text-navy-900 placeholder-navy-900/40 bg-white/80 border border-navy-900/20 focus:outline-none focus:border-navy-900/60 transition-colors"
            :aria-describedby="submitSuccess ? 'newsletter-success' : undefined"
          />
          <button type="submit" class="px-6 py-3 bg-navy-900 text-white font-sans font-semibold text-sm hover:bg-navy-800 transition-colors">
            Subscribe Free
          </button>
        </form>
        <p v-if="submitSuccess" id="newsletter-success" role="status" class="font-sans text-navy-900/80 text-sm mt-3">
          ✓ You're subscribed! First issue arriving this week.
        </p>
        <p class="font-sans text-navy-900/50 text-xs mt-3">No spam. Unsubscribe anytime. 2,400+ subscribers.</p>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'
import { useSeoMeta, SCHEMAS } from '@/composables/useSeoMeta'
import BreadcrumbNav from '@/components/ui/BreadcrumbNav.vue'

const { initReveal } = useScrollReveal()
onMounted(() => setTimeout(initReveal, 50))

const activeCategory = ref('all')
const openFaq = ref(null)
const email = ref('')
const submitSuccess = ref(false)

function handleNewsletterSubmit() {
  submitSuccess.value = true
  email.value = ''
}

const faqs = [
  {
    question: 'How do I reduce admin for my accounting firm using a website?',
    answer:
      'Reducing admin for your accounting firm starts with connecting your website to your practice management systems. Online enquiry forms that auto-populate your CRM, self-service appointment booking, automated document collection portals, and e-signature integrations can eliminate hours of manual work every week.',
  },
  {
    question: 'What should an accounting firm website include?',
    answer:
      'An effective accounting firm website should include a clear explanation of your services and target clients, social proof (testimonials, case studies), a secure client portal, online enquiry and appointment booking, regulatory disclosures (FSP number if applicable), and blog content that demonstrates expertise in your niche.',
  },
  {
    question: 'How long does it take to see results from a new accounting firm website?',
    answer:
      'With our Website as a Service model, most accounting firms see an increase in enquiries within 60–90 days of launch. SEO results for competitive keywords like "accountant in Johannesburg" typically materialise within 4–6 months. Workflow automation benefits like admin reduction are immediate from launch day.',
  },
  {
    question: 'Is Website as a Service right for a small bookkeeping practice?',
    answer:
      'Yes — our Essentials plan is specifically designed for sole practitioners and small bookkeeping practices. You get a professionally designed, fully managed website from R2,999/month, which typically generates ROI within the first month by attracting even one new client.',
  },
  {
    question: 'How does Zar Media Group help with financial sector compliance on websites?',
    answer:
      'We review every accounting and financial services website we build against POPIA, GDPR (if applicable), WCAG 2.1 AA accessibility standards, and FSCA requirements. We implement compliant cookie consent, privacy policies, data handling forms, and accessibility features — and monitor compliance monthly.',
  },
]

useSeoMeta({
  title: 'Resources for Accountants & Financial Professionals | Zar Media Group',
  description:
    'Free whitepapers, case studies, and guides on digital strategy for accountants and financial firms. Learn how to reduce admin, improve client portals, and grow your practice online in South Africa.',
  keywords:
    'resources for accountants, accounting firm digital strategy, best client portal small accounting firms, how to reduce admin accounting firms, financial services SEO, accounting website guide',
  canonical: '/resources',
  schemas: [
    SCHEMAS.breadcrumb([
      { name: 'Home', url: '/' },
      { name: 'Resources', url: '/resources' },
    ]),
    SCHEMAS.faqPage(faqs),
  ],
})

const categories = [
  { id: 'all', label: 'All Resources', count: 9 },
  { id: 'guides', label: 'Guides', count: 3 },
  { id: 'case-studies', label: 'Case Studies', count: 3 },
  { id: 'compliance', label: 'Compliance', count: 2 },
  { id: 'seo', label: 'SEO & Growth', count: 1 },
]

const resources = [
  {
    slug: 'how-to-reduce-admin-accounting-firm',
    type: 'Guide',
    category: 'guides',
    title: 'How to Reduce Admin at Your Accounting Firm in 2026',
    excerpt: 'A step-by-step guide to identifying and eliminating the manual admin tasks wasting your accounting team\'s time — from client intake to document collection.',
    author: 'Zara Mitchell, CA(SA)',
    authorInitials: 'ZM',
    readTime: '8 min',
    date: 'Feb 2026',
    dateISO: '2026-02-01',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>',
    gradientFrom: '#122752',
    gradientTo: '#1e3a6e',
  },
  {
    slug: 'best-client-portal-small-accounting-firms',
    type: 'Guide',
    category: 'guides',
    title: 'Best Client Portal for Small Accounting Firms: 2026 Comparison',
    excerpt: 'Comparing the top client portal solutions for small accounting practices in South Africa — including build vs buy, costs, and integration capabilities.',
    author: 'James Okafor',
    authorInitials: 'JO',
    readTime: '12 min',
    date: 'Jan 2026',
    dateISO: '2026-01-15',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>',
    gradientFrom: '#1a2a50',
    gradientTo: '#0d1e35',
  },
  {
    slug: 'accounting-firm-website-design-guide',
    type: 'Guide',
    category: 'guides',
    title: 'Accounting Firm Website Design: The Complete 2026 Guide',
    excerpt: 'Everything your accounting firm website needs to generate leads, build trust, and comply with South African financial sector regulations.',
    author: 'Priya Naidoo',
    authorInitials: 'PN',
    readTime: '15 min',
    date: 'Jan 2026',
    dateISO: '2026-01-08',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>',
    gradientFrom: '#2c1a4e',
    gradientTo: '#1a2a50',
  },
  {
    slug: 'chen-associates-case-study',
    type: 'Case Study',
    category: 'case-studies',
    title: 'How Chen & Associates Grew Leads by 340% in 90 Days',
    excerpt: 'A detailed look at how a 3-partner accounting firm in Johannesburg transformed their online presence and automated their client intake with Zar Media Group.',
    author: 'Zara Mitchell, CA(SA)',
    authorInitials: 'ZM',
    readTime: '6 min',
    date: 'Dec 2025',
    dateISO: '2025-12-10',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>',
    gradientFrom: '#c9a84c',
    gradientTo: '#a07c2c',
  },
  {
    slug: 'pinnacle-tax-case-study',
    type: 'Case Study',
    category: 'case-studies',
    title: 'Pinnacle Tax Advisory: 70% Admin Reduction Through Portal Integration',
    excerpt: 'How a Cape Town tax firm saved 12 hours per week by integrating their website with Xero, DocuSign, and a custom client portal.',
    author: 'Thomas van der Berg',
    authorInitials: 'TV',
    readTime: '7 min',
    date: 'Nov 2025',
    dateISO: '2025-11-20',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>',
    gradientFrom: '#1e3a6e',
    gradientTo: '#0a2040',
  },
  {
    slug: 'martinez-financial-case-study',
    type: 'Case Study',
    category: 'case-studies',
    title: 'Martinez Financial Group: Building Authority in Wealth Management',
    excerpt: 'How a Pretoria wealth management firm repositioned their digital brand and increased qualified enquiries by 218% year-on-year.',
    author: 'Priya Naidoo',
    authorInitials: 'PN',
    readTime: '5 min',
    date: 'Oct 2025',
    dateISO: '2025-10-15',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>',
    gradientFrom: '#122752',
    gradientTo: '#1a3a5c',
  },
  {
    slug: 'popia-compliance-accounting-websites',
    type: 'Compliance',
    category: 'compliance',
    title: 'POPIA Compliance for Accounting Firm Websites: 2026 Checklist',
    excerpt: 'A practical guide to ensuring your accounting practice\'s website complies with South Africa\'s Protection of Personal Information Act.',
    author: 'Thomas van der Berg',
    authorInitials: 'TV',
    readTime: '10 min',
    date: 'Feb 2026',
    dateISO: '2026-02-10',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>',
    gradientFrom: '#1a2a3e',
    gradientTo: '#0d1e35',
  },
  {
    slug: 'fsca-website-requirements',
    type: 'Compliance',
    category: 'compliance',
    title: 'FSCA Website Requirements for Financial Advisors in South Africa',
    excerpt: 'What the Financial Sector Conduct Authority requires on your practice\'s website — licencing disclosures, fee transparency, and complaint procedures.',
    author: 'Thomas van der Berg',
    authorInitials: 'TV',
    readTime: '9 min',
    date: 'Jan 2026',
    dateISO: '2026-01-22',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>',
    gradientFrom: '#2c1a4e',
    gradientTo: '#1e2a3e',
  },
  {
    slug: 'seo-for-accounting-firms-south-africa',
    type: 'SEO Guide',
    category: 'seo',
    title: 'SEO for Accounting Firms in South Africa: 2026 Strategy Guide',
    excerpt: 'How to rank your accounting firm on Google for "accountant in [city]" and other high-intent financial keywords using proven on-page SEO strategies.',
    author: 'Thomas van der Berg',
    authorInitials: 'TV',
    readTime: '14 min',
    date: 'Feb 2026',
    dateISO: '2026-02-18',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>',
    gradientFrom: '#c9a84c',
    gradientTo: '#a07c2c',
  },
]

const filteredResources = computed(() => {
  if (activeCategory.value === 'all') return resources
  return resources.filter(r => r.category === activeCategory.value)
})
</script>
