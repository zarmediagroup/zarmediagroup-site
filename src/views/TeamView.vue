<template>
  <div class="team-page">

    <!-- ══ HERO ══ -->
    <section class="relative min-h-screen flex items-center bg-navy-900 overflow-hidden pt-28 pb-20 lg:pt-40 lg:pb-24" aria-label="Team page hero">
      <HeroBackground
        src="/hero-team-collaboration.png"
        overlay-class="bg-gradient-to-r from-navy-900/93 via-navy-900/78 to-navy-900/45"
        image-opacity="opacity-45"
        image-position="object-right object-center"
      />
      <div class="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <BreadcrumbNav :crumbs="[{ label: 'What We Do', path: '/what-we-do' }, { label: 'Our Team', path: '/about/team' }]" />

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
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce" aria-hidden="true">
        <span class="font-sans text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <div class="w-px h-12 bg-gradient-to-b from-white/30 to-transparent"></div>
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

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          <article
            v-for="(member, i) in team"
            :key="member.name"
            class="reveal-up group cursor-pointer"
            :style="{ transitionDelay: (i * 80) + 'ms' }"
            @click="selectedMember = member"
          >
            <div class="relative overflow-hidden border border-white/10 group-hover:border-gold-500/50 transition-all duration-300 hover:shadow-card-hover">
              <!-- Photo -->
              <div class="relative w-full aspect-[4/5] overflow-hidden bg-navy-800">
                <img
                  :src="member.photo"
                  :alt="`${member.name} — ${member.title} at Zar Media Group`"
                  class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  width="400"
                  height="500"
                />
                <div class="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div class="absolute top-4 right-4">
                  <span class="font-sans text-xs text-white/90 bg-black/50 px-2 py-1 backdrop-blur-sm tracking-wider uppercase">{{ member.department }}</span>
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
          <div class="bg-navy-800 border border-white/10 max-w-lg w-full p-5 sm:p-8 relative max-h-[90vh] overflow-y-auto">
            <button
              class="absolute top-4 right-4 text-white/40 hover:text-white transition-colors p-2"
              @click="selectedMember = null"
              aria-label="Close bio modal"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
            <div class="flex items-center gap-4 sm:gap-6 mb-6">
              <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden flex-shrink-0 border border-white/10">
                <img
                  :src="selectedMember.photo"
                  :alt="selectedMember.name"
                  class="w-full h-full object-cover object-top"
                  width="80"
                  height="80"
                />
              </div>
              <div>
                <h3 class="font-serif text-white text-xl">{{ selectedMember.name }}</h3>
                <p class="font-sans text-gold-500 text-xs font-semibold uppercase tracking-wide mt-1">{{ selectedMember.title }}</p>
                <p class="font-sans text-white/30 text-xs mt-1 tracking-wider">{{ selectedMember.department }}</p>
              </div>
            </div>
            <p class="font-sans text-white/60 text-sm leading-relaxed mb-6">{{ selectedMember.fullBio }}</p>

            <!-- Contact -->
            <div class="flex flex-col sm:flex-row gap-3 mb-6">
              <a
                :href="`mailto:${selectedMember.email}`"
                class="flex items-center gap-2 px-4 py-2.5 border border-white/10 hover:border-white/30 transition-colors group"
                :aria-label="`Email ${selectedMember.name}`"
              >
                <svg class="w-3.5 h-3.5 text-white/40 group-hover:text-white transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span class="font-sans text-white/50 text-xs group-hover:text-white transition-colors">{{ selectedMember.email }}</span>
              </a>
              <a
                :href="selectedMember.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2 px-4 py-2.5 border border-white/10 hover:border-white/30 transition-colors group"
                :aria-label="`${selectedMember.name} on LinkedIn`"
              >
                <svg class="w-3.5 h-3.5 text-white/40 group-hover:text-white transition-colors flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span class="font-sans text-white/50 text-xs group-hover:text-white transition-colors">LinkedIn Profile</span>
              </a>
            </div>

            <div class="flex flex-wrap gap-2">
              <span v-for="skill in selectedMember.expertise" :key="skill" class="font-sans text-xs text-gold-500 bg-gold-500/10 border border-gold-500/20 px-2.5 py-1">{{ skill }}</span>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

    <!-- ══ CONTACT CTA ══ -->
    <section class="section-padding bg-navy-900" aria-labelledby="contact-cta-heading">
      <div class="max-w-3xl mx-auto px-6 lg:px-8 text-center reveal-up">
        <span class="section-label">Get In Touch</span>
        <h2 id="contact-cta-heading" class="font-serif text-display-sm text-white mb-4">
          Ready to Work with<br/><em class="text-gradient">Our Team?</em>
        </h2>
        <p class="font-sans text-white/50 mb-10 text-lg leading-relaxed">
          Whether you're an accounting firm looking to modernise your website, or a financial advisor who wants to automate client intake — we bring the experience to deliver results, not just websites.
        </p>
        <RouterLink to="/contact" class="btn-primary" aria-label="Contact Zar Media Group about your accounting firm website">
          Contact Us
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </RouterLink>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'
import { useSeoMeta, SCHEMAS } from '@/composables/useSeoMeta'
import { getPageSeo } from '@/data/seo-pages'

