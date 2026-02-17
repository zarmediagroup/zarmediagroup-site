<template>
  <div class="contact-page">
    <!-- PAGE HERO -->
    <section class="page-hero">
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute inset-0 opacity-[0.03]" style="background-image: linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px); background-size: 60px 60px;"></div>
      </div>
      <div class="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <span class="section-label reveal-up">Get Started</span>
        <h1 class="font-serif text-display-xl text-white mb-6 reveal-up" style="transition-delay: 100ms;">
          Let's Build Something<br/><em class="text-gold-400">Extraordinary</em>
        </h1>
        <div class="gold-divider-center reveal-up" style="transition-delay: 150ms;"></div>
        <p class="font-sans text-white/60 text-xl max-w-2xl mx-auto leading-relaxed reveal-up" style="transition-delay: 200ms;">
          Ready to transform your digital presence? Tell us about your practice and we'll show you exactly how we can help.
        </p>
      </div>
    </section>

    <!-- CONTACT SECTION -->
    <section class="section-padding bg-cream">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

          <!-- Left: Contact Info -->
          <div class="lg:col-span-1 reveal-left">
            <h2 class="font-serif text-display-sm text-navy-900 mb-6">Multiple Ways to Reach Us</h2>
            <div class="gold-divider"></div>

            <!-- Contact Methods -->
            <div class="space-y-6 mb-10">
              <div v-for="contact in contactMethods" :key="contact.label" class="flex items-start gap-4">
                <div class="w-10 h-10 flex-shrink-0 bg-gold-500/10 border border-gold-500/30 flex items-center justify-center">
                  <svg class="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="contact.icon"></svg>
                </div>
                <div>
                  <p class="font-sans text-charcoal-400 text-xs uppercase tracking-wider mb-1">{{ contact.label }}</p>
                  <a :href="contact.href" class="font-sans text-navy-900 font-semibold text-sm hover:text-gold-600 transition-colors">
                    {{ contact.value }}
                  </a>
                </div>
              </div>
            </div>

            <!-- Office Hours -->
            <div class="p-6 bg-navy-900 mb-8">
              <h4 class="font-sans text-gold-400 text-xs font-semibold uppercase tracking-wider mb-4">Office Hours</h4>
              <div class="space-y-2">
                <div class="flex justify-between">
                  <span class="font-sans text-white/60 text-sm">Monday – Friday</span>
                  <span class="font-sans text-white text-sm font-semibold">9am – 6pm EST</span>
                </div>
                <div class="flex justify-between">
                  <span class="font-sans text-white/60 text-sm">Saturday</span>
                  <span class="font-sans text-white text-sm font-semibold">By Appointment</span>
                </div>
                <div class="flex justify-between">
                  <span class="font-sans text-white/60 text-sm">Sunday</span>
                  <span class="font-sans text-white/40 text-sm">Closed</span>
                </div>
              </div>
            </div>

            <!-- Book a Call CTA -->
            <div class="p-6 border border-gold-500/40 bg-gold-500/5">
              <h4 class="font-sans text-navy-900 font-bold text-sm mb-2">Prefer to Talk First?</h4>
              <p class="font-sans text-charcoal-500 text-xs leading-relaxed mb-4">
                Schedule a free 30-minute strategy call. No pitch, just value.
              </p>
              <a
                href="https://calendly.com/zarmediagroup/30min"
                target="_blank"
                rel="noopener"
                class="btn-primary text-xs py-3 w-full justify-center"
              >
                Book a Call via Calendly
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Right: Multi-Step Form -->
          <div class="lg:col-span-2 reveal-right">
            <div class="bg-white border border-navy-900/8 shadow-card">
              <!-- Step Progress -->
              <div class="px-8 pt-8 pb-6 border-b border-navy-900/8">
                <div class="flex items-center gap-0 mb-4">
                  <div
                    v-for="(step, i) in formSteps"
                    :key="step.label"
                    class="flex-1 flex items-center"
                  >
                    <div class="flex flex-col items-center">
                      <div
                        class="w-8 h-8 flex items-center justify-center border-2 transition-all duration-300 text-xs font-bold font-sans"
                        :class="[
                          currentStep > i
                            ? 'bg-gold-500 border-gold-500 text-navy-900'
                            : currentStep === i
                            ? 'border-gold-500 text-gold-500'
                            : 'border-navy-900/20 text-charcoal-300'
                        ]"
                      >
                        <svg v-if="currentStep > i" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                        </svg>
                        <span v-else>{{ i + 1 }}</span>
                      </div>
                      <span class="font-sans text-xs mt-1 hidden sm:block"
                            :class="currentStep === i ? 'text-navy-900 font-semibold' : 'text-charcoal-300'">
                        {{ step.label }}
                      </span>
                    </div>
                    <div
                      v-if="i < formSteps.length - 1"
                      class="flex-1 h-px mx-2"
                      :class="currentStep > i ? 'bg-gold-500' : 'bg-navy-900/10'"
                    ></div>
                  </div>
                </div>
              </div>

              <!-- Form Content -->
              <div class="p-8">
                <Transition name="fade" mode="out-in">
                  <!-- Step 0: Firm Info -->
                  <div v-if="currentStep === 0" key="step0">
                    <h3 class="font-serif text-navy-900 text-xl mb-6">Tell us about your practice</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label class="font-sans text-xs font-semibold text-charcoal-500 uppercase tracking-wider mb-2 block">First Name *</label>
                        <input v-model="form.firstName" type="text" placeholder="John" class="input-field" />
                      </div>
                      <div>
                        <label class="font-sans text-xs font-semibold text-charcoal-500 uppercase tracking-wider mb-2 block">Last Name *</label>
                        <input v-model="form.lastName" type="text" placeholder="Smith" class="input-field" />
                      </div>
                      <div>
                        <label class="font-sans text-xs font-semibold text-charcoal-500 uppercase tracking-wider mb-2 block">Work Email *</label>
                        <input v-model="form.email" type="email" placeholder="john@smithcpa.com" class="input-field" />
                      </div>
                      <div>
                        <label class="font-sans text-xs font-semibold text-charcoal-500 uppercase tracking-wider mb-2 block">Phone</label>
                        <input v-model="form.phone" type="tel" placeholder="+1 (555) 000-0000" class="input-field" />
                      </div>
                      <div class="sm:col-span-2">
                        <label class="font-sans text-xs font-semibold text-charcoal-500 uppercase tracking-wider mb-2 block">Firm Name *</label>
                        <input v-model="form.firmName" type="text" placeholder="Smith & Associates CPA" class="input-field" />
                      </div>
                      <div class="sm:col-span-2">
                        <label class="font-sans text-xs font-semibold text-charcoal-500 uppercase tracking-wider mb-2 block">Firm Type *</label>
                        <select v-model="form.firmType" class="input-field">
                          <option value="" disabled>Select your firm type</option>
                          <option>CPA / Accounting Firm</option>
                          <option>Tax Services</option>
                          <option>Financial Advisory / RIA</option>
                          <option>Bookkeeping Services</option>
                          <option>Financial Planning</option>
                          <option>Investment Management</option>
                          <option>Other Financial Services</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <!-- Step 1: Service Selection -->
                  <div v-else-if="currentStep === 1" key="step1">
                    <h3 class="font-serif text-navy-900 text-xl mb-6">What are you looking for?</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      <label
                        v-for="service in serviceOptions"
                        :key="service.value"
                        class="flex items-start gap-4 p-4 border-2 cursor-pointer transition-all"
                        :class="[
                          form.services.includes(service.value)
                            ? 'border-gold-500 bg-gold-500/5'
                            : 'border-navy-900/10 hover:border-navy-900/30'
                        ]"
                      >
                        <input
                          type="checkbox"
                          :value="service.value"
                          v-model="form.services"
                          class="mt-1 accent-gold-500 flex-shrink-0"
                        />
                        <div>
                          <div class="font-sans font-semibold text-navy-900 text-sm">{{ service.label }}</div>
                          <div class="font-sans text-charcoal-500 text-xs mt-0.5">{{ service.desc }}</div>
                        </div>
                      </label>
                    </div>

                    <div class="mb-4">
                      <label class="font-sans text-xs font-semibold text-charcoal-500 uppercase tracking-wider mb-2 block">Timeline</label>
                      <select v-model="form.timeline" class="input-field">
                        <option value="" disabled>When do you need this?</option>
                        <option>Urgently (within 2 weeks)</option>
                        <option>Soon (within 1 month)</option>
                        <option>Next quarter</option>
                        <option>Just exploring for now</option>
                      </select>
                    </div>

                    <div>
                      <label class="font-sans text-xs font-semibold text-charcoal-500 uppercase tracking-wider mb-2 block">Budget Range</label>
                      <select v-model="form.budget" class="input-field">
                        <option value="" disabled>Monthly investment range</option>
                        <option>Under $1,000/month</option>
                        <option>$1,000 – $2,500/month</option>
                        <option>$2,500 – $5,000/month</option>
                        <option>$5,000+/month</option>
                        <option>Unsure – need guidance</option>
                      </select>
                    </div>
                  </div>

                  <!-- Step 2: Details -->
                  <div v-else-if="currentStep === 2" key="step2">
                    <h3 class="font-serif text-navy-900 text-xl mb-6">Tell us more about your goals</h3>
                    <div class="space-y-4">
                      <div>
                        <label class="font-sans text-xs font-semibold text-charcoal-500 uppercase tracking-wider mb-2 block">Current Website URL (if any)</label>
                        <input v-model="form.websiteUrl" type="url" placeholder="https://yourfirm.com" class="input-field" />
                      </div>
                      <div>
                        <label class="font-sans text-xs font-semibold text-charcoal-500 uppercase tracking-wider mb-2 block">Primary Goal *</label>
                        <select v-model="form.primaryGoal" class="input-field">
                          <option value="" disabled>What's most important to you?</option>
                          <option>Attract more high-value clients</option>
                          <option>Improve professional credibility/trust</option>
                          <option>Automate client intake process</option>
                          <option>Stay compliant with regulations</option>
                          <option>Beat local competitors digitally</option>
                          <option>All of the above</option>
                        </select>
                      </div>
                      <div>
                        <label class="font-sans text-xs font-semibold text-charcoal-500 uppercase tracking-wider mb-2 block">Tell us about your biggest digital challenge</label>
                        <textarea
                          v-model="form.message"
                          rows="4"
                          placeholder="Describe your current situation and what you're trying to achieve..."
                          class="input-field resize-none"
                        ></textarea>
                      </div>
                      <div>
                        <label class="font-sans text-xs font-semibold text-charcoal-500 uppercase tracking-wider mb-2 block">How did you hear about us?</label>
                        <select v-model="form.source" class="input-field">
                          <option value="" disabled>Select...</option>
                          <option>Google Search</option>
                          <option>LinkedIn</option>
                          <option>Referral from colleague</option>
                          <option>Industry association</option>
                          <option>Social media</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <!-- Step 3: Review & Submit -->
                  <div v-else-if="currentStep === 3" key="step3">
                    <h3 class="font-serif text-navy-900 text-xl mb-6">Review & Submit</h3>
                    <div class="space-y-4 mb-8">
                      <div class="grid grid-cols-2 gap-4 p-5 bg-cream border border-navy-900/8">
                        <div>
                          <p class="font-sans text-charcoal-400 text-xs uppercase tracking-wider mb-1">Name</p>
                          <p class="font-sans text-navy-900 font-semibold text-sm">{{ form.firstName }} {{ form.lastName }}</p>
                        </div>
                        <div>
                          <p class="font-sans text-charcoal-400 text-xs uppercase tracking-wider mb-1">Email</p>
                          <p class="font-sans text-navy-900 font-semibold text-sm">{{ form.email }}</p>
                        </div>
                        <div>
                          <p class="font-sans text-charcoal-400 text-xs uppercase tracking-wider mb-1">Firm</p>
                          <p class="font-sans text-navy-900 font-semibold text-sm">{{ form.firmName }}</p>
                        </div>
                        <div>
                          <p class="font-sans text-charcoal-400 text-xs uppercase tracking-wider mb-1">Type</p>
                          <p class="font-sans text-navy-900 font-semibold text-sm">{{ form.firmType }}</p>
                        </div>
                      </div>
                      <div v-if="form.services.length" class="p-5 bg-cream border border-navy-900/8">
                        <p class="font-sans text-charcoal-400 text-xs uppercase tracking-wider mb-2">Services Interested In</p>
                        <div class="flex flex-wrap gap-2">
                          <span v-for="s in form.services" :key="s" class="tag text-xs">{{ s }}</span>
                        </div>
                      </div>
                    </div>

                    <label class="flex items-start gap-3 mb-6 cursor-pointer">
                      <input type="checkbox" v-model="form.consent" class="mt-1 accent-gold-500" />
                      <span class="font-sans text-charcoal-500 text-xs leading-relaxed">
                        I agree to receive communications from ZARMEDIAGROUP. We respect your privacy and will never share your information. View our
                        <a href="#" class="text-gold-600 hover:underline">Privacy Policy</a>.
                      </span>
                    </label>
                  </div>

                  <!-- Success State -->
                  <div v-else-if="currentStep === 4" key="success" class="text-center py-8">
                    <div class="w-20 h-20 mx-auto mb-6 border-2 border-gold-500 flex items-center justify-center animate-pulse-gold">
                      <svg class="w-10 h-10 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <h3 class="font-serif text-navy-900 text-2xl mb-4">We've Received Your Request!</h3>
                    <p class="font-sans text-charcoal-500 leading-relaxed mb-8">
                      Thank you, {{ form.firstName }}. Our team will review your submission and reach out within 1 business day. In the meantime, here are a few resources you might find valuable.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center">
                      <RouterLink to="/resources" class="btn-primary">Explore Resources</RouterLink>
                      <RouterLink to="/" class="btn-secondary">Back to Home</RouterLink>
                    </div>
                  </div>
                </Transition>

                <!-- Form Navigation -->
                <div v-if="currentStep < 4" class="flex items-center justify-between mt-8 pt-6 border-t border-navy-900/8">
                  <button
                    v-if="currentStep > 0"
                    class="btn-ghost text-navy-900 border-navy-900/20 hover:border-navy-900 text-xs py-3"
                    @click="currentStep--"
                  >
                    ← Back
                  </button>
                  <div v-else></div>

                  <button
                    v-if="currentStep < 3"
                    class="btn-primary"
                    @click="nextStep"
                    :disabled="!canProceed"
                    :class="{ 'opacity-50 cursor-not-allowed': !canProceed }"
                  >
                    Continue
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </button>

                  <button
                    v-else
                    class="btn-primary"
                    @click="submitForm"
                    :disabled="!form.consent"
                    :class="{ 'opacity-50 cursor-not-allowed': !form.consent }"
                  >
                    Submit Application
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- TRUST SECTION -->
    <section class="section-padding-sm bg-navy-900">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div v-for="trust in trustIndicators" :key="trust.label" class="reveal-up">
            <div class="font-serif text-gold-500 text-3xl font-bold mb-2">{{ trust.value }}</div>
            <div class="font-sans text-white/50 text-sm">{{ trust.label }}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

