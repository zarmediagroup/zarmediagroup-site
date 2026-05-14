<template>
  <div v-if="resource" class="resource-detail-page">

    <!-- ══ HERO ══ -->
    <section
      class="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20 lg:pt-40 lg:pb-24"
      aria-label="Resource article hero"
    >
      <!-- Background photo -->
      <img
        :src="resource.image"
        :alt="resource.imageAlt"
        class="absolute inset-0 w-full h-full object-cover"
        width="1440"
        height="600"
      />
      <!-- Dark tinted overlay -->
      <div
        class="absolute inset-0"
        :style="{ background: `linear-gradient(to bottom, ${resource.gradientFrom}e6 0%, ${resource.gradientTo}f0 100%)` }"
        aria-hidden="true"
      ></div>
      <!-- Subtle grid texture -->
      <div class="absolute inset-0 pointer-events-none opacity-[0.04]" aria-hidden="true"
           style="background-image: linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px); background-size: 60px 60px;">
      </div>
      <div class="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-white/20 hidden lg:block" aria-hidden="true"></div>
      <div class="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-white/20 hidden lg:block" aria-hidden="true"></div>

      <div class="relative max-w-4xl mx-auto px-6 lg:px-8 w-full">
        <BreadcrumbNav :crumbs="[
          { label: 'Resources', path: '/resources' },
          { label: resource.title, path: `/resources/${resource.slug}` }
        ]" />

        <div class="flex items-center gap-3 mb-5 reveal-up">
          <span class="font-sans text-xs font-semibold text-white/90 bg-black/30 px-2.5 py-1 backdrop-blur-sm uppercase tracking-wide">
            {{ resource.type }}
          </span>
          <span class="font-sans text-white/50 text-xs">{{ resource.readTime }} read</span>
        </div>

        <h1 class="font-serif text-display-md text-white mb-6 max-w-3xl reveal-up" style="transition-delay: 100ms;">
          {{ resource.title }}
        </h1>

        <div class="flex items-center gap-4 reveal-up" style="transition-delay: 200ms;">
          <img
            :src="resource.authorPhoto"
            :alt="resource.author"
            class="w-10 h-10 rounded-full object-cover object-top border border-white/30"
            width="40"
            height="40"
          />
          <div>
            <p class="font-sans text-white text-sm font-semibold">{{ resource.author }}</p>
            <p class="font-sans text-white/50 text-xs">{{ resource.authorRole }}</p>
          </div>
          <div class="h-4 w-px bg-white/20 mx-2" aria-hidden="true"></div>
          <time class="font-sans text-white/50 text-xs" :datetime="resource.dateISO">{{ resource.date }}</time>
        </div>

        <div class="gold-divider mt-8 reveal-up" style="transition-delay: 250ms;"></div>
      </div>
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce" aria-hidden="true">
        <span class="font-sans text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <div class="w-px h-12 bg-gradient-to-b from-white/30 to-transparent"></div>
      </div>
    </section>

    <!-- ══ ARTICLE BODY ══ -->
    <section class="section-padding bg-cream" aria-label="Article content">
      <div class="max-w-3xl mx-auto px-6 lg:px-8">
        <article class="prose-article">
          <template v-for="(block, i) in resource.content" :key="i">

            <!-- Intro paragraph -->
            <p v-if="block.type === 'intro'"
               class="font-sans text-charcoal-600 text-lg leading-relaxed mb-8 reveal-up font-medium border-l-2 border-navy-900 pl-5">
              {{ block.text }}
            </p>

            <!-- Section heading -->
            <h2 v-else-if="block.type === 'heading'"
                class="font-serif text-navy-900 text-2xl mt-12 mb-5 reveal-up">
              {{ block.text }}
            </h2>

            <!-- Body paragraph -->
            <p v-else-if="block.type === 'paragraph'"
               class="font-sans text-charcoal-500 text-base leading-relaxed mb-5 reveal-up">
              {{ block.text }}
            </p>

            <!-- External project link (case studies) -->
            <div
              v-else-if="block.type === 'external'"
              class="my-8 p-6 bg-white border border-navy-900/10 reveal-up"
            >
              <p v-if="block.text" class="font-sans text-charcoal-600 text-sm mb-4 leading-relaxed">{{ block.text }}</p>
              <a
                :href="block.href"
                class="btn-primary inline-flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ block.label }}
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
            </div>

            <!-- CTA block -->
            <div v-else-if="block.type === 'cta'"
                 class="mt-12 p-8 bg-navy-900 reveal-up">
              <p class="font-sans text-white/80 text-base mb-5 leading-relaxed">{{ block.text }}</p>
              <RouterLink to="/contact" class="btn-primary inline-flex items-center gap-2">
                Get in Touch
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </RouterLink>
            </div>

          </template>
        </article>

        <!-- ── Author card ── -->
        <div class="mt-16 pt-8 border-t border-navy-900/10 flex items-start gap-5 reveal-up">
          <img
            :src="resource.authorPhoto"
            :alt="resource.author"
            class="w-14 h-14 flex-shrink-0 rounded-full object-cover object-top border-2 border-navy-900/10"
            width="56"
            height="56"
          />
          <div>
            <p class="font-sans text-navy-900 font-semibold text-sm">Written by {{ resource.author }}</p>
            <p class="font-sans text-charcoal-400 text-xs mt-0.5">{{ resource.authorRole }}, Zar Media Group</p>
            <p class="font-sans text-charcoal-500 text-sm mt-2 leading-relaxed">
              Zar Media Group helps accountants and financial service providers reduce admin, attract clients online, and build compliant digital presences — serving financial professionals across South Africa.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ MORE RESOURCES ══ -->
    <section class="section-padding bg-navy-900" aria-labelledby="more-resources-heading">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-12 reveal-up">
          <span class="section-label">Keep Reading</span>
          <h2 id="more-resources-heading" class="font-serif text-display-sm text-white mt-2">
            More <em class="text-gold-400">Resources</em> for Financial Professionals
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article
            v-for="(r, i) in relatedResources"
            :key="r.slug"
            class="reveal-up group"
            :style="{ transitionDelay: (i * 80) + 'ms' }"
          >
            <RouterLink :to="`/resources/${r.slug}`" :aria-label="`Read: ${r.title}`"
                        class="block h-full bg-white/5 border border-white/10 hover:border-white/25 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <!-- Card thumbnail with real image -->
              <div class="relative w-full h-36 overflow-hidden">
                <img
                  :src="r.image"
                  :alt="r.imageAlt"
                  class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width="400"
                  height="144"
                />
                <div
                  class="absolute inset-0 opacity-75"
                  :style="{ background: `linear-gradient(135deg, ${r.gradientFrom}cc 0%, ${r.gradientTo}99 100%)` }"
                  aria-hidden="true"
                ></div>
                <span class="absolute top-3 left-3 font-sans text-xs font-semibold text-white/90 bg-black/40 px-2 py-0.5 uppercase tracking-wide">
                  {{ r.type }}
                </span>
              </div>
              <div class="p-5">
                <h3 class="font-serif text-white text-base mb-2 leading-snug group-hover:text-gold-300 transition-colors">
                  {{ r.title }}
                </h3>
                <div class="flex items-center gap-2 mt-3">
                  <img :src="r.authorPhoto" :alt="r.author" class="w-5 h-5 rounded-full object-cover object-top" loading="lazy" width="20" height="20" />
                  <p class="font-sans text-white/50 text-xs">{{ r.author }} · {{ r.readTime }} read</p>
                </div>
              </div>
            </RouterLink>
          </article>
        </div>

        <div class="text-center mt-10 reveal-up">
          <RouterLink to="/resources" class="btn-ghost">
            View All Resources
          </RouterLink>
        </div>
      </div>
    </section>

  </div>

  <!-- ══ 404 FALLBACK ══ -->
  <div v-else class="min-h-screen bg-navy-900 flex items-center justify-center text-center px-6">
    <div>
      <p class="font-sans text-white/40 text-sm uppercase tracking-widest mb-4">Resource Not Found</p>
      <h1 class="font-serif text-display-md text-white mb-6">This article doesn't exist (yet).</h1>
      <RouterLink to="/resources" class="btn-primary">Back to Resources</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { useScrollReveal } from '@/composables/useScrollReveal'