const pageSeo = getPageSeo('team')
import BreadcrumbNav from '@/components/ui/BreadcrumbNav.vue'
import HeroBackground from '@/components/ui/HeroBackground.vue'

const { initReveal } = useScrollReveal()
onMounted(() => setTimeout(initReveal, 50))

const selectedMember = ref(null)

useSeoMeta({
  title: pageSeo.title,
  description: pageSeo.description,
  keywords: pageSeo.keywords,
  canonical: pageSeo.canonical,
  ogImage: '/hero-team-collaboration.png',
  ogImageAlt: 'Zar Media Group team — accounting and financial web specialists in Cape Town, South Africa',
  schemas: [
    SCHEMAS.breadcrumb([
      { name: 'Home', url: '/' },
      { name: 'What We Do', url: '/what-we-do' },
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
    name: 'Zubayr Abdullatief',
    title: 'Founder & Chief Executive Officer',
    department: 'Leadership',
    initials: 'ZA',
    photo: '/zubayr-abdullatief-zar-media-group.png',
    bio: 'Founded Zar Media Group with a vision to build the leading digital agency for financial sector professionals in South Africa.',
    fullBio:
      'Zubayr Abdullatief is the Founder and Chief Executive Officer of Zar Media Group. He founded the agency with a clear vision: to give accountants, financial advisors, and financial service providers the digital presence they deserve — built on compliance, performance, and measurable growth. He sets the strategic direction of the business and works closely with clients to ensure every solution delivers real competitive advantage in the South African & Global financial sector.',
    email: 'zubayr@zarmediagroup.com',
    linkedin: 'https://www.linkedin.com/in/zubayrlatief',
    expertise: ['Strategic Leadership', 'Digital Strategy', 'Business Growth', 'Client Success', 'Financial Sector'],
  },
  {
    name: 'Zubair Moerat',
    title: 'Co-Founder & Chief Technical Officer',
    department: 'Engineering',
    initials: 'ZM',
    photo: '/zubayr-moerat-zar-media-group.png',
    bio: 'Co-founded Zar Media Group and leads all technical strategy and engineering, building the secure, scalable infrastructure that underpins every client solution.',
    fullBio:
      'Zubair Moerat is the Co-Founder and Chief Technical Officer of Zar Media Group. From the ground up, he architected the technical foundation that the agency is built on — designing systems that are secure, scalable, and compliant with the requirements of the financial sector. He leads all software architecture, infrastructure, and engineering decisions, ensuring that every platform we deliver is reliable, high-performing, and built to grow alongside our clients\' businesses.',
    email: 'zubair@zarmediagroup.com',
    linkedin: 'https://www.linkedin.com/in/zubair-moerat-843083380',
    expertise: ['Technical Strategy', 'Software Architecture', 'Security & Scalability', 'Infrastructure', 'Systems Integration'],
  },
  {
    name: 'Mubarak Haron',
    title: 'Marketing & SEO Lead',
    department: 'Marketing',
    initials: 'MH',
    photo: '/mubarak-haron-zar-media-group.png',
    bio: 'Leads Copywriting and SEO Strategy, ensuring every message is clear, compelling, and conversion-focused.',
    fullBio:
      'Mubarak Haron leads Copywriting and SEO Strategy, ensuring that every message is clear, compelling, and conversion-focused. With a strong emphasis on search engine optimisation and performance tracking, he oversees content strategy and digital visibility while ensuring that key performance indicators (KPIs) are consistently met and exceeded — turning organic traffic into qualified leads.',
    email: 'mubarak@zarmediagroup.com',
    linkedin: 'https://www.linkedin.com/in/mubarakharon55',
    expertise: ['SEO Strategy', 'Copywriting', 'Content Marketing', 'KPI Tracking', 'Digital Visibility'],
  },
]
</script>
