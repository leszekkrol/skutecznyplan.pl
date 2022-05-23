import { state } from './store'

export default {
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: "Skuteczny Plan - Podcast dla młodych przedsiębiorców",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Skuteczny Plan - Podcast dla młodych przedsiębiorców",
        author: "Leszek Król"
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Skuteczny Plan',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Skuteczny Plan - Odsłuchaj podcast',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Rozwiń praktyczne umiejętności zarządzania. Skuteczny Plan to rozmowy o aktualnych wyzwaniach dla firm, produktywnej pracy, nowych technologiach, czy grywalizacji',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://www.skutecznyplan.pl',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://www.skutecznyplan.pl/skuteczny-plan-og.png',
      },
      {
        hid: 't-type',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 't-type',
        name: 'twitter:title',
        content: 'Skuteczny Plan - Odsłuchaj podcast',
      },
      {
        hid: 't-type',
        name: 'twitter:description',
        content: 'Rozwiń praktyczne umiejętności zarządzania. Skuteczny Plan to rozmowy o aktualnych wyzwaniach dla firm, produktywnej pracy, nowych technologiach, czy grywalizacji',
      },
      {
        hid: 't-type',
        name: 'twitter:url',
        content: 'https://www.skutecznyplan.pl',
      },
      {
        hid: 't-type',
        name: 'twitter:image',
        content: 'https://www.skutecznyplan.pl/skuteczny-plan-twitter.png',
      },
      {
        hid: 't-type',
        name: 'twitter:site',
        content: '@leszekkrol',
      }
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
    
  },
  router: {
    prefetchLinks: false,
    routes: [
      {
        name: 'index',
        path: '/',
        component: 'pages/index.vue'
      },
      {
        name: 'privacy-policy',
        path: '/polityka-prywatnosci',
        component: 'pages/privacy-policy.vue'
      },
      {
        name: 'index',
        path: '/zasady-korzystania',
        component: 'pages/general-rules.vue'
      },
    ]
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
      articles = articles.map((item) => `/blog/${item.slug}`);
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
  }
};