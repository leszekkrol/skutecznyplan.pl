<template>
  <section class="bg-gray-800">
    <div class="mx-auto max-w-5xl pt-10 px-8 pb-12 sm:py-24">
      <div class="md:mx-auto lg:col-span-6 lg:text-left text-gray-400 sm:text-lg">
        <h2 class="mb-4 text-4xl tracking-tight font-bold text-white">
          {{ $t('section.principles.title') }}
        </h2>
        <p class="mb-4 font-light">
          {{ $t('section.principles.description') }}
        </p>
        <ul class="mb-4 font-light list-disc ml-5" v-for="item in tm('section.principles.rules')">
          <li>{{ rt(item) }}</li>
        </ul>   
      </div>
    </div>
  </section>
</template>

<script setup>
const route = useRoute();
const { t, tm, rt } = useI18n();

const currentUrl = computed(() => `https://www.skutecznyplan.pl${route.fullPath}`)
const pageTitle = computed(() => `${t('section.principles.title')} | Skuteczny Plan`)
const pageDescription = computed(() => t('section.principles.metadata.content'))

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  ogUrl: currentUrl,
  ogType: 'website',
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: currentUrl
    }
  ]
})

defineI18nRoute({
  paths: {
    pl: '/pryncypia',
    en: '/principles',
    de: '/prinzipien',
    fr: '/principes',
    it: '/principi'
  }
})
</script>