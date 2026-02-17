<template>
  <div class="website-service-page">
    <!-- PAGE HERO -->
    <section class="page-hero">
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute inset-0 opacity-[0.03]" style="background-image: linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px); background-size: 60px 60px;"></div>
      </div>
      <div class="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <span class="section-label reveal-up">Service</span>
        <h1 class="font-serif text-display-xl text-white mb-6 reveal-up" style="transition-delay: 100ms;">
          Website as a <em class="text-gold-400">Service</em>
        </h1>
        <div class="gold-divider-center reveal-up" style="transition-delay: 150ms;"></div>
        <p class="font-sans text-white/60 text-xl max-w-2xl mx-auto leading-relaxed reveal-up" style="transition-delay: 200ms;">
          Not a one-time build. A continuously optimized, fully managed digital asset — with outcomes guaranteed.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center mt-10 reveal-up" style="transition-delay: 300ms;">
          <button class="btn-primary" @click="showPricingModal = true">View Pricing Plans</button>
          <RouterLink to="/contact" class="btn-ghost">Book a Demo</RouterLink>
        </div>
      </div>
    </section>

    <!-- WHY WAAS -->
    <section class="section-padding bg-cream">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div class="reveal-left">
            <span class="section-label">Why WaaS?</span>
            <h2 class="font-serif text-display-md text-navy-900 mb-6">The Problem with One-Time Builds</h2>
            <div class="gold-divider"></div>
            <p class="font-sans text-charcoal-600 leading-relaxed mb-8">
              Traditional website projects deliver a site that's perfect on launch day — and slowly decays from that point forward. Technology changes, competitors improve, and your site falls behind. WaaS solves this permanently.
            </p>
            <div class="space-y-4">
              <div v-for="item in whyWaas" :key="item.title" class="flex items-start gap-4">
                <div class="w-8 h-8 flex-shrink-0 bg-gold-500/10 border border-gold-500/30 flex items-center justify-center mt-0.5">
                  <svg class="w-4 h-4 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <div>
                  <h4 class="font-sans font-semibold text-navy-900 text-sm mb-1">{{ item.title }}</h4>
                  <p class="font-sans text-charcoal-500 text-sm leading-relaxed">{{ item.desc }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Feature tabs -->
          <div class="reveal-right">
            <div class="flex gap-0 mb-6 border-b border-navy-900/10">
              <button
                v-for="tab in featureTabs"
                :key="tab.id"
                class="px-5 py-3 font-sans text-sm font-semibold transition-all border-b-2 -mb-px"
                :class="[
                  activeTab === tab.id
                    ? 'border-gold-500 text-navy-900'
                    : 'border-transparent text-charcoal-400 hover:text-charcoal-700'
                ]"
                @click="activeTab = tab.id"
              >
                {{ tab.label }}
              </button>
            </div>

            <Transition name="fade" mode="out-in">
              <div :key="activeTab">
                <div class="space-y-3">
                  <div
                    v-for="feature in activeTabFeatures"
                    :key="feature.name"
                    class="flex items-start gap-4 p-4 bg-white border border-navy-900/8 hover:border-gold-500/30 transition-all"
                  >
                    <div class="w-8 h-8 flex-shrink-0 bg-gold-500/10 flex items-center justify-center">
                      <svg class="w-4 h-4 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="feature.icon"></svg>
                    </div>
                    <div>
                      <div class="font-sans font-semibold text-navy-900 text-sm">{{ feature.name }}</div>
                      <div class="font-sans text-charcoal-500 text-xs mt-0.5">{{ feature.desc }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </div>

        <!-- ROI CALCULATOR -->
        <div class="reveal-up">
          <div class="bg-navy-900 p-8 lg:p-12">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span class="section-label">ROI Calculator</span>
                <h2 class="font-serif text-display-sm text-white mb-4">Calculate Your Return</h2>
                <p class="font-sans text-white/60 mb-8">Estimate the revenue impact of a professionally optimized digital presence for your practice.</p>

                <div class="space-y-6">
                  <div>
                    <label class="font-sans text-white/70 text-xs font-semibold uppercase tracking-wider mb-3 block">
                      Monthly Website Visitors: <span class="text-gold-400">{{ visitors.toLocaleString() }}</span>
                    </label>
                    <input type="range" min="100" max="10000" step="100" v-model.number="visitors" class="w-full" />
                  </div>
                  <div>
                    <label class="font-sans text-white/70 text-xs font-semibold uppercase tracking-wider mb-3 block">
                      Average Client Value: <span class="text-gold-400">${{ clientValue.toLocaleString() }}</span>
                    </label>
                    <input type="range" min="500" max="50000" step="500" v-model.number="clientValue" class="w-full" />
                  </div>
                  <div>
                    <label class="font-sans text-white/70 text-xs font-semibold uppercase tracking-wider mb-3 block">
                      Current Conversion Rate: <span class="text-gold-400">{{ conversionRate }}%</span>
                    </label>
                    <input type="range" min="0.1" max="5" step="0.1" v-model.number="conversionRate" class="w-full" />
                  </div>
                </div>
              </div>

              <!-- Results -->
              <div class="space-y-4">
                <div class="p-6 border border-white/10">
                  <p class="font-sans text-white/50 text-xs uppercase tracking-wider mb-1">Current Monthly Revenue from Website</p>
                  <p class="font-serif text-white text-3xl font-bold">${{ currentRevenue.toLocaleString() }}</p>
                </div>
                <div class="p-6 border border-gold-500/50 bg-gold-500/5">
                  <p class="font-sans text-gold-400 text-xs uppercase tracking-wider mb-1">Projected with ZMG Optimization (+89% avg)</p>
                  <p class="font-serif text-gold-500 text-3xl font-bold">${{ projectedRevenue.toLocaleString() }}</p>
                </div>
                <div class="p-6 bg-gold-500">
                  <p class="font-sans text-navy-900/70 text-xs uppercase tracking-wider mb-1">Additional Annual Revenue</p>
                  <p class="font-serif text-navy-900 text-4xl font-bold">${{ annualGain.toLocaleString() }}</p>
                </div>
                <RouterLink to="/contact" class="btn-secondary w-full justify-center">
                  Get Your Personalized Projection
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PRICING -->
    <section class="section-padding bg-cream">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16 reveal-up">
          <span class="section-label">Investment</span>
          <h2 class="font-serif text-display-md text-navy-900 mb-4">Choose Your Partnership Level</h2>
          <div class="gold-divider-center"></div>
          <p class="font-sans text-charcoal-500 mt-4">All plans include full setup, migration, and ongoing optimization. No hidden fees.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div
            v-for="(plan, i) in pricingPlans"
            :key="plan.name"
            class="reveal-up relative"
            :style="{ transitionDelay: (i * 100) + 'ms' }"
          >
            <!-- Popular badge -->
            <div v-if="plan.popular" class="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold-500 text-navy-900 text-xs font-bold uppercase tracking-wider px-4 py-1.5 z-10">
              Most Popular
            </div>

            <div
              class="h-full p-8 border-2 transition-all duration-300"
              :class="[
                plan.popular
                  ? 'border-gold-500 bg-navy-900'
                  : 'border-navy-900/10 bg-white hover:border-gold-500/40'
              ]"
            >
              <h3 class="font-sans font-bold uppercase tracking-wider text-sm mb-2"
                  :class="plan.popular ? 'text-gold-400' : 'text-charcoal-500'">
                {{ plan.name }}
              </h3>
              <div class="flex items-end gap-1 mb-2">
                <span class="font-serif font-bold text-4xl"
                      :class="plan.popular ? 'text-white' : 'text-navy-900'">
                  ${{ plan.price }}
                </span>
                <span class="font-sans text-sm mb-2"
                      :class="plan.popular ? 'text-white/50' : 'text-charcoal-400'">/mo</span>
              </div>
              <p class="font-sans text-sm mb-8"
                 :class="plan.popular ? 'text-white/60' : 'text-charcoal-500'">
                {{ plan.description }}
              </p>

              <ul class="space-y-3 mb-8">
                <li v-for="feature in plan.features" :key="feature" class="flex items-start gap-3">
                  <svg class="w-4 h-4 flex-shrink-0 mt-0.5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span class="font-sans text-sm"
                        :class="plan.popular ? 'text-white/70' : 'text-charcoal-600'">
                    {{ feature }}
                  </span>
                </li>
              </ul>

              <RouterLink
                to="/contact"
                class="block text-center font-sans font-semibold text-sm tracking-wider uppercase py-4 px-6 transition-all"
                :class="[
                  plan.popular
                    ? 'bg-gold-500 text-navy-900 hover:bg-gold-400'
                    : 'border border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white'
                ]"
              >
                Get Started
              </RouterLink>
            </div>
          </div>
        </div>

        <p class="text-center font-sans text-charcoal-400 text-sm reveal-up">
          Need a custom solution? <RouterLink to="/contact" class="text-gold-600 hover:text-gold-500">Let's talk.</RouterLink>
        </p>
      </div>
    </section>

    <!-- PRICING DETAIL MODAL TRIGGER -->
    <BaseModal v-model="showPricingModal" title="Partnership Plans" label="Investment" size="xl" dark>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="plan in pricingPlans" :key="plan.name" class="p-6 border"
             :class="plan.popular ? 'border-gold-500 bg-white/5' : 'border-white/10'">
          <h3 class="font-sans font-bold text-gold-400 text-xs uppercase tracking-wider mb-2">{{ plan.name }}</h3>
          <div class="font-serif text-white text-3xl font-bold mb-1">${{ plan.price }}<span class="text-white/40 text-sm font-sans font-normal">/mo</span></div>
          <p class="font-sans text-white/50 text-sm mb-6">{{ plan.description }}</p>
          <ul class="space-y-2">
            <li v-for="feature in plan.features" :key="feature" class="flex items-start gap-2 text-sm text-white/70">
              <svg class="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>
      <template #footer>
        <div class="px-6 lg:px-8 pb-6 lg:pb-8">
          <RouterLink to="/contact" class="btn-primary w-full justify-center" @click="showPricingModal = false">
            Discuss My Needs
          </RouterLink>
        </div>
      </template>
    </BaseModal>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'
