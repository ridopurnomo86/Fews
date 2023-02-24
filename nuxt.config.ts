// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    baseBackendUrl: process.env.NUXT_BACKEND_URL,
  },
  modules: [
    'nuxt-icon',
    '@nuxtjs/tailwindcss',
    '@morev/vue-transitions/nuxt',
    'nuxt-swiper',
    '@nuxt/image-edge',
    '@nuxtjs/device',
  ],
  typescript: {
    strict: true,
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: false,
    injectPosition: 0,
    viewer: true,
  },
  image: {
    domains: ['source.unsplash.com'],
  },
  device: {
    refreshOnResize: true,
  },
  swiper: {
    // Swiper options
    //----------------------
    // prefix: 'Swiper',
    // styleLang: 'css',
    // modules: ['navigation', 'pagination'], // all modules are imported by default
  },
});
