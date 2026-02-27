import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'),
    meta: {
      title: 'Zar Media Group | Managed Websites & Client Portals for Accountants',
      description:
        'Zar Media Group helps accountants and financial firms cut admin, automate workflows, and build compliant digital presences. Managed websites + client portals for South African financial professionals.',
      keywords:
        'website for accountants, managed website financial advisors, client portal for accountants, accounting firm website design, Zar Media Group, South Africa',
      canonical: '/',
    },
  },
  {
    path: '/what-we-do',
    name: 'WhatWeDo',
    component: () => import('@/views/WhatWeDoView.vue'),
    meta: {
      title: 'How We Work | Digital Workflow Optimisation for Accounting Firms',
      description:
        'See how Zar Media Group helps accounting firms reduce admin, improve client intake, and grow revenue through managed websites and workflow integration. Serving financial professionals across South Africa.',
      keywords:
        'digital workflow optimisation accountants, accounting firm website design, how to reduce admin accounting firms, financial sector digital transformation, South Africa',
      canonical: '/what-we-do',
    },
  },
  {
    path: '/about/team',
    name: 'Team',
    component: () => import('@/views/TeamView.vue'),
    meta: {
      title: 'Our Team | Zar Media Group — Financial Digital Experts',
      description:
        'Meet the strategists, designers, and compliance specialists behind Zar Media Group. A dedicated team serving accountants and financial service providers across South Africa.',
      keywords:
        'Zar Media Group team, financial digital agency South Africa, accounting website specialists',
      canonical: '/about/team',
    },
  },
  {
    path: '/services/website-as-a-service',
    name: 'WebsiteService',
    component: () => import('@/views/WebsiteServiceView.vue'),
    meta: {
      title: 'Website as a Service for Accountants | Zar Media Group',
      description:
        'A fully managed, continuously optimised website for accountants and financial advisors. No one-time builds — ongoing excellence with guaranteed ROI. Website as a Service for financial sector firms.',
      keywords:
        'Website as a Service financial sector, managed website for accountants, accounting firm website design, website for financial advisors, WaaS South Africa',
      canonical: '/services/website-as-a-service',
    },
  },
  {
    path: '/services/workflow-integration',
    name: 'WorkflowIntegration',
    component: () => import('@/views/WorkflowView.vue'),
    meta: {
      title: 'CRM & Workflow Integration for Accounting Firms | Zar Media Group',
      description:
        'Connect your accounting website to QuickBooks, Xero, HubSpot, and Calendly. CRM integration for accountants that eliminates manual data entry and automates client onboarding.',
      keywords:
        'CRM integration for accountants, workflow automation bookkeepers, accounting software integration, client portal for accountants, Xero HubSpot integration',
      canonical: '/services/workflow-integration',
    },
  },
  {
    path: '/services/compliance-trust',
    name: 'ComplianceTrust',
    component: () => import('@/views/ComplianceView.vue'),
    meta: {
      title: 'Compliant Website Design for Financial Services | Zar Media Group',
      description:
        'Purpose-built compliant digital presence for regulated financial industries. GDPR, WCAG 2.1 AA, and financial sector regulation-ready websites for accountants, RIAs, and tax professionals.',
      keywords:
        'compliant website financial services, compliant digital presence regulated industries, GDPR financial website, financial services web compliance, accounting website compliance',
      canonical: '/services/compliance-trust',
    },
  },
  {
    path: '/resources',
    name: 'Resources',
    component: () => import('@/views/ResourcesView.vue'),
    meta: {
      title: 'Resources for Accountants & Financial Professionals | Zar Media Group',
      description:
        'Free whitepapers, case studies, and guides on digital strategy for accountants and financial firms. Learn how to reduce admin, improve client portals, and grow your practice online.',
      keywords:
        'resources for accountants, accounting firm digital strategy, best client portal small accounting firms, how to reduce admin accounting firms, financial services SEO',
      canonical: '/resources',
    },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/ContactView.vue'),
    meta: {
      title: 'Contact Zar Media Group | Get a Free Website Audit',
      description:
        'Ready to reduce admin and grow your accounting firm? Contact Zar Media Group for a free website audit or strategy call. Serving accountants and financial professionals across South Africa.',
      keywords:
        'contact Zar Media Group, free website audit accountants, accounting firm website consultation, financial services digital agency South Africa',
      canonical: '/contact',
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
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      page_title: to.meta?.title || document.title,
      page_path: to.fullPath,
      page_location: window.location.href,
    })
  }
})

export default router
