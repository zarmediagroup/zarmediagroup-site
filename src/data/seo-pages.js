/**
 * Single source of truth for page-level SEO (titles, descriptions, internal links).
 * Titles front-load primary queries; descriptions stay within ~155 characters.
 */
export const PAGE_SEO = {
  home: {
    title: 'Client Portal for Accountants South Africa | Zar Media Group',
    description:
      'Build & manage client portals and accounting firm websites for SA practices—secure documents, CRM intake, POPIA-aware. Book a strategy call with Zar Media Group.',
    keywords:
      'client portal accountants South Africa, accounting client portal, website for accountants, accounting firm website design, CRM integration accountants, client portals for accounting',
    canonical: '/',
    relatedGuides: [
      'best-client-portal-small-accounting-firms',
      'accounting-firm-website-design-guide',
      'how-to-reduce-admin-accounting-firm',
    ],
  },
  'services-index': {
    title: 'Services for Accountants & Financial Firms | Zar Media Group',
    description:
      'Client portals, Website as a Service, CRM & workflow integration, and compliance-first websites for accounting, tax, and bookkeeping firms in South Africa.',
    keywords:
      'services for accountants South Africa, client portal accounting firm, accounting firm website, CRM accountants, compliant website financial services',
    canonical: '/services',
    relatedGuides: [
      'accounting-firm-website-design-guide',
      'best-client-portal-small-accounting-firms',
      'seo-for-accounting-firms-south-africa',
    ],
  },
  'what-we-do': {
    title: 'How We Build Client Portals for Accounting Firms | ZMG',
    description:
      'Our process for accounting firms: discovery, compliance review, portal-led build, CRM integration, and ongoing optimisation—reduce admin and grow enquiries in SA.',
    keywords:
      'how to reduce admin accounting firms, digital workflow accountants, accounting firm digital transformation South Africa',
    canonical: '/what-we-do',
    relatedGuides: ['how-to-reduce-admin-accounting-firm', 'accounting-firm-website-design-guide'],
  },
  team: {
    title: 'Team — Accounting & Financial Web Specialists | ZMG',
    description:
      'Meet the Zar Media Group team: strategists and developers focused on client portals, firm websites, and compliance for accountants across South Africa.',
    keywords: 'Zar Media Group team, financial digital agency Cape Town, accounting website specialists',
    canonical: '/about/team',
    relatedGuides: [],
  },
  'accounting-portals-crm': {
    title: 'Client Portal for Accountants & CRM | South Africa',
    description:
      'Client-facing accounting portals & CRM-connected intake for SA firms—secure documents, compliance workflows, HubSpot, Xero & DocuSign. Managed with your firm website.',
    keywords:
      'client portal for accountants, client portals for accounting, accounting portal, client facing CRM, CRM system accountants South Africa',
    canonical: '/services/accounting-portals-crm',
    relatedGuides: [
      'best-client-portal-small-accounting-firms',
      'how-to-reduce-admin-accounting-firm',
      'popia-compliance-accounting-websites',
    ],
  },
  'website-as-a-service': {
    title: 'Accounting Firm Website Design & Management | ZMG',
    description:
      'Website as a Service for accountants: managed firm sites with SEO, POPIA-aware forms, and portal alignment—hosted, updated & optimised monthly in South Africa.',
    keywords:
      'accounting firm website design, website for accountants South Africa, Website as a Service accountants, managed accounting website',
    canonical: '/services/website-as-a-service',
    relatedGuides: [
      'accounting-firm-website-design-guide',
      'seo-for-accounting-firms-south-africa',
      'abc-inc-chartered-accountants-website-case-study',
    ],
  },
  'workflow-integration': {
    title: 'CRM Integration for Accountants | Xero & HubSpot | ZMG',
    description:
      'Connect your accounting website to Xero, QuickBooks, HubSpot & Calendly—automate client onboarding and cut manual data entry for SA accounting & bookkeeping firms.',
    keywords:
      'CRM integration for accountants, workflow automation bookkeepers, Xero HubSpot integration, client portal for accountants',
    canonical: '/services/workflow-integration',
    relatedGuides: ['how-to-reduce-admin-accounting-firm', 'best-client-portal-small-accounting-firms'],
  },
  'client-portal': {
    title: 'Accounting Client Portal & Document Vault | South Africa',
    description:
      'See how SA accounting firms collect tax documents, track SARS deadlines, and run firm-wide review—on their own domain. Product tour with demo screenshots.',
    keywords:
      'accounting client portal South Africa, client document portal, document vault accounting firm, POPIA client portal, tax document portal accountants',
    canonical: '/services/client-portal',
    relatedGuides: [
      'best-client-portal-small-accounting-firms',
      'popia-compliance-accounting-websites',
      'how-to-reduce-admin-accounting-firm',
    ],
  },
  'compliance-trust': {
    title: 'POPIA Compliant Website for Accountants | Zar Media Group',
    description:
      'Compliant websites for financial firms: POPIA, GDPR, WCAG 2.1 AA & FSCA-aware architecture for accountants, tax practitioners & advisors in South Africa.',
    keywords:
      'POPIA compliant accounting website, compliant website financial services, accounting website compliance South Africa, WCAG financial website',
    canonical: '/services/compliance-trust',
    relatedGuides: ['popia-compliance-accounting-websites', 'fsca-website-requirements'],
  },
  resources: {
    title: 'Guides for Accountants: Portals, Websites & SEO | ZMG',
    description:
      'Free guides and case studies for SA accounting firms—client portals, firm website design, admin reduction, POPIA compliance, and SEO for accountants.',
    keywords:
      'resources for accountants, accounting firm digital strategy, client portal guide, accounting firm SEO South Africa',
    canonical: '/resources',
    relatedGuides: [],
  },
  contact: {
    title: 'Free Website Audit for Accounting Firms | Contact ZMG',
    description:
      'Book a free website audit or strategy call for your accounting or bookkeeping firm. Zar Media Group serves practices across South Africa and internationally.',
    keywords:
      'free website audit accountants, contact Zar Media Group, accounting firm website consultation Cape Town',
    canonical: '/contact',
    relatedGuides: ['accounting-firm-website-design-guide'],
  },
}

