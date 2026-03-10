<template>
  <div class="what-we-do-page">

    <!-- ══ HERO ══ -->
    <section class="relative min-h-screen flex items-center bg-navy-900 overflow-hidden pt-28 pb-20 lg:pt-40 lg:pb-24" aria-label="Page hero">
      <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div class="absolute inset-0 opacity-[0.025]" style="background-image: linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px); background-size: 60px 60px;"></div>
        <div class="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-gold-500/30 hidden lg:block"></div>
        <div class="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-gold-500/30 hidden lg:block"></div>
      </div>
      <div class="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <BreadcrumbNav :crumbs="[{ label: 'How We Work', path: '/what-we-do' }]" />

        <span class="section-label reveal-up">Our Process — Serving Accounting Firms Across South Africa</span>
        <h1 class="font-serif text-display-lg text-white mt-4 mb-6 max-w-3xl reveal-up" style="transition-delay: 100ms;">
          Digital Workflow Optimisation<br/>
          for <span class="text-gradient">Accounting Firms</span>
        </h1>
        <p class="font-sans text-white/60 text-lg max-w-2xl leading-relaxed reveal-up" style="transition-delay: 200ms;">
          We don't just build accounting firm websites — we design, automate, and optimise complete digital workflows that reduce admin by up to 70% and help accounting firms, bookkeepers, and financial advisors win more clients.
        </p>
        <div class="gold-divider mt-8 reveal-up" style="transition-delay: 250ms;"></div>
      </div>
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce" aria-hidden="true">
        <span class="font-sans text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <div class="w-px h-12 bg-gradient-to-b from-white/30 to-transparent"></div>
      </div>
    </section>

    <!-- ══ PROBLEM / SOLUTION ══ -->
    <section class="section-padding bg-cream" aria-labelledby="problem-heading">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          <!-- Problem side -->
          <div class="reveal-up">
            <span class="section-label">The Challenge</span>
            <h2 id="problem-heading" class="font-serif text-display-sm text-navy-900 mb-6">
              What's Holding Your<br/><em>Accounting Firm Back Online?</em>
            </h2>
            <div class="gold-divider mb-8"></div>
            <p class="font-sans text-charcoal-600 text-base leading-relaxed mb-8">
              Most accounting firms in South Africa and globally suffer from the same digital problems: outdated websites that don't convert, zero CRM integration, manual client intake processes, and compliance risks they're not even aware of.
            </p>
            <div class="space-y-4">
              <div
                v-for="problem in problems"
                :key="problem"
                class="flex items-start gap-4 p-4 bg-red-50 border border-red-100"
              >
                <svg class="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
                <span class="font-sans text-charcoal-700 text-sm">{{ problem }}</span>
              </div>
            </div>
          </div>

          <!-- Solution side -->
          <div class="reveal-up" style="transition-delay: 150ms;">
            <span class="section-label">The Solution</span>
            <h2 class="font-serif text-display-sm text-navy-900 mb-6">
              How We Reduce Admin<br/><em>for Financial Professionals</em>
            </h2>
            <div class="gold-divider mb-8"></div>
            <p class="font-sans text-charcoal-600 text-base leading-relaxed mb-8">
              Our approach to <strong>accounting firm website design</strong> starts with your business outcomes. We connect your online presence to your CRM, automate client intake, and ensure every touchpoint reflects the trust and expertise your clients expect.
            </p>
            <div class="space-y-4">
              <div
                v-for="solution in solutions"
                :key="solution"
                class="flex items-start gap-4 p-4 bg-green-50 border border-green-100"
              >
                <svg class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="font-sans text-charcoal-700 text-sm">{{ solution }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ PROCESS TIMELINE ══ -->
    <section class="section-padding bg-navy-900 relative overflow-hidden" aria-labelledby="process-heading">
      <div class="absolute inset-0 opacity-[0.02] pointer-events-none" aria-hidden="true"
           style="background-image: linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px); background-size: 80px 80px;">
      </div>
      <div class="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <span class="section-label reveal-up">Our Process</span>
          <h2 id="process-heading" class="font-serif text-display-md text-white mb-4 reveal-up" style="transition-delay: 100ms;">
            How We Transform Your<br/>Accounting Firm's Digital Presence
          </h2>
          <div class="gold-divider-center reveal-up" style="transition-delay: 150ms;"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          <article
            v-for="(phase, i) in process"
            :key="phase.phase"
            class="reveal-up group"
            :style="{ transitionDelay: (i * 100) + 'ms' }"
          >
            <div class="relative p-8 border border-white/10 hover:border-gold-500/50 transition-all duration-300 hover:bg-white/5 h-full">
              <div class="absolute top-4 right-4 font-serif text-5xl font-bold text-white/5 group-hover:text-gold-500/10 transition-colors" aria-hidden="true">
                {{ String(i + 1).padStart(2, '0') }}
              </div>
              <div class="text-gold-500 font-sans text-xs font-semibold uppercase tracking-widest mb-4">
                Phase {{ i + 1 }}
              </div>
              <h3 class="font-serif text-xl text-white mb-4 group-hover:text-gold-400 transition-colors">
                {{ phase.phase }}
              </h3>
              <p class="font-sans text-white/50 text-sm leading-relaxed mb-6">{{ phase.description }}</p>
              <ul class="space-y-2">
                <li
                  v-for="deliverable in phase.deliverables"
                  :key="deliverable"
                  class="flex items-center gap-2 text-white/40 text-xs font-sans"
                >
                  <span class="w-1.5 h-1.5 bg-gold-500 rounded-full flex-shrink-0" aria-hidden="true"></span>
                  {{ deliverable }}
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ══ CAPABILITIES ══ -->
    <section class="section-padding bg-cream" aria-labelledby="capabilities-heading">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-16 reveal-up">
          <span class="section-label">Core Capabilities</span>
          <h2 id="capabilities-heading" class="font-serif text-display-md text-navy-900 mb-4">
            Tools That Help Accountants<br/><em>Grow Faster &amp; Work Smarter</em>
          </h2>
          <div class="gold-divider-center"></div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <article
            v-for="(cap, i) in capabilities"
            :key="cap.title"
            class="reveal-up group p-6 bg-white border border-navy-900/8 hover:border-gold-500/50 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            :style="{ transitionDelay: (i * 60) + 'ms' }"
          >
            <div class="w-10 h-10 flex items-center justify-center border border-gold-500/20 bg-gold-500/5 group-hover:bg-gold-500 group-hover:border-gold-500 transition-all duration-300 mb-5" aria-hidden="true">
              <svg class="w-5 h-5 text-gold-500 group-hover:text-navy-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="cap.icon"></svg>
            </div>
            <h3 class="font-sans font-semibold text-navy-900 text-sm mb-2 group-hover:text-gold-600 transition-colors">{{ cap.title }}</h3>
            <p class="font-sans text-charcoal-400 text-xs leading-relaxed">{{ cap.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- ══ RESULTS ══ -->
    <section class="section-padding-sm bg-gold-500" aria-labelledby="results-heading">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="result in results" :key="result.label" class="text-center reveal-up">
            <div class="font-serif text-4xl font-bold text-navy-900 mb-2">{{ result.value }}</div>
            <div class="font-sans text-navy-900/70 text-xs uppercase tracking-wider">{{ result.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ RELATED SERVICES ══ -->
    <RelatedServices :exclude="[]" />

    <!-- ══ CTA ══ -->
    <section class="section-padding-sm bg-navy-900" aria-labelledby="cta-heading">
      <div class="max-w-3xl mx-auto px-6 lg:px-8 text-center reveal-up">
        <h2 id="cta-heading" class="font-serif text-display-sm text-white mb-6">
          Ready to Reduce Admin at<br/><em class="text-gold-400">Your Accounting Firm?</em>
        </h2>
        <p class="font-sans text-white/60 mb-8">
          See how we've helped 127+ accounting firms, bookkeepers, and financial advisors across South Africa transform their digital presence and save 8–15 hours of admin per week.
        </p>
        <RouterLink to="/contact" class="btn-primary" aria-label="Book a strategy call to discuss your accounting firm website">
          Book a Strategy Call
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </RouterLink>
      </div>
    </section>

  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'
import { useSeoMeta, SCHEMAS } from '@/composables/useSeoMeta'
import BreadcrumbNav from '@/components/ui/BreadcrumbNav.vue'
import RelatedServices from '@/components/ui/RelatedServices.vue'

const { initReveal } = useScrollReveal()
onMounted(() => setTimeout(initReveal, 50))

useSeoMeta({
  title: 'How We Work | Digital Workflow Optimisation for Accounting Firms',
  description:
    'See how Zar Media Group helps accounting firms reduce admin, improve client intake, and grow revenue through managed websites and CRM workflow integration. Serving South Africa.',
  keywords:
    'digital workflow optimisation accountants, accounting firm website design, how to reduce admin accounting firms, financial sector digital transformation, CRM integration bookkeepers, South Africa',
  canonical: '/what-we-do',
  schemas: [
    SCHEMAS.breadcrumb([
      { name: 'Home', url: '/' },
      { name: 'How We Work', url: '/what-we-do' },
    ]),
    SCHEMAS.service({
      name: 'Digital Strategy & Workflow Optimisation for Accounting Firms',
      description:
        'Zar Media Group designs, builds, and continuously optimises digital workflows for accounting firms and financial professionals — reducing admin, automating client intake, and ensuring compliance.',
    }),
  ],
})

const problems = [
  'Outdated accounting firm website that doesn\'t generate leads or build trust',
  'Manual client intake — chasing documents, signatures, and payments by email',
  'No CRM integration — data lives in spreadsheets instead of your accounting software',
  'Compliance risks from unregulated data collection forms',
  'Competing with larger firms that have sophisticated digital presences',
]

const solutions = [
  'Fully managed website for accountants, continuously optimised for search and conversion',
  'Automated client intake with e-signatures, document upload, and instant CRM sync',
  'CRM integration for accountants connecting Xero, QuickBooks, and HubSpot',
  'Compliance-first architecture covering GDPR, POPIA, and financial sector standards',
  'Premium accounting firm website design that positions you as the expert in your market',
]

const process = [
  {
    phase: 'Discovery & Financial Strategy',
    description:
      'We map your firm\'s growth goals, ideal client profile, and current digital bottlenecks — then design a strategy to address each.',
    deliverables: ['Competitor analysis', 'Keyword research', 'Client journey mapping', 'Growth opportunity report'],
  },
  {
    phase: 'Compliance & Architecture',
    description:
      'We define your regulatory requirements (GDPR, POPIA, FSCA) and build a technical architecture that handles them from day one.',
    deliverables: ['Compliance checklist', 'Data flow diagram', 'Tech stack selection', 'Security protocols'],
  },
  {
    phase: 'Design & Brand System',
    description:
      'Create a premium visual identity and website design that communicates expertise, trust, and authority to financial clients.',
    deliverables: ['Brand guidelines', 'UI/UX design', 'Mobile-first layouts', 'Accessibility review'],
  },
  {
    phase: 'Development & Integration',
    description:
      'Build your accounting firm website and connect it to your CRM, accounting software, e-signature tools, and booking systems.',
    deliverables: ['Website build', 'CRM integration', 'Client portal setup', 'Workflow automation'],
  },
  {
    phase: 'Launch & SEO',
    description:
      'Go live with full on-page SEO optimisation, Google Search Console setup, and structured data for financial keywords.',
    deliverables: ['Technical SEO audit', 'Schema markup', 'Sitemap submission', 'GA4 setup'],
  },
  {
    phase: 'Ongoing Optimisation',
    description:
      'Monthly performance reviews, A/B testing, content updates, and admin automation improvements — included in your subscription.',
    deliverables: ['Monthly reports', 'Conversion optimisation', 'Content updates', 'Admin automation reviews'],
  },
]

const capabilities = [
  {
    title: 'Accounting Firm Website Design',
    description: 'Premium, mobile-first website design built specifically for accounting and tax firms.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/>',
  },
  {
    title: 'Client Portal Integration',
    description: 'Secure client portals for accountants with document exchange, e-signatures, and billing.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>',
  },
  {
    title: 'CRM Integration for Accountants',
    description: 'Connect your accounting website to HubSpot, Salesforce, or your practice management system.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>',
  },
  {
    title: 'Workflow Automation',
    description: 'Automate client intake, onboarding, document collection, and appointment booking for bookkeepers.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>',
  },
  {
    title: 'Financial SEO',
    description: 'Rank for "accountant near me" and targeted financial keywords that bring qualified leads.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>',
  },
  {
    title: 'Compliance Architecture',
    description: 'GDPR, POPIA, WCAG 2.1 AA — every build reviewed against financial sector compliance requirements.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>',
  },
  {
    title: 'Managed Hosting & Security',
    description: 'Enterprise-grade hosting with DDoS protection, SSL, and 99.9% uptime SLA for financial websites.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>',
  },
  {
    title: 'Analytics & Reporting',
    description: 'Monthly performance dashboards tracking leads generated, admin hours saved, and ROI for your accounting firm.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>',
  },
]

const results = [
  { value: '127+', label: 'Accounting Firms Served' },
  { value: '340%', label: 'Avg. Lead Increase' },
  { value: '70%', label: 'Admin Reduction' },
  { value: '98%', label: 'Client Retention' },
]
</script>
