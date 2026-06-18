<template>
  <div class="lp-page">

    <LpNavbar />

    <!-- ── Hero: message + visual ── -->
    <section class="lp-hero" aria-labelledby="lp-headline">
      <div class="lp-container">
        <div class="max-w-3xl mx-auto text-center">
          <p class="lp-eyebrow">For South African accounting &amp; tax practices</p>
          <h1
            id="lp-headline"
            class="font-serif text-[1.85rem] sm:text-[2.5rem] lg:text-[3rem] text-white leading-[1.1] mt-3 mb-5"
          >
            Stop Chasing Clients for Documents.<br />
            <span class="text-gradient">Give Them a Portal.</span>
          </h1>
          <p class="font-sans text-white/65 text-base sm:text-lg leading-relaxed sm:hidden">
            Cut admin by 60% in month one. Clients upload directly. POPIA-conscious. Live in 30 days.
          </p>
          <p class="font-sans text-white/65 text-base sm:text-lg leading-relaxed hidden sm:block">
            SA accounting firms using our client portal cut admin by over 60% in month one —
            clients upload directly, checklists run automatically, and every document has a full audit trail.
            POPIA-conscious. Branded to your firm. Live in 30 days.
          </p>
        </div>

        <figure class="lp-hero-visual">
          <img
            :src="heroImage.src"
            :alt="heroImage.alt"
            class="lp-hero-img"
            width="1920"
            height="1080"
            loading="eager"
            fetchpriority="high"
            decoding="async"
          />
          <figcaption class="sr-only">{{ heroImage.alt }}</figcaption>
        </figure>

        <!-- Contact form — directly below hero -->
        <div id="lp-demo-form" class="lp-form-wrap">
          <div class="lp-card">
            <div class="lp-card-head">
              <p class="font-sans text-gold-400 text-[11px] font-bold tracking-[0.2em] uppercase mb-2">
                Free · 20 minutes · No obligation
              </p>
              <h2 class="font-serif text-xl sm:text-2xl text-white leading-tight">
                See the portal live, built for your firm
              </h2>
              <p class="font-sans text-white/45 text-sm mt-2 leading-relaxed">
                Book a walkthrough — we show you the portal running with your branding.
                Reply within one business day.
              </p>
            </div>

            <form
              class="lp-card-body"
              @submit.prevent="handleSubmit"
              novalidate
              aria-label="Book a free portal demo"
            >
              <div class="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
                <label for="lpTrap" class="sr-only">Leave blank</label>
                <input id="lpTrap" v-model="websiteTrap" type="text" tabindex="-1" autocomplete="off" />
              </div>

              <div>
                <label for="lpName" class="lp-label">Your name <span class="text-amber-600" aria-label="required">*</span></label>
                <input id="lpName" v-model="form.name" type="text" required autocomplete="name" class="lp-input" placeholder="Jane Smith" />
              </div>

              <div>
                <label for="lpEmail" class="lp-label">Work email <span class="text-amber-600" aria-label="required">*</span></label>
                <input id="lpEmail" v-model="form.email" type="email" required autocomplete="email" class="lp-input" placeholder="jane@yourfirm.co.za" />
              </div>

              <div class="grid grid-cols-1 xs:grid-cols-2 gap-3">
                <div>
                  <label for="lpPhone" class="lp-label">Phone <span class="text-amber-600" aria-label="required">*</span></label>
                  <input id="lpPhone" v-model="form.phone" type="tel" required autocomplete="tel" class="lp-input" placeholder="+27 82 000 0000" />
                </div>
                <div>
                  <label for="lpFirm" class="lp-label">Firm name <span class="text-amber-600" aria-label="required">*</span></label>
                  <input id="lpFirm" v-model="form.firmName" type="text" required autocomplete="organization" class="lp-input" placeholder="Smith &amp; Assoc." />
                </div>
              </div>

              <label class="flex items-start gap-2.5 cursor-pointer">
                <input v-model="form.consent" type="checkbox" required class="mt-0.5 w-4 h-4 accent-navy-900 flex-shrink-0" />
                <span class="font-sans text-charcoal-500 text-[11px] leading-relaxed">
                  I agree to Zar Media Group contacting me about this demo per the
                  <RouterLink to="/privacy-policy" class="text-navy-900 font-semibold hover:underline" target="_blank">Privacy Policy</RouterLink>.
                </span>
              </label>

              <p v-if="submitError" class="font-sans text-red-600 text-sm" role="alert">{{ submitError }}</p>

              <button type="submit" class="lp-cta-btn" :disabled="!form.consent || isSubmitting">
                {{ isSubmitting ? 'Booking your demo…' : 'Book My Free 20-Min Demo →' }}
              </button>

              <p class="font-sans text-charcoal-400 text-[11px] text-center">
                No hard sell · Cape Town, South Africa
              </p>
            </form>
          </div>

          <ul class="lp-trust-badges">
            <li v-for="badge in trustBadges" :key="badge" class="flex items-center gap-1.5">
              <svg class="w-3.5 h-3.5 text-gold-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              <span class="font-sans text-white/55 text-xs sm:text-sm">{{ badge }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- ── 3. Objections ── -->
    <section class="lp-section bg-cream" aria-labelledby="obj-heading">
      <div class="lp-container">
        <div class="text-center max-w-lg mx-auto mb-10">
          <p class="lp-eyebrow-dark">The concerns we hear every week</p>
          <h2 id="obj-heading" class="font-serif text-2xl sm:text-3xl text-navy-900 mt-3 leading-tight">
            Every firm thinks this before they switch
          </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          <article v-for="obj in objections" :key="obj.concern" class="lp-objection-card">
            <p class="font-sans text-navy-900/45 text-sm italic leading-snug mb-4">"{{ obj.concern }}"</p>
            <div class="h-px bg-gold-500/30 mb-4"></div>
            <p class="font-sans text-charcoal-600 text-sm leading-relaxed">{{ obj.answer }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- ── 4. Social proof ── -->
    <section class="lp-section bg-navy-900" aria-labelledby="proof-heading">
      <div class="lp-container">
        <div class="text-center mb-10">
          <p class="lp-eyebrow">Built for real SA practices</p>
          <h2 id="proof-heading" class="font-serif text-2xl sm:text-3xl text-white mt-3">
            Proof it works in the field
          </h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
          <!-- Case study snapshot -->
          <article class="lp-proof-panel">
            <p class="font-sans text-gold-400 text-[11px] font-bold uppercase tracking-widest mb-3">Live deployment</p>
            <h3 class="font-serif text-xl text-white mb-1">A-Level Business Consultants</h3>
            <p class="font-sans text-white/45 text-sm mb-4">ABC INC · Adrian · Cape Town</p>
            <ul class="space-y-2 mb-5">
              <li v-for="item in pocDeliverables" :key="item" class="flex items-start gap-2 font-sans text-white/65 text-sm">
                <svg class="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                {{ item }}
              </li>
            </ul>
            <a
              href="https://www.alevelbusinessconsultants.co.za/"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex font-sans text-gold-400 text-sm font-semibold hover:text-gold-300 transition-colors"
            >
              alevelbusinessconsultants.co.za →
            </a>
          </article>

          <!-- Client testimonial + live website screenshot -->
          <article class="lp-proof-panel lp-proof-panel--stacked">
            <figure class="lp-proof-figure">
              <img
                :src="pocWebsiteImage.src"
                :alt="pocWebsiteImage.alt"
                class="lp-proof-screenshot"
                width="1200"
                height="675"
                loading="lazy"
                decoding="async"
              />
              <figcaption class="font-sans text-white/40 text-xs mt-2 text-center">
                Live homepage · alevelbusinessconsultants.co.za · Cape Town, South Africa
              </figcaption>
            </figure>

            <blockquote class="mt-5 pt-5 border-t border-white/10">
              <p class="font-sans text-white/75 text-sm sm:text-base leading-relaxed italic mb-5">
                "We are now operating within a fully automated system, with all administrative tasks running
                flawlessly and without stress. Adrian made light work of the issues at hand and resolved my
                backlog without any hassle."
              </p>
              <footer>
                <cite class="font-sans text-white/80 text-sm font-semibold not-italic">Client of ABC INC</cite>
                <p class="font-sans text-white/40 text-xs mt-1">Published on alevelbusinessconsultants.co.za</p>
              </footer>
            </blockquote>
          </article>
        </div>

        <div class="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto">
          <div v-for="stat in stats" :key="stat.value" class="text-center">
            <p class="font-serif text-[1.75rem] sm:text-[2.5rem] text-gold-400 leading-none">{{ stat.value }}</p>
            <p class="font-sans text-white/50 text-[11px] sm:text-sm mt-2 leading-snug">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── 5. Footer (legal) ── -->
    <footer class="lp-footer">
      <div class="lp-container lp-footer-inner">
        <p class="font-sans text-white/25 text-[11px] text-center sm:text-left">
          © {{ currentYear }} ZARMEDIAGROUP (PTY) LTD · Reg No: 2026/166396/07 · Cape Town, South Africa
        </p>
        <nav class="flex items-center gap-4 flex-wrap justify-center" aria-label="Legal">
          <RouterLink to="/privacy-policy" class="lp-footer-link" target="_blank">Privacy Policy</RouterLink>
          <RouterLink to="/cookie-policy" class="lp-footer-link" target="_blank">Cookie Policy</RouterLink>
          <RouterLink to="/terms-of-service" class="lp-footer-link" target="_blank">Terms of Service</RouterLink>
        </nav>
      </div>
    </footer>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useSeoMeta } from '@/composables/useSeoMeta'
