<template>
  <div class="what-we-do-page">
    <!-- PAGE HERO -->
    <section class="page-hero">
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute inset-0 opacity-[0.03]" style="background-image: linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px); background-size: 60px 60px;"></div>
        <div class="absolute bottom-0 right-0 w-1/2 h-px bg-gradient-to-l from-gold-500/40 to-transparent"></div>
      </div>
      <div class="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <span class="section-label reveal-up">How We Work</span>
        <h1 class="font-serif text-display-xl text-white mb-6 reveal-up" style="transition-delay: 100ms;">
          Optimizing Financial<br/><em class="text-gold-400">Digital Systems</em>
        </h1>
        <div class="gold-divider-center reveal-up" style="transition-delay: 150ms;"></div>
        <p class="font-sans text-white/60 text-xl max-w-2xl mx-auto leading-relaxed reveal-up" style="transition-delay: 200ms;">
          A systematic approach to transforming your digital presence into a client-generating, trust-building asset.
        </p>
      </div>
    </section>

    <!-- PROBLEM / SOLUTION -->
    <section class="section-padding bg-cream">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <!-- Problem Side -->
          <div class="reveal-left">
            <span class="section-label text-red-400/80">The Problem</span>
            <h2 class="font-serif text-display-sm text-navy-900 mb-6">
              Most Financial Firms Are Leaving Money on the Table
            </h2>
            <div class="space-y-4">
              <div v-for="problem in problems" :key="problem" class="flex items-start gap-4 p-5 bg-red-50 border-l-2 border-red-300">
                <svg class="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
                <p class="font-sans text-charcoal-600 text-sm leading-relaxed">{{ problem }}</p>
              </div>
            </div>
          </div>

          <!-- Solution Side -->
          <div class="reveal-right">
            <span class="section-label">The Solution</span>
            <h2 class="font-serif text-display-sm text-navy-900 mb-6">
              A Digital System Engineered for Financial Growth
            </h2>
            <div class="space-y-4">
              <div v-for="solution in solutions" :key="solution" class="flex items-start gap-4 p-5 bg-gold-500/5 border-l-2 border-gold-500">
                <svg class="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <p class="font-sans text-charcoal-600 text-sm leading-relaxed">{{ solution }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Process Timeline -->
        <div class="mb-24">
          <div class="text-center mb-16 reveal-up">
            <span class="section-label">Our Process</span>
            <h2 class="font-serif text-display-md text-navy-900 mb-4">From Discovery to Dominance</h2>
            <div class="gold-divider-center"></div>
          </div>

          <div class="relative">
            <!-- Timeline line -->
            <div class="hidden lg:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent"></div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              <div
                v-for="(phase, i) in processPhases"
                :key="phase.title"
                class="relative reveal-up text-center lg:text-left"
                :style="{ transitionDelay: (i * 100) + 'ms' }"
              >
                <!-- Step indicator -->
                <div class="w-16 h-16 mx-auto lg:mx-0 mb-6 relative z-10 flex items-center justify-center border-2 border-gold-500 bg-cream">
                  <span class="font-serif text-gold-500 font-bold text-lg">{{ String(i + 1).padStart(2, '0') }}</span>
                </div>

                <!-- Duration badge -->
                <span class="tag text-xs mb-4 inline-block">{{ phase.duration }}</span>

                <h3 class="font-sans font-bold text-navy-900 text-sm uppercase tracking-wider mb-2">{{ phase.title }}</h3>
                <p class="font-sans text-charcoal-500 text-sm leading-relaxed">{{ phase.desc }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Capability Selector -->
        <div class="reveal-up">
          <div class="text-center mb-12">
            <span class="section-label">Capabilities</span>
            <h2 class="font-serif text-display-sm text-navy-900 mb-4">Select Your Focus Area</h2>
          </div>

          <div class="flex flex-wrap gap-3 justify-center mb-10">
            <button
              v-for="cap in capabilities"
              :key="cap.id"
              class="px-5 py-2.5 font-sans text-sm font-semibold transition-all duration-300 border"
              :class="[
                activeCapability === cap.id
                  ? 'bg-navy-900 text-gold-500 border-navy-900'
                  : 'bg-white text-charcoal-600 border-navy-900/20 hover:border-navy-900/50'
              ]"
              @click="activeCapability = cap.id"
            >
              {{ cap.label }}
            </button>
          </div>

          <Transition name="fade" mode="out-in">
            <div :key="activeCapability" class="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 bg-navy-900">
              <div>
                <h3 class="font-serif text-display-sm text-white mb-4">{{ activeCapabilityData.title }}</h3>
                <p class="font-sans text-white/60 leading-relaxed mb-6">{{ activeCapabilityData.description }}</p>
                <ul class="space-y-3">
                  <li v-for="feature in activeCapabilityData.features" :key="feature" class="flex items-center gap-3">
                    <svg class="w-4 h-4 text-gold-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span class="font-sans text-white/70 text-sm">{{ feature }}</span>
                  </li>
                </ul>
              </div>
              <div class="flex flex-col justify-between">
                <div class="space-y-3">
                  <div v-for="metric in activeCapabilityData.metrics" :key="metric.label" class="flex items-center justify-between p-4 border border-white/10">
                    <span class="font-sans text-white/50 text-sm">{{ metric.label }}</span>
                    <span class="font-serif text-gold-500 font-bold text-lg">{{ metric.value }}</span>
                  </div>
                </div>
                <RouterLink :to="activeCapabilityData.link" class="btn-secondary mt-6 self-start">
                  Explore This Service
                </RouterLink>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </section>

    <!-- CASE STUDIES HIGHLIGHTS -->
    <section class="section-padding bg-navy-900">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16 reveal-up">
          <span class="section-label">Proven Results</span>
          <h2 class="font-serif text-display-md text-white mb-4">Case Study Highlights</h2>
          <div class="gold-divider-center"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="(cs, i) in caseStudies"
            :key="cs.title"
            class="reveal-up group"
            :style="{ transitionDelay: (i * 100) + 'ms' }"
          >
            <div class="h-full glass-card p-8 hover:border-gold-500/40 transition-all duration-300">
              <div class="flex items-start justify-between mb-6">
                <span class="tag text-xs">{{ cs.sector }}</span>
                <span class="font-serif text-gold-500 text-3xl font-bold">{{ cs.result }}</span>
              </div>
              <h3 class="font-serif text-white text-xl mb-3">{{ cs.title }}</h3>
              <p class="font-sans text-white/50 text-sm leading-relaxed mb-6">{{ cs.description }}</p>
              <div class="grid grid-cols-2 gap-3 pt-6 border-t border-white/10">
                <div v-for="metric in cs.metrics" :key="metric.label">
                  <div class="font-serif text-gold-400 text-xl font-bold">{{ metric.value }}</div>
                  <div class="font-sans text-white/40 text-xs">{{ metric.label }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-12 reveal-up">
          <RouterLink to="/resources" class="btn-secondary">
            View All Case Studies
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-padding-sm bg-gold-500">
      <div class="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 class="font-serif text-display-sm text-navy-900 mb-6 reveal-up">
          Ready to Optimize Your Digital System?
        </h2>
        <p class="font-sans text-navy-900/70 text-lg mb-8 reveal-up" style="transition-delay: 100ms;">
          Let's identify the biggest revenue opportunities in your current digital presence — free, no obligation.
        </p>
        <RouterLink to="/contact" class="inline-flex items-center gap-2 px-8 py-4 bg-navy-900 text-gold-500 font-sans font-semibold text-sm tracking-wider uppercase border border-navy-900 hover:bg-navy-800 transition-colors reveal-up" style="transition-delay: 200ms;">
          Book a Free Audit
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

const { initReveal } = useScrollReveal()
onMounted(() => setTimeout(initReveal, 50))

const activeCapability = ref('web')

const problems = [
  'Generic website that looks like every other accounting firm',
  'No clear conversion path for visitors who want to become clients',
  'Outdated design that signals "small practice" rather than trusted advisor',
  'Missing compliance disclosures causing regulatory risk',
  'Disconnected from CRM, scheduling, and accounting software',
]

const solutions = [
  'Premium, bespoke design that positions you as the authority in your market',
  'Conversion-optimized user journeys with strategic CTAs and trust signals',
  'Compliance-first architecture reviewed against FINRA, SEC, and state regulations',
  'Seamless integration with your existing tech stack — no more manual data entry',
  'Ongoing optimization ensuring your site gets better every month',
]

const processPhases = [
  { title: 'Discovery', duration: 'Week 1', desc: 'Deep-dive stakeholder interviews, competitive audit, and regulatory review.' },
  { title: 'Strategy', duration: 'Week 1-2', desc: 'Conversion strategy, content architecture, and technical specification.' },
  { title: 'Design', duration: 'Week 2-4', desc: 'Premium UI/UX design aligned with your brand and compliance requirements.' },
  { title: 'Development', duration: 'Week 4-7', desc: 'Performance-optimized build with all integrations and testing.' },
  { title: 'Launch & Grow', duration: 'Ongoing', desc: 'Launch, analytics setup, and continuous optimization partnership.' },
]

const capabilities = [
  { id: 'web', label: 'Web Design & Dev' },
  { id: 'workflow', label: 'Workflow Integration' },
  { id: 'compliance', label: 'Compliance' },
  { id: 'seo', label: 'SEO & Growth' },
]

const capabilityDetails = {
  web: {
    title: 'Premium Web Design & Development',
    description: 'High-converting, compliance-ready websites built specifically for financial sector professionals. Every design decision is driven by conversion data from 127+ financial firm websites.',
    features: ['Custom UI/UX Design', 'Mobile-first Development', 'Performance Optimization', 'A/B Testing Framework', 'Analytics Integration'],
    metrics: [
      { label: 'Avg. Conversion Improvement', value: '+89%' },
      { label: 'Lighthouse Score', value: '95+' },
      { label: 'Time to Launch', value: '6 Wks' },
    ],
    link: '/services/website-as-a-service',
  },
  workflow: {
    title: 'Workflow Integration',
    description: 'Connect your digital presence to your operations. CRM sync, automated onboarding, client portal integration — remove friction from every touchpoint.',
    features: ['CRM Integration (HubSpot/Salesforce)', 'Calendar Booking Automation', 'Document Portal', 'Accounting Software Sync', 'Email Marketing Automation'],
    metrics: [
      { label: 'Time Saved per Week', value: '12hrs' },
      { label: 'Client Onboarding Speed', value: '+3x' },
      { label: 'Data Entry Reduction', value: '94%' },
    ],
    link: '/services/workflow-integration',
  },
  compliance: {
    title: 'Compliance & Trust Architecture',
    description: 'Purpose-built for regulated industries. We start every project with a compliance review and build in the appropriate disclosures, security measures, and data protection protocols.',
    features: ['FINRA/SEC Disclosure Framework', 'GDPR & CCPA Compliance', 'ADA/WCAG 2.1 AA Accessibility', 'SSL & Security Hardening', 'Privacy Policy Templates'],
    metrics: [
      { label: 'Compliance Issues Caught', value: '100%' },
      { label: 'Security Score', value: 'A+' },
      { label: 'Accessibility Score', value: '98/100' },
    ],
    link: '/services/compliance-trust',
  },
  seo: {
    title: 'SEO & Digital Growth',
    description: 'Dominate local and national search results for your target financial keywords. Our SEO strategy is built on financial services expertise, not generic tactics.',
    features: ['Financial Keyword Strategy', 'Local SEO Optimization', 'Technical SEO Architecture', 'Content Marketing Strategy', 'Google Business Profile'],
    metrics: [
      { label: 'Avg. Keyword Rankings', value: '+15' },
      { label: 'Organic Traffic Growth', value: '+220%' },
      { label: 'Lead from SEO', value: '+67%' },
    ],
    link: '/resources',
  },
}

const activeCapabilityData = computed(() => capabilityDetails[activeCapability.value])

const caseStudies = [
  {
    sector: 'CPA Firm',
    title: 'Regional CPA Grows from 40 to 120 Annual Clients',
    result: '+300%',
    description: 'A 3-partner CPA firm in Austin needed a digital presence that matched their premium positioning. New site, workflow integration, and SEO strategy delivered transformational growth.',
    metrics: [
      { label: 'New Clients (Yr 1)', value: '80+' },
      { label: 'Avg. Client Value', value: '+$4.2K' },
    ],
  },
  {
    sector: 'Tax Advisory',
    title: 'Tax Practice Doubles Revenue in 18 Months',
    result: '+127%',
    description: 'A solo tax advisor transformed their referral-dependent practice into a digital-first acquisition machine. Calendly integration alone saved 8 hours per week.',
    metrics: [
      { label: 'Revenue Growth', value: '2x' },
      { label: 'Time Saved/Week', value: '8hrs' },
    ],
  },
  {
    sector: 'Financial Planning',
    title: 'RIA Increases AUM by $40M Through Digital Presence',
    result: '+$40M',
    description: 'A Registered Investment Advisor needed a compliant, trust-building digital presence. SEO strategy targeting HNW individuals delivered exceptional qualified leads.',
    metrics: [
      { label: 'AUM Added', value: '$40M+' },
      { label: 'Lead Quality', value: '+340%' },
    ],
  },
]
</script>

