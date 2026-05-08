<template>
  <div class="client-portal-page">
    <section
      class="relative min-h-[72vh] flex items-center bg-navy-900 overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-20"
      aria-label="Client document portal for accountants"
    >
      <div
        class="absolute inset-0 pointer-events-none opacity-[0.025]"
        aria-hidden="true"
        style="background-image: linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px); background-size: 60px 60px;"
      ></div>
      <div class="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <BreadcrumbNav
          :crumbs="[
            { label: 'Home', path: '/' },
            { label: 'Client portal & document vault', path: '/services/client-portal' },
          ]"
        />

        <span class="section-label reveal-up">Product tour — Admin experience</span>
        <h1 class="font-serif text-display-lg text-white mt-4 mb-6 max-w-4xl reveal-up" style="transition-delay: 100ms;">
          Accounting <span class="text-gradient">client portal</span><br />
          &amp; document vault
        </h1>
        <p class="font-sans text-white/60 text-lg max-w-3xl leading-relaxed reveal-up" style="transition-delay: 200ms;">
          A branded hub where your firm invites clients, collects tax and audit documents, tracks status from
          <strong class="text-white/85">received → under review → processed</strong>, and keeps an audit-friendly activity trail —
          built for South African accounting, tax, payroll, and bookkeeping practices (POPIA-conscious design).
        </p>
        <p
          class="font-sans text-white/55 text-sm max-w-3xl leading-relaxed mt-6 pl-4 border-l-2 border-gold-500/70 reveal-up"
          style="transition-delay: 220ms;"
          role="note"
        >
          <strong class="text-white/90">Demo only:</strong> Screenshots on this page show illustrative firms, people, emails, and documents created for a product tour.
          They are <strong class="text-white/90">not</strong> real Zar Media Group clients, live engagements, or confidential records.
        </p>
        <div class="gold-divider mt-8 reveal-up" style="transition-delay: 250ms;"></div>
        <div class="flex flex-col sm:flex-row gap-4 mt-10 reveal-up" style="transition-delay: 300ms;">
          <RouterLink to="/contact" class="btn-primary" aria-label="Discuss implementing this portal for your firm">
            Discuss implementation
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </RouterLink>
          <RouterLink to="/services/accounting-portals-crm" class="btn-ghost" aria-label="Read about client portals and CRM integration">
            Portals &amp; CRM overview
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Screenshots -->
    <section class="section-padding bg-white border-b border-navy-900/8" aria-labelledby="screens-heading">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-14 reveal-up">
          <span class="section-label">Interface preview</span>
          <h2 id="screens-heading" class="font-serif text-display-md text-navy-900 mb-4">
            Accounting client portal screenshots <span class="font-sans font-normal text-charcoal-500 text-lg">(demo)</span>
          </h2>
          <div class="gold-divider-center"></div>
          <p class="font-sans text-charcoal-600 text-sm mt-6 leading-relaxed">
            These screenshots show the administrator experience: client directory and onboarding, global document views,
            per-client profiles, and the categorised document vault. Layout matches a calm, compliance-minded UI with
            clear statuses for SARS-related and practice documents (e.g. PAYE, VAT, AFS, bank statements).
          </p>
          <p
            class="font-sans text-charcoal-700 text-xs mt-6 max-w-2xl mx-auto leading-relaxed px-4 py-3 bg-navy-900/5 border border-navy-900/15"
            role="note"
          >
            All names, companies, email addresses, and file titles in these screenshots are <strong>fictional demo data</strong> for marketing purposes only — not Zar Media Group clients or real matter files.
          </p>
        </div>

        <div class="space-y-16 lg:space-y-20">
          <figure
            v-for="(shot, i) in screenshots"
            :key="shot.anchor"
            class="reveal-up scroll-mt-28"
            :id="shot.anchor"
            :style="{ transitionDelay: i * 40 + 'ms' }"
          >
            <figcaption class="font-sans font-semibold text-navy-900 text-sm mb-3 flex flex-wrap items-baseline gap-x-2 gap-y-1">
              <span class="sr-only">Screenshot: </span>
              <h3 class="font-sans font-semibold text-navy-900 text-sm m-0">{{ shot.title }}</h3>
              <span class="font-normal text-charcoal-500 font-sans text-xs">{{ shot.caption }}</span>
            </figcaption>
            <div
              class="rounded-none border border-navy-900/15 bg-navy-950/5 shadow-card-hover overflow-hidden"
              :class="shot.fullBleed ? '' : 'max-w-6xl mx-auto'"
            >
              <img
                :src="shot.src"
                :alt="shot.alt"
                class="w-full h-auto block object-top object-contain bg-[#f5f2eb]"
                :loading="i === 0 ? 'eager' : 'lazy'"
                :fetchpriority="i === 0 ? 'high' : undefined"
                decoding="async"
                width="1400"
                height="900"
              />
            </div>
          </figure>
        </div>
      </div>
    </section>

    <!-- How admin portal works -->
    <section class="section-padding bg-cream border-b border-navy-900/8" aria-labelledby="how-admin-heading">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="max-w-3xl mb-14 reveal-up">
          <span class="section-label">Administrator workflow</span>
          <h2 id="how-admin-heading" class="font-serif text-display-md text-navy-900 mb-4">
            How the portal works for your team
          </h2>
          <div class="gold-divider"></div>
          <p class="font-sans text-charcoal-600 text-lg leading-relaxed mt-6">
            Your practice signs in to an <strong>admin console</strong> (sidebar: Overview, Clients, All Documents, Audit Log,
            Notifications, team uploads). Day-to-day work is inviting firms, watching document queues, updating status,
            and resolving queries — without chasing email attachments.
          </p>
        </div>

        <ol class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children list-none p-0 m-0">
          <li
            v-for="(step, i) in adminSteps"
            :key="step.title"
            class="reveal-up bg-white border border-navy-900/10 p-8"
            :style="{ transitionDelay: i * 80 + 'ms' }"
          >
            <span class="font-serif text-gold-600 text-sm font-bold">{{ String(i + 1).padStart(2, '0') }}</span>
            <h3 class="font-sans font-semibold text-navy-900 text-sm mt-2 mb-2">{{ step.title }}</h3>
            <p class="font-sans text-charcoal-600 text-sm leading-relaxed">{{ step.body }}</p>
          </li>
        </ol>
      </div>
    </section>

    <!-- Client vs admin note -->
    <section class="section-padding-sm bg-navy-900 border-y border-white/5" aria-labelledby="roles-heading">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div class="reveal-up">
          <span class="section-label">Clients</span>
          <h2 id="roles-heading" class="font-serif text-display-sm text-white mb-4">
            What your clients see
          </h2>
          <p class="font-sans text-white/55 text-sm leading-relaxed">
            Clients receive an invitation, sign in to their own space, upload documents into your categories and tax years, and see
            statuses update as your team works the queue — reducing “did you get my email?” follow-ups.
          </p>
        </div>
        <div class="reveal-up">
          <span class="section-label">Administrators</span>
          <h2 class="font-serif text-display-sm text-white mb-4">
            What your admins control
          </h2>
          <p class="font-sans text-white/55 text-sm leading-relaxed">
            Admins manage the full client directory, open any file across the firm, change workflow status, download or comment,
            resend invites, and review the audit trail — ideal for partners, compliance officers, and senior bookkeepers running the
            digital practice.
          </p>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section-padding bg-cream" aria-labelledby="faq-heading">
      <div class="max-w-3xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-14 reveal-up">
          <span class="section-label">FAQ</span>
          <h2 id="faq-heading" class="font-serif text-display-md text-navy-900 mb-4">Client portal product</h2>
          <div class="gold-divider-center"></div>
        </div>

        <dl class="space-y-4">
          <div
            v-for="(faq, i) in faqs"
            :key="i"
            class="reveal-up border border-navy-900/10 bg-white overflow-hidden"
            :style="{ transitionDelay: i * 60 + 'ms' }"
          >
            <dt>
              <button
                type="button"
                class="w-full flex items-center justify-between gap-4 p-6 text-left font-sans font-semibold text-navy-900 text-sm hover:text-gold-600 transition-colors"
                :aria-expanded="openFaq === i"
                :aria-controls="`cp-faq-${i}`"
                @click="openFaq = openFaq === i ? null : i"
              >
                <span>{{ faq.question }}</span>
                <svg
                  class="w-4 h-4 flex-shrink-0 text-navy-400 transition-transform duration-300"
                  :class="{ 'rotate-180': openFaq === i }"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </dt>
            <Transition name="accordion">
              <dd v-if="openFaq === i" :id="`cp-faq-${i}`" class="px-6 pb-6 font-sans text-charcoal-500 text-sm leading-relaxed">
                {{ faq.answer }}
              </dd>
            </Transition>
          </div>
        </dl>
      </div>
    </section>

    <section class="section-padding bg-navy-900" aria-labelledby="cta-heading">
      <div class="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <h2 id="cta-heading" class="font-serif text-display-md text-white mb-6 reveal-up">
          Want this portal on your domain?
        </h2>
        <p class="font-sans text-white/60 text-lg mb-10 reveal-up" style="transition-delay: 80ms;">
          We scope integrations (CRM, e-sign, practice tools), branding, and POPIA-aligned hosting — then ship as part of Website as a Service or a dedicated portal project.
        </p>
        <RouterLink to="/contact" class="btn-primary reveal-up" style="transition-delay: 120ms;" aria-label="Contact Zar Media Group about the client portal">
          Book a walkthrough
        </RouterLink>
      </div>
    </section>

    <RelatedServices :exclude="['portals-crm']" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'
