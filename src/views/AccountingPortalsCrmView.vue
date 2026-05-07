<template>
  <div class="portals-crm-page">
    <section class="relative min-h-[85vh] flex items-center bg-navy-900 overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-24" aria-label="Client portals and CRM for accountants">
      <div class="absolute inset-0 pointer-events-none opacity-[0.025]" aria-hidden="true" style="background-image: linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px); background-size: 60px 60px;"></div>
      <div class="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <BreadcrumbNav :crumbs="[{ label: 'Client Portals & CRM', path: '/services/accounting-portals-crm' }]" />

        <span class="section-label reveal-up">Service — Accounting Portals &amp; Client-Facing CRM</span>
        <h1 class="font-serif text-display-lg text-white mt-4 mb-6 max-w-4xl reveal-up" style="transition-delay: 100ms;">
          Client Portals, Accounting Portals &amp;<br/>
          <span class="text-gradient">CRM Systems for Accountants</span>
        </h1>
        <p class="font-sans text-white/60 text-lg max-w-3xl leading-relaxed reveal-up" style="transition-delay: 200ms;">
          We design and build <strong class="text-white/80">client-facing portals</strong> and <strong class="text-white/80">client-facing CRM</strong> experiences on your own website — integrated with Xero, QuickBooks, HubSpot, DocuSign, and practice tools. Purpose-built for South African accounting, tax, and bookkeeping firms that need a <strong class="text-white/80">compliance portal</strong> for documents, KYC, and secure messaging — not a generic SaaS login page.
        </p>
        <div class="gold-divider mt-8 reveal-up" style="transition-delay: 250ms;"></div>
        <div class="flex flex-col sm:flex-row gap-4 mt-10 reveal-up" style="transition-delay: 300ms;">
          <RouterLink to="/contact" class="btn-primary" aria-label="Discuss an accounting portal or CRM integration project">
            Book a Strategy Call
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </RouterLink>
          <RouterLink to="/services/workflow-integration" class="btn-ghost" aria-label="See technical workflow and CRM integration details">
            Technical Integrations
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="section-padding bg-cream" aria-labelledby="definitions-heading">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="max-w-3xl mb-12 reveal-up">
          <span class="section-label">How We Use These Terms on Your Project</span>
          <h2 id="definitions-heading" class="font-serif text-display-md text-navy-900 mb-4">
            Accounting Portal vs Client-Facing CRM
          </h2>
          <div class="gold-divider"></div>
          <p class="font-sans text-charcoal-600 text-lg leading-relaxed mt-6">
            Searchers use overlapping phrases. Here is how we use them on your project so prospects, clients, and regulators see a coherent story.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <article
            v-for="(block, i) in definitionBlocks"
            :key="block.title"
            class="reveal-up p-8 bg-white border border-navy-900/8"
            :style="{ transitionDelay: (i * 80) + 'ms' }"
          >
            <h3 class="font-serif text-xl text-navy-900 mb-3">{{ block.title }}</h3>
            <p class="font-sans text-charcoal-600 text-sm leading-relaxed">{{ block.body }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section-padding bg-navy-900" aria-labelledby="compliance-portal-heading">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="max-w-3xl reveal-up">
          <span class="section-label">Compliance Portal</span>
          <h2 id="compliance-portal-heading" class="font-serif text-display-md text-white mb-4">
            Client-Facing Accounting Portals Built for <em class="text-gold-400">POPIA &amp; Trust</em>
          </h2>
          <div class="gold-divider"></div>
          <p class="font-sans text-white/60 text-lg leading-relaxed mt-6 mb-8">
            A <strong class="text-white/80">compliance portal</strong> layer means encrypted uploads, access controls, audit-friendly workflows, and clear consent — paired with content and IA reviewed for financial services websites. We align builds with our <RouterLink to="/services/compliance-trust" class="text-gold-400 hover:underline">Compliance &amp; Trust</RouterLink> methodology.
          </p>
          <ul class="font-sans text-white/50 text-sm space-y-3 list-disc pl-5">
            <li>Secure document exchange and checklist automation for tax and audit season</li>
            <li>Engagement letters and KYC via e-signature, synced to your stack</li>
            <li>Structured handoff to <RouterLink to="/services/workflow-integration" class="text-gold-400 hover:underline">CRM systems for accountants</RouterLink> so nothing is re-keyed</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section-padding bg-cream" aria-labelledby="cta-mid-heading">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="reveal-up">
          <span class="section-label">Client Portals for Accounting</span>
          <h2 id="cta-mid-heading" class="font-serif text-display-md text-navy-900 mb-4">
            One Branded <em>Accounting Portal</em> on Your Domain
          </h2>
          <div class="gold-divider"></div>
          <p class="font-sans text-charcoal-600 text-lg leading-relaxed mt-6">
            Whether you call it a <strong>client facing portal</strong>, <strong>client facing accounting portal</strong>, or <strong>client portals for accounting</strong> — we implement it as part of <RouterLink to="/services/website-as-a-service" class="text-navy-900 font-semibold hover:underline">Website as a Service</RouterLink>: managed hosting, updates, and continuous optimisation so the portal stays fast, secure, and on-brand.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 mt-8">
            <RouterLink to="/contact" class="btn-primary inline-flex">
              Discuss your portal brief
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </RouterLink>
            <RouterLink to="/resources" class="btn-secondary inline-flex">
              Read guides
            </RouterLink>
          </div>
        </div>
        <div class="reveal-up p-8 bg-navy-900 border border-white/10 text-white/70 font-sans text-sm leading-relaxed">
          <p class="mb-4">
            <strong class="text-white">Client-facing CRM</strong> in our projects usually means: prospects and clients interact through your website and connected tools (forms, booking, portal, email automation) while your team works in HubSpot, Salesforce, or Zoho — we connect the edges so CRM stays the source of truth.
          </p>
          <p>
            That is different from selling a standalone “CRM system” product; we <strong class="text-white">integrate and implement</strong> the client-facing side for accounting firms in South Africa and beyond.
          </p>
        </div>
      </div>
    </section>

    <section class="section-padding bg-cream border-t border-navy-900/8" aria-labelledby="faq-heading">
      <div class="max-w-3xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-14 reveal-up">
          <span class="section-label">FAQ</span>
          <h2 id="faq-heading" class="font-serif text-display-md text-navy-900 mb-4">Client Portals &amp; CRM for Accountants</h2>
          <div class="gold-divider-center"></div>
        </div>

        <dl class="space-y-4">
          <div
            v-for="(faq, i) in faqs"
            :key="i"
            class="reveal-up border border-navy-900/10 bg-white overflow-hidden"
            :style="{ transitionDelay: (i * 60) + 'ms' }"
          >
            <dt>
              <button
                type="button"
                class="w-full flex items-center justify-between gap-4 p-6 text-left font-sans font-semibold text-navy-900 text-sm hover:text-gold-600 transition-colors"
                :aria-expanded="openFaq === i"
                :aria-controls="`portal-faq-${i}`"
                @click="openFaq = openFaq === i ? null : i"
              >
                <span>{{ faq.question }}</span>
                <svg class="w-4 h-4 flex-shrink-0 text-navy-400 transition-transform duration-300" :class="{ 'rotate-180': openFaq === i }" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
            </dt>
            <Transition name="accordion">
              <dd
                v-if="openFaq === i"
                :id="`portal-faq-${i}`"
                class="px-6 pb-6 font-sans text-charcoal-500 text-sm leading-relaxed"
              >
                {{ faq.answer }}
              </dd>
            </Transition>
          </div>
        </dl>
      </div>
    </section>

    <RelatedServices :exclude="['portals-crm']" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'
import { useSeoMeta, SCHEMAS } from '@/composables/useSeoMeta'
import BreadcrumbNav from '@/components/ui/BreadcrumbNav.vue'
import RelatedServices from '@/components/ui/RelatedServices.vue'

const { initReveal } = useScrollReveal()
const openFaq = ref(null)

onMounted(() => setTimeout(initReveal, 50))

const definitionBlocks = [
  {
    title: 'Accounting portal',
    body:
      'An accounting portal is the secure, branded area on your site where clients upload supporting documents, track requests, sign engagement letters, and message your team. It is the public-facing half of your digital workflow — not your internal practice management screen.',
  },
  {
    title: 'Client portals for accounting',
    body:
      'Client portals for accounting firms reduce email chaos and manual follow-ups. We implement portals that sync with your document checklist, e-signature tools, and accounting software so your team stops re-keying client data.',
  },
  {
    title: 'Client-facing CRM',
    body:
      'A client-facing CRM experience means prospects and clients trigger the right automations in your CRM from your website: enquiry capture, nurture sequences, meeting booking, and handoff to onboarding — visible to clients as a smooth journey on your domain.',
  },
  {
    title: 'CRM system for accountants (integration view)',
    body:
      'When accountants search for a CRM system, they often need both software selection and a client-facing layer. We focus on the implementation: forms, portal, and integrations so HubSpot, Salesforce, Pipedrive, or Zoho reflect real client activity without duplicate records.',
  },
]

const faqs = [
  {
    question: 'What is a client-facing accounting portal?',
    answer:
      'It is a secure area on your website where clients complete intake, upload tax and audit documents, sign agreements, and track progress — integrated with your CRM and accounting stack so your team works from one thread of truth.',
  },
  {
    question: 'Do you sell a standalone CRM system for accountants?',
    answer:
      'We are not a CRM vendor. We build the client-facing digital layer and integrate with the CRM and accounting tools you already use (or help you choose), so enquiry-to-client workflows are automated end-to-end.',
  },
  {
    question: 'What is a compliance portal for financial firms?',
    answer:
      'It is a portal designed around regulatory expectations: encryption, access control, consent logging, and workflows suited to tax, audit, and advisory firms — aligned with POPIA-conscious processing and your firm’s policies.',
  },
  {
    question: 'How is this different from off-the-shelf client portal software?',
    answer:
      'Off-the-shelf products solve one piece. We implement portals as part of your managed website and connect them to CRM, Xero, QuickBooks, DocuSign, and practice workflows — so the experience matches your brand and your operational reality.',
  },
]

useSeoMeta({
  title: 'Client Portals & CRM for Accountants | Zar Media Group',
  description:
    'Client-facing portals and CRM integration for accounting firms in South Africa: accounting portal, compliance portal, client portals for accounting, and client-facing CRM on your website — built for POPIA-conscious workflows.',
  keywords:
    'CRM system accountants, client portals for accounting, compliance portal, client facing portal, accounting portal, client facing CRM, client facing accounting portal, CRM integration accountants South Africa',
  canonical: '/services/accounting-portals-crm',
  schemas: [
    SCHEMAS.breadcrumb([
      { name: 'Home', url: '/' },
      { name: 'Client Portals & CRM for Accountants', url: '/services/accounting-portals-crm' },
    ]),
    SCHEMAS.service({
      name: 'Client Portals & CRM for Accountants',
      description:
        'Zar Media Group implements client-facing accounting portals, compliance-focused client portals, and CRM-connected workflows for accounting, tax, and bookkeeping firms — integrated with leading CRM and accounting software.',
    }),
    SCHEMAS.faqPage(faqs),
  ],
})
</script>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
