<template>
  <section>
    <h1 class="text-3xl font-bold text-gray-900 text-center">Resources</h1>
    <p class="mt-2 text-center text-gray-600">Articles and guides to help you focus and ship. (Coming soon)</p>

    <div class="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <article v-for="item in articles" :key="item.title" class="border border-gray-200 rounded-lg p-6">
        <h3 class="text-lg font-semibold text-gray-900">{{ item.title }}</h3>
        <p class="mt-2 text-gray-600">{{ item.excerpt }}</p>
        <a :href="item.link" target="_blank" rel="noopener" class="mt-4 inline-block text-primary-600 hover:text-primary-700">Read more</a>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
const articles = [
  {
    title: 'Designing for Focus: Minimal UI Principles',
    excerpt: 'Key principles to reduce cognitive load and help users stay in flow.',
    link: '#'
  },
  {
    title: 'Rapid Launch Checklist',
    excerpt: 'A simple checklist to go from idea to shipped in days, not months.',
    link: '#'
  },
  {
    title: 'Tools I Use Daily as an Indie Hacker',
    excerpt: 'A curated list of tools to keep your workflow fast and distraction-free.',
    link: '#'
  }
]
</script> 