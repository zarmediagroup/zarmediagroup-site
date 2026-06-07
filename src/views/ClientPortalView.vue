<template>
  <div class="client-portal-page">
    <section
      class="relative min-h-[72vh] flex items-center bg-navy-900 overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-20"
      aria-label="Client document portal for accountants"
    >
      <HeroBackground
        src="/hero-client-portal-document-vault.png"
        overlay-class="bg-gradient-to-r from-navy-900/95 via-navy-900/88 to-navy-900/70"
        image-opacity="opacity-35"
        image-position="object-right object-center"
        :corners="false"
      />
      <div class="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <BreadcrumbNav
          :crumbs="[
            { label: 'Home', path: '/' },
            { label: 'Client portal & document vault', path: '/services/client-portal' },
          ]"
        />

        <span class="section-label reveal-up">Product tour — Admin experience</span>
        <h1 class="font-serif text-display-lg text-white mt-6 mb-8 max-w-4xl reveal-up" style="transition-delay: 100ms;">
          Accounting <span class="text-gradient">client portal</span><br />
          &amp; document vault
        </h1>
        <p class="font-sans text-white/65 text-base sm:text-lg max-w-2xl leading-relaxed reveal-up mb-8" style="transition-delay: 200ms;">
          Invite clients, collect documents, and move work through
          <strong class="text-white/90">clear statuses</strong>—with an audit-friendly trail. Built for SA accounting and tax practices.
        </p>
        <p
          class="font-sans text-white/50 text-xs sm:text-sm max-w-2xl leading-relaxed mb-10 pl-4 border-l-2 border-gold-500/60 reveal-up"
          style="transition-delay: 220ms;"
          role="note"
        >
          <strong class="text-white/80">Demo:</strong> All names, firms, and files in screenshots are fictional—not real clients or matters.
        </p>
        <div class="gold-divider reveal-up" style="transition-delay: 250ms;"></div>
        <div class="flex flex-col sm:flex-row gap-4 mt-12 reveal-up" style="transition-delay: 300ms;">
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
        <div class="text-center max-w-xl mx-auto mb-16 lg:mb-20 reveal-up">
          <span class="section-label">Interface preview</span>
          <h2 id="screens-heading" class="font-serif text-display-md text-navy-900 mt-4 mb-6">
            Screenshots <span class="font-sans font-normal text-charcoal-500 text-base">(demo)</span>
          </h2>
          <div class="gold-divider-center"></div>
          <p class="font-sans text-charcoal-600 text-sm mt-8 leading-relaxed">
            Admin views: directory, firm-wide documents, client profile, and vault—calm layout and clear document statuses.
          </p>
        </div>

        <div class="space-y-20 lg:space-y-28">
          <figure
            v-for="(shot, i) in screenshots"
            :key="shot.anchor"
            class="reveal-up scroll-mt-28"
            :id="shot.anchor"
            :style="{ transitionDelay: i * 40 + 'ms' }"
          >
            <figcaption class="mb-5 lg:mb-6 space-y-1">
              <span class="sr-only">Screenshot: </span>
              <h3 class="font-sans font-semibold text-navy-900 text-base m-0">{{ shot.title }}</h3>
              <p class="font-sans text-charcoal-500 text-sm m-0 max-w-2xl">{{ shot.caption }}</p>
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
        <div class="max-w-2xl mb-16 lg:mb-20 reveal-up">
          <span class="section-label">Administrator workflow</span>
          <h2 id="how-admin-heading" class="font-serif text-display-md text-navy-900 mt-4 mb-6">
            How your team uses it
          </h2>
          <div class="gold-divider"></div>
          <p class="font-sans text-charcoal-600 text-base leading-relaxed mt-8">
            One admin console for clients, documents, and audit trail—less email chasing.
          </p>
        </div>

        <ol class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 stagger-children list-none p-0 m-0">
          <li
            v-for="(step, i) in adminSteps"
            :key="step.title"
            class="reveal-up bg-white border border-navy-900/10 p-8 lg:p-10 flex flex-col gap-3"
            :style="{ transitionDelay: i * 80 + 'ms' }"
          >
            <span class="font-serif text-gold-600 text-base font-bold">{{ String(i + 1).padStart(2, '0') }}</span>
            <h3 class="font-sans font-semibold text-navy-900 text-base m-0">{{ step.title }}</h3>
            <p class="font-sans text-charcoal-600 text-sm leading-relaxed m-0 flex-1">{{ step.body }}</p>
          </li>
        </ol>
      </div>
    </section>

    <!-- Client vs admin note -->
    <section class="section-padding bg-navy-900 border-y border-white/5" aria-labelledby="roles-heading">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div class="reveal-up space-y-4">
          <span class="section-label">Clients</span>
          <h2 id="roles-heading" class="font-serif text-display-sm text-white m-0">
            What clients see
          </h2>
          <p class="font-sans text-white/60 text-sm leading-relaxed m-0 max-w-md">
            Invited users upload into your categories, see status updates, and skip insecure email threads.
          </p>
        </div>
        <div class="reveal-up space-y-4">
          <span class="section-label">Administrators</span>
          <h2 class="font-serif text-display-sm text-white m-0">
            What admins control
          </h2>
          <p class="font-sans text-white/60 text-sm leading-relaxed m-0 max-w-md">
            Directory, firm-wide files, statuses, comments, invites, and a full audit trail—in one place.
          </p>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section-padding bg-cream" aria-labelledby="faq-heading">
      <div class="max-w-2xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-12 lg:mb-16 reveal-up">
          <span class="section-label">FAQ</span>
          <h2 id="faq-heading" class="font-serif text-display-md text-navy-900 mt-4 mb-6">Client portal</h2>
          <div class="gold-divider-center"></div>
        </div>

        <dl class="space-y-3">
          <div
            v-for="(faq, i) in faqs"
            :key="i"
            class="reveal-up border border-navy-900/10 bg-white overflow-hidden rounded-sm"
            :style="{ transitionDelay: i * 60 + 'ms' }"
          >
            <dt>
              <button
                type="button"
                class="w-full flex items-center justify-between gap-4 min-h-[3.25rem] py-5 px-6 text-left font-sans font-semibold text-navy-900 text-base hover:text-gold-600 transition-colors"
                :aria-expanded="openFaq === i"
                :aria-controls="`cp-faq-${i}`"
                @click="openFaq = openFaq === i ? null : i"
              >
                <span class="pr-2">{{ faq.question }}</span>
                <svg
                  class="w-5 h-5 flex-shrink-0 text-navy-400 transition-transform duration-300"
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
              <dd v-if="openFaq === i" :id="`cp-faq-${i}`" class="px-6 pb-6 pt-0 font-sans text-charcoal-600 text-sm leading-relaxed">
                {{ faq.answer }}
              </dd>
            </Transition>
          </div>
        </dl>
      </div>
    </section>

    <section class="section-padding bg-navy-900" aria-labelledby="cta-heading">
      <div class="max-w-2xl mx-auto px-6 lg:px-8 text-center">
        <h2 id="cta-heading" class="font-serif text-display-md text-white mb-6 reveal-up">
          Your domain, your brand
        </h2>
        <p class="font-sans text-white/60 text-base mb-12 reveal-up" style="transition-delay: 80ms;">
          We scope integrations, branding, and hosting—then deliver as WaaS or a dedicated portal build.
        </p>
        <RouterLink to="/contact" class="btn-primary reveal-up" style="transition-delay: 120ms;" aria-label="Contact Zar Media Group about the client portal">
          Book a walkthrough
        </RouterLink>
      </div>
    </section>

    <SeoRelatedGuides :slugs="pageSeo.relatedGuides" />
    <RelatedServices :exclude="['client-portal']" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'
