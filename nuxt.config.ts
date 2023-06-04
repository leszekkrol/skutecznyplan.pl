// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Skuteczny Plan - Rozwiń praktyczne umiejętności zarządzania",
      meta: [
        { charset: "utf-8" },
        { 'http-equiv': 'Content-type', content: 'text/html;charset=UTF-8' },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "author", content: "Leszek W. Król" },
        {
          hid: "title",
          name: "title",
          content: "Skuteczny Plan - Rozwiń praktyczne umiejętności zarządzania",
        },
        {
          hid: "description",
          name: "description",
          content: "Zwiększ swoją produktywność podczas codziennej pracy siegając po dostępną, praktyczną i unikalną wiedzę.",
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'Skuteczny Plan',
        },
        {
          hid: 'og:locale',
          property: 'og:locale',
          content: 'pl_PL',
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Skuteczny Plan - Rozwiń praktyczne umiejętności zarządzania',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Zwiększ swoją produktywność podczas codziennej pracy siegając po dostępną, praktyczną i unikalną wiedzę.',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://www.skutecznyplan.pl',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'http://www.skutecznyplan.pl/img/skuteczny-plan-og.png',
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: 'http://www.skutecznyplan.pl/img/skuteczny-plan-og.png',
        },
        {
          hid: 'og:image:type',
          property: 'og:image:type',
          content: 'image/png',
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: 'Skuteczny Plan to rozmowy o aktualnych wyzwaniach dla firm, produktywnej pracy, nowych technologiach, czy grywalizacji. Zwiększ swoją produktywność podczas codziennej pracy siegając po dostępną, praktyczną i unikalną wiedzę, która pomoże Tobie odmienić sposób w jaki pracujesz każdego dnia.',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: 'https://www.skutecznyplan.pl',
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: 'http://www.skutecznyplan.pl/img/skuteczny-plan-twitter.png',
        },
        {
          hid: 'twitter:domain',
          name: 'twitter:domain',
          content: 'skutecznyplan.pl',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Skuteczny Plan - Rozwiń praktyczne umiejętności zarządzania',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Zwiększ swoją produktywność podczas codziennej pracy siegając po dostępną, praktyczną i unikalną wiedzę.',
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: '@leszekkrol',
        },
        {
          hid: 'twitter:creator',
          name: 'twitter:creator',
          content: '@leszekkrol',
        },
      ],
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
    '@pinia/nuxt',
    '@nuxtjs/i18n'
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
})