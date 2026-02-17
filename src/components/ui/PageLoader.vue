<template>
  <Transition name="page-loader">
    <div v-if="active" class="fixed top-0 left-0 right-0 z-[9998] h-0.5 overflow-hidden">
      <div class="h-full bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 animate-loader-bar"></div>
    </div>
  </Transition>
</template>

<script setup>
defineProps({
  active: { type: Boolean, default: false }
})
</script>

<style scoped>
.page-loader-enter-active,
.page-loader-leave-active {
  transition: opacity 0.2s ease;
}

.page-loader-enter-from,
.page-loader-leave-to {
  opacity: 0;
}
</style>

