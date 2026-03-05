<template>
  <RouterLink
    :to="to"
    class="flex items-center gap-3 py-3.5 border-b border-white/10 group"
    :class="[sub ? 'pl-2' : '']"
    active-class="text-gold-500"
  >
    <span v-if="sub" class="text-gold-500/50 text-xs group-hover:text-gold-500 transition-colors">◆</span>
    <span
      class="font-sans font-medium transition-colors"
      :class="[
        sub ? 'text-white/60 text-base group-hover:text-white' : 'text-white/80 text-lg group-hover:text-white'
      ]"
    >{{ label }}</span>
    <svg
      class="w-4 h-4 ml-auto text-white/20 group-hover:text-gold-500 group-hover:translate-x-1 transition-all"
      fill="none" stroke="currentColor" viewBox="0 0 24 24"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
    </svg>
  </RouterLink>
</template>

<script setup>
defineProps({
  to: { type: String, required: true },
  label: { type: String, required: true },
  sub: { type: Boolean, default: false },
})
</script>



