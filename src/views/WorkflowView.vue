<template>
  <div class="workflow-page">
    <!-- PAGE HERO -->
    <section class="page-hero">
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute inset-0 opacity-[0.03]" style="background-image: linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px); background-size: 60px 60px;"></div>
      </div>
      <div class="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <span class="section-label reveal-up">Service</span>
        <h1 class="font-serif text-display-xl text-white mb-6 reveal-up" style="transition-delay: 100ms;">
          Workflow <em class="text-gold-400">Integration</em>
        </h1>
        <div class="gold-divider-center reveal-up" style="transition-delay: 150ms;"></div>
        <p class="font-sans text-white/60 text-xl max-w-2xl mx-auto leading-relaxed reveal-up" style="transition-delay: 200ms;">
          Connect your digital presence to your operations. Zero friction from click to client.
        </p>
      </div>
    </section>

    <!-- INTEGRATION ECOSYSTEM -->
    <section class="section-padding bg-cream">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16 reveal-up">
          <span class="section-label">Integration Ecosystem</span>
          <h2 class="font-serif text-display-md text-navy-900 mb-4">Connect Everything You Use</h2>
          <div class="gold-divider-center"></div>
          <p class="font-sans text-charcoal-500 max-w-xl mx-auto mt-4">
            We integrate with 50+ tools used by financial professionals. Your website becomes the hub of your entire client operations.
          </p>
        </div>

        <!-- Tech Stack Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          <div
            v-for="(tool, i) in integrationTools"
            :key="tool.name"
            class="reveal-up group p-5 bg-white border border-navy-900/8 hover:border-gold-500/40 hover:shadow-card transition-all duration-300 text-center cursor-pointer"
            :style="{ transitionDelay: (i * 50) + 'ms' }"
          >
            <div class="w-10 h-10 mx-auto mb-3 flex items-center justify-center rounded-lg"
                 :style="{ backgroundColor: tool.color + '20' }">
              <span class="font-serif font-bold text-lg" :style="{ color: tool.color }">{{ tool.abbr }}</span>
            </div>
            <div class="font-sans text-navy-900 text-xs font-semibold">{{ tool.name }}</div>
            <div class="font-sans text-charcoal-400 text-xs mt-0.5">{{ tool.category }}</div>
          </div>
        </div>

        <!-- Before / After Comparison -->
        <div class="reveal-up">
          <div class="text-center mb-12">
            <span class="section-label">The Difference</span>
            <h2 class="font-serif text-display-sm text-navy-900 mb-4">Before vs. After Integration</h2>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <!-- Before -->
            <div class="p-8 lg:p-12 bg-red-50 border border-red-100">
              <h3 class="font-sans font-bold text-red-600 text-xs uppercase tracking-wider mb-8 flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
                Without Integration
              </h3>
              <div class="space-y-4">
                <div v-for="before in beforeItems" :key="before" class="flex items-start gap-3">
                  <div class="w-5 h-5 rounded-full bg-red-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg class="w-3 h-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  </div>
                  <p class="font-sans text-charcoal-600 text-sm leading-relaxed">{{ before }}</p>
                </div>
              </div>
            </div>

            <!-- After -->
            <div class="p-8 lg:p-12 bg-navy-900 border border-gold-500/20">
              <h3 class="font-sans font-bold text-gold-400 text-xs uppercase tracking-wider mb-8 flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                With ZMG Integration
              </h3>
              <div class="space-y-4">
                <div v-for="after in afterItems" :key="after" class="flex items-start gap-3">
                  <div class="w-5 h-5 bg-gold-500/20 border border-gold-500/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg class="w-3 h-3 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <p class="font-sans text-white/70 text-sm leading-relaxed">{{ after }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- API CAPABILITIES -->
    <section class="section-padding bg-navy-900">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="reveal-left">
            <span class="section-label">Technical Capability</span>
            <h2 class="font-serif text-display-md text-white mb-6">API-Ready Architecture</h2>
            <div class="gold-divider"></div>
            <p class="font-sans text-white/60 leading-relaxed mb-8">
              Every website we build is designed from the ground up with API connectivity in mind. RESTful endpoints, webhooks, and OAuth integrations — we speak the language of modern financial tech stacks.
            </p>
            <div class="space-y-4">
              <div v-for="cap in apiCapabilities" :key="cap" class="flex items-center gap-3">
                <svg class="w-4 h-4 text-gold-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="font-sans text-white/70 text-sm">{{ cap }}</span>
              </div>
            </div>
          </div>

          <!-- Mock code display -->
          <div class="reveal-right">
            <div class="bg-charcoal-900 border border-white/10 overflow-hidden">
              <div class="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
                <div class="w-3 h-3 rounded-full bg-red-400"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div class="w-3 h-3 rounded-full bg-green-400"></div>
                <span class="font-sans text-white/30 text-xs ml-2">api-integration.js</span>
              </div>
              <pre class="p-6 font-mono text-xs leading-relaxed overflow-x-auto"><code><span class="text-blue-400">// ZMG Integration Example</span>
<span class="text-green-400">// Auto-sync new leads to HubSpot</span>

<span class="text-purple-400">const</span> <span class="text-yellow-300">zmgIntegration</span> = {
  <span class="text-blue-300">onFormSubmit</span>: <span class="text-purple-400">async</span> (<span class="text-orange-300">formData</span>) =&gt; {
    <span class="text-gray-400">// 1. Validate & sanitize</span>
    <span class="text-purple-400">const</span> <span class="text-yellow-300">lead</span> = <span class="text-blue-300">await</span> validate(formData);

    <span class="text-gray-400">// 2. Push to HubSpot CRM</span>
    <span class="text-blue-300">await</span> hubspot.createContact({
      email: lead.email,
      service: lead.serviceType,
      source: <span class="text-green-300">'website'</span>
    });

    <span class="text-gray-400">// 3. Trigger Calendly invite</span>
    <span class="text-blue-300">await</span> calendly.schedule(lead);

    <span class="text-gray-400">// 4. Send to email sequence</span>
    <span class="text-blue-300">await</span> mailchimp.addToSequence(
      lead.email, <span class="text-green-300">'onboarding'</span>
    );
  }
};</code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-padding-sm bg-gold-500">
      <div class="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 class="font-serif text-display-sm text-navy-900 mb-6 reveal-up">
          Ready to Connect Your Digital Ecosystem?
        </h2>
        <RouterLink to="/contact" class="inline-flex items-center gap-2 px-8 py-4 bg-navy-900 text-gold-500 font-sans font-semibold text-sm tracking-wider uppercase border border-navy-900 hover:bg-navy-800 transition-colors reveal-up">
          Schedule an Integration Audit
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

const { initReveal } = useScrollReveal()
onMounted(() => setTimeout(initReveal, 50))

const integrationTools = [
  { name: 'HubSpot', abbr: 'HS', category: 'CRM', color: '#FF7A59' },
  { name: 'Salesforce', abbr: 'SF', category: 'CRM', color: '#00A1E0' },
  { name: 'Calendly', abbr: 'CL', category: 'Scheduling', color: '#006BFF' },
  { name: 'QuickBooks', abbr: 'QB', category: 'Accounting', color: '#2CA01C' },
  { name: 'Xero', abbr: 'XE', category: 'Accounting', color: '#13B5EA' },
  { name: 'Mailchimp', abbr: 'MC', category: 'Email', color: '#FFE01B' },
  { name: 'Stripe', abbr: 'ST', category: 'Payments', color: '#635BFF' },
  { name: 'Zapier', abbr: 'ZP', category: 'Automation', color: '#FF4A00' },
  { name: 'Slack', abbr: 'SL', category: 'Comms', color: '#4A154B' },
  { name: 'DocuSign', abbr: 'DS', category: 'Documents', color: '#FFCC00' },
  { name: 'Intercom', abbr: 'IC', category: 'Chat', color: '#1F8DED' },
  { name: 'Google', abbr: 'GG', category: 'Analytics', color: '#4285F4' },
]

const beforeItems = [
  'New website inquiry arrives → manually copy to spreadsheet',
  'Schedule call manually by sending emails back and forth',
  'Add client to email newsletter by hand',
  'Client onboarding requires 5+ manual steps',
  'Revenue attribution to website is impossible',
  'Client data lives in 6 different disconnected systems',
]

const afterItems = [
  'Contact form submits → instantly creates HubSpot contact with lead score',
  'Calendly link in confirmation email → client self-schedules in 60 seconds',
  'Webhook triggers → client added to personalized email sequence automatically',
  'Digital onboarding completes in under 10 minutes with e-signature',
  'GA4 + CRM tracking shows exact revenue from every marketing channel',
  'Single source of truth — website is the hub for all client data',
]

const apiCapabilities = [
  'RESTful API endpoints for all form submissions',
  'Webhook delivery to any third-party service',
  'OAuth 2.0 authentication for secure integrations',
  'Real-time data sync with CRM platforms',
  'Custom middleware for complex data transformations',
  'Zapier & Make.com native connectors',
  'Headless CMS API for content management',
  'Payment processing via Stripe/Braintree',
]
</script>

