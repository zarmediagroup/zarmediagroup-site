<template>
  <section class="section-padding-sm bg-navy-950 border-t border-white/5" aria-label="Related services">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-10">
        <span class="section-label">You May Also Need</span>
        <h2 class="font-serif text-display-sm text-white">Related Services</h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <RouterLink
          v-for="service in services"
          :key="service.to"
          :to="service.to"
          class="group flex items-start gap-5 p-6 border border-white/10 hover:border-gold-500/50 transition-all duration-300 hover:bg-white/5"
          :aria-label="`Learn more about ${service.title}`"
        >
          <!-- Icon -->
          <div class="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-gold-500/30 bg-gold-500/10 group-hover:bg-gold-500 group-hover:border-gold-500 transition-all duration-300">
            <svg
              class="w-5 h-5 text-gold-500 group-hover:text-navy-900 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
              v-html="service.icon"
            ></svg>
          </div>

          <!-- Text -->
          <div class="flex-1 min-w-0">
            <h3 class="font-sans font-semibold text-white text-sm group-hover:text-gold-400 transition-colors mb-1">
              {{ service.title }}
            </h3>
            <p class="font-sans text-white/40 text-xs leading-relaxed">
              {{ service.description }}
            </p>
          </div>

          <!-- Arrow -->
          <svg
            class="w-4 h-4 text-white/20 group-hover:text-gold-500 group-hover:translate-x-1 transition-all flex-shrink-0 mt-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  /**
   * IDs of services to EXCLUDE (i.e. the current page's service)
   * Values: 'waas' | 'workflow' | 'compliance' | 'portals-crm' | 'client-portal'
   */
  exclude: {
    type: Array,
    default: () => [],
  },
})

const ALL_SERVICES = [
  {
    id: 'portals-crm',
    to: '/services/accounting-portals-crm',
    title: 'Client Portals & CRM',
    description:
      'Accounting portals, client-facing CRM journeys, and compliance-focused client portals — integrated with your website and practice stack.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>',
  },
  {
    id: 'client-portal',
    to: '/services/client-portal',
    title: 'Client Portal Tour',
    description:
      'Admin demo: client directory, document vault, and POPIA-conscious workflows for South African accounting firms.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h12a2 2 0 012 2v8a2 2 0 01-2 2H5z"/>',
  },
  {
    id: 'waas',
    to: '/services/website-as-a-service',
    title: 'Website as a Service',
    description: 'Fully managed, continuously optimised website for accountants and financial advisors — with guaranteed ROI.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>',
  },
  {
    id: 'workflow',
    to: '/services/workflow-integration',
    title: 'Workflow Integration',
    description: 'Connect your website to your CRM, accounting software, and client portals — eliminating manual admin.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>',
  },
  {
    id: 'compliance',
    to: '/services/compliance-trust',
    title: 'Compliance & Trust',
    description: 'POPIA, GDPR, WCAG 2.1 AA, and FSCA-aware builds for regulated accounting and financial services in South Africa.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>',
  },
]

const services = computed(() =>
  ALL_SERVICES.filter(s => !props.exclude.includes(s.id))
)
</script>





