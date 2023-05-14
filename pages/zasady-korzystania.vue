<template>
  <section class="bg-gray-800">
    <div class="mx-auto max-w-5xl pt-10 px-8 pb-12 sm:py-24">
      <div class="md:mx-auto lg:col-span-6 lg:text-left text-gray-400 sm:text-lg">
        <h2 class="mb-4 text-4xl tracking-tight font-bold text-white">{{ $t('section.terms-of-use.title') }}</h2>
        <p class="mb-4 font-light">{{ $t('section.terms-of-use.description') }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const route = useRoute();

useHead({
  title: 'Zasady korzystania | Skuteczny Plan',
  meta: [
    { hid: "description", name: "description", content: "Wszelkie treści zawarte na naszej stronie można wykorzystywać wyłącznie do niekomercyjnego użytku prywatnego. Jeśli chcesz wykorzystać je w celach publicznych lub komercyjnych." },
    { hid: "twitter:image", name: "twitter:image", content: "https://www.skutecznyplan.pl/skuteczny-plan-twitter.png" },
    { hid: "twitter:card", name: "twitter:card", content: "summary_large_image" },
    { hid: "og:image",name: "og:image", content: "https://www.skutecznyplan.pl/skuteczny-plan-og.png" },
    { hid: "og:title", name: "og:title", content: "Zasady korzystania | Skuteczny Plan"  },
    { hid: "og:description", name: "og:description", content: "Wszelkie treści zawarte na naszej stronie można wykorzystywać wyłącznie do niekomercyjnego użytku prywatnego. Jeśli chcesz wykorzystać je w celach publicznych lub komercyjnych." },
    { hid: "description", name: "description", content: "Wszelkie treści zawarte na naszej stronie można wykorzystywać wyłącznie do niekomercyjnego użytku prywatnego. Jeśli chcesz wykorzystać je w celach publicznych lub komercyjnych." },
    { hid: "og:url", name: "og:url", content: "https://www.skutecznyplan.pl" + route.params.fullPath }
  ],
})

defineI18nRoute({
  paths: {
    pl: '/zasady-korzystania',
    en: '/terms-of-use'
  }
})
</script>