<template>
  <header class="lp-nav">
    <nav
      class="lp-nav-inner"
      aria-label="Landing page navigation"
    >
      <RouterLink to="/" class="lp-nav-logo shrink-0" aria-label="Zar Media Group home">
        <img
          src="/logo.png"
          alt=""
          class="h-7 sm:h-8 w-auto brightness-0 invert"
          width="160"
          height="32"
          fetchpriority="low"
        />
      </RouterLink>

      <div class="lp-nav-links hidden sm:flex items-center gap-5 lg:gap-7">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="lp-nav-link"
        >
          {{ link.label }}
        </RouterLink>
        <a
          href="tel:+27685070088"
          class="lp-nav-link inline-flex items-center gap-1.5"
          aria-label="Call Zar Media Group"
        >
          <svg class="w-3.5 h-3.5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
          </svg>
          <span class="hidden lg:inline">+27 68 507 0088</span>
          <span class="lg:hidden">Call</span>
        </a>
      </div>

      <a
        href="tel:+27685070088"
        class="lp-nav-link sm:hidden inline-flex items-center gap-1.5 shrink-0"
        aria-label="Call Zar Media Group"
      >
        <svg class="w-4 h-4 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
        </svg>
        Call
      </a>
    </nav>
  </header>
</template>

<script setup>
const navLinks = [
  { to: '/what-we-do', label: 'How It Works' },
  { to: '/resources/abc-inc-chartered-accountants-website-case-study', label: 'Case Study' },
]
</script>

<style scoped>
.lp-nav {
  @apply sticky top-0 z-50 border-b border-white/10 bg-navy-900/95 backdrop-blur-md;
}

.lp-nav-inner {
  @apply max-w-7xl mx-auto flex items-center justify-between gap-4;
  padding: 0.875rem clamp(1.25rem, 4vw, 2.5rem);
}

.lp-nav-link {
  @apply font-sans text-white/55 text-sm hover:text-white transition-colors;
}
</style>
