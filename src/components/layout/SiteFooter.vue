<template>
  <footer class="bg-navy-950 border-t border-white/5">
    <!-- Main Footer -->
    <div class="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">

        <!-- Brand Column -->
        <div class="lg:col-span-2">
          <RouterLink to="/" class="flex items-center gap-3 group mb-6">
            <div class="w-10 h-10 relative flex-shrink-0">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
                <polygon points="20,2 38,11 38,29 20,38 2,29 2,11" fill="none" stroke="#C9A84C" stroke-width="1.5"/>
                <polygon points="20,8 32,14 32,26 20,32 8,26 8,14" fill="none" stroke="#C9A84C" stroke-width="0.75" opacity="0.5"/>
                <text x="20" y="24" text-anchor="middle" fill="#C9A84C" font-size="10" font-weight="700" font-family="Inter, sans-serif" letter-spacing="0.5">ZMG</text>
              </svg>
            </div>
            <div class="flex flex-col">
              <span class="font-serif text-white font-bold text-lg leading-none tracking-wide">ZARMEDIA</span>
              <span class="font-sans text-gold-500 text-xs font-semibold tracking-[0.25em] uppercase leading-none mt-0.5">GROUP</span>
            </div>
          </RouterLink>

          <p class="font-sans text-white/50 text-sm leading-relaxed mb-8 max-w-xs">
            We don't build websites. We engineer digital business outcomes for financial professionals.
          </p>

          <!-- Newsletter -->
          <div class="mb-8">
            <p class="font-sans text-white/70 text-xs font-semibold tracking-wider uppercase mb-3">Industry Insights</p>
            <form class="flex gap-0" @submit.prevent="subscribeNewsletter">
              <input
                v-model="email"
                type="email"
                placeholder="your@email.com"
                class="flex-1 px-4 py-3 bg-navy-900 border border-white/10 text-white text-sm placeholder-white/30 focus:outline-none focus:border-gold-500 transition-colors"
              />
              <button type="submit" class="px-5 py-3 bg-gold-500 text-navy-900 font-semibold text-xs hover:bg-gold-400 transition-colors">
                →
              </button>
            </form>
          </div>

          <!-- Social Links -->
          <div class="flex items-center gap-4">
            <a
              v-for="social in socials"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.name"
              class="w-9 h-9 flex items-center justify-center border border-white/10 text-white/40 hover:text-gold-500 hover:border-gold-500/50 transition-all duration-300"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" v-html="social.icon"></svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-sans text-white font-semibold text-xs tracking-[0.15em] uppercase mb-6">Company</h4>
          <ul class="space-y-3">
            <li v-for="link in companyLinks" :key="link.to">
              <RouterLink :to="link.to" class="font-sans text-white/50 text-sm hover:text-gold-400 transition-colors duration-200">
                {{ link.label }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Services Links -->
        <div>
          <h4 class="font-sans text-white font-semibold text-xs tracking-[0.15em] uppercase mb-6">Services</h4>
          <ul class="space-y-3">
            <li v-for="link in serviceLinks" :key="link.to">
              <RouterLink :to="link.to" class="font-sans text-white/50 text-sm hover:text-gold-400 transition-colors duration-200">
                {{ link.label }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Contact Column -->
        <div>
          <h4 class="font-sans text-white font-semibold text-xs tracking-[0.15em] uppercase mb-6">Contact</h4>
          <ul class="space-y-4">
            <li class="flex items-start gap-3">
              <svg class="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <a href="mailto:hello@zarmediagroup.com" class="font-sans text-white/50 text-sm hover:text-gold-400 transition-colors">
                hello@zarmediagroup.com
              </a>
            </li>
            <li class="flex items-start gap-3">
              <svg class="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <a href="tel:+1234567890" class="font-sans text-white/50 text-sm hover:text-gold-400 transition-colors">
                +1 (234) 567-890
              </a>
            </li>
            <li class="flex items-start gap-3">
              <svg class="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span class="font-sans text-white/50 text-sm">
                New York, NY<br/>United States
              </span>
            </li>
          </ul>

          <div class="mt-8">
            <RouterLink to="/contact" class="btn-secondary text-xs py-3 px-5">
              Start a Project
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Gold Divider -->
    <div class="h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"></div>

    <!-- Bottom Bar -->
    <div class="max-w-7xl mx-auto px-6 lg:px-8 py-6">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="font-sans text-white/30 text-xs">
          © {{ currentYear }} ZARMEDIAGROUP. All rights reserved.
        </p>
        <div class="flex items-center gap-6">
          <a href="#" class="font-sans text-white/30 text-xs hover:text-white/60 transition-colors">Privacy Policy</a>
          <a href="#" class="font-sans text-white/30 text-xs hover:text-white/60 transition-colors">Terms of Service</a>
          <a href="#" class="font-sans text-white/30 text-xs hover:text-white/60 transition-colors">Cookie Policy</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const currentYear = new Date().getFullYear()
const email = ref('')

const companyLinks = [
  { to: '/', label: 'Home' },
  { to: '/what-we-do', label: 'What We Do' },
  { to: '/about/team', label: 'Meet the Team' },
  { to: '/resources', label: 'Resources' },
  { to: '/contact', label: 'Contact Us' },
]

const serviceLinks = [
  { to: '/services/website-as-a-service', label: 'Website as a Service' },
  { to: '/services/workflow-integration', label: 'Workflow Integration' },
  { to: '/services/compliance-trust', label: 'Compliance & Trust' },
]

const socials = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/company/zarmediagroup',
    icon: '<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>',
  },
  {
    name: 'Twitter / X',
    url: 'https://twitter.com/zarmediagroup',
    icon: '<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>',
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/zarmediagroup',
    icon: '<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>',
  },
]

function subscribeNewsletter() {
  if (email.value) {
    // Integration point for Mailchimp/ConvertKit
    console.log('Newsletter signup:', email.value)
    email.value = ''
    alert('Thank you for subscribing to our industry insights!')
  }
}
</script>

