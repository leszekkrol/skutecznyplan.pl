// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'shortcut icon', sizes: '16x16 24x24 32x32 48x48', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }
      ],
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxtjs/robots',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@nuxtjs/sitemap'
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
    locales: [
      {
        code: 'pl',
        language: 'pl-PL',
        file: 'pl-PL.json'
      },
      {
        code: 'en',
        language: 'en-EN',
        file: 'en-EN.json'
      },
      {
        code: 'de',
        language: 'de-DE',
        file: 'de-DE.json'
      },
      {
        code: 'fr',
        language: 'fr-FR',
        file: 'fr-FR.json'
      },
      {
        code: 'it',
        language: 'it-IT',
        file: 'it-IT.json'
      }
    ],
    langDir: 'locales',
  },
  site: {
    url: 'https://www.skutecznyplan.pl',
  },
  nitro: {
    prerender: {
      crawlLinks: false,
      ignore: ['/__nuxt_content/content/sql_dump.txt']
    }
  },
})