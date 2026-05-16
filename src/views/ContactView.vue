<template>
  <div class="contact-page">

    <!-- ══ HERO ══ -->
    <section class="relative min-h-screen flex items-center bg-navy-900 overflow-hidden pt-28 pb-20 lg:pt-40 lg:pb-24" aria-label="Contact page hero">
      <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div class="absolute inset-0 opacity-[0.025]" style="background-image: linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px); background-size: 60px 60px;"></div>
        <div class="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-gold-500/30 hidden lg:block"></div>
        <div class="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-gold-500/30 hidden lg:block"></div>
      </div>
      <div class="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <BreadcrumbNav :crumbs="[{ label: 'Contact', path: '/contact' }]" />

        <span class="section-label reveal-up">Contact — Get a Free Accounting Website Audit</span>
        <h1 class="font-serif text-display-lg text-white mt-4 mb-6 max-w-3xl reveal-up" style="transition-delay: 100ms;">
          Reduce Admin &amp; Grow Your<br/>
          <span class="text-gradient">Accounting Practice</span>
        </h1>
        <p class="font-sans text-white/60 text-lg max-w-2xl leading-relaxed reveal-up" style="transition-delay: 200ms;">
          Tell us about your accounting firm or financial services practice. We'll conduct a free website audit and show you exactly how to reduce admin, attract more clients, and build a compliant digital presence.
        </p>
        <div class="gold-divider mt-8 reveal-up" style="transition-delay: 250ms;"></div>
      </div>
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce" aria-hidden="true">
        <span class="font-sans text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <div class="w-px h-12 bg-gradient-to-b from-white/30 to-transparent"></div>
      </div>
    </section>

    <!-- ══ CONTACT LAYOUT ══ -->
    <section class="section-padding bg-cream" aria-label="Contact form and information">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 items-start">

          <!-- ── Left: Form ── -->
          <div class="lg:col-span-3 reveal-up">
            <div class="bg-white border border-navy-900/8 p-5 sm:p-8 lg:p-10">
              <div class="mb-8">
                <h2 class="font-serif text-display-sm text-navy-900 mb-2">Request a Free Audit</h2>
                <p class="font-sans text-charcoal-500 text-sm">
                  For accounting firms, bookkeepers, financial advisors, and tax professionals. No hard sell — just a genuine analysis of your digital presence and where the biggest opportunities are.
                </p>
              </div>

              <!-- Multi-step progress -->
              <div class="flex items-center gap-0 mb-8 sm:mb-10" role="list" aria-label="Form completion steps">
                <div
                  v-for="(step, i) in formSteps"
                  :key="step"
                  class="flex items-center flex-1"
                  role="listitem"
                >
                  <div
                    class="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center font-sans font-bold text-[10px] sm:text-xs border transition-all duration-300 flex-shrink-0"
                    :class="currentStep > i
                      ? 'bg-gold-500 border-gold-500 text-navy-900'
                      : currentStep === i
                        ? 'bg-navy-900 border-navy-900 text-white'
                        : 'bg-transparent border-navy-900/20 text-navy-900/40'"
                    :aria-current="currentStep === i ? 'step' : undefined"
                    :aria-label="`Step ${i + 1}: ${step}`"
                  >
                    <svg v-if="currentStep > i" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    <span v-else>{{ i + 1 }}</span>
                  </div>
                  <div class="flex-1 h-px mx-2" :class="i < formSteps.length - 1 ? (currentStep > i ? 'bg-gold-500' : 'bg-navy-900/10') : 'hidden'"></div>
                  <span class="sr-only">{{ step }}</span>
                </div>
              </div>

              <form @submit.prevent="handleSubmit" novalidate :aria-label="`Contact form step ${currentStep + 1} of ${formSteps.length}`">

                <!-- Bot trap: leave empty (hidden from users) -->
                <div class="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
                  <label for="websiteTrap" class="sr-only">Leave this field blank</label>
                  <input
                    id="websiteTrap"
                    v-model="websiteTrap"
                    type="text"
                    tabindex="-1"
                    autocomplete="off"
                  />
                </div>

                <!-- Step 1: About You -->
                <fieldset v-if="currentStep === 0" class="space-y-5">
                  <legend class="font-sans font-semibold text-navy-900 text-sm mb-6 block">Step 1: Tell us about yourself</legend>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label for="firstName" class="font-sans text-navy-900/70 text-xs font-semibold uppercase tracking-wider block mb-2">
                        First Name <span class="text-gold-500" aria-label="required">*</span>
                      </label>
                      <input
                        id="firstName" v-model="form.firstName" type="text"
                        required autocomplete="given-name"
                        class="w-full px-4 py-3 font-sans text-navy-900 bg-transparent border border-navy-900/20 focus:border-gold-500 focus:outline-none transition-colors text-sm"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label for="lastName" class="font-sans text-navy-900/70 text-xs font-semibold uppercase tracking-wider block mb-2">
                        Last Name <span class="text-gold-500" aria-label="required">*</span>
                      </label>
                      <input
                        id="lastName" v-model="form.lastName" type="text"
                        required autocomplete="family-name"
                        class="w-full px-4 py-3 font-sans text-navy-900 bg-transparent border border-navy-900/20 focus:border-gold-500 focus:outline-none transition-colors text-sm"
                        placeholder="Smith"
                      />
                    </div>
                  </div>

                  <div>
                    <label for="email" class="font-sans text-navy-900/70 text-xs font-semibold uppercase tracking-wider block mb-2">
                      Work Email <span class="text-gold-500" aria-label="required">*</span>
                    </label>
                    <input
                      id="email" v-model="form.email" type="email"
                      required autocomplete="email"
                      class="w-full px-4 py-3 font-sans text-navy-900 bg-transparent border border-navy-900/20 focus:border-gold-500 focus:outline-none transition-colors text-sm"
                      placeholder="you@yourfirm.co.za"
                    />
                  </div>

                  <div>
                    <label for="phone" class="font-sans text-navy-900/70 text-xs font-semibold uppercase tracking-wider block mb-2">
                      Phone Number
                    </label>
                    <input
                      id="phone" v-model="form.phone" type="tel"
                      autocomplete="tel"
                      class="w-full px-4 py-3 font-sans text-navy-900 bg-transparent border border-navy-900/20 focus:border-gold-500 focus:outline-none transition-colors text-sm"
                      placeholder="+27 11 000 0000"
                    />
                  </div>

                  <button type="button" class="btn-primary w-full" @click="nextStep" :disabled="!form.firstName || !form.email">
                    Next Step
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </button>
                </fieldset>

                <!-- Step 2: About Your Practice -->
                <fieldset v-if="currentStep === 1" class="space-y-5">
                  <legend class="font-sans font-semibold text-navy-900 text-sm mb-6 block">Step 2: About your practice</legend>

                  <div>
                    <label for="firmName" class="font-sans text-navy-900/70 text-xs font-semibold uppercase tracking-wider block mb-2">
                      Firm Name <span class="text-gold-500" aria-label="required">*</span>
                    </label>
                    <input
                      id="firmName" v-model="form.firmName" type="text"
                      required
                      class="w-full px-4 py-3 font-sans text-navy-900 bg-transparent border border-navy-900/20 focus:border-gold-500 focus:outline-none transition-colors text-sm"
                      placeholder="Your Firm Name"
                    />
                  </div>

                  <div>
                    <label for="firmType" class="font-sans text-navy-900/70 text-xs font-semibold uppercase tracking-wider block mb-2">
                      Type of Practice <span class="text-gold-500" aria-label="required">*</span>
                    </label>
                    <select
                      id="firmType" v-model="form.firmType"
                      required
                      class="w-full px-4 py-3 font-sans text-navy-900 bg-white border border-navy-900/20 focus:border-gold-500 focus:outline-none transition-colors text-sm"
                    >
                      <option value="" disabled>Select your practice type</option>
                      <option value="accounting">Accounting Firm (CA/CPA)</option>
                      <option value="bookkeeping">Bookkeeping Practice</option>
                      <option value="tax">Tax Advisory</option>
                      <option value="financial-advisory">Financial Advisory / IFA</option>
                      <option value="wealth">Wealth Management</option>
                      <option value="compliance">Compliance / Risk</option>
                      <option value="other">Other Financial Services</option>
                    </select>
                  </div>

                  <div>
                    <label for="website" class="font-sans text-navy-900/70 text-xs font-semibold uppercase tracking-wider block mb-2">
                      Current Website URL (if any)
                    </label>
                    <input
                      id="website" v-model="form.website" type="url"
                      autocomplete="url"
                      class="w-full px-4 py-3 font-sans text-navy-900 bg-transparent border border-navy-900/20 focus:border-gold-500 focus:outline-none transition-colors text-sm"
                      placeholder="https://yourfirm.co.za"
                    />
                  </div>

                  <div class="flex gap-3">
                    <button type="button" class="btn-ghost flex-1" @click="prevStep">
                      ← Back
                    </button>
                    <button type="button" class="btn-primary flex-1" @click="nextStep" :disabled="!form.firmName || !form.firmType">
                      Next Step →
                    </button>
                  </div>
                </fieldset>

                <!-- Step 3: Service Interest & Message -->
                <fieldset v-if="currentStep === 2" class="space-y-5">
                  <legend class="font-sans font-semibold text-navy-900 text-sm mb-6 block">Step 3: What can we help with?</legend>

                  <div>
                    <p class="font-sans text-navy-900/70 text-xs font-semibold uppercase tracking-wider mb-3">
                      Services you're interested in
                    </p>
                    <div class="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3">
                      <label
                        v-for="service in serviceOptions"
                        :key="service.id"
                        class="flex items-start gap-3 p-3 border cursor-pointer transition-all duration-200"
                        :class="form.services.includes(service.id)
                          ? 'border-gold-500 bg-gold-500/5'
                          : 'border-navy-900/20 hover:border-navy-900/40'"
                      >
                        <input
                          type="checkbox"
                          :value="service.id"
                          v-model="form.services"
                          class="mt-0.5 accent-gold-500"
                          :aria-label="service.label"
                        />
                        <div>
                          <div class="font-sans font-semibold text-navy-900 text-xs">{{ service.label }}</div>
                          <div class="font-sans text-charcoal-400 text-xs mt-0.5">{{ service.sub }}</div>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label for="message" class="font-sans text-navy-900/70 text-xs font-semibold uppercase tracking-wider block mb-2">
                      Tell us about your biggest challenge
                    </label>
                    <textarea
                      id="message" v-model="form.message"
                      rows="4"
                      class="w-full px-4 py-3 font-sans text-navy-900 bg-transparent border border-navy-900/20 focus:border-gold-500 focus:outline-none transition-colors text-sm resize-none"
                      placeholder="We spend too much time chasing client documents and manually entering data..."
                    ></textarea>
                  </div>

                  <!-- GDPR / POPIA consent -->
                  <div class="flex items-start gap-3">
                    <input
                      id="consent" v-model="form.consent" type="checkbox"
                      required
                      class="mt-1 accent-gold-500 flex-shrink-0"
                      :aria-required="true"
                    />
                    <label for="consent" class="font-sans text-charcoal-500 text-xs leading-relaxed cursor-pointer">
                      I agree to Zar Media Group processing my information as described in the
                      <a href="/privacy-policy" class="text-gold-600 hover:underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
                      This form is POPIA and GDPR compliant.
                    </label>
                  </div>

                  <div v-if="submitError" class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 text-sm font-sans" role="alert">
                    {{ submitError }}
                  </div>

                  <div class="flex gap-3">
                    <button type="button" class="btn-ghost flex-1" @click="prevStep">
                      ← Back
                    </button>
                    <button
                      type="submit"
                      class="btn-primary flex-1"
                      :disabled="!form.consent || isSubmitting"
                      aria-label="Submit contact form for your free accounting website audit"
                    >
                      <span v-if="isSubmitting">Sending…</span>
                      <span v-else>Get Free Audit →</span>
                    </button>
                  </div>
                  <p v-if="submitError" class="font-sans text-red-600 text-sm mt-3 text-center" role="alert">
                    {{ submitError }}
                  </p>
                </fieldset>

                <!-- Success state -->
                <div v-if="currentStep === 3" class="text-center py-8" role="status" aria-live="polite">
                  <div class="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-gold-500 border border-gold-500" aria-hidden="true">
                    <svg class="w-8 h-8 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <h3 class="font-serif text-navy-900 text-2xl mb-3">Enquiry Received!</h3>
                  <p class="font-sans text-charcoal-500 text-sm leading-relaxed">
                    Thank you, <strong>{{ form.firstName }}</strong>! We'll review your accounting firm's website and come back to you within one business day with a free audit report.
                  </p>
                </div>

              </form>
            </div>
          </div>

          <!-- ── Right: Contact Info ── -->
          <aside class="lg:col-span-2 space-y-6 reveal-up" style="transition-delay: 150ms;" aria-label="Contact information">

            <!-- Why Talk to Us -->
            <div class="bg-navy-900 p-8 border border-white/10">
              <h2 class="font-serif text-white text-xl mb-6">Why Accounting Firms Choose Us</h2>
              <ul class="space-y-4">
                <li v-for="reason in whyUs" :key="reason" class="flex items-start gap-3">
                  <svg class="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span class="font-sans text-white/70 text-sm">{{ reason }}</span>
                </li>
              </ul>
            </div>

            <!-- Contact Details -->
            <div class="bg-white border border-navy-900/8 p-8">
              <h2 class="font-serif text-navy-900 text-xl mb-6">Contact Details</h2>
              <address class="not-italic space-y-4">
                <div class="flex items-start gap-4">
                  <div class="w-8 h-8 flex-shrink-0 flex items-center justify-center border border-gold-500/30 bg-gold-500/5" aria-hidden="true">
                    <svg class="w-4 h-4 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <div class="font-sans text-navy-900/50 text-xs uppercase tracking-wider mb-1">Email</div>
                    <a href="mailto:info@zarmediagroup.com" class="font-sans text-navy-900 text-sm hover:text-gold-600 transition-colors">
                      info@zarmediagroup.com
                    </a>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="w-8 h-8 flex-shrink-0 flex items-center justify-center border border-gold-500/30 bg-gold-500/5" aria-hidden="true">
                    <svg class="w-4 h-4 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <div>
                    <div class="font-sans text-navy-900/50 text-xs uppercase tracking-wider mb-1">Phone (SA)</div>
                    <a href="tel:+27685070088" class="font-sans text-navy-900 text-sm hover:text-gold-600 transition-colors">
                      +27 68 507 0088
                    </a>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="w-8 h-8 flex-shrink-0 flex items-center justify-center border border-gold-500/30 bg-gold-500/5" aria-hidden="true">
                    <svg class="w-4 h-4 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div>
                    <div class="font-sans text-navy-900/50 text-xs uppercase tracking-wider mb-1">Location</div>
                    <div class="font-sans text-navy-900 text-sm">
                      Cape Town, Western Cape, South Africa<br/>
                      <span class="text-charcoal-400 text-xs">Serving accounting firms across South Africa and globally</span>
                    </div>
                  </div>
                </div>
              </address>
            </div>

            <!-- Response time promise -->
            <div class="bg-gold-500 p-6 text-center">
              <div class="font-serif text-navy-900 text-3xl font-bold mb-1">&lt; 24h</div>
              <div class="font-sans text-navy-900/70 text-sm font-semibold">Response time guaranteed</div>
              <div class="font-sans text-navy-900/60 text-xs mt-1">For all accounting firms and financial professionals</div>
            </div>
          </aside>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'
