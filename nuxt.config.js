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
    'nuxt-vue3-google-signin',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@vueuse/nuxt',
  ],
  piniaPersistedstate: {
    cookieOptions: {
      sameSite: 'strict',
    },
    storage: 'localStorage',
  },
  build: {
    transpile: ['@vuepic/vue-datepicker'],
  },
  runtimeConfig: {
    baseBackendUrl: process.env.BASE_BACKEND_URL,
    baseRedisUrl: process.env.REDIS_URL,
    authSession: process.env.NUXT_CREDENTIAL_AUTH,
    googleSession: process.env.NUXT_CREDENTIAL_GOOGLE_AUTH,
    googleClientId: process.env.GOOGLE_CLIENT_ID,
    authCredentialSession: process.env.NUXT_CREDENTIAL_AUTH_CREDENTIAL,
    public: {
      authSession: process.env.NUXT_CREDENTIAL_AUTH,
      googleSession: process.env.NUXT_CREDENTIAL_GOOGLE_AUTH,
      googleClientId: process.env.GOOGLE_CLIENT_ID,
      baseBackendUrl: process.env.BASE_BACKEND_URL,
    },
  },
  googleSignIn: {
    clientId: process.env.GOOGLE_CLIENT_ID,
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
  ssr: true,
});