import BaseModal from '@/components/ui/BaseModal.vue'

const { initReveal } = useScrollReveal()
onMounted(() => setTimeout(initReveal, 50))

const showPricingModal = ref(false)
const activeTab = ref('design')

// ROI Calculator
const visitors = ref(1000)
const clientValue = ref(3000)
const conversionRate = ref(1)

const currentRevenue = computed(() =>
  Math.round(visitors.value * (conversionRate.value / 100) * clientValue.value)
)
const projectedRevenue = computed(() =>
  Math.round(currentRevenue.value * 1.89)
)
const annualGain = computed(() =>
  Math.round((projectedRevenue.value - currentRevenue.value) * 12)
)

const whyWaas = [
  { title: 'Always Current Technology', desc: 'Your site runs on the latest stack, security patches applied automatically.' },
  { title: 'Continuous Optimization', desc: 'Monthly A/B testing and CRO improvements to increase conversions over time.' },
  { title: 'Proactive Performance Monitoring', desc: '24/7 uptime monitoring with instant alerts and rapid response team.' },
  { title: 'Content & Copy Updates', desc: 'Need to update your team page, add services, or post regulatory changes? Done within 24 hours.' },
  { title: 'Annual Design Refresh', desc: 'Prevent design fatigue. Annual visual refresh keeps your brand looking premium.' },
]

