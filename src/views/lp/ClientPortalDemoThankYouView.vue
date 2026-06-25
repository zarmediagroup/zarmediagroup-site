<template>
  <div class="lp-page min-h-screen bg-navy-900 flex flex-col relative overflow-hidden">
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div class="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-900 to-navy-800"></div>
      <div
        class="absolute inset-0 opacity-[0.03]"
        style="background-image: linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px); background-size: 48px 48px;"
      ></div>
    </div>

    <LpNavbar />

    <main class="relative z-10 flex-1 flex items-center justify-center px-6 pb-12">
      <div class="w-full max-w-md text-center">
        <div class="inline-flex items-center justify-center w-16 h-16 mb-8 bg-gold-500 text-navy-900 shadow-lg shadow-gold-500/20">
          <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
          </svg>
        </div>
        <span class="section-label">Walkthrough booked</span>
        <h1 class="font-serif text-display-sm text-white mt-4 mb-4">We will be in touch shortly</h1>
        <p class="font-sans text-white/60 text-base leading-relaxed mb-3">
          Thanks—you are on the list. We reply within <strong class="text-white/90">one business day</strong> to confirm your 20-minute walkthrough slot.
        </p>
        <p class="font-sans text-white/40 text-sm">
          Check your inbox (and spam folder). You leave knowing whether this portal fits your firm—no obligation.
        </p>
        <div class="gold-divider-center mt-8 mb-6 max-w-[80px] mx-auto"></div>
        <p class="font-sans text-white/35 text-xs">
          Questions? Email
          <a href="mailto:info@zarmediagroup.com" class="text-white/55 hover:text-white underline">info@zarmediagroup.com</a>
        </p>
      </div>
    </main>

    <footer class="relative z-10 px-6 py-4 border-t border-white/10">
      <p class="font-sans text-white/30 text-[11px] text-center">
        © {{ currentYear }} ZARMEDIAGROUP (PTY) LTD
      </p>
    </footer>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useSeoMeta } from '@/composables/useSeoMeta'
import { trackLpDemoConversion } from '@/composables/useAnalytics'
import LpNavbar from '@/components/layout/LpNavbar.vue'

const router = useRouter()
const currentYear = new Date().getFullYear()
const LP_SESSION_KEY = 'zmg_lp_demo_submitted'

onMounted(() => {
  let submitted = false
  try {
    submitted = sessionStorage.getItem(LP_SESSION_KEY) === '1'
    if (submitted) sessionStorage.removeItem(LP_SESSION_KEY)
  } catch {
    /* ignore */
  }

  if (!submitted) {
    router.replace('/lp/client-portal-demo')
    return
  }

  trackLpDemoConversion()
})

useSeoMeta({
  title: 'Walkthrough Booked | Zar Media Group',
  description: 'Your client portal walkthrough request has been received. We reply within one business day.',
  canonical: '/lp/client-portal-demo/thank-you',
  robots: 'noindex, nofollow',
  schemas: [],
})
</script>