/** All commercial service pages for hub / ItemList schema */
export const SERVICE_OFFERINGS = [
  {
    id: 'accounting-portals-crm',
    name: 'Client Portals & CRM for Accountants',
    path: '/services/accounting-portals-crm',
    summary:
      'Branded client-facing accounting portals with CRM-connected intake, secure document exchange, and integrations with HubSpot, Xero, and DocuSign.',
  },
  {
    id: 'client-portal',
    name: 'Accounting Client Portal & Document Vault',
    path: '/services/client-portal',
    summary:
      'Stop losing tax packs in WhatsApp. Product tour: client dashboard, document vault, compliance calendar, and firm admin console—on your domain.',
  },
  {
    id: 'website-as-a-service',
    name: 'Website as a Service for Accountants',
    path: '/services/website-as-a-service',
    summary:
      'Managed accounting firm websites—design, hosting, SEO, compliance, and CRO on a monthly subscription, aligned with your client portal.',
  },
  {
    id: 'workflow-integration',
    name: 'CRM & Workflow Integration',
    path: '/services/workflow-integration',
    summary:
      'Connect your firm website to Xero, QuickBooks, HubSpot, and Calendly to automate onboarding and reduce admin for accounting teams.',
  },
  {
    id: 'compliance-trust',
    name: 'Compliance & Trust for Financial Websites',
    path: '/services/compliance-trust',
    summary:
      'POPIA, GDPR, WCAG 2.1 AA, and FSCA-aware compliant digital presence for regulated financial and accounting practices.',
  },
]

export function getPageSeo(pageId) {
  return PAGE_SEO[pageId] ?? null
}
