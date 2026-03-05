import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAppStore = defineStore('app', () => {
  // State
  const isLoading = ref(true)
  const isPageLoading = ref(false)
  const isNavOpen = ref(false)
  const activeModal = ref(null)
  const modalData = ref(null)
  const scrollY = ref(0)
  const isScrolled = ref(false)
  const cookiesAccepted = ref(false)
  const currentTheme = ref('dark-nav') // 'dark-nav' | 'light-nav'

  // Computed
  const navIsTransparent = computed(() => scrollY.value < 80)

  // Actions
  function setLoading(value) {
    isLoading.value = value
  }

  function setPageLoading(value) {
    isPageLoading.value = value
  }

  function toggleNav() {
    isNavOpen.value = !isNavOpen.value
    if (isNavOpen.value) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }

  function closeNav() {
    isNavOpen.value = false
    document.body.style.overflow = ''
  }

  function openModal(modalName, data = null) {
    activeModal.value = modalName
    modalData.value = data
    document.body.style.overflow = 'hidden'
  }

  function closeModal() {
    activeModal.value = null
    modalData.value = null
    document.body.style.overflow = ''
  }

  function updateScroll(y) {
    scrollY.value = y
    isScrolled.value = y > 80
  }

  function acceptCookies() {
    cookiesAccepted.value = true
    localStorage.setItem('zmg_cookies', 'accepted')
  }

  function checkCookies() {
    const stored = localStorage.getItem('zmg_cookies')
    if (stored === 'accepted') {
      cookiesAccepted.value = true
    }
  }

  return {
    // State
    isLoading,
    isPageLoading,
    isNavOpen,
    activeModal,
    modalData,
    scrollY,
    isScrolled,
    cookiesAccepted,
    currentTheme,
    // Computed
    navIsTransparent,
    // Actions
    setLoading,
    setPageLoading,
    toggleNav,
    closeNav,
    openModal,
    closeModal,
    updateScroll,
    acceptCookies,
    checkCookies,
  }
})



