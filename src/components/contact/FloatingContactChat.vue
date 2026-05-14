<template>
  <Teleport to="body">
    <div
      v-if="showChrome"
      class="fixed right-4 sm:right-6 z-[100] flex flex-col items-end pointer-events-none"
      :class="bottomOffsetClass"
    >
      <Transition name="zmg-float-panel">
        <div
          v-show="everOpened && open"
          id="zmg-floating-chat-panel"
          class="pointer-events-auto mb-3 flex w-[calc(100vw-2rem)] max-w-[420px] max-h-[min(560px,calc(100vh-9rem))] flex-col overflow-hidden rounded-xl border border-navy-900/15 bg-white shadow-[0_12px_40px_-4px_rgba(15,23,42,0.25)]"
        >
          <div class="flex flex-shrink-0 items-center justify-between gap-2 border-b border-navy-900/10 bg-navy-900 px-4 py-3">
            <h3 class="font-serif text-base text-white tracking-tight">Chat with us</h3>
            <button
              type="button"
              class="rounded p-1.5 text-white/80 transition hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
              aria-label="Close chat"
              @click="closePanel"
            >
              <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
          <div class="flex min-h-0 flex-1 flex-col overflow-hidden bg-cream">
            <ContactAuditChat
              v-if="everOpened"
              variant="floating"
              instance-id="float"
              submit-source="chat_float"
            />
          </div>
        </div>
      </Transition>

      <button
        type="button"
        class="pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold-500/40 bg-navy-900 text-gold-500 shadow-lg transition hover:border-gold-500 hover:bg-navy-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        :aria-expanded="open"
        :aria-controls="everOpened ? 'zmg-floating-chat-panel' : undefined"
        :aria-label="open ? 'Close chat' : 'Open chat to request a free website audit'"
        @click="togglePanel"
      >
        <svg v-if="!open" class="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
        </svg>
        <svg v-else class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, computed, watch, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useAppStore } from '@/stores/app'
import ContactAuditChat from '@/components/contact/ContactAuditChat.vue'

const route = useRoute()
const appStore = useAppStore()

const open = ref(false)
const everOpened = ref(false)

const showChrome = computed(() => route.path !== '/contact')

const bottomOffsetClass = computed(() =>
  appStore.cookiesAccepted ? 'bottom-6 sm:bottom-8' : 'bottom-28 sm:bottom-24',
)

function togglePanel() {
  if (open.value) {
    open.value = false
  } else {
    everOpened.value = true
    open.value = true
  }
}

function closePanel() {
  open.value = false
}

watch(
  () => route.path,
  (path) => {
    if (path === '/contact') open.value = false
  },
)

let escapeHandler = null
watch(open, (isOpen) => {
  if (escapeHandler) {
    document.removeEventListener('keydown', escapeHandler)
    escapeHandler = null
  }
  if (isOpen) {
    escapeHandler = (e) => {
      if (e.key === 'Escape') closePanel()
    }
    document.addEventListener('keydown', escapeHandler)
  }
})

onUnmounted(() => {
  if (escapeHandler) document.removeEventListener('keydown', escapeHandler)
})
</script>

<style scoped>
.zmg-float-panel-enter-active,
.zmg-float-panel-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.zmg-float-panel-enter-from,
.zmg-float-panel-leave-to {
  opacity: 0;
  transform: translateY(8px);
}
</style>