import { useSeoMeta, SCHEMAS, BASE_URL } from '@/composables/useSeoMeta'
import BreadcrumbNav from '@/components/ui/BreadcrumbNav.vue'
import RelatedServices from '@/components/ui/RelatedServices.vue'

const { initReveal } = useScrollReveal()
const openFaq = ref(null)

onMounted(() => setTimeout(initReveal, 50))

const adminSteps = [
  {
    title: 'Overview dashboard',
    body:
      'See totals for active clients, documents in the vault, items pending review, open queries, and unread alerts — plus recent document movement and audit events.',
  },
  {
    title: 'Client management',
    body:
      'Add clients, assign services (accounting, payroll, audit, tax, bookkeeping), track invitation status, search the roster, resend invites, or drill into a profile.',
  },
  {
    title: 'Document operations',
    body:
      'Use All Documents or the Document Vault to filter by category (bank statements, invoices, SARS returns, payroll, AFS, etc.), tax year, and status — then download, comment, or update workflow.',
  },
  {
    title: 'Per-client workspace',
    body:
      'Open a client to edit profile details, review their document checklist with live statuses, and capture internal notes visible only to your team.',
  },
  {
    title: 'Governance',
    body:
      'Audit log and notifications keep a tamper-resistant trail of uploads, invites, and admin actions — aligned with how regulated firms expect to demonstrate oversight.',
  },
]