import { useSeoMeta, SCHEMAS } from '@/composables/useSeoMeta'
import { getPageSeo } from '@/data/seo-pages'
import BreadcrumbNav from '@/components/ui/BreadcrumbNav.vue'
import HeroBackground from '@/components/ui/HeroBackground.vue'
import RelatedServices from '@/components/ui/RelatedServices.vue'
import SeoRelatedGuides from '@/components/seo/SeoRelatedGuides.vue'

const pageSeo = getPageSeo('client-portal')

const { initReveal } = useScrollReveal()
const openFaq = ref(null)

onMounted(() => setTimeout(initReveal, 50))

const adminSteps = [
  {
    title: 'Overview dashboard',
    body: 'Active clients, vault totals, items pending review, and recent activity—at a glance.',
  },
  {
    title: 'Client management',
    body: 'Add clients, assign services, track invites, search the roster, and open any profile.',
  },
  {
    title: 'Document operations',
    body: 'All Documents and the vault: filter by category, year, and status—then act in one queue.',
  },
  {
    title: 'Per-client workspace',
    body: 'Checklists with live statuses, downloads, comments, and internal notes for your team only.',
  },
  {
    title: 'Governance',
    body: 'Audit log and notifications for uploads, invites, and admin actions—evidence when you need it.',
  },
]

