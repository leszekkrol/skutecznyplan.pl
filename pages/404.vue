<template>
  <div>
    <Header 
      :tag="$t('common.error-404')" 
      :title="$t('common.not-found')" />
  </div>
</template>

<script setup>
const route = useRoute();
const { t } = useI18n()

definePageMeta({
  layout: 'empty'
})

useHead({
  title: t('section.404.title') + ' | Skuteczny Plan',
  meta: [
    { hid: "description", name: "description", content: t('section.404.title') },
    { hid: "twitter:image", name: "twitter:image", content: "https://www.skutecznyplan.pl/skuteczny-plan-twitter.png" },
    { hid: "twitter:card", name: "twitter:card", content: "summary_large_image" },
    { hid: "og:image",name: "og:image", content: "https://www.skutecznyplan.pl/skuteczny-plan-og.png" },
    { hid: "og:title", name: "og:title", content: t('section.404.title') + ' | Skuteczny Plan'  },
    { hid: "og:description", name: "og:description", content: t('section.404.title') },
    { hid: "description", name: "description", content: t('section.404.title') },
    { hid: "og:url", name: "og:url", content: "https://www.skutecznyplan.pl" + route.params.fullPath }
  ],
})
</script>