const featureTabs = [
  { id: 'design', label: 'Design' },
  { id: 'tech', label: 'Technology' },
  { id: 'marketing', label: 'Growth' },
  { id: 'support', label: 'Support' },
]

const tabFeatures = {
  design: [
    { name: 'Bespoke Premium Design', desc: 'Custom UI tailored to your brand and financial sector positioning', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>' },
    { name: 'Annual Design Refresh', desc: 'Keep your digital presence current without a full rebuild', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>' },
    { name: 'Mobile-First Responsive', desc: '100% responsive across all device sizes and orientations', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>' },
  ],
  tech: [
    { name: 'Vue.js / React Frontend', desc: 'Lightning-fast SPA with 90+ Lighthouse score guaranteed', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/>' },
    { name: 'CDN & Edge Delivery', desc: 'Global CDN ensures fast load times for all your clients worldwide', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"/>' },
    { name: 'Security Hardening', desc: 'WAF, DDoS protection, SSL, and regular security audits', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>' },
  ],
  marketing: [
    { name: 'SEO Foundation & Monitoring', desc: 'Technical SEO maintained and content strategy provided monthly', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>' },
    { name: 'Conversion Rate Optimization', desc: 'Monthly A/B tests to continuously improve your conversion rates', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>' },
    { name: 'Analytics Dashboard', desc: 'Real-time revenue attribution and performance reporting', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>' },
  ],
  support: [
    { name: '24/7 Uptime Monitoring', desc: 'Automated monitoring with instant notifications and rapid response', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>' },
    { name: 'Dedicated Account Manager', desc: 'A single point of contact who knows your business inside out', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>' },
    { name: 'Content Update SLA', desc: 'All content update requests completed within 24 business hours', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>' },
  ],
}

const activeTabFeatures = computed(() => tabFeatures[activeTab.value] || [])

const pricingPlans = [
  {
    name: 'Established',
    price: '997',
    description: 'For solo practitioners and small firms establishing a premium digital presence.',
    popular: false,
    features: [
      '5-page premium website',
      'Mobile-responsive design',
      'Basic SEO setup',
      'Contact form + Calendly',
      'Monthly content updates (2hrs)',
      'Uptime monitoring',
      'SSL & security',
      'Analytics dashboard',
    ],
  },
  {
    name: 'Growth',
    price: '2,497',
    description: 'For growing firms ready to turn their website into a client acquisition engine.',
    popular: true,
    features: [
      '10-page premium website',
      'Custom design system',
      'Full SEO strategy & implementation',
      'CRM integration',
      'Monthly CRO testing',
      'Content updates (5hrs/mo)',
      'Client portal setup',
      'Priority support (4hr response)',
      'Monthly performance report',
      'Annual design refresh',
    ],
  },
  {
    name: 'Market Leader',
    price: '4,997',
    description: 'For industry leaders requiring a fully managed digital presence with maximum impact.',
    popular: false,
    features: [
      'Unlimited pages',
      'Fully custom design',
      'SEO + Content marketing',
      'Full tech stack integration',
      'Weekly CRO optimization',
      'Unlimited content updates',
      'Custom client portal',
      'Dedicated account manager',
      '2hr emergency response SLA',
      'Quarterly strategy sessions',
    ],
  },
]
</script>

