<template>
  <div class="team-page">

    <!-- ══ HERO ══ -->
    <section class="relative min-h-[60vh] flex items-end pb-20 bg-navy-900 overflow-hidden pt-40" aria-label="Team page hero">
      <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div class="absolute inset-0 opacity-[0.025]" style="background-image: linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px); background-size: 60px 60px;"></div>
        <div class="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-gold-500/30"></div>
        <div class="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-gold-500/30"></div>
      </div>
      <div class="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <BreadcrumbNav :crumbs="[{ label: 'About', path: '/about' }, { label: 'Our Team', path: '/about/team' }]" />

        <span class="section-label reveal-up">About Us — Financial Sector Digital Specialists</span>
        <h1 class="font-serif text-display-lg text-white mt-4 mb-6 max-w-3xl reveal-up" style="transition-delay: 100ms;">
          The Specialists Behind<br/>
          <span class="text-gradient">Zar Media Group</span>
        </h1>
        <p class="font-sans text-white/60 text-lg max-w-2xl leading-relaxed reveal-up" style="transition-delay: 200ms;">
          We are strategists, designers, compliance experts, and engineers who work exclusively with accountants, financial advisors, bookkeepers, and financial service providers. Deep sector specialisation is why our clients stay for years.
        </p>
        <div class="gold-divider mt-8 reveal-up" style="transition-delay: 250ms;"></div>
      </div>
    </section>

    <!-- ══ PHILOSOPHY ══ -->
    <section class="section-padding bg-cream" aria-labelledby="philosophy-heading">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="reveal-up">
            <span class="section-label">Our Philosophy</span>
            <h2 id="philosophy-heading" class="font-serif text-display-md text-navy-900 mb-6">
              Sector Expertise is<br/><em>Not Optional</em>
            </h2>
            <div class="gold-divider mb-8"></div>
            <p class="font-sans text-charcoal-600 text-lg leading-relaxed mb-6">
              Building a <strong>website for accountants</strong> is fundamentally different from building a website for a restaurant or retailer. Compliance requirements, trust signals, client confidentiality, and the sales cycle of high-value professional services all require deep understanding.
            </p>
            <p class="font-sans text-charcoal-500 leading-relaxed mb-8">
              Our team has spent years embedded in the accounting and financial services industry — attending SAICA events, working alongside CFOs, and building tools that address the specific workflow challenges of South African financial professionals.
            </p>
            <RouterLink to="/what-we-do" class="btn-primary" aria-label="See our full process for accounting firm websites">
              See Our Approach
            </RouterLink>
          </div>

          <div class="grid grid-cols-2 gap-5 reveal-up" style="transition-delay: 150ms;">
            <div v-for="value in teamValues" :key="value.title" class="p-6 bg-white border border-navy-900/8 hover:border-gold-500/50 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
              <div class="w-10 h-10 flex items-center justify-center border border-gold-500/20 bg-gold-500/5 mb-4" aria-hidden="true">
                <svg class="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="value.icon"></svg>
              </div>
              <h3 class="font-sans font-semibold text-navy-900 text-sm mb-2">{{ value.title }}</h3>
              <p class="font-sans text-charcoal-400 text-xs leading-relaxed">{{ value.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ TEAM GRID ══ -->
    <section class="section-padding bg-navy-900" aria-labelledby="team-grid-heading">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-16 reveal-up">
          <span class="section-label">The Team</span>
          <h2 id="team-grid-heading" class="font-serif text-display-md text-white mb-4">
            Specialists in Financial<br/><em class="text-gold-400">Digital Transformation</em>
          </h2>
          <div class="gold-divider-center"></div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
          <article
            v-for="(member, i) in team"
            :key="member.name"
            class="reveal-up group cursor-pointer"
            :style="{ transitionDelay: (i * 80) + 'ms' }"
            @click="selectedMember = member"
          >
            <div class="relative overflow-hidden border border-white/10 group-hover:border-gold-500/50 transition-all duration-300 hover:shadow-card-hover">
              <!-- Avatar -->
              <div
                class="relative w-full aspect-[4/5] overflow-hidden"
                :style="{ background: `linear-gradient(135deg, ${member.gradientFrom}, ${member.gradientTo})` }"
              >
                <div class="absolute inset-0 flex items-center justify-center">
                  <span class="font-serif text-6xl font-bold text-white/20">{{ member.initials }}</span>
                </div>
                <div class="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div class="absolute top-4 right-4">
                  <span class="font-sans text-xs text-white/80 bg-black/40 px-2 py-1 backdrop-blur-sm">{{ member.department }}</span>
                </div>
              </div>

              <!-- Info -->
              <div class="p-5 bg-navy-900 group-hover:bg-navy-800 transition-colors">
                <h3 class="font-serif text-white text-base font-medium group-hover:text-gold-400 transition-colors">{{ member.name }}</h3>
                <p class="font-sans text-gold-500 text-xs font-semibold uppercase tracking-wide mt-1">{{ member.title }}</p>
                <p class="font-sans text-white/40 text-xs mt-2 leading-relaxed line-clamp-2">{{ member.bio }}</p>

                <!-- LinkedIn -->
                <div class="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                  <a
                    :href="member.linkedin"
                    class="font-sans text-xs text-white/30 hover:text-gold-400 transition-colors flex items-center gap-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    :aria-label="`Connect with ${member.name} on LinkedIn`"
                    @click.stop
                  >
                    <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    LinkedIn
                  </a>
                  <button
                    class="font-sans text-xs text-gold-500/60 hover:text-gold-400 transition-colors"
                    :aria-label="`View ${member.name}'s full bio`"
                  >
                    View Bio →
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ══ TEAM MEMBER MODAL ══ -->
    <Teleport to="body">
      <Transition name="fade">
        <div
          v-if="selectedMember"
          class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-900/80 backdrop-blur-sm"
          @click.self="selectedMember = null"
          role="dialog"
          :aria-label="`Bio for ${selectedMember?.name}`"
          aria-modal="true"
        >
          <div class="bg-navy-800 border border-white/10 max-w-lg w-full p-8 relative">
            <button
              class="absolute top-4 right-4 text-white/40 hover:text-white transition-colors p-2"
              @click="selectedMember = null"
              aria-label="Close bio modal"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
            <div class="flex items-center gap-6 mb-6">
              <div class="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                   :style="{ background: `linear-gradient(135deg, ${selectedMember.gradientFrom}, ${selectedMember.gradientTo})` }"
                   aria-hidden="true">
                <span class="font-serif text-2xl font-bold text-white/60">{{ selectedMember.initials }}</span>
              </div>
              <div>
                <h3 class="font-serif text-white text-xl">{{ selectedMember.name }}</h3>
                <p class="font-sans text-gold-500 text-xs font-semibold uppercase tracking-wide mt-1">{{ selectedMember.title }}</p>
              </div>
            </div>
            <p class="font-sans text-white/60 text-sm leading-relaxed mb-6">{{ selectedMember.fullBio }}</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="skill in selectedMember.expertise" :key="skill" class="font-sans text-xs text-gold-500 bg-gold-500/10 border border-gold-500/20 px-2.5 py-1">{{ skill }}</span>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

    <!-- ══ WORKING WITH US CTA ══ -->
    <section class="section-padding-sm bg-cream border-t border-navy-900/8" aria-labelledby="join-cta-heading">
      <div class="max-w-3xl mx-auto px-6 lg:px-8 text-center reveal-up">
        <span class="section-label">Work With Us</span>
        <h2 id="join-cta-heading" class="font-serif text-display-sm text-navy-900 mb-4">
          Partner with Specialists Who<br/><em>Understand Your Industry</em>
        </h2>
        <p class="font-sans text-charcoal-500 mb-8">
          Whether you're an accounting firm looking to modernise your website, or a financial advisor who wants to automate client intake — we bring the experience to deliver results, not just websites.
        </p>
        <RouterLink to="/contact" class="btn-primary" aria-label="Talk to our team about your accounting firm website">
          Talk to Our Team
        </RouterLink>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'
import { useSeoMeta, SCHEMAS } from '@/composables/useSeoMeta'
import BreadcrumbNav from '@/components/ui/BreadcrumbNav.vue'

const { initReveal } = useScrollReveal()
onMounted(() => setTimeout(initReveal, 50))

const selectedMember = ref(null)

useSeoMeta({
  title: 'Our Team | Zar Media Group — Financial Digital Experts',
  description:
    'Meet the strategists, designers, and compliance specialists behind Zar Media Group. A dedicated team serving accountants and financial service providers across South Africa.',
  keywords:
    'Zar Media Group team, financial digital agency South Africa, accounting website specialists, financial sector web design experts',
  canonical: '/about/team',
  schemas: [
    SCHEMAS.breadcrumb([
      { name: 'Home', url: '/' },
      { name: 'About', url: '/about' },
      { name: 'Our Team', url: '/about/team' },
    ]),
  ],
})

const teamValues = [
  {
    title: 'Financial Sector Focus',
    description: 'We exclusively serve accountants, bookkeepers, tax advisors, and financial professionals.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>',
  },
  {
    title: 'Compliance-First',
    description: 'Every project reviewed against SA financial regulations, GDPR, and POPIA from day one.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>',
  },
  {
    title: 'Outcome Obsessed',
    description: 'We measure success in leads generated and admin hours saved — not pages delivered.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>',
  },
  {
    title: 'South Africa Experts',
    description: 'Deep understanding of the SA financial services landscape, including FSCA and SAICA requirements.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"/>',
  },
]

const team = [
  {
    name: 'Zara Mitchell',
    title: 'Founder & Strategy Director',
    department: 'Leadership',
    initials: 'ZM',
    bio: 'Former CA(SA) turned digital strategist. 12 years helping South African financial firms grow through digital.',
    fullBio:
      'Zara spent eight years as a Chartered Accountant before founding Zar Media Group. Her firsthand experience of the administrative burden facing accounting firms in South Africa led her to build a digital agency that truly understands the financial sector. She leads strategy and client partnerships for all major accounts.',
    linkedin: 'https://linkedin.com/in/zaramitchell',
    expertise: ['Digital Strategy', 'Financial Sector SEO', 'CA(SA)', 'Client Acquisition'],
    gradientFrom: '#122752',
    gradientTo: '#1e3a6e',
  },
  {
    name: 'James Okafor',
    title: 'Head of Technology',
    department: 'Engineering',
    initials: 'JO',
    bio: 'Full-stack architect specialising in fintech integrations, client portals, and compliance-grade infrastructure.',
    fullBio:
      'James leads our engineering team with a focus on fintech API integrations and secure client portal development. He has built workflow automation systems for more than 40 accounting firms, connecting Xero, QuickBooks, HubSpot, and custom practice management systems into seamless digital experiences.',
    linkedin: 'https://linkedin.com/in/jamesokafor',
    expertise: ['Vue.js', 'API Integration', 'Client Portals', 'Xero & QuickBooks', 'Security'],
    gradientFrom: '#1a3a5c',
    gradientTo: '#0f2440',
  },
  {
    name: 'Priya Naidoo',
    title: 'Lead UX & Brand Designer',
    department: 'Design',
    initials: 'PN',
    bio: 'Creates premium digital experiences that communicate trust and authority for financial professionals.',
    fullBio:
      'Priya specialises in the intersection of design and conversion psychology for high-trust professional services. She has crafted visual identities for 50+ accounting and financial advisory firms, developing a signature style that communicates authority, trust, and expertise without being cold or intimidating to prospective clients.',
    linkedin: 'https://linkedin.com/in/priyanaidoo',
      expertise: ['Brand Identity', 'UX Design', 'Conversion Optimisation', 'Financial Sector Design'],
      gradientFrom: '#2c1a4e',
      gradientTo: '#1a2a50',
    },
    {
      name: 'Thomas van der Berg',
      title: 'Compliance & SEO Director',
      department: 'Compliance & Growth',
      initials: 'TV',
      bio: 'Ensures every accounting firm website we build meets SA financial regulations and ranks for the right keywords.',
      fullBio:
        'Thomas has a background in financial compliance and brings deep expertise in South African regulatory requirements including FSCA licensing pages, POPIA data handling, and GDPR compliance for financial firms serving international clients. He also leads our SEO programme, helping accounting firms rank for high-intent financial keywords.',
      linkedin: 'https://linkedin.com/in/thomasvanderberg',
      expertise: ['Financial Compliance', 'Technical SEO', 'GDPR', 'POPIA', 'FSCA Requirements'],
      gradientFrom: '#1e2a3e',
      gradientTo: '#0d1e35',
    },
]
</script>