const screenshots = [
  {
    anchor: 'admin-portal',
    src: '/zmg-accounting-client-portal-client-directory-demo.png',
    title: 'Admin portal',
    caption: 'Client directory: search, service lines, document counts, invitation status, and row actions.',
    alt:
      'Zar Media Group accounting client portal admin screen — client directory with fictional demo companies, accounting and payroll services, document counts, invitation status, South Africa product tour.',
    fullBleed: true,
  },
  {
    anchor: 'portal-all-docs',
    src: '/zmg-accounting-client-portal-all-documents-demo.png',
    title: 'All documents',
    caption: 'Cross-client register with category, year, inline status controls, and file actions.',
    alt:
      'Accounting firm client portal — all-documents view with PAYE, VAT, bank statements and tax documents; workflow statuses for South African practice demo.',
    fullBleed: true,
  },
  {
    anchor: 'portal-profile',
    src: '/zmg-accounting-client-portal-client-profile-demo.png',
    title: 'Client profile & documents',
    caption: 'Single-client view with profile fields, document status badges, and internal notes.',
    alt:
      'Client profile workspace in an accounting client portal: contact details, document checklist with received and under review statuses, internal notes — demo data.',
    fullBleed: true,
  },
  {
    anchor: 'portal-vault',
    src: '/zmg-accounting-client-portal-document-vault-demo.png',
    title: 'Document vault',
    caption: 'Category tabs, search, year filters, pagination, and bulk-friendly browsing.',
    alt:
      'Document vault for accountants: categories including bank statements, invoices, SARS returns and payroll; filters by year and status — fictional demo screenshot.',
    fullBleed: true,
  },
]

