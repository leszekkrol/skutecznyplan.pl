<template>
  <section class="mx-auto max-w-5xl px-4 py-24">
    <div class="grid gap-16 md:grid-cols-2">
      <article v-for="(item, index) in articlesList">
        <div class="p-4 xs:p-6 md:p-8 bg-gray-800 border border-transparent shadow-md rounded-3xl" v-bind:class="{ 'md:mt-16': index%2 == 1 }">
          <div class="flex justify-between items-center mb-5 text-gray-500">
          <span class="bg-gray-700 text-gray-400 text-xs font-medium uppercase tracking-wide inline-flex items-center px-2.5 py-0.5 rounded ">
            {{ $t('common.article') }}
          </span>
          <span class="text-sm">{{ item.publish_date }}</span>
        </div>
        <h2 class="mb-2 text-3xl md:text-4xl font-bold tracking-tight text-accent">{{ item.title }}</h2>
        <p class="mb-5 font-light text-justify leading-1 text-gray-300">{{ item.description }}</p>
        <NuxtLink 
          :to="`/${item.slug}`"
          data-splitbee-event="Podcast"
          v-bind:data-splitbee-event-episode="item.id"
          title="Czytaj więcej"
          class="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-3xl text-white bg-gray-700 hover:bg-blue-900 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">{{ $t('common.read-more') }}</NuxtLink>  
        </div>
      </article>   
    </div>  
  </section>
</template>

<script>
import { useArticlesStore } from '~/store/articles'

export default defineComponent({
  setup() {
    const articleStore = useArticlesStore()
    const articlesList = articleStore.articles

    return { articlesList }
  },
})
</script>