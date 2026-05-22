<template>
  <div class="resources-page">

    <!-- ══ HERO ══ -->
    <section class="relative min-h-screen flex items-center bg-navy-900 overflow-hidden pt-28 pb-20 lg:pt-40 lg:pb-24" aria-label="Resources page hero">
      <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div class="absolute inset-0 opacity-[0.025]" style="background-image: linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px); background-size: 60px 60px;"></div>
        <div class="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-gold-500/30 hidden lg:block"></div>
        <div class="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-gold-500/30 hidden lg:block"></div>
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
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce" aria-hidden="true">
        <span class="font-sans text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <div class="w-px h-12 bg-gradient-to-b from-white/30 to-transparent"></div>
      </div>
    </section>

    <!-- ══ FILTER ══ -->
    <div class="bg-navy-950 border-b border-white/5 sticky top-[5rem] z-30" role="navigation" aria-label="Resource category filter">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="flex gap-0 overflow-x-auto -mx-6 px-6 lg:mx-0 lg:px-0" role="tablist" aria-label="Filter resources by category">
          <button
            v-for="category in categories"
            :key="category.id"
            class="font-sans text-xs sm:text-sm font-semibold px-4 sm:px-5 py-3 sm:py-4 transition-all duration-200 whitespace-nowrap flex-shrink-0 border-b-2"
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
            :key="`${activeCategory}-${resource.slug}`"
            class="reveal-up group"
            :style="{ transitionDelay: (i * 60) + 'ms' }"
          >
            <RouterLink :to="`/resources/${resource.slug}`" class="block h-full bg-white border border-navy-900/8 hover:border-gold-500/50 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden" :aria-label="`Read: ${resource.title}`">
              <!-- Resource image area -->
              <div class="relative w-full h-48 overflow-hidden">
                <!-- Real photo -->
                <img
                  :src="resource.image"
                  :alt="resource.imageAlt"
                  class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width="600"
                  height="192"
                />
                <!-- Dark overlay with gradient tint -->
                <div
                  class="absolute inset-0 opacity-70"
                  :style="{ background: `linear-gradient(135deg, ${resource.gradientFrom}cc 0%, ${resource.gradientTo}99 100%)` }"
                  aria-hidden="true"
                ></div>
                <!-- Type badge -->
                <div class="absolute top-4 left-4 z-10">
                  <span class="font-sans text-xs font-semibold text-white/95 bg-black/40 px-2.5 py-1 backdrop-blur-sm uppercase tracking-wide">
                    {{ resource.type }}
                  </span>
                </div>
                <!-- Read time -->
                <div class="absolute bottom-4 left-4 z-10">
                  <span class="font-sans text-white/70 text-xs">{{ resource.readTime }} read</span>
                </div>
                <!-- Arrow icon -->
                <div class="absolute bottom-4 right-4 z-10 w-9 h-9 flex items-center justify-center bg-white/10 border border-white/30 group-hover:bg-white group-hover:border-white transition-all duration-300" aria-hidden="true">
                  <svg class="w-4 h-4 text-white group-hover:text-navy-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  {{ resource.title }}
                </h2>
                <p class="font-sans text-charcoal-500 text-sm leading-relaxed mb-5">{{ resource.excerpt }}</p>

                <div class="flex items-center justify-between pt-4 border-t border-navy-900/8">
                  <div class="flex items-center gap-2">
                    <img
                      :src="resource.authorPhoto"
                      :alt="resource.author"
                      class="w-7 h-7 rounded-full object-cover object-top"
                      loading="lazy"
                      width="28"
                      height="28"
                    />
                    <span class="font-sans text-charcoal-400 text-xs">{{ resource.author }}</span>
                  </div>
                  <time class="font-sans text-charcoal-400 text-xs" :datetime="resource.dateISO">{{ resource.date }}</time>
                </div>
              </div>
            </RouterLink>
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
          Join 300+ accountants and financial advisors who receive our fortnightly newsletter on digital strategy, compliance updates, and client growth tactics — tailored for the South African financial sector.
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
        <p class="font-sans text-navy-900/50 text-xs mt-3">No spam. Unsubscribe anytime. 300+ subscribers.</p>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, nextTick } from 'vue'
import { RouterLink } from 'vue-router'
import { useScrollReveal } from '@/composables/useScrollReveal'
import { useSeoMeta, SCHEMAS } from '@/composables/useSeoMeta'
import { getPageSeo } from '@/data/seo-pages'

const pageSeo = getPageSeo('resources')
import BreadcrumbNav from '@/components/ui/BreadcrumbNav.vue'
import { resources } from '@/data/resources.js'

const { initReveal } = useScrollReveal()
onMounted(() => setTimeout(initReveal, 50))

const activeCategory = ref('all')

// Re-run reveal whenever the filter changes so newly rendered cards become visible
watch(activeCategory, () => {
  nextTick(() => setTimeout(initReveal, 50))
})
const openFaq = ref(null)
const email = ref('')
const submitSuccess = ref(false)

function handleNewsletterSubmit() {
  submitSuccess.value = true
  email.value = ''
}

const faqs = [
  {
    question: 'How do I reduce admin for my accounting firm with a client portal?',
    answer:
      'Start by moving repeatable client work out of email: secure document exchange, checklist-driven uploads, e-signatures, and CRM-ready intake. When your portal and firm website share the same managed stack, fewer enquiries fall through the cracks and your team stops re-keying data.',
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
      'Yes — our Essentials plan is specifically designed for sole practitioners and small bookkeeping practices. You get a professionally designed firm website plus portal-ready foundations from R2,999/month, which typically generates ROI within the first month by attracting even one new client.',
  },
  {
    question: 'How does Zar Media Group help with financial sector compliance on websites?',
    answer:
      'We review every accounting and financial services website we build against POPIA, GDPR (if applicable), WCAG 2.1 AA accessibility standards, and FSCA requirements. We implement compliant cookie consent, privacy policies, data handling forms, and accessibility features — and monitor compliance monthly.',
  },
]

useSeoMeta({
  title: pageSeo.title,
  description: pageSeo.description,
  keywords: pageSeo.keywords,
  canonical: pageSeo.canonical,
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

const filteredResources = computed(() => {
  if (activeCategory.value === 'all') return resources
  return resources.filter(r => r.category === activeCategory.value)
})
</script>
