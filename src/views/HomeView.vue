<template>
  <div class="home-page">

    <!-- ==================== HERO ==================== -->
    <section class="relative min-h-screen flex items-center overflow-hidden bg-navy-900" aria-label="Hero">
      <!-- Background patterns -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div class="absolute inset-0 opacity-[0.03]" style="background-image: linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px); background-size: 60px 60px;"></div>
        <div class="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-navy-800/60 to-transparent"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gold-500/5 blur-3xl"></div>
        <div class="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-gold-500/5 blur-3xl animate-float"></div>
        <div class="absolute left-[20%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-500/20 to-transparent"></div>
        <div class="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-gold-500/30 hidden lg:block"></div>
        <div class="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-gold-500/30 hidden lg:block"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 pt-18 lg:pt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Hero Text -->
        <div class="hero-content">
          <div class="reveal-up">
            <span class="section-label">Financial sector digital agency · South Africa · Client portals &amp; admin automation</span>
            <div class="gold-divider"></div>
          </div>

          <!--
            SEO H1: Primary focus client portals for accountants; firm website managed in the same programme.
            One H1 per page — never duplicated.
          -->
          <h1 class="font-serif text-display-lg text-white mb-2 leading-tight reveal-up" style="transition-delay: 100ms;">
            Client Portals<br/>
            <span class="text-gradient">Built &amp; Managed</span><br/>
            for Accountants.
          </h1>

          <p class="font-sans text-white/60 text-lg lg:text-xl leading-relaxed mb-6 max-w-lg reveal-up" style="transition-delay: 200ms;">
            We design, launch, and run <strong class="text-white/80">branded client portals</strong> on your domain—secure documents, intake, and handoffs to CRM—while we <strong class="text-white/80">keep your firm website managed</strong> in the same stack so prospects and clients meet one coherent experience.
          </p>

          <ul class="font-sans text-white/55 text-sm space-y-2.5 mb-10 max-w-lg reveal-up" style="transition-delay: 250ms;" aria-label="What you get">
            <li v-for="line in heroQuickWins" :key="line" class="flex items-start gap-2.5">
              <svg class="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span>{{ line }}</span>
            </li>
          </ul>

          <div class="flex flex-col sm:flex-row gap-4 reveal-up" style="transition-delay: 300ms;">
            <RouterLink to="/contact" class="btn-primary" aria-label="Book a strategy call with Zar Media Group">
              Book a strategy call
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </RouterLink>
            <RouterLink to="/what-we-do" class="btn-ghost" aria-label="See how we help accounting firms">
              See Our Approach
            </RouterLink>
          </div>

          <p class="font-sans text-white/35 text-xs sm:text-sm mt-6 max-w-lg reveal-up" style="transition-delay: 350ms;">
            Prefer the phone?
            <a href="tel:+27685070088" class="text-gold-500/90 hover:text-gold-400 underline-offset-2 hover:underline">+27&nbsp;68&nbsp;507&nbsp;0088</a>
            ·
            <RouterLink to="/contact" class="text-gold-500/90 hover:text-gold-400 underline-offset-2 hover:underline">Message the team</RouterLink>
          </p>

          <!-- Trust Badges -->
          <div class="mt-12 pt-12 border-t border-white/10 reveal-up" style="transition-delay: 400ms;">
            <p class="font-sans text-white/30 text-xs tracking-wider uppercase mb-4">Trusted by financial professionals across South Africa</p>
            <div class="flex items-center gap-6 flex-wrap">
              <div v-for="badge in trustBadges" :key="badge" class="flex items-center gap-2">
                <svg class="w-4 h-4 text-gold-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
                <span class="font-sans text-white/50 text-xs">{{ badge }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Hero Visual / Dashboard Mockup -->
        <div class="hidden lg:block relative reveal-right" style="transition-delay: 200ms;" aria-hidden="true">
          <div class="glass-card p-8 relative">
            <div class="absolute -top-3 -right-3 w-6 h-6 bg-gold-500"></div>
            <div class="absolute -bottom-3 -left-3 w-6 h-6 border-2 border-gold-500"></div>
            <div class="mb-6">
              <div class="flex items-center justify-between mb-4">
                <span class="font-sans text-white/60 text-xs uppercase tracking-wider">Practice Growth Dashboard</span>
                <span class="tag text-xs">Live</span>
              </div>
              <div class="grid grid-cols-3 gap-4 mb-6">
                <div v-for="metric in dashboardMetrics" :key="metric.label" class="bg-navy-900/50 p-3 border border-white/5">
                  <div class="font-serif text-gold-500 text-xl font-bold">{{ metric.value }}</div>
                  <div class="font-sans text-white/40 text-xs mt-1">{{ metric.label }}</div>
                </div>
              </div>
              <div class="flex items-end gap-2 h-20">
                <div v-for="(bar, i) in chartBars" :key="i"
                     class="flex-1 bg-gold-500/20 rounded-t-sm relative group cursor-pointer hover:bg-gold-500/40 transition-colors"
                     :style="{ height: bar + '%' }">
                  <div class="absolute inset-0 bg-gradient-to-t from-gold-500/30 to-transparent rounded-t-sm"></div>
                </div>
              </div>
            </div>
            <div class="space-y-3">
              <div v-for="outcome in outcomeCards" :key="outcome.label" class="flex items-center justify-between p-3 bg-navy-900/30 border border-white/5">
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 rounded-full" :class="outcome.color"></div>
                  <span class="font-sans text-white/70 text-sm">{{ outcome.label }}</span>
                </div>
                <span class="font-sans text-gold-500 text-sm font-semibold">{{ outcome.value }}</span>
              </div>
            </div>
          </div>
          <div class="absolute -bottom-6 -left-6 bg-gold-500 px-5 py-4 shadow-gold-lg">
            <div class="font-serif text-navy-900 text-2xl font-bold">98%</div>
            <div class="font-sans text-navy-900/70 text-xs font-semibold uppercase tracking-wide">Client Retention</div>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce" aria-hidden="true">
        <span class="font-sans text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <div class="w-px h-12 bg-gradient-to-b from-white/30 to-transparent"></div>
      </div>
    </section>

    <!-- ==================== EARLY CTA (homepage skimmers → contact converts) ==================== -->
    <section class="bg-navy-800/90 border-y border-white/10 py-10" aria-label="Book a consultation">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <p class="font-sans text-white/85 text-base lg:text-lg max-w-2xl leading-relaxed text-center lg:text-left">
          If you landed from search or ads, skip the scroll: tell us what you're trying to fix—<strong class="text-white">portals, intake, CRM handoffs,</strong> or a site that doesn't reflect your firm.
        </p>
        <RouterLink
          to="/contact"
          class="btn-primary shrink-0 self-center lg:self-auto whitespace-normal text-center px-8"
          aria-label="Contact Zar Media Group to discuss your accounting firm website"
        >
          Get in touch
        </RouterLink>
      </div>
    </section>

    <!-- ==================== STATS ==================== -->
    <section class="bg-navy-950 py-16 lg:py-24 border-y border-white/5" aria-label="Key statistics">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-white/10">
          <StatCounter
            v-for="stat in stats"
            :key="stat.label"
            :value="stat.value"
            :label="stat.label"
            :prefix="stat.prefix"
            :suffix="stat.suffix"
            class="reveal-up lg:px-8"
          />
        </div>
      </div>
    </section>

    <!-- ==================== SERVICES PREVIEW ==================== -->
    <section class="section-padding bg-cream" aria-labelledby="services-heading">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="max-w-2xl mb-16">
          <span class="section-label reveal-up">What We Offer — Serving Accountants Across South Africa</span>
          <h2 id="services-heading" class="font-serif text-display-md text-navy-900 mb-6 reveal-up" style="transition-delay: 100ms;">
            Specialised Services for<br/><em>Financial Professionals</em>
          </h2>
          <div class="gold-divider reveal-up" style="transition-delay: 150ms;"></div>
          <p class="font-sans text-charcoal-600 text-lg leading-relaxed reveal-up" style="transition-delay: 200ms;">
            Every service we offer is purpose-built for the unique regulatory, trust, and conversion requirements of <strong>accounting firms, tax services, financial advisors, and bookkeeping professionals</strong> — helping you reduce admin and win more clients.
            <RouterLink to="/services" class="text-navy-900 font-semibold hover:underline ml-1">View all services</RouterLink>.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          <div
            v-for="(service, i) in services"
            :key="service.title"
            class="reveal-up group cursor-pointer"
            :style="{ transitionDelay: (i * 100) + 'ms' }"
          >
            <RouterLink :to="service.link" class="block h-full" :aria-label="`${service.title} — ${service.description}`">
              <article class="relative h-full bg-white border border-navy-900/8 p-8 transition-all duration-500 hover:border-gold-500/50 hover:shadow-card-hover group-hover:-translate-y-2 overflow-hidden">
                <div class="absolute top-6 right-6 font-serif text-6xl font-bold text-navy-900/10 group-hover:text-gold-500/10 transition-colors" aria-hidden="true">
                  {{ String(i + 1).padStart(2, '0') }}
                </div>
                <div class="w-14 h-14 flex items-center justify-center border border-gold-500/20 bg-gold-500/5 mb-8 group-hover:bg-gold-500 group-hover:border-gold-500 transition-all duration-300" aria-hidden="true">
                  <svg class="w-6 h-6 text-gold-900 group-hover:text-navy-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="service.icon"></svg>
                </div>
                <h3 class="font-serif text-xl text-navy-900 mb-4 group-hover:text-navy-900 transition-colors">{{ service.title }}</h3>
                <p class="font-sans text-charcoal-500 text-sm leading-relaxed mb-6">{{ service.description }}</p>
                <div class="flex flex-wrap gap-2 mb-6">
                  <span v-for="tag in service.tags" :key="tag" class="font-sans text-xs text-gold-700 bg-gold-500/10 px-2.5 py-1 border border-gold-500/20">
                    {{ tag }}
                  </span>
                </div>
                <div class="btn-text text-xs" aria-hidden="true">
                  Learn More
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </div>
                <div class="absolute bottom-0 left-0 h-0.5 w-0 bg-gold-500 group-hover:w-full transition-all duration-500" aria-hidden="true"></div>
              </article>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== VALUE PROPOSITION ==================== -->
    <section class="section-padding bg-navy-900 relative overflow-hidden" aria-labelledby="outcomes-heading">
      <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div class="absolute inset-0 opacity-[0.02]" style="background-image: linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px); background-size: 80px 80px;"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <span class="section-label reveal-up">Our Approach</span>
            <h2 id="outcomes-heading" class="font-serif text-display-md text-white mb-6 reveal-up" style="transition-delay: 100ms;">
              Reducing Admin for<br/><em class="text-gold-400">Accounting Firms</em>
            </h2>
            <div class="gold-divider reveal-up" style="transition-delay: 150ms;"></div>
            <p class="font-sans text-white/60 text-lg leading-relaxed mb-10 reveal-up" style="transition-delay: 200ms;">
              Most agencies build websites. We build <strong class="text-white/80">digital business systems</strong> that automate client intake, sync with your accounting software, and comply with financial sector regulations — so you spend less time on admin and more time on billable work.
            </p>

            <div class="space-y-6 stagger-children">
              <div
                v-for="(point, i) in valuePoints"
                :key="point.title"
                class="flex items-start gap-5 reveal-up"
                :style="{ transitionDelay: (300 + i * 100) + 'ms' }"
              >
                <div class="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-gold-500/40 bg-gold-500/10" aria-hidden="true">
                  <svg class="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="point.icon"></svg>
                </div>
                <div>
                  <h3 class="font-sans font-semibold text-white text-sm tracking-wide mb-1">{{ point.title }}</h3>
                  <p class="font-sans text-white/50 text-sm leading-relaxed">{{ point.desc }}</p>
                </div>
              </div>
            </div>

            <div class="mt-10 flex flex-wrap gap-4 reveal-up" style="transition-delay: 700ms;">
              <RouterLink to="/contact" class="btn-primary" aria-label="Book a call about reducing admin at your accounting firm">
                Book a fit call
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </RouterLink>
              <RouterLink to="/what-we-do" class="btn-secondary" aria-label="Learn about our full approach to accounting firm websites">
                Our Full Approach
              </RouterLink>
            </div>
          </div>

          <!-- Process Steps -->
          <div class="space-y-4">
            <div
              v-for="(step, i) in processSteps"
              :key="step.title"
              class="group reveal-right"
              :style="{ transitionDelay: (i * 100) + 'ms' }"
            >
              <div class="flex items-start gap-6 p-6 border border-white/10 hover:border-gold-500/40 transition-all duration-300 hover:bg-white/5">
                <div class="flex-shrink-0">
                  <div class="w-10 h-10 bg-gold-500/10 border border-gold-500/30 flex items-center justify-center" aria-hidden="true">
                    <span class="font-serif text-gold-500 font-bold text-sm">{{ String(i + 1).padStart(2, '0') }}</span>
                  </div>
                </div>
                <div class="flex-1 min-w-0">
                  <h3 class="font-sans font-semibold text-white text-sm mb-1 group-hover:text-gold-400 transition-colors">{{ step.title }}</h3>
                  <p class="font-sans text-white/40 text-sm leading-relaxed">{{ step.desc }}</p>
                </div>
                <svg class="w-5 h-5 text-white/20 group-hover:text-gold-500 group-hover:translate-x-1 transition-all flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== TESTIMONIALS ==================== -->
    <section class="section-padding bg-cream" aria-labelledby="testimonials-heading">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <span class="section-label reveal-up">Client Results</span>
          <h2 id="testimonials-heading" class="font-serif text-display-md text-navy-900 mb-4 reveal-up" style="transition-delay: 100ms;">
            What Financial Leaders Say
          </h2>
          <div class="gold-divider-center reveal-up" style="transition-delay: 150ms;"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article
            v-for="(testimonial, i) in testimonials"
            :key="testimonial.author"
            class="reveal-up"
            :style="{ transitionDelay: (i * 100) + 'ms' }"
          >
            <div class="h-full bg-white border border-navy-900/8 p-8 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
              <div class="flex gap-1 mb-6" aria-label="5 out of 5 stars" role="img">
                <svg v-for="n in 5" :key="n" class="w-4 h-4 text-gold-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <blockquote>
                <p class="font-sans text-charcoal-600 text-sm leading-relaxed mb-8 italic">"{{ testimonial.quote }}"</p>
              </blockquote>
              <footer class="flex items-center gap-4 pt-6 border-t border-navy-900/8">
                <div class="w-12 h-12 rounded-full bg-navy-900 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <span class="font-serif text-gold-500 font-bold text-sm">{{ testimonial.initials }}</span>
                </div>
                <div>
                  <cite class="font-sans font-semibold text-navy-900 text-sm not-italic">{{ testimonial.author }}</cite>
                  <div class="font-sans text-charcoal-400 text-xs mt-0.5">{{ testimonial.role }}</div>
                </div>
              </footer>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ==================== SECTOR EXPERTISE ==================== -->
    <section class="section-padding-sm bg-navy-900 border-y border-white/5" aria-labelledby="sectors-heading">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div class="reveal-up">
            <span class="section-label">Industry Focus — Serving South Africa &amp; Beyond</span>
            <h2 id="sectors-heading" class="font-serif text-display-sm text-white mb-4">
              Built for Your Sector.<br/>Not Adapted for It.
            </h2>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div
              v-for="sector in sectors"
              :key="sector.name"
              class="reveal-up group p-4 sm:p-6 border border-white/10 hover:border-gold-500/50 transition-all duration-300 text-center"
              :style="{ transitionDelay: sector.delay }"
            >
              <div class="w-10 h-10 mx-auto mb-4 flex items-center justify-center border border-gold-500/30 bg-gold-500/10 group-hover:bg-gold-500 group-hover:border-gold-500 transition-all" aria-hidden="true">
                <svg class="w-5 h-5 text-gold-500 group-hover:text-navy-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="sector.icon"></svg>
              </div>
              <div class="font-sans text-white/70 text-xs font-semibold uppercase tracking-wide group-hover:text-white transition-colors">{{ sector.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== FAQ ==================== -->
    <section class="section-padding bg-cream" aria-labelledby="faq-heading">
      <div class="max-w-3xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-14 reveal-up">
          <span class="section-label">Common Questions</span>
          <h2 id="faq-heading" class="font-serif text-display-md text-navy-900 mb-4">
            Frequently Asked Questions
          </h2>
          <div class="gold-divider-center"></div>
        </div>

        <dl class="space-y-4">
          <div
            v-for="(faq, i) in faqs"
            :key="i"
            class="reveal-up border border-navy-900/10 bg-white overflow-hidden"
            :style="{ transitionDelay: (i * 60) + 'ms' }"
          >
            <dt>
              <button
                class="w-full flex items-center justify-between gap-4 p-6 text-left font-sans font-semibold text-navy-900 text-sm hover:text-gold-600 transition-colors"
                :aria-expanded="openFaq === i"
                :aria-controls="`faq-answer-${i}`"
                @click="openFaq = openFaq === i ? null : i"
              >
                <span>{{ faq.question }}</span>
                <svg
                  class="w-4 h-4 flex-shrink-0 text-navy-400 transition-transform duration-300"
                  :class="{ 'rotate-180': openFaq === i }"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
            </dt>
            <Transition name="accordion">
              <dd
                v-if="openFaq === i"
                :id="`faq-answer-${i}`"
                class="px-6 pb-6 font-sans text-charcoal-500 text-sm leading-relaxed"
              >
                {{ faq.answer }}
              </dd>
            </Transition>
          </div>
        </dl>
      </div>
    </section>

    <!-- ==================== CTA SECTION ==================== -->
    <section class="section-padding bg-navy-900 relative overflow-hidden" aria-labelledby="cta-heading">
      <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-gold-500/20 to-transparent"></div>
      </div>

      <div class="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <span class="section-label reveal-up">Ready to Reduce Admin?</span>
        <h2 id="cta-heading" class="font-serif text-display-md text-white mb-6 reveal-up" style="transition-delay: 100ms;">
          Get a Free Website Audit<br/><em class="text-gold-400">for Your Accounting Firm</em>
        </h2>
        <div class="gold-divider-center reveal-up" style="transition-delay: 150ms;"></div>
        <p class="font-sans text-white/60 text-lg leading-relaxed mb-10 reveal-up" style="transition-delay: 200ms;">
          Join 127+ financial professionals who've transformed their digital presence with Zar Media Group. We'll audit your current site and show you exactly how to reduce admin and attract more clients — free, no obligation.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center reveal-up" style="transition-delay: 300ms;">
          <RouterLink to="/contact" class="btn-primary" aria-label="Schedule a free consultation for your accounting firm website">
            Get a Free Audit
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
          </RouterLink>
          <RouterLink to="/resources" class="btn-ghost" aria-label="View case studies of accounting firms we've helped">
            View Case Studies
          </RouterLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'
import { useSeoMeta, SCHEMAS } from '@/composables/useSeoMeta'
import { getPageSeo } from '@/data/seo-pages'
import StatCounter from '@/components/ui/StatCounter.vue'

const { initReveal } = useScrollReveal()
const openFaq = ref(null)

onMounted(() => setTimeout(initReveal, 50))

// ── SEO ──────────────────────────────────────────────────────────────────────
const faqs = [
  {
    question: 'How does Zar Media Group help accountants reduce admin?',
    answer:
      'We build and manage compliant websites integrated with your CRM, accounting software, and client portals — automating repetitive tasks like appointment booking, document collection, and client onboarding. Our clients typically save 8–15 hours of admin per week.',
  },
  {
    question: 'What is Website as a Service (WaaS) for financial firms?',
    answer:
      'Instead of a one-time website build that decays over time, WaaS is a monthly subscription that gives you a fully managed, continuously optimised digital presence. We handle design, development, hosting, updates, compliance, SEO, and CRO — so you never have to worry about your website again.',
  },
  {
    question: 'What is the best client portal for small accounting firms?',
    answer:
      'The best client portal depends on your existing tech stack. We integrate with and build custom client portals that connect to Xero, QuickBooks, HubSpot, and DocuSign. Our portals allow clients to securely upload documents, sign agreements, book appointments, and track their work status — all from your branded website.',
  },
  {
    question: 'Do you build websites that comply with financial sector regulations?',
    answer:
      'Yes — compliance is the foundation of everything we build, not an afterthought. Every website we create for financial professionals is reviewed against relevant regulations including GDPR, WCAG 2.1 AA accessibility standards, and local South African financial sector requirements.',
  },
  {
    question: 'Do you serve accounting firms outside South Africa?',
    answer:
      'Yes. While we are headquartered in South Africa, we serve financial professionals globally, including in the US, UK, and Australia. Our compliance frameworks cover GDPR, CCPA, SEC/FINRA guidelines, and local South African regulations.',
  },
]

const homeSeo = getPageSeo('home')

useSeoMeta({
  title: homeSeo.title,
  description: homeSeo.description,
  keywords: homeSeo.keywords,
  canonical: homeSeo.canonical,
  schemas: [
    SCHEMAS.organization(),
    SCHEMAS.website(),
    SCHEMAS.localBusiness(),
    SCHEMAS.faqPage(faqs),
  ],
})

// ── Data ─────────────────────────────────────────────────────────────────────
const trustBadges = ['GDPR Compliant', 'WCAG 2.1 AA', 'Compliance-First', 'SA Financial Sector']

const heroQuickWins = [
  'Branded client portals with secure upload, checklists, and reminders on your domain',
  'Portal-led workflows to CRM, practice tools, and e-sign—your firm site stays in sync',
  'Ongoing management: portal uptime, compliance, speed, and CRO without an in-house dev team',
]

const dashboardMetrics = [
  { value: '+340%', label: 'Lead Growth' },
  { value: '98%', label: 'Uptime' },
  { value: '4.9★', label: 'Reviews' },
]

const chartBars = [35, 52, 68, 45, 80, 62, 90, 75, 88, 95, 72, 85]

const outcomeCards = [
  { label: 'Client Acquisition', value: '+127%', color: 'bg-green-500' },
  { label: 'Form Conversions', value: '+89%', color: 'bg-gold-500' },
  { label: 'Admin Hours Saved', value: '12/wk', color: 'bg-blue-400' },
]

const stats = [
  { value: 127, label: 'Financial Clients Served', prefix: '', suffix: '+' },
  { value: 340, label: 'Average Lead Increase', prefix: '', suffix: '%' },
  { value: 98, label: 'Client Retention Rate', prefix: '', suffix: '%' },
  { value: 8, label: 'Years of Excellence', prefix: '', suffix: '+' },
]

const services = [
  {
    title: 'Client Portals & CRM',
    description:
      'Client-facing accounting portals and CRM-connected intake: secure document exchange, compliance portal workflows, and integrations with HubSpot, Xero, and DocuSign.',
    link: '/services/accounting-portals-crm',
    tags: ['Accounting Portal', 'Client-Facing CRM', 'POPIA-aware'],
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>',
  },
  {
    title: 'Website as a Service',
    description:
      'A fully managed, continuously optimised accounting firm website. No one-time builds — a digital asset that grows your practice every month.',
    link: '/services/website-as-a-service',
    tags: ['Managed', 'Optimised', 'Compliant'],
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>',
  },
  {
    title: 'Workflow Integration',
    description:
      'Connect your website to your CRM, accounting software, and client portals. Zero friction — from first click to engaged client.',
    link: '/services/workflow-integration',
    tags: ['CRM Integration', 'Xero/QuickBooks', 'Automated'],
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>',
  },
  {
    title: 'Compliance & Trust',
    description:
      'Purpose-built for regulated industries. Every pixel complies with financial sector standards and builds the trust clients expect.',
    link: '/services/compliance-trust',
    tags: ['GDPR', 'WCAG 2.1 AA', 'SA Regulation'],
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>',
  },
  {
    title: 'Client Portal & Document Vault',
    description:
      'See how an accounting client portal handles directory, firm-wide documents, profiles, and a secure vault—demo tour for SA tax and bookkeeping firms.',
    link: '/services/client-portal',
    tags: ['Document Vault', 'POPIA-aware', 'Admin tour'],
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h12a2 2 0 012 2v8a2 2 0 01-2 2H5z"/>',
  },
]

const valuePoints = [
  {
    title: 'Financial Sector Exclusive',
    desc: 'We only build websites for accountants and financial professionals. Deep specialisation means better outcomes.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>',
  },
  {
    title: 'Compliance-First Architecture',
    desc: 'Every accounting firm website we build starts with your regulatory requirements — not design preferences.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>',
  },
  {
    title: 'Admin Reduction Focus',
    desc: 'We track admin hours saved, not vanity metrics. Success means your team spends more time on billable work.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>',
  },
]

const processSteps = [
  { title: 'Discovery & Strategy', desc: 'Deep-dive into your firm, clients, and competitive landscape to identify digital opportunities.' },
  { title: 'Compliance Review', desc: 'Audit South African and international regulatory requirements for your digital presence.' },
  { title: 'Design & Architecture', desc: 'Build a premium accounting firm website that converts prospects and inspires trust.' },
  { title: 'Integration & Launch', desc: 'Connect your website to your CRM, Xero/QuickBooks, and workflows, then launch.' },
  { title: 'Optimise & Grow', desc: 'Continuous monitoring, A/B testing, and admin automation improvements every month.' },
]

const testimonials = [
  {
    quote: 'Zar Media Group transformed our online presence completely. We saw a 340% increase in qualified leads within the first quarter. They understand the financial sector like no other agency in South Africa.',
    author: 'Michael Chen, CA(SA)',
    role: 'Managing Partner, Chen & Associates',
    initials: 'MC',
  },
  {
    quote: 'Finally an agency that speaks our language. They knew our compliance requirements before we even mentioned them. Our new site has become our best business development tool.',
    author: 'Sarah Johnson',
    role: 'CEO, Pinnacle Tax Advisory',
    initials: 'SJ',
  },
  {
    quote: 'The admin reduction alone paid for the service. Our client intake is now fully automated — from first enquiry to signed engagement letter, without any manual steps.',
    author: 'David Martinez',
    role: 'Partner, Martinez Financial Group',
    initials: 'DM',
  },
]

const sectors = [
  {
    name: 'Accounting',
    delay: '0ms',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>',
  },
  {
    name: 'Tax Services',
    delay: '100ms',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z"/>',
  },
  {
    name: 'Financial Advisory',
    delay: '200ms',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>',
  },
  {
    name: 'Bookkeeping',
    delay: '300ms',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>',
  },
]
</script>
