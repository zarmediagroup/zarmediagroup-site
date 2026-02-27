<template>
  <div class="compliance-page">

    <!-- ══ HERO ══ -->
    <section class="relative min-h-[65vh] flex items-end pb-20 bg-navy-900 overflow-hidden pt-40" aria-label="Compliance service hero">
      <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div class="absolute inset-0 opacity-[0.025]" style="background-image: linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px); background-size: 60px 60px;"></div>
        <div class="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-gold-500/30"></div>
        <div class="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-gold-500/30"></div>
      </div>
      <div class="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <BreadcrumbNav :crumbs="[
          { label: 'Services', path: '/services' },
          { label: 'Compliance & Trust', path: '/services/compliance-trust' }
        ]" />

        <span class="section-label reveal-up">Service — Compliant Digital Presence for Regulated Industries</span>
        <h1 class="font-serif text-display-lg text-white mt-4 mb-6 max-w-3xl reveal-up" style="transition-delay: 100ms;">
          Compliant Website Design<br/>
          <span class="text-gradient">for Financial Services</span>
        </h1>
        <p class="font-sans text-white/60 text-lg max-w-2xl leading-relaxed reveal-up" style="transition-delay: 200ms;">
          Every accounting firm website and financial services website we build is reviewed against GDPR, POPIA, WCAG 2.1 AA, and South African financial sector regulations — protecting your firm and building trust with clients in regulated industries.
        </p>
        <div class="gold-divider mt-8 reveal-up" style="transition-delay: 250ms;"></div>

        <div class="flex flex-col sm:flex-row gap-4 mt-10 reveal-up" style="transition-delay: 300ms;">
          <RouterLink to="/contact" class="btn-primary" aria-label="Get a compliance audit for your accounting firm website">
            Request Compliance Audit
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </RouterLink>
          <RouterLink to="/resources" class="btn-ghost" aria-label="Read our compliance guides for accountants">
            Compliance Resources
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- ══ REGULATIONS OVERVIEW ══ -->
    <section class="section-padding bg-cream" aria-labelledby="regulations-heading">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="max-w-2xl mb-14 reveal-up">
          <span class="section-label">Regulatory Framework</span>
          <h2 id="regulations-heading" class="font-serif text-display-md text-navy-900 mb-6">
            Compliant Digital Presence<br/><em>for Every Regulation That Matters</em>
          </h2>
          <div class="gold-divider mb-8"></div>
          <p class="font-sans text-charcoal-600 text-lg leading-relaxed">
            Regulated industries like accounting, financial advisory, and tax services cannot afford compliance gaps online. A poorly built accounting firm website can create data protection violations, accessibility lawsuits, and regulatory sanctions — before you've served a single client through it.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <article
            v-for="(regulation, i) in regulations"
            :key="regulation.name"
            class="reveal-up p-7 bg-white border border-navy-900/8 hover:border-gold-500/50 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            :style="{ transitionDelay: (i * 80) + 'ms' }"
          >
            <div class="flex items-center gap-3 mb-5">
              <div class="w-10 h-10 flex items-center justify-center border border-gold-500/20 bg-gold-500/5 flex-shrink-0" aria-hidden="true">
                <svg class="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="regulation.icon"></svg>
              </div>
              <div>
                <div class="font-sans font-bold text-navy-900 text-sm">{{ regulation.name }}</div>
                <div class="font-sans text-gold-600 text-xs">{{ regulation.scope }}</div>
              </div>
            </div>
            <p class="font-sans text-charcoal-500 text-sm leading-relaxed mb-4">{{ regulation.description }}</p>
            <ul class="space-y-1.5">
              <li
                v-for="req in regulation.requirements"
                :key="req"
                class="flex items-center gap-2 text-charcoal-400 text-xs font-sans"
              >
                <svg class="w-3 h-3 text-gold-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                {{ req }}
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <!-- ══ COMPLIANCE CHECKLIST ══ -->
    <section class="section-padding bg-navy-900" aria-labelledby="checklist-heading">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div class="reveal-up">
            <span class="section-label">Compliance Checklist</span>
            <h2 id="checklist-heading" class="font-serif text-display-md text-white mb-6">
              Is Your Financial Services<br/><em class="text-gold-400">Website Truly Compliant?</em>
            </h2>
            <div class="gold-divider mb-8"></div>
            <p class="font-sans text-white/60 text-lg leading-relaxed mb-8">
              Most accounting firm websites fail at least half of these compliance requirements. Our free audit identifies every gap and gives you a prioritised remediation plan.
            </p>
            <RouterLink to="/contact" class="btn-secondary" aria-label="Get a free compliance audit for your financial services website">
              Get Free Audit
            </RouterLink>
          </div>

          <div class="space-y-3 reveal-up" style="transition-delay: 150ms;">
            <div
              v-for="(item, i) in complianceChecklist"
              :key="item.check"
              class="flex items-start gap-4 p-4 border transition-all duration-200"
              :class="item.common
                ? 'border-red-500/20 bg-red-500/5'
                : 'border-white/10 hover:border-white/20'"
            >
              <div
                class="w-5 h-5 flex-shrink-0 flex items-center justify-center mt-0.5 border"
                :class="item.common ? 'border-red-500 bg-red-500/20' : 'border-gold-500 bg-gold-500/10'"
                aria-hidden="true"
              >
                <svg v-if="item.common" class="w-3 h-3 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/>
                </svg>
                <svg v-else class="w-3 h-3 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <div>
                <p class="font-sans text-white/80 text-sm">{{ item.check }}</p>
                <p v-if="item.common" class="font-sans text-red-400 text-xs mt-1">⚠ Commonly failed by accounting firm websites</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ SECURITY CERTIFICATIONS ══ -->
    <section class="section-padding bg-cream" aria-labelledby="security-heading">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-14 reveal-up">
          <span class="section-label">Security Standards</span>
          <h2 id="security-heading" class="font-serif text-display-md text-navy-900 mb-4">
            Enterprise-Grade Security<br/><em>for Financial Websites</em>
          </h2>
          <div class="gold-divider-center"></div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-5">
          <div
            v-for="(cert, i) in securityCerts"
            :key="cert.name"
            class="reveal-up p-6 bg-white border border-navy-900/8 text-center hover:border-gold-500/50 transition-all duration-300"
            :style="{ transitionDelay: (i * 80) + 'ms' }"
          >
            <div class="w-14 h-14 mx-auto mb-4 flex items-center justify-center border border-gold-500/20 bg-gold-500/5" aria-hidden="true">
              <svg class="w-7 h-7 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="cert.icon"></svg>
            </div>
            <div class="font-sans font-bold text-navy-900 text-xs uppercase tracking-wide">{{ cert.name }}</div>
            <div class="font-sans text-charcoal-400 text-xs mt-1">{{ cert.description }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ RELATED SERVICES ══ -->
    <RelatedServices :exclude="['compliance']" />

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
  title: 'Compliant Website Design for Financial Services | Zar Media Group',
  description:
    'Purpose-built compliant digital presence for regulated financial industries. GDPR, POPIA, WCAG 2.1 AA, and financial sector regulation-ready websites for accountants, financial advisors, and tax professionals.',
  keywords:
    'compliant website financial services, compliant digital presence regulated industries, GDPR financial website, financial services web compliance, POPIA compliance website, accounting website compliance, WCAG financial website',
  canonical: '/services/compliance-trust',
  schemas: [
    SCHEMAS.breadcrumb([
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
      { name: 'Compliance & Trust', url: '/services/compliance-trust' },
    ]),
    SCHEMAS.service({
      name: 'Compliant Website Design for Financial Services',
      description:
        'Purpose-built compliant digital presence for regulated industries. Every website reviewed against GDPR, POPIA, WCAG 2.1 AA, and South African financial sector regulations.',
    }),
    SCHEMAS.faqPage([
      {
        question: 'What compliance regulations apply to accounting firm websites in South Africa?',
        answer:
          'Accounting firm websites in South Africa must comply with POPIA (Protection of Personal Information Act) for data collection, WCAG 2.1 AA for accessibility, and relevant FSCA (Financial Sector Conduct Authority) requirements for firms that provide financial advice. Firms serving international clients must also comply with GDPR.',
      },
      {
        question: 'What does a compliant digital presence mean for regulated industries?',
        answer:
          'A compliant digital presence for regulated industries means your website handles client data according to applicable privacy laws, is accessible to users with disabilities (WCAG 2.1 AA), displays required regulatory disclosures, uses secure data collection forms, and has appropriate cookie consent mechanisms.',
      },
    ]),
  ],
})