const screenshots = [
  {
    anchor: 'admin-portal',
    src: '/zmg-accounting-client-portal-client-directory-demo.png',
    title: 'Admin portal',
    caption: 'Client directory: search, services, counts, and invite status.',
    alt:
      'Zar Media Group accounting client portal admin screen — client directory with fictional demo companies, accounting and payroll services, document counts, invitation status, South Africa product tour.',
    fullBleed: true,
  },
  {
    anchor: 'portal-all-docs',
    src: '/zmg-accounting-client-portal-all-documents-demo.png',
    title: 'All documents',
    caption: 'Cross-client list: category, year, status, and file actions.',
    alt:
      'Accounting firm client portal — all-documents view with PAYE, VAT, bank statements and tax documents; workflow statuses for South African practice demo.',
    fullBleed: true,
  },
  {
    anchor: 'portal-profile',
    src: '/zmg-accounting-client-portal-client-profile-demo.png',
    title: 'Client profile & documents',
    caption: 'One client: profile, checklist statuses, and internal notes.',
    alt:
      'Client profile workspace in an accounting client portal: contact details, document checklist with received and under review statuses, internal notes — demo data.',
    fullBleed: true,
  },
  {
    anchor: 'portal-vault',
    src: '/zmg-accounting-client-portal-document-vault-demo.png',
    title: 'Document vault',
    caption: 'Tabs, search, year filters, and pagination for bulk browsing.',
    alt:
      'Document vault for accountants: categories including bank statements, invoices, SARS returns and payroll; filters by year and status — fictional demo screenshot.',
    fullBleed: true,
  },
]

const faqs = [
  {
    question: 'Is this separate from my website?',
    answer:
      'No—it sits on your managed presence: same domain and compliance story, with optional CRM and workflow links.',
  },
  {
    question: 'Can statuses match our process?',
    answer:
      'Yes. Labels like Received, Under Review, and Processed are tuned during implementation to match how you work.',
  },
  {
    question: 'Does this replace email?',
    answer:
      'It cuts insecure attachment chains: clients upload in structured paths; your team works one queue with history.',
  },
  {
    question: 'Built for SA tax and accounting?',
    answer:
      'Categories map well to typical SA packs (e.g. PAYE, VAT, bank statements, AFS). We align labels with your firm.',
  },
]

const primaryOgImage = '/hero-client-portal-document-vault.png'

useSeoMeta({
  title: pageSeo.title,
  description: pageSeo.description,
  keywords: pageSeo.keywords,
  canonical: pageSeo.canonical,
  ogImage: primaryOgImage,
  ogImageAlt: 'Accounting client portal and document vault product tour for South African tax and bookkeeping firms — Zar Media Group',
  schemas: [
    SCHEMAS.breadcrumb([
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
      { name: 'Accounting client portal & document vault', url: '/services/client-portal' },
    ]),
    ...SCHEMAS.servicePage({
      name: 'Accounting Client Portal & Document Vault — South Africa',
      description:
        'Product tour of an accounting client portal with admin directory, firm-wide documents, client workspace, and document vault; demo screenshots for Zar Media Group.',
      url: '/services/client-portal',
      image: primaryOgImage,
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
