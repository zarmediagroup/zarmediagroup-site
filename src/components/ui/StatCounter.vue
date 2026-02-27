<template>
  <div ref="counterRef" class="flex flex-col items-center lg:items-start">
    <div class="flex items-end gap-1">
      <span class="stat-number tabular-nums">{{ prefix }}{{ displayValue }}{{ suffix }}</span>
    </div>
    <span class="font-sans text-white/50 text-sm mt-2 text-center lg:text-left">{{ label }}</span>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  value: { type: Number, required: true },
  label: { type: String, required: true },
  prefix: { type: String, default: '' },
  suffix: { type: String, default: '' },
  duration: { type: Number, default: 2500 },
})

const counterRef = ref(null)
const displayValue = ref(0)
let animFrame = null
let observer = null

function startAnimation() {
  const start = performance.now()

  function update(currentTime) {
    const elapsed = currentTime - start
    const progress = Math.min(elapsed / props.duration, 1)
    // Ease out quart
    const eased = 1 - Math.pow(1 - progress, 4)
    displayValue.value = Math.round(props.value * eased)

    if (progress < 1) {
      animFrame = requestAnimationFrame(update)
    } else {
      displayValue.value = props.value
    }
  }

  animFrame = requestAnimationFrame(update)
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        startAnimation()
        observer.disconnect()
      }
    },
    { threshold: 0.3 }
  )
  if (counterRef.value) observer.observe(counterRef.value)
})

onUnmounted(() => {
  if (animFrame) cancelAnimationFrame(animFrame)
  observer?.disconnect()
})
</script>


