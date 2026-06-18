<template>
  <div id="zmg-app" :class="{ 'overflow-hidden': appStore.isNavOpen }">
    <!-- Optional splash — does not block main content (LCP measures hero, not loader) -->
    <Transition name="loader-fade">
      <AppLoader v-if="appStore.isLoading" @done="onLoadComplete" />
    </Transition>

    <PageLoader :active="appStore.isPageLoading" />

    <Navbar v-if="!isMinimalLayout" />
    <main>
      <RouterView v-slot="{ Component, route }">
        <Transition :name="isMinimalLayout ? '' : 'page'" mode="out-in">
          <component :is="Component" :key="route.path" />
        </Transition>
      </RouterView>
    </main>
    <SiteFooter v-if="!isMinimalLayout" />
    <CookieBanner v-if="!appStore.cookiesAccepted" />
    <FloatingContactChat v-if="!isMinimalLayout" />
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted } from 'vue'
import { useAppStore } from '@/stores/app'
import { useRouter, useRoute } from 'vue-router'
import AppLoader from '@/components/ui/AppLoader.vue'
import PageLoader from '@/components/ui/PageLoader.vue'
import Navbar from '@/components/layout/Navbar.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'
import CookieBanner from '@/components/ui/CookieBanner.vue'
import FloatingContactChat from '@/components/contact/FloatingContactChat.vue'

const appStore = useAppStore()
const router = useRouter()
const route = useRoute()

const isMinimalLayout = computed(() => route.meta.minimalLayout === true)

// Scroll tracking
function handleScroll() {
  appStore.updateScroll(window.scrollY)
}

function handleEscape(e) {
  if (e.key === 'Escape') {
    appStore.closeModal()
    appStore.closeNav()
  }
}

// Route transitions
router.beforeEach(() => {
  appStore.setPageLoading(true)
  appStore.closeNav()
})

router.afterEach(() => {
  setTimeout(() => appStore.setPageLoading(false), 150)
})

function onLoadComplete() {
  try {
    sessionStorage.setItem('zmg_splash_seen', '1')
  } catch {
    /* ignore */
  }
  appStore.setLoading(false)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  appStore.checkCookies()
  document.addEventListener('keydown', handleEscape)

  try {
    if (!isMinimalLayout.value && sessionStorage.getItem('zmg_splash_seen') !== '1') {
      appStore.setLoading(true)
    }
  } catch {
    /* sessionStorage unavailable — skip splash */
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('keydown', handleEscape)
})
</script>

<style>
#zmg-app {
  min-height: 100vh;
}

.loader-fade-enter-active,
.loader-fade-leave-active {
  transition: opacity 0.6s ease;
}

.loader-fade-enter-from,
.loader-fade-leave-to {
  opacity: 0;
}
</style>





