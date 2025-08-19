export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  css: ['@/assets/css/tailwind.css'],
  components: [{ path: '~/components', pathPrefix: false }],
  app: {
    head: {
      title: 'Focusware',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Clean, modern landing site for Focusware.' }
      ]
    }
  },
  nitro: {
    preset: 'vercel'
  },
  compatibilityDate: '2025-08-19',
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  tailwindcss: {
    viewer: false
  }
}) 