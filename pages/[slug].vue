<template>
  <main>
    <Header
      tag="podcast"
      :title="article.title"
      :description="article.description"
      :url="article.url"
     />
    <article id="blog" class="mx-auto max-w-3xl pt-10 px-4 pb-12 sm:py-24 text-gray-300">
      <ContentRenderer v-if="data" :value="data" />
      <div v-else-if="pending" class="text-gray-500">Loading content...</div>
      <div v-else-if="error" class="text-red-500">Error loading content: {{ error }}</div>
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
const { t, locale } = useI18n()
const store = useArticlesStore()

// Find article by slug in current locale
let articleId = null
for (let id = 1; id <= 8; id++) {
  const slug = t(`articles.epizode_${id}.slug`)
  if (slug === route.params.slug) {
    articleId = id
    break
  }
}

if (!articleId) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}

const articleBase = store.getArticleById(articleId)

const article = computed(() => ({
  ...articleBase,
  title: t(`articles.epizode_${articleBase.id}.title`),
  description: t(`articles.epizode_${articleBase.id}.description`),
  slug: t(`articles.epizode_${articleBase.id}.slug`),
}))

const contentPath = computed(() => `/${locale.value}/${route.params.slug}`)

// Fetch content using queryCollection from Nuxt Content v3
// Content is in content/{lang}/{slug}.md
const { data, pending, error } = await useAsyncData(`content-${route.params.slug}-${locale.value}`, () => {
  return queryCollection('content').path(contentPath.value).first()
}, {
  watch: [locale, () => route.params.slug]
})

const currentUrl = computed(() => `https://www.skutecznyplan.pl${route.fullPath}`)
const ogImage = computed(() => `https://www.skutecznyplan.pl/img/skuteczny-plan-og-${article.value.id}.png`)
const twitterImage = computed(() => `https://www.skutecznyplan.pl/img/skuteczny-plan-twitter-${article.value.id}.png`)

useSeoMeta({
  title: () => `${article.value.title} | Skuteczny Plan`,
  description: () => article.value.description,
  ogTitle: () => `${article.value.title} | Skuteczny Plan`,
  ogDescription: () => article.value.description,
  ogType: 'article',
  ogUrl: currentUrl,
  ogImage: ogImage,
  ogImageSecureUrl: ogImage,
  ogImageAlt: () => `${article.value.title} | ${article.value.description}`,
  ogSiteName: 'Skuteczny Plan',
  articleAuthor: 'Leszek W. Król',
  articlePublishedTime: () => article.value.publish_date,
  twitterCard: 'summary_large_image',
  twitterTitle: () => `${article.value.title} | Skuteczny Plan`,
  twitterDescription: () => article.value.description,
  twitterImage: twitterImage,
  twitterSite: '@leszekkrol',
  twitterCreator: '@leszekkrol',
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: currentUrl
    }
  ]
})
</script>