// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: {
    typedPages: true,
  },
  routeRules: {
    '/a/**': { cache: { maxAge: 60 * 5 } },
  },
  compatibilityDate: '2024-11-01',
  ssr: false,
  css: ['~/assets/main.css'],
  devtools: { enabled: true }
})