import LpNavbar from '@/components/layout/LpNavbar.vue'

const router = useRouter()
const currentYear = new Date().getFullYear()
const isSubmitting = ref(false)
const submitError = ref('')
const websiteTrap = ref('')

const trustBadges = [
  'POPIA-conscious workflows',
  'FICA-ready document audit trail',
  'Branded to your firm',
  'SA-based team',
]

const objections = [
  {
    concern: "My clients won't bother using a new system — they're used to WhatsApp.",
    answer: "The upload flow takes under 60 seconds and requires no account creation. We've seen 90%+ client adoption in week one — because it's simpler than sending a WhatsApp.",
  },
  {
    concern: "Setting this up will eat time I don't have during tax season.",
    answer: "We handle everything — portal build, branding, client invite templates, and onboarding. You brief us once. Most firms are fully live within 30 days.",
  },
  {
    concern: "I'm not sure the cost is justified for a practice our size.",
    answer: "One fewer admin hour per week covers the subscription. Most practices also close one extra client per quarter because the portal signals professionalism competitors can't match.",
  },
]

const pocDeliverables = [
  'SAICA-forward public website on alevelbusinessconsultants.co.za',
  'Client portal path for logged-in document work',
  'Consultation booking and structured lead capture',
  'POPIA-conscious forms and compliance messaging',
]

