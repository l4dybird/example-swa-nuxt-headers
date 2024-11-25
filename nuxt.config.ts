// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: {
    typedPages: true,
  },
  compatibilityDate: '2024-11-01',
  ssr: false,
  css: ['~/assets/main.css'],
  devtools: { enabled: true }
})
