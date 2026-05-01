<template>
  <header
    ref="navRef"
    class="fixed top-0 left-0 right-0 transition-all duration-500 pointer-events-auto"
    style="z-index: 100;"
    :class="[
      appStore.isScrolled
        ? 'bg-navy-900/95 backdrop-blur-md shadow-navy py-0'
        : 'bg-transparent py-2'
    ]"
  >
    <nav class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center gap-3" @click="appStore.closeNav()">
          <img
            src="/logo.png"
            alt="Zar Media Group logo"
            class="h-20 w-auto object-contain"
            width="120"
            height="40"
            loading="eager"
          />
        </RouterLink>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center gap-8">
          <!-- Home -->
          <RouterLink to="/" class="nav-link" :class="{ active: $route.name === 'Home' }">
            Home
          </RouterLink>

          <!-- About Dropdown -->
          <div class="relative dropdown-trigger" @mouseenter="openDropdown('about')" @mouseleave="closeDropdown">
            <button class="nav-link flex items-center gap-1" :class="{ active: isAboutActive }">
              About Us
              <svg class="w-3 h-3 transition-transform duration-200" :class="{ 'rotate-180': activeDropdown === 'about' }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <Transition name="dropdown">
              <div v-if="activeDropdown === 'about'" class="dropdown-menu" @mouseenter="openDropdown('about')">
                <RouterLink to="/what-we-do" class="dropdown-item" @click="closeDropdownNow">
                  <span class="dropdown-icon">◆</span>
                  <div>
                    <div class="dropdown-title">Optimizing Systems</div>
                    <div class="dropdown-desc">How we drive outcomes</div>
                  </div>
                </RouterLink>
                <RouterLink to="/about/team" class="dropdown-item" @click="closeDropdownNow">
                  <span class="dropdown-icon">◆</span>
                  <div>
                    <div class="dropdown-title">Meet the Team</div>
                    <div class="dropdown-desc">The experts behind ZMG</div>
                  </div>
                </RouterLink>
              </div>
            </Transition>
          </div>

          <!-- Services Dropdown -->
          <div class="relative dropdown-trigger" @mouseenter="openDropdown('services')" @mouseleave="closeDropdown">
            <button class="nav-link flex items-center gap-1" :class="{ active: isServicesActive }">
              Services
              <svg class="w-3 h-3 transition-transform duration-200" :class="{ 'rotate-180': activeDropdown === 'services' }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <Transition name="dropdown">
              <div v-if="activeDropdown === 'services'" class="dropdown-menu w-72" @mouseenter="openDropdown('services')">
                <RouterLink to="/services/accounting-portals-crm" class="dropdown-item" @click="closeDropdownNow">
                  <span class="dropdown-icon">◆</span>
                  <div>
                    <div class="dropdown-title">Client Portals &amp; CRM</div>
                    <div class="dropdown-desc">Accounting portals &amp; client-facing CRM</div>
                  </div>
                </RouterLink>
                <RouterLink to="/services/website-as-a-service" class="dropdown-item" @click="closeDropdownNow">
                  <span class="dropdown-icon">◆</span>
                  <div>
                    <div class="dropdown-title">Website as a Service</div>
                    <div class="dropdown-desc">Premium managed web presence</div>
                  </div>
                </RouterLink>
                <RouterLink to="/services/workflow-integration" class="dropdown-item" @click="closeDropdownNow">
                  <span class="dropdown-icon">◆</span>
                  <div>
                    <div class="dropdown-title">Workflow Integration</div>
                    <div class="dropdown-desc">Seamless system connectivity</div>
                  </div>
                </RouterLink>
                <RouterLink to="/services/compliance-trust" class="dropdown-item" @click="closeDropdownNow">
                  <span class="dropdown-icon">◆</span>
                  <div>
                    <div class="dropdown-title">Compliance & Trust</div>
                    <div class="dropdown-desc">Regulation-first development</div>
                  </div>
                </RouterLink>
              </div>
            </Transition>
          </div>

          <!-- Resources -->
          <RouterLink to="/resources" class="nav-link" :class="{ active: $route.name === 'Resources' }">
            Resources
          </RouterLink>

          <!-- CTA -->
          <RouterLink to="/contact" class="btn-primary text-xs py-3 px-6 ml-4">
            Start a Project
          </RouterLink>
        </div>

        <!-- Mobile Menu Toggle -->
        <button
          class="lg:hidden flex flex-col gap-1.5 p-2 group cursor-pointer"
          @click="appStore.toggleNav()"
          aria-label="Toggle mobile menu"
        >
          <span
            class="block w-7 h-px bg-white transition-all duration-300"
            :class="appStore.isNavOpen ? 'rotate-45 translate-y-2.5' : ''"
          ></span>
          <span
            class="block w-7 h-px bg-white transition-all duration-300"
            :class="appStore.isNavOpen ? 'opacity-0 scale-x-0' : ''"
          ></span>
          <span
            class="block w-7 h-px bg-white transition-all duration-300"
            :class="appStore.isNavOpen ? '-rotate-45 -translate-y-2.5' : ''"
          ></span>
        </button>
      </div>
    </nav>

  </header>

  <!-- Mobile Menu Overlay — Teleported to body so backdrop-filter on header doesn't break fixed positioning -->
  <Teleport to="body">
    <Transition name="mobile-menu">
      <div v-if="appStore.isNavOpen" class="lg:hidden fixed inset-0 top-[5rem] bg-navy-900/98 backdrop-blur-lg overflow-y-auto" style="z-index: 99;">
        <div class="flex flex-col px-6 py-8 gap-2">
          <MobileNavItem to="/" label="Home" @click="appStore.closeNav()" />

          <!-- About Section -->
          <div>
            <button
              class="w-full flex items-center justify-between py-4 text-white/80 font-sans font-medium text-lg border-b border-white/10"
              @click="toggleMobileSection('about')"
            >
              <span>About Us</span>
              <svg class="w-4 h-4 transition-transform" :class="{ 'rotate-180': mobileSection === 'about' }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <Transition name="accordion">
              <div v-if="mobileSection === 'about'" class="py-2 pl-4">
                <MobileNavItem to="/what-we-do" label="Optimizing Systems" sub @click="appStore.closeNav()" />
                <MobileNavItem to="/about/team" label="Meet the Team" sub @click="appStore.closeNav()" />
              </div>
            </Transition>
          </div>

          <!-- Services Section -->
          <div>
            <button
              class="w-full flex items-center justify-between py-4 text-white/80 font-sans font-medium text-lg border-b border-white/10"
              @click="toggleMobileSection('services')"
            >
              <span>Services</span>
              <svg class="w-4 h-4 transition-transform" :class="{ 'rotate-180': mobileSection === 'services' }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <Transition name="accordion">
              <div v-if="mobileSection === 'services'" class="py-2 pl-4">
                <MobileNavItem to="/services/accounting-portals-crm" label="Client Portals & CRM" sub @click="appStore.closeNav()" />
                <MobileNavItem to="/services/website-as-a-service" label="Website as a Service" sub @click="appStore.closeNav()" />
                <MobileNavItem to="/services/workflow-integration" label="Workflow Integration" sub @click="appStore.closeNav()" />
                <MobileNavItem to="/services/compliance-trust" label="Compliance & Trust" sub @click="appStore.closeNav()" />
              </div>
            </Transition>
          </div>

          <MobileNavItem to="/resources" label="Resources" @click="appStore.closeNav()" />
          <MobileNavItem to="/contact" label="Contact" @click="appStore.closeNav()" />

          <!-- Mobile CTA -->
          <div class="mt-8 pt-8 border-t border-white/10">
            <RouterLink to="/contact" class="btn-primary w-full justify-center" @click="appStore.closeNav()">
              Start a Project
            </RouterLink>
            <div class="mt-6 flex items-center gap-6 justify-center">
              <a href="https://linkedin.com/company/zarmediagroup" target="_blank" rel="noopener" class="text-white/40 hover:text-white transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://twitter.com/zarmediagroup" target="_blank" rel="noopener" class="text-white/40 hover:text-white transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useAppStore } from '@/stores/app'
