<template>
  <section
    v-if="guides.length"
    class="section-padding bg-cream border-t border-navy-900/8"
    aria-labelledby="related-guides-heading"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="max-w-2xl mb-10 reveal-up">
        <span class="section-label">Further reading</span>
        <h2 id="related-guides-heading" class="font-serif text-display-sm text-navy-900 mt-4 mb-4">
          Guides for accounting firms
        </h2>
        <p class="font-sans text-charcoal-600 text-sm leading-relaxed">
          In-depth articles on topics accounting and bookkeeping practices search for—linked to how we help firms in South Africa.
        </p>
      </div>
      <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 list-none p-0 m-0">
        <li v-for="guide in guides" :key="guide.slug" class="reveal-up">
          <RouterLink
            :to="`/resources/${guide.slug}`"
            class="block h-full p-6 bg-white border border-navy-900/8 hover:border-gold-500/40 hover:shadow-card transition-all duration-300"
          >
            <span class="font-sans text-gold-700 text-xs font-semibold uppercase tracking-wide">{{ guide.type }}</span>
            <h3 class="font-sans font-semibold text-navy-900 text-base mt-2 mb-2 leading-snug">{{ guide.title }}</h3>
            <p class="font-sans text-charcoal-500 text-sm leading-relaxed m-0">{{ guide.excerpt }}</p>
          </RouterLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { resources } from '@/data/resources'

const props = defineProps({
  slugs: {
    type: Array,
    default: () => [],
  },
})

const guides = computed(() =>
  props.slugs
    .map((slug) => resources.find((r) => r.slug === slug))
    .filter(Boolean),
)
</script>
