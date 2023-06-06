<template>
  <main id="app" class="bg-gray-900 v-lines agus">
    <Navigation />
    <Header 
      :tag="t('common.error-404')" 
      :title="t('common.not-found')" />
    <Footer />
  </main>
</template>

<script setup>
const route = useRoute();
const { t } = useI18n()

useHead({
  title: t('section.404.title') + ' | Skuteczny Plan',
  meta: [
    { hid: "description", name: "description", content: t('section.404.title') },
    { hid: "og:title", name: "og:title", content: t('section.404.title') + ' | Skuteczny Plan'  },
    { hid: "og:description", name: "og:description", content: t('section.404.title') },
    { hid: "og:url", name: "og:url", content: "https://www.skutecznyplan.pl" + route.params.fullPath }
  ],
})
</script>