const stats = [
  { value: '60%', label: 'reduction in admin hours in month one' },
  { value: '30', label: 'days from brief to live portal' },
  { value: '90%+', label: 'client adoption rate in week one' },
]

const form = ref({
  name: '',
  email: '',
  phone: '',
  firmName: '',
  consent: false,
})

const contactSubmitUrl =
  import.meta.env.VITE_CONTACT_ENDPOINT?.trim() || '/api/contact'

const LP_SESSION_KEY = 'zmg_lp_demo_submitted'

const heroImage = {
  src: '/hero-lp-accounting-client-portal-south-africa-saica-popia.png',
  alt:
    'Client portal for South African accountants — secure document uploads on desktop and mobile, SAICA-aligned and POPIA-conscious workflows, built by Zar Media Group',
}

const pocWebsiteImage = {
  src: '/case-study-abc-inc-alevel-business-consultants-website-cape-town-south-africa-saica.png',
  alt:
    'A-Level Business Consultants (ABC INC) chartered accounting firm website homepage in Cape Town, South Africa — SAICA-registered practice with client portal, tax, CIPC and POPIA-conscious design, built by Zar Media Group',
}

function splitName(fullName) {
  const trimmed = fullName.trim()
  const space = trimmed.indexOf(' ')
  if (space === -1) return { firstName: trimmed, lastName: '' }
  return { firstName: trimmed.slice(0, space), lastName: trimmed.slice(space + 1).trim() }
}

