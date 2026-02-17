<template>
  <div class="fixed inset-0 z-[9999] bg-navy-950 flex flex-col items-center justify-center overflow-hidden" ref="loaderRef">
    <!-- Geometric Background -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Rotating outer ring -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-gold-500/10 rotate-45 animate-spin-slow" style="animation-duration: 20s;"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 border border-gold-500/15" style="animation: spin 15s linear infinite reverse;"></div>
      <!-- Corner decorators -->
      <div class="absolute top-8 left-8 w-16 h-16 border-l border-t border-gold-500/20"></div>
      <div class="absolute top-8 right-8 w-16 h-16 border-r border-t border-gold-500/20"></div>
      <div class="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-gold-500/20"></div>
      <div class="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-gold-500/20"></div>
    </div>

    <!-- Central Logo Animation -->
    <div class="relative flex flex-col items-center">
      <!-- Logo SVG with draw animation -->
      <div class="relative w-24 h-24 mb-8" ref="logoRef">
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
          <!-- Outer hexagon -->
          <polygon
            points="40,4 72,22 72,58 40,76 8,58 8,22"
            fill="none"
            stroke="#C9A84C"
            stroke-width="1.5"
            stroke-dasharray="240"
            stroke-dashoffset="240"
            class="hex-outer"
          />
          <!-- Inner hexagon -->
          <polygon
            points="40,16 60,27 60,53 40,64 20,53 20,27"
            fill="none"
            stroke="#C9A84C"
            stroke-width="0.75"
            opacity="0.4"
            stroke-dasharray="180"
            stroke-dashoffset="180"
            class="hex-inner"
          />
          <!-- ZMG Text -->
          <text
            x="40" y="46"
            text-anchor="middle"
            fill="#C9A84C"
            font-size="16"
            font-weight="700"
            font-family="Inter, sans-serif"
            letter-spacing="1"
            class="zmg-text"
            opacity="0"
          >ZMG</text>
        </svg>
        <!-- Gold glow effect -->
        <div class="absolute inset-0 rounded-full bg-gold-500/5 blur-2xl scale-150 animate-pulse-gold"></div>
      </div>

      <!-- Brand Name -->
      <div class="text-center mb-12 overflow-hidden" ref="brandRef">
        <h1 class="font-serif text-white text-3xl font-bold tracking-wider opacity-0 translate-y-4 brand-text">
          ZARMEDIA<span class="text-gold-500">GROUP</span>
        </h1>
        <p class="font-sans text-white/40 text-xs tracking-[0.3em] uppercase mt-2 opacity-0 translate-y-4 brand-sub">
          Digital Business Outcomes
        </p>
      </div>

      <!-- Loading Bar -->
      <div class="w-64 relative">
        <div class="w-full h-px bg-white/10 mb-2"></div>
        <div
          class="h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent transition-all duration-300 ease-out"
          :style="{ width: progress + '%' }"
        ></div>
        <div class="w-full h-px bg-white/10 mt-2"></div>
        <p class="font-sans text-white/30 text-xs text-center mt-4 tracking-wider tabular-nums">
          {{ Math.round(progress) }}%
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const emit = defineEmits(['done'])

const loaderRef = ref(null)
const logoRef = ref(null)
const progress = ref(0)

onMounted(() => {
  // Animate hex lines
  const hexOuter = loaderRef.value?.querySelector('.hex-outer')
  const hexInner = loaderRef.value?.querySelector('.hex-inner')
  const zmgText = loaderRef.value?.querySelector('.zmg-text')
  const brandText = loaderRef.value?.querySelector('.brand-text')
  const brandSub = loaderRef.value?.querySelector('.brand-sub')

  // Sequential animation timeline
  setTimeout(() => {
    if (hexOuter) {
      hexOuter.style.transition = 'stroke-dashoffset 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
      hexOuter.style.strokeDashoffset = '0'
    }
  }, 200)

  setTimeout(() => {
    if (hexInner) {
      hexInner.style.transition = 'stroke-dashoffset 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
      hexInner.style.strokeDashoffset = '0'
    }
  }, 600)

  setTimeout(() => {
    if (zmgText) {
      zmgText.style.transition = 'opacity 0.4s ease'
      zmgText.style.opacity = '1'
    }
  }, 1000)

  setTimeout(() => {
    if (brandText) {
      brandText.style.transition = 'opacity 0.5s ease, transform 0.5s ease'
      brandText.style.opacity = '1'
      brandText.style.transform = 'translateY(0)'
    }
  }, 1200)

  setTimeout(() => {
    if (brandSub) {
      brandSub.style.transition = 'opacity 0.5s ease, transform 0.5s ease'
      brandSub.style.opacity = '1'
      brandSub.style.transform = 'translateY(0)'
    }
  }, 1400)

  // Progress animation
  const duration = 2800
  const startTime = performance.now()

  function updateProgress(currentTime) {
    const elapsed = currentTime - startTime
    const raw = elapsed / duration
    const eased = 1 - Math.pow(1 - Math.min(raw, 1), 3)
    progress.value = eased * 100

    if (raw < 1) {
      requestAnimationFrame(updateProgress)
    } else {
      progress.value = 100
      setTimeout(() => emit('done'), 400)
    }
  }

  requestAnimationFrame(updateProgress)
})
</script>

<style scoped>
@keyframes spin {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}
</style>

