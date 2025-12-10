import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/color-mode', '@nuxt/icon'],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()]
  },
  routeRules: {
    '/about': {
      prerender: true
    },
    '/contact': {
      prerender: true
    },
    '/': {
      isr: 604800
    },
    '/projects': {
      isr: true
    },
    '/projects/**': {
      isr: true
    },
  }
})