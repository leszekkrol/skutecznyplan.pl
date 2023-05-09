<template>
  <section class="py-20 sm:py-32">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-24">
        <p class="text-sm font-semibold uppercase tracking-wide text-gray-300 sm:text-base lg:text-sm xl:text-base">
          {{ $t('common.community') }} ⭐️
        </p>
        <h2 class="mt-2 leading-loose font-extrabold tracking-tight text-header sm:text-4xl text-4xl sm:leading-10 lg:leading-relaxed lg:text-6xl">{{ $t('common.what-listeners-saying') }}</h2>
        <p class="mt-4 max-w-2xl text-xl leading-7 text-gray-300 mx-auto">
          {{ $t('section.quotes.description') }}
        </p>
      </div>
      <ul class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
        <li v-for="item in quotesList" >
          <figure class="relative rounded-2xl bg-gray-800 border border-transparent shadow-md p-8 shadow-xl shadow-slate-900/10">
            <svg aria-hidden="true" width="105" height="78" class="absolute top-6 left-6 fill-gray-700">
              <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path>
            </svg>
            <blockquote class="relative">
              <p class="text-lg tracking-tight text-gray-300">{{ item.description }}</p>
            </blockquote>
            <figcaption class="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
              <div>
                <div class="font-display text-base text-white">{{ item.author }}</div>
                <div class="mt-1 text-sm text-slate-500">{{ item.position }}</div>
              </div>
            </figcaption>
          </figure>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { useQuotesStore } from '~/store/quotes'

export default defineComponent({
  setup() {
    const quoteStore = useQuotesStore()
    const quotesList = quoteStore.quotesList

    return { quotesList }
  },
})
</script>