import MobileNavItem from './MobileNavItem.vue'

const appStore = useAppStore()
const route = useRoute()

const activeDropdown = ref(null)
const mobileSection = ref(null)
let dropdownTimeout = null

const isAboutActive = computed(() =>
  ['WhatWeDo', 'Team'].includes(route.name)
)
const isServicesActive = computed(() =>
  ['WebsiteService', 'WorkflowIntegration', 'ComplianceTrust', 'AccountingPortalsCrm'].includes(route.name)
)

function openDropdown(name) {
  clearTimeout(dropdownTimeout)
  activeDropdown.value = name
}

function closeDropdown() {
  dropdownTimeout = setTimeout(() => {
    activeDropdown.value = null
  }, 200)
}

function closeDropdownNow() {
  clearTimeout(dropdownTimeout)
  activeDropdown.value = null
}

function toggleMobileSection(section) {
  mobileSection.value = mobileSection.value === section ? null : section
}
</script>

<style scoped>
.dropdown-trigger {
  padding-bottom: 0.5rem;
  margin-bottom: -0.5rem;
}

.dropdown-menu {
  @apply absolute top-full left-1/2 -translate-x-1/2 w-64
         bg-navy-900 border border-white/10
         shadow-navy-lg py-2;
  z-index: 60;
}

.dropdown-menu::before {
  content: '';
  position: absolute;
  top: -0.75rem;
  left: 0;
  right: 0;
  height: 0.75rem;
}

.dropdown-item {
  @apply flex items-start gap-3 px-5 py-4
         text-white/70 hover:text-white hover:bg-white/5
         transition-all duration-200;
}

.dropdown-icon {
  @apply text-white/30 text-xs mt-1 transition-colors flex-shrink-0;
}

.dropdown-item:hover .dropdown-icon {
  @apply text-white;
}

.dropdown-title {
  @apply font-sans font-semibold text-sm text-white;
}

.dropdown-desc {
  @apply font-sans text-xs text-white/40 mt-0.5;
}
</style>

<!-- Unscoped so transitions work on Teleported mobile menu -->
<style>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>