const regulations = [
  {
    name: 'POPIA',
    scope: 'South Africa — Mandatory',
    description: 'The Protection of Personal Information Act governs how accounting firms collect, store, and process client data on their websites.',
    requirements: ['Lawful data processing basis', 'Privacy policy requirements', 'Cookie consent mechanisms', 'Data breach notification'],
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"/>',
  },
  {
    name: 'GDPR',
    scope: 'EU/UK — If Applicable',
    description: 'If you serve clients in the EU or UK, GDPR compliance is mandatory on your accounting website — including explicit consent and right to erasure.',
    requirements: ['Explicit consent for data collection', 'Right to erasure request process', 'Data processing agreements', 'Cookie consent banner'],
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>',
  },
  {
    name: 'WCAG 2.1 AA',
    scope: 'Global — Best Practice',
    description: 'Web Content Accessibility Guidelines ensure your accounting website is usable by clients with visual, hearing, motor, or cognitive impairments.',
    requirements: ['Keyboard navigation support', 'Screen reader compatibility', 'Sufficient colour contrast', 'Alt text on all images'],
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>',
  },
  {
    name: 'FSCA Requirements',
    scope: 'South Africa — Financial Advisors',
    description: 'Financial Sector Conduct Authority guidelines mandate specific disclosures and licensing information on financial services websites.',
    requirements: ['FSP licence number display', 'Regulatory disclosures', 'Complaint process information', 'FAIS Act compliance'],
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>',
  },
  {
    name: 'SAICA Standards',
    scope: 'South Africa — CA Firms',
    description: 'South African Institute of Chartered Accountants membership requires specific conduct standards reflected in how CA firms present themselves online.',
    requirements: ['Professional conduct standards', 'Accurate qualifications display', 'Avoiding misleading claims', 'Testimonial guidelines'],
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>',
  },
  {
    name: 'SSL & Data Security',
    scope: 'Global — Mandatory',
    description: 'TLS 1.3 encryption, secure contact forms, and data-at-rest encryption for any financial information processed through your website.',
    requirements: ['TLS 1.3 SSL certificate', 'Encrypted data transmission', 'Secure form handling', 'PCI DSS for payments'],
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>',
  },
]

