<template>
  <div id="zmg-app" :class="{ 'overflow-hidden': appStore.isLoading }">
    <!-- Initial Loader -->
    <Transition name="loader-fade">
      <AppLoader v-if="appStore.isLoading" @done="onLoadComplete" />
    </Transition>

    <!-- Page Loader (between routes) -->
    <PageLoader :active="appStore.isPageLoading" />

    <!-- Main App Shell -->
    <template v-if="!appStore.isLoading">
      <Navbar />
      <main>
        <RouterView v-slot="{ Component, route }">
          <Transition name="page" mode="out-in">
            <component :is="Component" :key="route.path" />
          </Transition>
        </RouterView>
      </main>
      <SiteFooter />
      <CookieBanner v-if="!appStore.cookiesAccepted" />
    </template>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useAppStore } from '@/stores/app'
import { useRouter } from 'vue-router'
import AppLoader from '@/components/ui/AppLoader.vue'
import PageLoader from '@/components/ui/PageLoader.vue'
import Navbar from '@/components/layout/Navbar.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'
import CookieBanner from '@/components/ui/CookieBanner.vue'

const appStore = useAppStore()
const router = useRouter()

// Scroll tracking
function handleScroll() {
  appStore.updateScroll(window.scrollY)
}

// Route transitions
router.beforeEach(() => {
  appStore.setPageLoading(true)
  appStore.closeNav()
})

router.afterEach(() => {
  setTimeout(() => appStore.setPageLoading(false), 400)
})

function onLoadComplete() {
  appStore.setLoading(false)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  appStore.checkCookies()

  // Escape key closes modals/nav
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      appStore.closeModal()
      appStore.closeNav()
    }
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
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

