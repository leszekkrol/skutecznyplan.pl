# Skuteczny Plan

[![Nuxt](https://img.shields.io/badge/nuxt-4.svg)](https://nuxt.com)
[![Vue](https://img.shields.io/badge/vue-blue)](https://vuejs.org)
[![license](https://img.shields.io/badge/license-mit-brightgreen.svg)](https://en.wikipedia.org/wiki/MIT_License)

Welcome to Skuteczny Plan, a signpost for young entrepreneurs and those who want to try their hand at business. These are talks about current challenges for companies, new technologies, gamification or topics related to building your own startup or products. I want to talk about complicated topics in an accessible way. Podcast hosted by Leszek W. Król.

![screely-1693672255606](https://github.com/leszekkrol/skutecznyplan.pl/assets/10097678/1e442427-2ebf-4c2c-8931-4f7efaa2a4f0)

## 🛠 Technology Stack
- [Nuxt 4](https://nuxt.com) - framework for building Vue.js applications. It offers features like Server-Side Rendering, automatic code splitting, and static site generation, among others.
- [Tailwind CSS](https://tailwindcss.com) - low-level, utility-first CSS framework that promotes highly customizable designs. It enables developers to construct complex designs by assembling utility classes in HTML, thus making CSS more reusable and maintainable.
- [Pinia](https://pinia.vuejs.org) - lightweight and straightforward state management library for Vue.js. It offers an intuitive and Vuex-like API, making it easy to handle your application's state while improving performance and developer experience.
- [@nuxtjs/i18n](https://i18n.nuxtjs.org) - tool for structuring your application to support different languages and cultural regions. It allows for dynamic translation of your application, catering to a global audience.
- [@nuxt/content](https://content.nuxt.com) - file-based CMS for Nuxt, supporting Markdown, YAML, CSV and JSON content files.
- [@nuxtjs/sitemap](https://github.com/nuxt-community/sitemap-module) - automatically generates sitemap.xml for better SEO.
- [@nuxtjs/robots](https://github.com/nuxt-community/robots-module) - automatically generates robots.txt for search engine crawlers.
- [Railway](https://railway.app) - platform for deploying and hosting applications with automatic scaling and zero-config deployments.

## 🚀 Getting Started

### Prerequisites
- Node.js >= 20.19.0
- npm >= 9.0.0

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Generate static site
npm run generate
```

### Development

The development server will be available at `http://localhost:3000`

### Production Build

For production deployment on Railway:

```bash
npm run build
npm start
```

Railway will automatically detect the Node.js project and run `npm install`, `npm run build`, and `npm start` in sequence.

## 📁 Project Structure

```
├── assets/          # Static assets (images, CSS)
│   ├── img/        # Images (avatar, podcast icons)
│   └── svg/        # SVG icons
├── components/      # Vue components
│   ├── Author.vue  # Author section component
│   ├── Epizodes.vue # Episodes listing component
│   ├── Footer.vue  # Footer component
│   ├── Header.vue  # Header component
│   ├── Navigation.vue # Navigation component
│   └── Quotes.vue  # Quotes/testimonials component
├── content/         # Content files (Markdown) - Nuxt Content v3
│   ├── pl/         # Polish content (8 articles)
│   ├── en/         # English content (8 articles)
│   ├── de/         # German content (8 articles)
│   ├── fr/         # French content (8 articles)
│   └── it/         # Italian content (8 articles)
├── content.config.ts # Nuxt Content configuration
├── layouts/         # Layout components
│   ├── blog.vue    # Blog article layout
│   ├── default.vue # Default layout
│   └── empty.vue   # Empty layout
├── locales/         # Translation files (i18n)
│   ├── pl-PL.json  # Polish translations
│   ├── en-EN.json  # English translations
│   ├── de-DE.json  # German translations
│   ├── fr-FR.json  # French translations
│   └── it-IT.json  # Italian translations
├── pages/           # Application pages and routes
│   ├── [slug].vue  # Dynamic article page
│   ├── index.vue   # Homepage
│   ├── error-404.vue # 404 error page
│   ├── polityka-prywatnosci.vue # Privacy policy (PL)
│   ├── pryncypia.vue # Principles page (PL)
│   └── zasady-korzystania.vue # Terms of use (PL)
├── public/          # Public static files (favicons, images)
├── store/           # Pinia stores
│   ├── articles.js # Articles store
│   └── quotes.js   # Quotes store
├── nuxt.config.ts   # Nuxt configuration
└── tailwind.config.js # Tailwind CSS configuration
```

## 🌍 Internationalization

The application supports 5 languages:
- Polish (pl) - default
- English (en)
- German (de)
- French (fr)
- Italian (it)

Translation files are located in the `locales/` directory. The content articles are stored in Markdown format in the `content/` directory, organized by language code (pl, en, de, fr, it).

### SEO Optimization

The project includes comprehensive SEO optimization:
- **Sitemap**: Automatically generated via `@nuxtjs/sitemap` module
- **Robots.txt**: Automatically generated via `@nuxtjs/robots` module
- **Meta tags**: SEO meta tags configured per page using `useSeoMeta()` composable
- **Open Graph**: Social media sharing tags for Facebook, Twitter, etc.
- **Canonical URLs**: Proper canonical links for all pages
- **Multilingual SEO**: Hreflang tags for international content

## ✍️ Development

It brings immense joy and excitement to know that you're keen on contributing to the projects I'm working on. There's always a world of possibilities that can be explored, and having talented individuals like you onboard can truly make a massive difference. Your interest is deeply appreciated, and it's a reminder of the magic ✨ that happens when open-source developers come together and collaborate.

Open-source is the foundation of many groundbreaking innovations, and it's the community of developers like you who fuel this ceaseless evolution. Your ideas 💡, your code 💻, and your passion ❤️ can significantly impact the shape of the projects and contribute to the larger world of technology.

Let's build 🛠️, create 🎨, and revolutionize 🚀 together. Let's take these projects to new heights 🏔️ and unlock their true potential. Your skills 🎯 and ideas 💭 are more than welcome here - they're necessary, valued, and have the potential to spark real change.

So, yes, absolutely, your participation is eagerly welcomed! I'm thrilled 😄 at the prospect of working with you, and I can't wait to see the incredible contributions you'll bring to these projects. Thanks again for showing your interest and excitement. It truly means the world! 🌍

Let's do this, and let's make amazing things happen together. 🚀

## 🌟 Share with Friends!
If you're enjoying the projects and want to send some love back my way, that's music to my ears! Your support is the fuel that keeps this creative machine running, and I am forever grateful for that.

Here are some super cool ways you can express your appreciation and help keep this development train chugging:

- 🌟 Show some love with a GitHub star on the project! It's like applause, but for coders!
- 🐦 Share the love on Twitter! Tweeting about the project helps spread the word and attract more rockstars like you. Don't forget to tag me [@leszekkrol](https://twitter.com/leszekkrol) and use the hashtag `#leszekkrol`!

Your voice is powerful, and your support means the world. Thank you, from the bottom of my heart, for your interest in the development of my community. 🙏

_**PS:** Consider sponsoring my work ([Leszek W. Król](https://www.leszekkrol.com)) on [Kup mi kawę](https://buycoffee.to/leszekkrol)_

<a href="https://buycoffee.to/leszekkrol" target="_blank"><img src="https://buycoffee.to/btn/buycoffeeto-btn-primary.svg" style="width: 200px" alt="Postaw mi kawę na buycoffee.to"></a>

## ⭐️ Author

The author of the project is:
- <b><a href="http://linkedin.com/in/leszekkrol/">Leszek W. Król</a></b>

## 🧐 Bug Reports and Feature Requests

Please use the Issue Tracker tool to submit any bug reports and feature requests. When reporting bugs, remember to provide additional information about your hardware configuration and the versions of libraries you are using.

## 🔗 Follow me

<p valign="center">
  <a href="https://twitter.com/leszekkrol"><img width="20px" src="./.github/assets/twitter.svg" alt="Twitter"></a>&nbsp;&nbsp;<a href="https://github.com/leszekkrol"><img width="20px" src="./.github/assets/github.svg" alt="GitHub"></a>
</p>

<p align="center">
  <a href="https://www.skutecznyplan.pl/"><strong>See the website</strong></a> · 
  <a href="https://twitter.com/leszekkrol"><strong>Leszek W. Król on Twitter</strong></a>
</p>