const complianceChecklist = [
  { check: 'Privacy policy accurately describes all data collection activities', common: false },
  { check: 'Cookie consent banner with granular opt-in/opt-out controls', common: true },
  { check: 'Contact forms collect only data that is necessary (POPIA minimum data principle)', common: true },
  { check: 'All images have descriptive alt text (WCAG 2.1 AA)', common: true },
  { check: 'Website passes keyboard-only navigation test', common: true },
  { check: 'Colour contrast ratio meets WCAG 2.1 AA (4.5:1 for normal text)', common: false },
  { check: 'FSCA licence number prominently displayed (for financial advisors)', common: false },
  { check: 'SSL certificate active and enforced (HTTPS everywhere)', common: false },
  { check: 'Data breach response process documented and accessible', common: true },
  { check: 'Third-party scripts (analytics, chat) included in cookie disclosure', common: true },
]

const securityCerts = [
  {
    name: 'SSL/TLS',
    description: 'TLS 1.3 encryption on all pages',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>',
  },
  {
    name: 'DDoS Protection',
    description: 'Enterprise-grade attack mitigation',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>',
  },
  {
    name: 'Daily Backups',
    description: 'Automated off-site backups',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>',
  },
  {
    name: 'WAF',
    description: 'Web Application Firewall active',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>',
  },
]
</script>
