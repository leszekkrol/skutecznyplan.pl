<template>
  <main>
    <Header
      tag="podcast"
      :title="t('articles.epizode_' + article.id + '.title')"
      :description="t('articles.epizode_' + article.id + '.description')"
      :url="article.url"
     />
    <article class="mx-auto max-w-3xl pt-10 px-4 pb-12 sm:py-24 text-gray-300">
      <ContentDoc id="blog" :head="false" :path="article.filename" />
      <div class="p-10">
        <div class="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
          <img src="~/assets/img/avatar.jpg" alt="Leszek W. Król" class="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start">
          <div class="flex flex-col text-gray-600">
            <h4 class="text-lg font-semibold">Leszek W. Król</h4>
            <p>{{ $t('section.slug.description') }}</p>
          </div>
        </div>
      </div>
    </article>
  </main>
</template>

<script setup>

import { useArticlesStore } from '~/store/articles'

definePageMeta({
  layout: 'blog'
})

const route = useRoute();
const { t, i18n } = useI18n()
const store = useArticlesStore()
const article = store.getArticleBySlug(route.params.slug)

useHead({
  title: t('articles.epizode_' + article.id + '.title') + " | Skuteczny Plan",
    meta: [
    {
      hid: "title",
      name: "title",
      content: t('articles.epizode_' + article.id + '.title') + " | Skuteczny Plan",
    },
    {
      hid: "description",
      name: "description",
      content: t('articles.epizode_' + article.id + '.description'),
    },
    {
      hid: 'article:published_time',
      property: 'article:published_time',
      content: article.publish_date,
    },
    {
      hid: 'article:author',
      property: 'article:author',
      content: 'Leszek W. Król',
    },
    {
      hid: 'og:site_name',
      property: 'og:site_name',
      content: 'Skuteczny Plan',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: t('articles.epizode_' + article.id + '.title') + " | Skuteczny Plan",
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: t('articles.epizode_' + article.id + '.description'),
    },
    {
      hid: 'og:publish_date',
      property: 'og:publish_date',
      content: article.publish_date,
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: 'https://www.skutecznyplan.pl' + route.params.fullPath,
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: 'http://www.skutecznyplan.pl/img/skuteczny-plan-og-' + article.id + '.png',
    },
    {
      hid: 'og:image:secure_url',
      property: 'og:image:secure_url',
      content: 'http://www.skutecznyplan.pl/img/skuteczny-plan-og-' + article.id + '.png',
    },
    {
      hid: 'og:image:type',
      property: 'og:image:type',
      content: 'image/png',
    },
    {
      hid: 'og:image:alt',
      property: 'og:image:alt',
      content: t('articles.epizode_' + article.id + '.title') + " | " + t('articles.epizode_' + article.id + '.description'),
    },
    {
      hid: 'twitter:card',
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      hid: 'twitter:url',
      name: 'twitter:url',
      content: 'https://www.skutecznyplan.pl' + route.params.fullPath,
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: 'http://www.skutecznyplan.pl/img/skuteczny-plan-twitter-' + article.id + '.png',
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: t('articles.epizode_' + article.id + '.title') + " | Skuteczny Plan",
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: t('articles.epizode_' + article.id + '.description'),
    },
  ]
})
</script>