const faqs = [
  {
    question: 'Is this a separate product from my website?',
    answer:
      'The portal is implemented as part of your managed digital presence — same brand domain, same compliance story — with optional CRM and workflow integrations depending on your stack.',
  },
  {
    question: 'Can statuses match our internal process?',
    answer:
      'Workflow labels such as Received, Under Review, Requires Action, and Processed can be aligned with how your firm runs tax season, payroll, or audit packs — we tune fields during implementation.',
  },
  {
    question: 'Does this replace email for documents?',
    answer:
      'It reduces reliance on insecure email chains by giving clients a structured upload path and your team a single queue — while keeping audit history and optional notifications.',
  },
  {
    question: 'Is this built for South African accounting and tax workflows?',
    answer:
      'Yes. Categories and statuses map well to typical SA practice packs — PAYE, VAT, IRP5, bank statements, annual financials — with POPIA-conscious handling; we configure labels to match how your firm runs season.',
  },
]

const pageUrl = `${BASE_URL}/services/client-portal`
const primaryOgImage = '/zmg-accounting-client-portal-client-directory-demo.png'

useSeoMeta({
  title: 'Accounting Client Portal & Document Vault | Zar Media Group',
  description:
    'Tour Zar Media Group’s accounting client portal for SA firms: client directory, all-documents queue, profiles & document vault (demo screenshots). Tax, payroll & POPIA-conscious workflows.',
  keywords:
    'accounting client portal South Africa, client document portal, document vault accounting firm, secure tax document upload, PAYE VAT portal accountants, POPIA client portal, bookkeeping document portal, Zar Media Group Cape Town',
  canonical: '/services/client-portal',
  ogImage: primaryOgImage,
  schemas: [
    SCHEMAS.breadcrumb([
      { name: 'Home', url: '/' },
      { name: 'Accounting client portal & document vault', url: '/services/client-portal' },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name: 'Accounting Client Portal & Document Vault — South Africa',
      description:
        'Product tour of an accounting client portal with admin directory, firm-wide documents, client workspace, and document vault; demo screenshots for Zar Media Group.',
      inLanguage: 'en-ZA',
      isPartOf: {
        '@type': 'WebSite',
        '@id': `${BASE_URL}/#website`,
        name: 'Zar Media Group',
        url: BASE_URL,
      },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: `${BASE_URL}${primaryOgImage}`,
        caption: 'Accounting client portal client directory interface (demonstration)',
      },
    },
    SCHEMAS.service({
      name: 'Accounting client portal & document vault',
      description:
        'Branded client portal and administrator console for accounting, tax, payroll, and bookkeeping firms in South Africa and beyond: client onboarding, categorised document vault, workflow statuses (e.g. received, under review, processed), and audit trail. Marketing screenshots use fictional demo data only.',
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
