<template>
  <section>
    <h1 class="text-3xl font-bold text-gray-900 text-center">Products</h1>
    <p class="mt-2 text-center text-gray-600">Books and tools to help you focus and ship.</p>

    <div class="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="product in products" :key="product.title" class="border border-gray-200 rounded-lg p-6 flex flex-col">
        <h3 class="text-xl font-semibold text-gray-900">{{ product.title }}</h3>
        <p class="mt-2 text-gray-600 flex-1">{{ product.description }}</p>
        <a :href="product.link" target="_blank" rel="noopener"
           class="mt-4 inline-flex items-center justify-center rounded-md bg-primary-600 px-4 py-2 text-white font-medium hover:bg-primary-700 transition">
          Buy on Gumroad
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const products = [
  {
    title: 'Deep Work for Makers',
    description: 'A concise guide to reclaiming attention and producing high-quality work.',
    link: 'https://gumroad.com/l/deep-work-makers'
  },
  {
    title: 'Launch in 7 Days',
    description: 'A practical, step-by-step playbook for shipping your next product in a week.',
    link: 'https://gumroad.com/l/launch-in-7-days'
  },
  {
    title: 'The Minimal Marketing Handbook',
    description: 'Simple, effective marketing strategies for indie builders without the fluff.',
    link: 'https://gumroad.com/l/minimal-marketing'
  }
]
</script> 