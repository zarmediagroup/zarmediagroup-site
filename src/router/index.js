import { createRouter, createWebHistory } from 'vue-router'
import { PAGE_SEO } from '@/data/seo-pages'

function meta(pageId) {
  const seo = PAGE_SEO[pageId]
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    canonical: seo.canonical,
    seoPageId: pageId,
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'),
    meta: meta('home'),
  },
  {
    path: '/what-we-do',
    name: 'WhatWeDo',
    component: () => import('@/views/WhatWeDoView.vue'),
    meta: meta('what-we-do'),
  },
  {
    path: '/about/team',
    name: 'Team',
    component: () => import('@/views/TeamView.vue'),
    meta: meta('team'),
  },
  {
    path: '/services',
    name: 'ServicesIndex',
    component: () => import('@/views/ServicesIndexView.vue'),
    meta: meta('services-index'),
  },
  {
    path: '/services/website-as-a-service',
    name: 'WebsiteService',
    component: () => import('@/views/WebsiteServiceView.vue'),
    meta: meta('website-as-a-service'),
  },
  {
    path: '/services/workflow-integration',
    name: 'WorkflowIntegration',
    component: () => import('@/views/WorkflowView.vue'),
    meta: meta('workflow-integration'),
  },
  {
    path: '/services/accounting-portals-crm',
    name: 'AccountingPortalsCrm',
    component: () => import('@/views/AccountingPortalsCrmView.vue'),
    meta: meta('accounting-portals-crm'),
  },
  {
    path: '/services/client-portal',
    name: 'ClientPortal',
    component: () => import('@/views/ClientPortalView.vue'),
    meta: meta('client-portal'),
  },
  {
    path: '/services/compliance-trust',
    name: 'ComplianceTrust',
    component: () => import('@/views/ComplianceView.vue'),
    meta: meta('compliance-trust'),
  },
  {
    path: '/resources',
    name: 'Resources',
    component: () => import('@/views/ResourcesView.vue'),
    meta: meta('resources'),
  },
  {
    path: '/resources/:slug',
    name: 'ResourceDetail',
    component: () => import('@/views/ResourceDetailView.vue'),
    meta: {
      title: 'Resource | Zar Media Group',
      description: 'Free guides and case studies for accountants and financial professionals from Zar Media Group.',
      canonical: '/resources',
    },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/ContactView.vue'),
    meta: meta('contact'),
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: () => import('@/views/PrivacyPolicyView.vue'),
    meta: {
      title: 'Privacy Policy | Zar Media Group',
      description: 'Read the Zar Media Group Privacy Policy. We are committed to protecting your personal information in compliance with POPIA and GDPR.',
      canonical: '/privacy-policy',
    },
  },
  {
    path: '/terms-of-service',
    name: 'TermsOfService',
    component: () => import('@/views/TermsOfServiceView.vue'),
    meta: {
      title: 'Terms of Service | Zar Media Group',
      description: 'Read the Zar Media Group Terms of Service governing use of our website and digital services for accountants and financial service providers.',
      canonical: '/terms-of-service',
    },
  },
  {
    path: '/cookie-policy',
    name: 'CookiePolicy',
    component: () => import('@/views/CookiePolicyView.vue'),
    meta: {
      title: 'Cookie Policy | Zar Media Group',
      description: 'Read the Zar Media Group Cookie Policy. Learn what cookies we use, why we use them, and how to manage your preferences.',
      canonical: '/cookie-policy',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFoundView.vue'),
    meta: {
      title: 'Page Not Found | Zar Media Group',
      description: 'The page you are looking for could not be found.',
      canonical: '/404',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth', top: 80 }
    }
    return { top: 0, behavior: 'smooth' }
  },
})

router.onError((err) => {
  const msg = err?.message || String(err)
  if (msg.includes('Failed to fetch dynamically imported module') || msg.includes('Importing a module script failed')) {
    window.location.reload()
    return
  }
  console.error(err)
})

// ── Global head management ──────────────────────────────────────────────────
// useSeoMeta in each view handles the full per-page update.
// The router guard here provides a fast fallback title update.
router.beforeEach((to, _from, next) => {
  if (to.meta?.title) {
    document.title = to.meta.title
  }
  next()
})

// ── Google Analytics 4 — SPA page-view tracking ────────────────────────────
// Fires a page_view event on every route change so GA4 sees each page correctly.
router.afterEach((to) => {
  if (typeof window.gtag === 'function' && window.__zmgAnalyticsConsentGranted === true) {
    window.gtag('event', 'page_view', {
      page_title: to.meta?.title || document.title,
      page_path: to.fullPath,
      page_location: window.location.href,
    })
  }
})

export default router