import { useSeoMeta, SCHEMAS } from '@/composables/useSeoMeta'
import BreadcrumbNav from '@/components/ui/BreadcrumbNav.vue'
import { resources, getResourceBySlug } from '@/data/resources.js'

const route = useRoute()
const { initReveal } = useScrollReveal()
onMounted(() => setTimeout(initReveal, 50))

// Re-run reveal when navigating between articles via "More Resources"
watch(() => route.params.slug, () => {
  nextTick(() => setTimeout(initReveal, 50))
})

const resource = computed(() => getResourceBySlug(route.params.slug))

const relatedResources = computed(() => {
  if (!resource.value) return []
  // Prefer same-category first, then fill with others
  const sameCategory = resources.filter(
    r => r.slug !== resource.value.slug && r.category === resource.value.category
  )
  const others = resources.filter(
    r => r.slug !== resource.value.slug && r.category !== resource.value.category
  )
  return [...sameCategory, ...others].slice(0, 3)
})

// ── Per-article SEO — all reactive computed refs so they update on slug change ──

const seoTitle = computed(() => {
  if (!resource.value) return 'Resource Not Found | Zar Media Group'
  if (resource.value.seoTitle) return resource.value.seoTitle
  return `${resource.value.title} | Zar Media Group`
})

const seoDescription = computed(() =>
  resource.value?.excerpt ??
  'Free guides and case studies for accountants and financial professionals from Zar Media Group.'
)

const seoKeywords = computed(() =>
  resource.value?.keywords ?? 'accounting resources, financial services South Africa, Zar Media Group'
)

const seoCanonical = computed(() => (
  resource.value ? `/resources/${route.params.slug}` : '/resources'
))

const seoRobots = computed(() => (
  resource.value ? 'index, follow' : 'noindex, follow'
))

const seoOgImage = computed(() =>
  resource.value?.image ?? '/og-image.jpg'
)

const seoSchemas = computed(() => {
  if (!resource.value) return []
  return [
    // 1. BreadcrumbList — helps Google understand page hierarchy
    SCHEMAS.breadcrumb([
      { name: 'Home', url: '/' },
      { name: 'Resources', url: '/resources' },
      { name: resource.value.title, url: `/resources/${resource.value.slug}` },
    ]),
    // 2. BlogPosting — the most important schema for article ranking
    SCHEMAS.article({
      headline: resource.value.title,
      description: resource.value.excerpt,
      image: resource.value.image,
      datePublished: resource.value.dateISO,
      dateModified: resource.value.dateISO,
      author: resource.value.author,
      authorRole: resource.value.authorRole,
      url: `/resources/${resource.value.slug}`,
      keywords: resource.value.keywords ?? '',
    }),
  ]
})

useSeoMeta({
  title: seoTitle,
  description: seoDescription,
  keywords: seoKeywords,
  canonical: seoCanonical,
  robots: seoRobots,
  ogImage: seoOgImage,
  ogType: 'article',
  schemas: seoSchemas,
})
</script>