import { useSeoMeta, SCHEMAS } from '@/composables/useSeoMeta'
import BreadcrumbNav from '@/components/ui/BreadcrumbNav.vue'

const { initReveal } = useScrollReveal()
onMounted(() => setTimeout(initReveal, 50))

const currentStep = ref(0)
const isSubmitting = ref(false)
const submitError = ref('')
/** Honeypot — must stay empty */
const websiteTrap = ref('')
const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  firmName: '',
  firmType: '',
  website: '',
  services: [],
  message: '',
  consent: false,
})

const formSteps = ['About You', 'Your Practice', 'Your Needs', 'Complete']

function nextStep() { if (currentStep.value < formSteps.length - 1) currentStep.value++ }
function prevStep() { if (currentStep.value > 0) currentStep.value-- }

const contactSubmitUrl =
  import.meta.env.VITE_CONTACT_ENDPOINT?.trim() || '/api/contact'

async function handleSubmit() {
  if (!form.value.consent) return
  if (websiteTrap.value) return
  isSubmitting.value = true
  submitError.value = ''

  try {
    const res = await fetch(contactSubmitUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: form.value.firstName,
        lastName: form.value.lastName,
        email: form.value.email,
        phone: form.value.phone,
        firmName: form.value.firmName,
        firmType: form.value.firmType,
        website: form.value.website,
        services: form.value.services,
        message: form.value.message,
        websiteTrap: websiteTrap.value,
      }),
    })

    const result = await res.json()

    if (result.success) {
      if (typeof window.gtag === 'function' && window.__zmgAnalyticsConsentGranted === true) {
        window.gtag('event', 'generate_lead', {
          method: 'contact_form',
          page_path: window.location.pathname,
        })
        window.gtag('event', 'ads_conversion_Submit_lead_form_1', {
          method: 'contact_form',
          page_path: window.location.pathname,
        })
      }
      currentStep.value = 3
    } else {
      submitError.value = result.message || 'Something went wrong. Please try again or email us directly.'
    }
  } catch {
    submitError.value = 'Could not reach the server. Please try again or email us at info@zarmediagroup.com.'
  } finally {
    isSubmitting.value = false
  }
}

