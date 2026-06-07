<template>
  <div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
    <img
      v-if="poster || src"
      :src="poster || src"
      alt=""
      class="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
      :class="[
        imageOpacity,
        imagePosition,
        showVideo ? 'opacity-0' : '',
      ]"
      :loading="priority === 'high' ? 'eager' : 'lazy'"
      :fetchpriority="priority"
      decoding="async"
    />

    <!-- Mobile / fallback: full-bleed video behind copy -->
    <div
      v-if="video && showVideo && videoPanel"
      class="absolute inset-0 lg:hidden"
    >
      <video
        ref="videoElMobile"
        :poster="poster || src"
        autoplay
        muted
        loop
        playsinline
        preload="auto"
        class="absolute inset-0 w-full h-full object-cover object-center"
      >
        <source :src="video" type="video/mp4" />
      </video>
      <div class="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/70 to-navy-900/30"></div>
    </div>

    <!-- Full-bleed video mode (non-panel pages) -->
    <video
      v-if="video && showVideo && !videoPanel"
      ref="videoElFull"
      :poster="poster || src"
      autoplay
      muted
      loop
      playsinline
      preload="auto"
      class="absolute inset-0 w-full h-full object-cover"
      :class="[videoOpacity, videoPosition]"
    >
      <source :src="video" type="video/mp4" />
    </video>

    <div class="absolute inset-0" :class="overlayClass"></div>
    <div
      v-if="grid"
      class="absolute inset-0 opacity-[0.025]"
      style="background-image: linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px); background-size: 60px 60px;"
    ></div>
    <template v-if="corners">
      <div class="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-gold-500/30 hidden lg:block"></div>
      <div class="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-gold-500/30 hidden lg:block"></div>
    </template>
    <slot />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'

const props = defineProps({
  src: { type: String, default: '' },
  poster: { type: String, default: '' },
  video: { type: String, default: '' },
  videoPanel: { type: Boolean, default: false },
  overlayClass: {
    type: String,
    default: 'bg-gradient-to-r from-navy-900/92 via-navy-900/78 to-navy-900/55',
  },
  imageOpacity: { type: String, default: 'opacity-45' },
  videoOpacity: { type: String, default: 'opacity-55' },
  imagePosition: { type: String, default: 'object-center' },
  videoPosition: { type: String, default: 'object-center' },
  priority: { type: String, default: 'auto' },
  corners: { type: Boolean, default: true },
  grid: { type: Boolean, default: true },
})

const videoElFull = ref(null)
const videoElMobile = ref(null)
const reducedMotion = ref(false)
let motionQuery

const showVideo = computed(() => props.video && !reducedMotion.value)

function getActiveVideo() {
  if (!props.videoPanel) return videoElFull.value
  return videoElMobile.value
}

function ensurePlaying() {
  nextTick(() => {
    getActiveVideo()?.play().catch(() => {})
  })
}

function onMotionChange(event) {
  reducedMotion.value = event.matches
  if (event.matches) {
    videoElFull.value?.pause()
    videoElMobile.value?.pause()
  } else {
    ensurePlaying()
  }
}

onMounted(() => {
  motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  reducedMotion.value = motionQuery.matches
  motionQuery.addEventListener('change', onMotionChange)
  ensurePlaying()
})

onUnmounted(() => {
  motionQuery?.removeEventListener('change', onMotionChange)
})
</script>
