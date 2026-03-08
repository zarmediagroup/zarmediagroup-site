<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="modelValue"
        class="fixed inset-0 z-[9000] flex items-center justify-center p-4 sm:p-8"
        @click.self="$emit('update:modelValue', false)"
      >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-navy-950/80 backdrop-blur-sm" @click="$emit('update:modelValue', false)"></div>

        <!-- Modal Container -->
        <div
          class="modal-container relative w-full z-10 overflow-y-auto max-h-[90vh]"
          :class="[sizeClasses]"
        >
          <!-- Header -->
          <div class="flex items-start justify-between p-6 lg:p-8 border-b border-navy-900/10" :class="[dark ? 'border-white/10 bg-navy-900' : 'bg-white']">
            <div>
              <p v-if="label" class="section-label text-xs mb-1">{{ label }}</p>
              <h3 class="font-serif text-xl lg:text-2xl" :class="[dark ? 'text-white' : 'text-navy-900']">{{ title }}</h3>
            </div>
            <button
              class="flex-shrink-0 ml-4 w-8 h-8 flex items-center justify-center border transition-all"
              :class="[dark ? 'border-white/20 text-white/50 hover:text-white hover:border-white/50' : 'border-navy-900/20 text-navy-900/50 hover:text-navy-900 hover:border-navy-900/50']"
              @click="$emit('update:modelValue', false)"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

          <!-- Body -->
          <div
            class="p-6 lg:p-8"
            :class="[dark ? 'bg-navy-900 text-white/80' : 'bg-white text-charcoal-700']"
          >
            <slot />
          </div>

          <!-- Footer slot -->
          <slot name="footer" />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: { type: Boolean, default: false },
  title: { type: String, default: '' },
  label: { type: String, default: '' },
  size: { type: String, default: 'md' }, // 'sm' | 'md' | 'lg' | 'xl' | 'full'
  dark: { type: Boolean, default: false },
})

defineEmits(['update:modelValue'])

const sizeClasses = computed(() => ({
  sm: 'max-w-md',
  md: 'max-w-2xl',
  lg: 'max-w-4xl',
  xl: 'max-w-6xl',
  full: 'max-w-full mx-4',
}[props.size] || 'max-w-2xl'))
</script>





