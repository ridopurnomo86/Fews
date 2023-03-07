// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    baseBackendUrl: process.env.BASE_BACKEND_URL,
    authSecret: process.env.NUXT_AUTH_SECRET,
    origin: process.env.NUXT_AUTH_ORIGIN,
  },
  modules: [
    'nuxt-icon',
    '@nuxtjs/tailwindcss',
    '@morev/vue-transitions/nuxt',
    'nuxt-swiper',
    '@nuxt/image-edge',
    '@nuxtjs/device',
    '@sidebase/nuxt-auth',
    '@tailvue/nuxt',
  ],
  auth: {
    origin: process.env.NUXT_AUTH_ORIGIN,
    basePath: '/api/auth',
    enableSessionRefreshPeriodically: false,
    enableSessionRefreshOnWindowFocus: false,
    enableGlobalAppMiddleware: false,
    defaultProvider: undefined,
    globalMiddlewareOptions: {
      // Whether to allow access to 404 pages without authentication. Set this to `false` to force users to sign-in before seeing `404` pages. Setting this to false may lead to vue-router problems (as the target page does not exist)
      allow404WithoutAuth: true,
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
});