useSeoMeta({
  title: 'Contact Zar Media Group | Get a Free Website Audit',
  description:
    'Ready to reduce admin and grow your accounting firm? Contact Zar Media Group for a free website audit or strategy call. Serving accountants and financial professionals across South Africa.',
  keywords:
    'contact Zar Media Group, free website audit accountants, accounting firm website consultation, financial services digital agency South Africa, free digital audit financial advisors',
  canonical: '/contact',
  schemas: [
    SCHEMAS.breadcrumb([
      { name: 'Home', url: '/' },
      { name: 'Contact', url: '/contact' },
    ]),
    SCHEMAS.localBusiness(),
  ],
})

const serviceOptions = [
  { id: 'portal', label: 'Client Portal', sub: 'Built & managed' },
  { id: 'waas', label: 'Website as a Service', sub: 'Managed website' },
  { id: 'workflow', label: 'Workflow Integration', sub: 'CRM & automation' },
  { id: 'compliance', label: 'Compliance & Trust', sub: 'Regulatory audit' },
]

const whyUs = [
  'Free, no-obligation website audit within 24 hours',
  'No long-term contracts — month-to-month flexibility',
  'Sector specialists — not generalist web designers',
  'SA-based team with deep financial sector knowledge',
  '127+ accounting firms and financial practices served',
  '98% client retention rate — our results speak',
]
</script>
