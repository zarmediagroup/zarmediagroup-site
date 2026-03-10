<template>
  <div class="legal-page">

    <!-- ══ HERO ══ -->
    <section class="relative min-h-[40vh] flex items-end pb-16 bg-navy-900 overflow-hidden pt-28 lg:pt-40" aria-label="Cookie Policy hero">
      <div class="absolute inset-0 pointer-events-none opacity-[0.025]" style="background-image: linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px); background-size: 60px 60px;" aria-hidden="true"></div>
      <div class="relative max-w-4xl mx-auto px-6 lg:px-8 w-full">
        <span class="section-label">Legal</span>
        <h1 class="font-serif text-display-md text-white mt-4 mb-4">Cookie Policy</h1>
        <p class="font-sans text-white/50 text-sm">
          Effective Date: <strong class="text-white/70">1 March 2026</strong> &nbsp;·&nbsp;
          Last Updated: <strong class="text-white/70">8 March 2026</strong>
        </p>
        <div class="gold-divider mt-6"></div>
      </div>
    </section>

    <!-- ══ CONTENT ══ -->
    <section class="bg-cream py-16 lg:py-24">
      <div class="max-w-4xl mx-auto px-6 lg:px-8">
        <div class="prose-legal">

          <div class="bg-white border border-navy-900/8 p-6 mb-10">
            <p class="font-sans text-charcoal-600 text-sm leading-relaxed">
              This Cookie Policy explains how <strong>ZARMEDIAGROUP (PTY) LTD</strong> (Reg No: 2026/166396/07),
              trading as <strong>Zar Media Group</strong>, uses cookies and similar tracking technologies on
              <a href="https://zarmediagroup.com" class="text-navy-900 font-semibold hover:underline">zarmediagroup.com</a>.
              It should be read alongside our <RouterLink to="/privacy-policy" class="text-navy-900 font-semibold hover:underline">Privacy Policy</RouterLink>.
            </p>
          </div>

          <!-- 1 -->
          <h2 class="font-serif text-navy-900 text-2xl mb-4 mt-10">1. What Are Cookies?</h2>
          <div class="gold-divider mb-6"></div>
          <p class="font-sans text-charcoal-600 leading-relaxed">
            Cookies are small text files placed on your device (computer, tablet, or smartphone) when you visit a
            website. They allow the website to recognise your device and remember certain information about your visit
            — such as your preferences or whether you have previously visited the site. Cookies cannot harm your device
            and do not contain personally identifiable information on their own.
          </p>

          <!-- 2 -->
          <h2 class="font-serif text-navy-900 text-2xl mb-4 mt-10">2. Cookies We Use</h2>
          <div class="gold-divider mb-6"></div>

          <h3 class="font-sans font-semibold text-navy-900 text-base mb-3">2.1 Essential / Functional Cookies</h3>
          <p class="font-sans text-charcoal-600 leading-relaxed mb-4">
            These cookies are necessary for the website to function correctly. They cannot be disabled.
          </p>

          <!-- Cookie table -->
          <div class="overflow-x-auto mb-8">
            <table class="w-full text-sm border-collapse">
              <thead>
                <tr class="bg-navy-900 text-white">
                  <th class="font-sans font-semibold text-xs tracking-wider text-left px-4 py-3">Cookie Name</th>
                  <th class="font-sans font-semibold text-xs tracking-wider text-left px-4 py-3">Purpose</th>
                  <th class="font-sans font-semibold text-xs tracking-wider text-left px-4 py-3">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-navy-900/8 bg-white">
                  <td class="font-sans text-navy-900 font-medium px-4 py-3 text-xs"><code>zmg_cookies</code></td>
                  <td class="font-sans text-charcoal-500 px-4 py-3 text-xs">Stores your cookie consent choice (accepted / declined)</td>
                  <td class="font-sans text-charcoal-500 px-4 py-3 text-xs">Persistent (localStorage)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 class="font-sans font-semibold text-navy-900 text-base mb-3">2.2 Analytics Cookies</h3>
          <p class="font-sans text-charcoal-600 leading-relaxed mb-4">
            We use <strong>Google Analytics 4 (GA4)</strong> to understand how visitors interact with our website.
            This data is aggregated and anonymised — it helps us improve our content and user experience. IP addresses
            are anonymised before storage.
          </p>

          <div class="overflow-x-auto mb-8">
            <table class="w-full text-sm border-collapse">
              <thead>
                <tr class="bg-navy-900 text-white">
                  <th class="font-sans font-semibold text-xs tracking-wider text-left px-4 py-3">Cookie Name</th>
                  <th class="font-sans font-semibold text-xs tracking-wider text-left px-4 py-3">Provider</th>
                  <th class="font-sans font-semibold text-xs tracking-wider text-left px-4 py-3">Purpose</th>
                  <th class="font-sans font-semibold text-xs tracking-wider text-left px-4 py-3">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-navy-900/8 bg-white">
                  <td class="font-sans text-navy-900 font-medium px-4 py-3 text-xs"><code>_ga</code></td>
                  <td class="font-sans text-charcoal-500 px-4 py-3 text-xs">Google</td>
                  <td class="font-sans text-charcoal-500 px-4 py-3 text-xs">Distinguishes unique users</td>
                  <td class="font-sans text-charcoal-500 px-4 py-3 text-xs">2 years</td>
                </tr>
                <tr class="border-b border-navy-900/8 bg-white/50">
                  <td class="font-sans text-navy-900 font-medium px-4 py-3 text-xs"><code>_ga_*</code></td>
                  <td class="font-sans text-charcoal-500 px-4 py-3 text-xs">Google</td>
                  <td class="font-sans text-charcoal-500 px-4 py-3 text-xs">Maintains session state for GA4</td>
                  <td class="font-sans text-charcoal-500 px-4 py-3 text-xs">2 years</td>
                </tr>
                <tr class="border-b border-navy-900/8 bg-white">
                  <td class="font-sans text-navy-900 font-medium px-4 py-3 text-xs"><code>_gid</code></td>
                  <td class="font-sans text-charcoal-500 px-4 py-3 text-xs">Google</td>
                  <td class="font-sans text-charcoal-500 px-4 py-3 text-xs">Distinguishes users within a session</td>
                  <td class="font-sans text-charcoal-500 px-4 py-3 text-xs">24 hours</td>
                </tr>
                <tr class="bg-white/50">
                  <td class="font-sans text-navy-900 font-medium px-4 py-3 text-xs"><code>_gat</code></td>
                  <td class="font-sans text-charcoal-500 px-4 py-3 text-xs">Google</td>
                  <td class="font-sans text-charcoal-500 px-4 py-3 text-xs">Throttles request rate to Google Analytics</td>
                  <td class="font-sans text-charcoal-500 px-4 py-3 text-xs">1 minute</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="font-sans text-charcoal-500 text-sm leading-relaxed mb-2">
            Google Analytics data is processed by Google LLC in the United States under Standard Contractual Clauses.
            For more information, see
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" class="text-navy-900 hover:underline">Google's Privacy Policy</a>.
          </p>

          <!-- 3 -->
          <h2 class="font-serif text-navy-900 text-2xl mb-4 mt-10">3. No Marketing or Social Cookies</h2>
          <div class="gold-divider mb-6"></div>
          <p class="font-sans text-charcoal-600 leading-relaxed">
            We do not currently use advertising, retargeting, or social media tracking cookies on this website.
            Social media links (LinkedIn, Facebook) open external platforms — those platforms may set their own
            cookies governed by their respective privacy policies.
          </p>

          <!-- 4 -->
          <h2 class="font-serif text-navy-900 text-2xl mb-4 mt-10">4. Managing &amp; Disabling Cookies</h2>
          <div class="gold-divider mb-6"></div>
          <p class="font-sans text-charcoal-600 leading-relaxed mb-4">
            You can control cookies in several ways:
          </p>
          <ul class="legal-list">
            <li>
              <strong>Cookie banner:</strong> Use the Accept or Decline buttons when you first visit this site.
              Your preference is saved and the banner will not reappear.
            </li>
            <li>
              <strong>Browser settings:</strong> Most browsers allow you to block or delete cookies.
              Note that blocking essential cookies may affect website functionality.
              <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" class="hover:underline">aboutcookies.org</a>
              provides browser-specific instructions.
            </li>
            <li>
              <strong>Google Analytics opt-out:</strong> Install the
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" class="hover:underline">Google Analytics Opt-out Browser Add-on</a>
              to prevent your data from being used by GA across all websites.
            </li>
          </ul>

          <div class="bg-white border border-navy-900/8 p-5 mt-2 mb-6">
            <p class="font-sans text-charcoal-600 text-sm leading-relaxed">
              <strong>Note:</strong> Google Analytics on this website tracks visitor behaviour regardless of the Accept/Decline
              choice on our cookie banner. The banner serves as a notice of this activity. If you wish to opt out of
              GA tracking specifically, please use the Google opt-out add-on linked above.
            </p>
          </div>

          <!-- 5 -->
          <h2 class="font-serif text-navy-900 text-2xl mb-4 mt-10">5. Your Rights</h2>
          <div class="gold-divider mb-6"></div>
          <p class="font-sans text-charcoal-600 leading-relaxed">
            Under POPIA, you have the right to object to the processing of your personal information for analytics
            purposes. To exercise this right, contact us at
            <a href="mailto:info@zarmediagroup.com" class="text-navy-900 font-semibold hover:underline">info@zarmediagroup.com</a>.
            You may also raise concerns with the
            <a href="https://inforegulator.org.za" target="_blank" rel="noopener noreferrer" class="hover:underline">Information Regulator of South Africa</a>.
          </p>

          <!-- 6 -->
          <h2 class="font-serif text-navy-900 text-2xl mb-4 mt-10">6. Updates to This Policy</h2>
          <div class="gold-divider mb-6"></div>
          <p class="font-sans text-charcoal-600 leading-relaxed">
            We may update this Cookie Policy to reflect changes in technology, legislation, or our practices.
            The "Last Updated" date at the top of this page will indicate when changes were made. We encourage
            you to review this policy periodically.
          </p>

          <!-- 7 -->
          <h2 class="font-serif text-navy-900 text-2xl mb-4 mt-10">7. Contact Us</h2>
          <div class="gold-divider mb-6"></div>
          <ul class="legal-list">
            <li><strong>Email:</strong> <a href="mailto:info@zarmediagroup.com">info@zarmediagroup.com</a></li>
            <li><strong>Phone:</strong> <a href="tel:+27685070088">+27 68 507 0088</a></li>
            <li><strong>Address:</strong> Cape Town, Western Cape, South Africa</li>
          </ul>

          <!-- Nav -->
          <div class="flex flex-wrap gap-4 mt-12 pt-8 border-t border-navy-900/10">
            <RouterLink to="/privacy-policy" class="btn-ghost text-xs py-2.5 px-5">Privacy Policy</RouterLink>
            <RouterLink to="/terms-of-service" class="btn-ghost text-xs py-2.5 px-5">Terms of Service</RouterLink>
            <RouterLink to="/contact" class="btn-primary text-xs py-2.5 px-5">Contact Us</RouterLink>
          </div>

        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { useSeoMeta } from '@/composables/useSeoMeta'

useSeoMeta({
  title: 'Cookie Policy | Zar Media Group',
  description: 'Read the Zar Media Group Cookie Policy. Learn what cookies we use, why we use them, and how to manage your cookie preferences.',
  keywords: 'Zar Media Group cookie policy, cookies, Google Analytics, POPIA',
  canonical: '/cookie-policy',
  schemas: [],
})
</script>

<style scoped>
.prose-legal p {
  @apply font-sans text-charcoal-600 leading-relaxed mb-4;
}
.legal-list {
  @apply list-none space-y-2 mb-6 pl-0;
}
.legal-list li {
  @apply font-sans text-charcoal-600 text-sm leading-relaxed pl-4 border-l-2 border-navy-900/10;
}
.legal-list a {
  @apply text-navy-900 hover:underline;
}
table code {
  @apply bg-navy-900/5 px-1.5 py-0.5 font-mono text-xs;
}
</style>



