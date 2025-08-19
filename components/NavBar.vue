<template>
  <nav class="border-b border-gray-200">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <NuxtLink to="/" class="text-xl font-semibold text-gray-900">Focusware</NuxtLink>
        <div class="hidden md:flex items-center space-x-6">
          <NuxtLink to="/" class="text-gray-700 hover:text-primary-600">Home</NuxtLink>
          <NuxtLink to="/products" class="text-gray-700 hover:text-primary-600">Products</NuxtLink>
          <NuxtLink to="/resources" class="text-gray-700 hover:text-primary-600">Resources</NuxtLink>
          <NuxtLink to="/about" class="text-gray-700 hover:text-primary-600">About</NuxtLink>
          <NuxtLink to="/contact" class="text-gray-700 hover:text-primary-600">Contact</NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
</script> 