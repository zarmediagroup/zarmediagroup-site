<template>
  <div class="compliance-page">
    <!-- PAGE HERO -->
    <section class="page-hero">
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute inset-0 opacity-[0.03]" style="background-image: linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px); background-size: 60px 60px;"></div>
      </div>
      <div class="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <span class="section-label reveal-up">Service</span>
        <h1 class="font-serif text-display-xl text-white mb-6 reveal-up" style="transition-delay: 100ms;">
          Compliance &amp; <em class="text-gold-400">Trust</em>
        </h1>
        <div class="gold-divider-center reveal-up" style="transition-delay: 150ms;"></div>
        <p class="font-sans text-white/60 text-xl max-w-2xl mx-auto leading-relaxed reveal-up" style="transition-delay: 200ms;">
          Every website we build starts with your regulatory requirements — not design preferences.
        </p>
      </div>
    </section>

    <!-- COMPLIANCE FRAMEWORK -->
    <section class="section-padding bg-cream">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          <div class="reveal-left">
            <span class="section-label">Our Approach</span>
            <h2 class="font-serif text-display-md text-navy-900 mb-6">Compliance Is a Feature, Not an Afterthought</h2>
            <div class="gold-divider"></div>
            <p class="font-sans text-charcoal-600 leading-relaxed mb-6">
              Most agencies treat compliance as a checklist item added at the end. We embed regulatory requirements into the foundation of every project — architecture, design decisions, content strategy, and data handling.
            </p>
            <p class="font-sans text-charcoal-600 leading-relaxed">
              Our compliance director (a former SEC attorney) reviews every client project before launch and annually thereafter.
            </p>
          </div>

          <!-- Certification Badges -->
          <div class="reveal-right">
            <div class="grid grid-cols-2 gap-4">
              <div
                v-for="cert in certifications"
                :key="cert.name"
                class="p-6 bg-white border border-navy-900/8 hover:border-gold-500/40 hover:shadow-card transition-all duration-300"
              >
                <div class="w-12 h-12 flex items-center justify-center border border-gold-500/30 bg-gold-500/10 mb-4">
                  <svg class="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="cert.icon"></svg>
                </div>
                <h4 class="font-sans font-bold text-navy-900 text-sm mb-1">{{ cert.name }}</h4>
                <p class="font-sans text-charcoal-500 text-xs leading-relaxed">{{ cert.desc }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Compliance Checklist -->
        <div class="reveal-up">
          <div class="text-center mb-12">
            <span class="section-label">Pre-Launch Audit</span>
            <h2 class="font-serif text-display-sm text-navy-900 mb-4">Our 47-Point Compliance Checklist</h2>
            <div class="gold-divider-center"></div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-for="(category, i) in complianceCategories"
              :key="category.title"
              class="reveal-up"
              :style="{ transitionDelay: (i * 100) + 'ms' }"
            >
              <div class="bg-white border border-navy-900/8 p-6 h-full">
                <div class="flex items-center gap-3 mb-5 pb-5 border-b border-navy-900/8">
                  <div class="w-8 h-8 bg-gold-500/10 border border-gold-500/30 flex items-center justify-center flex-shrink-0">
                    <svg class="w-4 h-4 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="category.icon"></svg>
                  </div>
                  <h3 class="font-sans font-bold text-navy-900 text-sm">{{ category.title }}</h3>
                </div>
                <ul class="space-y-2.5">
                  <li v-for="item in category.items" :key="item" class="flex items-start gap-2.5">
                    <svg class="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span class="font-sans text-charcoal-500 text-xs leading-relaxed">{{ item }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- DATA PROTECTION -->
    <section class="section-padding bg-navy-900">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16 reveal-up">
          <span class="section-label">Data Protection</span>
          <h2 class="font-serif text-display-md text-white mb-4">How We Protect Your Clients' Data</h2>
          <div class="gold-divider-center"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(protocol, i) in dataProtocols"
            :key="protocol.title"
            class="reveal-up text-center p-6 border border-white/10 hover:border-gold-500/40 transition-all"
            :style="{ transitionDelay: (i * 100) + 'ms' }"
          >
            <div class="w-16 h-16 mx-auto mb-6 border border-gold-500/30 flex items-center justify-center bg-gold-500/10">
              <svg class="w-7 h-7 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="protocol.icon"></svg>
            </div>
            <h3 class="font-sans font-bold text-white text-sm uppercase tracking-wider mb-3">{{ protocol.title }}</h3>
            <p class="font-sans text-white/50 text-sm leading-relaxed">{{ protocol.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- INDUSTRY ALIGNMENT -->
    <section class="section-padding bg-cream">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16 reveal-up">
          <span class="section-label">Regulatory Alignment</span>
          <h2 class="font-serif text-display-md text-navy-900 mb-4">Built for Your Regulatory Environment</h2>
          <div class="gold-divider-center"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div
            v-for="(reg, i) in regulations"
            :key="reg.name"
            class="reveal-up p-8 bg-white border border-navy-900/8 hover:border-gold-500/30 transition-all"
            :style="{ transitionDelay: (i * 100) + 'ms' }"
          >
            <div class="flex items-start gap-6">
              <div class="flex-shrink-0 w-16 h-16 bg-navy-900 flex items-center justify-center">
                <span class="font-serif text-gold-500 font-bold text-xs text-center">{{ reg.abbr }}</span>
              </div>
              <div>
                <h3 class="font-sans font-bold text-navy-900 text-base mb-2">{{ reg.name }}</h3>
                <p class="font-sans text-charcoal-500 text-sm leading-relaxed mb-4">{{ reg.desc }}</p>
                <div class="flex flex-wrap gap-2">
                  <span v-for="tag in reg.applies" :key="tag" class="tag text-xs">{{ tag }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="bg-navy-900 p-8 lg:p-12 text-center reveal-up">
          <h3 class="font-serif text-display-sm text-white mb-4">Is Your Current Website Compliant?</h3>
          <p class="font-sans text-white/60 mb-8 max-w-xl mx-auto">
            Get a free compliance audit of your existing digital presence. We'll identify risks and opportunities — no obligation.
          </p>
          <RouterLink to="/contact" class="btn-primary">
            Request a Free Compliance Audit
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

const { initReveal } = useScrollReveal()
onMounted(() => setTimeout(initReveal, 50))

const certifications = [
  {
    name: 'SOC 2 Type II',
    desc: 'Security, availability, and confidentiality controls independently audited',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>',
  },
  {
    name: 'GDPR Compliant',
    desc: 'Full GDPR compliance framework with data processing agreements',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>',
  },
  {
    name: 'CCPA Ready',
    desc: 'California Consumer Privacy Act compliant with opt-out mechanisms',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>',
  },
  {
    name: 'WCAG 2.1 AA',
    desc: 'Web Content Accessibility Guidelines compliance for all users',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>',
  },
]

const complianceCategories = [
  {
    title: 'SEC/FINRA Disclosures',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>',
    items: ['ADV disclosure placement', 'Performance advertising rules', 'Testimonial compliance (2021 Rule)', 'Third-party rating disclosure', 'CRD/IAPD link implementation'],
  },
  {
    title: 'Privacy & Data',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>',
    items: ['Privacy policy (GDPR/CCPA)', 'Cookie consent management', 'Data retention policies', 'Third-party data sharing disclosure', 'Right to deletion mechanism'],
  },
  {
    title: 'Technical Security',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>',
    items: ['SSL/TLS certificate (A+ rating)', 'HSTS implementation', 'CSP headers configured', 'Regular penetration testing', 'WAF protection enabled'],
  },
  {
    title: 'Accessibility',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>',
    items: ['WCAG 2.1 Level AA audit', 'Screen reader compatibility', 'Keyboard navigation', 'Color contrast ratios (4.5:1+)', 'Alt text for all images'],
  },
  {
    title: 'Content Compliance',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>',
    items: ['No misleading performance claims', 'Accurate credential representations', 'Required risk disclosures', 'Anti-spam CAN-SPAM compliance', 'No unsubstantiated guarantees'],
  },
  {
    title: 'Legal Documents',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>',
    items: ['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Disclaimer pages', 'Client agreement templates'],
  },
]

const dataProtocols = [
  {
    title: 'Encryption',
    desc: 'All data encrypted in transit (TLS 1.3) and at rest (AES-256)',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>',
  },
  {
    title: 'Access Control',
    desc: 'Role-based access control with MFA required for all admin access',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/>',
  },
  {
    title: 'Data Isolation',
    desc: 'Client data isolated per environment with no cross-contamination',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v10m0 0h10a2 2 0 002-2V9M9 13H5a2 2 0 00-2-2V9m0 0h18"/>',
  },
  {
    title: 'Audit Logging',
    desc: 'Complete audit trail of all data access and modifications',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>',
  },
]

const regulations = [
  {
    abbr: 'SEC\nFINRA',
    name: 'SEC & FINRA Regulations',
    desc: 'Full compliance with SEC Investment Advisor rules, FINRA advertising standards, and the updated 2021 Marketing Rule for investment advisors.',
    applies: ['RIAs', 'Broker-Dealers', 'Financial Planners'],
  },
  {
    abbr: 'IRS\nEA',
    name: 'IRS & Tax Professional Standards',
    desc: 'Compliant with Circular 230 requirements, PTIN disclosure requirements, and state CPA advertising rules across all 50 states.',
    applies: ['CPAs', 'EAs', 'Tax Preparers'],
  },
  {
    abbr: 'GDPR\nCCPA',
    name: 'Privacy Regulations (Global)',
    desc: 'GDPR-compliant for European clients, CCPA-compliant for California residents, with privacy-by-design architecture for all builds.',
    applies: ['All Financial Firms', 'International Clients'],
  },
  {
    abbr: 'ADA\nWCAG',
    name: 'ADA & Accessibility Standards',
    desc: 'Web Content Accessibility Guidelines 2.1 Level AA compliance, protecting against ADA lawsuits while serving all potential clients.',
    applies: ['All Businesses', 'Federal Contractors'],
  },
]
</script>

