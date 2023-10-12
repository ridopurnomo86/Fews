/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      gridTemplateColumns: {
        fluid: 'repeat(auto-fit, minmax(200px, 1fr))',
      },
    },
  },
  important: true,
  content: [
    './components/**/*.{js,vue,ts}',
    './views/**/*.{js,vue,ts}',
    './layouts/**/*.{js,vue,ts}',
    './pages/**/*.{vue,js,ts}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  plugins: [require('@tailwindcss/line-clamp')],
};
