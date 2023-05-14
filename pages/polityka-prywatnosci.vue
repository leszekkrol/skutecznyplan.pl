<template>
  <section class="bg-gray-800">
    <div class="mx-auto max-w-5xl pt-10 px-8 pb-12 sm:py-24">
      <div class="md:mx-auto lg:col-span-6 lg:text-left text-gray-400 sm:text-lg">
        <h2 class="mb-4 text-4xl tracking-tight font-bold text-white">
          {{ $t('section.privacy-policy.title') }}
        </h2>
        <p class="mb-4 font-light">
          {{ $t('section.privacy-policy.description_1') }}
        </p>
        <p class="mb-4 font-light">{{ $t('section.privacy-policy.description_2') }}</p>
        <ul class="mb-4 font-light list-disc ml-5" v-for="item in tm('section.privacy-policy.description_3')">
          <li>{{ rt(item) }}</li>
        </ul>

        <p class="mb-4 font-light">{{ $t('section.privacy-policy.description_4') }}</p>

        <h4 class="mb-4 text-xl tracking-tight font-bold text-gray-400">{{ $t('section.privacy-policy.description_5') }}</h4>
        <p class="mb-4 font-light">{{ $t('section.privacy-policy.description_6') }}</p>

        <p class="mb-4 font-light">{{ $t('section.privacy-policy.description_7') }}</p>
        <ul class="mb-4 font-light list-disc ml-5" v-for="item in tm('section.privacy-policy.description_8')">
          <li>{{ rt(item) }}</li>
        </ul>

        <p class="mb-4 font-light">{{ $t('section.privacy-policy.description_9') }}</p>

        <h4 class="mb-4 text-xl tracking-tight font-bold text-gray-400">{{ $t('section.privacy-policy.description_10') }}</h4>
        <p class="mb-4 font-light">{{ $t('section.privacy-policy.description_11') }}</p>

        <h4 class="mb-4 text-xl tracking-tight font-bold text-gray-400">{{ $t('section.privacy-policy.description_12') }}</h4>
        <p class="mb-4 font-light">{{ $t('section.privacy-policy.description_13') }}</p>
        <ul class="mb-4 font-light list-disc ml-5" v-for="item in tm('section.privacy-policy.description_14')">
          <li>{{ rt(item) }}</li>
        </ul>

        <p class="mb-4 font-light">{{ $t('section.privacy-policy.description_15') }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const route = useRoute();
const { t, tm, rt } = useI18n();

useHead({
  title: t('section.privacy-policy.title') + ' | Skuteczny Plan',
  meta: [
    { hid: 'title', name: "title", content: t('section.privacy-policy.title') + ' | Skuteczny Plan' },
    { hid: "description", name: "description", content: t('section.privacy-policy.metadata.content') },
    { hid: "twitter:image", name: "twitter:image", content: "https://www.skutecznyplan.pl/skuteczny-plan-twitter.png" },
    { hid: "twitter:card", name: "twitter:card", content: "summary_large_image" },
    { hid: "og:image",name: "og:image", content: "https://www.skutecznyplan.pl/skuteczny-plan-og.png" },
    { hid: "og:title", name: "og:title", content: t('section.privacy-policy.title') + ' | Skuteczny Plan'  },
    { hid: "og:description", name: "og:description", content: t('section.privacy-policy.metadata.content') },
    { hid: "description", name: "description", content: t('section.privacy-policy.metadata.content') },
    { hid: "og:url", name: "og:url", content: "https://www.skutecznyplan.pl" + route.params.fullPath }
  ],
})

defineI18nRoute({
  paths: {
    pl: '/polityka-prywatnosci',
    en: '/privacy-policy'
  }
})
</script>