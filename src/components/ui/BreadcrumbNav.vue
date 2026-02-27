<template>
  <nav
    aria-label="Breadcrumb"
    class="flex items-center gap-2 font-sans text-xs text-white/40 mb-6"
  >
    <RouterLink
      to="/"
      class="hover:text-gold-400 transition-colors"
      aria-label="Home"
    >
      Home
    </RouterLink>

    <template v-for="(crumb, i) in crumbs" :key="crumb.path">
      <svg
        class="w-3 h-3 text-white/20 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
      </svg>

      <RouterLink
        v-if="i < crumbs.length - 1"
        :to="crumb.path"
        class="hover:text-gold-400 transition-colors"
      >
        {{ crumb.label }}
      </RouterLink>

      <!-- Current page: no link, aria-current -->
      <span
        v-else
        class="text-white/70"
        aria-current="page"
      >
        {{ crumb.label }}
      </span>
    </template>
  </nav>
</template>

<script setup>
/**
 * BreadcrumbNav
 *
 * Usage:
 *   <BreadcrumbNav :crumbs="[
 *     { label: 'Services', path: '/services' },
 *     { label: 'Website as a Service', path: '/services/website-as-a-service' }
 *   ]" />
 *
 * The BreadcrumbList JSON-LD schema is injected via useSeoMeta in the parent page.
 */
defineProps({
  crumbs: {
    type: Array,
    required: true,
    // [{ label: String, path: String }]
  },
})
</script>