const { initReveal } = useScrollReveal()
onMounted(() => setTimeout(initReveal, 50))

const currentStep = ref(0)

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  firmName: '',
  firmType: '',
  services: [],
  timeline: '',
  budget: '',
  websiteUrl: '',
  primaryGoal: '',
  message: '',
  source: '',
  consent: false,
})

const formSteps = [
  { label: 'Your Practice' },
  { label: 'Services' },
  { label: 'Details' },
  { label: 'Review' },
]

const canProceed = computed(() => {
  if (currentStep.value === 0) {
    return form.value.firstName && form.value.lastName && form.value.email && form.value.firmName && form.value.firmType
  }
  if (currentStep.value === 1) {
    return form.value.services.length > 0 && form.value.timeline && form.value.budget
  }
  if (currentStep.value === 2) {
    return form.value.primaryGoal
  }
  return true
})

function nextStep() {
  if (canProceed.value && currentStep.value < 3) {
    currentStep.value++
  }
}

function submitForm() {
  if (form.value.consent) {
    // Integration point: send to CRM/email
    console.log('Form submitted:', form.value)
    currentStep.value = 4
  }
}

const contactMethods = [
  {
    label: 'Email',
    value: 'hello@zarmediagroup.com',
    href: 'mailto:hello@zarmediagroup.com',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>',
  },
  {
    label: 'Phone',
    value: '+1 (234) 567-890',
    href: 'tel:+1234567890',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>',
  },
  {
    label: 'Address',
    value: '123 Financial District, New York, NY 10004',
    href: 'https://maps.google.com',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>',
  },
]

const serviceOptions = [
  { value: 'Website as a Service', label: 'Website as a Service', desc: 'Fully managed digital presence' },
  { value: 'New Website Build', label: 'New Website Build', desc: 'Custom designed from scratch' },
  { value: 'Workflow Integration', label: 'Workflow Integration', desc: 'Connect your tools & systems' },
  { value: 'Compliance Review', label: 'Compliance Review', desc: 'Regulatory audit & remediation' },
  { value: 'SEO & Growth', label: 'SEO & Growth', desc: 'Search rankings & lead generation' },
  { value: 'Website Redesign', label: 'Website Redesign', desc: 'Modernize your existing site' },
]

const trustIndicators = [
  { value: '127+', label: 'Financial Clients Served' },
  { value: '<24hrs', label: 'Response Time Guarantee' },
  { value: '98%', label: 'Client Retention Rate' },
  { value: '5★', label: 'Average Client Rating' },
]
</script>

