<template>
  <div class="resources-page">
    <!-- PAGE HERO -->
    <section class="page-hero">
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute inset-0 opacity-[0.03]" style="background-image: linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px); background-size: 60px 60px;"></div>
      </div>
      <div class="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <span class="section-label reveal-up">Knowledge Hub</span>
        <h1 class="font-serif text-display-xl text-white mb-6 reveal-up" style="transition-delay: 100ms;">
          Resources &amp; <em class="text-gold-400">Insights</em>
        </h1>
        <div class="gold-divider-center reveal-up" style="transition-delay: 150ms;"></div>
        <p class="font-sans text-white/60 text-xl max-w-2xl mx-auto leading-relaxed reveal-up" style="transition-delay: 200ms;">
          Whitepapers, case studies, and insights for financial professionals navigating the digital landscape.
        </p>
      </div>
    </section>

    <!-- FILTER BAR -->
    <section class="bg-white border-b border-navy-900/10 sticky top-20 z-30">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="flex items-center gap-0 overflow-x-auto hide-scrollbar py-1">
          <button
            v-for="filter in filters"
            :key="filter.id"
            class="flex-shrink-0 px-5 py-4 font-sans text-sm font-semibold transition-all border-b-2 whitespace-nowrap"
            :class="[
              activeFilter === filter.id
                ? 'border-gold-500 text-navy-900'
                : 'border-transparent text-charcoal-400 hover:text-charcoal-700'
            ]"
            @click="activeFilter = filter.id"
          >
            {{ filter.label }}
            <span class="ml-2 font-sans text-xs text-charcoal-300">{{ filter.count }}</span>
          </button>
        </div>
      </div>
    </section>

    <!-- FEATURED RESOURCE -->
    <section class="section-padding-sm bg-cream border-b border-navy-900/10">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="reveal-up">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-navy-900 overflow-hidden">
            <div class="p-10 lg:p-14 flex flex-col justify-center">
              <span class="tag text-xs mb-6">Featured Whitepaper</span>
              <h2 class="font-serif text-display-sm text-white mb-4">
                The Financial Firm's Complete Guide to Digital Transformation
              </h2>
              <p class="font-sans text-white/60 leading-relaxed mb-8">
                A 47-page deep dive into what separates the top 10% of digital financial firms from the rest. Includes exclusive data from 127 firm audits, ROI frameworks, and actionable checklists.
              </p>
              <div class="flex items-center gap-4 mb-8">
                <div class="flex items-center gap-2 font-sans text-white/40 text-xs">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                  </svg>
                  47 pages
                </div>
                <div class="flex items-center gap-2 font-sans text-white/40 text-xs">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  25 min read
                </div>
                <div class="flex items-center gap-2 font-sans text-white/40 text-xs">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                  </svg>
                  Free download
                </div>
              </div>
              <button class="btn-primary self-start" @click="showLeadModal = true">
                Download Free Whitepaper
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                </svg>
              </button>
            </div>
            <div class="hidden lg:flex items-center justify-center bg-navy-800 p-12">
              <div class="relative w-48">
                <!-- Book mockup -->
                <div class="w-full aspect-[3/4] bg-gradient-to-br from-gold-500 to-gold-700 shadow-gold-lg flex flex-col items-center justify-center p-6">
                  <div class="w-8 h-px bg-white/30 mb-3"></div>
                  <div class="font-serif text-white text-center font-bold text-sm leading-tight">The Financial Firm's Guide to Digital Transformation</div>
                  <div class="w-8 h-px bg-white/30 mt-3 mb-6"></div>
                  <div class="font-sans text-white/60 text-xs text-center">ZARMEDIAGROUP</div>
                </div>
                <div class="absolute inset-y-0 right-0 w-3 bg-gold-700/80" style="transform: perspective(200px) rotateY(-20deg);"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- RESOURCES GRID -->
    <section class="section-padding bg-cream">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div
            v-for="(resource, i) in filteredResources"
            :key="resource.title"
            class="reveal-up group cursor-pointer"
            :style="{ transitionDelay: (i * 80) + 'ms' }"
          >
            <div class="h-full bg-white border border-navy-900/8 hover:border-gold-500/40 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <!-- Resource type bar -->
              <div class="h-1" :style="{ backgroundColor: resource.typeColor }"></div>

              <div class="p-6">
                <div class="flex items-start justify-between mb-4">
                  <span class="tag text-xs" :style="{ borderColor: resource.typeColor + '40', color: resource.typeColor }">
                    {{ resource.type }}
                  </span>
                  <span class="font-sans text-charcoal-300 text-xs">{{ resource.date }}</span>
                </div>

                <h3 class="font-serif text-navy-900 text-lg mb-3 group-hover:text-navy-700 transition-colors leading-tight">
                  {{ resource.title }}
                </h3>
                <p class="font-sans text-charcoal-500 text-sm leading-relaxed mb-5 line-clamp-2">{{ resource.excerpt }}</p>

                <div class="flex items-center justify-between pt-4 border-t border-navy-900/8">
                  <div class="flex items-center gap-2">
                    <div class="w-7 h-7 rounded-full bg-navy-900 flex items-center justify-center">
                      <span class="font-serif text-gold-500 text-xs font-bold">{{ resource.author[0] }}</span>
                    </div>
                    <span class="font-sans text-charcoal-400 text-xs">{{ resource.author }}</span>
                  </div>
                  <span class="font-sans text-charcoal-300 text-xs flex items-center gap-1">
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    {{ resource.readTime }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Load More -->
        <div class="text-center reveal-up">
          <button class="btn-secondary">
            Load More Resources
          </button>
        </div>
      </div>
    </section>

    <!-- WEBINARS -->
    <section class="section-padding bg-navy-900">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16 reveal-up">
          <span class="section-label">Events</span>
          <h2 class="font-serif text-display-md text-white mb-4">Upcoming Webinars</h2>
          <div class="gold-divider-center"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="(webinar, i) in webinars"
            :key="webinar.title"
            class="reveal-up glass-card p-8 hover:border-gold-500/40 transition-all"
            :style="{ transitionDelay: (i * 100) + 'ms' }"
          >
            <div class="flex items-start gap-5">
              <div class="flex-shrink-0 text-center w-16 bg-gold-500/10 border border-gold-500/30 py-3">
                <div class="font-serif text-gold-500 font-bold text-2xl leading-none">{{ webinar.day }}</div>
                <div class="font-sans text-gold-400/70 text-xs uppercase tracking-wider mt-1">{{ webinar.month }}</div>
              </div>
              <div class="flex-1">
                <span class="tag text-xs mb-3 inline-block">{{ webinar.type }}</span>
                <h3 class="font-serif text-white text-lg mb-2">{{ webinar.title }}</h3>
                <p class="font-sans text-white/50 text-sm mb-4">{{ webinar.time }} · {{ webinar.duration }}</p>
                <button class="btn-text text-xs">
                  Register Free
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- NEWSLETTER -->
    <section class="section-padding bg-gold-500">
      <div class="max-w-2xl mx-auto px-6 lg:px-8 text-center">
        <span class="font-sans text-navy-900/60 text-xs font-semibold tracking-[0.2em] uppercase mb-4 block reveal-up">Stay Informed</span>
        <h2 class="font-serif text-display-sm text-navy-900 mb-4 reveal-up" style="transition-delay: 100ms;">
          The Financial Sector Digital Digest
        </h2>
        <p class="font-sans text-navy-900/70 mb-8 reveal-up" style="transition-delay: 200ms;">
          Weekly insights on digital strategy for financial professionals. No fluff, just actionable intelligence.
        </p>
        <form class="flex gap-0 max-w-md mx-auto reveal-up" style="transition-delay: 300ms;" @submit.prevent="subscribe">
          <input
            v-model="newsletterEmail"
            type="email"
            placeholder="your@firm.com"
            class="flex-1 px-5 py-4 bg-navy-900 text-white border border-navy-900 placeholder-white/30 focus:outline-none focus:border-white text-sm"
          />
          <button type="submit" class="px-6 py-4 bg-white text-navy-900 font-sans font-bold text-sm hover:bg-cream transition-colors">
            Subscribe
          </button>
        </form>
        <p class="font-sans text-navy-900/50 text-xs mt-4 reveal-up" style="transition-delay: 400ms;">
          Join 2,400+ financial professionals. Unsubscribe anytime.
        </p>
      </div>
    </section>

    <!-- Lead Capture Modal -->
    <BaseModal v-model="showLeadModal" title="Download Your Free Whitepaper" label="Lead Magnet" size="md">
      <div class="space-y-4">
        <p class="font-sans text-charcoal-600 text-sm">Enter your details to receive the whitepaper instantly.</p>
        <input v-model="leadForm.name" type="text" placeholder="Full Name" class="input-field" />
        <input v-model="leadForm.email" type="email" placeholder="Work Email" class="input-field" />
        <input v-model="leadForm.firm" type="text" placeholder="Firm Name" class="input-field" />
        <select v-model="leadForm.type" class="input-field">
          <option value="" disabled>Firm Type</option>
          <option>CPA / Accounting Firm</option>
          <option>Tax Services</option>
          <option>Financial Advisory / RIA</option>
          <option>Bookkeeping</option>
          <option>Other Financial Services</option>
        </select>
        <button class="btn-primary w-full justify-center" @click="downloadWhitepaper">
          Download Now — Free
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
          </svg>
        </button>
        <p class="font-sans text-charcoal-400 text-xs text-center">No spam. We respect your privacy.</p>
      </div>
    </BaseModal>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'
import BaseModal from '@/components/ui/BaseModal.vue'

const { initReveal } = useScrollReveal()
onMounted(() => setTimeout(initReveal, 50))

const activeFilter = ref('all')
const showLeadModal = ref(false)
const newsletterEmail = ref('')
const leadForm = ref({ name: '', email: '', firm: '', type: '' })

const filters = [
  { id: 'all', label: 'All Resources', count: '24' },
  { id: 'whitepaper', label: 'Whitepapers', count: '6' },
  { id: 'case-study', label: 'Case Studies', count: '8' },
  { id: 'guide', label: 'Guides', count: '5' },
  { id: 'blog', label: 'Insights', count: '5' },
]

const resources = [
  {
    type: 'Case Study',
    typeColor: '#C9A84C',
    title: 'How a 3-Partner CPA Firm 3x\'d Their Annual Client Intake',
    excerpt: 'A detailed breakdown of the digital strategy transformation that took a regional CPA firm from 40 to 120 annual clients in 12 months.',
    author: 'Alex Zar',
    date: 'Jan 2026',
    readTime: '8 min read',
    category: 'case-study',
  },
  {
    type: 'Whitepaper',
    typeColor: '#2d4f87',
    title: 'SEC Marketing Rule 2021: What Your Website Must Include',
    excerpt: 'A comprehensive guide to the updated SEC Marketing Rule and exactly what your investment advisor website must include to stay compliant.',
    author: 'Carlos Vélez',
    date: 'Dec 2025',
    readTime: '15 min read',
    category: 'whitepaper',
  },
  {
    type: 'Guide',
    typeColor: '#475570',
    title: 'The Financial Firm SEO Playbook: Rank for High-Value Keywords',
    excerpt: 'Our proven keyword strategy for financial firms targeting high-net-worth individuals, business owners, and estate planning clients.',
    author: 'Priya Mehta',
    date: 'Nov 2025',
    readTime: '12 min read',
    category: 'guide',
  },
  {
    type: 'Case Study',
    typeColor: '#C9A84C',
    title: 'RIA Adds $40M AUM Through Digital Presence Overhaul',
    excerpt: 'A registered investment advisor specialized in tech executives. See how their new website attracted the exact high-value clients they wanted.',
    author: 'Priya Mehta',
    date: 'Oct 2025',
    readTime: '10 min read',
    category: 'case-study',
  },
  {
    type: 'Insight',
    typeColor: '#3d629e',
    title: '5 Digital Mistakes That Are Costing Financial Firms Clients',
    excerpt: 'After auditing 127 financial firm websites, we identified the 5 most common mistakes that quietly kill conversion rates and client trust.',
    author: 'Marina Reyes',
    date: 'Sep 2025',
    readTime: '6 min read',
    category: 'blog',
  },
  {
    type: 'Guide',
    typeColor: '#475570',
    title: 'Calendly + HubSpot Integration Guide for Financial Firms',
    excerpt: 'Step-by-step guide to connecting your scheduling system to your CRM for automated lead capture, follow-up, and client onboarding.',
    author: 'James O\'Brien',
    date: 'Aug 2025',
    readTime: '9 min read',
    category: 'guide',
  },
]

const filteredResources = computed(() => {
  if (activeFilter.value === 'all') return resources
  return resources.filter(r => r.category === activeFilter.value)
})

const webinars = [
  {
    day: '24',
    month: 'Feb',
    title: 'From Website to Revenue Engine: A Live Teardown of 3 Financial Firm Sites',
    time: '2:00 PM EST',
    duration: '60 min',
    type: 'Live Webinar',
  },
  {
    day: '10',
    month: 'Mar',
    title: 'SEC Marketing Rule Compliance: What Your Website Needs in 2026',
    time: '1:00 PM EST',
    duration: '45 min',
    type: 'Compliance Webinar',
  },
  {
    day: '25',
    month: 'Mar',
    title: 'How to Generate 5-Figure Clients from Organic Search: RIA Case Study',
    time: '3:00 PM EST',
    duration: '60 min',
    type: 'Strategy Session',
  },
  {
    day: '8',
    month: 'Apr',
    title: 'CRM Integration Workshop: Connect Your Website to Your Entire Workflow',
    time: '2:00 PM EST',
    duration: '90 min',
    type: 'Workshop',
  },
]

function subscribe() {
  if (newsletterEmail.value) {
    alert('Thank you! You\'re now subscribed to the Financial Sector Digital Digest.')
    newsletterEmail.value = ''
  }
}

function downloadWhitepaper() {
  if (leadForm.value.name && leadForm.value.email) {
    showLeadModal.value = false
    alert('Your whitepaper is on its way! Check your inbox.')
    leadForm.value = { name: '', email: '', firm: '', type: '' }
  }
}
</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar { display: none; }
.hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>

