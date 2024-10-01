// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  image: {
    dir: 'assets/images'
  },
  css: [
    // 'bootstrap/dist/css/bootstrap.min.css', // 直接引入完整的 bootstrap
    '~/assets/scss/main.scss', // 手動引入需要的 bootstrap
    '~/assets/css/main.css'
  ],
  plugins: [
    '~/plugins/bootstrap.client.js'
  ],
  build: {
    transpile: ['bootstrap']
  },
  modules: [
    '@nuxt/image'
  ],
  app: {
    baseURL: '/ecosprint/',
    head: {
      title: '',
      htmlAttrs: {
        lang: 'zh'
      },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
      ],
      noscript: [
        { children: 'JavaScript is required' },
      ],
    }
  },
  runtimeConfig: { // https://stackoverflow.com/a/75581287
    public: {
      baseURL: process.env.NUXT_BASE_URL,
      apiBase: process.env.NUXT_API_BASE
    },
  },
})