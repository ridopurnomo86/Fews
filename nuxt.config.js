// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Fews',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
        },
      ],
    },
  },
  auth: {
    isEnabled: true,
    globalAppMiddleware: true,
    origin: process.env.AUTH_ORIGIN || 'http://localhost:9000/',
    basePath: '/api/auth',
    enableSessionRefreshPeriodically: true,
    enableSessionRefreshOnWindowFocus: true,
    addDefaultCallbackUrl: false,
  },
  routeRules: {
    '/': { ssr: true },
    '/products/**': { swr: 3600 },
    '/order': { ssr: false },
    '/order/payment': { ssr: false },
    '/order/success': { ssr: false },
    '/api/**': { cors: true },
    '/signin': {
      cors: true,
      ssr: true,
      security: {
        xssValidator: true,
        allowedMethodsRestricter: ['POST'],
      },
    },
    '/signup': {
      ssr: true,
      security: {
        rateLimiter: {
          tokensPerInterval: 50,
          interval: 'day',
          fireImmediately: false,
          throwError: true,
        },
        allowedMethodsRestricter: ['POST'],
      },
    },
    '/profile/my-details': {
      security: {
        rateLimiter: {
          tokensPerInterval: 50,
          interval: 'day',
          fireImmediately: false,
          throwError: true,
        },
      },
      ssr: true,
    },
  },
  modules: [
    'nuxt-icon',
    '@nuxtjs/tailwindcss',
    '@morev/vue-transitions/nuxt',
    'nuxt-swiper',
    '@nuxt/image-edge',
    '@nuxtjs/device',
    'nuxt-vue3-google-signin',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-security',
    'nuxt-snackbar',
    '@sidebase/nuxt-auth',
    '@formkit/auto-animate/nuxt',
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
    googleClientId: process.env.GOOGLE_CLIENT_ID,
    authSecret: process.env.NUXT_AUTH_SECRET,
    jwtSecret: process.env.JWT_SECRET,
    stripeSecret: process.env.STRIPE_SECRET_KEY,
    stripePublishSecret: process.env.STRIPE_PUBLISHABLE_KEY,
    public: {
      googleSession: process.env.NUXT_CREDENTIAL_GOOGLE_AUTH,
      googleClientId: process.env.GOOGLE_CLIENT_ID,
      stripeSecret: process.env.STRIPE_SECRET_KEY,
      stripePublishSecret: process.env.STRIPE_PUBLISHABLE_KEY,
    },
  },
  googleSignIn: {
    clientId: process.env.GOOGLE_CLIENT_ID,
  },
  typescript: {
    strict: true,
    shim: false,
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
  nitro: {
    compressPublicAssets: true,
  },
  security: {
    headers: {
      crossOriginEmbedderPolicy: 'unsafe-none',
    },
  },
});