async function handleSubmit() {
  if (!form.value.consent || websiteTrap.value) return
  isSubmitting.value = true
  submitError.value = ''

  const { firstName, lastName } = splitName(form.value.name)

  try {
    const res = await fetch(contactSubmitUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName,
        lastName,
        email: form.value.email,
        phone: form.value.phone,
        firmName: form.value.firmName,
        message: 'Demo request from Google Ads landing page (/lp/client-portal-demo).',
        source: 'lp_client_portal_demo',
        websiteTrap: websiteTrap.value,
      }),
    })

    const result = await res.json()

    if (result.success) {
      try { sessionStorage.setItem(LP_SESSION_KEY, '1') } catch { /* ignore */ }
      await router.push('/lp/client-portal-demo/thank-you')
    } else {
      submitError.value = result.message || 'Something went wrong. Please try again.'
    }
  } catch {
    submitError.value = 'Could not reach the server. Email info@zarmediagroup.com to book your demo.'
  } finally {
    isSubmitting.value = false
  }
}

useSeoMeta({
  title: 'Stop Chasing Clients for Documents | Book a Free Portal Demo — Zar Media Group',
  description:
    'Client portal for South African accountants — secure uploads, SAICA and POPIA-conscious workflows, branded to your firm. Book a free 20-minute demo with Zar Media Group.',
  canonical: '/lp/client-portal-demo',
  robots: 'noindex, nofollow',
  ogImage: heroImage.src,
  ogImageAlt: heroImage.alt,
  schemas: [],
})
</script>

<style scoped>
.lp-page {
  @apply min-h-screen bg-navy-900 flex flex-col;
}

.lp-container {
  @apply max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 w-full;
}

/* Hero */
.lp-hero {
  @apply relative pb-10 sm:pb-14;
}

.lp-hero-visual {
  @apply mt-8 sm:mt-10 m-0;
}

.lp-hero-img {
  @apply w-full h-auto block rounded-sm border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.45)];
}

.lp-form-wrap {
  @apply mt-8 sm:mt-10 max-w-xl mx-auto w-full;
  scroll-margin-top: 5rem;
}

.lp-trust-badges {
  @apply flex flex-wrap justify-center gap-x-5 gap-y-2 mt-6 pt-6 border-t border-white/10;
}

/* Form card */
.lp-card {
  @apply overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.4)];
}

.lp-card-head {
  @apply bg-navy-900 px-6 py-5 sm:px-7 sm:py-6;
}

.lp-card-body {
  @apply bg-cream px-6 py-6 sm:px-7 sm:py-7 space-y-4;
}

.lp-label {
  @apply font-sans text-navy-900/55 text-[10px] font-bold uppercase tracking-widest block mb-1.5;
}

.lp-input {
  @apply w-full px-3.5 py-3 font-sans text-navy-900 text-sm bg-white border border-navy-900/15
         focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500/25
         transition-colors placeholder:text-navy-900/25;
}

.lp-cta-btn {
  @apply w-full py-4 bg-gold-500 text-navy-900 font-sans font-extrabold text-sm tracking-wide
         hover:bg-gold-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed;
}

/* Sections */
.lp-section {
  @apply py-14 sm:py-20;
}

.lp-eyebrow {
  @apply font-sans text-gold-400 text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase;
}

.lp-eyebrow-dark {
  @apply font-sans text-gold-600 text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase;
}

.lp-objection-card {
  @apply bg-white border border-navy-900/10 p-6 sm:p-7;
}

/* Footer */
.lp-footer {
  @apply border-t border-white/10 py-5 mt-auto;
}

.lp-footer-inner {
  @apply flex flex-col sm:flex-row items-center justify-between gap-3;
}

.lp-footer-link {
  @apply font-sans text-white/30 text-[11px] hover:text-white/55 transition-colors;
}

.lp-proof-panel {
  @apply bg-white/5 border border-white/10 px-6 py-6 sm:px-7 sm:py-7;
}

.lp-proof-panel--stacked {
  @apply flex flex-col;
}

.lp-proof-figure {
  @apply m-0;
}

.lp-proof-screenshot {
  @apply w-full h-auto block rounded-sm border border-white/10 shadow-lg;
}
</style>
