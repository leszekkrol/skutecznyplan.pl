<template>
  <main id="app" class="bg-gray-900 v-lines agus">
    <Navigation />
    <Header 
      tag="Błąd 404" 
      title="Strona nie została znaleziona" />
    <Footer />
  </main>
</template>

<script setup>
const route = useRoute();

useHead({
  title: 'Strona nie znaleziona | Skuteczny Plan',
  meta: [
    { hid: "description", name: "description", content: "Przepraszamy, strona, której szukasz nie została znaleziona." },
    { hid: "twitter:image", name: "twitter:image", content: "https://www.skutecznyplan.pl/skuteczny-plan-twitter.png" },
    { hid: "twitter:card", name: "twitter:card", content: "summary_large_image" },
    { hid: "og:image",name: "og:image", content: "https://www.skutecznyplan.pl/skuteczny-plan-og.png" },
    { hid: "og:title", name: "og:title", content: "Strona nie znaleziona | Skuteczny Plan"  },
    { hid: "og:description", name: "og:description", content: "Przepraszamy, strona, której szukasz nie została znaleziona." },
    { hid: "description", name: "description", content: "Przepraszamy, strona, której szukasz nie została znaleziona." },
  ],
})
</script>