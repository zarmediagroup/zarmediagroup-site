<template>
  <div class="workflow-page">

    <!-- ══ HERO ══ -->
    <section class="relative min-h-screen flex items-center bg-navy-900 overflow-hidden pt-28 pb-20 lg:pt-40 lg:pb-24" aria-label="Workflow integration service hero">
      <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div class="absolute inset-0 opacity-[0.025]" style="background-image: linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px); background-size: 60px 60px;"></div>
        <div class="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-gold-500/30 hidden lg:block"></div>
        <div class="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-gold-500/30 hidden lg:block"></div>
      </div>
      <div class="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <BreadcrumbNav :crumbs="[
          { label: 'Services', path: '/services' },
          { label: 'Workflow Integration', path: '/services/workflow-integration' }
        ]" />

        <span class="section-label reveal-up">Service — CRM &amp; Software Integration for Financial Firms</span>
        <h1 class="font-serif text-display-lg text-white mt-4 mb-6 max-w-3xl reveal-up" style="transition-delay: 100ms;">
          CRM &amp; Workflow Integration<br/>
          <span class="text-gradient">for Accounting Firms</span>
        </h1>
        <p class="font-sans text-white/60 text-lg max-w-2xl leading-relaxed reveal-up" style="transition-delay: 200ms;">
          Eliminate manual admin by connecting your accounting website to Xero, QuickBooks, HubSpot, and your client portal. Automate client onboarding, document collection, and appointment booking — saving 8–15 hours per week for your accounting team.
        </p>
        <div class="gold-divider mt-8 reveal-up" style="transition-delay: 250ms;"></div>

        <div class="flex flex-col sm:flex-row gap-4 mt-10 reveal-up" style="transition-delay: 300ms;">
          <RouterLink to="/contact" class="btn-primary" aria-label="Get a workflow integration demo for your accounting firm">
            See a Live Demo
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </RouterLink>
          <RouterLink to="/what-we-do" class="btn-ghost" aria-label="Understand our full digital approach for accountants">
            Our Full Process
          </RouterLink>
        </div>
      </div>
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce" aria-hidden="true">
        <span class="font-sans text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <div class="w-px h-12 bg-gradient-to-b from-white/30 to-transparent"></div>
      </div>
    </section>

    <!-- ══ ADMIN PROBLEM ══ -->
    <section class="section-padding bg-cream" aria-labelledby="problem-heading">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-14 reveal-up">
          <span class="section-label">The Admin Problem</span>
          <h2 id="problem-heading" class="font-serif text-display-md text-navy-900 mb-4">
            How Much Admin is<br/><em>Your Accounting Team Wasting?</em>
          </h2>
          <div class="gold-divider-center"></div>
          <p class="font-sans text-charcoal-600 text-lg leading-relaxed mt-6">
            The average accounting firm in South Africa spends <strong>12+ hours per week</strong> on administrative tasks that should be automated: chasing client documents, manually entering data, following up on unsigned agreements, and re-keying information from emails into accounting software.
          </p>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10 sm:mb-14">
          <div
            v-for="(stat, i) in adminStats"
            :key="stat.label"
            class="reveal-up p-6 bg-white border border-navy-900/8 text-center"
            :style="{ transitionDelay: (i * 80) + 'ms' }"
          >
            <div class="font-serif text-3xl font-bold text-gold-500 mb-2">{{ stat.value }}</div>
            <div class="font-sans text-navy-900 text-sm font-semibold mb-1">{{ stat.label }}</div>
            <div class="font-sans text-charcoal-400 text-xs">{{ stat.detail }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ INTEGRATIONS ══ -->
    <section class="section-padding bg-navy-900" aria-labelledby="integrations-heading">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-14 reveal-up">
          <span class="section-label">Integration Ecosystem</span>
          <h2 id="integrations-heading" class="font-serif text-display-md text-white mb-4">
            Connect Your Accounting Tools<br/><em class="text-gold-400">Into One Seamless System</em>
          </h2>
          <div class="gold-divider-center"></div>
          <p class="font-sans text-white/60 text-lg leading-relaxed mt-6">
            Our <strong>CRM integration for accountants</strong> connects all the tools your practice depends on — eliminating double-entry, reducing errors, and giving you a single view of every client relationship.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <article
            v-for="(integration, i) in integrations"
            :key="integration.category"
            class="reveal-up group"
            :style="{ transitionDelay: (i * 80) + 'ms' }"
          >
            <div class="p-6 border border-white/10 hover:border-gold-500/50 hover:bg-white/5 transition-all duration-300 h-full">
              <div class="flex items-center gap-3 mb-5">
                <div class="w-8 h-8 flex items-center justify-center bg-gold-500/10 border border-gold-500/30" aria-hidden="true">
                  <svg class="w-4 h-4 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="integration.icon"></svg>
                </div>
                <h3 class="font-sans font-semibold text-gold-400 text-xs uppercase tracking-wider">{{ integration.category }}</h3>
              </div>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tool in integration.tools"
                  :key="tool"
                  class="font-sans text-xs text-white/60 bg-white/5 border border-white/10 px-2.5 py-1 group-hover:border-white/20 transition-colors"
                >
                  {{ tool }}
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ══ WORKFLOW AUTOMATION ══ -->
    <section class="section-padding bg-cream" aria-labelledby="automation-heading">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="reveal-up">
            <span class="section-label">Workflow Automation</span>
            <h2 id="automation-heading" class="font-serif text-display-md text-navy-900 mb-6">
              Automate Client Intake<br/><em>for Bookkeepers &amp; Accountants</em>
            </h2>
            <div class="gold-divider mb-8"></div>
            <p class="font-sans text-charcoal-600 text-lg leading-relaxed mb-8">
              Our <strong>workflow automation for bookkeepers</strong> and accounting firms transforms the way you onboard and service clients. From the moment a prospect fills in your contact form to the moment they sign their engagement letter — the entire process can be automated.
            </p>
            <RouterLink to="/contact" class="btn-primary" aria-label="Automate your accounting firm's client intake">
              Automate My Practice
            </RouterLink>
          </div>

          <div class="space-y-4 reveal-up" style="transition-delay: 150ms;">
            <div
              v-for="(step, i) in automationSteps"
              :key="step.title"
              class="group flex items-start gap-5 p-5 bg-white border border-navy-900/8 hover:border-gold-500/50 hover:shadow-card-hover transition-all duration-300"
            >
              <div class="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-gold-500 text-navy-900" aria-hidden="true">
                <span class="font-serif font-bold text-sm">{{ i + 1 }}</span>
              </div>
              <div>
                <h3 class="font-sans font-semibold text-navy-900 text-sm mb-1 group-hover:text-gold-600 transition-colors">{{ step.title }}</h3>
                <p class="font-sans text-charcoal-400 text-sm leading-relaxed">{{ step.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ CLIENT PORTAL SECTION ══ -->
    <section class="section-padding bg-navy-950" aria-labelledby="portal-heading">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-14 reveal-up">
          <span class="section-label">Client Portals for Accountants</span>
          <h2 id="portal-heading" class="font-serif text-display-md text-white mb-4">
            The Best Client Portal<br/><em class="text-gold-400">for Small Accounting Firms</em>
          </h2>
          <div class="gold-divider-center"></div>
          <p class="font-sans text-white/60 text-lg leading-relaxed mt-6">
            Give clients a secure, branded portal where they can upload documents, sign agreements, make payments, and track their engagement — all from your own accounting firm website, not a third-party platform.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <article
            v-for="(feature, i) in portalFeatures"
            :key="feature.title"
            class="reveal-up p-6 border border-white/10 hover:border-gold-500/50 hover:bg-white/5 transition-all duration-300"
            :style="{ transitionDelay: (i * 80) + 'ms' }"
          >
            <div class="w-10 h-10 flex items-center justify-center border border-gold-500/30 bg-gold-500/10 mb-5" aria-hidden="true">
              <svg class="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="feature.icon"></svg>
            </div>
            <h3 class="font-sans font-semibold text-white text-sm mb-2">{{ feature.title }}</h3>
            <p class="font-sans text-white/40 text-sm leading-relaxed">{{ feature.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- ══ RELATED SERVICES ══ -->
    <RelatedServices :exclude="['workflow']" />

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
  title: 'CRM & Workflow Integration for Accounting Firms | Zar Media Group',
  description:
    'Connect your accounting website to QuickBooks, Xero, HubSpot, and Calendly. CRM integration for accountants that eliminates manual data entry and automates client onboarding. South Africa.',
  keywords:
    'CRM system accountants, client facing CRM, CRM integration for accountants, workflow automation bookkeepers, accounting software integration, client portals for accounting, accounting portal, client portal for accountants, Xero HubSpot integration, best client portal small accounting firms, how to reduce admin accounting firms',
  canonical: '/services/workflow-integration',
  schemas: [
    SCHEMAS.breadcrumb([
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
      { name: 'Workflow Integration', url: '/services/workflow-integration' },
    ]),
    SCHEMAS.service({
      name: 'CRM & Workflow Integration for Accounting Firms',
      description:
        'Zar Media Group connects accounting websites to CRM systems, accounting software (Xero, QuickBooks), and client portals — automating admin and reducing manual data entry for financial professionals.',
    }),
    SCHEMAS.faqPage([
      {
        question: 'What is the best client portal for small accounting firms?',
        answer:
          'The best client portal for small accounting firms is one that integrates with your existing tools. Zar Media Group builds custom branded client portals that connect to Xero, QuickBooks, and DocuSign — allowing clients to upload documents, sign agreements, and communicate securely, all from your own website.',
      },
      {
        question: 'How does CRM integration help accountants reduce admin?',
        answer:
          'CRM integration for accountants means that when a prospect fills in your contact form, their details automatically flow into HubSpot or Salesforce, trigger a welcome sequence, book an appointment, and create a new client record in your accounting software — without any manual steps.',
      },
    ]),
  ],
})

const adminStats = [
  { value: '12h', label: 'Admin Hours Wasted', detail: 'Per week in average SA accounting firm' },
  { value: '43%', label: 'Data Re-entry Rate', detail: 'Information entered in multiple systems' },
  { value: '3.2x', label: 'Slower Onboarding', detail: 'Manual vs automated client intake' },
  { value: '70%', label: 'Admin Reduction', detail: 'Achieved by our integrated clients' },
]

const integrations = [
  {
    category: 'Accounting Software',
    tools: ['Xero', 'QuickBooks', 'Sage', 'FreshBooks', 'MYOB'],
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>',
  },
  {
    category: 'CRM Systems',
    tools: ['HubSpot', 'Salesforce', 'Pipedrive', 'Zoho CRM', 'Microsoft Dynamics'],
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>',
  },
  {
    category: 'Document & E-Signature',
    tools: ['DocuSign', 'HelloSign', 'Adobe Sign', 'PandaDoc'],
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>',
  },
  {
    category: 'Appointment Booking',
    tools: ['Calendly', 'Microsoft Bookings', 'Acuity Scheduling', 'Google Calendar'],
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>',
  },
  {
    category: 'Communication',
    tools: ['Intercom', 'Drift', 'Slack', 'Microsoft Teams', 'WhatsApp Business'],
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>',
  },
  {
    category: 'Practice Management',
    tools: ['Karbon', 'Canopy', 'Jetpack Workflow', 'TaxDome', 'Practice Ignition'],
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>',
  },
]

const automationSteps = [
  { title: 'Prospect fills in enquiry form', description: 'Smart forms on your accounting website capture name, services needed, and preferred contact time.' },
  { title: 'CRM record created automatically', description: 'The prospect is instantly added to HubSpot or your CRM with full context — no manual data entry.' },
  { title: 'Appointment auto-booked', description: 'Calendly integration books a consultation call and sends confirmation emails to both parties.' },
  { title: 'Onboarding documents sent', description: 'Engagement letter, ID requirements, and KYC forms are dispatched via DocuSign automatically.' },
  { title: 'Documents signed & filed', description: 'Signed documents sync to your practice management system and client file in Xero/QuickBooks.' },
  { title: 'Client portal activated', description: 'The new client receives access to their branded portal for ongoing document exchange and billing.' },
]

const portalFeatures = [
  {
    title: 'Secure Document Exchange',
    description: 'Clients upload tax documents, bank statements, and identification — directly into your encrypted client portal.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>',
  },
  {
    title: 'E-Signature Integration',
    description: 'Engagement letters, service agreements, and authorities signed online — no printing, scanning, or emailing.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>',
  },
  {
    title: 'Online Invoicing & Payments',
    description: 'Clients pay invoices directly through their portal, reducing debtor days and eliminating payment chasing.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>',
  },
  {
    title: 'Work Status Tracker',
    description: 'Clients see real-time status of their tax return, audit, or financial statement preparation — reducing status calls.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>',
  },
  {
    title: 'Secure Messaging',
    description: 'Compliant, encrypted client communication that replaces insecure email for sensitive financial information.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>',
  },
  {
    title: 'Xero/QuickBooks Sync',
    description: 'Portal data syncs bidirectionally with your accounting software — no re-keying, no errors, no wasted time.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>',
  },
]
</script>
