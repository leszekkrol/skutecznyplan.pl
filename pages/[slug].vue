<template>
  <main>
    <Header
      tag="podcast"
      :title="article.title"
      :description="article.description"
      :url="article.url"
     />
    <article class="mx-auto max-w-3xl pt-10 px-4 pb-12 sm:py-24 text-gray-300">
      <ContentDoc :path="article.slug">
        <template #not-found>
          Not found
        </template>
      </ContentDoc>
      <div class="p-10">
        <div class="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
          <img src="~/assets/img/avatar.jpg" alt="Leszek W. Król" class="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start">
          <div class="flex flex-col text-gray-600">
            <h4 class="text-lg font-semibold">Leszek W. Król</h4>
            <p>Na co dzień towarzyszę firmom i instytucjom w projektowaniu strategii oraz opracowywaniu nowych produktów i usług.</p>
          </div>
        </div>
      </div>
    </article>
  </main>
</template>

<script>

import { useArticlesStore } from '~/store/articles'

export default {
  layout: 'blog',
  name: 'blog',
  setup() {
    const route = useRoute();
    const store = useArticlesStore()
    const article = store.getArticleBySlug(route.params.slug)

    return { article }
  },
}

</script>