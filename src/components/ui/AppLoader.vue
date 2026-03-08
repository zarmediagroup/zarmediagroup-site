<template>
  <div class="fixed inset-0 z-[9999] bg-navy-950 flex flex-col items-center justify-center overflow-hidden" ref="loaderRef">
    <!-- Geometric Background -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Rotating outer ring -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/10 rotate-45 animate-spin-slow" style="animation-duration: 20s;"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 border border-white/10" style="animation: spin 15s linear infinite reverse;"></div>
      <!-- Corner decorators -->
      <div class="absolute top-8 left-8 w-16 h-16 border-l border-t border-white/15"></div>
      <div class="absolute top-8 right-8 w-16 h-16 border-r border-t border-white/15"></div>
      <div class="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-white/15"></div>
      <div class="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-white/15"></div>
    </div>

    <!-- Central Logo Animation -->
    <div class="relative flex flex-col items-center">
      <!-- Logo image with fade-in -->
      <div class="relative mb-1" ref="logoRef">
        <img
          src="/logo.png"
          alt="Zar Media Group"
          class="h-120 w-auto object-contain brightness-0 invert logo-img"
          width="200"
          height="40"
          style="opacity: 0;"
        />
        <!-- White glow effect — opacity+scale only (GPU-composited, no box-shadow) -->
        <div class="absolute inset-0 blur-2xl scale-150 glow-pulse" style="background: rgba(255,255,255,0.08);"></div>
      </div>

      <!-- Brand Name -->
      <div class="text-center mb-2t overflow-hidden" ref="brandRef">
        <p class="font-sans text-white/40 text-xs tracking-[0.3em] uppercase mt-2 opacity-0 translate-y-4 brand-sub">
          Digital Business Outcomes
        </p>
      </div>

      <!-- Loading Bar — uses transform:scaleX (GPU-composited, no width reflow) -->
      <div class="w-64 relative">
        <div class="w-full h-px bg-white/10 mb-2"></div>
        <div class="w-full h-px overflow-hidden">
          <div
            class="h-px w-full bg-gradient-to-r from-transparent via-white to-transparent origin-left"
            :style="{ transform: `scaleX(${progress / 100})`, transition: 'transform 0.3s cubic-bezier(0.16,1,0.3,1)' }"
          ></div>
        </div>
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
  // Animate logo image
  const logoImg = loaderRef.value?.querySelector('.logo-img')
  const brandSub = loaderRef.value?.querySelector('.brand-sub')

  // Sequential animation timeline
  setTimeout(() => {
    if (logoImg) {
      logoImg.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
      logoImg.style.opacity = '1'
    }
  }, 300)

  setTimeout(() => {
    if (brandSub) {
      brandSub.style.transition = 'opacity 0.5s ease, transform 0.5s ease'
      brandSub.style.opacity = '1'
      brandSub.style.transform = 'translateY(0)'
    }
  }, 900)

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
  to   { transform: translate(-50%, -50%) rotate(360deg); }
}

/* GPU-composited pulse: opacity + scale only (no box-shadow) */
@keyframes glowPulse {
  0%, 100% { opacity: 0.4; transform: scale(1.5); }
  50%       { opacity: 0.1; transform: scale(1.6); }
}

.glow-pulse {
  animation: glowPulse 2s ease-in-out infinite;
  will-change: opacity, transform;
}
</style>

