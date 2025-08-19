<template>
  <section>
    <h1 class="text-3xl font-bold text-gray-900 text-center">Contact</h1>
    <p class="mt-2 text-center text-gray-600">Have a question or just want to say hi? Send a message.</p>

    <form @submit.prevent="handleSubmit" class="mt-8 max-w-xl mx-auto space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700">Name</label>
        <input v-model="form.name" type="text" required class="mt-1 w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500" />
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700">Email</label>
        <input v-model="form.email" type="email" required class="mt-1 w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500" />
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700">Message</label>
        <textarea v-model="form.message" rows="5" required class="mt-1 w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"></textarea>
      </div>
      <button type="submit" class="w-full rounded-md bg-primary-600 px-5 py-3 text-white font-medium hover:bg-primary-700 transition">Send Message</button>
    </form>
  </section>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({ name: '', email: '', message: '' })

function handleSubmit() {
  console.log('Contact form submitted:', { ...form })
}
</script> 