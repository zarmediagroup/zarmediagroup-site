<template>
  <Transition name="slide-up">
    <div
      v-if="show"
      class="fixed bottom-0 left-0 right-0 bg-navy-900/95 backdrop-blur-md border-t border-white/10 py-4 px-6"
      style="z-index: 101;"
    >
      <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p class="font-sans text-white/70 text-sm leading-relaxed">
          We use cookies to enhance your experience and analyse site performance.
          <RouterLink to="/privacy-policy" class="text-white/80 hover:text-white underline">Privacy Policy</RouterLink> ·
          <RouterLink to="/cookie-policy" class="text-white/80 hover:text-white underline">Cookie Policy</RouterLink>
        </p>
        <div class="flex items-center gap-3 flex-shrink-0">
          <button
            class="font-sans text-white/50 text-xs hover:text-white/80 transition-colors px-4 py-2"
            @click="decline"
          >
            Decline
          </button>
          <button
            class="btn-primary text-xs py-2.5 px-6"
            @click="accept"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref } from 'vue'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()
const show = ref(true)

function accept() {
  appStore.acceptCookies()
  show.value = false
}

function decline() {
  appStore.declineCookies()
  show.value = false
}
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>



