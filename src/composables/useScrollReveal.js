import { onMounted, onUnmounted, ref } from 'vue'

export function useScrollReveal() {
  let observer = null

  function initReveal(rootMargin = '0px 0px -80px 0px') {
    if (typeof window === 'undefined') return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin }
    )

    document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach((el) => {
      observer.observe(el)
    })
  }

  function observeNew(elements) {
    if (!observer || !elements) return
    elements.forEach((el) => observer?.observe(el))
  }

  onMounted(() => {
    setTimeout(initReveal, 100)
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return { initReveal, observeNew }
}

export function useCountUp(target, duration = 2000) {
  const count = ref(0)
  let animFrame = null

  function start() {
    const start = performance.now()
    const startValue = 0
    const endValue = target

    function update(currentTime) {
      const elapsed = currentTime - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4) // ease-out-quart
      count.value = Math.round(startValue + (endValue - startValue) * eased)

      if (progress < 1) {
        animFrame = requestAnimationFrame(update)
      }
    }

    animFrame = requestAnimationFrame(update)
  }

  onUnmounted(() => {
    if (animFrame) cancelAnimationFrame(animFrame)
  })

  return { count, start }
}


