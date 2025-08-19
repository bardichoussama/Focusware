<template>
  <div class="min-h-screen flex flex-col bg-white">
    <NavBar />
    <main class="flex-1">
      <div class="max-w-6xl mx-auto px-4 py-10">
        <slot />
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
</script> 