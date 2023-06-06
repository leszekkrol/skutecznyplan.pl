// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'shortcut icon', sizes: '16x16 24x24 32x32 48x48', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }
      ],
      script: [
        { hid: 'splitbee', src: 'https://cdn.splitbee.io/sb.js', defer: true, 'data-token': 'MT7CHWGFC9OO' }
      ]
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxtjs/robots',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@funken-studio/sitemap-nuxt-3'
  ],
  css: [
    '~/assets/main.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  i18n: {
    baseUrl: 'https://www.skutecznyplan.pl/',
    defaultLocale: 'pl',
    fallbackLocale: 'pl',
    locales: [
      {
        code: 'pl',
        iso: 'pl-PL',
        file: 'pl-PL.json'
      },
      {
        code: 'en',
        iso: 'en-EN',
        file: 'en-EN.json'
      },
      {
        code: 'de',
        iso: 'de-DE',
        file: 'de-DE.json'
      },
      {
        code: 'fr',
        iso: 'fr-FR',
        file: 'fr-FR.json'
      },
      {
        code: 'it',
        iso: 'it-IT',
        file: 'it-IT.json'
      }
    ],
    langDir: 'locales/',
  },
  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: 'https://www.skutecznyplan.pl/sitemap.xml'
  },
  sitemap: {
    hostname: 'https://www.skutecznyplan.pl', 
    cacheTime: 1,
    defaults: {
      changefreq: 'monthly',
      priority: 1,
      lastmod: new Date().toISOString(),
    },
  },
})