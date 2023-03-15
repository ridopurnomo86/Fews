// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  modules: [
    'nuxt-icon',
    '@nuxtjs/tailwindcss',
    '@morev/vue-transitions/nuxt',
    'nuxt-swiper',
    '@nuxt/image-edge',
    '@nuxtjs/device',
    '@tailvue/nuxt',
  ],
  runtimeConfig: {
    baseBackendUrl: process.env.BASE_BACKEND_URL,
    authSession: process.env.NUXT_CREDENTIAL_AUTH,
    public: {
      authSession: process.env.NUXT_CREDENTIAL_AUTH,
    },
  },
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
    domains: ['source.unsplash.com', 'ipfs.filebase.io'],
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
  ssr: true,
});
