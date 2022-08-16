import { state } from './store'

export default {
  target: 'static',
  generate: {
    fallback: true
  },
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    htmlAttrs: {
      lang: 'pl'
    },
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
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      { hid: 'splitbee', src: 'https://cdn.splitbee.io/sb.js', defer: true, 'data-token': 'MT7CHWGFC9OO' }
    ]
  },
  /*
   ** Global CSS
   */
  css: [
    '@/assets/main.css',
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxt/postcss8',
    // Doc: https://github.com/nuxt-community/google-fonts-module
    "@nuxtjs/google-fonts",
  ],
  modules: [
   '@nuxtjs/sitemap',
   '@nuxtjs/robots',
   '@nuxtjs/markdownit'
  ],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  googleFonts: {
    families: {
      Inter: true
    }
  },
  tailwindcss: {
    jit: true
  },
  sitemap: {
    hostname: 'https://www.skutecznyplan.pl',
    gzip: true,
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    },
    routes: async () => {
      let articles = state().articles
      articles = articles.map((item) => `/${item.slug}`);
      console.log(articles);

      return articles
    }
  },
  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: 'https://www.skutecznyplan.pl/sitemap.xml'
  },
  markdownit: {
    preset: 'default',
    runtime: true,
    linkify: true,
    breaks: true,
    use: [
      'markdown-it-div',
      'markdown-it-attrs'
    ]
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
};