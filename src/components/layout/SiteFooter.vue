<template>
  <footer class="bg-navy-950 border-t border-white/5">
    <!-- Main Footer -->
    <div class="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">

        <!-- Brand Column -->
        <div class="lg:col-span-2">
          <RouterLink to="/" class="inline-block mb-6">
            <img
              src="/logo.png"
              alt="Zar Media Group logo"
              class="h-10 w-auto object-contain brightness-0 invert"
              width="160"
              height="40"
              loading="lazy"
            />
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
                class="flex-1 px-4 py-3 bg-navy-900 border border-white/10 text-white text-sm placeholder-white/30 focus:outline-none focus:border-white transition-colors"
              />
              <button type="submit" class="px-5 py-3 bg-white text-navy-900 font-semibold text-xs hover:bg-navy-200 transition-colors">
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
              class="w-9 h-9 flex items-center justify-center border border-white/10 text-white/40 hover:text-white hover:border-white/40 transition-all duration-300"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" v-html="social.icon"></svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <p class="font-sans text-white font-semibold text-xs tracking-[0.15em] uppercase mb-6" role="heading" aria-level="3">Company</p>
          <ul class="space-y-3">
            <li v-for="link in companyLinks" :key="link.to">
              <RouterLink :to="link.to" class="font-sans text-white/50 text-sm hover:text-white transition-colors duration-200">
                {{ link.label }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Services Links -->
        <div>
          <p class="font-sans text-white font-semibold text-xs tracking-[0.15em] uppercase mb-6" role="heading" aria-level="3">Services</p>
          <ul class="space-y-3">
            <li v-for="link in serviceLinks" :key="link.to">
              <RouterLink :to="link.to" class="font-sans text-white/50 text-sm hover:text-white transition-colors duration-200">
                {{ link.label }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Contact Column -->
        <div>
          <p class="font-sans text-white font-semibold text-xs tracking-[0.15em] uppercase mb-6" role="heading" aria-level="3">Contact</p>
          <ul class="space-y-4">
            <li class="flex items-start gap-3">
              <svg class="w-4 h-4 text-white/60 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <a href="mailto:info@zarmediagroup.com" class="font-sans text-white/50 text-sm hover:text-white transition-colors">
                info@zarmediagroup.com
              </a>
            </li>
            <li class="flex items-start gap-3">
              <svg class="w-4 h-4 text-white/60 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <a href="tel:+27685070088" class="font-sans text-white/50 text-sm hover:text-white transition-colors">
                +27 68 507 0088
              </a>
            </li>
            <li class="flex items-start gap-3">
              <svg class="w-4 h-4 text-white/60 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span class="font-sans text-white/50 text-sm">
                Cape Town, Western Cape<br/>South Africa
              </span>
            </li>
          </ul>

          <div class="mt-8">
            <RouterLink to="/contact" class="btn-ghost text-xs py-3 px-5">
              Start a Project
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Divider -->
    <div class="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

    <!-- Bottom Bar -->
    <div class="max-w-7xl mx-auto px-6 lg:px-8 py-6">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p class="font-sans text-white/60 text-xs">
            © {{ currentYear }} ZARMEDIAGROUP (PTY) LTD. All rights reserved.
          </p>
          <p class="font-sans text-white/30 text-xs mt-1">
            Reg No: 2026/166396/07 · Cape Town, South Africa
          </p>
        </div>
        <div class="flex items-center gap-6">
          <a href="#" class="font-sans text-white/60 text-xs hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" class="font-sans text-white/60 text-xs hover:text-white transition-colors">Terms of Service</a>
          <a href="#" class="font-sans text-white/60 text-xs hover:text-white transition-colors">Cookie Policy</a>
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
    url: 'https://www.linkedin.com/company/zarmediagroup/',
    icon: '<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/Zarmediagroup/',
    icon: '<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>',
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

