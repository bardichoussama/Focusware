export default defineNuxtConfig({
  ssr: true,
  modules: [
    ['@nuxtjs/tailwindcss', { viewer: false }]
  ],
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
    preset: 'vercel-static',
    prerender: {
      routes: ['/', '/products', '/resources', '/about', '/contact']
    }
  },
  routeRules: {
    '/**': { prerender: true }
  },
  compatibilityDate: '2025-08-19',
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
}) 