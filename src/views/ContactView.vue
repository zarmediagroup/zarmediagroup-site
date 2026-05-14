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
    <section class="section-padding bg-cream" aria-label="Contact chat and information">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 items-start">

          <!-- ── Left: Contact chat assistant ── -->
          <div class="lg:col-span-3 reveal-up">
            <ContactAuditChat />
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
import { onMounted } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'
import { useSeoMeta, SCHEMAS } from '@/composables/useSeoMeta'
import BreadcrumbNav from '@/components/ui/BreadcrumbNav.vue'
import ContactAuditChat from '@/components/contact/ContactAuditChat.vue'

const { initReveal } = useScrollReveal()
onMounted(() => setTimeout(initReveal, 50))

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

const whyUs = [
  'Free, no-obligation website audit within 24 hours',
  'No long-term contracts — month-to-month flexibility',
  'Sector specialists — not generalist web designers',
  'SA-based team with deep financial sector knowledge',
  '127+ accounting firms and financial practices served',
  '98% client retention rate — our results speak',
]
</script>
