import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'),
    meta: {
      title: 'Zar Media Group | Client Portals for Accountants — Managed Firm Website',
      description:
        'Zar Media Group builds and manages client portals for accountants—secure documents, intake, CRM sync—while keeping your firm website in the same programme. Serving South African financial professionals.',
      keywords:
        'client portal accountants, build client portal accounting firm, manage client portal, client portals for accounting, accounting portal, website for accountants, accounting firm website design, Zar Media Group, South Africa',
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
        'See how Zar Media Group helps accounting firms reduce admin with client portals, CRM-connected intake, and firm websites managed in one programme. Serving financial professionals across South Africa.',
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
        'Firm website managed alongside your client portal—continuously optimised for accountants and financial advisors. Website as a Service keeps your public site and portal stack aligned.',
      keywords:
        'Website as a Service financial sector, client portal accountants, managed firm website, accounting firm website design, website for financial advisors, WaaS South Africa',
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
        'CRM system accountants, client facing CRM, CRM integration for accountants, workflow automation bookkeepers, accounting software integration, client portal for accountants, Xero HubSpot integration',
      canonical: '/services/workflow-integration',
    },
  },
  {
    path: '/services/accounting-portals-crm',
    name: 'AccountingPortalsCrm',
    component: () => import('@/views/AccountingPortalsCrmView.vue'),
    meta: {
      title: 'Client Portals & CRM for Accountants | Zar Media Group',
      description:
        'Client-facing accounting portals and CRM-connected workflows for South African firms: client portals for accounting, compliance portal, accounting portal, client-facing CRM, and an optional client document portal with admin dashboard tour.',
      keywords:
        'CRM system accountants, client portals for accounting, compliance portal, client facing portal, accounting portal, client facing CRM, client facing accounting portal, accounting client portal, document vault',
      canonical: '/services/accounting-portals-crm',
    },
  },
  {
    path: '/services/client-portal',
    name: 'ClientPortal',
    component: () => import('@/views/ClientPortalView.vue'),
    meta: {
      title: 'Accounting Client Portal & Document Vault | Zar Media Group',
      description:
        'Tour Zar Media Group’s SA accounting client portal (demo screenshots — not real clients): client directory, all-documents queue, profiles & vault. Tax, payroll & POPIA-conscious workflows.',
      keywords:
        'accounting client portal South Africa, client document portal, document vault accounting firm, POPIA client portal, tax document portal accountants, Zar Media Group',
      canonical: '/services/client-portal',
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
        'compliance portal, compliant website financial services, compliant digital presence regulated industries, GDPR financial website, financial services web compliance, accounting website compliance, client facing accounting portal',
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
