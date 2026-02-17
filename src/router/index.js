import { createRouter, createWebHistory } from 'vue-router'
import { useAppStore } from '@/stores/app'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'),
    meta: {
      title: 'Home | ZARMEDIAGROUP',
      description: 'We engineer digital business outcomes for financial professionals. Premium web design for accounting firms, tax services, and financial advisors.',
    }
  },
  {
    path: '/what-we-do',
    name: 'WhatWeDo',
    component: () => import('@/views/WhatWeDoView.vue'),
    meta: {
      title: 'What We Do | ZARMEDIAGROUP',
      description: 'Problem-to-solution framework for financial sector digital transformation. See how we drive measurable business outcomes.',
    }
  },
  {
    path: '/about/team',
    name: 'Team',
    component: () => import('@/views/TeamView.vue'),
    meta: {
      title: 'Meet the Team | ZARMEDIAGROUP',
      description: 'Meet the experts behind ZARMEDIAGROUP. A dedicated team of digital strategists, designers, and developers.',
    }
  },
  {
    path: '/services/website-as-a-service',
    name: 'WebsiteService',
    component: () => import('@/views/WebsiteServiceView.vue'),
    meta: {
      title: 'Website as a Service | ZARMEDIAGROUP',
      description: 'Premium website management and optimization as a monthly service for financial professionals.',
    }
  },
  {
    path: '/services/workflow-integration',
    name: 'WorkflowIntegration',
    component: () => import('@/views/WorkflowView.vue'),
    meta: {
      title: 'Workflow Integration | ZARMEDIAGROUP',
      description: 'Seamlessly integrate your digital presence with your existing financial workflows and systems.',
    }
  },
  {
    path: '/services/compliance-trust',
    name: 'ComplianceTrust',
    component: () => import('@/views/ComplianceView.vue'),
    meta: {
      title: 'Compliance & Trust | ZARMEDIAGROUP',
      description: 'Compliance-first web development ensuring your digital presence meets all financial industry regulations.',
    }
  },
  {
    path: '/resources',
    name: 'Resources',
    component: () => import('@/views/ResourcesView.vue'),
    meta: {
      title: 'Resources | ZARMEDIAGROUP',
      description: 'Whitepapers, case studies, guides, and insights for financial sector digital transformation.',
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/ContactView.vue'),
    meta: {
      title: 'Contact | ZARMEDIAGROUP',
      description: 'Ready to transform your digital presence? Get in touch with our team of financial sector digital experts.',
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFoundView.vue'),
    meta: { title: '404 | ZARMEDIAGROUP' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80,
      }
    }
    return { top: 0, behavior: 'smooth' }
  }
})

// Meta tag updates + page loader
router.beforeEach((to, from, next) => {
  // Update document title
  document.title = to.meta?.title || 'ZARMEDIAGROUP'
  // Update meta description
  const metaDesc = document.querySelector('meta[name="description"]')
  if (metaDesc && to.meta?.description) {
    metaDesc.setAttribute('content', to.meta.description)
  }
  next()
})

export default router

