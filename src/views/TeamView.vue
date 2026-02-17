<template>
  <div class="team-page">
    <!-- PAGE HERO -->
    <section class="page-hero">
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute inset-0 opacity-[0.03]" style="background-image: linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px); background-size: 60px 60px;"></div>
      </div>
      <div class="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <span class="section-label reveal-up">Our Team</span>
        <h1 class="font-serif text-display-xl text-white mb-6 reveal-up" style="transition-delay: 100ms;">
          Meet the Experts<br/>Behind <em class="text-gold-400">ZARMEDIAGROUP</em>
        </h1>
        <div class="gold-divider-center reveal-up" style="transition-delay: 150ms;"></div>
        <p class="font-sans text-white/60 text-xl max-w-2xl mx-auto leading-relaxed reveal-up" style="transition-delay: 200ms;">
          A dedicated team of digital strategists, designers, and developers with deep roots in the financial services industry.
        </p>
      </div>
    </section>

    <!-- TEAM PHILOSOPHY -->
    <section class="section-padding-sm bg-cream border-b border-navy-900/10">
      <div class="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <blockquote class="font-serif text-display-sm text-navy-900 italic leading-relaxed reveal-up">
          "We believe the gap between a great financial professional and a thriving practice is often nothing more than a digital presence that tells their story with authority."
        </blockquote>
        <div class="gold-divider-center mt-8 reveal-up" style="transition-delay: 100ms;"></div>
        <p class="font-sans text-charcoal-500 text-sm tracking-wider uppercase reveal-up" style="transition-delay: 200ms;">
          The ZARMEDIAGROUP Philosophy
        </p>
      </div>
    </section>

    <!-- TEAM GRID -->
    <section class="section-padding bg-cream">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16 reveal-up">
          <span class="section-label">Leadership Team</span>
          <h2 class="font-serif text-display-md text-navy-900 mb-4">The Minds Behind the Work</h2>
          <div class="gold-divider-center"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(member, i) in teamMembers"
            :key="member.name"
            class="reveal-up group cursor-pointer"
            :style="{ transitionDelay: (i * 100) + 'ms' }"
            @click="openBio(member)"
          >
            <div class="bg-white border border-navy-900/8 overflow-hidden hover:shadow-card-hover transition-all duration-300">
              <!-- Photo area -->
              <div class="relative h-72 bg-navy-900 overflow-hidden">
                <!-- Gradient background with initials (placeholder for actual photo) -->
                <div class="absolute inset-0 flex items-center justify-center"
                     :style="{ background: `linear-gradient(135deg, ${member.colorFrom}, ${member.colorTo})` }">
                  <span class="font-serif text-white/20 text-8xl font-bold">{{ member.initials }}</span>
                </div>
                <!-- Hover overlay -->
                <div class="absolute inset-0 bg-navy-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div class="text-center">
                    <div class="w-12 h-12 mx-auto mb-3 border border-gold-500 flex items-center justify-center">
                      <svg class="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                      </svg>
                    </div>
                    <span class="font-sans text-white text-sm font-semibold">View Full Bio</span>
                  </div>
                </div>

                <!-- Expertise tags overlay -->
                <div class="absolute bottom-4 left-4 right-4 flex flex-wrap gap-1.5">
                  <span v-for="skill in member.skills.slice(0, 3)" :key="skill"
                        class="font-sans text-xs bg-navy-900/80 text-gold-400 px-2 py-0.5 backdrop-blur-sm">
                    {{ skill }}
                  </span>
                </div>
              </div>

              <!-- Info -->
              <div class="p-6">
                <h3 class="font-serif text-navy-900 text-xl mb-1 group-hover:text-gold-600 transition-colors">{{ member.name }}</h3>
                <p class="font-sans text-gold-500 text-xs font-semibold tracking-wider uppercase mb-3">{{ member.role }}</p>
                <p class="font-sans text-charcoal-500 text-sm leading-relaxed mb-4 line-clamp-2">{{ member.bio }}</p>

                <!-- Social links -->
                <div class="flex items-center gap-3 pt-4 border-t border-navy-900/8">
                  <a v-if="member.linkedin" :href="member.linkedin" target="_blank" rel="noopener"
                     class="text-charcoal-400 hover:text-gold-500 transition-colors" @click.stop>
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <span class="font-sans text-charcoal-300 text-xs">{{ member.years }}+ years experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- TEAM VALUES -->
    <section class="section-padding bg-navy-900">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16 reveal-up">
          <span class="section-label">Our Culture</span>
          <h2 class="font-serif text-display-md text-white mb-4">What Drives Us</h2>
          <div class="gold-divider-center"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(value, i) in teamValues"
            :key="value.title"
            class="reveal-up text-center"
            :style="{ transitionDelay: (i * 100) + 'ms' }"
          >
            <div class="w-16 h-16 mx-auto mb-6 border border-gold-500/30 flex items-center justify-center bg-gold-500/10">
              <svg class="w-7 h-7 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="value.icon"></svg>
            </div>
            <h3 class="font-sans font-bold text-white text-sm uppercase tracking-wider mb-3">{{ value.title }}</h3>
            <p class="font-sans text-white/50 text-sm leading-relaxed">{{ value.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- BIO MODAL -->
    <BaseModal v-model="showBioModal" :title="selectedMember?.name || ''" :label="selectedMember?.role" dark size="lg">
      <template v-if="selectedMember">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Avatar -->
          <div class="md:col-span-1">
            <div class="w-full aspect-square flex items-center justify-center"
                 :style="{ background: `linear-gradient(135deg, ${selectedMember.colorFrom}, ${selectedMember.colorTo})` }">
              <span class="font-serif text-white/20 text-7xl font-bold">{{ selectedMember.initials }}</span>
            </div>
            <div class="mt-6 space-y-2">
              <div v-for="skill in selectedMember.skills" :key="skill" class="tag text-xs inline-block mr-2 mb-2">
                {{ skill }}
              </div>
            </div>
          </div>
          <!-- Bio Content -->
          <div class="md:col-span-2">
            <p class="font-sans text-white/70 leading-relaxed mb-6">{{ selectedMember.fullBio }}</p>
            <div class="grid grid-cols-2 gap-4">
              <div class="p-4 bg-white/5 border border-white/10">
                <div class="font-serif text-gold-500 text-2xl font-bold">{{ selectedMember.years }}+</div>
                <div class="font-sans text-white/50 text-xs mt-1">Years Experience</div>
              </div>
              <div class="p-4 bg-white/5 border border-white/10">
                <div class="font-serif text-gold-500 text-2xl font-bold">{{ selectedMember.clients }}</div>
                <div class="font-sans text-white/50 text-xs mt-1">Clients Served</div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </BaseModal>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'
import BaseModal from '@/components/ui/BaseModal.vue'

const { initReveal } = useScrollReveal()
onMounted(() => setTimeout(initReveal, 50))

const showBioModal = ref(false)
const selectedMember = ref(null)

function openBio(member) {
  selectedMember.value = member
  showBioModal.value = true
}

const teamMembers = [
  {
    name: 'Alexander Zar',
    role: 'Founder & CEO',
    initials: 'AZ',
    colorFrom: '#0A1628',
    colorTo: '#1e3a6e',
    years: 12,
    clients: '50+',
    bio: 'Former fintech product lead turned agency founder. Alex brings deep financial sector expertise to every engagement.',
    fullBio: 'Alexander spent 8 years in fintech product development before founding ZARMEDIAGROUP. His unique combination of financial industry knowledge and digital expertise led him to identify the massive gap in premium digital services for financial professionals. Under his leadership, ZMG has grown to serve 127+ financial sector clients across North America.',
    skills: ['Strategy', 'FinTech', 'Product Design', 'Growth'],
    linkedin: 'https://linkedin.com/in/alexanderzar',
  },
  {
    name: 'Marina Reyes',
    role: 'Creative Director',
    initials: 'MR',
    colorFrom: '#1A2332',
    colorTo: '#2d4f87',
    years: 10,
    clients: '80+',
    bio: 'Award-winning designer specializing in financial sector brand identity and conversion-focused UI/UX.',
    fullBio: 'Marina leads all creative direction at ZARMEDIAGROUP with a focus on translating financial firm brand values into premium digital experiences. Her design philosophy centers on the intersection of aesthetics and conversion psychology — beautiful work that performs.',
    skills: ['UI/UX Design', 'Brand Identity', 'Figma', 'Motion Design'],
    linkedin: 'https://linkedin.com/in/marinareyes',
  },
  {
    name: 'James O\'Brien',
    role: 'Head of Technology',
    initials: 'JO',
    colorFrom: '#1e3a6e',
    colorTo: '#3d629e',
    years: 14,
    clients: '60+',
    bio: 'Full-stack architect with fintech background. James ensures every build is performant, secure, and integration-ready.',
    fullBio: 'With 14 years of software development experience across banking and fintech, James brings enterprise-grade technical standards to every client project. He oversees all technical architecture decisions, security reviews, and integration implementations.',
    skills: ['Vue.js', 'Node.js', 'AWS', 'API Architecture', 'Security'],
    linkedin: 'https://linkedin.com/in/jamesobrien',
  },
  {
    name: 'Priya Mehta',
    role: 'Head of Growth',
    initials: 'PM',
    colorFrom: '#28334e',
    colorTo: '#1A2332',
    years: 8,
    clients: '45+',
    bio: 'Data-driven growth specialist. Priya turns analytics into action, consistently delivering measurable ROI improvements.',
    fullBio: 'Priya leads all growth strategy, analytics, and SEO efforts at ZARMEDIAGROUP. Her approach combines deep keyword research specific to financial services verticals with conversion rate optimization grounded in behavioral data. She has driven over $15M in attributable client revenue growth.',
    skills: ['SEO', 'Analytics', 'CRO', 'PPC', 'Content Strategy'],
    linkedin: 'https://linkedin.com/in/priyamehta',
  },
  {
    name: 'Carlos Vélez',
    role: 'Compliance Director',
    initials: 'CV',
    colorFrom: '#0d1219',
    colorTo: '#0A1628',
    years: 15,
    clients: '100+',
    bio: 'Former SEC attorney and compliance officer. Carlos ensures every digital product meets regulatory standards.',
    fullBio: 'Carlos brings a rare combination of legal expertise and digital knowledge to every project. With 15 years of experience in SEC compliance and financial regulation, he has developed ZMG\'s proprietary compliance review framework that protects clients from regulatory risk while maximizing their digital potential.',
    skills: ['SEC/FINRA', 'GDPR', 'Risk Management', 'Legal Tech'],
    linkedin: 'https://linkedin.com/in/carlosvelez',
  },
  {
    name: 'Sophie Larsson',
    role: 'Client Success Director',
    initials: 'SL',
    colorFrom: '#122752',
    colorTo: '#1e3a6e',
    years: 7,
    clients: '127+',
    bio: 'Relationship-first approach to client partnerships. Sophie ensures every client achieves and exceeds their goals.',
    fullBio: 'Sophie manages the ongoing success of all ZMG client partnerships. Her background in financial advisory services gives her unique insight into the challenges financial professionals face, allowing her to proactively identify opportunities and ensure every client relationship delivers exceptional value.',
    skills: ['Client Relations', 'Project Management', 'Analytics', 'Communication'],
    linkedin: 'https://linkedin.com/in/sophielarsson',
  },
]

const teamValues = [
  {
    title: 'Expertise First',
    desc: 'We only work in the financial sector. Deep specialization means better outcomes for every client.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>',
  },
  {
    title: 'Outcomes Driven',
    desc: 'Every decision is measured against business outcomes. We track revenue, not just rankings.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>',
  },
  {
    title: 'Long-term Partnership',
    desc: 'We don\'t just build and leave. We\'re your ongoing digital partner, invested in your growth.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>',
  },
  {
    title: 'Radical Transparency',
    desc: 'No black boxes. You see exactly what we\'re doing, why, and what results it\'s delivering.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>',
  },
]
</script>

