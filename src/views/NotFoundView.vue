<template>
  <div class="min-h-screen bg-navy-900 flex items-center justify-center px-6">
    <div class="text-center">
      <div class="font-serif text-gold-500/20 text-[12rem] font-bold leading-none select-none">404</div>
      <h1 class="font-serif text-white text-display-sm mb-4 -mt-8">Page Not Found</h1>
      <p class="font-sans text-white/60 text-lg mb-10 max-w-md mx-auto">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <RouterLink to="/" class="btn-primary">Go to Homepage</RouterLink>
        <RouterLink to="/contact" class="btn-ghost">Contact Us</RouterLink>
      </div>
    </div>
  </div>
</template>

